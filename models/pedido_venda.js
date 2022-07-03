'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido_venda extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      Pedido_venda.hasMany(models.itens_pedido, {
        foreignKey: 'pedido_id'
      })


      Pedido_venda.belongsTo(models.Clientes, {
        foreignKey: 'cliente_id'
      })
      Pedido_venda.belongsTo(models.Endereco_cliente, {
        foreignKey: 'endereco_id'
      })
    }
  }
  Pedido_venda.init({
    valor_total_pedido: DataTypes.STRING,
    data_entrega: DataTypes.DATE,
    data_pedido: DataTypes.DATE,
    valor_frete: DataTypes.STRING,
    cupom_desconto: DataTypes.BOOLEAN,
    status_pedido: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pedido_venda',
  });
  return Pedido_venda;
};