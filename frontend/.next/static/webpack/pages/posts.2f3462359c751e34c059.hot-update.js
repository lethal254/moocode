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

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/media/lethal/New Volume2/projects/Moocode/frontend/components/PostCard.js\",\n    _this = undefined;\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div.withConfig({\n  displayName: \"PostCard__Container\",\n  componentId: \"sc-1drl57f-0\"\n})([\"display:flex;padding:1rem;border-radius:8px;cursor:pointer;transition:all 0.25s ease;margin-top:1rem;&:hover{background-color:#a2a2a2;}\"]);\n_c = Container;\nvar CardLeft = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div.withConfig({\n  displayName: \"PostCard__CardLeft\",\n  componentId: \"sc-1drl57f-1\"\n})([\"color:white;margin-right:0.5rem;\"]);\n_c2 = CardLeft;\nvar CardRight = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div.withConfig({\n  displayName: \"PostCard__CardRight\",\n  componentId: \"sc-1drl57f-2\"\n})([\"width:100%;height:100%;flex:1;\"]);\n_c3 = CardRight;\nvar UserTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.h2.withConfig({\n  displayName: \"PostCard__UserTitle\",\n  componentId: \"sc-1drl57f-3\"\n})([\"font-size:\", \";color:White;font-weight:bold;margin-bottom:1rem;\"], function (props) {\n  return props.theme.fontSize.normaText;\n});\n_c4 = UserTitle;\nvar PostText = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.p.withConfig({\n  displayName: \"PostCard__PostText\",\n  componentId: \"sc-1drl57f-4\"\n})([\"font-size:\", \";color:white;margin-top:1rem;line-height:25px;\"], function (props) {\n  return props.theme.fontSize.normaText;\n});\n_c5 = PostText;\nvar PostImage = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div.withConfig({\n  displayName: \"PostCard__PostImage\",\n  componentId: \"sc-1drl57f-5\"\n})([\"width:100%;height:200px;display:flex;align-items:center;justify-content:center;\"]);\n_c6 = PostImage;\nvar ImageImg = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.img.withConfig({\n  displayName: \"PostCard__ImageImg\",\n  componentId: \"sc-1drl57f-6\"\n})([\"max-height:100%;max-width:100%;object-fit:cover;\"]);\n_c7 = ImageImg;\n\nvar PostCard = function PostCard(_ref) {\n  var image = _ref.image,\n      imageUrl = _ref.imageUrl,\n      body = _ref.body,\n      creator = _ref.creator;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CardLeft, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Avatar, {\n        style: {\n          width: \"70px\",\n          height: \"70px\"\n        },\n        src: \"https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CardRight, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserTitle, {\n        children: creator\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostText, {\n        children: body\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, _this), image ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostImage, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageImg, {\n          src: imageUrl,\n          alt: \"Hero image\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 11\n      }, _this) : \"\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 5\n  }, _this);\n};\n\n_c8 = PostCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCard);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"CardLeft\");\n$RefreshReg$(_c3, \"CardRight\");\n$RefreshReg$(_c4, \"UserTitle\");\n$RefreshReg$(_c5, \"PostText\");\n$RefreshReg$(_c6, \"PostImage\");\n$RefreshReg$(_c7, \"ImageImg\");\n$RefreshReg$(_c8, \"PostCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RDYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUUsU0FBUyxHQUFHRCxxRUFBSDtBQUFBO0FBQUE7QUFBQSwrSUFBZjtLQUFNQztBQVlOLElBQU1FLFFBQVEsR0FBR0gscUVBQUg7QUFBQTtBQUFBO0FBQUEsd0NBQWQ7TUFBTUc7QUFJTixJQUFNQyxTQUFTLEdBQUdKLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHNDQUFmO01BQU1JO0FBS04sSUFBTUMsU0FBUyxHQUFHTCxvRUFBSDtBQUFBO0FBQUE7QUFBQSx3RUFDQSxVQUFDTyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFFBQVosQ0FBcUJDLFNBQWhDO0FBQUEsQ0FEQSxDQUFmO01BQU1MO0FBT04sSUFBTU0sUUFBUSxHQUFHWCxtRUFBSDtBQUFBO0FBQUE7QUFBQSxxRUFDQyxVQUFDTyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFFBQVosQ0FBcUJDLFNBQWhDO0FBQUEsQ0FERCxDQUFkO01BQU1DO0FBTU4sSUFBTUUsU0FBUyxHQUFHYixxRUFBSDtBQUFBO0FBQUE7QUFBQSx1RkFBZjtNQUFNYTtBQVFOLElBQU1DLFFBQVEsR0FBR2QscUVBQUg7QUFBQTtBQUFBO0FBQUEsd0RBQWQ7TUFBTWM7O0FBTU4sSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBd0M7QUFBQSxNQUFyQ0MsS0FBcUMsUUFBckNBLEtBQXFDO0FBQUEsTUFBOUJDLFFBQThCLFFBQTlCQSxRQUE4QjtBQUFBLE1BQXBCQyxJQUFvQixRQUFwQkEsSUFBb0I7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDdkQsc0JBQ0UsOERBQUMsU0FBRDtBQUFBLDRCQUNFLDhEQUFDLFFBQUQ7QUFBQSw2QkFDRSw4REFBQyxxREFBRDtBQUNFLGFBQUssRUFBRTtBQUFFQyxVQUFBQSxLQUFLLEVBQUUsTUFBVDtBQUFpQkMsVUFBQUEsTUFBTSxFQUFFO0FBQXpCLFNBRFQ7QUFFRSxXQUFHLEVBQUM7QUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBT0UsOERBQUMsU0FBRDtBQUFBLDhCQUNFLDhEQUFDLFNBQUQ7QUFBQSxrQkFBWUY7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSw4REFBQyxRQUFEO0FBQUEsa0JBQVdEO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLEVBR0dGLEtBQUssZ0JBQ0osOERBQUMsU0FBRDtBQUFBLCtCQUNFLDhEQUFDLFFBQUQ7QUFBVSxhQUFHLEVBQUVDLFFBQWY7QUFBeUIsYUFBRyxFQUFDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREksR0FLSixFQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcUJELENBdEJEOztNQUFNRjtBQXdCTiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bvc3RDYXJkLmpzPzkxZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTJhMmEyO1xuICB9XG5gXG5cbmNvbnN0IENhcmRMZWZ0ID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbmBcbmNvbnN0IENhcmRSaWdodCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsZXg6IDE7XG5gXG5jb25zdCBVc2VyVGl0bGUgPSBzdHlsZWQuaDJgXG4gIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRTaXplLm5vcm1hVGV4dH07XG4gIGNvbG9yOiBXaGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG5gXG5cbmNvbnN0IFBvc3RUZXh0ID0gc3R5bGVkLnBgXG4gIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRTaXplLm5vcm1hVGV4dH07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG5gXG5jb25zdCBQb3N0SW1hZ2UgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gXG5cbmNvbnN0IEltYWdlSW1nID0gc3R5bGVkLmltZ2BcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbmBcblxuY29uc3QgUG9zdENhcmQgPSAoeyBpbWFnZSwgaW1hZ2VVcmwsIGJvZHksIGNyZWF0b3IgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8Q2FyZExlZnQ+XG4gICAgICAgIDxBdmF0YXJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI3MHB4XCIsIGhlaWdodDogXCI3MHB4XCIgfX1cbiAgICAgICAgICBzcmM9J2h0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTYvMTEvMTgvMjMvMzgvY2hpbGQtMTgzNzM3NV85NjBfNzIwLnBuZydcbiAgICAgICAgLz5cbiAgICAgIDwvQ2FyZExlZnQ+XG4gICAgICA8Q2FyZFJpZ2h0PlxuICAgICAgICA8VXNlclRpdGxlPntjcmVhdG9yfTwvVXNlclRpdGxlPlxuICAgICAgICA8UG9zdFRleHQ+e2JvZHl9PC9Qb3N0VGV4dD5cbiAgICAgICAge2ltYWdlID8gKFxuICAgICAgICAgIDxQb3N0SW1hZ2U+XG4gICAgICAgICAgICA8SW1hZ2VJbWcgc3JjPXtpbWFnZVVybH0gYWx0PSdIZXJvIGltYWdlJyAvPlxuICAgICAgICAgIDwvUG9zdEltYWdlPlxuICAgICAgICApIDogKFxuICAgICAgICAgIFwiXCJcbiAgICAgICAgKX1cbiAgICAgIDwvQ2FyZFJpZ2h0PlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkXG4iXSwibmFtZXMiOlsiQXZhdGFyIiwic3R5bGVkIiwiQ29udGFpbmVyIiwiZGl2IiwiQ2FyZExlZnQiLCJDYXJkUmlnaHQiLCJVc2VyVGl0bGUiLCJoMiIsInByb3BzIiwidGhlbWUiLCJmb250U2l6ZSIsIm5vcm1hVGV4dCIsIlBvc3RUZXh0IiwicCIsIlBvc3RJbWFnZSIsIkltYWdlSW1nIiwiaW1nIiwiUG9zdENhcmQiLCJpbWFnZSIsImltYWdlVXJsIiwiYm9keSIsImNyZWF0b3IiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PostCard.js\n");

/***/ })

});