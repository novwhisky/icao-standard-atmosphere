'use strict';
import Temperature from './Temperature';
import LinearDistance from './LinearDistance';
import Pressure from './Pressure';

export default Atmosphere;

function Atmosphere() {

}

Atmosphere.prototype = {
  byAltitude: function(msl, unit) {},
  byPressure: function(prsr, unit) {}
};