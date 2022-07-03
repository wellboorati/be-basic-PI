'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fornecedores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Fornecedores.hasMany(models.Produto_estoque, {
        foreignKey: 'fornecedor_id'
      })

   }
  }
  Fornecedores.init({
    nome_empresa: DataTypes.STRING,
    nome_contato: DataTypes.STRING,
    produto: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    endereco: DataTypes.STRING,
    numero: DataTypes.STRING,
    complemento: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Fornecedores',
  });
  return Fornecedores;
};