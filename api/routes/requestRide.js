var express = require("express");
var router = express.Router();
var requestRide = require("../models/RideRequest")
// const cors = require("cors")

// router.use(cors())

router.post('/requestRide', verifyToken, (req, res) => {

    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {

            const person_id = req.body.Person_Id;
            const imgstring = req.body.Imgstring;
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


    //     var mysql = req.app.get('mysql');

    //        // var queryString = "SELECT SOURCE, DESTINATION,DATE_TIME_OF_RIDE FROM ride WHERE SOURCE= ? AND DESTINATION= ?;"
    //         // var queryString =
    //     var queryString = "INSERT INTO ridebymysidedb.rideRequests (FIRST_NAME, PERSON_ID,SOURCE,DESTINATION,DATE_TIME_OF_RIDE,HOBBIES, RIDE_STATUS, IMAGE, rideRequests.REQUESTED_PERSON_ID, rideRequests.ride_RIDE_ID) VALUES (?,?,?,?,?,?,?,?,?,?);"
    //         var filter = [first_name, person_id,source, destination,date_of_travel, hobbies, ride_status, imgstring, requested_person_id, ride_id];
    //         // var filter = [person_id];
    //         console.log(this.state);
    //         mysql.query(queryString, filter, (err, rows, fields)=>{


    //             if (!err){
    //                 res.json({rideRequested:rows})


    //             }
    //             else
    //             console.log('Ride has been created \n ERROR :' + err);
    // })
});

function verifyToken(req,res,next) {

    const bearerHeader = req.headers['authorization'];

    if(typeof bearerHeader != 'undefined') {

        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
        }else{

        res.sendStatus(403);
    }
}



module.exports = router

