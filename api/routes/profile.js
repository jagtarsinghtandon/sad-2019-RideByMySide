const express = require("express")
const profile = express.Router()


profile.post('/profile',(req,res)=>{

    var mysql = req.app.get('mysql');

    const email = req.body.email;
    const password = req.body.password;
    
const queryString = "SELECT EMAIL,PASSWORD FROM ridebymysidedb.person WHERE EMAIL= ? AND PASSWORD= ?;"
            const filter = [email,password];
            console.log(this.state);
            mysql.query(queryString, filter, (err, rows, fields)=>{
               
                
            if (!err){
                res.json({profile:rows})
            //res.json('sucess');
            }
            else
            console.log('  data is not showing \n ERROR :' + err);
    })
    });




module.exports = profile


