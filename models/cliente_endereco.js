"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cliente_endereco extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cliente_endereco.hasMany(models.Pedido, {
        foreignKey: "endereco_cliente_id",
      });

      Cliente_endereco.belongsTo(models.Clientes, {
        foreignKey: "cliente_id",
      });
    }
  }
  Cliente_endereco.init(
    {
      endereco: DataTypes.STRING,
      numero: DataTypes.STRING,
      complemento: DataTypes.STRING,
      bairro: DataTypes.STRING,
      cidade: DataTypes.STRING,
      estado: DataTypes.STRING,
      cep: DataTypes.STRING,
      endereco_entrega: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Cliente_endereco",
    }
  );
  return Cliente_endereco;
};
