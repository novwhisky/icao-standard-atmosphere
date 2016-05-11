'use strict';
export default Temperature;

/**
 * Temperature object constructor
 * @param value {number}
 * @param [unit] {string}
 * @constructor
 */
function Temperature(value, unit) {
  if(!(this instanceof Temperature)) {
    return new Temperature(value, unit);
  }

  if(typeof unit !== 'string' || unit.length <= 0) {
    // default to Kelvin
    this.unit = 'K';
    console.warn('Temperature unit was not given, defaulting to SI unit Kelvin');
  }else{
    this.unit = unit;
  }

  this.toString = function(decimalPlaces) {
    decimalPlaces = decimalPlaces || 1;
    let m = Math.pow(10, decimalPlaces);

    return (Math.round(value * m) / m) + ' º' + this.unit;
  };

  this.valueOf = function() { return value; };

  this.convertTo = function convertTo(newUnit) {
    if(this.unit.toLowerCase() === newUnit.toLowerCase()) return this;
    else {
      var convertFn = this.unit.toUpperCase() + 'to' + newUnit.toUpperCase();
      if(this[convertFn]){
        return new Temperature(this[convertFn](value), newUnit);
      }else{
        console.error('Error converting ' + this + ' to ' + newUnit);
      }
    }
  };
}

Temperature.prototype = {
  KtoC: function(k) { return k - 273.15; },

  KtoF: function(k) { return (k - 273.15) * 1.8 + 32; },

  FtoC: function(f) { return (f - 32) / 1.8;},

  FtoK: function(f) { return ((f - 32) / 1.8) + 273.15; },

  CtoF: function(c) { return c * 1.8 + 32; },

  CtoK: function(c) { return c + 273.15; }
};