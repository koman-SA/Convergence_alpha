"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var http_2 = require("@angular/common/http");
var http_3 = require("@angular/common/http");
var router_1 = require("@angular/router");
var animations_1 = require("@angular/platform-browser/animations");
var app_component_1 = require("./app.component");
var nav_menu_component_1 = require("./nav-menu/nav-menu.component");
var home_component_1 = require("./home/home.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var grid_list_1 = require("@angular/material/grid-list");
var card_1 = require("@angular/material/card");
var menu_1 = require("@angular/material/menu");
/*import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module;
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';*/
var sidenav_1 = require("@angular/material/sidenav");
var list_1 = require("@angular/material/list");
var icon_1 = require("@angular/material/icon");
var button_1 = require("@angular/material/button");
var toolbar_1 = require("@angular/material/toolbar");
var table_1 = require("@angular/material/table");
var paginator_1 = require("@angular/material/paginator");
var sort_1 = require("@angular/material/sort");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var owner_routing_module_1 = require("./owner/owner-routing/owner-routing.module");
var owner_list_component_1 = require("./owner/owner-list/owner-list.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_menu_component_1.NavMenuComponent,
                home_component_1.HomeComponent,
                dashboard_component_1.DashboardComponent,
                owner_list_component_1.OwnerListComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
                http_1.HttpClientModule,
                forms_1.FormsModule,
                http_2.HttpClient,
                http_3.HttpErrorResponse,
                animations_1.BrowserAnimationsModule,
                list_1.MatListModule,
                sidenav_1.MatSidenavModule,
                icon_1.MatIconModule,
                button_1.MatButtonModule,
                toolbar_1.MatToolbarModule,
                table_1.MatTableModule,
                grid_list_1.MatGridListModule,
                card_1.MatCardModule,
                menu_1.MatMenuModule,
                paginator_1.MatPaginatorModule,
                sort_1.MatSortModule,
                progress_spinner_1.MatProgressSpinnerModule,
                owner_routing_module_1.OwnerRoutingModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' },
                    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
                    { path: 'Owner-List', component: owner_list_component_1.OwnerListComponent },
                ]),
            ],
            providers: [
            /*{ provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }*/
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map