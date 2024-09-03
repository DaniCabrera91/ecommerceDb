'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Orders', 'products', {
      type: Sequelize.JSON,
      allowNull: false,
      defaultValue: '[]' // Inicializamos el campo con un array vacío
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Orders', 'products');
  }
};
