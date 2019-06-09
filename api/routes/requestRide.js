var express = require("express");
var router = express.Router();
const cors = require("cors")

router.use(cors())

router.post('/requestRide', (req, res) => {
    
    const person_id =  req.body.Person_Id;
    const imgstring =  req.body.Imgstring;
    const first_name =  req.body.First_Name;
    const source =  req.body.Source;
    const destination =  req.body.Destination;
    const date_of_travel =  req.body.Date_Of_Travel;
    const hobbies =  req.body.Hobbies;
    const ride_id = req.body.Ride_Id;
    const ride_status = "Requested";
    const requested_person_id = req.body.Requested_Person_Id;
    


    var mysql = req.app.get('mysql');

       // var queryString = "SELECT SOURCE, DESTINATION,DATE_TIME_OF_RIDE FROM ride WHERE SOURCE= ? AND DESTINATION= ?;"
        // var queryString =
    var queryString = "INSERT INTO ridebymysidedb.rideRequests (FIRST_NAME, PERSON_ID,SOURCE,DESTINATION,DATE_TIME_OF_RIDE,HOBBIES, RIDE_STATUS, IMAGE, rideRequests.REQUESTED_PERSON_ID, rideRequests.ride_RIDE_ID) VALUES (?,?,?,?,?,?,?,?,?,?);"
        var filter = [first_name, person_id,source, destination,date_of_travel, hobbies, ride_status, imgstring, requested_person_id, ride_id];
        // var filter = [person_id];
        console.log(this.state);
        mysql.query(queryString, filter, (err, rows, fields)=>{
          

            if (!err){
                res.json({rideRequested:rows})
                
    
            }
            else
            console.log('Ride has been created \n ERROR :' + err);
})
});



module.exports = router

