var express = require("express");
var router = express.Router();
const rideRequest = require("../models/RideRequest")


router.post('/checkrejectedride', (req, res) => {

      const logged_in_person_id = req.body.Logged_In_Person_Id;
      const request_person_id = req.body.Requested_Person_Id;

      const ride_id = req.body.Ride_Id;
      const ride_status = req.body.Ride_Status;



      rideRequest.findAll({
        attributes: ['SOURCE', 'DESTINATION', 'DATE_TIME_OF_RIDE'],
        where: { REQUESTED_PERSON_ID: logged_in_person_id, ride_RIDE_ID: ride_id,
             RIDE_STATUS: ride_status, REQUESTED_PERSON_ID: request_person_id }, raw: true
      })
        .then(function (reject) {
          if(reject.length >0)
          {
          res.status(200).json({ checkrejectedride: reject })
          }
          else
          res.status(500).json({ checkrejectedride: reject })
        });


  });



module.exports = router

