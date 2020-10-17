const express = require('express');
const router = express.Router();
const User = require('../models/user');
const nodemailer = require('nodemailer');
const randomString = Math.random().toString(36).slice(2);
const LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');

require('dotenv').config();

// email
router.post('/emailauth', (req, res, next) => {
    let Email = new User({
        userid: localStorage.getItem('userid'),
        semail: req.body.semail,
        ecert: randomString,
    });

    let cert = { cert: req.body.cert };

    if (!cert.cert) {
        let smtpTransport = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.gid,
                pass: process.env.gpw
            }
        });

        const mailOptions = {
            from: `"Eraser.T" <${process.env.gid}>`,
            to: Email.semail,
            subject: '인증번호 요청이 발송되었습니다.',
            text: randomString
            // html: '<h1>HTML Test<h1><p><img src="https://postfiles.pstatic.net/MjAxODEyMzFfMTk1/MDAxNTQ2MjMyNjU4NDc3.apeLcP_BEpVEj0z6SvTebsUGG8DJTbTSZmdHgNH82h4g.mHNubV6TsVtEEUt8ufphzKleSvQOTENsNTaxzqWeFgog.JPEG.dilrong/Screenshot_2018-12-31_at_13.55.57.jpg?type=w773"/></p>'
        };

        smtpTransport.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err);
            }

            else {
                console.log('email has been sent.');
                User.updateOne({userid:Email.userid}, { $set: { "semail": req.body.semail, "ecert": randomString } }, function (err) {
                    if (err) {
                        res.json({ success: false, msg: '변경 실패' });
                    } else {
                        res.json({ success: true, msg: '변경 성공' });
                    }
                });
            }
            smtpTransport.close();
        });
    }

    else {
        User.findOne({userid:Email.userid}, function (err, user) {
            if (err) console.log(err);
            if (cert.cert == user.ecert) {
                User.updateOne({userid:Email.userid}, { $set: { "auth": true } }, function (err) {
                    if (err) console.log(err)
                    localStorage.clear();
                });
                res.json({ success: true, msg: '인증 성공' });
            } else {
                res.json({ success: false, msg: '일치하지 않음' });
            }
        });
    }
});

module.exports = router;