"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Images", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      url: {
        type: Sequelize.STRING,
      },
      cliente_id: {
        type: Sequelize.INTEGER,
        // allowNull: false,
        // references: { model: 'Clientes', key: 'id'}
      },
      produto_estoque_id: {
        type: Sequelize.STRING,
        // allowNull: false,
        // references: { model: 'Prduto_estoque', key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Images");
  },
};
