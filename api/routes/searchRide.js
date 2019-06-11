var express = require("express");
<<<<<<< HEAD
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
          
            
        if (!err){
            res.json({rides:rows})

        }
        else
        console.log(' ride data is not showing \n ERROR :' + err);
})
});



module.exports = router
=======
var searchRide = express.Router();
//const cors = require("cors")
const ride = require("../models/Rides")
const person = require("../models/Person")
const jwt = require("jsonwebtoken")
var Sequelize = require("sequelize")

person.hasMany(ride, { foreignKey: 'person_PERSON_ID' });
ride.belongsTo(person, { foreignKey: 'person_PERSON_ID' });

searchRide.get('/search', verifyToken, (req, res) => {

  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {

      const im_source = req.body.Source;
      const im_destination = req.body.Destination;

      const date_of_travel = req.body.Date_Of_Travel;

      const hobbies = req.body.Hobbies;
      ride.findAll({
        where: {
          [Sequelize.Op.or]: {
            SOURCE: { [Sequelize.Op.or]: { [Sequelize.Op.eq]: im_source } },
            DESTINATION: { [Sequelize.Op.or]: { [Sequelize.Op.eq]: im_destination } },
            DATE_TIME_OF_RIDE: { [Sequelize.Op.or]: { [Sequelize.Op.eq]: date_of_travel } }
          }
        },
        include: [{
          model: person, attributes: ['FIRST_NAME', 'IMAGE', 'HOBBIES']
        }]
      })
        .then(function (search) {
          //var row = search.get({ plain: true });
          res.json({ searchedride: search })

        });

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

module.exports = searchRide

>>>>>>> df97b79d2ce560c7e6155cd6b1c5423d7e18a547
