const Sequelize = require("sequelize");
const conn = require("../bin/connection");


module.exports = sequelize.define("Person",{

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

})