const express = require("express")
const login = express.Router()


login.post('/login',(req,res)=>{

    var mysql = req.app.get('mysql');

    const email = req.body.email;
    const password = req.body.password;
    
    

    
    var queryString = "SELECT EMAIL,PASSWORD FROM person WHERE EMAIL= ? AND PASSWORD= ?;"
            var filter = [email,password];
            console.log(this.state);
            mysql.query(queryString, filter, (err, rows, fields)=>{
               
                
            if (!err){
                res.json({logins:rows})
            }
            else
            console.log('  data is not showing \n ERROR :' + err);
    })
    });




module.exports = login