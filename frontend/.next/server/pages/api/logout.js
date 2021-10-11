"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/logout";
exports.ids = ["pages/api/logout"];
exports.modules = {

/***/ "./pages/api/logout.js":
/*!*****************************!*\
  !*** ./pages/api/logout.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst logout = async (req, res) => {\n  if (req.method === \"POST\") {\n    // Destroy the cookie\n    res.setHeader(\"Set-Cookie\", cookie__WEBPACK_IMPORTED_MODULE_0___default().serialize(\"token\", \"\", {\n      httpOnly: true,\n      secure: false,\n      expires: new Date(0),\n      sameSite: \"strict\",\n      path: \"/\"\n    }));\n    res.status(200).send();\n  } else {\n    res.setHeader(\"Allow\", [\"POST\"]);\n    res.status(405).json({\n      message: `Method ${req.method} not allowed`\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvbG9nb3V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBLE1BQU1DLE1BQU0sR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDakMsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDekI7QUFDQUQsSUFBQUEsR0FBRyxDQUFDRSxTQUFKLENBQ0UsWUFERixFQUVFTCx1REFBQSxDQUFpQixPQUFqQixFQUEwQixFQUExQixFQUE4QjtBQUM1Qk8sTUFBQUEsUUFBUSxFQUFFLElBRGtCO0FBRTVCQyxNQUFBQSxNQUFNLE9BRnNCO0FBRzVCQyxNQUFBQSxPQUFPLEVBQUUsSUFBSUMsSUFBSixDQUFTLENBQVQsQ0FIbUI7QUFJNUJDLE1BQUFBLFFBQVEsRUFBRSxRQUprQjtBQUs1QkMsTUFBQUEsSUFBSSxFQUFFO0FBTHNCLEtBQTlCLENBRkY7QUFXQVQsSUFBQUEsR0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEI7QUFDRCxHQWRELE1BY087QUFDTFgsSUFBQUEsR0FBRyxDQUFDRSxTQUFKLENBQWMsT0FBZCxFQUF1QixDQUFDLE1BQUQsQ0FBdkI7QUFDQUYsSUFBQUEsR0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkUsSUFBaEIsQ0FBcUI7QUFBRUMsTUFBQUEsT0FBTyxFQUFHLFVBQVNkLEdBQUcsQ0FBQ0UsTUFBTztBQUFoQyxLQUFyQjtBQUNEO0FBQ0YsQ0FuQkQ7O0FBcUJBLGlFQUFlSCxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9hcGkvbG9nb3V0LmpzPzFiMjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvb2tpZSBmcm9tIFwiY29va2llXCJcblxuY29uc3QgbG9nb3V0ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIC8vIERlc3Ryb3kgdGhlIGNvb2tpZVxuICAgIHJlcy5zZXRIZWFkZXIoXG4gICAgICBcIlNldC1Db29raWVcIixcbiAgICAgIGNvb2tpZS5zZXJpYWxpemUoXCJ0b2tlblwiLCBcIlwiLCB7XG4gICAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcImRldmVsb3BtZW50XCIsXG4gICAgICAgIGV4cGlyZXM6IG5ldyBEYXRlKDApLFxuICAgICAgICBzYW1lU2l0ZTogXCJzdHJpY3RcIixcbiAgICAgICAgcGF0aDogXCIvXCIsXG4gICAgICB9KVxuICAgIClcblxuICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKClcbiAgfSBlbHNlIHtcbiAgICByZXMuc2V0SGVhZGVyKFwiQWxsb3dcIiwgW1wiUE9TVFwiXSlcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6IGBNZXRob2QgJHtyZXEubWV0aG9kfSBub3QgYWxsb3dlZGAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2dvdXRcbiJdLCJuYW1lcyI6WyJjb29raWUiLCJsb2dvdXQiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzZXRIZWFkZXIiLCJzZXJpYWxpemUiLCJodHRwT25seSIsInNlY3VyZSIsImV4cGlyZXMiLCJEYXRlIiwic2FtZVNpdGUiLCJwYXRoIiwic3RhdHVzIiwic2VuZCIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/logout.js\n");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/logout.js"));
module.exports = __webpack_exports__;

})();