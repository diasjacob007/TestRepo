webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ":host{\n    height: 100vh;\n}\n.news-container{\n    margin: auto;\n    width: 90vw;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    height: 100vh;\n    overflow-x: auto;    \n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <span>News Application</span>\n    <button mat-button [routerLink]=\"['/news/category_wise']\">Category Wise News</button>\n    <button id=\"top-button\" mat-button [routerLink]=\"['/news/trending_wise']\">Top News</button>\n    <button id=\"watchlist\" mat-button [routerLink]=\"['/news/watchlist']\">My FavouriteNewsList</button>\n    <button class=\"search-button\" mat-button [routerLink]=\"['/news/search']\">Search</button>\n    <button class=\"logout-button\" mat-button (click)=\"Logout()\">Logout</button>    \n</mat-toolbar>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_authentication_authentication_service__ = __webpack_require__("./src/app/modules/authentication/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Used for creating the buttons with proper api call
var AppComponent = /** @class */ (function () {
    function AppComponent(auth, routes) {
        this.auth = auth;
        this.routes = routes;
        this.isLoggedIn = false;
        console.log('Inside OnInit...of AppComponent isLoggined value is', this.isLoggedIn);
        // this.isLoggedIn=false;
    }
    // ngOnInit(){
    //   this.isLoggedIn=this.auth.isAuthenticated() ? true : false;
    //   console.log('Inside ngOnInit isLoggedIn value is',this.isLoggedIn);
    // }
    AppComponent.prototype.Logout = function () {
        this.auth.deleteToken();
        this.routes.navigate(['/login']);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__modules_authentication_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_news_news_module__ = __webpack_require__("./src/app/modules/news/news.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_authentication_authentication_module__ = __webpack_require__("./src/app/modules/authentication/authentication.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_toolbar__ = __webpack_require__("./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__authGuard_service__ = __webpack_require__("./src/app/authGuard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__modules_news_news_module__["a" /* NewsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__modules_authentication_authentication_module__["a" /* AuthenticationModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["e" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__authGuard_service__["a" /* AuthguardService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authGuard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthguardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_authentication_authentication_service__ = __webpack_require__("./src/app/modules/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthguardService = /** @class */ (function () {
    function AuthguardService(route, authService) {
        this.route = route;
        this.authService = authService;
    }
    AuthguardService.prototype.canActivate = function () {
        if (!this.authService.isAuthenticated()) {
            this.route.navigate(['login']);
            return false;
        }
        return true;
    };
    AuthguardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_0__modules_authentication_authentication_service__["a" /* AuthenticationService */]])
    ], AuthguardService);
    return AuthguardService;
}());



/***/ }),

/***/ "./src/app/modules/authentication/User.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/modules/authentication/authentication-router.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__("./src/app/modules/authentication/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_register_component__ = __webpack_require__("./src/app/modules/authentication/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var authRoutes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */],
                pathMatch: 'full'
            },
            {
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_1__register_register_component__["a" /* RegisterComponent */]
            },
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */]
            }
        ]
    }
];
var AuthenticationRoutingModule = /** @class */ (function () {
    function AuthenticationRoutingModule() {
    }
    AuthenticationRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(authRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */]]
        })
    ], AuthenticationRoutingModule);
    return AuthenticationRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/authentication/authentication.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_icon__ = __webpack_require__("./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_input__ = __webpack_require__("./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_register_component__ = __webpack_require__("./src/app/modules/authentication/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__authentication_service__ = __webpack_require__("./src/app/modules/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__authentication_router_module__ = __webpack_require__("./src/app/modules/authentication/authentication-router.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__("./src/app/modules/authentication/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__authentication_router_module__["a" /* AuthenticationRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_card__["a" /* MatCardModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_8__register_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__authentication_service__["a" /* AuthenticationService */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_8__register_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */]]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "./src/app/modules/authentication/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TOKEN_NAME */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jwt_decode__ = __webpack_require__("./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TOKEN_NAME = 'jwt_token';
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(httpClient) {
        this.httpClient = httpClient;
        console.log('Inside constructor of AuthenticationService');
        this.service_end_point = 'http://localhost:8089/api/v1/userservice';
    }
    //Method for registering one new User
    AuthenticationService.prototype.registerUser = function (newUser) {
        console.log('Inside registerUser()....');
        var url = this.service_end_point + "/register";
        console.log('Endpoint url is: ', url);
        console.log('The newUser is:', newUser);
        return this.httpClient.post(url, newUser, { responseType: 'text' });
    };
    //Method for login
    AuthenticationService.prototype.loginUser = function (newUser) {
        console.log('Inside loginUser()....');
        var url = this.service_end_point + "/login";
        console.log('User is:', newUser);
        console.log('Endpoint url is: ', url);
        return this.httpClient.post(url, newUser);
    };
    //Method for setting new token value
    AuthenticationService.prototype.settokenVal = function (tokenVal) {
        console.log('Token Value is: ', tokenVal);
        return localStorage.setItem(TOKEN_NAME, tokenVal);
    };
    //Method for getting the token value
    AuthenticationService.prototype.gettokenVal = function () {
        return localStorage.getItem(TOKEN_NAME);
    };
    //Method for removing the token while logout
    AuthenticationService.prototype.deleteToken = function () {
        return localStorage.removeItem(TOKEN_NAME);
    };
    //Method for finding the expiration date of the Token
    AuthenticationService.prototype.getTokenExpirationDate = function (tokenVal) {
        var decoded = __WEBPACK_IMPORTED_MODULE_1_jwt_decode__(tokenVal);
        if (decoded.exp === undefined)
            return null;
        var date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        console.log('Token expiration date is', date);
        return date;
    };
    //Method for checking whether the token is expired or not
    AuthenticationService.prototype.isTokenExpired = function (tokenVal) {
        if (!tokenVal)
            tokenVal = this.gettokenVal();
        if (!tokenVal)
            return true;
        var date = this.getTokenExpirationDate(tokenVal);
        if (date === undefined || date == null)
            return false;
        return !(date.valueOf() > new Date().valueOf());
    };
    AuthenticationService.prototype.isAuthenticated = function () {
        var token = localStorage.getItem('jwt_token');
        // Check whether the token is expired and return
        // true or false
        return !this.isTokenExpired(token);
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/modules/authentication/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".login-block{\n    margin: auto;\n    width: 50%;\n    padding: 10px;\n    padding-top: 50px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-line-pack:center;\n        align-content:center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column nowrap;\n            flex-flow: column nowrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.login-userid-full-width{\n    width: 100%;\n}\n\n.login-password-full-width{\n    width: 100%;\n}\n\nh3{\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/modules/authentication/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"login-form\" #loginForm=\"ngForm\" (ngSubmit)=\"loginUser()\" [style.fontsize.px]=\"20\">\n    <div class=\"login-block\">\n        <div class=\"row\">\n            <h3>Login User</h3>\n        </div>\n        <div class=\"row\">\n            <mat-form-field class=\"login-userid-full-width\">\n                <input id=\"userId\" matInput placeholder=\"User Id\" [(ngModel)]=\"newUser.userId\" name=\"userId\">\n            </mat-form-field>\n            <mat-form-field class=\"login-password-full-width\">\n                <input type=\"password\" id=\"password\" matInput placeholder=\"Password\" [(ngModel)]=\"newUser.password\" name=\"password\">\n            </mat-form-field>\n        </div>\n        <div class=\"row\">\n            <button class=\"login-user\" mat-raised-button-color=\"primary\" type=\"submit\">Login</button>\n            <button class=\"register-button\" mat-raised-button-color=\"primary\"[routerLink]=\"['/register']\">Register</button>\n        </div>        \n    </div>\n</form>"

/***/ }),

/***/ "./src/app/modules/authentication/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__("./src/app/modules/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__User__ = __webpack_require__("./src/app/modules/authentication/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        console.log('Inside OnInit...of LoginComponent');
        this.newUser = new __WEBPACK_IMPORTED_MODULE_2__User__["a" /* User */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        console.log('Loggined User', this.newUser.userId, this.newUser.password);
        this.authService.loginUser(this.newUser).subscribe(function (data) {
            if (data['token']) {
                _this.authService.settokenVal(data['token']);
                _this.router.navigate(['/news/trending_wise']);
                console.log('After navigate()...');
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/modules/authentication/login/login.component.html"),
            styles: [__webpack_require__("./src/app/modules/authentication/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modules/authentication/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ".register-block{\n    margin: auto;\n    width: 50%;\n    padding: 10px;\n    padding-top: 50px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-line-pack:center;\n        align-content:center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column nowrap;\n            flex-flow: column nowrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.register-input-full-width{\n    width: 100%;\n}\n\nh3{\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/modules/authentication/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"register-form\" #registerForm=\"ngForm\" (ngSubmit)=\"registerUser(registerForm)\" [style.fontsize.px]=\"20\">\n    <div class=\"register-block\">\n       <div class=\"row\">\n            <h3>Register User</h3>\n        </div>        <div class=\"row\">\n            <mat-form-field class=\"register-input-full-width\">\n                <input id=\"firstname\" matInput placeholder=\"First Name\" [(ngModel)]=\"newUser.firstname\" name=\"firstname\">\n            </mat-form-field>\n            <mat-form-field class=\"register-input-full-width\">\n                <input id=\"lastname\" matInput placeholder=\"Last Name\" [(ngModel)]=\"newUser.lastname\" name=\"lastname\">\n            </mat-form-field>\n            <mat-form-field class=\"register-input-full-width\">\n                <input id=\"userId\" matInput placeholder=\"User Id\" [(ngModel)]=\"newUser.userId\" name=\"userId\" required minlength=\"5\" maxlength=\"10\"\n                #userId=\"ngModel\">\n            </mat-form-field>\n            <mat-form-field class=\"register-input-full-width\">\n                <input type=\"password\" id=\"password\" matInput placeholder=\"Password\" [(ngModel)]=\"newUser.password\" name=\"password\">\n            </mat-form-field>\n            <mat-form-field class=\"register-input-full-width\">                 \n                <input type=\"radio\" id=\"userRole\" value=\"Admin\" ngModel=\"newUser.userRole\" name=\"userRole\"> Administrator\n                <input type=\"radio\" id=\"userRole\" value=\"RegUser\" ngModel=\"newUser.userRole\" name=\"userRole\"> RegisteredUser\n            </mat-form-field>           \n        </div>\n        <div class=\"row\">\n            <button class=\"register-user\" mat-raised-button-color=\"primary\" type=\"submit\" (click)=\"registerUser(registerForm)\">Register</button>\n            <button mat-raised-button-color=\"primary\" (click)=\"resetInput()\">Clear</button>\n        </div>        \n    </div>\n</form>"

/***/ }),

/***/ "./src/app/modules/authentication/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__("./src/app/modules/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__User__ = __webpack_require__("./src/app/modules/authentication/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.newUser = new __WEBPACK_IMPORTED_MODULE_2__User__["a" /* User */]();
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    //Function implementation for registering a new user
    RegisterComponent.prototype.registerUser = function (form) {
        var _this = this;
        console.log('Register User', this.newUser.userId, this.newUser.firstname);
        this.newUser.userRole = form.controls['userRole'].value;
        console.log('Registered users Role', this.newUser.userRole);
        console.log('new user', this.newUser);
        this.authService.registerUser(this.newUser).subscribe(function (data) {
            console.log('User Data is: ', data);
            _this.router.navigate(['/login']);
        });
    };
    //function implementation for resetting the input register form
    RegisterComponent.prototype.resetInput = function () {
        this.newUser = new __WEBPACK_IMPORTED_MODULE_2__User__["a" /* User */]();
        this.newUser.firstname = "";
        this.newUser.lastname = "";
        this.newUser.userId = "";
        this.newUser.userId = "";
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/modules/authentication/register/register.component.html"),
            styles: [__webpack_require__("./src/app/modules/authentication/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/modules/news/components/container/container.component.css":
/***/ (function(module, exports) {

module.exports = ":host{\n    height: 100vh;\n}\n.news-container{\n    margin: auto;\n    width: 90vw;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    height: 100vh;\n    overflow-x: auto;    \n}"

/***/ }),

/***/ "./src/app/modules/news/components/container/container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"news-container\">\n    <news-thumbnail *ngFor=\"let news of newsArray\" [news]=\"news\" [useWatchlistApi]=\"useWatchlistApi\"\n    (addNews)=\"addNewsToWatchList($event)\" (deleteNews)=\"deleteNewsFromWatchList($event)\">\n        {{news.title}}\n    </news-thumbnail>\n</div>"

/***/ }),

/***/ "./src/app/modules/news/components/container/container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_service__ = __webpack_require__("./src/app/modules/news/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_snack_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/snack-bar.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContainerComponent = /** @class */ (function () {
    function ContainerComponent(httpClient, newsService, matSnackBar) {
        this.httpClient = httpClient;
        this.newsService = newsService;
        this.matSnackBar = matSnackBar;
    }
    ContainerComponent.prototype.ngOnInit = function () {
    };
    //logic for adding new news data into the watchlist
    ContainerComponent.prototype.addNewsToWatchList = function (news) {
        var _this = this;
        var message = news.title + " added to news Favourite List";
        this.newsService.saveWatchListNews(news).subscribe(function (news) {
            _this.matSnackBar.open(message, '', {
                duration: 1000
            });
        });
    };
    //logic for deleting news data from the componenet
    ContainerComponent.prototype.deleteNewsFromWatchList = function (news) {
        var _this = this;
        var message = news.title + " successfully deleted from the news Favourite List";
        for (var i = 0; i < this.newsArray.length; i++) {
            if (this.newsArray[i].title === news.title) {
                this.newsArray.splice(i, 1);
            }
        }
        //logic for deleting the news data from the back-end
        this.newsService.deleteFromMyWatchList(news).subscribe(function (news) {
            _this.matSnackBar.open(message, '', {
                duration: 1000
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], ContainerComponent.prototype, "newsArray", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ContainerComponent.prototype, "useWatchlistApi", void 0);
    ContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'news-container',
            template: __webpack_require__("./src/app/modules/news/components/container/container.component.html"),
            styles: [__webpack_require__("./src/app/modules/news/components/container/container.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__news_service__["a" /* NewsService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material_snack_bar__["a" /* MatSnackBar */]])
    ], ContainerComponent);
    return ContainerComponent;
}());



/***/ }),

/***/ "./src/app/modules/news/components/newsdb-container/newsdb-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsdbContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_service__ = __webpack_require__("./src/app/modules/news/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsdbContainerComponent = /** @class */ (function () {
    function NewsdbContainerComponent(newsService, route) {
        var _this = this;
        this.newsService = newsService;
        this.route = route;
        this.route.data.subscribe(function (data) {
            _this.newsArray = [];
            _this.newsType = data.newsType;
        });
    }
    NewsdbContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newsService.getNews(this.newsType).subscribe(function (newsArray) {
            (_a = _this.newsArray).push.apply(_a, newsArray);
            var _a;
        });
    };
    NewsdbContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'newsapi-container',
            template: "\n    <news-container [newsArray]=\"newsArray\"></news-container>\n  ",
            styles: []
        })
        //Component class for holding news api list
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__news_service__["a" /* NewsService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], NewsdbContainerComponent);
    return NewsdbContainerComponent;
}());



/***/ }),

/***/ "./src/app/modules/news/components/newsdialog/newsdialog.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/news/components/newsdialog/newsdialog.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<span>Update this news description - By{{data.obj.author}}</span>-->\n<h4>Update this news description</h4>\n<p></p>\n<!--<span mat-dialog-title>{{data.obj.title}}</span>-->\n<span>{{data.obj.title}}</span>\n<div mat-dialog-content>\n <p>Description</p></div>\n <div>\n <mat-form-field item-width=\"100\">\n     <textarea rows=\"8\" matInput [(ngModel)]=\"description\"></textarea>\n </mat-form-field>   \n</div>\n<div mat-dialog-actions>\n    <button mat-button color=warn (click)=\"onNoClick()\">Cancel</button>\n    <button mat-button color=warn (click)=\"updateDescription()\">Update</button>\n</div>"

/***/ }),

/***/ "./src/app/modules/news/components/newsdialog/newsdialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_snack_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__news_service__ = __webpack_require__("./src/app/modules/news/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var NewsDialogComponent = /** @class */ (function () {
    function NewsDialogComponent(snackBar, dialogRef, data, newsService) {
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.data = data;
        this.newsService = newsService;
        this.description = data.obj.description;
        this.news = data.obj;
        this.actionType = data.actionType;
    }
    NewsDialogComponent.prototype.ngOnInit = function () {
    };
    //Cancel button logic here
    NewsDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    //Update button logic 
    NewsDialogComponent.prototype.updateDescription = function () {
        var _this = this;
        console.log("Description is: ", this.description);
        this.news.description = this.description;
        this.dialogRef.close();
        //Invoking the description updating service logic
        this.newsService.updateNewsDescription(this.news).subscribe(function (news) {
            _this.snackBar.open("News description updated successfully", '', {
                duration: 3000
            });
        });
    };
    NewsDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-newsdialog',
            template: __webpack_require__("./src/app/modules/news/components/newsdialog/newsdialog.component.html"),
            styles: [__webpack_require__("./src/app/modules/news/components/newsdialog/newsdialog.component.css")]
        })
        //Component class for handling the pop-up dialog box before updating the news description
        ,
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material_snack_bar__["a" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_3__news_service__["a" /* NewsService */]])
    ], NewsDialogComponent);
    return NewsDialogComponent;
}());



/***/ }),

/***/ "./src/app/modules/news/components/search/search.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/news/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n    <form class=\"example-form\">\n        <mat-form-field>\n            <input id=\"search-button-input\" class=\"search-button-input\" matInput type=\"text\" #box (keyup.enter)=\"onEnter(box.value)\">\n                <mat-placeholder>Search</mat-placeholder>\n        </mat-form-field>\n    </form>\n</div>\n<news-container [newsArray]=\"newsArray\"></news-container>"

/***/ }),

/***/ "./src/app/modules/news/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_service__ = __webpack_require__("./src/app/modules/news/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = /** @class */ (function () {
    function SearchComponent(newsService) {
        this.newsService = newsService;
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.onEnter = function (searchKey) {
        var _this = this;
        this.newsService.searchNewsDetails(searchKey).subscribe(function (newsArray) {
            _this.newsArray = newsArray;
        });
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'news-search',
            template: __webpack_require__("./src/app/modules/news/components/search/search.component.html"),
            styles: [__webpack_require__("./src/app/modules/news/components/search/search.component.css")]
        })
        //Component class for performing all the search operations 
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__news_service__["a" /* NewsService */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/modules/news/components/thumbnail/thumbnail.component.css":
/***/ (function(module, exports) {

module.exports = ".news-thumbnail{\n    width: 160px;\n    margin: 10px;\n}\n.news-image{\n    height: 120px;\n}\n.news-overview{\n    height: 80px;\n    overflow-x: hidden;\n    overflow-y: auto;\n}\n.news-overview::-webkit-scrollbar{\n    width:2px;\n    background: gray;\n}\n.news-actions{\n    text-align: right;\n}"

/***/ }),

/***/ "./src/app/modules/news/components/thumbnail/thumbnail.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"news-thumbnail\">\n    <mat-card-header>\n        <!--<mat-card-title class=\"newsName\">{{news?.source.name}}</mat-card-title>-->\n        <mat-card-subtitle class=\"newsAuthor\">{{news?.author}}</mat-card-subtitle>\n    </mat-card-header>\n    <img class=\"news-image\" mat-card-image [src]='news?.urlToImage' [alt]='news?.title'> \n    <mat-card-content class=\"news-overview\">\n    <p>        \n        {{news?.title}}\n        {{news?.description}}\n    </p>\n    </mat-card-content>\n    <mat-card-actions class=\"news-actions\">\n        <button *ngIf=\"!useWatchlistApi\" class=\"addButton\" mat-raised-button color=\"primary\" (click)=\"addToWatchList()\">Add To FavouriteNewsList</button> \n        <button *ngIf=\"useWatchlistApi && (isDeleteButtobVisible || !isUpdateButtonVisibile)\" mat-raised-button color=\"primary\" (click)=\"deleteFromWatchList()\">Delete</button> \n        <button *ngIf=\"useWatchlistApi && isDeleteButtobVisible && isUpdateButtonVisibile\" mat-raised-button color=\"primary\" (click)=\"updateFromWatchList('update')\" align=\"end\">Update</button> \n    </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/modules/news/components/thumbnail/thumbnail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThumbnailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_snack_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newsdialog_newsdialog_component__ = __webpack_require__("./src/app/modules/news/components/newsdialog/newsdialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_authentication_service__ = __webpack_require__("./src/app/modules/authentication/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ThumbnailComponent = /** @class */ (function () {
    function ThumbnailComponent(snackBar, dialog, authService) {
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.authService = authService;
        this.addNews = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.deleteNews = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.jwtToken = this.authService.gettokenVal();
        console.log('Inside thumbnail component ts constructor jwtdata is:', this.jwtToken);
        var jwtData = this.jwtToken.split('.')[1];
        console.log('jwtdata is:', jwtData);
        var decodedjwtJSONData = window.atob(jwtData);
        console.log('decodedjwtJSONData is', decodedjwtJSONData);
        var decodedJWTData = JSON.parse(decodedjwtJSONData);
        console.log('decodedJWTData is', decodedJWTData);
        var jwtTokenSub = decodedJWTData.sub;
        console.log('Now the Token sub value is:', jwtTokenSub);
        var userRole = jwtTokenSub.split(':')[1];
        console.log('Currently Loggined Users Role:', userRole);
        if (userRole == 'RegUser') {
            this.isDeleteButtobVisible = true;
            this.isUpdateButtonVisibile = false;
        }
        else {
            this.isDeleteButtobVisible = true;
            this.isUpdateButtonVisibile = true;
        }
    }
    ThumbnailComponent.prototype.ngOnInit = function () {
    };
    //calling the parent add to watch list component i.e the container component
    ThumbnailComponent.prototype.addToWatchList = function () {
        this.addNews.emit(this.news);
    };
    //calling the parent delete from watch list component i.e the container component
    ThumbnailComponent.prototype.deleteFromWatchList = function () {
        this.deleteNews.emit(this.news);
    };
    //calling the parent update watch list component i.e the container component
    ThumbnailComponent.prototype.updateFromWatchList = function (actionType) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__newsdialog_newsdialog_component__["a" /* NewsDialogComponent */], {
            width: '400px',
            data: { obj: this.news, actionType: actionType }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], ThumbnailComponent.prototype, "news", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ThumbnailComponent.prototype, "useWatchlistApi", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], ThumbnailComponent.prototype, "addNews", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], ThumbnailComponent.prototype, "deleteNews", void 0);
    ThumbnailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'news-thumbnail',
            template: __webpack_require__("./src/app/modules/news/components/thumbnail/thumbnail.component.html"),
            styles: [__webpack_require__("./src/app/modules/news/components/thumbnail/thumbnail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material_snack_bar__["a" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_4__authentication_authentication_service__["a" /* AuthenticationService */]])
    ], ThumbnailComponent);
    return ThumbnailComponent;
}());



/***/ }),

/***/ "./src/app/modules/news/components/watchlist/watchlist.component.html":
/***/ (function(module, exports) {

module.exports = "<news-container [newsArray]=\"newsArray\" [useWatchlistApi]=\"useWatchlistApi\">\n\n</news-container>"

/***/ }),

/***/ "./src/app/modules/news/components/watchlist/watchlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WatchlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_service__ = __webpack_require__("./src/app/modules/news/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_snack_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/snack-bar.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WatchlistComponent = /** @class */ (function () {
    function WatchlistComponent(httpClient, newsService, matSnackBar) {
        this.httpClient = httpClient;
        this.newsService = newsService;
        this.matSnackBar = matSnackBar;
        this.useWatchlistApi = true;
        this.newsArray = [];
    }
    WatchlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        var message = 'Favourite News List is Empty';
        this.newsService.getMyWatchList().subscribe(function (newsArray) {
            if (newsArray.length === 0) {
                _this.matSnackBar.open(message, '', {
                    duration: 1000
                });
            }
            (_a = _this.newsArray).push.apply(_a, newsArray);
            var _a;
        });
    };
    WatchlistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'news-watchlist',
            template: __webpack_require__("./src/app/modules/news/components/watchlist/watchlist.component.html")
        })
        //This component class is used for handling all the watch-listed news details
        //corresponding to one particular user
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__news_service__["a" /* NewsService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material_snack_bar__["a" /* MatSnackBar */]])
    ], WatchlistComponent);
    return WatchlistComponent;
}());



/***/ }),

/***/ "./src/app/modules/news/interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_authentication_service__ = __webpack_require__("./src/app/modules/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(auth) {
        this.auth = auth;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        console.log('Inside intercept()');
        request = request.clone({
            setHeaders: {
                authorization: "Bearer " + this.auth.gettokenVal()
            }
        });
        return next.handle(request);
    };
    TokenInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__authentication_authentication_service__["a" /* AuthenticationService */]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/modules/news/news-router.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsRouterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_newsdb_container_newsdb_container_component__ = __webpack_require__("./src/app/modules/news/components/newsdb-container/newsdb-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_watchlist_watchlist_component__ = __webpack_require__("./src/app/modules/news/components/watchlist/watchlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_search_search_component__ = __webpack_require__("./src/app/modules/news/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authGuard_service__ = __webpack_require__("./src/app/authGuard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//This is the router module which is used for routing the application based on the incoming
//requests. While simply hitting the localhost:4200 the application will redirect to all the 
//trending new from the newsapi. If the url is appended with /category_wise, it will show all the
//category_wise news and the url is appended with /watchlist it will display all the news that 
//are added into the MyWatchList segment. If the url is appened with /search, the application redirects to
//the search segment in the application. There one user can easily search various news details based on 
//there interest.
var newsRoutes = [
    {
        path: 'news',
        children: [
            {
                path: '',
                redirectTo: '/news/trending_wise',
                pathMatch: 'full',
                canActivate: [__WEBPACK_IMPORTED_MODULE_5__authGuard_service__["a" /* AuthguardService */]]
            },
            {
                path: 'category_wise',
                component: __WEBPACK_IMPORTED_MODULE_2__components_newsdb_container_newsdb_container_component__["a" /* NewsdbContainerComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_5__authGuard_service__["a" /* AuthguardService */]],
                data: {
                    newsType: 'category_wise'
                },
            },
            {
                path: 'trending_wise',
                component: __WEBPACK_IMPORTED_MODULE_2__components_newsdb_container_newsdb_container_component__["a" /* NewsdbContainerComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_5__authGuard_service__["a" /* AuthguardService */]],
                data: {
                    newsType: 'trending_wise',
                }
            },
            {
                path: 'watchlist',
                component: __WEBPACK_IMPORTED_MODULE_3__components_watchlist_watchlist_component__["a" /* WatchlistComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_5__authGuard_service__["a" /* AuthguardService */]]
            },
            {
                path: 'search',
                component: __WEBPACK_IMPORTED_MODULE_4__components_search_search_component__["a" /* SearchComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_5__authGuard_service__["a" /* AuthguardService */]]
            }
        ]
    }
];
var NewsRouterModule = /** @class */ (function () {
    function NewsRouterModule() {
    }
    NewsRouterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(newsRoutes),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */],
            ]
        })
    ], NewsRouterModule);
    return NewsRouterModule;
}());



/***/ }),

/***/ "./src/app/modules/news/news.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interceptor_service__ = __webpack_require__("./src/app/modules/news/interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_service__ = __webpack_require__("./src/app/modules/news/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_thumbnail_thumbnail_component__ = __webpack_require__("./src/app/modules/news/components/thumbnail/thumbnail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_container_container_component__ = __webpack_require__("./src/app/modules/news/components/container/container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__news_router_module__ = __webpack_require__("./src/app/modules/news/news-router.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_snack_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_input__ = __webpack_require__("./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_watchlist_watchlist_component__ = __webpack_require__("./src/app/modules/news/components/watchlist/watchlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_newsdb_container_newsdb_container_component__ = __webpack_require__("./src/app/modules/news/components/newsdb-container/newsdb-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_newsdialog_newsdialog_component__ = __webpack_require__("./src/app/modules/news/components/newsdialog/newsdialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_search_search_component__ = __webpack_require__("./src/app/modules/news/components/search/search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















//This module is mainly intended for declaring as well as importing all the news related 
//modules
var NewsModule = /** @class */ (function () {
    function NewsModule() {
    }
    NewsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__news_router_module__["a" /* NewsRouterModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_snack_bar__["b" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_input__["b" /* MatInputModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__components_thumbnail_thumbnail_component__["a" /* ThumbnailComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_container_container_component__["a" /* ContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_watchlist_watchlist_component__["a" /* WatchlistComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_newsdb_container_newsdb_container_component__["a" /* NewsdbContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_newsdialog_newsdialog_component__["a" /* NewsDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_search_search_component__["a" /* SearchComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_7__news_router_module__["a" /* NewsRouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_thumbnail_thumbnail_component__["a" /* ThumbnailComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_watchlist_watchlist_component__["a" /* WatchlistComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_container_container_component__["a" /* ContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_newsdb_container_newsdb_container_component__["a" /* NewsdbContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_newsdialog_newsdialog_component__["a" /* NewsDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_search_search_component__["a" /* SearchComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_16__components_newsdialog_newsdialog_component__["a" /* NewsDialogComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_1__news_service__["a" /* NewsService */], {
                    provide: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_0__interceptor_service__["a" /* TokenInterceptor */],
                    multi: true
                }
            ],
        })
    ], NewsModule);
    return NewsModule;
}());



/***/ }),

/***/ "./src/app/modules/news/news.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//All the news related services are defined in this service class
var NewsService = /** @class */ (function () {
    function NewsService(http) {
        this.http = http;
        this.apiKey = 'apikey=b30065de40a543b999bc7671941e639b';
        this.newsapiEndpoint = 'https://newsapi.org/v2/top-headlines?';
        this.service_end_point = 'http://localhost:8081/api/v1/newsservice';
        this.search = 'https://newsapi.org/v2/everything?';
        this.categorynewstype = 'category=business';
        this.trendingnewstype = 'country=in';
        this.endPoint = '';
    }
    //Method for fetching all the news related details from the newsapi
    NewsService.prototype.getNews = function (type, page) {
        if (page === void 0) { page = 1; }
        console.log('Inside getNews() type is: ', type);
        if (type == 'category_wise') {
            this.endPoint = "" + this.newsapiEndpoint + this.categorynewstype + "&" + this.apiKey + "&page=" + page;
        }
        else if (type == 'trending_wise') {
            this.endPoint = "" + this.newsapiEndpoint + this.trendingnewstype + "&" + this.apiKey + "&page=" + page;
        }
        return this.http.get(this.endPoint).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* retry */])(3), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__["a" /* map */])(this.pickNewsResults));
    };
    //Method for getting the list of news details from the service
    NewsService.prototype.pickNewsResults = function (response) {
        return response['articles'];
    };
    //Method for saving news data into the news favourite list
    NewsService.prototype.saveWatchListNews = function (news) {
        var url = this.service_end_point + "/news";
        return this.http.post(url, news);
    };
    //Calling the service_end_point for retrieving all the favourite list news details
    NewsService.prototype.getMyWatchList = function () {
        var url = this.service_end_point + "/newsdetails";
        return this.http.get(url);
    };
    //Method for deleting news from the News FavouriteList
    NewsService.prototype.deleteFromMyWatchList = function (news) {
        var url = this.service_end_point + "/news/" + news.id;
        return this.http.delete(url, { responseType: 'text' });
    };
    //Method for updating the favourite news comments
    NewsService.prototype.updateNewsDescription = function (news) {
        var url = this.service_end_point + "/news/" + news.id;
        return this.http.put(url, news);
    };
    //Method for searching one particular news from the newsapi service
    NewsService.prototype.searchNewsDetails = function (searchKey) {
        if (searchKey.length > 0) {
            var url = this.search + "q=" + searchKey + "&" + this.apiKey + "&language=en&page=1";
            return this.http.get(url).
                pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* retry */])(3), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__["a" /* map */])(this.pickNewsResults.bind(this)));
        }
    };
    NewsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], NewsService);
    return NewsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map