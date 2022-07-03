'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Endereco_cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      Endereco_cliente.hasMany(models.pedido_venda, {
        foreignKey: 'endereco_id'
      })


      Endereco_cliente.belongsTo(models.Clientes, {
        foreignKey: 'cliente_id'
      })
    }
  }
  Endereco_cliente.init({
    endereco: DataTypes.STRING,
    numero: DataTypes.STRING,
    complemento: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    cep: DataTypes.STRING,
    endereco_entrega: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Endereco_cliente',
  });
  return Endereco_cliente;
};