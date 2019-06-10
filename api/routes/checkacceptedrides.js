var express = require("express");
var router = express.Router();
const cors = require("cors")

router.use(cors())

router.post('/checkacceptride', (req, res) => {

    const person_id =  req.body.Person_Id;
    const ride_id = req.body.Ride_Id;
    const requested_person_id = req.body.Requested_Person_Id;
    
    console.log("already")

    var mysql = req.app.get('mysql');

        var queryString = 
     
          "SELECT * FROM ridebymysidedb.riderequests WHERE REQUESTED_PERSON_ID=? AND PERSON_ID=? AND ride_RIDE_ID=?"

        var filter = [ requested_person_id, person_id, ride_id];
        console.log(this.state);
        mysql.query(queryString, filter, (err, rows, fields)=>{
          
            
        if (rows.length > 0){

            console.log("Ride Already Accepted");

            res.status(200).json({checkacceptride:rows})
            

        }
        else
        {
        console.log(' ride accepted \n ERROR :' + err);
        res.status(500).json({checkacceptride:rows})
        }


})
});



module.exports = router

