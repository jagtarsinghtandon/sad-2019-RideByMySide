const express = require("express")
const myRides = express.Router()
const riderequest = require("../models/RideRequest")

myRides.post('/displaymyrides', (req, res) => {


    const im_id = req.body.Person_Id;

    riderequest.findAll({ where: { PERSON_ID: im_id }, raw: true })
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