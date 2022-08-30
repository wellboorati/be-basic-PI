const database = require("../models");
const { validationResult } = require("express-validator");
const multer = require("multer");
const upload = multer({ dest: "public/images/userUpload/" });

const registrationController = {
  cadastro: async (req, res) => {
    const { filename } = req.file;
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
      admnistrador: false,
      image_url: filename,
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

    return res.redirect("/login");
  },

  registrationPage: (req, res) => {
    return res.render("registration");
  },
};

module.exports = registrationController;
