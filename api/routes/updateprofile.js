const express = require("express")
const updateprofile = express.Router()


updateprofile.post('/updateprofile',(req,res)=>{

    var mysql = req.app.get('mysql');

    const first_name = req.body.First_Name;
    const last_name = req.body.Last_Name;
    const email = req.body.Email;
    const dob = req.body.Dob;
    const mobileno = req.body.Mobileno;
    const hobbies = req.body.Hobbies;
    const image = req.body.Image;
    

const queryString = "UPDATE ridebymysidedb.person SET FIRST_NAME=?,LAST_NAME=?,CONTACT_NO=?,DOB=?,HOBBIES=?,IMAGE=? WHERE EMAIL= ?"
           var filter = [first_name,last_name,mobileno,dob,hobbies,image,email];
           //const filter = [email];
            console.log(this.state);
            mysql.query(queryString, filter, (err, rows, fields)=>{
               
                
            if (!err){
                res.json({updateprofile:rows})
            }
            else
            console.log('  data is not showing \n ERROR :' + err);
    })
    });




module.exports = updateprofile