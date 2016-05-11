'use strict';
export default Pressure;

function Pressure(value, unit) {
  if(!(this instanceof Pressure)) {
    return new Pressure(value, unit);
  }

  if(typeof unit !== 'string' || unit.length <= 0) {
    // default to Pascals
    this.unit = 'Pa';
    console.warn('Pressure unit was not given, defaulting to SI unit Pascal');
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
        return new Pressure(this[convertFn](value), newUnit);
      }else{
        console.error('Error converting ' + this + ' to ' + newUnit);
      }
    }
  };
}

Pressure.prototype = {
  PAtoHG: function(Pa) { return Pa * 0.0002952998751; },
  PAtoBAR: function(Pa) { return Pa * 100000; },
  HGtoPA: function(Hg) { return Hg * 3386.38816; },
  HGtoBAR: function(Hg) { return this.PAtoBAR(this.HGtoPA(Hg)); },
  BARtoHG: function(bar) { return this.PAtoHG(this.BARtoPA(bar)); },
  BARtoPA: function(bar) { return 100000 / bar; }
};