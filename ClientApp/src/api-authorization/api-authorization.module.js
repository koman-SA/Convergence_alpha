"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiAuthorizationModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var login_menu_component_1 = require("./login-menu/login-menu.component");
var login_component_1 = require("./login/login.component");
var logout_component_1 = require("./logout/logout.component");
var router_1 = require("@angular/router");
var api_authorization_constants_1 = require("./api-authorization.constants");
var http_1 = require("@angular/common/http");
var ApiAuthorizationModule = /** @class */ (function () {
    function ApiAuthorizationModule() {
    }
    ApiAuthorizationModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                http_1.HttpClientModule,
                router_1.RouterModule.forChild([
                    { path: api_authorization_constants_1.ApplicationPaths.Register, component: login_component_1.LoginComponent },
                    { path: api_authorization_constants_1.ApplicationPaths.Profile, component: login_component_1.LoginComponent },
                    { path: api_authorization_constants_1.ApplicationPaths.Login, component: login_component_1.LoginComponent },
                    { path: api_authorization_constants_1.ApplicationPaths.LoginFailed, component: login_component_1.LoginComponent },
                    { path: api_authorization_constants_1.ApplicationPaths.LoginCallback, component: login_component_1.LoginComponent },
                    { path: api_authorization_constants_1.ApplicationPaths.LogOut, component: logout_component_1.LogoutComponent },
                    { path: api_authorization_constants_1.ApplicationPaths.LoggedOut, component: logout_component_1.LogoutComponent },
                    { path: api_authorization_constants_1.ApplicationPaths.LogOutCallback, component: logout_component_1.LogoutComponent }
                ])
            ],
            declarations: [login_menu_component_1.LoginMenuComponent, login_component_1.LoginComponent, logout_component_1.LogoutComponent],
            exports: [login_menu_component_1.LoginMenuComponent, login_component_1.LoginComponent, logout_component_1.LogoutComponent]
        })
    ], ApiAuthorizationModule);
    return ApiAuthorizationModule;
}());
exports.ApiAuthorizationModule = ApiAuthorizationModule;
//# sourceMappingURL=api-authorization.module.js.map