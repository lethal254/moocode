"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _media_lethal_New_Volume2_projects_Moocode_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _media_lethal_New_Volume2_projects_Moocode_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _media_lethal_New_Volume2_projects_Moocode_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _media_lethal_New_Volume2_projects_Moocode_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_media_lethal_New_Volume2_projects_Moocode_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _contexts_appcontext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contexts/appcontext */ \"./contexts/appcontext.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Button */ \"./components/Button.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/media/lethal/New Volume2/projects/Moocode/frontend/components/Header.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_media_lethal_New_Volume2_projects_Moocode_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_10__.default.div.withConfig({\n  displayName: \"Header__Container\",\n  componentId: \"sc-1s2mubi-0\"\n})([\"height:8vh;margin-bottom:4vh;position:sticky;top:0;left:0;width:100%;display:flex;align-items:center;justify-content:space-between;@media (max-width:768px){padding:0 20px;}\"]);\n_c = Container;\nvar Left = styled_components__WEBPACK_IMPORTED_MODULE_10__.default.div.withConfig({\n  displayName: \"Header__Left\",\n  componentId: \"sc-1s2mubi-1\"\n})([\"flex:1;\"]);\n_c2 = Left;\nvar Right = styled_components__WEBPACK_IMPORTED_MODULE_10__.default.div.withConfig({\n  displayName: \"Header__Right\",\n  componentId: \"sc-1s2mubi-2\"\n})([\"flex:1;display:flex;align-items:center;justify-content:flex-end;\"]);\n_c3 = Right;\nvar Link = styled_components__WEBPACK_IMPORTED_MODULE_10__.default.a.withConfig({\n  displayName: \"Header__Link\",\n  componentId: \"sc-1s2mubi-3\"\n})([\"color:\", \";font-size:\", \";font-weight:bold;text-decoration:none;margin-right:2rem;cursor:pointer;@media (max-width:768px){font-size:\", \";margin-right:1rem;}\"], function (props) {\n  return props.theme.colors.text;\n}, function (props) {\n  return props.theme.fontSize.normalText;\n}, function (props) {\n  return props.theme.fontSize.normalTextPhone;\n});\n_c4 = Link;\n\nvar Header = function Header() {\n  _s();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_contexts_appcontext__WEBPACK_IMPORTED_MODULE_7__.default),\n      appData = _useContext[0],\n      setAppData = _useContext[1];\n\n  var handleLogout = /*#__PURE__*/function () {\n    var _ref = (0,_media_lethal_New_Volume2_projects_Moocode_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_media_lethal_New_Volume2_projects_Moocode_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n      return _media_lethal_New_Volume2_projects_Moocode_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return axios__WEBPACK_IMPORTED_MODULE_3___default().post(\"\".concat(_config__WEBPACK_IMPORTED_MODULE_6__.NEXT_URL, \"/api/logout\"));\n\n            case 2:\n              setAppData(_objectSpread(_objectSpread({}, appData), {}, {\n                authToken: \"\"\n              }));\n              router.push(\"/\");\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleLogout() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {\n    if (!appData.authToken) {\n      next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/\");\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(Left, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(Link, {\n        href: \"/\",\n        children: \"Moocode.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(Right, {\n      children: appData.authToken ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_8__.default, {\n        onClick: handleLogout,\n        children: \"Logout\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 11\n      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(Link, {\n          nav: true,\n          onClick: function onClick() {\n            setAppData({\n              popup: !appData.popup,\n              authType: \"login\"\n            });\n          },\n          children: \"Login\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_8__.default, {\n          onClick: function onClick() {\n            setAppData({\n              popup: !appData.popup,\n              authType: \"signup\"\n            });\n          },\n          children: \"Signup\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 61,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Header, \"7LfzLQZBx+OettbFkRLSZjtVzvA=\");\n\n_c5 = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"Left\");\n$RefreshReg$(_c3, \"Right\");\n$RefreshReg$(_c4, \"Link\");\n$RefreshReg$(_c5, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE0QkQsQ0EzQ0Q7O0dBQU1UOztNQUFBQTtBQTZDTiwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci5qcz82ZjRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcbmltcG9ydCB7IE5FWFRfVVJMIH0gZnJvbSBcIi4uL2NvbmZpZ1wiXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dHMvYXBwY29udGV4dFwiXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiXG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogOHZoO1xuICBtYXJnaW4tYm90dG9tOiA0dmg7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICB9XG5gXG5jb25zdCBMZWZ0ID0gc3R5bGVkLmRpdmBcbiAgZmxleDogMTtcbmBcbmNvbnN0IFJpZ2h0ID0gc3R5bGVkLmRpdmBcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbmBcbmNvbnN0IExpbmsgPSBzdHlsZWQuYWBcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGV4dH07XG4gIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRTaXplLm5vcm1hbFRleHR9O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZm9udC1zaXplOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udFNpemUubm9ybWFsVGV4dFBob25lfTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIH1cbmBcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBbYXBwRGF0YSwgc2V0QXBwRGF0YV0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpXG5cbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7TkVYVF9VUkx9L2FwaS9sb2dvdXRgKVxuICAgIHNldEFwcERhdGEoeyAuLi5hcHBEYXRhLCBhdXRoVG9rZW46IFwiXCIgfSlcbiAgICByb3V0ZXIucHVzaChcIi9cIilcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFhcHBEYXRhLmF1dGhUb2tlbikge1xuICAgICAgUm91dGVyLnB1c2goXCIvXCIpXG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8TGVmdD5cbiAgICAgICAgPExpbmsgaHJlZj0nLyc+TW9vY29kZS48L0xpbms+XG4gICAgICA8L0xlZnQ+XG4gICAgICA8UmlnaHQ+XG4gICAgICAgIHthcHBEYXRhLmF1dGhUb2tlbiA/IChcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+TG9nb3V0PC9CdXR0b24+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIG5hdlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0QXBwRGF0YSh7IHBvcHVwOiAhYXBwRGF0YS5wb3B1cCwgYXV0aFR5cGU6IFwibG9naW5cIiB9KVxuICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldEFwcERhdGEoeyBwb3B1cDogIWFwcERhdGEucG9wdXAsIGF1dGhUeXBlOiBcInNpZ251cFwiIH0pXG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICBTaWdudXBcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9SaWdodD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcbiJdLCJuYW1lcyI6WyJheGlvcyIsIlJvdXRlciIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJzdHlsZWQiLCJORVhUX1VSTCIsIkFwcENvbnRleHQiLCJCdXR0b24iLCJDb250YWluZXIiLCJkaXYiLCJMZWZ0IiwiUmlnaHQiLCJMaW5rIiwiYSIsInByb3BzIiwidGhlbWUiLCJjb2xvcnMiLCJ0ZXh0IiwiZm9udFNpemUiLCJub3JtYWxUZXh0Iiwibm9ybWFsVGV4dFBob25lIiwiSGVhZGVyIiwiYXBwRGF0YSIsInNldEFwcERhdGEiLCJoYW5kbGVMb2dvdXQiLCJwb3N0IiwiYXV0aFRva2VuIiwicm91dGVyIiwicHVzaCIsInBvcHVwIiwiYXV0aFR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

});