const express = require("express")
const profile = express.Router()


profile.post('/profile',(req,res)=>{

    var mysql = req.app.get('mysql');

    const email = req.body.Email;
    

const queryString = "SELECT EMAIL,FIRST_NAME,LAST_NAME,DOB,CONTACT_NO,HOBBIES,IMAGE FROM ridebymysidedb.person WHERE EMAIL= ?"
            const filter = [email];
            console.log(this.state);
            mysql.query(queryString, filter, (err, rows, fields)=>{
               
                
            if (!err){
                res.json({profile:rows})
            }
            else
            console.log('  data is not showing \n ERROR :' + err);
    })
    });




module.exports = profile


