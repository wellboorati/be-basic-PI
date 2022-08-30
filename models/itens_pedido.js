"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Itens_pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Itens_pedido.belongsTo(models.Produto_estoque, {
        foreignKey: "produto_estoque_id",
      });
      Itens_pedido.belongsTo(models.Pedido, {
        foreignKey: "pedido_id",
      });
    }
  }
  Itens_pedido.init(
    {
      quantidade: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Itens_pedido",
      tableName: "Itens_pedido",
    }
  );
  return Itens_pedido;
};
