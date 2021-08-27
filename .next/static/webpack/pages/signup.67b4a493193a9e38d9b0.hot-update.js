self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./components/Shared/SharedInputs.js":
/*!*******************************************!*\
  !*** ./components/Shared/SharedInputs.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\malmo\\966-hub\\components\\Shared\\SharedInputs.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function SharedInputs(_ref) {
  var _ref$user = _ref.user,
      bio = _ref$user.bio,
      snapchat = _ref$user.snapchat,
      twitter = _ref$user.twitter,
      instagram = _ref$user.instagram,
      facebook = _ref$user.facebook,
      youtube = _ref$user.youtube,
      handleChange = _ref.handleChange,
      showSocialLinks = _ref.showSocialLinks,
      setshowSocialLinks = _ref.setshowSocialLinks;
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
    required: true,
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.TextArea,
    name: "bio",
    value: bio,
    onChange: handleChange,
    placholder: "\u062A\u0639\u0631\u064A\u0641 \u0639\u0646\u064A",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    content: "\u062D\u0633\u0627\u0628\u0627\u062A \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0627\u0644\u0625\u062C\u062A\u0645\u0627\u0639\u064A",
    color: "olive",
    icon: "at",
    type: "button",
    onClick: function onClick() {
      return setshowSocialLinks(!showSocialLinks);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), showSocialLinks && __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "snapchat ghost",
    iconPosition: "left",
    name: "snapchat",
    value: snapchat,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "twitter",
    iconPosition: "left",
    name: "twitter",
    value: twitter,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "instagram",
    iconPosition: "left",
    name: "instagram",
    value: instagram,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "facebook",
    iconPosition: "left",
    name: "facebook",
    value: facebook,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "youtube",
    iconPosition: "left",
    name: "youtube",
    value: youtube,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    icon: "attention",
    info: true,
    size: "small",
    header: "\u062D\u0633\u0627\u0628\u0627\u062A \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0627\u0644\u0625\u062C\u062A\u0645\u0627\u0639\u064A \u0625\u062E\u062A\u064A\u0627\u0631\u064A\u0629",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  })));
}

_c = SharedInputs;
/* harmony default export */ __webpack_exports__["default"] = (SharedInputs);

var _c;

$RefreshReg$(_c, "SharedInputs");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_malmo_966_hub_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Shared_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Shared/WelcomeMessage */ "./components/Shared/WelcomeMessage.js");
/* harmony import */ var _components_Shared_SharedInputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Shared/SharedInputs */ "./components/Shared/SharedInputs.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\malmo\\966-hub\\pages\\signup.js",
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_malmo_966_hub_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

function Signup() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    name: "",
    email: "",
    password: "",
    bio: "",
    snapchat: "",
    twitter: "",
    instagram: "",
    facebook: "",
    youtube: ""
  }),
      user = _useState[0],
      setUser = _useState[1];

  var name = user.name,
      email = user.email,
      password = user.password,
      bio = user.bio;

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      showSocialLinks = _useState2[0],
      setshowSocialLinks = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      showPassword = _useState3[0],
      setshowPassword = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      errorMsg = _useState4[0],
      seterrorMsg = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      fromLoading = _useState5[0],
      setformLoading = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(" "),
      username = _useState6[0],
      setusername = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      usernameLoading = _useState7[0],
      setusernameLoading = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      userameAvailable = _useState8[0],
      setuserameAvailable = _useState8[1];

  var handleChange = function handleChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    setUser(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, (0,C_Users_malmo_966_hub_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, name, value));
    });
  };

  var handleSubmit = function handleSubmit(e) {
    return e.prventDefault();
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, __jsx(_components_Shared_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__.HeaderMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form, {
    loading: fromLoading,
    error: errorMsg !== null,
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Message, {
    error: true,
    header: "Oops!",
    content: errorMsg,
    onDismiss: function onDismiss() {
      return seterrorMsg(null);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Segment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Input, {
    required: true,
    label: "\u0627\u0644\u0625\u0633\u0645",
    placeholder: "\u0627\u0644\u0625\u0633\u0645",
    name: "name",
    value: name,
    onChange: handleChange,
    fluid: true,
    icon: "user",
    iconPosition: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Input, {
    required: true,
    label: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0643\u062A\u0631\u0648\u0646\u064A",
    placeholder: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0643\u062A\u0631\u0648\u0646\u064A",
    name: "email",
    value: email,
    onChange: handleChange,
    fluid: true,
    icon: "envelope",
    iconPosition: "left",
    type: "email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Input, {
    required: true,
    label: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0643\u062A\u0631\u0648\u0646\u064A",
    placeholder: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0643\u062A\u0631\u0648\u0646\u064A",
    name: "password",
    value: password,
    onChange: handleChange,
    fluid: true,
    icon: {
      name: "eye",
      circular: true,
      link: true,
      onClick: function onClick() {
        return setshowPassword(!showPassword);
      }
    },
    iconPosition: "left",
    type: showPassword ? "text" : "password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Input, {
    loading: usernameLoading,
    error: !userameAvailable,
    required: true,
    label: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645",
    placeholder: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645",
    value: username,
    onChange: function onChange(e) {
      setusername(e.target.value);

      if (regexUserName.test(e.target.value)) {
        setuserameAvailable(true);
      } else {
        setuserameAvailable(false);
      }
    },
    fluid: true,
    icon: userameAvailable ? "check" : "close",
    iconPosition: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }), __jsx(_components_Shared_SharedInputs__WEBPACK_IMPORTED_MODULE_3__.default, {
    user: user,
    showSocialLinks: showSocialLinks,
    setshowSocialLinks: setshowSocialLinks,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }))), __jsx(_components_Shared_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__.FooterMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }
  }));
}

_s(Signup, "QrsGJIN56l3R+S0N/Rf/rux/0a8=");

_c = Signup;
/* harmony default export */ __webpack_exports__["default"] = (Signup);

var _c;

$RefreshReg$(_c, "Signup");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaGFyZWQvU2hhcmVkSW5wdXRzLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9zaWdudXAuanMiXSwibmFtZXMiOlsiU2hhcmVkSW5wdXRzIiwidXNlciIsImJpbyIsInNuYXBjaGF0IiwidHdpdHRlciIsImluc3RhZ3JhbSIsImZhY2Vib29rIiwieW91dHViZSIsImhhbmRsZUNoYW5nZSIsInNob3dTb2NpYWxMaW5rcyIsInNldHNob3dTb2NpYWxMaW5rcyIsIlRleHRBcmVhIiwicmVnZXhVc2VyTmFtZSIsIlNpZ251cCIsInVzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJzZXRVc2VyIiwic2hvd1Bhc3N3b3JkIiwic2V0c2hvd1Bhc3N3b3JkIiwiZXJyb3JNc2ciLCJzZXRlcnJvck1zZyIsImZyb21Mb2FkaW5nIiwic2V0Zm9ybUxvYWRpbmciLCJ1c2VybmFtZSIsInNldHVzZXJuYW1lIiwidXNlcm5hbWVMb2FkaW5nIiwic2V0dXNlcm5hbWVMb2FkaW5nIiwidXNlcmFtZUF2YWlsYWJsZSIsInNldHVzZXJhbWVBdmFpbGFibGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJwcmV2IiwiaGFuZGxlU3VibWl0IiwicHJ2ZW50RGVmYXVsdCIsImNpcmN1bGFyIiwibGluayIsIm9uQ2xpY2siLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFTQSxTQUFTQSxZQUFULE9BS0c7QUFBQSx1QkFKREMsSUFJQztBQUFBLE1BSk9DLEdBSVAsYUFKT0EsR0FJUDtBQUFBLE1BSllDLFFBSVosYUFKWUEsUUFJWjtBQUFBLE1BSnNCQyxPQUl0QixhQUpzQkEsT0FJdEI7QUFBQSxNQUorQkMsU0FJL0IsYUFKK0JBLFNBSS9CO0FBQUEsTUFKMENDLFFBSTFDLGFBSjBDQSxRQUkxQztBQUFBLE1BSm9EQyxPQUlwRCxhQUpvREEsT0FJcEQ7QUFBQSxNQUhEQyxZQUdD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QUFhLENBQUM0QixJQUFkLENBQW1CVCxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBNUIsQ0FBSixFQUF3QztBQUN0Q0gsMkJBQW1CLENBQUMsSUFBRCxDQUFuQjtBQUNELE9BRkQsTUFFTztBQUNMQSwyQkFBbUIsQ0FBQyxLQUFELENBQW5CO0FBQ0Q7QUFDRixLQWRIO0FBZUUsU0FBSyxNQWZQO0FBZ0JFLFFBQUksRUFBRUQsZ0JBQWdCLEdBQUcsT0FBSCxHQUFhLE9BaEJyQztBQWlCRSxnQkFBWSxFQUFDLE1BakJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE1Q0YsRUFnRUUsTUFBQyxvRUFBRDtBQUNFLFFBQUksRUFBRTVCLElBRFI7QUFFRSxtQkFBZSxFQUFFUSxlQUZuQjtBQUdFLHNCQUFrQixFQUFFQyxrQkFIdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhFRixDQVpGLENBRkYsRUFzRkUsTUFBQyw0RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdEZGLENBREY7QUEwRkQ7O0dBMUhRRyxNOztLQUFBQSxNO0FBNEhULCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC42N2I0YTQ5MzE5M2E5ZTM4ZDliMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgRm9ybSxcbiAgQnV0dG9uLFxuICBNZXNzYWdlLFxuICBTZWdtZW50LFxuICBUZXh0QXJlYSxcbiAgRGl2aWRlcixcbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5cbmZ1bmN0aW9uIFNoYXJlZElucHV0cyh7XG4gIHVzZXI6IHsgYmlvLCBzbmFwY2hhdCwgdHdpdHRlciwgaW5zdGFncmFtLCBmYWNlYm9vaywgeW91dHViZSB9LFxuICBoYW5kbGVDaGFuZ2UsXG4gIHNob3dTb2NpYWxMaW5rcyxcbiAgc2V0c2hvd1NvY2lhbExpbmtzLFxufSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Rm9ybS5GaWVsZFxuICAgICAgICByZXF1aXJlZFxuICAgICAgICBjb250cm9sPXtUZXh0QXJlYX1cbiAgICAgICAgbmFtZT1cImJpb1wiXG4gICAgICAgIHZhbHVlPXtiaW99XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIHBsYWNob2xkZXI9XCLYqti52LHZitmBINi52YbZilwiXG4gICAgICAvPlxuXG4gICAgICA8QnV0dG9uXG4gICAgICAgIGNvbnRlbnQ9XCLYrdiz2KfYqNin2Kog2KfZhNiq2YjYp9i12YQg2KfZhNil2KzYqtmF2KfYudmKXCJcbiAgICAgICAgY29sb3I9XCJvbGl2ZVwiXG4gICAgICAgIGljb249XCJhdFwiXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRzaG93U29jaWFsTGlua3MoIXNob3dTb2NpYWxMaW5rcyl9XG4gICAgICAvPlxuXG4gICAgICB7c2hvd1NvY2lhbExpbmtzICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICBpY29uPVwic25hcGNoYXQgZ2hvc3RcIlxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXG4gICAgICAgICAgICBuYW1lPVwic25hcGNoYXRcIlxuICAgICAgICAgICAgdmFsdWU9e3NuYXBjaGF0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgIGljb249XCJ0d2l0dGVyXCJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxuICAgICAgICAgICAgbmFtZT1cInR3aXR0ZXJcIlxuICAgICAgICAgICAgdmFsdWU9e3R3aXR0ZXJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgaWNvbj1cImluc3RhZ3JhbVwiXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcbiAgICAgICAgICAgIG5hbWU9XCJpbnN0YWdyYW1cIlxuICAgICAgICAgICAgdmFsdWU9e2luc3RhZ3JhbX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICBpY29uPVwiZmFjZWJvb2tcIlxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXG4gICAgICAgICAgICBuYW1lPVwiZmFjZWJvb2tcIlxuICAgICAgICAgICAgdmFsdWU9e2ZhY2Vib29rfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgIGljb249XCJ5b3V0dWJlXCJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxuICAgICAgICAgICAgbmFtZT1cInlvdXR1YmVcIlxuICAgICAgICAgICAgdmFsdWU9e3lvdXR1YmV9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8TWVzc2FnZVxuICAgICAgICAgICAgaWNvbj1cImF0dGVudGlvblwiXG4gICAgICAgICAgICBpbmZvXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgaGVhZGVyPVwi2K3Ys9in2KjYp9iqINin2YTYqtmI2KfYtdmEINin2YTYpdis2KrZhdin2LnZiiDYpdiu2KrZitin2LHZitipXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoYXJlZElucHV0cztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBGb3JtLFxyXG4gIEJ1dHRvbixcclxuICBNZXNzYWdlLFxyXG4gIFNlZ21lbnQsXHJcbiAgVGV4dEFyZWEsXHJcbiAgRGl2aWRlcixcclxufSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgSGVhZGVyTWVzc2FnZSxcclxuICBGb290ZXJNZXNzYWdlLFxyXG59IGZyb20gXCIuLi9jb21wb25lbnRzL1NoYXJlZC9XZWxjb21lTWVzc2FnZVwiO1xyXG5pbXBvcnQgU2hhcmVkSW5wdXRzIGZyb20gXCIuLi9jb21wb25lbnRzL1NoYXJlZC9TaGFyZWRJbnB1dHNcIjtcclxuXHJcbmNvbnN0IHJlZ2V4VXNlck5hbWUgPSAvXig/IS4qXFwuXFwuKSg/IS4qXFwuJClbXlxcV11bXFx3Ll17MCwyOX0kLztcclxuXHJcbmZ1bmN0aW9uIFNpZ251cCgpIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuICAgIGJpbzogXCJcIixcclxuICAgIHNuYXBjaGF0OiBcIlwiLFxyXG4gICAgdHdpdHRlcjogXCJcIixcclxuICAgIGluc3RhZ3JhbTogXCJcIixcclxuICAgIGZhY2Vib29rOiBcIlwiLFxyXG4gICAgeW91dHViZTogXCJcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGJpbyB9ID0gdXNlcjtcclxuXHJcbiAgY29uc3QgW3Nob3dTb2NpYWxMaW5rcywgc2V0c2hvd1NvY2lhbExpbmtzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd1Bhc3N3b3JkLCBzZXRzaG93UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlcnJvck1zZywgc2V0ZXJyb3JNc2ddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Zyb21Mb2FkaW5nLCBzZXRmb3JtTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0dXNlcm5hbWVdID0gdXNlU3RhdGUoXCIgXCIpO1xyXG4gIGNvbnN0IFt1c2VybmFtZUxvYWRpbmcsIHNldHVzZXJuYW1lTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VzZXJhbWVBdmFpbGFibGUsIHNldHVzZXJhbWVBdmFpbGFibGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgc2V0VXNlcigocHJldikgPT4gKHsgLi4ucHJldiwgW25hbWVdOiB2YWx1ZSB9KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IGUucHJ2ZW50RGVmYXVsdCgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlck1lc3NhZ2UgLz5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBsb2FkaW5nPXtmcm9tTG9hZGluZ31cclxuICAgICAgICBlcnJvcj17ZXJyb3JNc2cgIT09IG51bGx9XHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgPlxyXG4gICAgICAgIDxNZXNzYWdlXHJcbiAgICAgICAgICBlcnJvclxyXG4gICAgICAgICAgaGVhZGVyPVwiT29wcyFcIlxyXG4gICAgICAgICAgY29udGVudD17ZXJyb3JNc2d9XHJcbiAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldGVycm9yTXNnKG51bGwpfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxTZWdtZW50PlxyXG4gICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgbGFiZWw9XCLYp9mE2KXYs9mFXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLYp9mE2KXYs9mFXCJcclxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgaWNvbj1cInVzZXJcIlxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgbGFiZWw9XCLYp9mE2KjYsdmK2K8g2KfZhNil2YPYqtix2YjZhtmKXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLYp9mE2KjYsdmK2K8g2KfZhNil2YPYqtix2YjZhtmKXCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICBpY29uPVwiZW52ZWxvcGVcIlxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgbGFiZWw9XCLYp9mE2KjYsdmK2K8g2KfZhNil2YPYqtix2YjZhtmKXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLYp9mE2KjYsdmK2K8g2KfZhNil2YPYqtix2YjZhtmKXCJcclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICBpY29uPXt7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJleWVcIixcclxuICAgICAgICAgICAgICBjaXJjdWxhcjogdHJ1ZSxcclxuICAgICAgICAgICAgICBsaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHNldHNob3dQYXNzd29yZCghc2hvd1Bhc3N3b3JkKSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIHR5cGU9e3Nob3dQYXNzd29yZCA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICBsb2FkaW5nPXt1c2VybmFtZUxvYWRpbmd9XHJcbiAgICAgICAgICAgIGVycm9yPXshdXNlcmFtZUF2YWlsYWJsZX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgbGFiZWw9XCLYp9iz2YUg2KfZhNmF2LPYqtiu2K/ZhVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi2KfYs9mFINin2YTZhdiz2KrYrtiv2YVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldHVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICBpZiAocmVnZXhVc2VyTmFtZS50ZXN0KGUudGFyZ2V0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgc2V0dXNlcmFtZUF2YWlsYWJsZSh0cnVlKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0dXNlcmFtZUF2YWlsYWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICBpY29uPXt1c2VyYW1lQXZhaWxhYmxlID8gXCJjaGVja1wiIDogXCJjbG9zZVwifVxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPFNoYXJlZElucHV0c1xyXG4gICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICBzaG93U29jaWFsTGlua3M9e3Nob3dTb2NpYWxMaW5rc31cclxuICAgICAgICAgICAgc2V0c2hvd1NvY2lhbExpbmtzPXtzZXRzaG93U29jaWFsTGlua3N9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgPC9Gb3JtPlxyXG5cclxuICAgICAgPEZvb3Rlck1lc3NhZ2UgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==