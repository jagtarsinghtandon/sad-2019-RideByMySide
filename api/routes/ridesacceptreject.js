const express = require("express")
const myRidesAccRej = express.Router()
const rideRequest = require("../models/RideRequest")

myRidesAccRej.get('/acceptedrejectedrides/:id', (req, res) => {


    const im_id = req.params.id;

    rideRequest.findAll({ where: { REQUESTED_PERSON_ID: im_id }, raw: true })
        .then(function (data) {
            if (data.length > 0) {
                res.status(200).json({
                    acceptreject: data
                })
            }
            else
            res.status(500).json({
                acceptreject: data
            })
        });


})
module.exports = myRidesAccRej