"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevicesDataSource = void 0;
var collections_1 = require("@angular/cdk/collections");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var EXAMPLE_DATA = [
    { id: 1, name: 'Hydrogen', type: 'Test' },
    { id: 2, name: 'Helium', type: 'Test' },
    { id: 3, name: 'Lithium', type: 'Test' },
    { id: 4, name: 'Beryllium', type: 'Test' },
];
var DevicesDataSource = /** @class */ (function (_super) {
    __extends(DevicesDataSource, _super);
    function DevicesDataSource() {
        var _this = _super.call(this) || this;
        _this.data = EXAMPLE_DATA;
        return _this;
    }
    DevicesDataSource.prototype.connect = function () {
        var _this = this;
        var dataMutations = [
            rxjs_1.of(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        return rxjs_1.merge.apply(void 0, dataMutations).pipe(operators_1.map(function () {
            return _this.getPagedData(_this.getSortedData(__spreadArray([], _this.data)));
        }));
    };
    DevicesDataSource.prototype.disconnect = function () { };
    DevicesDataSource.prototype.getPagedData = function (data) {
        var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    };
    DevicesDataSource.prototype.getSortedData = function (data) {
        var _this = this;
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'id': return compare(+a.id, +b.id, isAsc);
                case 'type': return compare(a.type, b.type, isAsc);
                default: return 0;
            }
        });
    };
    return DevicesDataSource;
}(collections_1.DataSource));
exports.DevicesDataSource = DevicesDataSource;
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
//# sourceMappingURL=devices-datasource.js.map