const express = require("express")
const myRides = express.Router()
const ride = require("../models/Rides")

myRides.post('/displayriderequests', (req, res) => {


    const im_id = req.body.id;

    ride.findAll({ where: { person_PERSON_ID: im_id }, raw: true })
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
module.exports = myRides