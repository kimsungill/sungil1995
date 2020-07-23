const express = require('express');
const router = express.Router();
const gridfs = require('gridfs-stream');
const mongoose = require('mongoose');

gridfs.mongo = mongoose.mongo;
var connection = mongoose.connection;

connection.once('open', () => {

    var gfs = gridfs(connection.db);

    // 로그 업로드
    router.post('/logupload', (req, res) => {
        let {
            file
        } = req.files;
        var userid = req.body.userid;
        let writeStream = gfs.createWriteStream({
            filename: `${file.name}`,
            mode: 'w',
            content_type: file.mimetype,
            aliases: userid
        });
        writeStream.on('close', function (uploadedFile) {
            res.send('Stored File: ' + uploadedFile.filename);
        });
        writeStream.write(file.data);
        writeStream.end();
    });

    // 로그 다운로드
    router.get('/logdownload/:filename', (req, res) => {
        var filename = req.params.filename;
        gfs.exist({ filename: filename }, (err, file) => {
            if (err || !file) {
                res.status(404).send('File Not Found');
                return
            }
            res.set('Content-Type', file.contentType);
            var newFilename = encodeURIComponent(filename);
            res.set('Content-Disposition', 'attachment; filename*=UTF-8\'\'' + newFilename);
            var readstream = gfs.createReadStream({ filename: filename });
            readstream.pipe(res);
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
            filename: req.params.filename,
            aliases: req.params.userid
        }).sort({ uploadDate: -1 }).toArray(function (err, logs) {
            if (err)
                res.status(500).json({ errmsg: err });
            res.status(200).json({ msg: logs });
        });
    
    });

    // 로그 삭제
    router.get('/logdelete/:filename', (req, res) => {
        var filename = req.params.filename;
        gfs.exist({ filename: filename }, (err, file) => {
            if (err || !file) {
                res.status(404).send('File Not Found');
                return;
            }
            gfs.remove({ filename: filename }, (err) => {
                if (err) res.status(500).send(err);
                res.redirect('back');
            });
        });
    });
});

module.exports = router;