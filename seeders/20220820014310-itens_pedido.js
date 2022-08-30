"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Itens_pedido",
      [
        {
          produto_estoque_id: 1,
          pedido_id: 1,
          quantidade: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produto_estoque_id: 2,
          pedido_id: 2,
          quantidade: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produto_estoque_id: 3,
          pedido_id: 3,
          quantidade: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produto_estoque_id: 4,
          pedido_id: 4,
          quantidade: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produto_estoque_id: 5,
          pedido_id: 5,
          quantidade: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produto_estoque_id: 6,
          pedido_id: 6,
          quantidade: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produto_estoque_id: 7,
          pedido_id: 7,
          quantidade: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produto_estoque_id: 8,
          pedido_id: 8,
          quantidade: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Itens_pedido", null, {});
  },
};
