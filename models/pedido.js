'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      Pedido.hasMany(models.Itens_pedido, {
        foreignKey: 'pedido_id'
      })

      Pedido.belongsTo(models.Clientes, {
        foreignKey: 'cliente_id'
      })
      Pedido.belongsTo(models.Cliente_endereco, {
        foreignKey: 'endereco_cliente_id'
      })
    }
  }
  Pedido.init({
    valor_total_pedido: DataTypes.INTEGER,
    data_entrega: DataTypes.DATE,
    data_pedido: DataTypes.DATE,
    valor_frete: DataTypes.INTEGER,
    cupom_desconto: DataTypes.BOOLEAN,
    status_pedido: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};