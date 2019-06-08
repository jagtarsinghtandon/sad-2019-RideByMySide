const express = require("express")
const login = express.Router()
// const bcrypt= require("bcrypt")

login.post('/login',(req,res)=>{

    var mysql = req.app.get('mysql');

    const email = req.body.Email;
    const password = req.body.Password;
    
   // bcrypt.compareSync('req.body.password', hash);

//    const query = "insert query with generated crypt password";
//    pool.query(query, (err, res) => {
//        const dbPsw = res.rows[0].hash_psw; // db password
//        bcrypt.compare(password, dbPsw, function(err, result) {
//            if (err)
//                console.log(err);
//            else if (result)
//                console.log("password match");
//            else
//                console.log("not match");
//        });
//    })

   const CheckQuery = "SELECT EMAIL,PASSWORD FROM person WHERE EMAIL= ? AND PASSWORD= ?;"
    const filter1 = [email,password];
    console.log(this.state);
       mysql.query(CheckQuery, filter1, (err, rows, fields)=>{
    if (rows.length ==0){
        console.log("invalid email or password ");
            res.status(500).json({logins:rows})
           
        }
        
    else{
    var queryString = "SELECT EMAIL,PASSWORD FROM person WHERE EMAIL= ? AND PASSWORD= ?;"
            var filter = [email,password];
            console.log(this.state);
            mysql.query(queryString, filter, (err, rows, fields)=>{    
            if (!err){
                res.json({logins:rows}) 
            }
            else
            console.log('  data is not showing \n ERROR :' + err);
    })
}
       })
     

    });




module.exports = login