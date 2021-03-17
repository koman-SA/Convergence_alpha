"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevicesComponent = void 0;
var core_1 = require("@angular/core");
var paginator_1 = require("@angular/material/paginator");
var sort_1 = require("@angular/material/sort");
var table_1 = require("@angular/material/table");
var DevicesComponent = /** @class */ (function () {
    function DevicesComponent() {
        this.columns = ['id', 'site', 'workstation', 'description', 'type', 'username', 'last_online'];
        this.devices = [{
                id: '1',
                site: 'headoffice',
                workstation: 'desktop01',
                description: 'mydevice',
                type: 'laptop',
                username: 'eliasonw',
                last_online: '2020-09-20 10:10:10'
            },
            {
                id: '2',
                site: 'headoffice',
                workstation: 'desktop02',
                description: 'mydevice',
                type: 'laptop',
                username: 'eliasonj',
                last_online: '2020-09-20 10:10:10'
            }];
        this.dataSource = new table_1.MatTableDataSource(this.devices);
    }
    DevicesComponent.prototype.ngOnInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    DevicesComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    __decorate([
        core_1.ViewChild(sort_1.MatSort, { static: true })
    ], DevicesComponent.prototype, "sort", void 0);
    __decorate([
        core_1.ViewChild(paginator_1.MatPaginator, { static: true })
    ], DevicesComponent.prototype, "paginator", void 0);
    DevicesComponent = __decorate([
        core_1.Component({
            selector: 'app-devices',
            templateUrl: './devices.component.html',
            styleUrls: ['./devices.component.css']
        })
    ], DevicesComponent);
    return DevicesComponent;
}());
exports.DevicesComponent = DevicesComponent;
//# sourceMappingURL=devices.component.js.map