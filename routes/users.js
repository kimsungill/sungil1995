const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/database');
const bcrypt = require('bcryptjs');

// register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        username: req.body.username,
        userid: req.body.userid,
        userpassword: req.body.userpassword,
        userpassword2: req.body.userpassword2,
        userphone: req.body.userphone
    });

    User.getUserByUsername(newUser.userid, (err, user) => {
        if (err) throw err;
        if (user) {
            return res.json({ success: false, msg: "Same id" })
        } else {
            User.addUser(newUser, (err, user) => {
                if (err) {
                    res.json({ success: false, msg: 'Fail to register user' });
                } else {
                    res.json({ success: true, msg: 'User registered' });
                }
            });
        }
    });
});

//authenticate
router.post('/authenticate', (req, res, next) => {
    const userid = req.body.userid;
    const userpassword = req.body.userpassword;

    User.getUserByUsername(userid, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({ success: false, msg: 'User not found' });
        }

        User.comparePassword(userpassword, user.userpassword, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign({ data: user }, config.secret, {
                    expiresIn: 604800 // 1week
                });

                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    userNoPW: {
                        //id: user._id,
                        username: user.username,
                        userid: user.userid,
                        userphone: user.userphone
                    }
                });
            } else {
                return res.json({ success: false, msg: 'Wrong password' });
            }
        });
    });
});

//profile
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({
        user: {
            userid: req.user.userid,
            username: req.user.username,
            userphone: req.user.userphone
        }
    });
})

//password change
router.put('/profile/updatePassword', function (req, res) {
    var saltRounds = 10;
    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(req.body.userpassword, salt, function (err, hash) {
            req.body.userpassword = hash;
            User.updateOne({ userid: req.body.userid }, { $set: { "userpassword": req.body.userpassword } }, function (err) {
                if (err) {
                    res.json({ success: false, msg: '변경 실패' });
                } else {
                    res.json({ success: true, msg: '변경 성공' });
                }
            });
        });
    });
});

// email change = phone change
router.put('/profile/updateEmail', function (req, res) {
    User.updateOne({ userid: req.body.userid }, { $set: { "userphone": req.body.userphone } }, function (err) {
        if (err) {
            res.json({ success: false, msg: '변경 실패' });
        } else {
            res.json({ success: true, msg: '변경 성공' });
        }
    });
});


module.exports = router;
