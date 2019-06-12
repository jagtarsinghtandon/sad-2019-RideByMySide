var express = require("express");
var router = express.Router();
const rideRequest = require("../models/RideRequest")
const jwt = require("jsonwebtoken")


router.post('/checkrequestride', verifyToken, (req, res) => {

  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {

      const logged_in_person_id = req.body.Logged_In_Person_Id;

      const ride_id = req.body.Ride_Id;



      rideRequest.findAll({
        attributes: ['SOURCE', 'DESTINATION', 'DATE_TIME_OF_RIDE'],
        where: { REQUESTED_PERSON_ID: logged_in_person_id, ride_RIDE_ID: ride_id }, raw: true
      })
        .then(function (request) {
          if(request.length >0)
          {
          res.status(200).json({ requestedride: request })
          }
          else
          res.status(500).json({ requestedride: request })
        });




    }
  });
});
function verifyToken(req, res, next) {

  const bearerHeader = req.headers['authorization'];

  if (typeof bearerHeader != 'undefined') {

    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {

    res.sendStatus(403);
  }
}


module.exports = router

