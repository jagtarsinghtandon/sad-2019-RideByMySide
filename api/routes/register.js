const express = require("express")
const register = express.Router()
const bcrypt= require("bcrypt")
const Person = require("../models/Person")



register.post('/register',(req,res)=>{

    let hash = bcrypt.hashSync('req.body.password', 8);
    // bcrypt.hash(password, salt, function(err, hash) {
    //     query = "insert query with generated crypt password";
    //     pool.query(query, (err, res) => {
    //         console.log(err, res);
    //     })
    // });
       

var mysql = req.app.get('mysql');

const  first_name =  req.body.first_name;
const password = hash;
const last_name = req.body.last_name;
const email = req.body.email;

const err = (err)=>{
    console.error("Error: ",err);
}


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
        const person = Person.create({firstname:first_name,lastname:last_name,email:email,password:password}).catch(err);
        // const queryString = "INSERT INTO person (FIRST_NAME,LAST_NAME,EMAIL,PASSWORD) VALUES (?,?,?,?)"
        // const filter = [first_name,last_name, email,password];
        // console.log(this.state);
        // mysql.query(queryString, filter, (err, rows, fields)=>{
           
            
        if (!err){
            res.json({registers:rows})
        }
        else
        console.log('  data is not showing \n ERROR :' + err);
    // })
    }
       })
    
});



module.exports = register