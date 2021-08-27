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
  }, mediaPreview === null ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    color: highlighted ? "olive" : "",
    placeholder: true,
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Header, {
    icon: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
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
      lineNumber: 47,
      columnNumber: 19
    }
  }), "\u0625\u0638\u0627\u0641\u0629 \u0635\u0648\u0631\u0629 \u0644\u0645\u0644\u0641\u0643 \u0627\u0644\u0634\u062E\u0635\u064A"))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    color: "olive",
    placeholder: true,
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
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
      lineNumber: 59,
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
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: submitDisabled,
    1: setSubmitDisabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true); // Drag n Drop image

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL1NoYXJlZC9JbWFnZURyb3AuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9TaGFyZWQvU2hhcmVkSW5wdXRzLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvU2hhcmVkL1dlbGNvbWVNZXNzYWdlLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3BhZ2VzL3NpZ251cC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2lnbm9yZWR8QzpcXFVzZXJzXFxtYWxtb1xcOTY2LWh1Ylxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkltYWdlRHJvcCIsImhpZ2hsaWdodGVkIiwic2V0SGlnaGxpZ2h0ZWQiLCJpbnB1dFJlZiIsImhhbmRsZUNoYW5nZSIsIm1lZGlhUHJldmlldyIsInNldE1lZGlhUHJldmlldyIsInNldE1lZGlhIiwiZGlzcGxheSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRyb3BlZEZpbGUiLCJBcnJheSIsImZyb20iLCJkYXRhVHJhbnNmZXIiLCJmaWxlcyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImN1cnNvciIsImN1cnJlbnQiLCJjbGljayIsIlNoYXJlZElucHV0cyIsInVzZXIiLCJiaW8iLCJzbmFwY2hhdCIsInR3aXR0ZXIiLCJpbnN0YWdyYW0iLCJmYWNlYm9vayIsInlvdXR1YmUiLCJzaG93U29jaWFsTGlua3MiLCJzZXRzaG93U29jaWFsTGlua3MiLCJUZXh0QXJlYSIsIkhlYWRlck1lc3NhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzaWdudXBSb3V0ZSIsInBhdGhuYW1lIiwiRm9vdGVyTWVzc2FnZSIsInJlZ2V4VXNlck5hbWUiLCJTaWdudXAiLCJzZXRVc2VyIiwidXNlU3RhdGUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInZhbHVlIiwidGFyZ2V0IiwicHJldiIsInNldFNob3dTb2NpYWxMaW5rcyIsInNob3dQYXNzd29yZCIsInNldFNob3dQYXNzd29yZCIsImVycm9yTXNnIiwic2V0RXJyb3JNc2ciLCJmcm9tTG9hZGluZyIsInNldEZvcm1Mb2FkaW5nIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInVzZXJuYW1lTG9hZGluZyIsInNldFVzZXJuYW1lTG9hZGluZyIsInVzZXJhbWVBdmFpbGFibGUiLCJzZXRVc2VyYW1lQXZhaWxhYmxlIiwic3VibWl0RGlzYWJsZWQiLCJzZXRTdWJtaXREaXNhYmxlZCIsIm1lZGlhIiwidXNlUmVmIiwiaGFuZGxlU3VibWl0IiwicHJ2ZW50RGVmYXVsdCIsInVzZUVmZmVjdCIsImlzVXNlciIsIk9iamVjdCIsInZhbHVlcyIsImV2ZXJ5IiwiaXRlbSIsIkJvb2xlYW4iLCJzZXRlcnJvck1zZyIsImNpcmN1bGFyIiwibGluayIsIm9uQ2xp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LEVBQUMsUUFEUDtBQUVFLFdBQU8sRUFBQyxvQkFGVjtBQUdFLFFBQUksRUFBQyxRQUhQO0FBSUUsU0FBSyxFQUFDLE9BSlI7QUFLRSxZQUFRLEVBQUV5RCxjQUFjLElBQUksQ0FBQ0YsZ0JBTC9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqRkYsQ0FaRixDQUZGLEVBeUdFLE1BQUMsNEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXpHRixDQURGO0FBNkdEOztBQUVELCtEQUFlcEIsTUFBZixFOzs7Ozs7Ozs7OztBQ3RMQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvc2lnbnVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSwgU2VnbWVudCwgSW1hZ2UsIEljb24sIEhlYWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuXG5mdW5jdGlvbiBJbWFnZURyb3Aoe1xuICBoaWdobGlnaHRlZCxcbiAgc2V0SGlnaGxpZ2h0ZWQsXG4gIGlucHV0UmVmLFxuICBoYW5kbGVDaGFuZ2UsXG4gIG1lZGlhUHJldmlldyxcbiAgc2V0TWVkaWFQcmV2aWV3LFxuICBzZXRNZWRpYSxcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlZ21lbnQgcGxhY2Vob2xkZXIgYmFzaWMgc2Vjb25kYXJ5PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIG5hbWU9XCJtZWRpYVwiXG4gICAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgLz5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgb25EcmFnT3Zlcj17KGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkKHRydWUpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgb25EcmFnTGVhdmU9eyhlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZXRIaWdobGlnaHRlZChmYWxzZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkRyb3A9eyhlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZXRIaWdobGlnaHRlZCh0cnVlKTtcblxuICAgICAgICAgICAgY29uc3QgZHJvcGVkRmlsZSA9IEFycmF5LmZyb20oZS5kYXRhVHJhbnNmZXIuZmlsZXMpO1xuICAgICAgICAgICAgc2V0TWVkaWEoZHJvcGVkRmlsZVswXSk7XG4gICAgICAgICAgICBzZXRNZWRpYVByZXZpZXcoVVJMLmNyZWF0ZU9iamVjdFVSTChkcm9wZWRGaWxlWzBdKSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHttZWRpYVByZXZpZXcgPT09IG51bGwgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8U2VnbWVudCBjb2xvcj17aGlnaGxpZ2h0ZWQgPyBcIm9saXZlXCIgOiBcIlwifSBwbGFjZWhvbGRlciBiYXNpYz5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIGljb24+XG4gICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlsZSBpbWFnZSBvdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpbnB1dFJlZi5jdXJyZW50LmNsaWNrKCl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAg2KXYuNin2YHYqSDYtdmI2LHYqSDZhNmF2YTZgdmDINin2YTYtNiu2LXZilxuICAgICAgICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPFNlZ21lbnQgY29sb3I9XCJvbGl2ZVwiIHBsYWNlaG9sZGVyIGJhc2ljPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgc3JjPXttZWRpYVByZXZpZXd9XG4gICAgICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCJcbiAgICAgICAgICAgICAgICAgIGNlbnRlcmVkXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpbnB1dFJlZi5jdXJyZW50LmNsaWNrKCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1NlZ21lbnQ+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlRHJvcDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBGb3JtLFxyXG4gIEJ1dHRvbixcclxuICBNZXNzYWdlLFxyXG4gIFNlZ21lbnQsXHJcbiAgVGV4dEFyZWEsXHJcbiAgRGl2aWRlcixcclxufSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIFNoYXJlZElucHV0cyh7XHJcbiAgdXNlcjogeyBiaW8sIHNuYXBjaGF0LCB0d2l0dGVyLCBpbnN0YWdyYW0sIGZhY2Vib29rLCB5b3V0dWJlIH0sXHJcbiAgaGFuZGxlQ2hhbmdlLFxyXG4gIHNob3dTb2NpYWxMaW5rcyxcclxuICBzZXRzaG93U29jaWFsTGlua3MsXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm0uRmllbGRcclxuICAgICAgICBjb250cm9sPXtUZXh0QXJlYX1cclxuICAgICAgICBuYW1lPVwiYmlvXCJcclxuICAgICAgICB2YWx1ZT17YmlvfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCLYqti52LHZitmBINi52YbZilwiXHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgY29udGVudD1cItit2LPYp9io2KfYqiDYp9mE2KrZiNin2LXZhCDYp9mE2KXYrNiq2YXYp9i52YpcIlxyXG4gICAgICAgIGNvbG9yPVwib2xpdmVcIlxyXG4gICAgICAgIGljb249XCJhdFwiXHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0c2hvd1NvY2lhbExpbmtzKCFzaG93U29jaWFsTGlua3MpfVxyXG4gICAgICAvPlxyXG5cclxuICAgICAge3Nob3dTb2NpYWxMaW5rcyAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICBpY29uPVwic25hcGNoYXQgZ2hvc3RcIlxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgbmFtZT1cInNuYXBjaGF0XCJcclxuICAgICAgICAgICAgdmFsdWU9e3NuYXBjaGF0fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICBpY29uPVwidHdpdHRlclwiXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICBuYW1lPVwidHdpdHRlclwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt0d2l0dGVyfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICBpY29uPVwiaW5zdGFncmFtXCJcclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJpbnN0YWdyYW1cIlxyXG4gICAgICAgICAgICB2YWx1ZT17aW5zdGFncmFtfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICBpY29uPVwiZmFjZWJvb2tcIlxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgbmFtZT1cImZhY2Vib29rXCJcclxuICAgICAgICAgICAgdmFsdWU9e2ZhY2Vib29rfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICBpY29uPVwieW91dHViZVwiXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICBuYW1lPVwieW91dHViZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt5b3V0dWJlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8TWVzc2FnZVxyXG4gICAgICAgICAgICBpY29uPVwiYXR0ZW50aW9uXCJcclxuICAgICAgICAgICAgaW5mb1xyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICBoZWFkZXI9XCLYrdiz2KfYqNin2Kog2KfZhNiq2YjYp9i12YQg2KfZhNil2KzYqtmF2KfYudmKINil2K7YqtmK2KfYsdmK2KlcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNoYXJlZElucHV0cztcclxuIiwiaW1wb3J0IHsgSWNvbiwgTWVzc2FnZSwgRGl2aWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlck1lc3NhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3Qgc2lnbnVwUm91dGUgPSByb3V0ZXIucGF0aG5hbWUgPT09IFwiL3NpZ251cFwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1lc3NhZ2VcclxuICAgICAgY29sb3I9XCJvbGl2ZVwiXHJcbiAgICAgIGF0dGFjaGVkXHJcbiAgICAgIGhlYWRlcj17c2lnbnVwUm91dGUgPyBcItil2KjYr9ijINio2KfZhNiq2LPYrNmK2YRcIiA6IFwi2YXYsdit2KjYpyDYqNi52YjYr9iq2YNcIn1cclxuICAgICAgaWNvbj17c2lnbnVwUm91dGUgPyBcInNldHRpbmdzXCIgOiBcInByaXZhY3lcIn1cclxuICAgICAgY29udGVudD17XHJcbiAgICAgICAgc2lnbnVwUm91dGVcclxuICAgICAgICAgID8gXCLYs9is2YQg2K3Ys9in2Kgg2KzYr9mK2K9cIlxyXG4gICAgICAgICAgOiBcItin2YTYr9iu2YjZhCDYqNin2LPYqtiu2K/Yp9mFINin2YTYqNix2YrYryDYp9mE2KXZg9iq2LHZiNmG2Yog2YjZg9mE2YXYqSDYp9mE2YXYsdmI2LFcIlxyXG4gICAgICB9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyTWVzc2FnZSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBzaWdudXBSb3V0ZSA9IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvc2lnbnVwXCI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7c2lnbnVwUm91dGUgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxNZXNzYWdlIGF0dGFjaGVkPVwiYm90dG9tXCIgd2FybmluZz5cclxuICAgICAgICAgICAgPEljb24gbmFtZT1cIndhcm5pbmdcIiAvPlxyXG4gICAgICAgICAgICDZhdiz2KzZhCDZhdmGINmC2KjZhCA8TGluayBocmVmPVwiL2xvZ2luXCI+2KfZhNiv2K7ZiNmEINmH2YbYpzwvTGluaz5cclxuICAgICAgICAgIDwvTWVzc2FnZT5cclxuICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8TWVzc2FnZSBhdHRhY2hlZD1cImJvdHRvbVwiIGluZm8+XHJcbiAgICAgICAgICAgIDxJY29uIG5hbWU9XCJsb2NrXCIgLz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZXNldFwiPtmH2YQg2YbYs9mK2Kog2YPZhNmF2Kkg2KfZhNmF2LHZiNixINifPC9MaW5rPlxyXG4gICAgICAgICAgPC9NZXNzYWdlPlxyXG5cclxuICAgICAgICAgIDxNZXNzYWdlIGF0dGFjaGVkPVwiYm90dG9tXCIgd2FybmluZz5cclxuICAgICAgICAgICAgPEljb24gbmFtZT1cIndhcm5pbmdcIiAvPlxyXG4gICAgICAgICAgICDYutmK2LEg2YXYs9is2YQgPExpbmsgaHJlZj1cIi9zaWdudXBcIj7Ys9is2YQg2YfZhtinPC9MaW5rPlxyXG4gICAgICAgICAgPC9NZXNzYWdlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEZvcm0sXHJcbiAgQnV0dG9uLFxyXG4gIE1lc3NhZ2UsXHJcbiAgU2VnbWVudCxcclxuICBUZXh0QXJlYSxcclxuICBEaXZpZGVyLFxyXG4gIEl0ZW0sXHJcbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIEhlYWRlck1lc3NhZ2UsXHJcbiAgRm9vdGVyTWVzc2FnZSxcclxufSBmcm9tIFwiLi4vY29tcG9uZW50cy9TaGFyZWQvV2VsY29tZU1lc3NhZ2VcIjtcclxuaW1wb3J0IFNoYXJlZElucHV0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9TaGFyZWQvU2hhcmVkSW5wdXRzXCI7XHJcbmltcG9ydCBJbWFnZURyb3AgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2hhcmVkL0ltYWdlRHJvcFwiO1xyXG5cclxuY29uc3QgcmVnZXhVc2VyTmFtZSA9IC9eKD8hLipcXC5cXC4pKD8hLipcXC4kKVteXFxXXVtcXHcuXXswLDI5fSQvO1xyXG5cclxuZnVuY3Rpb24gU2lnbnVwKCkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgYmlvOiBcIlwiLFxyXG4gICAgc25hcGNoYXQ6IFwiXCIsXHJcbiAgICB0d2l0dGVyOiBcIlwiLFxyXG4gICAgaW5zdGFncmFtOiBcIlwiLFxyXG4gICAgZmFjZWJvb2s6IFwiXCIsXHJcbiAgICB5b3V0dWJlOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCwgYmlvIH0gPSB1c2VyO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSwgZmlsZXMgfSA9IGUudGFyZ2V0O1xyXG5cclxuICAgIGlmIChuYW1lID09PSBcIm1lZGlhXCIpIHtcclxuICAgICAgc2V0TWVkaWEoZmlsZXNbMF0pO1xyXG4gICAgICBzZXRNZWRpYVByZXZpZXcoVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlc1swXSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFVzZXIoKHByZXYpID0+ICh7IC4uLnByZXYsIFtuYW1lXTogdmFsdWUgfSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtzaG93U29jaWFsTGlua3MsIHNldFNob3dTb2NpYWxMaW5rc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dQYXNzd29yZCwgc2V0U2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3JNc2csIHNldEVycm9yTXNnXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtmcm9tTG9hZGluZywgc2V0Rm9ybUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiIFwiKTtcclxuICBjb25zdCBbdXNlcm5hbWVMb2FkaW5nLCBzZXRVc2VybmFtZUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt1c2VyYW1lQXZhaWxhYmxlLCBzZXRVc2VyYW1lQXZhaWxhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc3VibWl0RGlzYWJsZWQsIHNldFN1Ym1pdERpc2FibGVkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAvLyBEcmFnIG4gRHJvcCBpbWFnZVxyXG4gIGNvbnN0IFttZWRpYSwgc2V0TWVkaWFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW21lZGlhUHJldmlldywgc2V0TWVkaWFQcmV2aWV3XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtoaWdobGlnaHRlZCwgc2V0SGlnaGxpZ2h0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiBlLnBydmVudERlZmF1bHQoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGlzVXNlciA9IE9iamVjdC52YWx1ZXMoeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSkuZXZlcnkoKGl0ZW0pID0+XHJcbiAgICAgIEJvb2xlYW4oaXRlbSlcclxuICAgICk7XHJcbiAgICBpc1VzZXIgPyBzZXRTdWJtaXREaXNhYmxlZChmYWxzZSkgOiBzZXRTdWJtaXREaXNhYmxlZCh0cnVlKTtcclxuICB9LCBbdXNlcl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlck1lc3NhZ2UgLz5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBsb2FkaW5nPXtmcm9tTG9hZGluZ31cclxuICAgICAgICBlcnJvcj17ZXJyb3JNc2cgIT09IG51bGx9XHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgPlxyXG4gICAgICAgIDxNZXNzYWdlXHJcbiAgICAgICAgICBlcnJvclxyXG4gICAgICAgICAgaGVhZGVyPVwiT29wcyFcIlxyXG4gICAgICAgICAgY29udGVudD17ZXJyb3JNc2d9XHJcbiAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldGVycm9yTXNnKG51bGwpfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxTZWdtZW50PlxyXG4gICAgICAgICAgPEltYWdlRHJvcFxyXG4gICAgICAgICAgICBtZWRpYVByZXZpZXc9e21lZGlhUHJldmlld31cclxuICAgICAgICAgICAgc2V0TWVkaWFQcmV2aWV3PXtzZXRNZWRpYVByZXZpZXd9XHJcbiAgICAgICAgICAgIHNldE1lZGlhPXtzZXRNZWRpYX1cclxuICAgICAgICAgICAgaW5wdXRSZWY9e2lucHV0UmVmfVxyXG4gICAgICAgICAgICBoaWdobGlnaHRlZD17aGlnaGxpZ2h0ZWR9XHJcbiAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkPXtzZXRIaWdobGlnaHRlZH1cclxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgbGFiZWw9XCLYp9mE2KXYs9mFXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLYp9mE2KXYs9mFXCJcclxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgaWNvbj1cInVzZXJcIlxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgbGFiZWw9XCLYp9mE2KjYsdmK2K8g2KfZhNil2YPYqtix2YjZhtmKXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLYp9mE2KjYsdmK2K8g2KfZhNil2YPYqtix2YjZhtmKXCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICBpY29uPVwiZW52ZWxvcGVcIlxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgbGFiZWw9XCLYp9mE2KjYsdmK2K8g2KfZhNil2YPYqtix2YjZhtmKXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLYp9mE2KjYsdmK2K8g2KfZhNil2YPYqtix2YjZhtmKXCJcclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICBpY29uPXt7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJleWVcIixcclxuICAgICAgICAgICAgICBjaXJjdWxhcjogdHJ1ZSxcclxuICAgICAgICAgICAgICBsaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHNldFNob3dQYXNzd29yZCghc2hvd1Bhc3N3b3JkKSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIHR5cGU9e3Nob3dQYXNzd29yZCA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICBsb2FkaW5nPXt1c2VybmFtZUxvYWRpbmd9XHJcbiAgICAgICAgICAgIGVycm9yPXshdXNlcmFtZUF2YWlsYWJsZX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgbGFiZWw9XCLYp9iz2YUg2KfZhNmF2LPYqtiu2K/ZhVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi2KfYs9mFINin2YTZhdiz2KrYrtiv2YVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICBpZiAocmVnZXhVc2VyTmFtZS50ZXN0KGUudGFyZ2V0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgc2V0VXNlcmFtZUF2YWlsYWJsZSh0cnVlKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0VXNlcmFtZUF2YWlsYWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICBpY29uPXt1c2VyYW1lQXZhaWxhYmxlID8gXCJjaGVja1wiIDogXCJjbG9zZVwifVxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPFNoYXJlZElucHV0c1xyXG4gICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICBzaG93U29jaWFsTGlua3M9e3Nob3dTb2NpYWxMaW5rc31cclxuICAgICAgICAgICAgc2V0c2hvd1NvY2lhbExpbmtzPXtzZXRTaG93U29jaWFsTGlua3N9XHJcbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgaWNvbj1cInNpZ251cFwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCLYs9is2YRcIlxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgY29sb3I9XCJvbGl2ZVwiXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtzdWJtaXREaXNhYmxlZCB8fCAhdXNlcmFtZUF2YWlsYWJsZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICA8L0Zvcm0+XHJcblxyXG4gICAgICA8Rm9vdGVyTWVzc2FnZSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==