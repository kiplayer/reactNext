module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/class_route.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/class_route.js":
/*!******************************!*\
  !*** ./pages/class_route.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Class_route; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_component_DayList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/component/DayList */ "./src/component/DayList.js");
/* harmony import */ var _src_component_DayView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/component/DayView */ "./src/component/DayView.js");


var _jsxFileName = "C:\\Users\\KIPLAYER\\Desktop\\Git\\reactNext\\pages\\class_route.js";


function Class_route() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Route"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "React + Next \uC5D0\uC120 useRouter\uB97C \uC0AC\uC6A9\uD558\uC5EC URL\uC5D0\uC11C Param \uC815\uBCF4\uB97C \uAC00\uC838\uC62C \uC218 \uC788\uC74C."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_component_DayList__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_component_DayView__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./src/component/DayList.js":
/*!**********************************!*\
  !*** ./src/component/DayList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DayList; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db/data.json */ "./src/db/data.json");
var _db_data_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../db/data.json */ "./src/db/data.json", 1);


var _jsxFileName = "C:\\Users\\KIPLAYER\\Desktop\\Git\\reactNext\\src\\component\\DayList.js";

/* Dummy 사용 */

function DayList(props) {
  const selectDay = props.day;
  console.log(props);
  console.log(_db_data_json__WEBPACK_IMPORTED_MODULE_1__.days);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "tabBar",
      children: _db_data_json__WEBPACK_IMPORTED_MODULE_1__.days.map(day => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: day.day == selectDay ? "active" : "",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: '/day/' + day.day,
          children: ["Day ", day.day]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 7
        }, this)
      }, day.id, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 6
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, this)
  }, void 0, false);
}
/* Custom Hooks
import { useEffect, useState } from 'react';
import useFetch from '../../src/hooks/useFetch';

export default function DayList(props) {
	const selectDay = props.day;
	const days = useFetch('http://kimkeun.com:4000/days.json');

	return (
		<>
			<ul className={"tabBar"}>
				{days.map(day => (
					<li key={day.id} className={day.day == selectDay ? "active":""}>
						<a href={'/day/'+day.day}>Day {day.day}</a>
					</li>
				))}
			</ul>
		</>
	);
}
*/

/***/ }),

/***/ "./src/component/DayView.js":
/*!**********************************!*\
  !*** ./src/component/DayView.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DayView; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db/data.json */ "./src/db/data.json");
var _db_data_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../db/data.json */ "./src/db/data.json", 1);


var _jsxFileName = "C:\\Users\\KIPLAYER\\Desktop\\Git\\reactNext\\src\\component\\DayView.js";

/* Dummy 사용 */

function DayView(props) {
  const selectDay = props.day;
  const wordList = _db_data_json__WEBPACK_IMPORTED_MODULE_1__.words.filter(word => word.day == selectDay);
  console.log(_db_data_json__WEBPACK_IMPORTED_MODULE_1__.words);
  console.log(wordList);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        children: wordList.map(word => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: word.eng
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 8
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: word.kor
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 8
          }, this)]
        }, word.id, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 7
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, this)
  }, void 0, false);
}
/* Custom Hooks
import { useEffect, useState } from 'react';
import useFetch from '../../src/hooks/useFetch';

export default function DayList(props) {
	const selectDay = props.day;
	const wordList = useFetch("http://kimkeun.com:4000/words.json?day="+selectDay);

	return (
		<>
			<table>
				<tbody>
					{wordList.map(word => (
						<tr key={word.id}>
							<td>{word.eng}</td>
							<td>{word.kor}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}
*/

/***/ }),

/***/ "./src/db/data.json":
/*!**************************!*\
  !*** ./src/db/data.json ***!
  \**************************/
/*! exports provided: days, words, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"days\":[{\"id\":1,\"day\":1},{\"id\":2,\"day\":2},{\"id\":3,\"day\":3}],\"words\":[{\"id\":1,\"day\":1,\"eng\":\"book\",\"kor\":\"책\",\"isDone\":false},{\"id\":2,\"day\":1,\"eng\":\"apply\",\"kor\":\"사과\",\"isDone\":false},{\"id\":3,\"day\":2,\"eng\":\"car\",\"kor\":\"자동차\",\"isDone\":false},{\"id\":4,\"day\":2,\"eng\":\"pen\",\"kor\":\"펜\",\"isDone\":false},{\"id\":5,\"day\":3,\"eng\":\"school\",\"kor\":\"학교\",\"isDone\":false},{\"id\":6,\"day\":3,\"eng\":\"pencil\",\"kor\":\"연필\",\"isDone\":false}]}");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2xhc3Nfcm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9EYXlMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvRGF5Vmlldy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJDbGFzc19yb3V0ZSIsIkRheUxpc3QiLCJwcm9wcyIsInNlbGVjdERheSIsImRheSIsImNvbnNvbGUiLCJsb2ciLCJkdW1teSIsImRheXMiLCJtYXAiLCJpZCIsIkRheVZpZXciLCJ3b3JkTGlzdCIsIndvcmRzIiwiZmlsdGVyIiwid29yZCIsImVuZyIsImtvciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBRWUsU0FBU0EsV0FBVCxHQUF1QjtBQUNyQyxzQkFDQztBQUFBLDRCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZELGVBR0MscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhELGVBSUMscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpEO0FBQUEsa0JBREQ7QUFRQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkQ7QUFDQTtBQUVlLFNBQVNDLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQ3RDLFFBQU1DLFNBQVMsR0FBR0QsS0FBSyxDQUFDRSxHQUF4QjtBQUVBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosS0FBWjtBQUNBRyxTQUFPLENBQUNDLEdBQVIsQ0FBWUMsMENBQUssQ0FBQ0MsSUFBbEI7QUFFQSxzQkFDQztBQUFBLDJCQUNDO0FBQUksZUFBUyxFQUFFLFFBQWY7QUFBQSxnQkFDRUQsMENBQUssQ0FBQ0MsSUFBTixDQUFXQyxHQUFYLENBQWVMLEdBQUcsaUJBQ2xCO0FBQWlCLGlCQUFTLEVBQUVBLEdBQUcsQ0FBQ0EsR0FBSixJQUFXRCxTQUFYLEdBQXVCLFFBQXZCLEdBQWdDLEVBQTVEO0FBQUEsK0JBQ0M7QUFBRyxjQUFJLEVBQUUsVUFBUUMsR0FBRyxDQUFDQSxHQUFyQjtBQUFBLDZCQUErQkEsR0FBRyxDQUFDQSxHQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxTQUFTQSxHQUFHLENBQUNNLEVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELG1CQUREO0FBV0E7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUNBO0FBRWUsU0FBU0MsT0FBVCxDQUFpQlQsS0FBakIsRUFBd0I7QUFDdEMsUUFBTUMsU0FBUyxHQUFHRCxLQUFLLENBQUNFLEdBQXhCO0FBQ0EsUUFBTVEsUUFBUSxHQUFHTCwwQ0FBSyxDQUFDTSxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLElBQUksSUFBSUEsSUFBSSxDQUFDWCxHQUFMLElBQVlELFNBQXZDLENBQWpCO0FBRUFFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQywwQ0FBSyxDQUFDTSxLQUFsQjtBQUNBUixTQUFPLENBQUNDLEdBQVIsQ0FBWU0sUUFBWjtBQUVBLHNCQUNDO0FBQUEsMkJBQ0M7QUFBQSw2QkFDQztBQUFBLGtCQUNFQSxRQUFRLENBQUNILEdBQVQsQ0FBYU0sSUFBSSxpQkFDakI7QUFBQSxrQ0FDQztBQUFBLHNCQUFLQSxJQUFJLENBQUNDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxlQUVDO0FBQUEsc0JBQUtELElBQUksQ0FBQ0U7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZEO0FBQUEsV0FBU0YsSUFBSSxDQUFDTCxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELG1CQUREO0FBY0E7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEQSxrRCIsImZpbGUiOiJwYWdlcy9jbGFzc19yb3V0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvY2xhc3Nfcm91dGUuanNcIik7XG4iLCJpbXBvcnQgRGF5TGlzdCBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudC9EYXlMaXN0XCI7XHJcbmltcG9ydCBEYXlWaWV3IGZyb20gXCIuLi9zcmMvY29tcG9uZW50L0RheVZpZXdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsYXNzX3JvdXRlKCkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8aDI+Um91dGU8L2gyPlxyXG5cdFx0XHQ8cD5SZWFjdCArIE5leHQg7JeQ7ISgIHVzZVJvdXRlcuulvCDsgqzsmqntlZjsl6wgVVJM7JeQ7IScIFBhcmFtIOygleuztOulvCDqsIDsoLjsmKwg7IiYIOyeiOydjC48L3A+XHJcblx0XHRcdDxEYXlMaXN0IC8+XHJcblx0XHRcdDxEYXlWaWV3IC8+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59IiwiLyogRHVtbXkg7IKs7JqpICovXHJcbmltcG9ydCBkdW1teSBmcm9tIFwiLi4vZGIvZGF0YS5qc29uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXlMaXN0KHByb3BzKSB7XHJcblx0Y29uc3Qgc2VsZWN0RGF5ID0gcHJvcHMuZGF5O1xyXG5cclxuXHRjb25zb2xlLmxvZyhwcm9wcyk7XHJcblx0Y29uc29sZS5sb2coZHVtbXkuZGF5cyk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8dWwgY2xhc3NOYW1lPXtcInRhYkJhclwifT5cclxuXHRcdFx0XHR7ZHVtbXkuZGF5cy5tYXAoZGF5ID0+IChcclxuXHRcdFx0XHRcdDxsaSBrZXk9e2RheS5pZH0gY2xhc3NOYW1lPXtkYXkuZGF5ID09IHNlbGVjdERheSA/IFwiYWN0aXZlXCI6XCJcIn0+XHJcblx0XHRcdFx0XHRcdDxhIGhyZWY9eycvZGF5LycrZGF5LmRheX0+RGF5IHtkYXkuZGF5fTwvYT5cclxuXHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdDwvdWw+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59XHJcblxyXG4vKiBDdXN0b20gSG9va3NcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZUZldGNoIGZyb20gJy4uLy4uL3NyYy9ob29rcy91c2VGZXRjaCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXlMaXN0KHByb3BzKSB7XHJcblx0Y29uc3Qgc2VsZWN0RGF5ID0gcHJvcHMuZGF5O1xyXG5cdGNvbnN0IGRheXMgPSB1c2VGZXRjaCgnaHR0cDovL2tpbWtldW4uY29tOjQwMDAvZGF5cy5qc29uJyk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8dWwgY2xhc3NOYW1lPXtcInRhYkJhclwifT5cclxuXHRcdFx0XHR7ZGF5cy5tYXAoZGF5ID0+IChcclxuXHRcdFx0XHRcdDxsaSBrZXk9e2RheS5pZH0gY2xhc3NOYW1lPXtkYXkuZGF5ID09IHNlbGVjdERheSA/IFwiYWN0aXZlXCI6XCJcIn0+XHJcblx0XHRcdFx0XHRcdDxhIGhyZWY9eycvZGF5LycrZGF5LmRheX0+RGF5IHtkYXkuZGF5fTwvYT5cclxuXHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdDwvdWw+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59XHJcbiovIiwiLyogRHVtbXkg7IKs7JqpICovXHJcbmltcG9ydCBkdW1teSBmcm9tIFwiLi4vZGIvZGF0YS5qc29uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXlWaWV3KHByb3BzKSB7XHJcblx0Y29uc3Qgc2VsZWN0RGF5ID0gcHJvcHMuZGF5O1xyXG5cdGNvbnN0IHdvcmRMaXN0ID0gZHVtbXkud29yZHMuZmlsdGVyKHdvcmQgPT4gd29yZC5kYXkgPT0gc2VsZWN0RGF5KTtcclxuXHJcblx0Y29uc29sZS5sb2coZHVtbXkud29yZHMpO1xyXG5cdGNvbnNvbGUubG9nKHdvcmRMaXN0KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDx0YWJsZT5cclxuXHRcdFx0XHQ8dGJvZHk+XHJcblx0XHRcdFx0XHR7d29yZExpc3QubWFwKHdvcmQgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8dHIga2V5PXt3b3JkLmlkfT5cclxuXHRcdFx0XHRcdFx0XHQ8dGQ+e3dvcmQuZW5nfTwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0PHRkPnt3b3JkLmtvcn08L3RkPlxyXG5cdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0PC90Ym9keT5cclxuXHRcdFx0PC90YWJsZT5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn1cclxuXHJcbi8qIEN1c3RvbSBIb29rc1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlRmV0Y2ggZnJvbSAnLi4vLi4vc3JjL2hvb2tzL3VzZUZldGNoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERheUxpc3QocHJvcHMpIHtcclxuXHRjb25zdCBzZWxlY3REYXkgPSBwcm9wcy5kYXk7XHJcblx0Y29uc3Qgd29yZExpc3QgPSB1c2VGZXRjaChcImh0dHA6Ly9raW1rZXVuLmNvbTo0MDAwL3dvcmRzLmpzb24/ZGF5PVwiK3NlbGVjdERheSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8dGFibGU+XHJcblx0XHRcdFx0PHRib2R5PlxyXG5cdFx0XHRcdFx0e3dvcmRMaXN0Lm1hcCh3b3JkID0+IChcclxuXHRcdFx0XHRcdFx0PHRyIGtleT17d29yZC5pZH0+XHJcblx0XHRcdFx0XHRcdFx0PHRkPnt3b3JkLmVuZ308L3RkPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZD57d29yZC5rb3J9PC90ZD5cclxuXHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdDwvdGJvZHk+XHJcblx0XHRcdDwvdGFibGU+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59XHJcbiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=