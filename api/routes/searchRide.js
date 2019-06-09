var express = require("express");
var router = express.Router();
const cors = require("cors")

router.use(cors())

router.post('/search', (req, res) => {
    console.log("search rides")
    const source =  req.body.Source;
    const destination = req.body.Destination;
    
    const date_of_travel = req.body.Date_Of_Travel;
    
    const hobbies = req.body.Hobbies;


    var mysql = req.app.get('mysql');

        var queryString =
       " SELECT person.PERSON_ID, person.FIRST_NAME, ride.SOURCE, ride.DESTINATION, ride.DATE_TIME_OF_RIDE, ride.RIDE_ID ,person.HOBBIES, person.IMAGE  FROM ridebymysidedb.ride JOIN ridebymysidedb.person ON ride.person_PERSON_ID = person.PERSON_ID WHERE SOURCE= ? OR DESTINATION= ? OR DATE_TIME_OF_RIDE= ? OR HOBBIES=?;"
        
      
        var filter = [source, destination, date_of_travel, hobbies];
        console.log(this.state);
        mysql.query(queryString, filter, (err, rows, fields)=>{
          
            
        if (!err){
            res.json({rides:rows})
            

        }
        else
        console.log(' ride data is not showing \n ERROR :' + err);
})
});



module.exports = router

