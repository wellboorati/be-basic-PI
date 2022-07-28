const database = require("../models");
const { validationResult } = require('express-validator');

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
      address,
      number,
      complemento,
      bairro,
      city,
      state,
      cep,
    } = req.body;

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

    const endereco = await database.Cliente_endereco.create({
      cliente_id: usuario.id,
      endereco: address,
      numero: number,
      complemento,
      bairro,
      cidade: city,
      estado: state,
      cep,
      });

    return res.json({
      id: usuario.id,
      nome: usuario.nome,
      senha: usuario.senha,
      email: usuario.email,
      sexo: usuario.sexo,
      cpf: usuario.cpf,
      data_nascimento: usuario.data_nascimento,
      telefone: usuario.telefone,
      // id: endereco.id,
      endereco: endereco.endereco,
      numero: endereco.numero,
      complemento: endereco.complemento,
      bairro: endereco.bairro,
      cidade: endereco.cidade,
      estado: endereco.estado,
      cep: endereco.cep,
    });
  },

  registrationPage: (req, res) => {
    return res.render("registration");
  },

};

module.exports = registrationController;