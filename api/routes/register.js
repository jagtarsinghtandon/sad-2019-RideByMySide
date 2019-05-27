const express = require("express")
const register = express.Router()
const bcrypt= require("bcrypt-nodejs")

login : [
    {
    hash: '',
    EMAIL: 'ankit@gmail.com',
    }
]


register.post('/register',(req,res)=>{

   
bcrypt.hash("PASSWORD", null, null, function(err, hash) {
    console.log(hash);
});

var mysql = req.app.get('mysql');

const  first_name =  req.body.first_name;
const password = req.body.password;
const last_name = req.body.last_name;
const email = req.body.email;



var queryString = "INSERT INTO person (FIRST_NAME,LAST_NAME,EMAIL,PASSWORD) VALUES (?,?,?,?)"
        var filter = [first_name,last_name, email,password];
        console.log(this.state);
        mysql.query(queryString, filter, (err, rows, fields)=>{
           
            
        if (!err){
            res.json({register:rows})
        //res.json('sucess');
        }
        else
        console.log('  data is not showing \n ERROR :' + err);
})
});



module.exports = register