var express = require("express");
var router = express.Router();


router.get('/search',(req,res)=>{

    var mysql = req.app.get('mysql'); 

    mysql.query('SELECT * FROM ride where SOURCE = "mannheim" and DESTINATION ="frankfurt"',(err, rows, fields)=>{
        if(!err)
       // console.log(rows[0].Name);
       res.send(rows);
        else
        console.log(' Emp data is not showing \n ERROR :'+ err);
    })
});

module.exports = router

