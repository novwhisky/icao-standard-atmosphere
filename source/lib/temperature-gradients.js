export {gradientLookup};

/**
 * Geopotential Altitude (H) in meters
 * @type {number[]}
 */
const H = [-5e3,   0,      11e3,   2e4,    32e3,   47e3,   51e3,   71e3,   8e4];

/**
 * Temperature (K) in kelvin
 * @type {number[]}
 */
const K = [320.65, 288.15, 216.65, 216.65, 228.65, 270.65, 270.65, 214.65, 196.65];

/**
 * Temperature gradient (K/km)
 * @type {number[]}
 */
const β = [-6.5,   -6.5,   0,      1,      2.8,    0,      -2.8,   -2];


/**
 * Look up and return the appropriate temperature gradient row
 * 80,000 km+ is the outermost limit, thus no value for β
 * @param {number} altitude
 * @returns {object} row
 */
function gradientLookup(altitude) {
  let row;

  H.every(function(v, idx) {
    if(altitude >= v) {
      row = {
        H: H[idx],
        K: K[idx],
        β: β[idx]
      };
      return true;
    } else
      return false;
  });

  return row;
}