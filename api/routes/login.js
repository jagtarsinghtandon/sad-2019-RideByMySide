const express = require("express")
const login = express.Router()
<<<<<<< HEAD
// const bcrypt= require("bcrypt")
=======
const jwt = require("jsonwebtoken")
const person = require("../models/Person")
>>>>>>> df97b79d2ce560c7e6155cd6b1c5423d7e18a547

login.post('/login',(req,res)=>{


<<<<<<< HEAD
    const email = req.body.Email;
    const password = req.body.Password;
=======
    const im_email = req.body.Email;
    const im_password = req.body.Password;
>>>>>>> df97b79d2ce560c7e6155cd6b1c5423d7e18a547
    


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