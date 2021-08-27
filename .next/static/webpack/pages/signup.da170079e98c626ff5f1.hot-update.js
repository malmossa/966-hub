self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Shared_WelcomeMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Shared/WelcomeMessage */ "./components/Shared/WelcomeMessage.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\malmo\\966-hub\\pages\\signup.js",
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




function Signup() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
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

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      showSocialLinks = _useState2[0],
      setshowSocialLinks = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      showPassword = _useState3[0],
      setshowPassword = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      errorMsg = _useState4[0],
      seterrorMsg = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      fromLoading = _useState5[0],
      setformLoading = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(" "),
      username = _useState6[0],
      setusername = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      usernameLoading = _useState7[0],
      setusernameLoading = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      usenameAvailable = _useState8[0],
      setusenameAvailable = _useState8[1];

  var handleChange = function handleChange() {};

  var handleSubmit = function handleSubmit(e) {
    return e.prventDefault();
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_components_Shared_WelcomeMessage__WEBPACK_IMPORTED_MODULE_1__.HeaderMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
    loading: fromLoading,
    error: errorMsg !== null,
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
    error: true,
    header: "Oops!",
    content: errorMsg,
    onDismiss: function onDismiss() {
      return seterrorMsg(null);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
    label: "\u0627\u0644\u0625\u0633\u0645",
    placeholder: "\u0627\u0644\u0625\u0633\u0645",
    name: "name",
    value: name,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }))), __jsx(_components_Shared_WelcomeMessage__WEBPACK_IMPORTED_MODULE_1__.FooterMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }));
}

_s(Signup, "XPeID0B/rh1olSWtoHHR/JcuxPE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIlNpZ251cCIsInVzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJiaW8iLCJzbmFwY2hhdCIsInR3aXR0ZXIiLCJpbnN0YWdyYW0iLCJmYWNlYm9vayIsInlvdXR1YmUiLCJ1c2VyIiwic2V0VXNlciIsInNob3dTb2NpYWxMaW5rcyIsInNldHNob3dTb2NpYWxMaW5rcyIsInNob3dQYXNzd29yZCIsInNldHNob3dQYXNzd29yZCIsImVycm9yTXNnIiwic2V0ZXJyb3JNc2ciLCJmcm9tTG9hZGluZyIsInNldGZvcm1Mb2FkaW5nIiwidXNlcm5hbWUiLCJzZXR1c2VybmFtZSIsInVzZXJuYW1lTG9hZGluZyIsInNldHVzZXJuYW1lTG9hZGluZyIsInVzZW5hbWVBdmFpbGFibGUiLCJzZXR1c2VuYW1lQXZhaWxhYmxlIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlU3VibWl0IiwiZSIsInBydmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBU0E7O0FBS0EsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBLGtCQUNRQywrQ0FBUSxDQUFDO0FBQy9CQyxRQUFJLEVBQUUsRUFEeUI7QUFFL0JDLFNBQUssRUFBRSxFQUZ3QjtBQUcvQkMsWUFBUSxFQUFFLEVBSHFCO0FBSS9CQyxPQUFHLEVBQUUsRUFKMEI7QUFLL0JDLFlBQVEsRUFBRSxFQUxxQjtBQU0vQkMsV0FBTyxFQUFFLEVBTnNCO0FBTy9CQyxhQUFTLEVBQUUsRUFQb0I7QUFRL0JDLFlBQVEsRUFBRSxFQVJxQjtBQVMvQkMsV0FBTyxFQUFFO0FBVHNCLEdBQUQsQ0FEaEI7QUFBQSxNQUNUQyxJQURTO0FBQUEsTUFDSEMsT0FERzs7QUFBQSxNQWFSVixJQWJRLEdBYXVCUyxJQWJ2QixDQWFSVCxJQWJRO0FBQUEsTUFhRkMsS0FiRSxHQWF1QlEsSUFidkIsQ0FhRlIsS0FiRTtBQUFBLE1BYUtDLFFBYkwsR0FhdUJPLElBYnZCLENBYUtQLFFBYkw7QUFBQSxNQWFlQyxHQWJmLEdBYXVCTSxJQWJ2QixDQWFlTixHQWJmOztBQUFBLG1CQWU4QkosK0NBQVEsQ0FBQyxLQUFELENBZnRDO0FBQUEsTUFlVFksZUFmUztBQUFBLE1BZVFDLGtCQWZSOztBQUFBLG1CQWdCd0JiLCtDQUFRLENBQUMsS0FBRCxDQWhCaEM7QUFBQSxNQWdCVGMsWUFoQlM7QUFBQSxNQWdCS0MsZUFoQkw7O0FBQUEsbUJBaUJnQmYsK0NBQVEsQ0FBQyxJQUFELENBakJ4QjtBQUFBLE1BaUJUZ0IsUUFqQlM7QUFBQSxNQWlCQ0MsV0FqQkQ7O0FBQUEsbUJBa0JzQmpCLCtDQUFRLENBQUMsS0FBRCxDQWxCOUI7QUFBQSxNQWtCVGtCLFdBbEJTO0FBQUEsTUFrQklDLGNBbEJKOztBQUFBLG1CQW9CZ0JuQiwrQ0FBUSxDQUFDLEdBQUQsQ0FwQnhCO0FBQUEsTUFvQlRvQixRQXBCUztBQUFBLE1Bb0JDQyxXQXBCRDs7QUFBQSxtQkFxQjhCckIsK0NBQVEsQ0FBQyxLQUFELENBckJ0QztBQUFBLE1BcUJUc0IsZUFyQlM7QUFBQSxNQXFCUUMsa0JBckJSOztBQUFBLG1CQXNCZ0N2QiwrQ0FBUSxDQUFDLEtBQUQsQ0F0QnhDO0FBQUEsTUFzQlR3QixnQkF0QlM7QUFBQSxNQXNCU0MsbUJBdEJUOztBQXdCaEIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTSxDQUFFLENBQTdCOztBQUNBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQ7QUFBQSxXQUFPQSxDQUFDLENBQUNDLGFBQUYsRUFBUDtBQUFBLEdBQXJCOztBQUVBLFNBQ0UscUVBQ0UsTUFBQyw0RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLG1EQUFEO0FBQ0UsV0FBTyxFQUFFWCxXQURYO0FBRUUsU0FBSyxFQUFFRixRQUFRLEtBQUssSUFGdEI7QUFHRSxZQUFRLEVBQUVXLFlBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFLE1BQUMsc0RBQUQ7QUFDRSxTQUFLLE1BRFA7QUFFRSxVQUFNLEVBQUMsT0FGVDtBQUdFLFdBQU8sRUFBRVgsUUFIWDtBQUlFLGFBQVMsRUFBRTtBQUFBLGFBQU1DLFdBQVcsQ0FBQyxJQUFELENBQWpCO0FBQUEsS0FKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFZRSxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlEQUFEO0FBQ0UsU0FBSyxFQUFDLGdDQURSO0FBRUUsZUFBVyxFQUFDLGdDQUZkO0FBR0UsUUFBSSxFQUFDLE1BSFA7QUFJRSxTQUFLLEVBQUVoQixJQUpUO0FBS0UsWUFBUSxFQUFFeUIsWUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FaRixDQUZGLEVBeUJFLE1BQUMsNEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXpCRixDQURGO0FBNkJEOztHQXhEUTNCLE07O0tBQUFBLE07QUEwRFQsK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLmRhMTcwMDc5ZTk4YzYyNmZmNWYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgRm9ybSxcclxuICBCdXR0b24sXHJcbiAgTWVzc2FnZSxcclxuICBTZWdtZW50LFxyXG4gIFRleHRBcmVhLFxyXG4gIERpdmlkZXIsXHJcbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIEhlYWRlck1lc3NhZ2UsXHJcbiAgRm9vdGVyTWVzc2FnZSxcclxufSBmcm9tIFwiLi4vY29tcG9uZW50cy9TaGFyZWQvV2VsY29tZU1lc3NhZ2VcIjtcclxuXHJcbmZ1bmN0aW9uIFNpZ251cCgpIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuICAgIGJpbzogXCJcIixcclxuICAgIHNuYXBjaGF0OiBcIlwiLFxyXG4gICAgdHdpdHRlcjogXCJcIixcclxuICAgIGluc3RhZ3JhbTogXCJcIixcclxuICAgIGZhY2Vib29rOiBcIlwiLFxyXG4gICAgeW91dHViZTogXCJcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGJpbyB9ID0gdXNlcjtcclxuXHJcbiAgY29uc3QgW3Nob3dTb2NpYWxMaW5rcywgc2V0c2hvd1NvY2lhbExpbmtzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd1Bhc3N3b3JkLCBzZXRzaG93UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlcnJvck1zZywgc2V0ZXJyb3JNc2ddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Zyb21Mb2FkaW5nLCBzZXRmb3JtTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0dXNlcm5hbWVdID0gdXNlU3RhdGUoXCIgXCIpO1xyXG4gIGNvbnN0IFt1c2VybmFtZUxvYWRpbmcsIHNldHVzZXJuYW1lTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VzZW5hbWVBdmFpbGFibGUsIHNldHVzZW5hbWVBdmFpbGFibGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoKSA9PiB7fTtcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4gZS5wcnZlbnREZWZhdWx0KCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyTWVzc2FnZSAvPlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIGxvYWRpbmc9e2Zyb21Mb2FkaW5nfVxyXG4gICAgICAgIGVycm9yPXtlcnJvck1zZyAhPT0gbnVsbH1cclxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICA+XHJcbiAgICAgICAgPE1lc3NhZ2VcclxuICAgICAgICAgIGVycm9yXHJcbiAgICAgICAgICBoZWFkZXI9XCJPb3BzIVwiXHJcbiAgICAgICAgICBjb250ZW50PXtlcnJvck1zZ31cclxuICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gc2V0ZXJyb3JNc2cobnVsbCl9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPFNlZ21lbnQ+XHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICBsYWJlbD1cItin2YTYpdiz2YVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cItin2YTYpdiz2YVcIlxyXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgIDwvRm9ybT5cclxuXHJcbiAgICAgIDxGb290ZXJNZXNzYWdlIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWdudXA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=