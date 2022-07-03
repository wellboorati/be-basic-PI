'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Itens_pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      produto_estoque_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Produto_estoque', key: 'id'}
      },
      pedido_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Pedido_venda', key: 'id'}
      },
      quantidade: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Itens_pedidos');
  }
};