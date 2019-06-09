var express = require("express");
var searchRide = express.Router();
//const cors = require("cors")
const ride = require("../models/Rides")
const jwt = require("jsonwebtoken")


searchRide.get('/search', verifyToken, (req, res) => {

  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {

      const im_source = req.body.Source;
      const im_destination = req.body.Destination;
        
        const date_of_travel = req.body.Date_Of_Travel;
        
        const hobbies = req.body.Hobbies;
      ride.findAll({ where: { SOURCE: im_source, DESTINATION: im_destination }, raw: true })
        .then(function (search) {
          //var row = search.get({ plain: true });
          res.json({ searchedride: search })

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

module.exports = searchRide

