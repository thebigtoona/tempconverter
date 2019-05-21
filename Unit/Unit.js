"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}
var UnitConverter = /** @class */ (function () {
    function UnitConverter() {
    }
    UnitConverter.isValidUnit = function (measure) {
        var units = ["f", "F", "k", "K", "c", "C", "Kelvin", "Fahrenheit", "Celsius"];
        if (units.indexOf(measure) > 0)
            return true;
        return false;
    };
    UnitConverter.formatUnitType = function (measure) {
        if (measure.toUpperCase() === 'K' || measure.toUpperCase() === 'KELVIN')
            return 'K';
        if (measure.toUpperCase() === 'C' || measure.toUpperCase() === 'CELCIUS')
            return 'C';
        if (measure.toUpperCase() === 'F' || measure.toUpperCase() === 'FAHRENHEIT')
            return 'F';
        return false;
    };
    UnitConverter.convertUnit = function (value, measure, conversion) {
        if (measure && conversion) {
            var m = UnitConverter.formatUnitType(measure);
            var conv = UnitConverter.formatUnitType(conversion);
            if (!m || !conv)
                return false;
            if (m === 'F') {
                switch (conv) {
                    case 'C':
                        return UnitConverter.FtoC(value);
                    case 'K':
                        return UnitConverter.FtoK(value);
                    default:
                        return value;
                }
            }
            if (m === 'C') {
                switch (conv) {
                    case 'F':
                        return UnitConverter.CtoF(value);
                    case 'K':
                        return UnitConverter.CtoK(value);
                    default:
                        return value;
                }
            }
            if (m === 'K') {
                switch (conv) {
                    case 'F':
                        return UnitConverter.KtoF(value);
                    case 'C':
                        return UnitConverter.KtoC(value);
                    default:
                        return value;
                }
            }
            return false;
        }
    };
    UnitConverter.FtoC = function (fahrenheit) { return round((fahrenheit - 32) / 1.8, 2); };
    UnitConverter.FtoK = function (fahrenheit) { return round((fahrenheit + 459.67) * (5 / 9), 2); };
    UnitConverter.CtoF = function (celsius) { return round((celsius * 1.8) + 32, 2); };
    UnitConverter.CtoK = function (celsius) { return round(celsius + 273.15, 2); };
    UnitConverter.KtoF = function (kelvin) { return round((kelvin * (9 / 5)) - 459.67, 2); };
    UnitConverter.KtoC = function (kelvin) { return round(kelvin - 273.15, 2); };
    return UnitConverter;
}());
exports.default = UnitConverter;
