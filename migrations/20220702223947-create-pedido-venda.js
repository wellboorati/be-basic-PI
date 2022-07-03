'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pedido_vendas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cliente_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Clientes', key: 'id'}
      },
      endereco_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Endereco_cliente', key: 'id'}
      },
      valor_total_pedido: {
        type: Sequelize.STRING
      },
      data_entrega: {
        type: Sequelize.DATE
      },
      data_pedido: {
        type: Sequelize.DATE
      },
      valor_frete: {
        type: Sequelize.STRING
      },
      cupom_desconto: {
        type: Sequelize.BOOLEAN
      },
      status_pedido: {
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
    await queryInterface.dropTable('Pedido_vendas');
  }
};