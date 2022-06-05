(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding class=\"animated fadeIn login auth-page\">\n   <div class=\"popup_alert\" *ngIf=\"loader_visible\">\n    <div class=\"modal-dialog\">\n      <div class=\"loader\"></div>\n    </div>\n  </div>\n   <div class=\"\">\n  <div class=\"row\">\n    <div class=\"col-md-12\" style=\"text-align: center;\n    margin-top: 35%;\">\n      <img style=\"width: 25%;\" src=\"../../../assets/img/logo1.png\" class=\"imgs\">\n      <p style=\"font-size: 30px;\n      color: #e94d62;\n      font-weight: 400;\">Blood Bank</p>\n    </div>\n  </div>\n  <div class=\"row\">\n   <div class=\"col-md-12\" style=\"text-align: center;margin-top: 35%;\">\n     <div class=\"col-md-12\">\n     <div class=\"shadows\"> \n      <div class=\"row\">\n        <div class=\"column20\">\n          <div class=\"container\">\n            <div class=\"vertical-center\" style=\"margin-left: 30%;\">\n              <img src=\"../../../assets/icon/mail.png\">\n            </div>\n          </div>\n           \n        </div>\n        <div class=\"column10\" >\n          <div class=\"container\" style=\"padding:0% !important;margin-top: 2px;\">\n            <div class=\"vertical-center\">\n              <p style=\"font-size: 33px;\n              font-weight: 100; color: lightgray;\" >|</p>\n            </div>\n          </div>\n          \n        </div>\n        <div class=\"column70\">\n          <div class=\"container\" style=\"padding:0% !important;\">\n            <div class=\"vertical-center\" style=\"text-align: left;\">\n              <span style=\"color: #9d9d9d\">User Name</span>\n              <input type=\"text\" [(ngModel)]=\"login_id\" name=\"login_id\" class=\"text_field_css\">\n            </div>\n          </div>\n        </div>\n    </div>\n    </div>\n   </div>\n   <br>\n   <div class=\"col-md-12\">\n    <div class=\"shadows\"> \n     <div class=\"row\">\n       <div class=\"column20\">\n         <div class=\"container\">\n           <div class=\"vertical-center\" style=\"margin-left: 30%;\">\n             <img src=\"../../../assets/icon/lock.png\">\n           </div>\n         </div>\n          \n       </div>\n       <div class=\"column10\" >\n         <div class=\"container\" style=\"padding:0% !important;margin-top: 2px;\">\n           <div class=\"vertical-center\">\n             <p style=\"font-size: 33px;\n             font-weight: 100; color: lightgray;\" >|</p>\n           </div>\n         </div>\n         \n       </div>\n       <div class=\"column70\">\n         <div class=\"container\" style=\"padding:0% !important;\">\n           <div class=\"vertical-center\" style=\"text-align: left;\">\n             <span style=\"color: #9d9d9d\">Password</span>\n             <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"text_field_css\">\n           </div>\n         </div>\n       </div>\n   </div>\n   </div>\n  </div>\n     <br>\n     <button class=\"primary_button\" (click)=\"goToHome()\">Sign In</button>\n     <br>\n   </div>\n   </div>\n  </div>\n </ion-content>"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".paz {\n  position: relative;\n  z-index: 10;\n}\n\n.example1 {\n  background: url('background.png');\n  background-repeat: no-repeat;\n  background-size: auto;\n}\n\n.shadows {\n  width: 100%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  height: 70px;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n/* Create three equal columns that floats next to each other */\n\n.column10 {\n  float: left;\n  width: 5%;\n}\n\n.column20 {\n  float: left;\n  width: 20%;\n}\n\n.column70 {\n  float: left;\n  width: 70%;\n}\n\n/* Clear floats after the columns */\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.container {\n  height: 70px;\n  position: relative;\n}\n\n.vertical-center {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb2hhbW1lZGltdGhpeWFzL0RvY3VtZW50cy9CbG9vZGJhbmtfYXBwL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNMSjs7QURTQTtFQUNJLGlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtBQ05KOztBRFNBO0VBQ0ksV0FBQTtFQUNBLDRFQUFBO0VBQ0EsWUFBQTtBQ05KOztBRFNFO0VBQ0Usc0JBQUE7QUNOSjs7QURTRSw4REFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxTQUFBO0FDTko7O0FEU0U7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQ05KOztBRFVFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUNQSjs7QURVRSxtQ0FBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ1BKOztBRFdFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDUko7O0FEV0U7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBRUEsMkJBQUE7QUNSSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICAvLyBpb24tY29udGVudCB7XG4gICAgLy8gICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0taW9uLWNvbG9yLWRhcmspLCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkpO1xuICAgIC8vIH1cbn1cblxuLnBheiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEwO1xufVxuXG5cbi5leGFtcGxlMSB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmQucG5nJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG59XG5cbi5zaGFkb3dzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICAgIGhlaWdodDogNzBweDtcbiAgfVxuXG4gICoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgXG4gIC8qIENyZWF0ZSB0aHJlZSBlcXVhbCBjb2x1bW5zIHRoYXQgZmxvYXRzIG5leHQgdG8gZWFjaCBvdGhlciAqL1xuICAuY29sdW1uMTAge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA1JTtcbiAgfVxuXG4gIC5jb2x1bW4yMCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxuXG5cbiAgLmNvbHVtbjcwIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogNzAlO1xuICB9XG4gIFxuICAvKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cbiAgLnJvdzphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBjbGVhcjogYm90aDtcbiAgfVxuICBcblxuICAuY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAudmVydGljYWwtY2VudGVyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB9XG5cbiAgXG4iLCIucGF6IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmV4YW1wbGUxIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xufVxuXG4uc2hhZG93cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICBoZWlnaHQ6IDcwcHg7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBDcmVhdGUgdGhyZWUgZXF1YWwgY29sdW1ucyB0aGF0IGZsb2F0cyBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cbi5jb2x1bW4xMCB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNSU7XG59XG5cbi5jb2x1bW4yMCB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjAlO1xufVxuXG4uY29sdW1uNzAge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDcwJTtcbn1cblxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXG4ucm93OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi52ZXJ0aWNhbC1jZW50ZXIge1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, menuCtrl, toastCtrl, alertCtrl, loadingCtrl, formBuilder, _api, toastr, statusBar, storage) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this._api = _api;
        this.toastr = toastr;
        this.statusBar = statusBar;
        this.storage = storage;
        this.loader_visible = false;
        this.statusBar.overlaysWebView(true);
        this.statusBar.backgroundColorByHexString('#33000000');
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.goToHome = function () {
        var _this = this;
        this.loader_visible = true;
        console.log(this.login_id, this.password);
        this.storage.set('user_type', this.login_id);
        var a = {
            'phone_number': this.login_id,
            'password': this.password
        };
        console.log(a);
        this._api.login_api(a).subscribe(function (response) {
            console.log(response.Data);
            if (response.Code == 200) {
                _this.toastr.successToastr(response.Message);
                _this.storage.set('employee_detail', response.Data);
                _this.navCtrl.navigateRoot('/dashboard');
            }
            else {
                _this.loader_visible = false;
                _this.toastr.errorToastr(response.Message);
            }
        });
    };
    LoginPage.prototype.forgot_view = function () {
        this.navCtrl.navigateRoot('/forgot_password');
    };
    LoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        __param(9, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["SESSION_STORAGE"])),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], Object])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map