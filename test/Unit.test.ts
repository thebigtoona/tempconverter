import UnitConverter from "../Unit/Unit";
import Temp from "../Temp/Temp";

const assert = require('assert');


describe('Unit', function () {
  describe('#isValidUnit', function () {
    it('tests for valid unit input and returns a true/false value', function () {
      const valid = UnitConverter.isValidUnit('F');
      const notValid = UnitConverter.isValidUnit('invaliddata');
      const noDataEntered = UnitConverter.isValidUnit();
      assert.equal(valid, true);
      assert.equal(notValid, false);
      assert.equal(noDataEntered, false);
    });
  })
  describe('#formatUnitType', function () {
    it('formats the unit type into either C, F, or K', function () {
      let formatted = UnitConverter.formatUnitType('fahrenheit')
      assert.equal(formatted, 'F');
    });
  })
  describe('#convertUnitType', function () {
    it('converts from F to C', function () {
      const temp = new Temp(32, 'F');
      let conversion = UnitConverter.convertUnit(temp.value, temp.unit, 'C');
      assert.equal(conversion, 0);
    });
    it('converts from F to K', function () {
      const temp = new Temp(0, 'F');
      let conversion = UnitConverter.convertUnit(temp.value, temp.unit, 'K');
      assert.equal(conversion, 255.37);
    });
    it('converts from C to F', function () {
      const temp = new Temp(50, 'C');
      let conversion = UnitConverter.convertUnit(temp.value, temp.unit, 'F');
      assert.equal(conversion, 122);
    });
    it('converts from C to K', function () {
      const temp = new Temp(0, 'C');
      let conversion = UnitConverter.convertUnit(temp.value, temp.unit, 'K');
      assert.equal(conversion, 273.15);
    });
    it('converts from K to F', function () {
      const temp = new Temp(0, 'K');
      let conversion = UnitConverter.convertUnit(temp.value, temp.unit, 'F');
      assert.equal(conversion, -459.67);
    });
    it('converts from K to C', function () {
      const temp = new Temp(0, 'K');
      let conversion = UnitConverter.convertUnit(temp.value, temp.unit, 'C');
      assert.equal(conversion, -273.15);
    });
  })
})