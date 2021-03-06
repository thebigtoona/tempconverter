"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Temp_1 = require("../Temp/Temp");
var assert = require('assert');
describe('Temp', function () {
    describe('#create', function () {
        it('should create a new Temp Object with value and unit information', function () {
            var temp = new Temp_1.default(20, 'F');
            assert.equal(temp.value, 20);
            assert.equal(temp.unit, 'F');
        });
        // TODO: fix this test 
        // it('should not create a Temp object if value or unit is not present as params');
    });
    describe('#toString', function () {
        it('should return a string matching the value and unit used for the temp object', function () {
            var temp = new Temp_1.default(20, 'F');
            assert.equal(temp.toString(), 'Value: 20, Unit: F');
        });
    });
});
