const Sequelize = require("sequelize");
const conn = require("../bin/connection");


module.exports = conn.define("rideRequest", {

    RIDE_REQUEST_ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    PERSON_ID: Sequelize.INTEGER(11),
    SOURCE: Sequelize.STRING(45),
    DESTINATION: Sequelize.STRING(45),
    DATE_TIME_OF_RIDE: Sequelize.STRING(45),
    HOBBIES: Sequelize.STRING(45),
    ride_RIDE_ID: Sequelize.INTEGER(11),
    RIDE_STATUS: Sequelize.STRING(45),
    IMAGE: Sequelize.BLOB,
    FIRST_NAME: Sequelize.STRING(45),
    REQUESTED_PERSON_ID: Sequelize.STRING(45),
},
    {
        freezeTableName: true
    })