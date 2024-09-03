'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Orders', 'orderDate', {
      type: Sequelize.DATEONLY,
      allowNull: false,
    });

    await queryInterface.changeColumn('Orders', 'deliveryDate', {
      type: Sequelize.DATEONLY,
      allowNull: false,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Orders', 'orderDate', {
      type: Sequelize.DATEONLY,
      allowNull: true,
    });

    await queryInterface.changeColumn('Orders', 'deliveryDate', {
      type: Sequelize.DATEONLY,
      allowNull: true,
    });
  }
};
