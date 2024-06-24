'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
     {
      firstName: 'Jhon',
      lastName: 'Doe',
      email: 'jhon@doe.com',
      password: '123456',
      address: '123 Main Street',
      phone: '321457890',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane@smith.com',
      password: '654321',
      address: '456 Oak Street',
      phone: '034918372',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      firstName: 'Denis',
      lastName: 'Thompson',
      email: 'denis@thompson.com',
      password: '789012',
      address: '789 Pineview Street',
      phone: '582314569',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      firstName: 'Sarah',
      lastName: 'Freeman',
      email: 'sarah@freeman.com',
      password: '345678',
      address: '432 Lambeth Street',
      phone: '938291823',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      firstName: 'Daniel',
      lastName: 'Cavill',
      email: 'daniel@cavill.com',
      password: '901234',
      address: '543 Elm Street',
      phone: '039482344',
      createdAt: new Date(),
      updatedAt: new Date()
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
