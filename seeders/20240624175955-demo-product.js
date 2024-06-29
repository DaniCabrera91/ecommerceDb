'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [
      {
        productName: 'Camiseta de algodón unisex',
        price: '20',
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'Laptop Dell XPS 13',
        price: 1200.98,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'Camisa leñador cuadros roja',
        price: 35.25,
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'El señor de los anillos las dos torres de J.R.R. Tolkien',
        price: 30,
        CategoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'Audífonos inalámbricos Sony WH-1000XM5',
        price: 350,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: '1984 de George Orwell',
        price: 8.50,
        CategoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: '¿Que es el arte? de León Tolstói',
        price: 12.55,
        CategoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'Jeans azules clásicos',
        price: 42.98,
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])  
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
