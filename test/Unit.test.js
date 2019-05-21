"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Unit_1 = require("../Unit/Unit");
var Temp_1 = require("../Temp/Temp");
var assert = require('assert');
describe('Unit', function () {
    describe('#isValidUnit', function () {
        it('tests for valid unit input and returns a true/false value', function () {
            var valid = Unit_1.default.isValidUnit('F');
            var notValid = Unit_1.default.isValidUnit('invaliddata');
            var noDataEntered = Unit_1.default.isValidUnit();
            assert.equal(valid, true);
            assert.equal(notValid, false);
            assert.equal(noDataEntered, false);
        });
    });
    describe('#formatUnitType', function () {
        it('formats the unit type into either C, F, or K', function () {
            var formatted = Unit_1.default.formatUnitType('fahrenheit');
            assert.equal(formatted, 'F');
        });
    });
    describe('#convertUnitType', function () {
        it('converts from F to C', function () {
            var temp = new Temp_1.default(32, 'F');
            var conversion = Unit_1.default.convertUnit(temp.value, temp.unit, 'C');
            assert.equal(conversion, 0);
        });
        it('converts from F to K', function () {
            var temp = new Temp_1.default(0, 'F');
            var conversion = Unit_1.default.convertUnit(temp.value, temp.unit, 'K');
            assert.equal(conversion, 255.37);
        });
        it('converts from C to F', function () {
            var temp = new Temp_1.default(50, 'C');
            var conversion = Unit_1.default.convertUnit(temp.value, temp.unit, 'F');
            assert.equal(conversion, 122);
        });
        it('converts from C to K', function () {
            var temp = new Temp_1.default(0, 'C');
            var conversion = Unit_1.default.convertUnit(temp.value, temp.unit, 'K');
            assert.equal(conversion, 273.15);
        });
        it('converts from K to F', function () {
            var temp = new Temp_1.default(0, 'K');
            var conversion = Unit_1.default.convertUnit(temp.value, temp.unit, 'F');
            assert.equal(conversion, -459.67);
        });
        it('converts from K to C', function () {
            var temp = new Temp_1.default(0, 'K');
            var conversion = Unit_1.default.convertUnit(temp.value, temp.unit, 'C');
            assert.equal(conversion, -273.15);
        });
    });
});
