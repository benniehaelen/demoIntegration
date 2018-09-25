(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../libs/core/base/base-component.ts":
/*!*********************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/core/base/base-component.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// libs
var rxjs_1 = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
var BaseComponent = /** @class */ (function () {
    function BaseComponent() {
        this.destroy$ = new rxjs_1.Subject();
    }
    BaseComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.complete();
    };
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;


/***/ }),

/***/ "../../libs/core/base/index.ts":
/*!************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/core/base/index.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./base-component */ "../../libs/core/base/base-component.ts"));


/***/ }),

/***/ "../../libs/core/core.module.ts":
/*!*************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/core/core.module.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
// libs
var nx_1 = __webpack_require__(/*! @nrwl/nx */ "../../node_modules/@nrwl/nx/esm5/nrwl-nx.js");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var utils_1 = __webpack_require__(/*! @iot-edge-dynocard/utils */ "../../libs/utils/index.ts");
// app
var environment_1 = __webpack_require__(/*! ./environments/environment */ "../../libs/core/environments/environment.ts");
var services_1 = __webpack_require__(/*! ./services */ "../../libs/core/services/index.ts");
var log_service_1 = __webpack_require__(/*! ./services/log.service */ "../../libs/core/services/log.service.ts");
/**
 * DEBUGGING
 */
log_service_1.LogService.DEBUG.LEVEL_4 = !environment_1.environment.production;
exports.BASE_PROVIDERS = services_1.CORE_PROVIDERS.concat([
    {
        provide: common_1.APP_BASE_HREF,
        useValue: '/'
    }
]);
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule, lang, translate) {
        utils_1.throwIfAlreadyLoaded(parentModule, 'CoreModule');
        // ensure default platform language is set
        translate.use(lang);
    }
    CoreModule_1 = CoreModule;
    // configuredProviders: *required to configure WindowService and others per platform
    CoreModule.forRoot = function (configuredProviders) {
        return {
            ngModule: CoreModule_1,
            providers: exports.BASE_PROVIDERS.concat(configuredProviders)
        };
    };
    CoreModule = CoreModule_1 = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, nx_1.NxModule.forRoot()]
        }),
        __param(0, core_1.Optional()),
        __param(0, core_1.SkipSelf()),
        __param(1, core_1.Inject(services_1.PlatformLanguageToken)),
        __metadata("design:paramtypes", [CoreModule, String, core_2.TranslateService])
    ], CoreModule);
    return CoreModule;
    var CoreModule_1;
}());
exports.CoreModule = CoreModule;


/***/ }),

/***/ "../../libs/core/environments/environment.ts":
/*!**************************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/core/environments/environment.ts ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
    api_url: 'http://127.0.0.1:4000',
    baseRoutePath: ''
};


/***/ }),

/***/ "../../libs/core/index.ts":
/*!*******************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/core/index.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./base */ "../../libs/core/base/index.ts"));
__export(__webpack_require__(/*! ./environments/environment */ "../../libs/core/environments/environment.ts"));
__export(__webpack_require__(/*! ./services */ "../../libs/core/services/index.ts"));
var core_module_1 = __webpack_require__(/*! ./core.module */ "../../libs/core/core.module.ts");
exports.CoreModule = core_module_1.CoreModule;


/***/ }),

/***/ "../../libs/core/services/data.service.ts":
/*!***********************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/core/services/data.service.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// data.service.ts - For Web
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.requestOptions = {};
    }
    DataService.prototype.get = function (url, requestOptionsArgs, options) {
        var self = this;
        // clear and reset the state of headers before each request, to prevent issues with mixing states between requests
        delete this.requestOptions;
        // The Angular HttpClient Way
        var requestOptions = {
            // headers: contentHeaders
            headers: new http_1.HttpHeaders({
                'Accept': 'application/json'
            })
        };
        return this.http
            .get(url, requestOptionsArgs
            ? requestOptionsArgs
            : requestOptions)
            .pipe(
        // retry(3), // retry a failed request up to 3 times
        operators_1.catchError(this.handleError('GET')));
    };
    DataService.prototype.post = function (url, body, contentType, requestOptionsArgs, options) {
        var self = this;
        // clear and reset the state of headers before each request, to prevent issues with mixing states between requests
        delete this.requestOptions;
        // The Angular HttpClient Way
        // return new Promise((resolve, reject) => {
        var requestOptions = {
            // headers: contentHeaders
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        };
        return this.http
            .post(url, body, requestOptionsArgs
            ? requestOptionsArgs
            : requestOptions)
            .pipe(
        // retry(3), // retry a failed request up to 3 times
        operators_1.catchError(this.handleError('POST')));
    };
    DataService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error('error: ', error);
            console.error(operation + " failed: " + error.message);
            var errorMessage = error || 'Server error';
            if (error.error) {
                // A client-side or network error occurred. Handle it accordingly.
                console.error('An error occurred:', error.error.message);
                errorMessage = error.error.message;
                // Status Code 0 probable means CORS was not enabled on the API endpoint
            }
            else if (error.status === 0) {
                // A client-side or network error occurred. Handle it accordingly.
                var corsMessage = 'This most likely means that CORS is not enabled for the requested API endpoint. Enable `Access-Control-Allow-Origin` on the server and try again';
                console.error('DataService: An error occurred:', error);
                console.error('DataService: ', corsMessage);
                errorMessage = corsMessage;
            }
            else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                console.error("Backend returned code " + error.status + ", " +
                    ("body was: " + error.error));
            }
            // return an observable with a user-facing error message
            return rxjs_1.throwError({
                message: error.message,
                displayMessage: errorMessage
            });
        };
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;


/***/ }),

/***/ "../../libs/core/services/index.ts":
/*!****************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/core/services/index.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var log_service_1 = __webpack_require__(/*! ./log.service */ "../../libs/core/services/log.service.ts");
var window_service_1 = __webpack_require__(/*! ./window.service */ "../../libs/core/services/window.service.ts");
var data_service_1 = __webpack_require__(/*! ./data.service */ "../../libs/core/services/data.service.ts");
var url_managing_service_1 = __webpack_require__(/*! ./url-managing.service */ "../../libs/core/services/url-managing.service.ts");
exports.CORE_PROVIDERS = [log_service_1.LogService, window_service_1.WindowService, data_service_1.DataService,
    url_managing_service_1.UrlManagingService];
__export(__webpack_require__(/*! ./data.service */ "../../libs/core/services/data.service.ts"));
__export(__webpack_require__(/*! ./log.service */ "../../libs/core/services/log.service.ts"));
__export(__webpack_require__(/*! ./window.service */ "../../libs/core/services/window.service.ts"));
__export(__webpack_require__(/*! ./tokens */ "../../libs/core/services/tokens.ts"));
__export(__webpack_require__(/*! ./url-managing.service */ "../../libs/core/services/url-managing.service.ts"));


/***/ }),

/***/ "../../libs/core/services/log.service.ts":
/*!**********************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/core/services/log.service.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var LogService = /** @class */ (function () {
    function LogService() {
    }
    LogService_1 = LogService;
    // info (extra messages like analytics)
    // use LEVEL_5 to see only these
    LogService.prototype.info = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        if (LogService_1.DEBUG.LEVEL_5 || LogService_1.DEBUG.LEVEL_4) {
            // extra messages
            console.info(msg);
        }
    };
    // debug (standard output)
    LogService.prototype.debug = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        if (LogService_1.DEBUG.LEVEL_4 || LogService_1.DEBUG.LEVEL_3) {
            // console.debug does not work on {N} apps... use `log`
            console.log(msg);
        }
    };
    // error
    LogService.prototype.error = function () {
        var err = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            err[_i] = arguments[_i];
        }
        if (LogService_1.DEBUG.LEVEL_4 ||
            LogService_1.DEBUG.LEVEL_3 ||
            LogService_1.DEBUG.LEVEL_2) {
            console.error(err);
        }
    };
    // warn
    LogService.prototype.warn = function () {
        var warn = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            warn[_i] = arguments[_i];
        }
        if (LogService_1.DEBUG.LEVEL_4 ||
            LogService_1.DEBUG.LEVEL_3 ||
            LogService_1.DEBUG.LEVEL_1) {
            console.warn(warn);
        }
    };
    LogService.DEBUG = {
        LEVEL_1: false,
        LEVEL_2: false,
        LEVEL_3: false,
        LEVEL_4: false,
        LEVEL_5: false // just info (excluding all else)
    };
    LogService = LogService_1 = __decorate([
        core_1.Injectable()
    ], LogService);
    return LogService;
    var LogService_1;
}());
exports.LogService = LogService;


/***/ }),

/***/ "../../libs/core/services/tokens.ts":
/*!*****************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/core/services/tokens.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/**
 * Various InjectionTokens shared across all platforms
 * Always suffix with 'Token' for clarity and consistency
 */
exports.PlatformLanguageToken = new core_1.InjectionToken('PlatformLanguage');


/***/ }),

/***/ "../../libs/core/services/url-managing.service.ts":
/*!*******************************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/core/services/url-managing.service.ts ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// url-managing.service.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This class manages URL building for API calls in components.
 */
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var prodUrl = 'https://iotdynocardmoxa.azurewebsites.net';
var hostName = prodUrl;
var UrlManagingService = /** @class */ (function () {
    function UrlManagingService() {
        // These are all site root relative
        this.baseApiRoute = hostName + '/api';
        this.getDynoCardSampleData = this.baseApiRoute + '/DynoCardSampleData';
    }
    UrlManagingService = __decorate([
        core_1.Injectable()
    ], UrlManagingService);
    return UrlManagingService;
}());
exports.UrlManagingService = UrlManagingService;


/***/ }),

/***/ "../../libs/core/services/window.service.ts":
/*!*************************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/core/services/window.service.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
// app
var utils_1 = __webpack_require__(/*! @iot-edge-dynocard/utils */ "../../libs/utils/index.ts");
var WindowPlatformService = /** @class */ (function () {
    function WindowPlatformService() {
        this.navigator = {};
        this.location = {};
        // ...You can expand support for more window methods as you need them here...
    }
    WindowPlatformService.prototype.alert = function (msg) { };
    WindowPlatformService.prototype.confirm = function (msg) { };
    WindowPlatformService.prototype.setTimeout = function (handler, timeout) {
        return 0;
    };
    WindowPlatformService.prototype.clearTimeout = function (timeoutId) { };
    WindowPlatformService.prototype.setInterval = function (handler, ms) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        return 0;
    };
    WindowPlatformService.prototype.clearInterval = function (intervalId) { };
    WindowPlatformService = __decorate([
        core_1.Injectable()
    ], WindowPlatformService);
    return WindowPlatformService;
}());
exports.WindowPlatformService = WindowPlatformService;
var WindowService = /** @class */ (function () {
    function WindowService(_platformWindow) {
        this._platformWindow = _platformWindow;
    }
    Object.defineProperty(WindowService.prototype, "navigator", {
        get: function () {
            return this._platformWindow.navigator;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowService.prototype, "location", {
        get: function () {
            return this._platformWindow.location;
        },
        enumerable: true,
        configurable: true
    });
    WindowService.prototype.alert = function (msg) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var result = _this._platformWindow.alert(msg);
            if (utils_1.isObject(result) && result.then) {
                // console.log('WindowService -- using result.then promise');
                result.then(resolve, reject);
            }
            else {
                resolve();
            }
        });
    };
    WindowService.prototype.confirm = function (msg, action /* used for fancyalerts on mobile*/) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var result = _this._platformWindow.confirm(msg, utils_1.isNativeScript() ? action : undefined);
            if (utils_1.isObject(result) && result.then) {
                result.then(resolve, reject);
            }
            else if (result) {
                resolve();
            }
            else {
                reject();
            }
        });
    };
    WindowService.prototype.setTimeout = function (handler, timeout) {
        return this._platformWindow.setTimeout(handler, timeout);
    };
    WindowService.prototype.clearTimeout = function (timeoutId) {
        return this._platformWindow.clearTimeout(timeoutId);
    };
    WindowService.prototype.setInterval = function (handler, ms) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        return this._platformWindow.setInterval(handler, ms, args);
    };
    WindowService.prototype.clearInterval = function (intervalId) {
        return this._platformWindow.clearInterval(intervalId);
    };
    WindowService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [WindowPlatformService])
    ], WindowService);
    return WindowService;
}());
exports.WindowService = WindowService;


/***/ }),

/***/ "../../libs/features/charts/base/dyno-card-base.component.ts":
/*!******************************************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/features/charts/base/dyno-card-base.component.ts ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @iot-edge-dynocard/core */ "../../libs/core/index.ts");
var DynoCardBaseComponent = /** @class */ (function (_super) {
    __extends(DynoCardBaseComponent, _super);
    function DynoCardBaseComponent() {
        var _this = _super.call(this) || this;
        _this.text = 'DynoCard Chart';
        return _this;
    }
    return DynoCardBaseComponent;
}(core_1.BaseComponent));
exports.DynoCardBaseComponent = DynoCardBaseComponent;


/***/ }),

/***/ "../../libs/features/charts/base/index.ts":
/*!***********************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/features/charts/base/index.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./dyno-card-base.component */ "../../libs/features/charts/base/dyno-card-base.component.ts"));


/***/ }),

/***/ "../../libs/features/charts/index.ts":
/*!******************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/features/charts/index.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./base */ "../../libs/features/charts/base/index.ts"));


/***/ }),

/***/ "../../libs/features/index.ts":
/*!***********************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/features/index.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./ui */ "../../libs/features/ui/index.ts"));
__export(__webpack_require__(/*! ./charts */ "../../libs/features/charts/index.ts"));


/***/ }),

/***/ "../../libs/features/ui/base/header.base-component.ts":
/*!***********************************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/features/ui/base/header.base-component.ts ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
// libs
var base_1 = __webpack_require__(/*! @iot-edge-dynocard/core/base */ "../../libs/core/base/index.ts");
var HeaderBaseComponent = /** @class */ (function (_super) {
    __extends(HeaderBaseComponent, _super);
    function HeaderBaseComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tappedRight = new core_1.EventEmitter();
        return _this;
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HeaderBaseComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HeaderBaseComponent.prototype, "rightButton", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], HeaderBaseComponent.prototype, "tappedRight", void 0);
    return HeaderBaseComponent;
}(base_1.BaseComponent));
exports.HeaderBaseComponent = HeaderBaseComponent;


/***/ }),

/***/ "../../libs/features/ui/base/index.ts":
/*!*******************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/features/ui/base/index.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./header.base-component */ "../../libs/features/ui/base/header.base-component.ts"));


/***/ }),

/***/ "../../libs/features/ui/index.ts":
/*!**************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/features/ui/index.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./base */ "../../libs/features/ui/base/index.ts"));
var ui_module_1 = __webpack_require__(/*! ./ui.module */ "../../libs/features/ui/ui.module.ts");
exports.UISharedModule = ui_module_1.UISharedModule;


/***/ }),

/***/ "../../libs/features/ui/pipes/date-order.pipe.ts":
/*!******************************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/features/ui/pipes/date-order.pipe.ts ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var DateOrderPipe = /** @class */ (function () {
    function DateOrderPipe() {
    }
    DateOrderPipe.prototype.transform = function (value, sortBy) {
        if (value) {
            return value.sort(function (a, b) {
                if (!a[sortBy]) {
                    throw new Error("Incorrect orderByDate property");
                }
                var dateA = new Date(a[sortBy]).getTime();
                var dateB = new Date(b[sortBy]).getTime();
                return dateB - dateA;
            });
        }
    };
    DateOrderPipe = __decorate([
        core_1.Pipe({
            name: 'orderByDate',
            pure: true
        })
    ], DateOrderPipe);
    return DateOrderPipe;
}());
exports.DateOrderPipe = DateOrderPipe;


/***/ }),

/***/ "../../libs/features/ui/pipes/index.ts":
/*!********************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/features/ui/pipes/index.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var date_order_pipe_1 = __webpack_require__(/*! ./date-order.pipe */ "../../libs/features/ui/pipes/date-order.pipe.ts");
exports.PIPES = [date_order_pipe_1.DateOrderPipe];


/***/ }),

/***/ "../../libs/features/ui/ui.module.ts":
/*!******************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/features/ui/ui.module.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var pipes_1 = __webpack_require__(/*! ./pipes */ "../../libs/features/ui/pipes/index.ts");
var MODULES = [core_2.TranslateModule];
var UISharedModule = /** @class */ (function () {
    function UISharedModule() {
    }
    UISharedModule = __decorate([
        core_1.NgModule({
            imports: MODULES.slice(),
            declarations: pipes_1.PIPES.slice(),
            exports: MODULES.concat(pipes_1.PIPES)
        })
    ], UISharedModule);
    return UISharedModule;
}());
exports.UISharedModule = UISharedModule;


/***/ }),

/***/ "../../libs/utils/angular.ts":
/*!**********************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/utils/angular.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import " + moduleName + " in the AppModule only.");
    }
}
exports.throwIfAlreadyLoaded = throwIfAlreadyLoaded;


/***/ }),

/***/ "../../libs/utils/index.ts":
/*!********************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/utils/index.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./angular */ "../../libs/utils/angular.ts"));
__export(__webpack_require__(/*! ./objects */ "../../libs/utils/objects.ts"));
__export(__webpack_require__(/*! ./platform */ "../../libs/utils/platform.ts"));


/***/ }),

/***/ "../../libs/utils/objects.ts":
/*!**********************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/utils/objects.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isString = function (arg) {
    return typeof arg === 'string';
};
exports.isObject = function (arg) {
    return arg && typeof arg === 'object';
};


/***/ }),

/***/ "../../libs/utils/platform.ts":
/*!***********************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/utils/platform.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * NativeScript helpers
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Determine if running on native iOS mobile app
 */
function isIOS() {
    return typeof NSObject !== 'undefined' && typeof NSString !== 'undefined';
}
exports.isIOS = isIOS;
/**
 * Determine if running on native Android mobile app
 */
function isAndroid() {
    return typeof android !== 'undefined' && typeof java !== 'undefined';
}
exports.isAndroid = isAndroid;
/**
 * Determine if running on native iOS or Android mobile app
 */
function isNativeScript() {
    return isIOS() || isAndroid();
}
exports.isNativeScript = isNativeScript;


/***/ }),

/***/ "../../xplat/web/core/base/app.base-component.ts":
/*!******************************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/xplat/web/core/base/app.base-component.ts ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// libs
var core_1 = __webpack_require__(/*! @iot-edge-dynocard/core */ "../../libs/core/index.ts");
var AppBaseComponent = /** @class */ (function (_super) {
    __extends(AppBaseComponent, _super);
    function AppBaseComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AppBaseComponent;
}(core_1.BaseComponent));
exports.AppBaseComponent = AppBaseComponent;


/***/ }),

/***/ "../../xplat/web/core/base/index.ts":
/*!*****************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/xplat/web/core/base/index.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./app.base-component */ "../../xplat/web/core/base/app.base-component.ts"));


/***/ }),

/***/ "../../xplat/web/core/core.module.ts":
/*!******************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/xplat/web/core/core.module.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
// libs
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var http_loader_1 = __webpack_require__(/*! @ngx-translate/http-loader */ "../../node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
var utils_1 = __webpack_require__(/*! @iot-edge-dynocard/utils */ "../../libs/utils/index.ts");
var core_3 = __webpack_require__(/*! @iot-edge-dynocard/core */ "../../libs/core/index.ts");
// bring in custom web services here...
// factories
function winFactory() {
    return window;
}
exports.winFactory = winFactory;
function platformLangFactory() {
    var browserLang = window.navigator.language || 'en'; // fallback English
    // browser language has 2 codes, ex: 'en-US'
    return browserLang.split('-')[0];
}
exports.platformLangFactory = platformLangFactory;
function createTranslateLoader(http) {
    return new http_loader_1.TranslateHttpLoader(http, "/assets/i18n/", '.json');
}
exports.createTranslateLoader = createTranslateLoader;
var DynocardCoreModule = /** @class */ (function () {
    function DynocardCoreModule(parentModule) {
        utils_1.throwIfAlreadyLoaded(parentModule, 'DynocardCoreModule');
    }
    DynocardCoreModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                core_3.CoreModule.forRoot([
                    {
                        provide: core_3.PlatformLanguageToken,
                        useFactory: platformLangFactory
                    },
                    {
                        provide: core_3.WindowPlatformService,
                        useFactory: winFactory
                    }
                ]),
                core_2.TranslateModule.forRoot({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: createTranslateLoader,
                        deps: [http_1.HttpClient]
                    }
                })
            ]
        }),
        __param(0, core_1.Optional()),
        __param(0, core_1.SkipSelf()),
        __metadata("design:paramtypes", [DynocardCoreModule])
    ], DynocardCoreModule);
    return DynocardCoreModule;
}());
exports.DynocardCoreModule = DynocardCoreModule;


/***/ }),

/***/ "../../xplat/web/core/index.ts":
/*!************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/xplat/web/core/index.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./base */ "../../xplat/web/core/base/index.ts"));
var core_module_1 = __webpack_require__(/*! ./core.module */ "../../xplat/web/core/core.module.ts");
exports.DynocardCoreModule = core_module_1.DynocardCoreModule;


/***/ }),

/***/ "../../xplat/web/features/charts/charts.module.ts":
/*!*******************************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/xplat/web/features/charts/charts.module.ts ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var ui_module_1 = __webpack_require__(/*! ../ui/ui.module */ "../../xplat/web/features/ui/ui.module.ts");
var components_1 = __webpack_require__(/*! ./components */ "../../xplat/web/features/charts/components/index.ts");
var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
    }
    ChartsModule = __decorate([
        core_1.NgModule({
            imports: [ui_module_1.UIModule],
            declarations: components_1.CHARTS_COMPONENTS.slice(),
            exports: components_1.CHARTS_COMPONENTS.slice()
        })
    ], ChartsModule);
    return ChartsModule;
}());
exports.ChartsModule = ChartsModule;


/***/ }),

/***/ "../../xplat/web/features/charts/components/charts/dynocard.component.html":
/*!********************************************************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/xplat/web/features/charts/components/charts/dynocard.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>{{text}} - API loaded data</h3>\n<div>{{chartData | json}}</div>\n\n<h3>Sample Multi-Line Chart</h3>\n\n<svg width=\"960\" height=\"500\"></svg>\n"

/***/ }),

/***/ "../../xplat/web/features/charts/components/charts/dynocard.component.ts":
/*!******************************************************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/xplat/web/features/charts/components/charts/dynocard.component.ts ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var features_1 = __webpack_require__(/*! @iot-edge-dynocard/features */ "../../libs/features/index.ts");
var core_2 = __webpack_require__(/*! @iot-edge-dynocard/core */ "../../libs/core/index.ts");
var DynoCardComponent = /** @class */ (function (_super) {
    __extends(DynoCardComponent, _super);
    function DynoCardComponent(dataService, urlManagingService) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.urlManagingService = urlManagingService;
        _this.loadChartData();
        return _this;
    }
    DynoCardComponent.prototype.loadChartData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataService.get(this.urlManagingService.getDynoCardSampleData).toPromise()
                            .then(function (response) {
                            _this.chartData = response;
                            _this.renderChart();
                        })
                            .catch(function (error) {
                            console.log('DynoCardComponent.loadChartData() Error:', error);
                            return error;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DynoCardComponent.prototype.renderChart = function () {
        var svg = d3.select("svg"), margin = { top: 20, right: 80, bottom: 30, left: 50 }, width = svg.attr("width") - margin.left - margin.right, height = svg.attr("height") - margin.top - margin.bottom, g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        var parseTime = d3.timeParse("%Y%m%d");
        var x = d3.scaleTime().range([0, width]), y = d3.scaleLinear().range([height, 0]), z = d3.scaleOrdinal(d3.schemeCategory10);
        var line = d3.line()
            .curve(d3.curveBasis)
            .x(function (d) {
            return x(d.date);
        })
            .y(function (d) {
            return y(d.temperature);
        });
        d3.tsv("assets/data.tsv", type, function (error, data) {
            if (error)
                throw error;
            var cities = data.columns.slice(1).map(function (id) {
                return {
                    id: id,
                    values: data.map(function (d) {
                        return { date: d.date, temperature: d[id] };
                    })
                };
            });
            x.domain(d3.extent(data, function (d) {
                return d.date;
            }));
            y.domain([
                d3.min(cities, function (c) {
                    return d3.min(c.values, function (d) {
                        return d.temperature;
                    });
                }),
                d3.max(cities, function (c) {
                    return d3.max(c.values, function (d) {
                        return d.temperature;
                    });
                })
            ]);
            z.domain(cities.map(function (c) {
                return c.id;
            }));
            g.append("g")
                .attr("class", "axis axis--x")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x));
            g.append("g")
                .attr("class", "axis axis--y")
                .call(d3.axisLeft(y))
                .append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 6)
                .attr("dy", "0.71em")
                .attr("fill", "#000")
                .text("Temperature, ºF");
            var city = g.selectAll(".city")
                .data(cities)
                .enter().append("g")
                .attr("class", "city");
            city.append("path")
                .attr("class", "line")
                .attr("d", function (d) {
                return line(d.values);
            })
                .style("stroke", function (d) {
                return z(d.id);
            });
            city.append("text")
                .datum(function (d) {
                return { id: d.id, value: d.values[d.values.length - 1] };
            })
                .attr("transform", function (d) {
                return "translate(" + x(d.value.date) + "," + y(d.value.temperature) + ")";
            })
                .attr("x", 3)
                .attr("dy", "0.35em")
                .style("font", "10px sans-serif")
                .text(function (d) {
                return d.id;
            });
        });
        function type(d, _, columns) {
            d.date = parseTime(d.date);
            for (var i = 1, n = columns.length, c = void 0; i < n; ++i)
                d[c = columns[i]] = +d[c];
            return d;
        }
    };
    DynoCardComponent = __decorate([
        core_1.Component({
            selector: 'dynocard-chart',
            template: __webpack_require__(/*! ./dynocard.component.html */ "../../xplat/web/features/charts/components/charts/dynocard.component.html"),
            styles: [__webpack_require__(/*! ./dynocard.style.css */ "../../xplat/web/features/charts/components/charts/dynocard.style.css")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [core_2.DataService, core_2.UrlManagingService])
    ], DynoCardComponent);
    return DynoCardComponent;
}(features_1.DynoCardBaseComponent));
exports.DynoCardComponent = DynoCardComponent;


/***/ }),

/***/ "../../xplat/web/features/charts/components/charts/dynocard.style.css":
/*!***************************************************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/xplat/web/features/charts/components/charts/dynocard.style.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".axis--x path {\n  display: none;\n}\n\n.line {\n  fill: none;\n  stroke: steelblue;\n  stroke-width: 1.5px;\n}\n"

/***/ }),

/***/ "../../xplat/web/features/charts/components/index.ts":
/*!**********************************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/xplat/web/features/charts/components/index.ts ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var dynocard_component_1 = __webpack_require__(/*! ./charts/dynocard.component */ "../../xplat/web/features/charts/components/charts/dynocard.component.ts");
exports.CHARTS_COMPONENTS = [dynocard_component_1.DynoCardComponent];
__export(__webpack_require__(/*! ./charts/dynocard.component */ "../../xplat/web/features/charts/components/charts/dynocard.component.ts"));


/***/ }),

/***/ "../../xplat/web/features/charts/index.ts":
/*!***********************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/xplat/web/features/charts/index.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components */ "../../xplat/web/features/charts/components/index.ts"));
__export(__webpack_require__(/*! ./charts.module */ "../../xplat/web/features/charts/charts.module.ts"));


/***/ }),

/***/ "../../xplat/web/features/index.ts":
/*!****************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/xplat/web/features/index.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./ui */ "../../xplat/web/features/ui/index.ts"));
__export(__webpack_require__(/*! ./charts */ "../../xplat/web/features/charts/index.ts"));


/***/ }),

/***/ "../../xplat/web/features/ui/index.ts":
/*!*******************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/xplat/web/features/ui/index.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ui_module_1 = __webpack_require__(/*! ./ui.module */ "../../xplat/web/features/ui/ui.module.ts");
exports.UIModule = ui_module_1.UIModule;


/***/ }),

/***/ "../../xplat/web/features/ui/ui.module.ts":
/*!***********************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/xplat/web/features/ui/ui.module.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
var router_1 = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
// libs
var features_1 = __webpack_require__(/*! @iot-edge-dynocard/features */ "../../libs/features/index.ts");
var MODULES = [
    common_1.CommonModule,
    router_1.RouterModule,
    forms_1.FormsModule,
    forms_1.ReactiveFormsModule,
    features_1.UISharedModule
];
var UIModule = /** @class */ (function () {
    function UIModule() {
    }
    UIModule = __decorate([
        core_1.NgModule({
            imports: MODULES.slice(),
            exports: MODULES.slice(),
        })
    ], UIModule);
    return UIModule;
}());
exports.UIModule = UIModule;


/***/ }),

/***/ "../../xplat/web/index.ts":
/*!*******************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/xplat/web/index.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./core */ "../../xplat/web/core/index.ts"));
__export(__webpack_require__(/*! ./features */ "../../xplat/web/features/index.ts"));


/***/ }),

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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-20\">\n  <dynocard-chart></dynocard-chart>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
// xplat
var web_1 = __webpack_require__(/*! @iot-edge-dynocard/web */ "../../xplat/web/index.ts");
var core_2 = __webpack_require__(/*! @iot-edge-dynocard/core */ "../../libs/core/index.ts");
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent(dataService) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        return _this;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'iot-edge-dynocard-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [core_2.DataService])
    ], AppComponent);
    return AppComponent;
}(web_1.AppBaseComponent));
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
// app
var core_module_1 = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
var shared_module_1 = __webpack_require__(/*! ./features/shared/shared.module */ "./src/app/features/shared/shared.module.ts");
var web_1 = __webpack_require__(/*! @iot-edge-dynocard/web */ "../../xplat/web/index.ts");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [core_module_1.CoreModule, shared_module_1.SharedModule, web_1.ChartsModule],
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
// xplat
var web_1 = __webpack_require__(/*! @iot-edge-dynocard/web */ "../../xplat/web/index.ts");
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            imports: [web_1.DynocardCoreModule]
        })
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;


/***/ }),

/***/ "./src/app/features/shared/shared.module.ts":
/*!**************************************************!*\
  !*** ./src/app/features/shared/shared.module.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
// xplat
var web_1 = __webpack_require__(/*! @iot-edge-dynocard/web */ "../../xplat/web/index.ts");
var MODULES = [web_1.UIModule];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: MODULES.slice(),
            exports: MODULES.slice()
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
// libs
var core_2 = __webpack_require__(/*! @iot-edge-dynocard/core */ "../../libs/core/index.ts");
// app
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
if (core_2.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic()
    .bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/flytoy/DevSource/iot-edge-dynocard/apps/web-dynocard/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map