var express = require("express");
var acceptRide = express.Router();
const rideRequest = require("../models/RideRequest")
// const cors = require("cors")

// router.use(cors())

acceptRide.put('/acceptride', (req, res, next) => {
    console.log("my rides")

    const person_id = req.body.Person_Id;

    const ride_id = req.body.Ride_Id;
    const ride_status = 'Accepted2';
    const requested_person_id = req.body.Requested_Person_Id;

    rideRequest.findOne({
        where: {
            REQUESTED_PERSON_ID: requested_person_id,
            PERSON_ID: person_id, ride_RIDE_ID: ride_id
        }
    })
        .then(function (found) {
            if (found) {
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
                    .then(function ([updatedRideRequest]) {
                        res.json({ request: found.get({plain:true}) })
                        // console.log(updatedRideRequest)
                    })
                    .catch(next)
            }
        })
    //     var mysql = req.app.get('mysql');

    //         var queryString = 

    //           "UPDATE ridebymysidedb.riderequests SET RIDE_STATUS = ? WHERE REQUESTED_PERSON_ID=? AND PERSON_ID=? AND ride_RIDE_ID=?"


    //         var filter = [ride_status, requested_person_id, person_id, ride_id];
    //         console.log(this.state);
    //         mysql.query(queryString, filter, (err, rows, fields)=>{


    //         if (!err){
    //             res.json({acceptride:rows})


    //         }
    //         else
    //         console.log(' ride data is not showing \n ERROR :' + err);
    // })
});



module.exports = acceptRide