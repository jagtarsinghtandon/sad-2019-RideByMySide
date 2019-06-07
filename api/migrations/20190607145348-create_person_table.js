'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER }
    */
    return queryInterface.createTable("person",{
      id:{
        type: Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
    },
    
    firstname: Sequelize.STRING(45),
    lastname: Sequelize.STRING(45),
    email: Sequelize.STRING(45),
    password: Sequelize.STRING(45),
    dateofbirth: Sequelize.STRING(45),
    contactno: Sequelize.STRING(45),
    gender: Sequelize.STRING(45),
    persontype: Sequelize.STRING(45),
    interests: Sequelize.STRING(45),
    hobbies: Sequelize.STRING(45),
    image: Sequelize.STRING(45),
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    })

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.dropTable("person");
  }
};
