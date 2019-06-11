var express = require("express");
var fetchRequestRides = express.Router();
const rideRequest = require("../models/RideRequest")
// const cors = require("cors")

// router.use(cors())

fetchRequestRides.post('/fetchrequestedrides', (req, res) => {
    console.log("search rides")

    const person_id =  req.body.Person_Id;
    
    

    rideRequest.findAll({ where: { PERSON_ID:person_id } })
        .then(function (requests) {
          //var row = search.get({ plain: true });
          res.json({ fetchrequestrides: requests })

        });




//     var mysql = req.app.get('mysql');

//         var queryString = " SELECT * FROM riderequests WHERE PERSON_ID= ?;"
        
//       var filter = [person_id];
//         console.log(this.state);
//         mysql.query(queryString, filter, (err, rows, fields)=>{
          
            
//         if (!err){
//             res.json({fetchrequestrides:rows})
            

//         }
//         else
//         console.log(' ride data is not showing \n ERROR :' + err);
// })
});



module.exports = fetchRequestRides