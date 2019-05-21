"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Temp = /** @class */ (function () {
    function Temp(value, unit) {
        this.value = value;
        this.unit = unit;
    }
    Temp.prototype.toString = function () {
        return "Value: " + this.value + ", Unit: " + this.unit;
    };
    return Temp;
}());
exports.default = Temp;
