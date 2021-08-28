(function() {
var exports = {};
exports.id = "pages/signup";
exports.ids = ["pages/signup"];
exports.modules = {

/***/ "./components/Shared/ImageDrop.js":
/*!****************************************!*\
  !*** ./components/Shared/ImageDrop.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\malmo\\966-hub\\components\\Shared\\ImageDrop.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function ImageDrop({
  highlighted,
  setHighlighted,
  inputRef,
  handleChange,
  mediaPreview,
  setMediaPreview,
  setMedia
}) {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    placeholder: true,
    basic: true,
    secondary: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("input", {
    style: {
      display: "none"
    },
    type: "file",
    accept: "image/*",
    onChange: handleChange,
    name: "media",
    ref: inputRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx("div", {
    onDragOver: e => {
      e.preventDefault();
      setHighlighted(true);
    },
    onDragLeave: e => {
      e.preventDefault();
      setHighlighted(false);
    },
    onDrop: e => {
      e.preventDefault();
      setHighlighted(true);
      const dropedFile = Array.from(e.dataTransfer.files);
      setMedia(dropedFile[0]);
      setMediaPreview(URL.createObjectURL(dropedFile[0]));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, mediaPreview === null ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, _extends({}, highlighted && {
    color: "olive"
  }, {
    placeholder: true,
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Header, {
    icon: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "file image outline",
    style: {
      cursor: "pointer"
    },
    onClick: () => inputRef.current.click(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 19
    }
  }), "\u0625\u0638\u0627\u0641\u0629 \u0635\u0648\u0631\u0629 \u0644\u0645\u0644\u0641\u0643 \u0627\u0644\u0634\u062E\u0635\u064A"))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    color: "olive",
    placeholder: true,
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    src: mediaPreview,
    size: "medium",
    centered: true,
    style: {
      cursor: "pointer"
    },
    onClick: () => inputRef.current.click(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (ImageDrop);

/***/ }),

/***/ "./components/Shared/SharedInputs.js":
/*!*******************************************!*\
  !*** ./components/Shared/SharedInputs.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\malmo\\966-hub\\components\\Shared\\SharedInputs.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function SharedInputs({
  user: {
    bio,
    snapchat,
    twitter,
    instagram,
    facebook,
    youtube
  },
  handleChange,
  showSocialLinks,
  setshowSocialLinks
}) {
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
    onClick: () => setshowSocialLinks(!showSocialLinks),
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

/* harmony default export */ __webpack_exports__["default"] = (SharedInputs);

/***/ }),

/***/ "./components/Shared/WelcomeMessage.js":
/*!*********************************************!*\
  !*** ./components/Shared/WelcomeMessage.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderMessage": function() { return /* binding */ HeaderMessage; },
/* harmony export */   "FooterMessage": function() { return /* binding */ FooterMessage; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\malmo\\966-hub\\components\\Shared\\WelcomeMessage.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const HeaderMessage = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const signupRoute = router.pathname === "/signup";
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    color: "olive",
    attached: true,
    header: signupRoute ? "إبدأ بالتسجيل" : "مرحبا بعودتك",
    icon: signupRoute ? "settings" : "privacy",
    content: signupRoute ? "سجل حساب جديد" : "الدخول باستخدام البريد الإكتروني وكلمة المرور",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  });
};
const FooterMessage = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const signupRoute = router.pathname === "/signup";
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, signupRoute ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    attached: "bottom",
    warning: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "warning",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }), "\u0645\u0633\u062C\u0644 \u0645\u0646 \u0642\u0628\u0644 ", __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }, "\u0627\u0644\u062F\u062E\u0648\u0644 \u0647\u0646\u0627")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  })) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    attached: "bottom",
    info: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "lock",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }), __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/reset",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, "\u0647\u0644 \u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u061F")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    attached: "bottom",
    warning: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "warning",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }), "\u063A\u064A\u0631 \u0645\u0633\u062C\u0644 ", __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/signup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 22
    }
  }, "\u0633\u062C\u0644 \u0647\u0646\u0627"))));
};

/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Shared_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Shared/WelcomeMessage */ "./components/Shared/WelcomeMessage.js");
/* harmony import */ var _components_Shared_SharedInputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Shared/SharedInputs */ "./components/Shared/SharedInputs.js");
/* harmony import */ var _components_Shared_ImageDrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Shared/ImageDrop */ "./components/Shared/ImageDrop.js");
var _jsxFileName = "C:\\Users\\malmo\\966-hub\\pages\\signup.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

function Signup() {
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: "",
    email: "",
    password: "",
    bio: "",
    snapchat: "",
    twitter: "",
    instagram: "",
    facebook: "",
    youtube: ""
  });
  const {
    name,
    email,
    password,
    bio
  } = user;

  const handleChange = e => {
    const {
      name,
      value,
      files
    } = e.target;

    if (name === "media") {
      setMedia(files[0]);
      setMediaPreview(URL.createObjectURL(files[0]));
    }

    setUser(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  const {
    0: showSocialLinks,
    1: setShowSocialLinks
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: showPassword,
    1: setShowPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: errorMsg,
    1: setErrorMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: fromLoading,
    1: setFormLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: submitDisabled,
    1: setSubmitDisabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(" ");
  const {
    0: usernameLoading,
    1: setUsernameLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: userameAvailable,
    1: setUserameAvailable
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // Drag n Drop image

  const {
    0: media,
    1: setMedia
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: mediaPreview,
    1: setMediaPreview
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: highlighted,
    1: setHighlighted
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  const handleSubmit = e => e.prventDefault();

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const isUser = Object.values({
      name,
      email,
      password
    }).every(item => Boolean(item));
    isUser ? setSubmitDisabled(false) : setSubmitDisabled(true);
  }, [user]);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_components_Shared_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__.HeaderMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {
    loading: fromLoading,
    error: errorMsg !== null,
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    error: true,
    header: "Oops!",
    content: errorMsg,
    onDismiss: () => seterrorMsg(null),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx(_components_Shared_ImageDrop__WEBPACK_IMPORTED_MODULE_4__.default, {
    mediaPreview: mediaPreview,
    setMediaPreview: setMediaPreview,
    setMedia: setMedia,
    inputRef: inputRef,
    highlighted: highlighted,
    setHighlighted: setHighlighted,
    handleChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
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
      lineNumber: 97,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
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
      lineNumber: 109,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    required: true,
    label: "\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631",
    placeholder: "\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631",
    name: "password",
    value: password,
    onChange: handleChange,
    fluid: true,
    icon: {
      name: "eye",
      circular: true,
      link: true,
      onClick: () => setShowPassword(!showPassword)
    },
    iconPosition: "left",
    type: showPassword ? "text" : "password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    loading: usernameLoading,
    error: !userameAvailable,
    required: true,
    label: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645",
    placeholder: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645",
    value: username,
    onChange: e => {
      setUsername(e.target.value);

      if (regexUserName.test(e.target.value)) {
        setUserameAvailable(true);
      } else {
        setUserameAvailable(false);
      }
    },
    fluid: true,
    icon: userameAvailable ? "check" : "close",
    iconPosition: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 11
    }
  }), __jsx(_components_Shared_SharedInputs__WEBPACK_IMPORTED_MODULE_3__.default, {
    user: user,
    showSocialLinks: showSocialLinks,
    setshowSocialLinks: setShowSocialLinks,
    handleChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    icon: "signup",
    content: "\u0633\u062C\u0644",
    type: "submit",
    color: "olive",
    disabled: submitDisabled || !userameAvailable,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 11
    }
  }))), __jsx(_components_Shared_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__.FooterMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Signup);

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/signup.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL1NoYXJlZC9JbWFnZURyb3AuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9TaGFyZWQvU2hhcmVkSW5wdXRzLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvU2hhcmVkL1dlbGNvbWVNZXNzYWdlLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3BhZ2VzL3NpZ251cC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2lnbm9yZWR8QzpcXFVzZXJzXFxtYWxtb1xcOTY2LWh1Ylxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkltYWdlRHJvcCIsImhpZ2hsaWdodGVkIiwic2V0SGlnaGxpZ2h0ZWQiLCJpbnB1dFJlZiIsImhhbmRsZUNoYW5nZSIsIm1lZGlhUHJldmlldyIsInNldE1lZGlhUHJldmlldyIsInNldE1lZGlhIiwiZGlzcGxheSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRyb3BlZEZpbGUiLCJBcnJheSIsImZyb20iLCJkYXRhVHJhbnNmZXIiLCJmaWxlcyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImNvbG9yIiwiY3Vyc29yIiwiY3VycmVudCIsImNsaWNrIiwiU2hhcmVkSW5wdXRzIiwidXNlciIsImJpbyIsInNuYXBjaGF0IiwidHdpdHRlciIsImluc3RhZ3JhbSIsImZhY2Vib29rIiwieW91dHViZSIsInNob3dTb2NpYWxMaW5rcyIsInNldHNob3dTb2NpYWxMaW5rcyIsIlRleHRBcmVhIiwiSGVhZGVyTWVzc2FnZSIsInJvdXRlciIsInVzZVJvdXRlciIsInNpZ251cFJvdXRlIiwicGF0aG5hbWUiLCJGb290ZXJNZXNzYWdlIiwicmVnZXhVc2VyTmFtZSIsIlNpZ251cCIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2Iiwic2V0U2hvd1NvY2lhbExpbmtzIiwic2hvd1Bhc3N3b3JkIiwic2V0U2hvd1Bhc3N3b3JkIiwiZXJyb3JNc2ciLCJzZXRFcnJvck1zZyIsImZyb21Mb2FkaW5nIiwic2V0Rm9ybUxvYWRpbmciLCJzdWJtaXREaXNhYmxlZCIsInNldFN1Ym1pdERpc2FibGVkIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInVzZXJuYW1lTG9hZGluZyIsInNldFVzZXJuYW1lTG9hZGluZyIsInVzZXJhbWVBdmFpbGFibGUiLCJzZXRVc2VyYW1lQXZhaWxhYmxlIiwibWVkaWEiLCJ1c2VSZWYiLCJoYW5kbGVTdWJtaXQiLCJwcnZlbnREZWZhdWx0IiwidXNlRWZmZWN0IiwiaXNVc2VyIiwiT2JqZWN0IiwidmFsdWVzIiwiZXZlcnkiLCJpdGVtIiwiQm9vbGVhbiIsInNldGVycm9yTXNnIiwiY2lyY3VsYXIiLCJsaW5r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QUFEO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxXQUFPLEVBQUMsb0JBRlY7QUFHRSxRQUFJLEVBQUMsUUFIUDtBQUlFLFNBQUssRUFBQyxPQUpSO0FBS0UsWUFBUSxFQUFFb0QsY0FBYyxJQUFJLENBQUNNLGdCQUwvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakZGLENBWkYsQ0FGRixFQXlHRSxNQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF6R0YsQ0FERjtBQTZHRDs7QUFFRCwrREFBZXRCLE1BQWYsRTs7Ozs7Ozs7Ozs7QUN0TEEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL3NpZ251cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgU2VnbWVudCwgSW1hZ2UsIEljb24sIEhlYWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSW1hZ2VEcm9wKHtcclxuICBoaWdobGlnaHRlZCxcclxuICBzZXRIaWdobGlnaHRlZCxcclxuICBpbnB1dFJlZixcclxuICBoYW5kbGVDaGFuZ2UsXHJcbiAgbWVkaWFQcmV2aWV3LFxyXG4gIHNldE1lZGlhUHJldmlldyxcclxuICBzZXRNZWRpYSxcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8U2VnbWVudCBwbGFjZWhvbGRlciBiYXNpYyBzZWNvbmRhcnk+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgbmFtZT1cIm1lZGlhXCJcclxuICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgb25EcmFnT3Zlcj17KGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzZXRIaWdobGlnaHRlZCh0cnVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkRyYWdMZWF2ZT17KGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzZXRIaWdobGlnaHRlZChmYWxzZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25Ecm9wPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZHJvcGVkRmlsZSA9IEFycmF5LmZyb20oZS5kYXRhVHJhbnNmZXIuZmlsZXMpO1xyXG4gICAgICAgICAgICBzZXRNZWRpYShkcm9wZWRGaWxlWzBdKTtcclxuICAgICAgICAgICAgc2V0TWVkaWFQcmV2aWV3KFVSTC5jcmVhdGVPYmplY3RVUkwoZHJvcGVkRmlsZVswXSkpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bWVkaWFQcmV2aWV3ID09PSBudWxsID8gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxTZWdtZW50XHJcbiAgICAgICAgICAgICAgICB7Li4uKGhpZ2hsaWdodGVkICYmIHsgY29sb3I6IFwib2xpdmVcIiB9KX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyXHJcbiAgICAgICAgICAgICAgICBiYXNpY1xyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIgaWNvbj5cclxuICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlsZSBpbWFnZSBvdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaW5wdXRSZWYuY3VycmVudC5jbGljaygpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICDYpdi42KfZgdipINi12YjYsdipINmE2YXZhNmB2YMg2KfZhNi02K7YtdmKXHJcbiAgICAgICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8U2VnbWVudCBjb2xvcj1cIm9saXZlXCIgcGxhY2Vob2xkZXIgYmFzaWM+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgc3JjPXttZWRpYVByZXZpZXd9XHJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICBjZW50ZXJlZFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGlucHV0UmVmLmN1cnJlbnQuY2xpY2soKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvU2VnbWVudD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlRHJvcDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEZvcm0sXHJcbiAgQnV0dG9uLFxyXG4gIE1lc3NhZ2UsXHJcbiAgU2VnbWVudCxcclxuICBUZXh0QXJlYSxcclxuICBEaXZpZGVyLFxyXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gU2hhcmVkSW5wdXRzKHtcclxuICB1c2VyOiB7IGJpbywgc25hcGNoYXQsIHR3aXR0ZXIsIGluc3RhZ3JhbSwgZmFjZWJvb2ssIHlvdXR1YmUgfSxcclxuICBoYW5kbGVDaGFuZ2UsXHJcbiAgc2hvd1NvY2lhbExpbmtzLFxyXG4gIHNldHNob3dTb2NpYWxMaW5rcyxcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9ybS5GaWVsZFxyXG4gICAgICAgIGNvbnRyb2w9e1RleHRBcmVhfVxyXG4gICAgICAgIG5hbWU9XCJiaW9cIlxyXG4gICAgICAgIHZhbHVlPXtiaW99XHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cItiq2LnYsdmK2YEg2LnZhtmKXCJcclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBjb250ZW50PVwi2K3Ys9in2KjYp9iqINin2YTYqtmI2KfYtdmEINin2YTYpdis2KrZhdin2LnZilwiXHJcbiAgICAgICAgY29sb3I9XCJvbGl2ZVwiXHJcbiAgICAgICAgaWNvbj1cImF0XCJcclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRzaG93U29jaWFsTGlua3MoIXNob3dTb2NpYWxMaW5rcyl9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7c2hvd1NvY2lhbExpbmtzICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIGljb249XCJzbmFwY2hhdCBnaG9zdFwiXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICBuYW1lPVwic25hcGNoYXRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17c25hcGNoYXR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIGljb249XCJ0d2l0dGVyXCJcclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ0d2l0dGVyXCJcclxuICAgICAgICAgICAgdmFsdWU9e3R3aXR0ZXJ9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIGljb249XCJpbnN0YWdyYW1cIlxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgbmFtZT1cImluc3RhZ3JhbVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnN0YWdyYW19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIGljb249XCJmYWNlYm9va1wiXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZmFjZWJvb2tcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZmFjZWJvb2t9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIGljb249XCJ5b3V0dWJlXCJcclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ5b3V0dWJlXCJcclxuICAgICAgICAgICAgdmFsdWU9e3lvdXR1YmV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxNZXNzYWdlXHJcbiAgICAgICAgICAgIGljb249XCJhdHRlbnRpb25cIlxyXG4gICAgICAgICAgICBpbmZvXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIGhlYWRlcj1cItit2LPYp9io2KfYqiDYp9mE2KrZiNin2LXZhCDYp9mE2KXYrNiq2YXYp9i52Yog2KXYrtiq2YrYp9ix2YrYqVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hhcmVkSW5wdXRzO1xyXG4iLCJpbXBvcnQgeyBJY29uLCBNZXNzYWdlLCBEaXZpZGVyIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyTWVzc2FnZSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBzaWdudXBSb3V0ZSA9IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvc2lnbnVwXCI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TWVzc2FnZVxyXG4gICAgICBjb2xvcj1cIm9saXZlXCJcclxuICAgICAgYXR0YWNoZWRcclxuICAgICAgaGVhZGVyPXtzaWdudXBSb3V0ZSA/IFwi2KXYqNiv2KMg2KjYp9mE2KrYs9is2YrZhFwiIDogXCLZhdix2K3YqNinINio2LnZiNiv2KrZg1wifVxyXG4gICAgICBpY29uPXtzaWdudXBSb3V0ZSA/IFwic2V0dGluZ3NcIiA6IFwicHJpdmFjeVwifVxyXG4gICAgICBjb250ZW50PXtcclxuICAgICAgICBzaWdudXBSb3V0ZVxyXG4gICAgICAgICAgPyBcItiz2KzZhCDYrdiz2KfYqCDYrNiv2YrYr1wiXHJcbiAgICAgICAgICA6IFwi2KfZhNiv2K7ZiNmEINio2KfYs9iq2K7Yr9in2YUg2KfZhNio2LHZitivINin2YTYpdmD2KrYsdmI2YbZiiDZiNmD2YTZhdipINin2YTZhdix2YjYsVwiXHJcbiAgICAgIH1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBGb290ZXJNZXNzYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHNpZ251cFJvdXRlID0gcm91dGVyLnBhdGhuYW1lID09PSBcIi9zaWdudXBcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtzaWdudXBSb3V0ZSA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPE1lc3NhZ2UgYXR0YWNoZWQ9XCJib3R0b21cIiB3YXJuaW5nPlxyXG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwid2FybmluZ1wiIC8+XHJcbiAgICAgICAgICAgINmF2LPYrNmEINmF2YYg2YLYqNmEIDxMaW5rIGhyZWY9XCIvbG9naW5cIj7Yp9mE2K/YrtmI2YQg2YfZhtinPC9MaW5rPlxyXG4gICAgICAgICAgPC9NZXNzYWdlPlxyXG4gICAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxNZXNzYWdlIGF0dGFjaGVkPVwiYm90dG9tXCIgaW5mbz5cclxuICAgICAgICAgICAgPEljb24gbmFtZT1cImxvY2tcIiAvPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3Jlc2V0XCI+2YfZhCDZhtiz2YrYqiDZg9mE2YXYqSDYp9mE2YXYsdmI2LEg2J88L0xpbms+XHJcbiAgICAgICAgICA8L01lc3NhZ2U+XHJcblxyXG4gICAgICAgICAgPE1lc3NhZ2UgYXR0YWNoZWQ9XCJib3R0b21cIiB3YXJuaW5nPlxyXG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwid2FybmluZ1wiIC8+XHJcbiAgICAgICAgICAgINi62YrYsSDZhdiz2KzZhCA8TGluayBocmVmPVwiL3NpZ251cFwiPtiz2KzZhCDZh9mG2Kc8L0xpbms+XHJcbiAgICAgICAgICA8L01lc3NhZ2U+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgRm9ybSxcclxuICBCdXR0b24sXHJcbiAgTWVzc2FnZSxcclxuICBTZWdtZW50LFxyXG4gIFRleHRBcmVhLFxyXG4gIERpdmlkZXIsXHJcbiAgSXRlbSxcclxufSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgSGVhZGVyTWVzc2FnZSxcclxuICBGb290ZXJNZXNzYWdlLFxyXG59IGZyb20gXCIuLi9jb21wb25lbnRzL1NoYXJlZC9XZWxjb21lTWVzc2FnZVwiO1xyXG5pbXBvcnQgU2hhcmVkSW5wdXRzIGZyb20gXCIuLi9jb21wb25lbnRzL1NoYXJlZC9TaGFyZWRJbnB1dHNcIjtcclxuaW1wb3J0IEltYWdlRHJvcCBmcm9tIFwiLi4vY29tcG9uZW50cy9TaGFyZWQvSW1hZ2VEcm9wXCI7XHJcblxyXG5jb25zdCByZWdleFVzZXJOYW1lID0gL14oPyEuKlxcLlxcLikoPyEuKlxcLiQpW15cXFddW1xcdy5dezAsMjl9JC87XHJcblxyXG5mdW5jdGlvbiBTaWdudXAoKSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICBiaW86IFwiXCIsXHJcbiAgICBzbmFwY2hhdDogXCJcIixcclxuICAgIHR3aXR0ZXI6IFwiXCIsXHJcbiAgICBpbnN0YWdyYW06IFwiXCIsXHJcbiAgICBmYWNlYm9vazogXCJcIixcclxuICAgIHlvdXR1YmU6IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkLCBiaW8gfSA9IHVzZXI7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlLCBmaWxlcyB9ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgaWYgKG5hbWUgPT09IFwibWVkaWFcIikge1xyXG4gICAgICBzZXRNZWRpYShmaWxlc1swXSk7XHJcbiAgICAgIHNldE1lZGlhUHJldmlldyhVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGVzWzBdKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VXNlcigocHJldikgPT4gKHsgLi4ucHJldiwgW25hbWVdOiB2YWx1ZSB9KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW3Nob3dTb2NpYWxMaW5rcywgc2V0U2hvd1NvY2lhbExpbmtzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd1Bhc3N3b3JkLCBzZXRTaG93UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlcnJvck1zZywgc2V0RXJyb3JNc2ddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Zyb21Mb2FkaW5nLCBzZXRGb3JtTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3N1Ym1pdERpc2FibGVkLCBzZXRTdWJtaXREaXNhYmxlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIiBcIik7XHJcbiAgY29uc3QgW3VzZXJuYW1lTG9hZGluZywgc2V0VXNlcm5hbWVMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXNlcmFtZUF2YWlsYWJsZSwgc2V0VXNlcmFtZUF2YWlsYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vIERyYWcgbiBEcm9wIGltYWdlXHJcbiAgY29uc3QgW21lZGlhLCBzZXRNZWRpYV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbWVkaWFQcmV2aWV3LCBzZXRNZWRpYVByZXZpZXddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2hpZ2hsaWdodGVkLCBzZXRIaWdobGlnaHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IGUucHJ2ZW50RGVmYXVsdCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaXNVc2VyID0gT2JqZWN0LnZhbHVlcyh7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCB9KS5ldmVyeSgoaXRlbSkgPT5cclxuICAgICAgQm9vbGVhbihpdGVtKVxyXG4gICAgKTtcclxuICAgIGlzVXNlciA/IHNldFN1Ym1pdERpc2FibGVkKGZhbHNlKSA6IHNldFN1Ym1pdERpc2FibGVkKHRydWUpO1xyXG4gIH0sIFt1c2VyXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyTWVzc2FnZSAvPlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIGxvYWRpbmc9e2Zyb21Mb2FkaW5nfVxyXG4gICAgICAgIGVycm9yPXtlcnJvck1zZyAhPT0gbnVsbH1cclxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICA+XHJcbiAgICAgICAgPE1lc3NhZ2VcclxuICAgICAgICAgIGVycm9yXHJcbiAgICAgICAgICBoZWFkZXI9XCJPb3BzIVwiXHJcbiAgICAgICAgICBjb250ZW50PXtlcnJvck1zZ31cclxuICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gc2V0ZXJyb3JNc2cobnVsbCl9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPFNlZ21lbnQ+XHJcbiAgICAgICAgICA8SW1hZ2VEcm9wXHJcbiAgICAgICAgICAgIG1lZGlhUHJldmlldz17bWVkaWFQcmV2aWV3fVxyXG4gICAgICAgICAgICBzZXRNZWRpYVByZXZpZXc9e3NldE1lZGlhUHJldmlld31cclxuICAgICAgICAgICAgc2V0TWVkaWE9e3NldE1lZGlhfVxyXG4gICAgICAgICAgICBpbnB1dFJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgICAgIGhpZ2hsaWdodGVkPXtoaWdobGlnaHRlZH1cclxuICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQ9e3NldEhpZ2hsaWdodGVkfVxyXG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBsYWJlbD1cItin2YTYpdiz2YVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cItin2YTYpdiz2YVcIlxyXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICBpY29uPVwidXNlclwiXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBsYWJlbD1cItin2YTYqNix2YrYryDYp9mE2KXZg9iq2LHZiNmG2YpcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cItin2YTYqNix2YrYryDYp9mE2KXZg9iq2LHZiNmG2YpcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgIGljb249XCJlbnZlbG9wZVwiXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBsYWJlbD1cItmD2YTZhdipINin2YTYs9ixXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLZg9mE2YXYqSDYp9mE2LPYsVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgaWNvbj17e1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwiZXllXCIsXHJcbiAgICAgICAgICAgICAgY2lyY3VsYXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgbGluazogdHJ1ZSxcclxuICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiBzZXRTaG93UGFzc3dvcmQoIXNob3dQYXNzd29yZCksXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICB0eXBlPXtzaG93UGFzc3dvcmQgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIn1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgbG9hZGluZz17dXNlcm5hbWVMb2FkaW5nfVxyXG4gICAgICAgICAgICBlcnJvcj17IXVzZXJhbWVBdmFpbGFibGV9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGxhYmVsPVwi2KfYs9mFINin2YTZhdiz2KrYrtiv2YVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cItin2LPZhSDYp9mE2YXYs9iq2K7Yr9mFXCJcclxuICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgaWYgKHJlZ2V4VXNlck5hbWUudGVzdChlLnRhcmdldC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHNldFVzZXJhbWVBdmFpbGFibGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFVzZXJhbWVBdmFpbGFibGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgaWNvbj17dXNlcmFtZUF2YWlsYWJsZSA/IFwiY2hlY2tcIiA6IFwiY2xvc2VcIn1cclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxTaGFyZWRJbnB1dHNcclxuICAgICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgc2hvd1NvY2lhbExpbmtzPXtzaG93U29jaWFsTGlua3N9XHJcbiAgICAgICAgICAgIHNldHNob3dTb2NpYWxMaW5rcz17c2V0U2hvd1NvY2lhbExpbmtzfVxyXG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGljb249XCJzaWdudXBcIlxyXG4gICAgICAgICAgICBjb250ZW50PVwi2LPYrNmEXCJcclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwib2xpdmVcIlxyXG4gICAgICAgICAgICBkaXNhYmxlZD17c3VibWl0RGlzYWJsZWQgfHwgIXVzZXJhbWVBdmFpbGFibGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgPC9Gb3JtPlxyXG5cclxuICAgICAgPEZvb3Rlck1lc3NhZ2UgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=