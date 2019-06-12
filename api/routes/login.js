const express = require("express")
const login = express.Router()
// const bcrypt= require("bcrypt")
const jwt = require("jsonwebtoken")
const person = require("../models/Person")

login.post('/login',(req,res)=>{


    const email = req.body.Email;
    const password = req.body.Password;
    const im_email = req.body.Email;
    const im_password = req.body.Password;
    


    person.findOne({where:{EMAIL:im_email,PASSWORD:im_password}})
    .then(function(project) {
        var row = project.get({plain:true})

        const userdata = { id: row.id,
        email: row.email,
        password: row.password}

        jwt.sign({user: userdata}, 'secretkey',(err,token)=>{
            res.json({
                token:token,
                status:200
            });
            console.log(token);
        });
    });
 
     

    });




module.exports = login