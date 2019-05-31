const express = require("express")
const register = express.Router()
const bcrypt= require("bcrypt-nodejs")

login : [
    {
    hash: '',
    EMAIL: '',
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




    const emailCheckQuery="SELECT EMAIL FROM person WHERE EMAIL= ?;";
    const filter2 = [email];
    console.log(this.state);
       mysql.query(emailCheckQuery, filter2, (err, rows, fields)=>{


      if (rows.length ==1){
    console.log("email existssssss");
        res.status(500).json({registers:rows})
    }
    
 else
    {
        const queryString = "INSERT INTO person (FIRST_NAME,LAST_NAME,EMAIL,PASSWORD) VALUES (?,?,?,?)"
        const filter = [first_name,last_name, email,password];
        console.log(this.state);
        mysql.query(queryString, filter, (err, rows, fields)=>{
           
            
        if (!err){
            res.json({registers:rows})
        }
        else
        console.log('  data is not showing \n ERROR :' + err);
})
    }
       })
    
});



module.exports = register