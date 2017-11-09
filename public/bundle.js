/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__client_hotspots__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_hotspots__ = __webpack_require__(3);


// import getPayphones, {putPayphoneData} from '../client/payphones'

let map;
global.initMap = function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    // // 40.7589, -73.9851 Times Square
    center: new google.maps.LatLng(40.7589, -73.9851),
    mapTypeId: 'terrain'
  });
}

Object(__WEBPACK_IMPORTED_MODULE_1__server_hotspots__["a" /* default */])().then(data => Object(__WEBPACK_IMPORTED_MODULE_0__client_hotspots__["a" /* default */])(data, map))

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = plotHotspots;
function plotHotspots(data, map) {
  // Loop through the results array and place a marker for    each set of coordinates.
    let filteredData = data.filter((result) => {
      return (result[9].slice(25, 41) < 40.76 && result[9].slice(25, 41) > 40.74) && (result[9].slice(7, 23) > -74 && result[9].slice(7, 23) < -73.99)
    })
    for (var i = 0; i < filteredData.length; i++) {
      let coords = [filteredData[i][9].slice(7, 23), filteredData[i][9].slice(25, 41)]
      const latLng = new google.maps.LatLng(coords[1], coords[0]);
      const marker = new google.maps.Marker({
        position: latLng,
        map: map
      });
  }
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const hotspotData = () => {
  return axios.get('https://data.cityofnewyork.us/api/views/varh-9tsp/rows.json?accessType=DOWNLOAD')
    .then((res) => res.data.data)
    .catch(err => console.error(err))
}

/* harmony default export */ __webpack_exports__["a"] = (hotspotData);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map