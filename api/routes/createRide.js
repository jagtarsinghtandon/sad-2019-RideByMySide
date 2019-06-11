const express = require("express")
const createRide = express.Router()
const ride = require("../models/Rides")
const jwt = require("jsonwebtoken")

createRide.post('/createRide',verifyToken,(req,res)=>{

    jwt.verify(req.token, 'secretkey', (err,authData) => {
        if(err) {
            res.sendStatus(403);
        } else{
            const im_source = req.body.source;
            const im_destination = req.body.destination;
            const im_id = req.body.id;
        
            ride.create({SOURCE:im_source,DESTINATION:im_destination,PERSON_ID:im_id})
            .then(function(data)  {
                res.json({createdride:data.get({plain:true}),
                            authData
            })
                console.log(data.get({
                    plain: true
                  }))
                  var row = data.get({plain:true});
                  console.log(row.id);
                });
        }
    })

})

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

module.exports = createRide