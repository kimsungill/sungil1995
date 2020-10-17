const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const users = require('./routes/users');
const certs = require('./routes/certs');
const config = require('./config/database');
const app = express();
const port = process.env.PORT || 3000;
require('./express.config')(app);

// 연결 옵션
mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true }).catch(function (error) { console.log('catch handler') });

// 연결 성공 메세지
mongoose.connection.on('connected', () => {
    console.log('Connected to Database ' + config.database);
});

// 연결 에러 메세지
mongoose.connection.on('error', err => {
    console.log('Database error: ' + err);
});

/* Cross Origin Resource Sharing의 약자로, 현재 Application의 도메인(웹페이지)에서 
다른 웹페이지 도메인으로 리소스가 요청되는 경우를 얘기합니다. 
예를 들면, 웹페이지인 http://web.com 에서 API서버 URL인 http://api.com이란 
도메인으로 API를 요청하면 http 형태로 요청이 되므로 브라우저 자체에서 보안 상 이유로 
CORS를 제한하게 되는 현상을 말합니다. */
app.use(cors());

/* 가지고 있는 데이터를 내가 원하는 형태의 데이터로 ‘가공'하는 과정을 parsing 이라 하며 
그 과정을 수행하는 모듈 혹은 메소드를 parser 라 일컫는다. 
단순히 말하자면 내가 모르는 언어를 내가 원하는 언어의 구조로 바꿔주는 일종의 구문 해석기라고 말할 수도 있다. */
app.use(bodyParser.json());

// passport middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// 기본 설정
app.use(express.static(path.join(__dirname, 'public')));
app.use('/certs', certs);
app.use('/users', users);
app.use('/ekdnsfhem', express.static(__dirname + '/download'));

// 서버 시작 메세지
app.listen(port, function () {
    console.log("server started on port " + port);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})