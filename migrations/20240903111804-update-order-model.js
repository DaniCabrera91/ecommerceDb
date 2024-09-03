/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      UserId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      productIds: {
        type: Sequelize.JSON,
        allowNull: false,
        defaultValue: [],
      },
      productNames: {
        type: Sequelize.JSON,
        allowNull: false,
        defaultValue: [],
      },
      productPrices: {
        type: Sequelize.JSON,
        allowNull: false,
        defaultValue: [],
      },
      categoryIds: {
        type: Sequelize.JSON,
        allowNull: false,
        defaultValue: [],
      },
      orderDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      deliveryDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};
