const database = require("../models");
const { validationResult } = require('express-validator');

const fornecedorController = {
  cadastro_fornecedor: async (req, res) => {
    const {
      empresa,
      nome,
      produto,
      telefone,
      email,
      endereco,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
    } = req.body;

    const fornecedor = await database.Fornecedores.create({
    nome_empresa: empresa,
    nome_contato: nome,
    produto,
    telefone,
    email,
    endereco,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
    });

    console.log(fornecedor);

    return res.json({
      id: fornecedor.id,
      nome_empresa: fornecedor.nome,
      nome_contato: fornecedor.nome,
      produto: fornecedor.nome,
      telefone: fornecedor.telefone,
      email: fornecedor.email,
      endereco: fornecedor.endereco,
      numero: fornecedor.numero,
      complemento: fornecedor.complemento,
      bairro: fornecedor.bairro,
      cidade: fornecedor.cidade,
      estado: fornecedor.estado,
    });

  },

  fornecedorRegistration: (req, res) => {
    return res.render("fornecedor");
  },

};

module.exports = fornecedorController;
