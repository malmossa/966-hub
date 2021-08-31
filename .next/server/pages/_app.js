(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Layout/HeadTags.js":
/*!***************************************!*\
  !*** ./components/Layout/HeadTags.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\malmo\\966-hub\\components\\Layout\\HeadTags.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


const HeadTags = () => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx("meta", {
  name: "viewport",
  content: "initial-scale=1.0, width=device-width",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 7
  }
}), __jsx("meta", {
  charSet: "UTF-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "icon",
  href: "/favicon.png",
  sizes: "16*16",
  type: "image/png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/listMessages.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/styles.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/nprogress.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 7
  }
}), __jsx("link", {
  href: "https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700&display=swap",
  rel: "stylesheet",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 7
  }
}), __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 7
  }
}, "966 - HUB")));

/* harmony default export */ __webpack_exports__["default"] = (HeadTags);

/***/ }),

/***/ "./components/Layout/Layout.js":
/*!*************************************!*\
  !*** ./components/Layout/Layout.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HeadTags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeadTags */ "./components/Layout/HeadTags.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./components/Layout/Navbar.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\malmo\\966-hub\\components\\Layout\\Layout.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);







function Layout({
  children
}) {
  (next_router__WEBPACK_IMPORTED_MODULE_5___default().onRouteChangeStart) = () => nprogress__WEBPACK_IMPORTED_MODULE_4___default().start();

  (next_router__WEBPACK_IMPORTED_MODULE_5___default().onRouteChangeComplete) = () => nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();

  (next_router__WEBPACK_IMPORTED_MODULE_5___default().onRouteChangeError) = () => nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_HeadTags__WEBPACK_IMPORTED_MODULE_1__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_2__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {
    text: true,
    style: {
      paddingTop: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, children));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Layout/Navbar.js":
/*!*************************************!*\
  !*** ./components/Layout/Navbar.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\malmo\\966-hub\\components\\Layout\\Navbar.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





function Navbar() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  const isActive = route => router.pathname === route;

  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu, {
    fluid: true,
    borderless: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
    text: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
    header: true,
    active: isActive("/login"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    size: "large",
    name: "sign in",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }), "\u062F\u062E\u0648\u0644")), __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/signup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
    header: true,
    active: isActive("/signup"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    size: "large",
    name: "signup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }), "\u062A\u0633\u062C\u064A\u0644"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout/Layout */ "./components/Layout/Layout.js");
/* harmony import */ var semantic_ui_css_semantic_rtl_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-css/semantic.rtl.min.css */ "./node_modules/semantic-ui-css/semantic.rtl.min.css");
/* harmony import */ var semantic_ui_css_semantic_rtl_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_rtl_min_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\malmo\\966-hub\\pages\\_app.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




class MyApp extends (next_app__WEBPACK_IMPORTED_MODULE_1___default()) {
  render() {
    const {
      Component
    } = this.props;
    return __jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 7
      }
    }, __jsx(Component, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("nprogress");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","vendors-node_modules_next_app_js-node_modules_semantic-ui-css_semantic_rtl_min_css"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9IZWFkVGFncy5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJucHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvaWdub3JlZHxDOlxcVXNlcnNcXG1hbG1vXFw5NjYtaHViXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiSGVhZFRhZ3MiLCJMYXlvdXQiLCJjaGlsZHJlbiIsIlJvdXRlciIsIm5wcm9ncmVzcyIsInBhZGRpbmdUb3AiLCJOYXZiYXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpc0FjdGl2ZSIsInJvdXRlIiwicGF0aG5hbWUiLCJNeUFwcCIsIkFwcCIsInJlbmRlciIsIkNvbXBvbmVudCIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsTUFDZixxRUFDRSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFNLE1BQUksRUFBQyxVQUFYO0FBQXNCLFNBQU8sRUFBQyx1Q0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLEVBRUU7QUFBTSxTQUFPLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBRkYsRUFHRTtBQUFNLEtBQUcsRUFBQyxNQUFWO0FBQWlCLE1BQUksRUFBQyxjQUF0QjtBQUFxQyxPQUFLLEVBQUMsT0FBM0M7QUFBbUQsTUFBSSxFQUFDLFdBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFIRixFQUtFO0FBQU0sS0FBRyxFQUFDLFlBQVY7QUFBdUIsTUFBSSxFQUFDLFVBQTVCO0FBQXVDLE1BQUksRUFBQyxtQkFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUxGLEVBT0U7QUFBTSxLQUFHLEVBQUMsWUFBVjtBQUF1QixNQUFJLEVBQUMsVUFBNUI7QUFBdUMsTUFBSSxFQUFDLGFBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEs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QUYsUUFBZ0IsS0FBS0MsS0FBM0I7QUFFQSxXQUNFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FERjtBQUtEOztBQVRxQjs7QUFZeEIsK0RBQWVKLEtBQWYsRTs7Ozs7Ozs7Ozs7QUNoQkEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5jb25zdCBIZWFkVGFncyA9ICgpID0+IChcclxuICA8PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cclxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiBzaXplcz1cIjE2KjE2XCIgdHlwZT1cImltYWdlL3BuZ1wiIC8+XHJcblxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9saXN0TWVzc2FnZXMuY3NzXCIgLz5cclxuXHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL3N0eWxlcy5jc3NcIiAvPlxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9ucHJvZ3Jlc3MuY3NzXCIgLz5cclxuXHJcbiAgICAgIDxsaW5rXHJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VGFqYXdhbDp3Z2h0QDIwMDszMDA7NDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgPjwvbGluaz5cclxuXHJcbiAgICAgIDx0aXRsZT45NjYgLSBIVUI8L3RpdGxlPlxyXG4gICAgPC9IZWFkPlxyXG4gIDwvPlxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBIZWFkVGFncztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZFRhZ3MgZnJvbSBcIi4vSGVhZFRhZ3NcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9OYXZiYXJcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBucHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG4gIFJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSAoKSA9PiBucHJvZ3Jlc3Muc3RhcnQoKTtcclxuICBSb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gKCkgPT4gbnByb2dyZXNzLmRvbmUoKTtcclxuICBSb3V0ZXIub25Sb3V0ZUNoYW5nZUVycm9yID0gKCkgPT4gbnByb2dyZXNzLmRvbmUoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkVGFncyAvPlxyXG4gICAgICA8TmF2YmFyIC8+XHJcblxyXG4gICAgICA8Q29udGFpbmVyIHRleHQgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCIxcmVtXCIgfX0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNZW51LCBDb250YWluZXIsIEljb24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaXNBY3RpdmUgPSAocm91dGUpID0+IHJvdXRlci5wYXRobmFtZSA9PT0gcm91dGU7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TWVudSBmbHVpZCBib3JkZXJsZXNzPlxyXG4gICAgICA8Q29udGFpbmVyIHRleHQ+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBoZWFkZXIgYWN0aXZlPXtpc0FjdGl2ZShcIi9sb2dpblwiKX0+XHJcbiAgICAgICAgICAgIDxJY29uIHNpemU9XCJsYXJnZVwiIG5hbWU9XCJzaWduIGluXCIgLz5cclxuICAgICAgICAgICAg2K/YrtmI2YRcclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0gaGVhZGVyIGFjdGl2ZT17aXNBY3RpdmUoXCIvc2lnbnVwXCIpfT5cclxuICAgICAgICAgICAgPEljb24gc2l6ZT1cImxhcmdlXCIgbmFtZT1cInNpZ251cFwiIC8+XHJcbiAgICAgICAgICAgINiq2LPYrNmK2YRcclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L01lbnU+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iLCJpbXBvcnQgQXBwIGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXRcIjtcclxuaW1wb3J0IFwic2VtYW50aWMtdWktY3NzL3NlbWFudGljLnJ0bC5taW4uY3NzXCI7XHJcblxyXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBDb21wb25lbnQgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8Q29tcG9uZW50IC8+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJucHJvZ3Jlc3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=