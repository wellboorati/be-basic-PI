'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categoria', [
  {
    descricao: 'Gola V',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    descricao: 'Gola O',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
], {});
},
  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Categoria', null, {});

  }
};