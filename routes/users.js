const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/database');
const bcrypt = require('bcryptjs');
const LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');

// register
router.post('/register', (req, res, next) => {

    let newUser = new User({
        username: req.body.username,
        userid: req.body.userid,
        userpassword: req.body.userpassword,
        userphone: req.body.userphone,
        semail: 0,
        ecert: 0,
        auth: false
    });

    let newPass = new User({
        userpassword2: req.body.userpassword2
    });

    if (!newUser.username ||
        !newUser.userid ||
        !newUser.userpassword ||
        !newPass.userpassword2 ||
        !newUser.userphone) {
        return res.json({ success: false, msg: '빈칸 있음, 양식 틀림' });
    } else if (newUser.userpassword != newPass.userpassword2) {
        return res.json({ success: false, msg: '비밀번호 다름' });
    } else {
        User.getUserByUsername(newUser.userid, (err, user) => {
            if (err) throw err;
            if (user) {
                return res.json({ success: false, msg: "이미 아이디 있음" })
            } else {
                User.addUser(newUser, (err, user) => {
                    if (err) {
                        res.json({ success: false, msg: '등록 실패' });
                    } else {
                        res.json({ success: true, msg: '가입 성공' });
                    }
                });
            }
        });
    }
});

//authenticate
router.post('/authenticate', (req, res, next) => {

    const userid = req.body.userid;
    const userpassword = req.body.userpassword;

    User.getUserByUsername(userid, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({ success: false, msg: '아이디 없음' });
        }
        User.comparePassword(userpassword, user.userpassword, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                User.findOne({ userid }, (err, user) => {
                    if (user.auth == false) {
                        localStorage.setItem('userid',userid);
                        return res.json({ success: false, auth: false, msg: '이메일 인증 안함' });
                    } else if (user.auth == true) {
                        const token = jwt.sign({ data: user }, config.secret, {
                            expiresIn: 604800 // 1week
                        });

                        res.json({
                            userNoPW2 : user.username,
                            success: true,
                            token: 'JWT ' + token,
                            userNoPW: {
                                //id: user._id,
                                username: user.username,
                                userid: user.userid,
                                semail: user.semail
                            }
                        });
                    }
                });
            } else {
                return res.json({ success: false, msg: '패스워드 다름' });
            }
        });
    });
});

//profile
// 인증 오류시 사용
router.get('/profile', (req, res, next) => {
    res.json({
        user: {
            username: req.user.username, 
            userid: req.user.userid, 
            semail: req.user.semail
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
