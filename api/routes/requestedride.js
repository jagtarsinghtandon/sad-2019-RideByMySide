var express = require("express");
var router = express.Router();
var requestRide = require("../models/RideRequest")
var person = require("../models/Person");
var jwt = require("jsonwebtoken")


router.post('/requestRide', verifyToken, (req, res) => {

    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {

            console.log(req.body.Person_Id)
            
            const person_id = req.body.Person_Id;
            var imgstring = req.body.Imgblob;
            console.log(req.body.Imgblob)
            const first_name = req.body.First_Name;
            const source = req.body.Source;
            const destination = req.body.Destination;
            const date_of_travel = req.body.Date_Of_Travel;
            const hobbies = req.body.Hobbies;
            const ride_id = req.body.Ride_Id;
            const ride_status = "Requested";
            const requested_person_id = req.body.Requested_Person_Id;

           

            requestRide.create({
                PERSON_ID: person_id, SOURCE: source, DESTINATION: destination, DATE_TIME_OF_RIDE: date_of_travel, HOBBIES: hobbies,
                ride_RIDE_ID: ride_id, RIDE_STATUS: ride_status, IMAGE: imgstring, FIRST_NAME: first_name, REQUESTED_PERSON_ID: requested_person_id
            })
                .then(function (data) {
                    res.json({ riderequest: data.get({ plain: true }) })
                    console.log(data.get({
                        plain: true
                    }))
                    var row = data.get({ plain: true });
                    console.log(row.id);

                })
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



module.exports = router