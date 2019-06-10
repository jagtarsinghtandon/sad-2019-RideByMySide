var express = require("express");
var router = express.Router();
const cors = require("cors")

router.use(cors())

router.post('/fetchrequestedrides', (req, res) => {
    console.log("search rides")

    const person_id =  req.body.Person_Id;
    
    

    var mysql = req.app.get('mysql');

        var queryString = " SELECT * FROM riderequests WHERE PERSON_ID= ?;"
        
      var filter = [person_id];
        console.log(this.state);
        mysql.query(queryString, filter, (err, rows, fields)=>{
          
            
        if (!err){
            res.json({fetchrequestrides:rows})
            

        }
        else
        console.log(' ride data is not showing \n ERROR :' + err);
})
});



module.exports = router

