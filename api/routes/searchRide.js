var express = require("express");
var searchRide = express.Router();
//const cors = require("cors")
const ride = require("../models/Rides")
const jwt = require("jsonwebtoken")

//router.use(cors())

searchRide.get('/search',verifyToken, (req, res) => {
    
    
    const im_source = req.body.source;
    const im_destination = req.body.destination;

    ride.findAll({ where: { SOURCE: im_source, DESTINATION: im_destination },raw:true })
                .then(function (search) {
                  //var row = search.get({ plain: true });
                    res.json({ searchedride: search })
                    //console.log(search);
                     //   plain: true
                   // }))
                    
                    //console.log(row.id);
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

