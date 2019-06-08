const express = require("express")
const createRide = express.Router()


createRide.post('/createride',(req,res)=>{

    var mysql = req.app.get('mysql');

    const source =  req.body.source;
    const destination = req.body.destination;
    const date = req.body.date;
    const personid = req.body.personid;

    var queryString = "INSERT INTO ride (SOURCE, DESTINATION,DATE_TIME_OF_RIDE,person_PERSON_ID) VALUES (?,?,?,?)"
    var filter = [source, destination,date,personid];
    console.log(this.state);
    mysql.query(queryString, filter, (err, rows, fields)=>{
      
        
    if (!err){
        res.json({ride:rows})

    }
    else
    console.log(' ride data is not showing \n ERROR :' + err);
})
});


module.exports = createRide



