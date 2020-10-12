const express = require('express');
const router = express.Router();
const gridfs = require('gridfs-stream');
const fs = require('fs');
const mongoose = require('mongoose');
const crypto = require('crypto');
const config = require('../config/database');

// 암복호화 알고리즘
const algorithm = 'aes-256-ctr';

// 암복호화 키
let passkey = config.secret;
passkey = crypto.createHash('sha256').update(String(passkey)).digest('base64').substr(0, 32);

// 암호화
const encrypt = (buffer) => {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, passkey, iv);
    const result = Buffer.concat([iv, cipher.update(buffer), cipher.final()]);
    return result;
}

// 복호화
const decrypt = (encrypted) => {
    const iv = encrypted.slice(0, 16);
    encrypted = encrypted.slice(16);
    const decipher = crypto.createDecipheriv(algorithm, passkey, iv);
    const result = Buffer.concat([decipher.update(encrypted), decipher.final()]);
    return result;
};

gridfs.mongo = mongoose.mongo;
var connection = mongoose.connection;

connection.once('open', () => {

    var gfs = gridfs(connection.db);

    //     // 업로드 잘됨시작
    //     // 로그 업로드
    router.post('/logupload', (req, res) => {
        let {
            file
        } = req.files;

        var filename = req.body.filename;
        console.log(req.files);

        var userid = req.body.userid;
        let writeStream = gfs.createWriteStream({
            filename: filename,
            mode: 'w',
            content_type: file.mimetype,
            aliases: userid,
            chunkSize: 10485760
        });

        writeStream.on('close', function (uploadedFile) {
            res.send('Stored File: ' + uploadedFile.filename);
        });
        writeStream.write(encrypt(file.data));
        writeStream.end();

    });

    //     // 업로드 잘됨 끝
    // 모바일용 업로드
    router.post('/loguploads', (req, res) => {

        var filename = req.body.filename;
        var mimetype = req.body.mimetype;
        var data = req.body.data;
        var userid = req.body.userid;

        let writeStream = gfs.createWriteStream({

            filename: filename,
            mode: 'w',
            content_type: mimetype,
            aliases: userid,
            chunkSize: 10485760
        });

        writeStream.on('close', function (uploadedFile) {
            res.send('Stored File: ' + uploadedFile.filename);
        });
        writeStream.write(encrypt(data));
        writeStream.end();

    });

    // 로그 다운로드
    router.get('/logdownload/:_id', (req, res) => {

        gfs.findOne({ _id: req.params._id }, (err, file) => {
            if (!file) {
                return res.status(404).send({
                    message: 'File was not found'
                });
            }
            res.set('Content-Type', file.contentType);
            var newFilename = encodeURIComponent(file.filename);
            res.set('Content-Disposition', 'attachment; filename*=UTF-8\'\'' + newFilename);
            let data = [];
            let readstream = gfs.createReadStream({
                _id: req.params._id, highWaterMark: 10485760
            });
            readstream.on('data', (chunk) => {
                data.push(chunk);
            });
            readstream.on('end', () => {
                data = Buffer.concat((data));
                res.end(decrypt(data));
            });
            readstream.on('error', (err) => {
                console.log(`[*] Error, while downloading a file, with error:  ${err}`);
                res.status(400).send({
                    message: `Error, while downloading a file, with error:  ${err}`
                });
            });
        });
    });

    // 로그 불러오기
    router.get('/logread/:userid', (req, res) => {
        var userid = req.params.userid
        gfs.files.find({ aliases: userid }).sort({ uploadDate: -1 }).toArray(function (err, logs) {
            if (err) console.log(err);
            res.status(200).json({ msg: logs });
        });
    });

    // 로그 검색
    router.get('/search/:userid/:filename', (req, res, next) => {
        gfs.files.find({
            filename: { $regex: new RegExp(req.params.filename, 'i') },
            aliases: req.params.userid
        }).sort({ uploadDate: -1 }).toArray(function (err, logs) {
            if (err)
                res.status(500).json({ errmsg: err });
            res.status(200).json({ msg: logs });
        });
    });

    // 로그 삭제
    router.get('/logdelete/:userid/:_id', (req, res) => {
        var userid = req.params.userid;
        var id =  req.params._id 
        gfs.exist({_id : id}, (err, file) => {
            if (err || !file) {
                res.status(404).send('File Not Found');
                return;
            }
            gfs.remove({_id : id}, (err) => {
                if (err) res.status(500).send(err);
                res.redirect('http://eraser2020.herokuapp.com/logs/' + userid);
            });
        });
    });
});

module.exports = router;