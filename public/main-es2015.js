(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"text-align: center;\">\n  <flash-messages></flash-messages>\n</div>\n\n<div>\n  <router-outlet></router-outlet>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/blank-for-reload/blank-for-reload.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/blank-for-reload/blank-for-reload.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/downloadapp/downloadapp.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/downloadapp/downloadapp.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- 기본설정 -->\n<app-navbar></app-navbar>\n<div class=\"container\" style=\"text-align: center; height: 600px; padding-top: 20px;\">\n\n    <!-- 스타일 -->\n    <style>\n        a:link {\n            text-decoration: none;\n            color: black;\n        }\n\n        a:visited {\n            text-decoration: none;\n            color: black;\n        }\n    </style>\n\n    <!-- 메인 -->\n    <h3> 다운로드 센터</h3>\n    <div class=\"row\">\n        <div class=\"col-sm\">\n            <button type=\"button\" class=\"btn btn-outline-dark btn-lg btn-block\"><a\n                    href=\"http://eraser2020.herokuapp.com/ekdnsfhem/android.zip\">Windows 무료 다운로드</a></button>\n        </div>\n        <div class=\"col-sm\">\n            <button type=\"button\" class=\"btn btn-outline-dark btn-lg btn-block\"><a\n                    href=\"http://eraser2020.herokuapp.com/ekdnsfhem/windows.zip\">Android 무료 다운로드</a></button>\n        </div>\n    </div>\n</div>\n\n<!-- Footer Bottom -->\n<footer>\n    <div\n        style=\"text-align:center; padding: 30px 0 30px 0; font-size: 13px; margin: 0 auto; border-top: 1px solid #d7dbe6;\">\n        <p class=\"container\">Copyright &nbsp;© &nbsp;Eraser.T Corp. &nbsp;All rights reserved.</p>\n    </div>\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/emailregister/emailregister.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/emailregister/emailregister.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- 기본설정 -->\n<div class=\"container\" style=\"text-align: center;\">\n    <flash-messages></flash-messages>\n</div>\n\n<!-- 스타일 -->\n<style>\n    a:link {\n        text-decoration: none;\n        color: black;\n    }\n\n    a:visited {\n        text-decoration: none;\n        color: black;\n    }\n\n    #abc:focus {\n        border-color: gray;\n        box-shadow: 0 0 0 .1rem rgb(150, 150, 150);\n    }\n</style>\n\n<!-- 폰트 -->\n<link href=\"https://fonts.googleapis.com/css2?family=Acme&display=swap\" rel=\"stylesheet\">\n\n<!-- 메인 -->\n<div class=\"container\" style=\"height: 700px; background-color: white; padding:170px 10px 120px 10px; width: 700px;\">\n    <div class=\"container\" style=\"text-align: center;\">\n        <a href=\"/\" style=\"font-family: 'Acme', sans-serif; font-size: 70px; color:#044886;\">Eraser.T</a>\n        <div class=\"row\" style=\"padding:10px 10px 0 10px; margin:10px 10px 0 10px;\">\n            <div class=\"col-md-8\" style=\"margin: 0 auto; padding:15px 15px 0 15px\">\n\n                <!-- 인증번호 요청 -->\n                <form (ngSubmit)=\"emailsend()\">\n                    <div class=\"input-group mb-3\">\n                        <input id=\"abc\" type=\"text\" class=\"form-control\" placeholder=\"이메일\"\n                            aria-label=\"Recipient's username\" aria-describedby=\"button-addon2\" name=\"semail\"\n                            [(ngModel)]=\"semail\">\n                        <div class=\"input-group-append\">\n                            <button class=\"btn btn-outline-secondary\" type=\"submit\" id=\"button-addon2\"\n                                >인증번호 요청</button>\n                        </div>\n                    </div>\n                </form>\n\n                <!-- 인증확인 -->\n                <form (ngSubmit)=\"emailcert()\">\n                    <div class=\"form-group\">\n                        <input id=\"abc\" type=\"text\" class=\"form-control\" name=\"cert\" [(ngModel)]=\"cert\"\n                            placeholder=\"인증번호\" />\n                    </div>\n\n                    <div class=\"form-group\">\n                        <button type=\"submit\" class=\"btn btn-outline-secondary btn-lg btn-block\">인증번호\n                            확인</button>\n                    </div>\n                </form>\n\n                <!-- 부가적 링크 -->\n                <div style=\"border-top:1px solid #8e8e8e; padding-top: 15px; margin-top: 35px;\">\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Footer Bottom -->\n    <footer>\n        <div class=\"container\">\n            <p style=\"text-align:center; padding: 10px; font-size: 13px; margin: 0 auto;\">Copyright &nbsp;©\n                &nbsp;Eraser.T\n                Corp. &nbsp;All rights reserved.</p>\n        </div>\n    </footer>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- 기본설정 -->\n<app-navbar></app-navbar>\n\n<!-- 스타일 -->\n<style>\n  .bg-gray-1 {\n    background-color: #f8f9fa;\n  }\n\n  .text-secondary {\n    color: #044886 !important;\n  }\n</style>\n\n<!-- 메인 -->\n<div class=\"text-center py-lg-4 py-xxl-5\"\n  style=\"background:url(https://cdn.cryptopal.com/wp-content/uploads/2019/08/young-man-using-modern-smartphone-at-home.jpg) no-repeat center top; background-size:cover; height: 690px;\">\n  <div class=\"container py-4 py-xxl-5 h-100\">\n    <div class=\"d-flex align-items-center justify-content-center h-100\">\n      <div>\n        <h1>Eraser.T - 파일 완전 삭제</h1>\n        <h4>\n          <p style=\"margin-top:30px; font-weight:bold;\">데이터를 복구 할 수 없도록 덮어 쓰기하여 데이터를 완전하게 삭제합니다. <br> 삭제한 데이터와 기록은 30일간\n            보관됩니다.\n          </p>\n        </h4>\n        <h4>\n          <p style=\"font-weight:bold;\">Eraser.T는 무료 소프트웨어이며 소스 코드는 GNU General Public License에 따라 배포됩니다.</p>\n        </h4>\n\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-sm\">\n              <button type=\"button\" class=\"btn btn-outline-dark btn-lg btn-block\"\n                onclick=\"location.href='http://localhost:3000/ekdnsfhem/windows.zip';\">Windows 무료 다운로드</button>\n            </div>\n            <div class=\"col-sm\">\n              <button type=\"button\" class=\"btn btn-outline-dark btn-lg btn-block\"\n                onclick=\"location.href='http://localhost:3000/ekdnsfhem/android.zip';\">Android 무료 다운로드</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- 중간 설명 -->\n<!-- 1번째 -->\n<div class=\"py-5\">\n  <div class=\"container py-3 py-lg-4\">\n    <h2 class=\"text-secondary text-center\">선택해서 사용해야 하는 이유? - Eraser.T</h2>\n    <p class=\"mx-auto text-center mt-3\" style=\"max-width:1100px;\">간단한 삭제 또는 하드 드라이브 초기화는 데이터를 영구적으로 지우지 않습니다. 삭제 된 데이터는\n      여전히 사용 가능한 기술로 복구 할 수 있습니다. <br>Eraser.T는 파일을 영구적으로 지우고 인터넷 사용 기록, 캐시를 지우고 개인 정보를 보호하여 개인 정보를 안전하게 보호 합니다.</p>\n    <div class=\"row align-items-center mt-5\">\n      <div class=\"col-lg-6\">\n        <h4 class=\"text-secondary mt-2\">데이터, 개인정보 유출</h4>\n        <p>버려진 하드 드라이브에서 완전히 삭제되지 않은 데이터를 발견해 복구하는 범죄가 급증하고 있습니다. Eraser.T로 데이터를 완전히 삭제해서 개인정보를 보호 해야 합니다.</p>\n      </div>\n      <div class=\"col-lg-6 text-center mt-4 mt-lg-0\"><img\n          src=\"https://drfone.wondershare.com/images/images2019/product/drfone-android-eraser-1.png\" class=\"img-fluid\"\n          alt=\"privacy protection\"></div>\n    </div>\n  </div>\n</div>\n\n<!-- 2번째 -->\n<div class=\"py-5 bg-gray-1\">\n  <div class=\"container py-3 py-lg-4\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-lg-6 text-center order-2 order-lg-1 mt-4 mt-lg-0\"><img\n          src=\"https://drfone.wondershare.com/images/images2019/product/drfone-android-eraser-2.png\" class=\"img-fluid\"\n          alt=\"erase private data\"></div>\n      <div class=\"col-lg-6 order-1 order-lg-2\">\n        <h4 class=\"text-secondary mt-2\">삭제되지 않은 파일</h4>\n        <p>클릭 한 번으로 간편하게 삭제되지 않은 파일을 스캔하고 완전 삭제합니다. Eraser.T는 윈도우, 안드로이드 모두 지원합니다. 모든 종류의 파일, 모든 종류의 안드로이드 기기 지원합니다. 실수로\n          삭제한 파일도 복구 가능합니다. 삭제한 데이터는 30일간 보관합니다. 완전 삭제를 하면 하드웨어 성능이 향상합니다.</p>\n        <div class=\"row text-center\">\n          <div class=\"col-6 col-lg-4 mt-4\">\n            <div><img src=\"https://drfone.wondershare.com/images2019/android-erase-pic3.png\" width=\"116\" height=\"116\"\n                alt=\"wipe all data\"></div>\n            <h6 class=\"mt-3\">모든 파일</h6>\n          </div>\n          <div class=\"col-6 col-lg-4 mt-4\">\n            <div><img src=\"https://drfone.wondershare.com/images2019/android-9-0-pie.png\" width=\"116\" height=\"116\"\n                alt=\"all android models supported\"></div>\n            <h6 class=\"mt-3\">모든 안드로이드 기기</h6>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- 3번째 -->\n<div class=\"py-5\">\n  <div class=\"container py-3 py-lg-4\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-lg-6\">\n        <h4 class=\"text-secondary mt-2\">데이터 100% 삭제 KJ20 알고리즘 적용</h4>\n        <p>데이터를 완전히 읽을 수 없게 만들고 전체 디스크를 완전히 정리하도록 도와줍니다. 세계의 최고 수준의 해커들도 데이터의 단 한 조각도 복구할 방법이 없습니다. KJ20은 공종현, 정성철 2명의\n          개발자가 만든 알고리즘입니다. </p>\n      </div>\n      <div class=\"col-lg-6 text-center mt-4 mt-lg-0\"><img\n          src=\"https://drfone.wondershare.com/images/images2019/product/drfone-android-eraser-3.png\" class=\"img-fluid\"\n          alt=\"complete erasure\"></div>\n    </div>\n  </div>\n</div>\n\n<!-- Footer Bottom -->\n<footer>\n  <div\n    style=\"text-align:center; padding: 30px 0 30px 0; font-size: 13px; margin: 0 auto; border-top: 1px solid #d7dbe6;\">\n    <p class=\"container\">Copyright &nbsp;© &nbsp;Eraser.T Corp. &nbsp;All rights reserved.</p>\n  </div>\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/login/login.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/login/login.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- 기본설정 -->\n<div class=\"container\" style=\"text-align: center;\">\n    <flash-messages></flash-messages>\n</div>\n\n<!-- 스타일 -->\n<style>\n    a:link {\n        text-decoration: none;\n        color: black;\n    }\n\n    a:visited {\n        text-decoration: none;\n        color: black;\n    }\n\n    .acolor {\n        text-decoration: none !important;\n        color: #8e8e8e !important;\n        font-size: 12px;\n    }\n\n    .txt_bar {\n        margin: 0 13px 0 11px;\n        color: #d4d4d4;\n    }\n</style>\n\n<!-- 폰트 -->\n<link href=\"https://fonts.googleapis.com/css2?family=Acme&display=swap\" rel=\"stylesheet\">\n\n<!-- 메인 -->\n<div class=\"container\" style=\"height: 700px; background-color: white; padding:170px 10px 120px 10px; width: 700px;\">\n    <div class=\"container\" style=\"text-align: center;\">\n        <a href=\"/\" style=\"font-family: 'Acme', sans-serif; font-size: 70px; color:#044886;\">Eraser.T</a>\n        <div class=\"row\" style=\"padding:10px 10px 0 10px; margin:10px 10px 0 10px;\">\n            <div class=\"col-md-8\" style=\"margin: 0 auto; padding:15px 15px 0 15px\">\n\n                <!-- 로그인 폼 -->\n                <form (ngSubmit)=\"onLoginSubmit()\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" name=\"userid\" [(ngModel)]=\"userid\" placeholder=\"아이디\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control\" name=\"userpassword\" [(ngModel)]=\"userpassword\"\n                            placeholder=\"비밀번호\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">로그인</button>\n                    </div>\n                </form>\n\n                <!-- 부가적 링크 -->\n                <div style=\"border-top:1px solid #8e8e8e; padding-top: 15px; margin-top: 35px;\">\n                    <a class=\"acolor\" href=\"#\">아이디 찾기</a>\n                    <span class=\"txt_bar\">|</span>\n                    <a class=\"acolor\" href=\"#\">비밀번호 찾기 </a>\n                    <span class=\"txt_bar\">|</span>\n                    <a class=\"acolor\" routerLink=\"/register\">회원가입 </a>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Footer Bottom -->\n    <footer>\n        <div class=\"container\">\n            <p style=\"text-align:center; padding: 10px; font-size: 13px; margin: 0 auto;\">Copyright &nbsp;©\n                &nbsp;Eraser.T\n                Corp. &nbsp;All rights reserved.</p>\n        </div>\n    </footer>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/logs/logs.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/logs/logs.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- 기본설정 -->\n<app-navbar></app-navbar>\n<div class=\"container\" style=\"text-align: center; height: 600px; padding-top: 20px;\">\n\n    <!-- 메인 -->\n    <div class=\"card\">\n        <div class=\"card-body\">\n            <h4 class=\"card-title\">로그 목록</h4>\n            <table class=\"table table-hover\">\n                <thead align=\"center\">\n                    <tr>\n                        <th width=\"65%\">파일 이름</th>\n                        <th>날짜 / 시간</th>\n                        <th></th>\n                    </tr>\n                </thead>\n                <tbody align=\"center\">\n                    <tr *ngFor=\"let log of logs\">\n                        <td>{{log.filename}}</td>\n                        <td>\n                            <p>{{log.uploadDate | date:'yy-MM-d'}} / {{log.uploadDate | date:'HH:mm'}}</p>\n                        </td>\n                        <td><a class=\"btn btn-info\" role=\"button\"\n                                href=\"http://eraser2020.herokuapp.com/logs/logdownload/{{log._id}}\">\n                                <font color=\"white\">다운</font>\n                            </a>&nbsp;<a class=\"btn btn-danger\" role=\"button\"\n                                href=\"http://eraser2020.herokuapp.com/logs/logdelete/{{user.userid}}/{{log._id}}\">\n                                <font color=\"white\">삭제</font>\n                            </a></td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <form class=\"form-inline my-2 my-lg-0\" (ngSubmit)=\"searchLog()\" higth=\"100\">\n            <input class=\"form-control mr-sm-2\" type=\"search\" name=\"filename\" id=\"filename\" />\n            <button class=\"btn btn-primary\" type=\"submit\">\n                검색\n            </button>\n        </form>\n    </div>\n\n    <br><br><br><br>\n    <h4>테스트 중</h4>\n    <br>\n    <div class=\"card text-center m-3\">\n        <h3 class=\"card-header\">로그 목록</h3>\n        <div class=\"card-body\">\n            <!-- <h4 class=\"card-title\">로그 목록</h4> -->\n            <table class=\"table table-hover\">\n                <thead align=\"center\">\n                    <tr>\n                        <th width=\"65%\">파일 이름</th>\n                        <th>날짜 / 시간</th>\n                        <th></th>\n                    </tr>\n                </thead>\n                <tbody align=\"center\">\n                    <tr *ngFor=\"let item of pageOfItems\">\n                        <td>{{item.name}}</td>\n                        <td>{{item.uploadDate | date:'yy-MM-d'}} / {{item.uploadDate | date:'HH:mm'}}</td>\n                        <td>\n                            <a class=\"btn btn-info\" role=\"button\"\n                                href=\"http://localhost:3000/logs/logdownload/{{item.id}}\">\n                                <font color=\"white\">다운</font>\n                            </a>&nbsp;\n                            <a class=\"btn btn-danger\" role=\"button\"\n                                href=\"http://localhost:3000/logs/logdelete/{{item.userid}}/{{item.id}}\">\n                                <font color=\"white\">삭제</font>\n                            </a>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n            <form class=\"form-inline my-2 my-lg-0\" (ngSubmit)=\"searchLog()\">\n                <input class=\"form-control mr-sm-2\" type=\"search\" name=\"filename\" id=\"filename\" />\n                <button class=\"btn btn-primary\" type=\"submit\">\n                    검색\n                </button>\n            </form>\n        </div>\n        <div class=\"card-footer\">\n            <jw-pagination [items]=\"items\" (changePage)=\"onChangePage($event)\"></jw-pagination>\n        </div>\n    </div>\n\n\n    <!-- Footer Bottom -->\n    <footer>\n        <div\n            style=\"text-align:center; padding: 30px 0 30px 0; font-size: 13px; margin: 0 auto; border-top: 1px solid #d7dbe6;\">\n            <p class=\"container\">Copyright &nbsp;© &nbsp;Eraser.T Corp. &nbsp;All rights reserved.</p>\n        </div>\n    </footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/navbar/navbar.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/navbar/navbar.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- CSS -->\n<style>\n  a {\n    color: rgb(105, 105, 105);\n    font-family: 'Noto Sans KR', sans-serif;\n  }\n\n  nav {\n    position: fixed;\n    top: 0;\n    width: 100%;\n    background-color: rgba(255, 255, 255, 1);\n    padding: 0;\n    z-index: 9999;\n    box-shadow: 0 1px 10px gray;\n  }\n\n  body {\n    padding-bottom: 68px;\n  }\n\n  .nav-link:hover {\n    color: black;\n  }\n</style>\n\n<!-- 폰트 -->\n<link href=\"https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&family=Geo&display=swap\" rel=\"stylesheet\">\n<link href=\"https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap\" rel=\"stylesheet\">\n\n<!-- 메인-->\n\n<body>\n  <nav class=\"navbar navbar-expand-lg\">\n\n    <!-- 메뉴 스타일 -->\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <!-- 메뉴 설정 -->\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <div class=\"container\">\n        <ul class=\"navbar-nav ml-2 mr-4\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\"\n              style=\"font-weight: 700; font-size: 35px; font-family: 'Geo', sans-serif; color: #044886;\"\n              href=\"/\">Eraser.T</a>\n          </li>\n        </ul>\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item mr-4\"><a class=\"nav-link\" routerLink=\"#\">회사소개</a></li>\n          <li class=\"nav-item mr-4\"><a class=\"nav-link\" routerLink=\"/download\">다운로드</a></li>\n          <li class=\"nav-item mr-4\"><a class=\"nav-link\" routerLink=\"#\">제품구매</a></li>\n          <li class=\"nav-item mr-4\"><a class=\"nav-link\" routerLink=\"#\">고객센터</a></li>\n        </ul>\n\n\n        <ul class=\"navbar-nav mr-2 ml-auto\">\n          <li *ngIf=\"!checkLoggedIn()\" class=\"nav-item ml-4\">\n            <a class=\"nav-link\" routerLink=\"/login\">로그인</a>\n          </li>\n          <li *ngIf=\"!checkLoggedIn()\" class=\"nav-item ml-4\">\n            <a class=\"nav-link\" routerLink=\"/register\">회원가입</a>\n          </li>\n          <li *ngIf=\"checkLoggedIn()\" class=\"nav-item mr-4\">\n            <a class=\"nav-link\" (click)=\"gotologs()\" routerLink=\"/logs/{{userid}}\">로그</a>\n          </li>\n          <li *ngIf=\"checkLoggedIn()\" class=\"nav-item mr-4\">\n            <a class=\"nav-link\" routerLink=\"/profile\">마이페이지</a>\n          </li>\n          <li *ngIf=\"checkLoggedIn()\" class=\"nav-item\">\n            <a class=\"nav-link\" (click)=\"onLogoutClick()\" routerLink=\"/login\">로그아웃</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/profile/profile.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/profile/profile.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- 기본설정 -->\n<app-navbar></app-navbar>\n<div class=\"container\" style=\"text-align: center; height: 600px; padding-top: 20px;\">\n\n    <!-- 메인 -->\n    <div *ngIf=\"username\">\n        <h2 class=\"page-header\">>내 정보</h2>\n        <ul class=\"list-group\">\n            <li class=\"list-group-item\">이름: {{username}}</li>\n            <li class=\"list-group-item\">아이디: {{userid}}</li>\n            <li class=\"list-group-item\">핸드폰: {{userphone}} <button class=\"btn btn-primary\" (click)=\"doUpdateEmail()\">핸드폰\n                    변경</button></li>\n        </ul>\n        <button class=\"btn btn-primary\" (click)=\"doUpdatePassword()\">비밀번호 변경</button>\n    </div>\n</div>\n\n<!-- Footer Bottom -->\n<footer>\n    <div\n      style=\"text-align:center; padding: 30px 0 30px 0; font-size: 13px; margin: 0 auto; border-top: 1px solid #d7dbe6;\">\n      <p class=\"container\">Copyright &nbsp;© &nbsp;Eraser.T Corp. &nbsp;All rights reserved.</p>\n    </div>\n  </footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/profile/update-email/update-email.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/profile/update-email/update-email.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"page-header\">핸드폰 변경</h2>\n<form (ngSubmit)=\"onUpdateSubmit()\">\n    <div class=\"form-group\">\n        <label>새 핸드폰 번호</label>\n        <input type=\"text\" [(ngModel)]=\"userphone\" name=\"userphone\" class=\"form-control\">\n    </div>\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/profile/update-password/update-password.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/profile/update-password/update-password.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"page-header\">비밀번호 변경</h2>\n<form (ngSubmit)=\"onUpdateSubmit()\">\n    <div class=\"form-group\">\n        <label>새 비밀번호</label>\n        <input type=\"password\" [(ngModel)]=\"userpassword\" name=\"userpassword\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n        <label>새 비밀번호 확인</label>\n        <input type=\"password\" [(ngModel)]=\"userpassword2\" name=\"userpassword2\" class=\"form-control\">\n    </div>\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/register/register.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/register/register.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- 기본설정 -->\n<div class=\"container\" style=\"text-align: center;\">\n    <flash-messages></flash-messages>\n</div>\n\n<!-- 스타일 -->\n<style>\n    a:link {\n        text-decoration: none;\n        color: black;\n    }\n\n    a:visited {\n        text-decoration: none;\n        color: black;\n    }\n</style>\n\n<!-- 폰트 -->\n<link href=\"https://fonts.googleapis.com/css2?family=Acme&display=swap\" rel=\"stylesheet\">\n\n<!-- 메인 -->\n<div class=\"container\" style=\"height: 750px; background-color: white; padding:100px 10px 120px 10px; width: 700px;\">\n    <div class=\"container\" style=\"text-align: center;\">\n        <a href=\"/\" style=\"font-family: 'Acme', sans-serif; font-size: 70px; color:#044886;\">Eraser.T</a>\n        <div class=\"row\" style=\"padding:10px 10px 0 10px; margin:10px 10px 0 10px;\">\n            <div class=\"col-md-8\" style=\"margin: 0 auto; padding:15px 15px 0 15px\">\n\n                <!-- 회원가입 폼 -->\n                <form (ngSubmit)=\"onRegisterSubmit()\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"username\"\n                            placeholder=\"이름\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" name=\"userid\" [(ngModel)]=\"userid\" placeholder=\"아이디\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control\" name=\"userpassword\" [(ngModel)]=\"userpassword\"\n                            placeholder=\"비밀번호\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control\" name=\"userpassword2\" [(ngModel)]=\"userpassword2\"\n                            placeholder=\"비밀번호 확인\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" name=\"userphone\" [(ngModel)]=\"userphone\"\n                            placeholder=\"핸드폰 번호\" />\n                    </div>\n                    <div class=\"form-group form-check\">\n                        <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n                        <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\n                    </div>\n                    <div class=\"form-group\">\n                        <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">회원가입</button>\n                    </div>\n                </form>\n                <!-- 부가적 링크 -->\n                <div style=\"border-top:1px solid #8e8e8e; padding-top: 15px; margin-top: 35px;\">\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n    <!-- Footer Bottom -->\n    <footer>\n        <div class=\"container\">\n            <p style=\"text-align:center; padding: 10px; font-size: 13px; margin: 0 auto;\">Copyright &nbsp;©\n                &nbsp;Eraser.T\n                Corp. &nbsp;All rights reserved.</p>\n        </div>\n    </footer>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/search/search.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/search/search.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- 기본설정 -->\n<app-navbar></app-navbar>\n<div class=\"container\" style=\"text-align: center; height: 600px; padding-top: 20px;\">\n\n    <!-- 메인 -->\n    <div class=\"card\">\n        <div class=\"card-body\">\n            <h4 class=\"card-title\">검색 결과</h4>\n            <table class=\"table table-hover\">\n                <thead align=\"center\">\n                    <tr>\n                        <th width=\"65%\">파일 이름</th>\n                        <th>날짜 / 시간</th>\n                        <th></th>\n                    </tr>\n                </thead>\n                <tbody align=\"center\">\n                    <tr *ngFor=\"let log of logs\">\n                        <td>{{log.filename}}</td>\n                        <td>\n                            <p>{{log.uploadDate | date:'yy-MM-d'}} / {{log.uploadDate | date:'HH:mm'}}</p>\n                        </td>\n                        <td><a class=\"btn btn-info\" role=\"button\"\n                                href=\"http://localhost:3000/logs/logdownload/{{user.userid}}/{{log.filename}}\">\n                                <font color=\"white\">다운</font>\n                            </a>&nbsp;<a class=\"btn btn-danger\" role=\"button\"\n                                href=\"http://localhost:3000/logs/logdelete/{{user.userid}}/{{log.filename}}\">\n                                <font color=\"white\">삭제</font>\n                            </a></td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <form class=\"form-inline my-2 my-lg-0\" (ngSubmit)=\"searchLog()\">\n            <input class=\"form-control mr-sm-2\" type=\"search\" name=\"filename\" id=\"filename\" />\n            <button class=\"btn btn-primary\" type=\"submit\">\n                검색\n            </button>\n        </form>\n    </div>\n\n\n    <br><br><br><br>\n    <h4>테스트 중</h4>\n    <br>\n    <div class=\"card text-center m-3\">\n        <h3 class=\"card-header\">로그 목록</h3>\n        <div class=\"card-body\">\n            <!-- <h4 class=\"card-title\">로그 목록</h4> -->\n            <table class=\"table table-hover\">\n                <thead align=\"center\">\n                    <tr>\n                        <th width=\"65%\">파일 이름</th>\n                        <th>날짜 / 시간</th>\n                        <th></th>\n                    </tr>\n                </thead>\n                <tbody align=\"center\">\n                    <tr *ngFor=\"let item of pageOfItems\">\n                        <td>{{item.name}}</td>\n                        <td>{{item.uploadDate | date:'yy-MM-d'}} / {{item.uploadDate | date:'HH:mm'}}</td>\n                        <td>\n                            <a class=\"btn btn-info\" role=\"button\"\n                                href=\"http://eraser2020.herokuapp.com/logs/logdownload/{{item.id}}\">\n                                <font color=\"white\">다운</font>\n                            </a>&nbsp;\n                            <a class=\"btn btn-danger\" role=\"button\"\n                                href=\"http://eraser2020.herokuapp.com/logs/logdelete/{{item.userid}}/{{item.id}}\">\n                                <font color=\"white\">삭제</font>\n                            </a>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n            <form class=\"form-inline my-2 my-lg-0\" (ngSubmit)=\"searchLog()\">\n                <input class=\"form-control mr-sm-2\" type=\"search\" name=\"filename\" id=\"filename\" />\n                <button class=\"btn btn-primary\" type=\"submit\">\n                    검색\n                </button>\n            </form>\n        </div>\n        <div class=\"card-footer\">\n            <jw-pagination [items]=\"items\" (changePage)=\"onChangePage($event)\"></jw-pagination>\n        </div>\n    </div>\n\n    <!-- Footer Bottom -->\n    <footer>\n        <div\n            style=\"text-align:center; padding: 30px 0 30px 0; font-size: 13px; margin: 0 auto; border-top: 1px solid #d7dbe6;\">\n            <p class=\"container\">Copyright &nbsp;© &nbsp;Eraser.T Corp. &nbsp;All rights reserved.</p>\n        </div>\n    </footer>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/navbar/navbar.component */ "./src/app/component/navbar/navbar.component.ts");
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/login/login.component */ "./src/app/component/login/login.component.ts");
/* harmony import */ var _component_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/register/register.component */ "./src/app/component/register/register.component.ts");
/* harmony import */ var _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/profile/profile.component */ "./src/app/component/profile/profile.component.ts");
/* harmony import */ var _component_profile_update_password_update_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/profile/update-password/update-password.component */ "./src/app/component/profile/update-password/update-password.component.ts");
/* harmony import */ var _component_profile_update_email_update_email_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/profile/update-email/update-email.component */ "./src/app/component/profile/update-email/update-email.component.ts");
/* harmony import */ var _component_logs_logs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/logs/logs.component */ "./src/app/component/logs/logs.component.ts");
/* harmony import */ var _component_downloadapp_downloadapp_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/downloadapp/downloadapp.component */ "./src/app/component/downloadapp/downloadapp.component.ts");
/* harmony import */ var _component_search_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/search/search.component */ "./src/app/component/search/search.component.ts");
/* harmony import */ var _component_blank_for_reload_blank_for_reload_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/blank-for-reload/blank-for-reload.component */ "./src/app/component/blank-for-reload/blank-for-reload.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _component_emailregister_emailregister_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/emailregister/emailregister.component */ "./src/app/component/emailregister/emailregister.component.ts");
















const routes = [
    { path: '', component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'navbar', component: _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"] },
    { path: 'login', component: _component_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'register', component: _component_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'profile', component: _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'profile/updatePassword', component: _component_profile_update_password_update_password_component__WEBPACK_IMPORTED_MODULE_8__["UpdatePasswordComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'profile/updateEmail', component: _component_profile_update_email_update_email_component__WEBPACK_IMPORTED_MODULE_9__["UpdateEmailComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'logs/:userid', component: _component_logs_logs_component__WEBPACK_IMPORTED_MODULE_10__["LogsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'download', component: _component_downloadapp_downloadapp_component__WEBPACK_IMPORTED_MODULE_11__["DownloadappComponent"] },
    { path: 'search/:userid/:filename', component: _component_search_search_component__WEBPACK_IMPORTED_MODULE_12__["SearchComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'blank-for-reload', component: _component_blank_for_reload_blank_for_reload_component__WEBPACK_IMPORTED_MODULE_13__["BlankForReloadComponent"] },
    { path: 'emailregister', component: _component_emailregister_emailregister_component__WEBPACK_IMPORTED_MODULE_15__["EmailregisterComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const array = ['data0', 'data1', 'data2'];
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'firstStudy';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_blank_for_reload_blank_for_reload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/blank-for-reload/blank-for-reload.component */ "./src/app/component/blank-for-reload/blank-for-reload.component.ts");
/* harmony import */ var _component_downloadapp_downloadapp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/downloadapp/downloadapp.component */ "./src/app/component/downloadapp/downloadapp.component.ts");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/login/login.component */ "./src/app/component/login/login.component.ts");
/* harmony import */ var _component_logs_logs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/logs/logs.component */ "./src/app/component/logs/logs.component.ts");
/* harmony import */ var _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/navbar/navbar.component */ "./src/app/component/navbar/navbar.component.ts");
/* harmony import */ var _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/profile/profile.component */ "./src/app/component/profile/profile.component.ts");
/* harmony import */ var _component_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/register/register.component */ "./src/app/component/register/register.component.ts");
/* harmony import */ var _component_search_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/search/search.component */ "./src/app/component/search/search.component.ts");
/* harmony import */ var _component_profile_update_email_update_email_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/profile/update-email/update-email.component */ "./src/app/component/profile/update-email/update-email.component.ts");
/* harmony import */ var _component_profile_update_password_update_password_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/profile/update-password/update-password.component */ "./src/app/component/profile/update-password/update-password.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _component_emailregister_emailregister_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./component/emailregister/emailregister.component */ "./src/app/component/emailregister/emailregister.component.ts");
/* harmony import */ var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! jw-angular-pagination */ "./node_modules/jw-angular-pagination/fesm2015/jw-angular-pagination.js");

























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _component_blank_for_reload_blank_for_reload_component__WEBPACK_IMPORTED_MODULE_5__["BlankForReloadComponent"],
            _component_downloadapp_downloadapp_component__WEBPACK_IMPORTED_MODULE_6__["DownloadappComponent"],
            _component_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _component_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            _component_logs_logs_component__WEBPACK_IMPORTED_MODULE_9__["LogsComponent"],
            _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
            _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
            _component_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
            _component_search_search_component__WEBPACK_IMPORTED_MODULE_13__["SearchComponent"],
            _component_profile_update_email_update_email_component__WEBPACK_IMPORTED_MODULE_14__["UpdateEmailComponent"],
            _component_profile_update_password_update_password_component__WEBPACK_IMPORTED_MODULE_15__["UpdatePasswordComponent"],
            _component_emailregister_emailregister_component__WEBPACK_IMPORTED_MODULE_23__["EmailregisterComponent"],
            jw_angular_pagination__WEBPACK_IMPORTED_MODULE_24__["JwPaginationComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_18__["FlashMessagesModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_21__["JwtModule"].forRoot({
                config: {
                    tokenGetter: () => {
                        return localStorage.getItem('id_token');
                    }
                }
            })
        ],
        providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_17__["ValidateService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_18__["FlashMessagesService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/component/blank-for-reload/blank-for-reload.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/component/blank-for-reload/blank-for-reload.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ibGFuay1mb3ItcmVsb2FkL2JsYW5rLWZvci1yZWxvYWQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/component/blank-for-reload/blank-for-reload.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/component/blank-for-reload/blank-for-reload.component.ts ***!
  \**************************************************************************/
/*! exports provided: BlankForReloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankForReloadComponent", function() { return BlankForReloadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BlankForReloadComponent = class BlankForReloadComponent {
    constructor() { }
    ngOnInit() {
    }
};
BlankForReloadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-blank-for-reload',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./blank-for-reload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/blank-for-reload/blank-for-reload.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./blank-for-reload.component.scss */ "./src/app/component/blank-for-reload/blank-for-reload.component.scss")).default]
    })
], BlankForReloadComponent);



/***/ }),

/***/ "./src/app/component/downloadapp/downloadapp.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/component/downloadapp/downloadapp.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9kb3dubG9hZGFwcC9kb3dubG9hZGFwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/component/downloadapp/downloadapp.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/downloadapp/downloadapp.component.ts ***!
  \****************************************************************/
/*! exports provided: DownloadappComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadappComponent", function() { return DownloadappComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DownloadappComponent = class DownloadappComponent {
    constructor() { }
    ngOnInit() {
    }
};
DownloadappComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-downloadapp',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./downloadapp.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/downloadapp/downloadapp.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./downloadapp.component.scss */ "./src/app/component/downloadapp/downloadapp.component.scss")).default]
    })
], DownloadappComponent);



/***/ }),

/***/ "./src/app/component/emailregister/emailregister.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/component/emailregister/emailregister.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9lbWFpbHJlZ2lzdGVyL2VtYWlscmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/component/emailregister/emailregister.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/component/emailregister/emailregister.component.ts ***!
  \********************************************************************/
/*! exports provided: EmailregisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailregisterComponent", function() { return EmailregisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_validate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/validate.service */ "./src/app/services/validate.service.ts");






let EmailregisterComponent = class EmailregisterComponent {
    constructor(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    emailsend() {
        const email = {
            semail: this.semail
        };
        if (!email.semail) {
            this.flashMessage.show('빈칸이 있습니다.', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Required Fields
        else if (!this.validateService.validateEmail(email.semail)) {
            this.flashMessage.show('이메일 형식이 아닙니다.', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // email send
        else {
            alert("인증번호가 발송되었습니다.");
            this.authService.emailregisterUser(email).subscribe(data => {
                if (data == false) {
                    this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        }
    }
    emailcert() {
        const cert = {
            cert: this.cert
        };
        // email cert
        this.authService.emailcertUser(cert).subscribe(data => {
            if (data.success) {
                this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                this.router.navigate(['/']);
            }
            else {
                this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    }
};
EmailregisterComponent.ctorParameters = () => [
    { type: src_app_services_validate_service__WEBPACK_IMPORTED_MODULE_5__["ValidateService"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
EmailregisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-emailregister',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./emailregister.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/emailregister/emailregister.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./emailregister.component.scss */ "./src/app/component/emailregister/emailregister.component.scss")).default]
    })
], EmailregisterComponent);



/***/ }),

/***/ "./src/app/component/home/home.component.scss":
/*!****************************************************!*\
  !*** ./src/app/component/home/home.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/component/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/component/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/component/login/login.component.scss":
/*!******************************************************!*\
  !*** ./src/app/component/login/login.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/component/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





let LoginComponent = class LoginComponent {
    constructor(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    ngOnInit() {
    }
    // 로그인 버튼 눌렀을때 발동
    onLoginSubmit() {
        const login = {
            userid: this.userid,
            userpassword: this.userpassword
        };
        // 로그인 검증
        this.authService.authenticateUser(login).subscribe(data => {
            if (data.success) {
                this.authService.storeUserData(data.token, data.userNoPW);
                this.router.navigate(['/']);
            }
            else if (data.auth == false) {
                alert("이메일 인증 후 가입이 완료됩니다.");
                this.router.navigate(['/emailregister']);
            }
            else {
                this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                this.router.navigate(['/login']);
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/component/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/component/logs/logs.component.scss":
/*!****************************************************!*\
  !*** ./src/app/component/logs/logs.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9sb2dzL2xvZ3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/component/logs/logs.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/logs/logs.component.ts ***!
  \**************************************************/
/*! exports provided: LogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogsComponent", function() { return LogsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LogsComponent = class LogsComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.items = [];
    }
    ngOnInit() {
        this.readBoards(this.logs);
    }
    onChangePage(pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    }
    // log 불러오기 기능
    readBoards(log) {
        this.userString = localStorage.getItem('user');
        this.user = JSON.parse(this.userString);
        // console.log(this.user);
        this.userid = this.user.userid;
        this.authService.readBoards(this.userid).subscribe(data => {
            this.logs = data['msg'];
            this.test = data['msg'];
            console.log(this.logs);
            this.items = Array(this.logs.length).fill(0).map((x, i) => ({
                id: this.logs[i]['_id'],
                name: this.logs[i]['filename'],
                uploadDate: this.logs[i]['uploadDate'],
                userid: this.userid
            }));
            // console.log(this.test[0]['_id'])
            // console.log(JSON.parse(this.test.name))
        }, error => {
            console.log(error);
        });
    }
    // 로그 검색 기능
    searchLog() {
        this.userString = localStorage.getItem('user');
        this.user = JSON.parse(this.userString);
        this.userid = this.user.userid;
        this.router.navigate(['/search/' + this.userid + '/' + $('#filename').val()]);
    }
    doDownload() {
        // this.authService.downloadBoard(this.logs._id);
    }
};
LogsComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/logs/logs.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logs.component.scss */ "./src/app/component/logs/logs.component.scss")).default]
    })
], LogsComponent);



/***/ }),

/***/ "./src/app/component/navbar/navbar.component.scss":
/*!********************************************************!*\
  !*** ./src/app/component/navbar/navbar.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/component/navbar/navbar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/navbar/navbar.component.ts ***!
  \******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





let NavbarComponent = class NavbarComponent {
    constructor(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    ngOnInit() {
    }
    onLogoutClick() {
        this.authService.logout();
        this.flashMessage.show('Logout', { cssClass: 'alert-success', timeout: 3000 });
        return false;
    }
    checkLoggedIn() {
        return this.authService.loggedIn();
    }
    gotologs() {
        this.userString = localStorage.getItem('user');
        this.user = JSON.parse(this.userString);
        this.userid = this.user.userid;
        this.router.navigate(['/logs/' + this.userid]);
    }
};
NavbarComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/component/navbar/navbar.component.scss")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/component/profile/profile.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/component/profile/profile.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/component/profile/profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/profile/profile.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ProfileComponent = class ProfileComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.authService.getProfile().subscribe(profile => {
            this.username = profile.user.username;
            this.userid = profile.user.userid;
            this.userphone = profile.user.userphone;
        }, err => {
            console.log(err);
            return false;
        });
    }
    doUpdatePassword() {
        this.router.navigate(['/profile/updatePassword']);
    }
    doUpdateEmail() {
        this.router.navigate(['/profile/updateEmail']);
    }
};
ProfileComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/component/profile/profile.component.scss")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/component/profile/update-email/update-email.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/component/profile/update-email/update-email.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wcm9maWxlL3VwZGF0ZS1lbWFpbC91cGRhdGUtZW1haWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/component/profile/update-email/update-email.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/component/profile/update-email/update-email.component.ts ***!
  \**************************************************************************/
/*! exports provided: UpdateEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateEmailComponent", function() { return UpdateEmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_validate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let UpdateEmailComponent = class UpdateEmailComponent {
    constructor(flashMessage, validateService, authService, router) {
        this.flashMessage = flashMessage;
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    onUpdateSubmit() {
        if (this.userphone == undefined) {
            this.flashMessage.show('모든 필드들을 채워주세요', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // // 이메일 주소 유효성 검사
        // if (!this.validateService.validateEmail(this.email)) {
        //   this.flashMessage.show('유효한 이메일주소를 입력하세요', { cssClass: 'alert-danger', timeout: 3000 });
        //   return false;
        // }
        this.userString = localStorage.getItem('user');
        this.user = JSON.parse(this.userString);
        this.userid = this.user.userid;
        const login = {
            userid: this.userid,
            userphone: this.userphone
        };
        this.authService.updateEmail(login).subscribe(data => {
            if (data.success) {
                this.flashMessage.show('변경 완료', { cssClass: 'alert-success', timeout: 5000 });
                this.router.navigate(['profile']);
            }
            else {
                this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                this.router.navigate(['profile/updateEmail']);
            }
        });
    }
};
UpdateEmailComponent.ctorParameters = () => [
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"] },
    { type: src_app_services_validate_service__WEBPACK_IMPORTED_MODULE_3__["ValidateService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
UpdateEmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-email',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-email.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/profile/update-email/update-email.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-email.component.scss */ "./src/app/component/profile/update-email/update-email.component.scss")).default]
    })
], UpdateEmailComponent);



/***/ }),

/***/ "./src/app/component/profile/update-password/update-password.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/component/profile/update-password/update-password.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wcm9maWxlL3VwZGF0ZS1wYXNzd29yZC91cGRhdGUtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/component/profile/update-password/update-password.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/component/profile/update-password/update-password.component.ts ***!
  \********************************************************************************/
/*! exports provided: UpdatePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePasswordComponent", function() { return UpdatePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let UpdatePasswordComponent = class UpdatePasswordComponent {
    constructor(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    onUpdateSubmit() {
        if (this.userpassword == undefined || this.userpassword2 == undefined) {
            this.flashMessage.show('모든 필드들을 채워주세요', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // 패스워드 값이 같은지 확인
        if (this.userpassword !== this.userpassword2) {
            console.log('패스워드가 다릅니다...');
            this.flashMessage.show('패스워드가 다릅니다. 다시 입력하세요', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.userString = localStorage.getItem('user');
        this.user = JSON.parse(this.userString);
        this.userid = this.user.userid;
        const login = {
            userid: this.userid,
            userpassword: this.userpassword
        };
        this.authService.updatePassword(login).subscribe(data => {
            if (data.success) {
                this.flashMessage.show('변경 완료', { cssClass: 'alert-success', timeout: 5000 });
                this.router.navigate(['profile']);
            }
            else {
                this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                this.router.navigate(['profile/updatePassword']);
            }
        });
    }
};
UpdatePasswordComponent.ctorParameters = () => [
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
UpdatePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/profile/update-password/update-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-password.component.scss */ "./src/app/component/profile/update-password/update-password.component.scss")).default]
    })
], UpdatePasswordComponent);



/***/ }),

/***/ "./src/app/component/register/register.component.scss":
/*!************************************************************!*\
  !*** ./src/app/component/register/register.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/component/register/register.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/register/register.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let RegisterComponent = class RegisterComponent {
    constructor(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    onRegisterSubmit() {
        const user = {
            username: this.username,
            userid: this.userid,
            userpassword: this.userpassword,
            userpassword2: this.userpassword2,
            userphone: this.userphone
        };
        // // Required Fields
        // if (!this.validateService.validateRegister(user)) {
        //   this.flashMessage.show('빈칸이 있습니다.', { cssClass: 'alert-danger', timeout: 3000 });
        //   return false;
        // }
        // Register User
        this.authService.registerUser(user).subscribe(data => {
            if (data.success) {
                this.router.navigate(['/login']);
            }
            else {
                this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: src_app_services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/component/register/register.component.scss")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/component/search/search.component.scss":
/*!********************************************************!*\
  !*** ./src/app/component/search/search.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/component/search/search.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/search/search.component.ts ***!
  \******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");




let SearchComponent = class SearchComponent {
    constructor(route, authService, router) {
        this.route = route;
        this.authService = authService;
        this.router = router;
        this.items = [];
    }
    ngOnInit() {
        this.readBoard(this.logs);
    }
    readBoard(log) {
        this.userString = localStorage.getItem('user');
        this.user = JSON.parse(this.userString);
        this.userid = this.user.userid;
        this.filename = this.route.snapshot.params['filename'];
        this.authService.readBoard(this.filename, this.userid).subscribe(data => {
            this.logs = data['msg'];
            this.items = Array(this.logs.length).fill(0).map((x, i) => ({
                id: this.logs[i]['_id'],
                name: this.logs[i]['filename'],
                uploadDate: this.logs[i]['uploadDate'],
                userid: this.userid
            }));
        }, error => {
            console.log(error);
        });
    }
    onChangePage(pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    }
    searchLog() {
        this.userString = localStorage.getItem('user');
        this.user = JSON.parse(this.userString);
        this.userid = this.user.userid;
        this.filename = $('#filename').val();
        this.router.navigateByUrl('/blank-for-reload', {
            skipLocationChange: true,
        }).then(() => {
            this.router.navigate(['/search/' + this.userid + '/' + this.filename]);
        });
    }
};
SearchComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/search/search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.scss */ "./src/app/component/search/search.component.scss")).default]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
let AuthService = class AuthService {
    constructor(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
    }
    prepEndpoint(ep) {
        // 1. localhost에 포팅시
        // return 'http://localhost:3000/' + ep;
        // 2. Heroku 클라우드 서버에 포팅 시
        return ep;
    }
    // 회원가입
    registerUser(user) {
        const registerUrl = this.prepEndpoint('users/register');
        return this.http.post(registerUrl, user, httpOptions);
    }
    // 이메일인증
    emailregisterUser(email) {
        const emailregisterUrl = this.prepEndpoint('cert/emailregister');
        return this.http.post(emailregisterUrl, email, httpOptions);
    }
    // 인증비교
    emailcertUser(cert) {
        const emailregisterUrl = this.prepEndpoint('cert/emailregister');
        return this.http.post(emailregisterUrl, cert, httpOptions);
    }
    // 로그인
    authenticateUser(login) {
        const loginUrl = this.prepEndpoint('users/authenticate');
        return this.http.post(loginUrl, login, httpOptions);
    }
    // 비밀번호 변경
    updatePassword(userNoPW) {
        const updatePasswordUrl = this.prepEndpoint('users/profile/updatePassword');
        return this.http.put(updatePasswordUrl, userNoPW, httpOptions);
    }
    // 이메일 변경
    updateEmail(userNoPW) {
        const updateEmailUrl = this.prepEndpoint('users/profile/updateEmail');
        return this.http.put(updateEmailUrl, userNoPW, httpOptions);
    }
    // 프로필
    getProfile() {
        this.authToken = localStorage.getItem('id_token');
        const httpOptions1 = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Access-Control-Allow-Headers': '*',
                'Content-Type': 'application/json',
                'Authorization': this.authToken
            })
        };
        const profileUrl = this.prepEndpoint('users/profile');
        return this.http.get(profileUrl, httpOptions1);
    }
    // 로컬스토리지 업데이트
    storeUserData(token, userNoPW) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(userNoPW));
        this.authToken = token;
        this.userNoPW = userNoPW;
    }
    // 로그아웃
    logout() {
        this.authToken = null;
        this.userNoPW = null;
        localStorage.clear();
    }
    // 로그인 확인
    loggedIn() {
        return !this.jwtHelper.isTokenExpired(this.authToken);
    }
    // 로그 목록 불러오기
    readBoards(username) {
        const LogUrl = this.prepEndpoint('logs/logread/' + username);
        return this.http.get(LogUrl, httpOptions);
    }
    // 로그 검색
    readBoard(filename, userid) {
        const LogOneUrl = this.prepEndpoint('logs/search/' + userid + '/' + filename);
        return this.http.get(LogOneUrl, httpOptions);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ValidateService = class ValidateService {
    constructor() { }
    // 이메일 유효성 검사
    validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
};
ValidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ValidateService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kdsko\Desktop\졸작\eraser2020\angular-front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map