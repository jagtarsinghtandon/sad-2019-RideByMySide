const express = require("express")
const myRidesAccRej = express.Router()
const rideRequest = require("../models/RideRequest")

myRides.post('/displayriderequests', (req, res) => {


    const im_id = req.body.id;

    rideRequest.findAll({ where: { REQUESTED_PERSON_ID: im_id }, raw: true })
        .then(function (data) {
            if (data.length > 0) {
                res.status(200).json({
                    riderequests: data
                })
            }
            else
            res.status(500).json({
                riderequests: data
            })
        });


})
module.exports = myRidesAccRej