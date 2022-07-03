'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produto_estoque extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      Produto_estoque.hasMany(models.Itens_pedido, {
        foreignKey: 'produto_estoque_id'
      })

      Produto_estoque.belongsTo(models.Fornecedores, {
        foreignKey: 'fornecedor_id'
      })
    }
  }
  Produto_estoque.init({
    nome: DataTypes.STRING,
    preco: DataTypes.STRING,
    quantidade_disponivel: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Produto_estoque',
  });
  return Produto_estoque;
};