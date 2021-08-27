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
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.TextArea,
    name: "bio",
    value: bio,
    onChange: handleChange,
    placeholder: "\u062A\u0639\u0631\u064A\u0641 \u0639\u0646\u064A",
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
      lineNumber: 27,
      columnNumber: 7
    }
  }), showSocialLinks && __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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
      lineNumber: 38,
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
      lineNumber: 46,
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
      lineNumber: 54,
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
      lineNumber: 62,
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
      lineNumber: 70,
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
      lineNumber: 78,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaGFyZWQvU2hhcmVkSW5wdXRzLmpzIl0sIm5hbWVzIjpbIlNoYXJlZElucHV0cyIsInVzZXIiLCJiaW8iLCJzbmFwY2hhdCIsInR3aXR0ZXIiLCJpbnN0YWdyYW0iLCJmYWNlYm9vayIsInlvdXR1YmUiLCJoYW5kbGVDaGFuZ2UiLCJzaG93U29jaWFsTGlua3MiLCJzZXRzaG93U29jaWFsTGlua3MiLCJUZXh0QXJlYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBU0EsU0FBU0EsWUFBVCxPQUtHO0FBQUEsdUJBSkRDLElBSUM7QUFBQSxNQUpPQyxHQUlQLGFBSk9BLEdBSVA7QUFBQSxNQUpZQyxRQUlaLGFBSllBLFFBSVo7QUFBQSxNQUpzQkMsT0FJdEIsYUFKc0JBLE9BSXRCO0FBQUEsTUFKK0JDLFNBSS9CLGFBSitCQSxTQUkvQjtBQUFBLE1BSjBDQyxRQUkxQyxhQUowQ0EsUUFJMUM7QUFBQSxNQUpvREMsT0FJcEQsYUFKb0RBLE9BSXBEO0FBQUEsTUFIREMsWUFHQyxRQUhEQSxZQUdDO0FBQUEsTUFGREMsZUFFQyxRQUZEQSxlQUVDO0FBQUEsTUFEREMsa0JBQ0MsUUFEREEsa0JBQ0M7QUFDRCxTQUNFLHFFQUNFLE1BQUMseURBQUQ7QUFDRSxXQUFPLEVBQUVDLHVEQURYO0FBRUUsUUFBSSxFQUFDLEtBRlA7QUFHRSxTQUFLLEVBQUVULEdBSFQ7QUFJRSxZQUFRLEVBQUVNLFlBSlo7QUFLRSxlQUFXLEVBQUMsbURBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBU0UsTUFBQyxxREFBRDtBQUNFLFdBQU8sRUFBQyx3SUFEVjtBQUVFLFNBQUssRUFBQyxPQUZSO0FBR0UsUUFBSSxFQUFDLElBSFA7QUFJRSxRQUFJLEVBQUMsUUFKUDtBQUtFLFdBQU8sRUFBRTtBQUFBLGFBQU1FLGtCQUFrQixDQUFDLENBQUNELGVBQUYsQ0FBeEI7QUFBQSxLQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixFQWlCR0EsZUFBZSxJQUNkLHFFQUNFLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyx5REFBRDtBQUNFLFFBQUksRUFBQyxnQkFEUDtBQUVFLGdCQUFZLEVBQUMsTUFGZjtBQUdFLFFBQUksRUFBQyxVQUhQO0FBSUUsU0FBSyxFQUFFTixRQUpUO0FBS0UsWUFBUSxFQUFFSyxZQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQVVFLE1BQUMseURBQUQ7QUFDRSxRQUFJLEVBQUMsU0FEUDtBQUVFLGdCQUFZLEVBQUMsTUFGZjtBQUdFLFFBQUksRUFBQyxTQUhQO0FBSUUsU0FBSyxFQUFFSixPQUpUO0FBS0UsWUFBUSxFQUFFSSxZQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixFQWtCRSxNQUFDLHlEQUFEO0FBQ0UsUUFBSSxFQUFDLFdBRFA7QUFFRSxnQkFBWSxFQUFDLE1BRmY7QUFHRSxRQUFJLEVBQUMsV0FIUDtBQUlFLFNBQUssRUFBRUgsU0FKVDtBQUtFLFlBQVEsRUFBRUcsWUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbEJGLEVBMEJFLE1BQUMseURBQUQ7QUFDRSxRQUFJLEVBQUMsVUFEUDtBQUVFLGdCQUFZLEVBQUMsTUFGZjtBQUdFLFFBQUksRUFBQyxVQUhQO0FBSUUsU0FBSyxFQUFFRixRQUpUO0FBS0UsWUFBUSxFQUFFRSxZQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUExQkYsRUFrQ0UsTUFBQyx5REFBRDtBQUNFLFFBQUksRUFBQyxTQURQO0FBRUUsZ0JBQVksRUFBQyxNQUZmO0FBR0UsUUFBSSxFQUFDLFNBSFA7QUFJRSxTQUFLLEVBQUVELE9BSlQ7QUFLRSxZQUFRLEVBQUVDLFlBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxDRixFQTBDRSxNQUFDLHNEQUFEO0FBQ0UsUUFBSSxFQUFDLFdBRFA7QUFFRSxRQUFJLE1BRk47QUFHRSxRQUFJLEVBQUMsT0FIUDtBQUlFLFVBQU0sRUFBQyx5TEFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBMUNGLENBbEJKLENBREY7QUF1RUQ7O0tBN0VRUixZO0FBK0VULCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC5lNjliMmYzOTJlNmU4ZjBmMDY1MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgRm9ybSxcbiAgQnV0dG9uLFxuICBNZXNzYWdlLFxuICBTZWdtZW50LFxuICBUZXh0QXJlYSxcbiAgRGl2aWRlcixcbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5cbmZ1bmN0aW9uIFNoYXJlZElucHV0cyh7XG4gIHVzZXI6IHsgYmlvLCBzbmFwY2hhdCwgdHdpdHRlciwgaW5zdGFncmFtLCBmYWNlYm9vaywgeW91dHViZSB9LFxuICBoYW5kbGVDaGFuZ2UsXG4gIHNob3dTb2NpYWxMaW5rcyxcbiAgc2V0c2hvd1NvY2lhbExpbmtzLFxufSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Rm9ybS5GaWVsZFxuICAgICAgICBjb250cm9sPXtUZXh0QXJlYX1cbiAgICAgICAgbmFtZT1cImJpb1wiXG4gICAgICAgIHZhbHVlPXtiaW99XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwi2KrYudix2YrZgSDYudmG2YpcIlxuICAgICAgLz5cblxuICAgICAgPEJ1dHRvblxuICAgICAgICBjb250ZW50PVwi2K3Ys9in2KjYp9iqINin2YTYqtmI2KfYtdmEINin2YTYpdis2KrZhdin2LnZilwiXG4gICAgICAgIGNvbG9yPVwib2xpdmVcIlxuICAgICAgICBpY29uPVwiYXRcIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0c2hvd1NvY2lhbExpbmtzKCFzaG93U29jaWFsTGlua3MpfVxuICAgICAgLz5cblxuICAgICAge3Nob3dTb2NpYWxMaW5rcyAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgaWNvbj1cInNuYXBjaGF0IGdob3N0XCJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxuICAgICAgICAgICAgbmFtZT1cInNuYXBjaGF0XCJcbiAgICAgICAgICAgIHZhbHVlPXtzbmFwY2hhdH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICBpY29uPVwidHdpdHRlclwiXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcbiAgICAgICAgICAgIG5hbWU9XCJ0d2l0dGVyXCJcbiAgICAgICAgICAgIHZhbHVlPXt0d2l0dGVyfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgIGljb249XCJpbnN0YWdyYW1cIlxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXG4gICAgICAgICAgICBuYW1lPVwiaW5zdGFncmFtXCJcbiAgICAgICAgICAgIHZhbHVlPXtpbnN0YWdyYW19XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgaWNvbj1cImZhY2Vib29rXCJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxuICAgICAgICAgICAgbmFtZT1cImZhY2Vib29rXCJcbiAgICAgICAgICAgIHZhbHVlPXtmYWNlYm9va31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICBpY29uPVwieW91dHViZVwiXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcbiAgICAgICAgICAgIG5hbWU9XCJ5b3V0dWJlXCJcbiAgICAgICAgICAgIHZhbHVlPXt5b3V0dWJlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPE1lc3NhZ2VcbiAgICAgICAgICAgIGljb249XCJhdHRlbnRpb25cIlxuICAgICAgICAgICAgaW5mb1xuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgIGhlYWRlcj1cItit2LPYp9io2KfYqiDYp9mE2KrZiNin2LXZhCDYp9mE2KXYrNiq2YXYp9i52Yog2KXYrtiq2YrYp9ix2YrYqVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaGFyZWRJbnB1dHM7XG4iXSwic291cmNlUm9vdCI6IiJ9