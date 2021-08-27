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
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Shared_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Shared/WelcomeMessage */ "./components/Shared/WelcomeMessage.js");
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
      lineNumber: 52,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form, {
    loading: fromLoading,
    error: errorMsg !== null,
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Message, {
    error: true,
    header: "Oops!",
    content: errorMsg,
    onDismiss: function onDismiss() {
      return seterrorMsg(null);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Segment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Input, {
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
      lineNumber: 66,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Input, {
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
      lineNumber: 78,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Input, {
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
      lineNumber: 91,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Input, {
    loading: usernameLoading,
    error: !userameAvailable,
    required: true,
    label: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645",
    placeholder: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645",
    value: username,
    onChange: function onChange(e) {
      setuserame(e.target.value);

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
      lineNumber: 109,
      columnNumber: 11
    }
  }))), __jsx(_components_Shared_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__.FooterMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbInJlZ2V4VXNlck5hbWUiLCJTaWdudXAiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiYmlvIiwic25hcGNoYXQiLCJ0d2l0dGVyIiwiaW5zdGFncmFtIiwiZmFjZWJvb2siLCJ5b3V0dWJlIiwidXNlciIsInNldFVzZXIiLCJzaG93U29jaWFsTGlua3MiLCJzZXRzaG93U29jaWFsTGlua3MiLCJzaG93UGFzc3dvcmQiLCJzZXRzaG93UGFzc3dvcmQiLCJlcnJvck1zZyIsInNldGVycm9yTXNnIiwiZnJvbUxvYWRpbmciLCJzZXRmb3JtTG9hZGluZyIsInVzZXJuYW1lIiwic2V0dXNlcm5hbWUiLCJ1c2VybmFtZUxvYWRpbmciLCJzZXR1c2VybmFtZUxvYWRpbmciLCJ1c2VyYW1lQXZhaWxhYmxlIiwic2V0dXNlcmFtZUF2YWlsYWJsZSIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXYiLCJoYW5kbGVTdWJtaXQiLCJwcnZlbnREZWZhdWx0IiwiY2lyY3VsYXIiLCJsaW5rIiwib25DbGljayIsInNldHVzZXJhbWUiLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBU0E7QUFLQSxJQUFNQSxhQUFhLEdBQUcsdUNBQXRCOztBQUVBLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxrQkFDUUMsK0NBQVEsQ0FBQztBQUMvQkMsUUFBSSxFQUFFLEVBRHlCO0FBRS9CQyxTQUFLLEVBQUUsRUFGd0I7QUFHL0JDLFlBQVEsRUFBRSxFQUhxQjtBQUkvQkMsT0FBRyxFQUFFLEVBSjBCO0FBSy9CQyxZQUFRLEVBQUUsRUFMcUI7QUFNL0JDLFdBQU8sRUFBRSxFQU5zQjtBQU8vQkMsYUFBUyxFQUFFLEVBUG9CO0FBUS9CQyxZQUFRLEVBQUUsRUFScUI7QUFTL0JDLFdBQU8sRUFBRTtB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QUFDRCxPQUZELE1BRU87QUFDTEEsMkJBQW1CLENBQUMsS0FBRCxDQUFuQjtBQUNEO0FBQ0YsS0FkSDtBQWVFLFNBQUssTUFmUDtBQWdCRSxRQUFJLEVBQUVELGdCQUFnQixHQUFHLE9BQUgsR0FBYSxPQWhCckM7QUFpQkUsZ0JBQVksRUFBQyxNQWpCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBNUNGLENBWkYsQ0FGRixFQWdGRSxNQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoRkYsQ0FERjtBQW9GRDs7R0FwSFF6QixNOztLQUFBQSxNO0FBc0hULCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC5lNTc1Nzg5MmVhODY1MjE1MmJjYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEZvcm0sXHJcbiAgQnV0dG9uLFxyXG4gIE1lc3NhZ2UsXHJcbiAgU2VnbWVudCxcclxuICBUZXh0QXJlYSxcclxuICBEaXZpZGVyLFxyXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBIZWFkZXJNZXNzYWdlLFxyXG4gIEZvb3Rlck1lc3NhZ2UsXHJcbn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2hhcmVkL1dlbGNvbWVNZXNzYWdlXCI7XHJcblxyXG5jb25zdCByZWdleFVzZXJOYW1lID0gL14oPyEuKlxcLlxcLikoPyEuKlxcLiQpW15cXFddW1xcdy5dezAsMjl9JC87XHJcblxyXG5mdW5jdGlvbiBTaWdudXAoKSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICBiaW86IFwiXCIsXHJcbiAgICBzbmFwY2hhdDogXCJcIixcclxuICAgIHR3aXR0ZXI6IFwiXCIsXHJcbiAgICBpbnN0YWdyYW06IFwiXCIsXHJcbiAgICBmYWNlYm9vazogXCJcIixcclxuICAgIHlvdXR1YmU6IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkLCBiaW8gfSA9IHVzZXI7XHJcblxyXG4gIGNvbnN0IFtzaG93U29jaWFsTGlua3MsIHNldHNob3dTb2NpYWxMaW5rc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dQYXNzd29yZCwgc2V0c2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3JNc2csIHNldGVycm9yTXNnXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtmcm9tTG9hZGluZywgc2V0Zm9ybUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbdXNlcm5hbWUsIHNldHVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiIFwiKTtcclxuICBjb25zdCBbdXNlcm5hbWVMb2FkaW5nLCBzZXR1c2VybmFtZUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt1c2VyYW1lQXZhaWxhYmxlLCBzZXR1c2VyYW1lQXZhaWxhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG5cclxuICAgIHNldFVzZXIoKHByZXYpID0+ICh7IC4uLnByZXYsIFtuYW1lXTogdmFsdWUgfSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiBlLnBydmVudERlZmF1bHQoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXJNZXNzYWdlIC8+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgbG9hZGluZz17ZnJvbUxvYWRpbmd9XHJcbiAgICAgICAgZXJyb3I9e2Vycm9yTXNnICE9PSBudWxsfVxyXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgID5cclxuICAgICAgICA8TWVzc2FnZVxyXG4gICAgICAgICAgZXJyb3JcclxuICAgICAgICAgIGhlYWRlcj1cIk9vcHMhXCJcclxuICAgICAgICAgIGNvbnRlbnQ9e2Vycm9yTXNnfVxyXG4gICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXRlcnJvck1zZyhudWxsKX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8U2VnbWVudD5cclxuICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGxhYmVsPVwi2KfZhNil2LPZhVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi2KfZhNil2LPZhVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgIGljb249XCJ1c2VyXCJcclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGxhYmVsPVwi2KfZhNio2LHZitivINin2YTYpdmD2KrYsdmI2YbZilwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi2KfZhNio2LHZitivINin2YTYpdmD2KrYsdmI2YbZilwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgaWNvbj1cImVudmVsb3BlXCJcclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGxhYmVsPVwi2KfZhNio2LHZitivINin2YTYpdmD2KrYsdmI2YbZilwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi2KfZhNio2LHZitivINin2YTYpdmD2KrYsdmI2YbZilwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgaWNvbj17e1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwiZXllXCIsXHJcbiAgICAgICAgICAgICAgY2lyY3VsYXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgbGluazogdHJ1ZSxcclxuICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiBzZXRzaG93UGFzc3dvcmQoIXNob3dQYXNzd29yZCksXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICB0eXBlPXtzaG93UGFzc3dvcmQgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIn1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgbG9hZGluZz17dXNlcm5hbWVMb2FkaW5nfVxyXG4gICAgICAgICAgICBlcnJvcj17IXVzZXJhbWVBdmFpbGFibGV9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGxhYmVsPVwi2KfYs9mFINin2YTZhdiz2KrYrtiv2YVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cItin2LPZhSDYp9mE2YXYs9iq2K7Yr9mFXCJcclxuICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXR1c2VyYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICBpZiAocmVnZXhVc2VyTmFtZS50ZXN0KGUudGFyZ2V0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgc2V0dXNlcmFtZUF2YWlsYWJsZSh0cnVlKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0dXNlcmFtZUF2YWlsYWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICBpY29uPXt1c2VyYW1lQXZhaWxhYmxlID8gXCJjaGVja1wiIDogXCJjbG9zZVwifVxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICA8L0Zvcm0+XHJcblxyXG4gICAgICA8Rm9vdGVyTWVzc2FnZSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9