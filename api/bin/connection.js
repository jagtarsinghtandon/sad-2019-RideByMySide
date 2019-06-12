const Sequelize = require("sequelize");



const connection = new  Sequelize("ridebymysidedb","root","password", {host:"127.0.0.1", dialect: "mysql"})

connection.sync({
    logging: console.log,
    force: false
})
.then(()=> {
    console.log("Connection succesful");
})
.catch(err=>{
    console.log('unable to connect',err);
})



module.exports = connection

