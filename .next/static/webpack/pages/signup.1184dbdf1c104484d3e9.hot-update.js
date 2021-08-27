self["webpackHotUpdate_N_E"]("pages/signup",{

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

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      submitDisabled = _useState9[0],
      setsubmitDisabled = _useState9[1];

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

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var isUser = Object.values({
      name: name,
      email: email,
      password: password
    }).every(function (item) {
      return Boolean(item);
    });
    isUser ? setsubmitDisabled(false) : setsubmitDisabled(true);
  }, [user]);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, __jsx(_components_Shared_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__.HeaderMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form, {
    loading: fromLoading,
    error: errorMsg !== null,
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
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
      lineNumber: 68,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Segment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
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
      lineNumber: 76,
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
      lineNumber: 88,
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
      lineNumber: 101,
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
      lineNumber: 119,
      columnNumber: 11
    }
  }), __jsx(_components_Shared_SharedInputs__WEBPACK_IMPORTED_MODULE_3__.default, {
    user: user,
    showSocialLinks: showSocialLinks,
    setshowSocialLinks: setshowSocialLinks,
    handleChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
    icon: "signup",
    content: "\u0633\u062C\u0644",
    type: "submit",
    color: "olive",
    disabled: submitDisabled || !userameAvailable,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  }))), __jsx(_components_Shared_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__.FooterMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }
  }));
}

_s(Signup, "aTffaEczsLw6iVYILOV7WKbUPAk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbInJlZ2V4VXNlck5hbWUiLCJTaWdudXAiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiYmlvIiwic25hcGNoYXQiLCJ0d2l0dGVyIiwiaW5zdGFncmFtIiwiZmFjZWJvb2siLCJ5b3V0dWJlIiwidXNlciIsInNldFVzZXIiLCJzaG93U29jaWFsTGlua3MiLCJzZXRzaG93U29jaWFsTGlua3MiLCJzaG93UGFzc3dvcmQiLCJzZXRzaG93UGFzc3dvcmQiLCJlcnJvck1zZyIsInNldGVycm9yTXNnIiwiZnJvbUxvYWRpbmciLCJzZXRmb3JtTG9hZGluZyIsInVzZXJuYW1lIiwic2V0dXNlcm5hbWUiLCJ1c2VybmFtZUxvYWRpbmciLCJzZXR1c2VybmFtZUxvYWRpbmciLCJ1c2VyYW1lQXZhaWxhYmxlIiwic2V0dXNlcmFtZUF2YWlsYWJsZSIsInN1Ym1pdERpc2FibGVkIiwic2V0c3VibWl0RGlzYWJsZWQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJwcmV2IiwiaGFuZGxlU3VibWl0IiwicHJ2ZW50RGVmYXVsdCIsInVzZUVmZmVjdCIsImlzVXNlciIsIk9iamVjdCIsInZhbHVlcyIsImV2ZXJ5IiwiaXRlbSIsIkJvb2xlYW4iLCJjaXJjdWxhciIsImxpbmsiLCJvbkNsaWNrIiwidGVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFVQTtBQUlBO0FBRUEsSUFBTUEsYUFBYSxHQUFHLHVDQUF0Qjs7QUFFQSxTQUFTQyxNQUFULEdBQWtCO0FBQUE7O0FBQUEsa0JBQ1FDLCtDQUFRLENBQUM7QUFDL0JDLFFBQUksRUFBRSxFQUR5QjtBQUUvQkMsU0FBSyxFQUFFLEVBRndCO0FBRy9CQyxZQUFRLEVBQUUsRUFIcUI7QUFJL0JDLE9BQUcsRUFBRSxFQUowQjtBQUsvQkMsWUFBUSxFQUFFLEVBTHFCO0FBTS9CQyxXQUFPLEVBQUUsRUFOc0I7QUFPL0JDLGFBQVMsRUFBRSxFQVBvQjtBQVEvQkMsWUFBUSxFQUFFLEVBUnFCO0FBUy9CQyxXQUFPLEVBQUU7QUFUc0IsR0FBRCxDQURoQjtBQUFBLE1BQ1RDLElBRFM7QUFBQSxNQUNIQyxPQURHOztBQUFBLE1BYVJWLElBYlEsR0FhdUJTLElBYnZCLENBYVJULElBYlE7QUFBQSxNQWFGQyxLQWJFLEdBYXVCUSxJQWJ2QixDQWFGUixLQWJFO0FBQUEsTUFhS0MsUUFiTCxHQWF1Qk8sSUFidkIsQ0FhS1AsUUFiTDtBQUFBLE1BYWVDLEdBYmYsR0FhdUJNLElBYnZCLENBYWVOLEdBYmY7O0FBQUEsbUJBZThCSiwrQ0FBUSxDQUFDLEtBQUQsQ0FmdEM7QUFBQSxNQWVUWSxlQWZTO0FBQUEsTUFlUUMsa0JBZlI7O0FBQUEsbUJBZ0J3QmIsK0NBQVEsQ0FBQyxLQUFELENBaEJoQztBQUFBLE1BZ0JUYyxZQWhCUztBQUFBLE1BZ0JLQyxlQWhCTDs7QUFBQSxtQkFpQmdCZiwrQ0FBUSxDQUFDLElBQUQsQ0FqQnhCO0FBQUEsTUFpQlRnQixRQWpCUztBQUFBLE1BaUJDQyxXQWpCRDs7QUFBQSxtQkFrQnNCakIsK0NBQVEsQ0FBQyxLQUFELENBbEI5QjtBQUFBLE1Ba0JUa0IsV0FsQlM7QUFBQSxNQWtCSUMsY0FsQko7O0FBQUEsbUJBb0JnQm5CLCtDQUFRLENBQUMsR0FBRCxDQXBCeEI7QUFBQSxNQW9CVG9CLFFBcEJTO0FBQUEsTUFvQkNDLFdBcEJEOztBQUFBLG1CQXFCOEJyQiwrQ0FBUSxDQUFDLEtBQUQsQ0FyQnRDO0FBQUEsTUFxQlRzQixlQXJCUztBQUFBLE1BcUJRQyxrQkFyQlI7O0FBQUEsbUJBc0JnQ3ZCLCtDQUFRLENBQUMsS0FBRCxDQXRCeEM7QUFBQSxNQXNCVHdCLGdCQXRCUztBQUFBLE1Bc0JTQyxtQkF0QlQ7O0FBQUEsbUJBdUI0QnpCLCtDQUFRLENBQUMsSUFBRCxDQXZCcEM7QUFBQSxNQXVCVDBCLGNBdkJTO0FBQUEsTUF1Qk9DLGlCQXZCUDs7QUF5QmhCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztBQUFBLG9CQUNGQSxDQUFDLENBQUNDLE1BREE7QUFBQSxRQUNsQjdCLElBRGtCLGFBQ2xCQSxJQURrQjtBQUFBLFFBQ1o4QixLQURZLGFBQ1pBLEtBRFk7QUFHMUJwQixXQUFPLENBQUMsVUFBQ3FCLElBQUQ7QUFBQSw2Q0FBZ0JBLElBQWhCLGdJQUF1Qi9CLElBQXZCLEVBQThCOEIsS0FBOUI7QUFBQSxLQUFELENBQVA7QUFDRCxHQUpEOztBQU1BLE1BQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNKLENBQUQ7QUFBQSxXQUFPQSxDQUFDLENBQUNLLGFBQUYsRUFBUDtBQUFBLEdBQXJCOztBQUVBQyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQUVyQyxVQUFJLEVBQUpBLElBQUY7QUFBUUMsV0FBSyxFQUFMQSxLQUFSO0FBQWVDLGNBQVEsRUFBUkE7QUFBZixLQUFkLEVBQXlDb0MsS0FBekMsQ0FBK0MsVUFBQ0MsSUFBRDtBQUFBLGFBQzVEQyxPQUFPLENBQUNELElBQUQsQ0FEcUQ7QUFBQSxLQUEvQyxDQUFmO0FBR0FKLFVBQU0sR0FBR1QsaUJBQWlCLENBQUMsS0FBRCxDQUFwQixHQUE4QkEsaUJBQWlCLENBQUMsSUFBRCxDQUFyRDtBQUNELEdBTFEsRUFLTixDQUFDakIsSUFBRCxDQUxNLENBQVQ7QUFPQSxTQUNFLHFFQUNFLE1BQUMsNEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxtREFBRDtBQUNFLFdBQU8sRUFBRVEsV0FEWDtBQUVFLFNBQUssRUFBRUYsUUFBUSxLQUFLLElBRnRCO0FBR0UsWUFBUSxFQUFFaUIsWUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0UsTUFBQyxzREFBRDtBQUNFLFNBQUssTUFEUDtBQUVFLFVBQU0sRUFBQyxPQUZUO0FBR0UsV0FBTyxFQUFFakIsUUFIWDtBQUlFLGFBQVMsRUFBRTtBQUFBLGFBQU1DLFdBQVcsQ0FBQyxJQUFELENBQWpCO0FBQUEsS0FKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFZRSxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlEQUFEO0FBQ0UsWUFBUSxNQURWO0FBRUUsU0FBSyxFQUFDLGdDQUZSO0FBR0UsZUFBVyxFQUFDLGdDQUhkO0FBSUUsUUFBSSxFQUFDLE1BSlA7QUFLRSxTQUFLLEVBQUVoQixJQUxUO0FBTUUsWUFBUSxFQUFFMkIsWUFOWjtBQU9FLFNBQUssTUFQUDtBQVFFLFFBQUksRUFBQyxNQVJQO0FBU0UsZ0JBQVksRUFBQyxNQVRmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQWFFLE1BQUMseURBQUQ7QUFDRSxZQUFRLE1BRFY7QUFFRSxTQUFLLEVBQUMsNkZBRlI7QUFHRSxlQUFXLEVBQUMsNkZBSGQ7QUFJRSxRQUFJLEVBQUMsT0FKUDtBQUtFLFNBQUssRUFBRTFCLEtBTFQ7QUFNRSxZQUFRLEVBQUUwQixZQU5aO0FBT0UsU0FBSyxNQVBQO0FBUUUsUUFBSSxFQUFDLFVBUlA7QUFTRSxnQkFBWSxFQUFDLE1BVGY7QUFVRSxRQUFJLEVBQUMsT0FWUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkYsRUEwQkUsTUFBQyx5REFBRDtBQUNFLFlBQVEsTUFEVjtBQUVFLFNBQUssRUFBQyw2RkFGUjtBQUdFLGVBQVcsRUFBQyw2RkFIZDtBQUlFLFFBQUksRUFBQyxVQUpQO0FBS0UsU0FBSyxFQUFFekIsUUFMVDtBQU1FLFlBQVEsRUFBRXlCLFlBTlo7QUFPRSxTQUFLLE1BUFA7QUFRRSxRQUFJLEVBQUU7QUFDSjNCLFVBQUksRUFBRSxLQURGO0FBRUp5QyxjQUFRLEVBQUUsSUFGTjtBQUdKQyxVQUFJLEVBQUUsSUFIRjtBQUlKQyxhQUFPLEVBQUU7QUFBQSxlQUFNN0IsZUFBZSxDQUFDLENBQUNELFlBQUYsQ0FBckI7QUFBQTtBQUpMLEtBUlI7QUFjRSxnQkFBWSxFQUFDLE1BZGY7QUFlRSxRQUFJLEVBQUVBLFlBQVksR0FBRyxNQUFILEdBQVksVUFmaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTFCRixFQTRDRSxNQUFDLHlEQUFEO0FBQ0UsV0FBTyxFQUFFUSxlQURYO0FBRUUsU0FBSyxFQUFFLENBQUNFLGdCQUZWO0FBR0UsWUFBUSxNQUhWO0FBSUUsU0FBSyxFQUFDLHFFQUpSO0FBS0UsZUFBVyxFQUFDLHFFQUxkO0FBTUUsU0FBSyxFQUFFSixRQU5UO0FBT0UsWUFBUSxFQUFFLGtCQUFDUyxDQUFELEVBQU87QUFDZlIsaUJBQVcsQ0FBQ1EsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBWDs7QUFDQSxVQUFJakMsYUFBYSxDQUFDK0MsSUFBZCxDQUFtQmhCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUE1QixDQUFKLEVBQXdDO0FBQ3RDTiwyQkFBbUIsQ0FBQyxJQUFELENBQW5CO0FBQ0QsT0FGRCxNQUVPO0FBQ0xBLDJCQUFtQixDQUFDLEtBQUQsQ0FBbkI7QUFDRDtBQUNGLEtBZEg7QUFlRSxTQUFLLE1BZlA7QUFnQkUsUUFBSSxFQUFFRCxnQkFBZ0IsR0FBRyxPQUFILEdBQWEsT0FoQnJDO0FBaUJFLGdCQUFZLEVBQUMsTUFqQmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTVDRixFQWdFRSxNQUFDLG9FQUFEO0FBQ0UsUUFBSSxFQUFFZCxJQURSO0FBRUUsbUJBQWUsRUFBRUUsZUFGbkI7QUFHRSxzQkFBa0IsRUFBRUMsa0JBSHRCO0FBSUUsZ0JBQVksRUFBRWUsWUFKaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhFRixFQXVFRSxNQUFDLHNEQUFEO0FBQVMsVUFBTSxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF2RUYsRUF3RUUsTUFBQyxxREFBRDtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsV0FBTyxFQUFDLG9CQUZWO0FBR0UsUUFBSSxFQUFDLFFBSFA7QUFJRSxTQUFLLEVBQUMsT0FKUjtBQUtFLFlBQVEsRUFBRUYsY0FBYyxJQUFJLENBQUNGLGdCQUwvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBeEVGLENBWkYsQ0FGRixFQWdHRSxNQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoR0YsQ0FERjtBQW9HRDs7R0E1SVF6QixNOztLQUFBQSxNO0FBOElULCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC4xMTg0ZGJkZjFjMTA0NDg0ZDNlOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEZvcm0sXHJcbiAgQnV0dG9uLFxyXG4gIE1lc3NhZ2UsXHJcbiAgU2VnbWVudCxcclxuICBUZXh0QXJlYSxcclxuICBEaXZpZGVyLFxyXG4gIEl0ZW0sXHJcbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIEhlYWRlck1lc3NhZ2UsXHJcbiAgRm9vdGVyTWVzc2FnZSxcclxufSBmcm9tIFwiLi4vY29tcG9uZW50cy9TaGFyZWQvV2VsY29tZU1lc3NhZ2VcIjtcclxuaW1wb3J0IFNoYXJlZElucHV0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9TaGFyZWQvU2hhcmVkSW5wdXRzXCI7XHJcblxyXG5jb25zdCByZWdleFVzZXJOYW1lID0gL14oPyEuKlxcLlxcLikoPyEuKlxcLiQpW15cXFddW1xcdy5dezAsMjl9JC87XHJcblxyXG5mdW5jdGlvbiBTaWdudXAoKSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICBiaW86IFwiXCIsXHJcbiAgICBzbmFwY2hhdDogXCJcIixcclxuICAgIHR3aXR0ZXI6IFwiXCIsXHJcbiAgICBpbnN0YWdyYW06IFwiXCIsXHJcbiAgICBmYWNlYm9vazogXCJcIixcclxuICAgIHlvdXR1YmU6IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkLCBiaW8gfSA9IHVzZXI7XHJcblxyXG4gIGNvbnN0IFtzaG93U29jaWFsTGlua3MsIHNldHNob3dTb2NpYWxMaW5rc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dQYXNzd29yZCwgc2V0c2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3JNc2csIHNldGVycm9yTXNnXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtmcm9tTG9hZGluZywgc2V0Zm9ybUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbdXNlcm5hbWUsIHNldHVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiIFwiKTtcclxuICBjb25zdCBbdXNlcm5hbWVMb2FkaW5nLCBzZXR1c2VybmFtZUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt1c2VyYW1lQXZhaWxhYmxlLCBzZXR1c2VyYW1lQXZhaWxhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc3VibWl0RGlzYWJsZWQsIHNldHN1Ym1pdERpc2FibGVkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgc2V0VXNlcigocHJldikgPT4gKHsgLi4ucHJldiwgW25hbWVdOiB2YWx1ZSB9KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IGUucHJ2ZW50RGVmYXVsdCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaXNVc2VyID0gT2JqZWN0LnZhbHVlcyh7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCB9KS5ldmVyeSgoaXRlbSkgPT5cclxuICAgICAgQm9vbGVhbihpdGVtKVxyXG4gICAgKTtcclxuICAgIGlzVXNlciA/IHNldHN1Ym1pdERpc2FibGVkKGZhbHNlKSA6IHNldHN1Ym1pdERpc2FibGVkKHRydWUpO1xyXG4gIH0sIFt1c2VyXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyTWVzc2FnZSAvPlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIGxvYWRpbmc9e2Zyb21Mb2FkaW5nfVxyXG4gICAgICAgIGVycm9yPXtlcnJvck1zZyAhPT0gbnVsbH1cclxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICA+XHJcbiAgICAgICAgPE1lc3NhZ2VcclxuICAgICAgICAgIGVycm9yXHJcbiAgICAgICAgICBoZWFkZXI9XCJPb3BzIVwiXHJcbiAgICAgICAgICBjb250ZW50PXtlcnJvck1zZ31cclxuICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gc2V0ZXJyb3JNc2cobnVsbCl9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPFNlZ21lbnQ+XHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBsYWJlbD1cItin2YTYpdiz2YVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cItin2YTYpdiz2YVcIlxyXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICBpY29uPVwidXNlclwiXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBsYWJlbD1cItin2YTYqNix2YrYryDYp9mE2KXZg9iq2LHZiNmG2YpcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cItin2YTYqNix2YrYryDYp9mE2KXZg9iq2LHZiNmG2YpcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgIGljb249XCJlbnZlbG9wZVwiXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBsYWJlbD1cItin2YTYqNix2YrYryDYp9mE2KXZg9iq2LHZiNmG2YpcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cItin2YTYqNix2YrYryDYp9mE2KXZg9iq2LHZiNmG2YpcIlxyXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgIGljb249e3tcclxuICAgICAgICAgICAgICBuYW1lOiBcImV5ZVwiLFxyXG4gICAgICAgICAgICAgIGNpcmN1bGFyOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGxpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgb25DbGljazogKCkgPT4gc2V0c2hvd1Bhc3N3b3JkKCFzaG93UGFzc3dvcmQpLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgdHlwZT17c2hvd1Bhc3N3b3JkID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIGxvYWRpbmc9e3VzZXJuYW1lTG9hZGluZ31cclxuICAgICAgICAgICAgZXJyb3I9eyF1c2VyYW1lQXZhaWxhYmxlfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBsYWJlbD1cItin2LPZhSDYp9mE2YXYs9iq2K7Yr9mFXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLYp9iz2YUg2KfZhNmF2LPYqtiu2K/ZhVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0dXNlcm5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIGlmIChyZWdleFVzZXJOYW1lLnRlc3QoZS50YXJnZXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXR1c2VyYW1lQXZhaWxhYmxlKHRydWUpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXR1c2VyYW1lQXZhaWxhYmxlKGZhbHNlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgIGljb249e3VzZXJhbWVBdmFpbGFibGUgPyBcImNoZWNrXCIgOiBcImNsb3NlXCJ9XHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8U2hhcmVkSW5wdXRzXHJcbiAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAgIHNob3dTb2NpYWxMaW5rcz17c2hvd1NvY2lhbExpbmtzfVxyXG4gICAgICAgICAgICBzZXRzaG93U29jaWFsTGlua3M9e3NldHNob3dTb2NpYWxMaW5rc31cclxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBpY29uPVwic2lnbnVwXCJcclxuICAgICAgICAgICAgY29udGVudD1cItiz2KzZhFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cIm9saXZlXCJcclxuICAgICAgICAgICAgZGlzYWJsZWQ9e3N1Ym1pdERpc2FibGVkIHx8ICF1c2VyYW1lQXZhaWxhYmxlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgIDwvRm9ybT5cclxuXHJcbiAgICAgIDxGb290ZXJNZXNzYWdlIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWdudXA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=