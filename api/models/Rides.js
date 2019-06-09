const Sequelize = require("sequelize");
const conn = require("../bin/connection");


module.exports = conn.define("RIDE",{

    RIDE_ID:{
        type: Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
    },
    
    SOURCE: Sequelize.STRING(45),
    DESTINATION: Sequelize.STRING(45),
    PERSON_ID: Sequelize.INTEGER(11),
    DATE_TIME_OF_RIDE: Sequelize.STRING(45),
    CAR_NUMBER: Sequelize.STRING(45),
    CAR_TYPE: Sequelize.STRING(45),
    RIDE_STATUS: Sequelize.STRING(45),    
},
{
    freezeTableName: true
})