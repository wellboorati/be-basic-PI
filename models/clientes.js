"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Clientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Clientes.hasMany(models.Cliente_endereco, {
        foreignKey: "cliente_id",
      });

      Clientes.hasMany(models.Pedido, {
        foreignKey: "cliente_id",
      });
    }
  }

  Clientes.init(
    {
      nome: DataTypes.STRING,
      senha: DataTypes.STRING,
      email: DataTypes.STRING,
      sexo: DataTypes.STRING,
      cpf: DataTypes.STRING,
      data_nascimento: DataTypes.DATE,
      telefone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Clientes",
    }
  );
  return Clientes;
};
