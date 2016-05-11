'use strict';
export default LinearDistance;

function LinearDistance(value, unit) {
  if(!(this instanceof LinearDistance)) {
    return new LinearDistance(value, unit);
  }

  if(typeof unit !== 'string' || unit.length <= 0) {
    // default to Meters
    this.unit = 'm';
    console.warn('Distance unit was not given, defaulting to SI unit Meter');
  }else{
    this.unit = unit;
  }

  this.toString = function(decimalPlaces) {
    decimalPlaces = decimalPlaces || 1;
    let m = Math.pow(10, decimalPlaces);

    return (Math.round(value * m) / m) + ' ' + this.unit;
  };

  this.valueOf = function() { return value; };

  this.convertTo = function convertTo(newUnit) {
    if(this.unit.toLowerCase() === newUnit.toLowerCase()) return this;
    else {
      var convertFn = this.unit.toUpperCase() + 'to' + newUnit.toUpperCase();
      if(this[convertFn]){
        return new LinearDistance(this[convertFn](value), newUnit);
      }else{
        console.error('Error converting ' + this + ' to ' + newUnit);
      }
    }
  };
}

LinearDistance.prototype = {
  FTtoM: function(ft) { return ft * 0.3048; },
  MtoFT: function(m) { return m / 0.3048; }
};