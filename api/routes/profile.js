const express = require("express")
const profile = express.Router()
const person = require("../models/Person")
const jwt = require("jsonwebtoken")


profile.post('/profile', verifyToken, (req, res) => {

    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            const im_email = req.body.Email;
            const im_password = req.body.Password;

            person.findOne({ where: { EMAIL: im_email, PASSWORD: im_password } })
                .then(function (data) {
                    res.json({ profile: data.get({ plain: true }) })
                    console.log(data.get({
                        plain: true
                    }))
                    var row = data.get({ plain: true });
                    console.log(row.id);
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


module.exports = profile


