const express = require("express")
const register = express.Router()
<<<<<<< HEAD
// const bcrypt= require("bcrypt")

=======
//const bcrypt= require("bcrypt")
const person = require("../models/Person")
var con = require("../bin/connection");
>>>>>>> df97b79d2ce560c7e6155cd6b1c5423d7e18a547



register.post('/register',(req,res)=>{

    // let hash = bcrypt.hashSync('req.body.password', 8);
<<<<<<< HEAD
    // bcrypt.hash(password, salt, function(err, hash) {
    //     query = "insert query with generated crypt password";
    //     pool.query(query, (err, res) => {
    //         console.log(err, res);
    //     })
    // });
       

var mysql = req.app.get('mysql');
=======
>>>>>>> df97b79d2ce560c7e6155cd6b1c5423d7e18a547


const  im_firstname =  req.body.first_name;
const im_password = req.body.password;
const im_lastname = req.body.last_name;
const im_email = req.body.email;

const err = (err)=>{
    console.error("Error: ",err);
}



        person.create({FIRST_NAME:im_firstname,LAST_NAME:im_lastname,EMAIL:im_email,PASSWORD:im_password})
        .then(function(data)  {
            res.json({registers:data.get({plain:true})})
            console.log(data.get({
                plain: true
              }))
              var row = data.get({plain:true});
              console.log(row.id);
      
        })
         
        .catch(err)
        .finally(()=>{
            con.close();
            console.log('connection closed');
        });

    
            
       
     
    
    
    
});



module.exports = register