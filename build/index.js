/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	var _getBookJs = __webpack_require__(1);
	
	var _loggingJs = __webpack_require__(2);
	
	var _counterJs = __webpack_require__(4);
	
	var _utilsJs = __webpack_require__(3);
	
	var util = _interopRequireWildcard(_utilsJs);
	
	var _constantsJs = __webpack_require__(5);
	
	var _ = util;
	
	function formatter(theBook) {
	  function formattedBook() {
	    var response;
	    return regeneratorRuntime.async(function formattedBook$(context$2$0) {
	      while (1) switch (context$2$0.prev = context$2$0.next) {
	        case 0:
	          context$2$0.next = 2;
	          return regeneratorRuntime.awrap(_.lowerCase(theBook));
	
	        case 2:
	          response = context$2$0.sent;
	          context$2$0.next = 5;
	          return regeneratorRuntime.awrap(_.removeSingleQuote(response));
	
	        case 5:
	          response = context$2$0.sent;
	          context$2$0.next = 8;
	          return regeneratorRuntime.awrap(_.replaceNonAlphaChar(response));
	
	        case 8:
	          response = context$2$0.sent;
	          context$2$0.next = 11;
	          return regeneratorRuntime.awrap(_.convertToArray(response));
	
	        case 11:
	          response = context$2$0.sent;
	          return context$2$0.abrupt('return', response);
	
	        case 13:
	        case 'end':
	          return context$2$0.stop();
	      }
	    }, null, this);
	  }
	  formattedBook().then(function (data) {
	    (0, _counterJs.counter)(data);
	    (0, _loggingJs.logger)(_constantsJs.counted);
	  });
	}
	
	(0, _getBookJs.getBook)('/book.txt', function (data) {
	  return formatter(data);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function getBook(url, callback) {
	  fetch(url).then(function (response) {
	    response.text().then(function (data) {
	      callback(data);
	    });
	  });
	}
	
	exports.getBook = getBook;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _utilsJs = __webpack_require__(3);
	
	function logIt(arr, prop) {
	    if (arr[prop].isPrime === true) {
	        return 'and is a prime number';
	    } else {
	        return '';
	    }
	}
	
	function logger(counted) {
	    var message = '';
	    for (var prop in counted) {
	        message += prop + ' occurs ' + counted[prop].count + ' times ' + logIt(counted, prop) + '\n';
	    }
	    console.log(message);
	}
	
	exports.logger = logger;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	function isPrime(value) {
	    for (var i = 2; i < value; i++) {
	        if (value % i === 0) {
	            return false;
	        }
	    }
	    return value > 1;
	};
	
	function lowerCase(str) {
	    return new Promise(function (resolve, reject) {
	        try {
	            var result = str.toLowerCase();
	            resolve(result);
	        } catch (err) {
	            reject(err);
	        }
	    });
	};
	
	function removeSingleQuote(str) {
	    return new Promise(function (resolve, reject) {
	        try {
	            var result = str.replace(/\'/g, '');
	            resolve(result);
	        } catch (err) {
	            reject(err);
	        }
	    });
	}
	
	function replaceNonAlphaChar(str) {
	    return new Promise(function (resolve, reject) {
	        try {
	            var result = str.replace(/[^a-zA-Z ]+/g, ' ');
	            resolve(result);
	        } catch (err) {
	            reject(err);
	        }
	    });
	};
	
	function convertToArray(str) {
	    var p = new Promise(function (resolve, reject) {
	        try {
	            resolve(str.split(' '));
	        } catch (err) {
	            reject(err);
	        }
	    });
	    return p;
	};
	
	exports.isPrime = isPrime;
	exports.lowerCase = lowerCase;
	exports.removeSingleQuote = removeSingleQuote;
	exports.replaceNonAlphaChar = replaceNonAlphaChar;
	exports.convertToArray = convertToArray;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _loggingJs = __webpack_require__(2);
	
	var _constantsJs = __webpack_require__(5);
	
	var _utilsJs = __webpack_require__(3);
	
	function counter(arr) {
	  if (!arr) return;
	  for (var i = 0, len = arr.length; i < len; i++) {
	    var num = arr[i];
	    _constantsJs.counts[num] = _constantsJs.counts[num] ? _constantsJs.counts[num] + 1 : 1;
	  }
	  for (var prop in _constantsJs.counts) {
	    _constantsJs.counted[prop] = {};
	    _constantsJs.counted[prop].count = _constantsJs.counts[prop];
	
	    if ((0, _utilsJs.isPrime)(_constantsJs.counted[prop].count)) {
	      _constantsJs.counted[prop].isPrime = true;
	    }
	  }
	}
	
	exports.counter = counter;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var counts = {};
	var counted = {};
	exports.counts = counts;
	exports.counted = counted;

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map