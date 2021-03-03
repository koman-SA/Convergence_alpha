"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var animations_1 = require("@angular/platform-browser/animations");
var paginator_1 = require("@angular/material/paginator");
var sort_1 = require("@angular/material/sort");
var table_1 = require("@angular/material/table");
var devices_component_1 = require("./devices.component");
describe('DevicesComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [devices_component_1.DevicesComponent],
            imports: [
                animations_1.NoopAnimationsModule,
                paginator_1.MatPaginatorModule,
                sort_1.MatSortModule,
                table_1.MatTableModule,
            ]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(devices_component_1.DevicesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should compile', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=devices.component.spec.js.map