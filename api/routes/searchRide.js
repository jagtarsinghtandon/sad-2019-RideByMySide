var express = require("express");
var router = express.Router();
const cors = require("cors")

router.use(cors())

router.post('/search', (req, res) => {
    
    const source =  req.body.Source;
    const destination = req.body.Destination;


    var mysql = req.app.get('mysql');

        var queryString = "SELECT SOURCE, DESTINATION,DATE_TIME_OF_RIDE FROM ride WHERE SOURCE= ? AND DESTINATION= ?;"
        var filter = [source, destination];
        console.log(this.state);
        mysql.query(queryString, filter, (err, rows, fields)=>{
            //proces s results
            
        if (!err){
            res.json({rides:rows})
        //res.json{(rows)};
        //res.json('sucess');
        }
        else
        console.log(' ride data is not showing \n ERROR :' + err);
})
});



module.exports = router

