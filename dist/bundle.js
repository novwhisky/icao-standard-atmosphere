(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["icao-standard-atmosphere"] = factory();
	else
		root["icao-standard-atmosphere"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Temperature = undefined;

	var _Temperature = __webpack_require__(1);

	var _Temperature2 = _interopRequireDefault(_Temperature);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Temperature = _Temperature2.default;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Temperature;

	/**
	 * Temperature object constructor
	 * @param value {number}
	 * @param [unit] {string}
	 * @constructor
	 */

	function Temperature(value, unit) {
	  if (!(this instanceof Temperature)) {
	    return new Temperature(value, unit);
	  }

	  if (typeof unit !== 'string' || unit.length <= 0) {
	    // default to Kelvin
	    this.unit = 'K';
	    console.warn('Temperature unit was not given, defaulting to SI unit Kelvin');
	  } else {
	    this.unit = unit.toUpperCase();
	  }

	  this.toString = function (decimalPlaces) {
	    decimalPlaces = decimalPlaces || 1;
	    var m = Math.pow(10, decimalPlaces);

	    return Math.round(value * m) / m + ' º' + this.unit;
	  };

	  this.valueOf = function () {
	    return value;
	  };

	  this.convertTo = function convertTo(newUnit) {
	    newUnit = newUnit.toUpperCase();

	    if (this.unit === newUnit) return this;else {
	      var convertFn = this.unit + 'to' + newUnit;
	      if (this[convertFn]) {
	        return new Temperature(this[convertFn](value), newUnit);
	      } else {
	        console.error('Error converting ' + this + ' to ' + newUnit);
	      }
	    }
	  };
	}

	Temperature.prototype = {
	  KtoC: function KtoC(k) {
	    return k - 273.15;
	  },

	  KtoF: function KtoF(k) {
	    return (k - 273.15) * 1.8 + 32;
	  },

	  FtoC: function FtoC(f) {
	    return (f - 32) / 1.8;
	  },

	  FtoK: function FtoK(f) {
	    return (f - 32) / 1.8 + 273.15;
	  },

	  CtoF: function CtoF(c) {
	    return c * 1.8 + 32;
	  },

	  CtoK: function CtoK(c) {
	    return c + 273.15;
	  }
	};

/***/ }
/******/ ])
});
;