'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable("person", {
      
      PERSON_ID:{
        type: Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
    },
    
    FIRST_NAME: Sequelize.STRING(45),
    LAST_NAME: Sequelize.STRING(45),
    EMAIL: Sequelize.STRING(45),
    PASSWORD: Sequelize.STRING(45),
    DOB: Sequelize.STRING(45),
    CONTACT_NO: Sequelize.STRING(45),
    GENDER: Sequelize.STRING(45),
    LAST_ONLINE: Sequelize.STRING(45),
    PERSON_TYPE: Sequelize.STRING(45),
    GENDER_INTERESTS: Sequelize.STRING(45),
    HOBBIES: Sequelize.STRING(45),
    IMAGE: Sequelize.BLOB,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    },
      {
        freezeTableName: true,
      }
    )



  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable("person");
  }
};