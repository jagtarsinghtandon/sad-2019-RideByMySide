const express = require("express")
const login = express.Router()


login.post('/login',(req,res)=>{

    var mysql = req.app.get('mysql');

    const email = req.body.email;
    const password = req.body.password;
    
    // $sql = mysql_query("SELECT EMAIL FROM person  WHERE EMAIL = '?'");

    // if(mysql_num_rows($sql)>0){
    //     die ("EMAIL taken. Please pick a different EMAIL");
    // }

//     $sql=mysql_query("SELECT FROM person (email, password) WHERE email=$email");
//  if(mysql_num_rows($sql)>=1)
//    {
//     echo"email already exists";
//    }
//  else
//     {
//    //insert query goes here
//     }
    
    var queryString = "SELECT EMAIL,PASSWORD FROM person WHERE EMAIL= ? AND PASSWORD= ?;"
            var filter = [email,password];
            console.log(this.state);
            mysql.query(queryString, filter, (err, rows, fields)=>{
               
                
            if (!err){
                res.json({login:rows})
            //res.json('sucess');
            }
            else
            console.log('  data is not showing \n ERROR :' + err);
    })
    });




module.exports = login