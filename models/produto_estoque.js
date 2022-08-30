"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Produto_estoque extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Produto_estoque.hasMany(models.Itens_pedido, {
        foreignKey: "produto_estoque_id",
      });

      Produto_estoque.belongsTo(models.Fornecedores, {
        foreignKey: "fornecedor_id",
      });

      Produto_estoque.belongsTo(models.Categoria, {
        foreignKey: "categoria_id",
      });
    }
  }
  Produto_estoque.init(
    {
      nome: DataTypes.STRING,
      preco: DataTypes.INTEGER,
      cor: DataTypes.STRING,
      p_quantidade_disponivel: DataTypes.INTEGER,
      m_quantidade_disponivel: DataTypes.INTEGER,
      g_quantidade_disponivel: DataTypes.INTEGER,
      image_url: DataTypes.STRING,
      ativo: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Produto_estoque",
      tableName: "Produto_estoque",
    }
  );
  return Produto_estoque;
};
