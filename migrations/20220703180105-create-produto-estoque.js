'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Produto_estoque', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fornecedor_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Fornecedores', key: 'id'}
      },
      categoria_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Categoria', key: 'id'}
      },
      nome: {
        type: Sequelize.STRING
      },
      preco: {
        type: Sequelize.INTEGER
      },
      cor: {
        type: Sequelize.STRING
      },
      p_quantidade_disponivel: {
        type: Sequelize.INTEGER
      },
      m_quantidade_disponivel: {
        type: Sequelize.INTEGER
      },
      g_quantidade_disponivel: {
        type: Sequelize.INTEGER
      },
      image_url: {
        type: Sequelize.STRING
      },
      ativo: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Produto_estoque');
  }
};