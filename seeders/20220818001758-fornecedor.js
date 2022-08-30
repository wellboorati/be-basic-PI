"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Fornecedores",
      [
        {
          nome_empresa: "Fornecedor 1",
          nome_contato: "Contato 1",
          produto: "Camiseta Gola V",
          telefone: "34991536849",
          email: "fornecedor1@gmail.com",
          endereco: "Rua do Fornecedor",
          numero: "1",
          complemento: "Casa",
          bairro: "Brasil",
          cidade: "São Paulo",
          estado: "São Paulo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome_empresa: "Fornecedor 2",
          nome_contato: "Contato 2",
          produto: "Camiseta Gola o",
          telefone: "34991536849",
          email: "fornecedor2@gmail.com",
          endereco: "Rua do Fornecedor",
          numero: "2",
          complemento: "Casa",
          bairro: "Brasil",
          cidade: "São Paulo",
          estado: "São Paulo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Fornecedores", null, {});
  },
};
