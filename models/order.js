'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User, { foreignKey: 'UserId' });
      Order.belongsToMany(models.Product, { through: models.OrderProduct });
    }
  }

  Order.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // Detalles del producto
    productIds: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [],
    },
    productNames: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [],
    },
    productPrices: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [],
    },
    categoryIds: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [],
    },
    // Fechas
    orderDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    deliveryDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Order',
  });

  return Order;
};
