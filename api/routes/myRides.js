const express = require("express")
const myRides = express.Router()
const riderequest = require("../models/RideRequest")

myRides.get('/displaymyrides/:id', (req, res) => {


    const im_id = req.params.id;
    console.log("check ID"+req.params.id)

    riderequest.findAll({ where: { PERSON_ID: im_id,RIDE_STATUS:'accepted' }, raw: true })
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