webpackHotUpdate_N_E("pages/class_fetch",{

/***/ "./pages/class_fetch.js":
/*!******************************!*\
  !*** ./pages/class_fetch.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Class_fetch; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var _jsxFileName = "C:\\Users\\KIPLAYER\\Desktop\\Git\\reactNext\\pages\\class_fetch.js",
    _s = $RefreshSig$();


function Class_fetch() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      days = _useState[0],
      setDays = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      words = _useState2[0],
      setWords = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    fetch('http://kimkeun.com/json/data.json').then(function (res) {
      return res.json();
    }).then(function (data) {
      console.log(data);
      setDays(data.days);
      setWords(data.words);
    });
  }, []);
  console.log(days);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Fetch()"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "tabBar",
      children: days.map(function (day) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: '/day/' + day.day,
            children: ["Day ", day.day]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 7
          }, _this)
        }, day.id, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 6
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        children: words.map(function (word) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: word.eng
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: word.kor
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 8
            }, _this)]
          }, word.id, true, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 7
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }, this)]
  }, void 0, true);
}

_s(Class_fetch, "kAV4u5k4+F+ZL4bSl0FKWOh7c0U=");

_c = Class_fetch;

var _c;

$RefreshReg$(_c, "Class_fetch");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2xhc3NfZmV0Y2guanMiXSwibmFtZXMiOlsiQ2xhc3NfZmV0Y2giLCJ1c2VTdGF0ZSIsImRheXMiLCJzZXREYXlzIiwid29yZHMiLCJzZXRXb3JkcyIsInVzZUVmZmVjdCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImRheSIsImlkIiwid29yZCIsImVuZyIsImtvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsV0FBVCxHQUF1QjtBQUFBOztBQUFBOztBQUFBLGtCQUNiQyxzREFBUSxDQUFDLEVBQUQsQ0FESztBQUFBLE1BQzlCQyxJQUQ4QjtBQUFBLE1BQ3hCQyxPQUR3Qjs7QUFBQSxtQkFFWEYsc0RBQVEsQ0FBQyxFQUFELENBRkc7QUFBQSxNQUU5QkcsS0FGOEI7QUFBQSxNQUV2QkMsUUFGdUI7O0FBSXJDQyx5REFBUyxDQUFDLFlBQU07QUFDZkMsU0FBSyxDQUFDLG1DQUFELENBQUwsQ0FDRUMsSUFERixDQUNPLFVBQUFDLEdBQUcsRUFBSTtBQUNaLGFBQU9BLEdBQUcsQ0FBQ0MsSUFBSixFQUFQO0FBQ0EsS0FIRixFQUlFRixJQUpGLENBSU8sVUFBQUcsSUFBSSxFQUFJO0FBQ2JDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0FSLGFBQU8sQ0FBQ1EsSUFBSSxDQUFDVCxJQUFOLENBQVA7QUFDQUcsY0FBUSxDQUFDTSxJQUFJLENBQUNQLEtBQU4sQ0FBUjtBQUNBLEtBUkY7QUFTQSxHQVZRLEVBVU4sRUFWTSxDQUFUO0FBV0FRLFNBQU8sQ0FBQ0MsR0FBUixDQUFZWCxJQUFaO0FBRUEsc0JBQ0M7QUFBQSw0QkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBRUM7QUFBSSxlQUFTLEVBQUUsUUFBZjtBQUFBLGdCQUNFQSxJQUFJLENBQUNZLEdBQUwsQ0FBUyxVQUFBQyxHQUFHO0FBQUEsNEJBQ1o7QUFBQSxpQ0FDQztBQUFHLGdCQUFJLEVBQUUsVUFBUUEsR0FBRyxDQUFDQSxHQUFyQjtBQUFBLCtCQUErQkEsR0FBRyxDQUFDQSxHQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxXQUFTQSxHQUFHLENBQUNDLEVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEWTtBQUFBLE9BQVo7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkQsZUFTQztBQUFBLDZCQUNDO0FBQUEsa0JBQ0VaLEtBQUssQ0FBQ1UsR0FBTixDQUFVLFVBQUFHLElBQUk7QUFBQSw4QkFDZDtBQUFBLG9DQUNDO0FBQUEsd0JBQUtBLElBQUksQ0FBQ0M7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELGVBRUM7QUFBQSx3QkFBS0QsSUFBSSxDQUFDRTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkQ7QUFBQSxhQUFTRixJQUFJLENBQUNELEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEYztBQUFBLFNBQWQ7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVREO0FBQUEsa0JBREQ7QUFzQkE7O0dBdkN1QmhCLFc7O0tBQUFBLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2xhc3NfZmV0Y2guNzYwYWYxZTlhMmYwM2YxZjE2ZDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDbGFzc19mZXRjaCgpIHtcclxuXHRjb25zdCBbZGF5cywgc2V0RGF5c10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW3dvcmRzLCBzZXRXb3Jkc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRmZXRjaCgnaHR0cDovL2tpbWtldW4uY29tL2pzb24vZGF0YS5qc29uJylcclxuXHRcdFx0LnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gcmVzLmpzb24oKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRcdFx0c2V0RGF5cyhkYXRhLmRheXMpO1xyXG5cdFx0XHRcdHNldFdvcmRzKGRhdGEud29yZHMpO1xyXG5cdFx0XHR9KTtcclxuXHR9LCBbXSk7XHJcblx0Y29uc29sZS5sb2coZGF5cyk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8aDI+RmV0Y2goKTwvaDI+XHJcblx0XHRcdDx1bCBjbGFzc05hbWU9e1widGFiQmFyXCJ9PlxyXG5cdFx0XHRcdHtkYXlzLm1hcChkYXkgPT4gKFxyXG5cdFx0XHRcdFx0PGxpIGtleT17ZGF5LmlkfT5cclxuXHRcdFx0XHRcdFx0PGEgaHJlZj17Jy9kYXkvJytkYXkuZGF5fT5EYXkge2RheS5kYXl9PC9hPlxyXG5cdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0PC91bD5cclxuXHRcdFx0PHRhYmxlPlxyXG5cdFx0XHRcdDx0Ym9keT5cclxuXHRcdFx0XHRcdHt3b3Jkcy5tYXAod29yZCA9PiAoXHJcblx0XHRcdFx0XHRcdDx0ciBrZXk9e3dvcmQuaWR9PlxyXG5cdFx0XHRcdFx0XHRcdDx0ZD57d29yZC5lbmd9PC90ZD5cclxuXHRcdFx0XHRcdFx0XHQ8dGQ+e3dvcmQua29yfTwvdGQ+XHJcblx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8L3Rib2R5PlxyXG5cdFx0XHQ8L3RhYmxlPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=