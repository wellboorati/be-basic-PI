const database = require("../models");

const loginController = {
  login: async (req, res) => {
    try {
      const { email, senha } = req.body;
      const usuarioSalvo = await database.Clientes.findOne({
        where: { email: email },
      })
      req.session.usuario = usuarioSalvo;;
      console.log(senha);
      console.log(usuarioSalvo.senha);
      if (usuarioSalvo) {
        const senhaValida = senha === usuarioSalvo.senha;
        if (senhaValida) {
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
    // req.session.usuario = usuarioSalvo;
  },

  loginPage: (req, res) => {
    return res.render("login");
  },
};

module.exports = loginController;
