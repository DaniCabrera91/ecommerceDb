'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsTo(User, { foreignKey: 'userId' })
      Review.belongsTo(Product, { foreignKey: 'productId' })
    }
  }
  Review.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    postDate: DataTypes.DATE,
    productId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};