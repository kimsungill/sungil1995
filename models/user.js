const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// user schema
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    userid: {
        type: String,
        required: true
    },
    userpassword: {
        type: String,
        required: true
    },
    userpassword2: {
        type: String,
        required: false
    },
    userphone: {
        type: Number,
        required: true
    },
    semail: {
        type: String,
        required: false
    },
    ecert: {
        type: String,
        required: false
    },
    auth: {
        type: Boolean,
        required: true
    },
});

const User1 = module.exports = mongoose.model('User', UserSchema);

// id 불러오기
User1.getUserById = function (id, callback) {
    User1.findById(id, callback);
}

// username 불러오기
User1.getUserByUsername = function (userid, callback) {
    const query = { userid: userid };
    User1.findOne(query, callback);
}

// 새로운 user 만들기, bcrypt로 password 암호화
User1.addUser = function (newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.userpassword, salt, (err, hash) => {
            if (err) throw err;
            newUser.userpassword = hash;
            newUser.save(callback);
        });
    });
}

// 로그인시 비밀번호 일치하는지 확인
User1.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
}