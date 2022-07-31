
const database = require("../models");

const loginController = {
  login: async (req, res) => {
    try {
      const { email, senha } = req.body;
      const usuarioSalvo = await database.Clientes.findOne({
        where: { email: email },
      })
      req.session.usuario = usuarioSalvo;
      console.log(senha);
      console.log(usuarioSalvo.senha);
      if (usuarioSalvo) {
        const senhaValida = senha === usuarioSalvo.senha;
        if (senhaValida) {
          if (usuarioSalvo.admnistrador) {
            res.status(200).render("resetPassword", {
              usuarioSalvo: req.session.usuario
            });
          }
          res.status(200).render("index", {
            usuarioSalvo: req.session.usuario
          });
        } else {
          res.status(401).json("Senha incorreta, tente novamente.");
        }
      } else {
        res.status(404).json("Usuário não encontrado.");
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("Algo deu errado, tente novamente.");
    }
  },

  loginPage: (req, res) => {
    return res.render("login");
  },
};

module.exports = loginController;
