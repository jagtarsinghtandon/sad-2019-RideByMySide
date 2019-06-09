var express = require("express");
var router = express.Router();
const cors = require("cors")

router.use(cors())

router.post('/checkrequestride', (req, res) => {
    
    const logged_in_person_id =  req.body.Logged_In_Person_Id;
    
    const ride_id =  req.body.Ride_Id;

    console.log("gfggffg")
    var mysql = req.app.get('mysql');

       // var queryString = "SELECT SOURCE, DESTINATION,DATE_TIME_OF_RIDE FROM ride WHERE SOURCE= ? AND DESTINATION= ?;"
        var queryString =  " SELECT * FROM ridebymysidedb.riderequests  WHERE REQUESTED_PERSON_ID= ? AND rideRequests.ride_RIDE_ID = ?;"
        
      
        var filter = [logged_in_person_id, ride_id];
        console.log(this.state);
        mysql.query(queryString, filter, (err, rows, fields)=>{
            
    
    
             if (rows.length > 0){
                // res.json({checkRequestRide:rows})
               
                console.log("Ride Already exists");
                    res.status(200).json({checkRequestRide:rows})
                   
                }

        
        else{
        console.log(' Ride has never been requested\n ERROR :' + err);
        res.status(500).json({checkRequestRide:rows})
        }
})
});



module.exports = router

