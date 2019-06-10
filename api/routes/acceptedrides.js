var express = require("express");
var router = express.Router();
const cors = require("cors")

router.use(cors())

router.put('/acceptride', (req, res) => {
    console.log("my rides")

    const person_id =  req.body.Person_Id;
   
    const ride_id = req.body.Ride_Id;
    const ride_status = 'Accepted';
    const requested_person_id = req.body.Requested_Person_Id;
    
    

    var mysql = req.app.get('mysql');

        var queryString = 
     
          "UPDATE ridebymysidedb.riderequests SET RIDE_STATUS = ? WHERE REQUESTED_PERSON_ID=? AND PERSON_ID=? AND ride_RIDE_ID=?";

        var filter = [ride_status, requested_person_id, person_id, ride_id];
        console.log(this.state);
        mysql.query(queryString, filter, (err, rows, fields)=>{
          
            
        if (!err){
            res.json({acceptride:rows})
            

        }
        else
        console.log(' ride data is not showing \n ERROR :' + err);
})
});



module.exports = router

