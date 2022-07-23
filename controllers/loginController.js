const database = require("../models");

const loginController = {
  login: async (req, res) => {
    try {
      const { email, senha } = req.body;
      const usuario = await database.Clientes.findOne({
        where: { email: email },
      });
      console.log(senha);
      console.log(usuario.senha);
      if (usuario) {
        const senhaValida = senha === usuario.senha;
        if (senhaValida) {
          res.status(200).render("index", {
            message: "Usuário logado",
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
