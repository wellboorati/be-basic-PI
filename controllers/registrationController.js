const database = require("../models");

const registrationController = {
  cadastro: async (req, res) => {
    const {
      name,
      email,
      gender,
      cpf,
      birthdate,
      telefone,
      password,
      confirm_password,
    } = req.body;
    // const hash = await bcrypt.hash(senha, 10);
    const usuario = await database.Clientes.create({
      nome: name,
      email,
      senha: password,
      sexo: gender,
      cpf,
      data_nascimento: birthdate,
      telefone,
    });

    console.log(usuario);

    return res.json({
      id: usuario.id,
      nome: usuario.nome,
      senha: usuario.senha,
      email: usuario.email,
      sexo: usuario.sexo,
      cpf: usuario.cpf,
      data_nascimento: usuario.data_nascimento,
      telefone: usuario.telefone,
    });
  },

  registrationPage: (req, res) => {
    return res.render("registration");
  },

  adressRegistrationPage: (req, res) => {
    return res.render("adressregistration");
  },
};

module.exports = registrationController;
