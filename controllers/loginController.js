
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
      console.log(req.session);

      if (usuarioSalvo) {
        const senhaValida = senha === usuarioSalvo.senha;
        if (senhaValida) {
          if (usuarioSalvo.admnistrador) {
            res.status(200).render("adminpage", {
              usuarioSalvo: req.session.usuario
            });
          }
          if (req.query.carrinho) {
            res.redirect(`/carrinho?id=${req.query.id}`);
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

  doLogout: async (req, res) => {
    req.session.destroy()
    res.redirect('/')
  },


  updateSenha: async (id, senha) => {
    try {
      const { email, senha } = req.body;
      return await Clientes.update({ senha }, { where: { id } }
      )
    } catch (error) {
      throw new Error(error)
    }
  },

  redefinirSenha: async (req, res) => {
    const { id } = req.params
    const { email, senha } = req.body;

    try {
        const usuarioSenha = await database.Clientes.update({ senha },
            {where: { id }})

        return res.status(200).json(usuarioSenha)

    } catch (error) {
        return res.status(500).json(error.message)
    }
},

  loginPage: (req, res) => {
    return res.render("login");
  },
};

module.exports = loginController;
