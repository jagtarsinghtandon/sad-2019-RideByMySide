const express = require("express")
const register = express.Router()
//const bcrypt= require("bcrypt")
const person = require("../models/Person")
var con = require("../bin/connection");



register.post('/register',(req,res)=>{

    // let hash = bcrypt.hashSync('req.body.password', 8);


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
        // .finally(()=>{
        //     con.close();
        //     console.log('connection closed');
        // });

    
            
       
     
    
    
    
});



module.exports = register