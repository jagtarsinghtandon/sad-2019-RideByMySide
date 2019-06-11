var express = require("express");
var router = express.Router();
//const cors = require("cors")
const rideRequest = require("../models/RideRequest")
const jwt = require("jsonwebtoken")

//router.use(cors())

router.post('/checkrequestride',verifyToken, (req, res) => {

  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {

      const logged_in_person_id = req.body.Logged_In_Person_Id;

      const ride_id = req.body.Ride_Id;



      rideRequest.findAll({
        attributes: ['SOURCE', 'DESTINATION', 'DATE_TIME_OF_RIDE'],
        where: { REQUESTED_PERSON_ID: logged_in_person_id, RIDE_RIDE_ID: ride_id }, raw: true
      })
        .then(function (request) {
          //var row = search.get({ plain: true });
          if(request.length > 0) 
          {
            res.status(200).json({ requestedride: request })
          }
          
          else
          res.status(500).json({ requestedride: request })
        });
      //     console.log("gfggffg")
      //     var mysql = req.app.get('mysql');

      //        // var queryString = "SELECT SOURCE, DESTINATION,DATE_TIME_OF_RIDE FROM ride WHERE SOURCE= ? AND DESTINATION= ?;"
      //         var queryString =  " SELECT * FROM ridebymysidedb.riderequests  WHERE REQUESTED_PERSON_ID= ? AND rideRequests.ride_RIDE_ID = ?;"


      //         var filter = [logged_in_person_id, ride_id];
      //         console.log(this.state);
      //         mysql.query(queryString, filter, (err, rows, fields)=>{



      //              if (rows.length > 0){
      //                 // res.json({checkRequestRide:rows})

      //                 console.log("Ride Already exists");
      //                     res.status(200).json({checkRequestRide:rows})

      //                 }


      //         else{
      //         console.log(' Ride has never been requested\n ERROR :' + err);
      //         res.status(500).json({checkRequestRide:rows})
      //         }
      // })
    }
  });
});
function verifyToken(req,res,next) {

  const bearerHeader = req.headers['authorization'];

  if(typeof bearerHeader != 'undefined') {

      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1];
      req.token = bearerToken;
      next();
      }else{

      res.sendStatus(403);
  }
}


module.exports = router

