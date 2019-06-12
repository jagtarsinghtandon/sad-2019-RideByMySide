var express = require("express");
var router = express.Router();
const rideRequest = require("../models/RideRequest")

router.post('/fetchrequestedrides', (req, res) => {
  console.log("search rides")
  console.log(req.body.Person_Id)
  
  const person_id = req.body.Person_Id;



  rideRequest.findAll({ where: { PERSON_ID:person_id } })
  .then(function (requests) {
    res.json({ fetchrequestrides: requests })

  });

});



module.exports = router

