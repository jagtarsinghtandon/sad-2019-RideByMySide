var express = require("express");
var acceptRide = express.Router();
const rideRequest = require("../models/RideRequest")

acceptRide.put('/acceptride', (req, res, next) => {
    console.log("my rides")
console.log(req.body.Requested_Person_Id)
console.log(req.body.Ride_Id)
console.log(req.body.Person_Id)

    const person_id = req.body.Person_Id;
    const ride_id = req.body.Ride_Id;
    const ride_status = req.body.Ride_Status;
    const requested_person_id = req.body.Requested_Person_Id;


    rideRequest.update(
        { RIDE_STATUS: ride_status },
        {
            returning: true,
            plain: true,
            where: {
                REQUESTED_PERSON_ID: requested_person_id,
                PERSON_ID: person_id, ride_RIDE_ID: ride_id
            }
        }
    )
        .then(function (result) {
            if (result[1]) {
                rideRequest.findOne({
                    where: {
                        REQUESTED_PERSON_ID: requested_person_id,
                        PERSON_ID: person_id, ride_RIDE_ID: ride_id
                    }
                })
                    .then(function (found) {
                        res.json({ acceptride: found })
                    })
            }
            else
                res.sendStatus(404)
        })
        .catch(next)
});



module.exports = acceptRide