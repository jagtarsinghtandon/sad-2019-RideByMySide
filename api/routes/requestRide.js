const express = require("express")
const requestRide = express.Router()

requestRide.get('/requestride',(req,res)=>{

    var mysql = req.app.get('mysql');

    const source =  req.body.source;
    const destination = req.body.destination;



    var queryString = "SELECT SOURCE, DESTINATION,DATE_TIME_OF_RIDE FROM ride WHERE SOURCE= ? AND DESTINATION=? ;"
    var filter = [source, destination];
    console.log(this.state);
    mysql.query(queryString, filter, (err, rows, fields)=>{
      
        
    if (!err){
        res.json({request:rows})

    }
    else
    console.log(' ride data is not showing \n ERROR :' + err);
})




});

module.exports = requestRide