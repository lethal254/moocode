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
exports.id = "pages/api/signup";
exports.ids = ["pages/api/signup"];
exports.modules = {

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_URL\": () => (/* binding */ API_URL),\n/* harmony export */   \"NEXT_URL\": () => (/* binding */ NEXT_URL)\n/* harmony export */ });\nconst API_URL = \"http://localhost:5000\";\nconst NEXT_URL = \"http://localhost:3000\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxNQUFNQSxPQUFPLEdBQUcsdUJBQWhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLHVCQUFqQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vY29uZmlnLmpzP2ExYmMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMFwiXG5leHBvcnQgY29uc3QgTkVYVF9VUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiXG4iXSwibmFtZXMiOlsiQVBJX1VSTCIsIk5FWFRfVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config.js\n");

/***/ }),

/***/ "./pages/api/signup.js":
/*!*****************************!*\
  !*** ./pages/api/signup.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ \"./config.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst signup = async (req, res) => {\n  // Checking the request type i.e should be a POST  and then make our api call to the backend\n  if (req.method === \"POST\") {\n    const {\n      email,\n      fullName,\n      username,\n      password\n    } = req.body;\n    const config = {\n      headers: {\n        \"Content-Type\": \"application/json\"\n      }\n    };\n\n    try {\n      const {\n        data\n      } = await axios__WEBPACK_IMPORTED_MODULE_1___default().post(`${_config__WEBPACK_IMPORTED_MODULE_0__.API_URL}/api/auth/signup`, {\n        email,\n        fullName,\n        username,\n        password\n      }, config);\n      res.status(200).send(data);\n    } catch (error) {\n      res.status(500).send(\"error\");\n      console.log(error);\n    }\n  } else {\n    res.setHeader(\"Allow\", [\"POST\"]);\n    res.status(405).json({\n      message: `Method ${req.method} not allowed`\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (signup);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvc2lnbnVwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNRyxNQUFNLEdBQUcsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2pDO0FBQ0EsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDekIsVUFBTTtBQUFFQyxNQUFBQSxLQUFGO0FBQVNDLE1BQUFBLFFBQVQ7QUFBbUJDLE1BQUFBLFFBQW5CO0FBQTZCQyxNQUFBQTtBQUE3QixRQUEwQ04sR0FBRyxDQUFDTyxJQUFwRDtBQUNBLFVBQU1DLE1BQU0sR0FBRztBQUNiQyxNQUFBQSxPQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVDtBQURJLEtBQWY7O0FBS0EsUUFBSTtBQUNGLFlBQU07QUFBRUMsUUFBQUE7QUFBRixVQUFXLE1BQU1iLGlEQUFBLENBQ3BCLEdBQUVELDRDQUFRLGtCQURVLEVBRXJCO0FBQUVPLFFBQUFBLEtBQUY7QUFBU0MsUUFBQUEsUUFBVDtBQUFtQkMsUUFBQUEsUUFBbkI7QUFBNkJDLFFBQUFBO0FBQTdCLE9BRnFCLEVBR3JCRSxNQUhxQixDQUF2QjtBQU1BUCxNQUFBQSxHQUFHLENBQUNXLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkgsSUFBckI7QUFDRCxLQVJELENBUUUsT0FBT0ksS0FBUCxFQUFjO0FBQ2RiLE1BQUFBLEdBQUcsQ0FBQ1csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLE9BQXJCO0FBQ0FFLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0Q7QUFDRixHQW5CRCxNQW1CTztBQUNMYixJQUFBQSxHQUFHLENBQUNnQixTQUFKLENBQWMsT0FBZCxFQUF1QixDQUFDLE1BQUQsQ0FBdkI7QUFDQWhCLElBQUFBLEdBQUcsQ0FBQ1csTUFBSixDQUFXLEdBQVgsRUFBZ0JNLElBQWhCLENBQXFCO0FBQUVDLE1BQUFBLE9BQU8sRUFBRyxVQUFTbkIsR0FBRyxDQUFDRSxNQUFPO0FBQWhDLEtBQXJCO0FBQ0Q7QUFDRixDQXpCRDs7QUEyQkEsaUVBQWVILE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2FwaS9zaWdudXAuanM/OWM2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUElfVVJMIH0gZnJvbSBcIi4uLy4uL2NvbmZpZ1wiXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcbmltcG9ydCBjb29raWUgZnJvbSBcImNvb2tpZVwiXG5cbmNvbnN0IHNpZ251cCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAvLyBDaGVja2luZyB0aGUgcmVxdWVzdCB0eXBlIGkuZSBzaG91bGQgYmUgYSBQT1NUICBhbmQgdGhlbiBtYWtlIG91ciBhcGkgY2FsbCB0byB0aGUgYmFja2VuZFxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBjb25zdCB7IGVtYWlsLCBmdWxsTmFtZSwgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSByZXEuYm9keVxuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICBgJHtBUElfVVJMfS9hcGkvYXV0aC9zaWdudXBgLFxuICAgICAgICB7IGVtYWlsLCBmdWxsTmFtZSwgdXNlcm5hbWUsIHBhc3N3b3JkIH0sXG4gICAgICAgIGNvbmZpZ1xuICAgICAgKVxuXG4gICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChkYXRhKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZChcImVycm9yXCIpXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzLnNldEhlYWRlcihcIkFsbG93XCIsIFtcIlBPU1RcIl0pXG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiBgTWV0aG9kICR7cmVxLm1ldGhvZH0gbm90IGFsbG93ZWRgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2lnbnVwXG4iXSwibmFtZXMiOlsiQVBJX1VSTCIsImF4aW9zIiwiY29va2llIiwic2lnbnVwIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZW1haWwiLCJmdWxsTmFtZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJib2R5IiwiY29uZmlnIiwiaGVhZGVycyIsImRhdGEiLCJwb3N0Iiwic3RhdHVzIiwic2VuZCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNldEhlYWRlciIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/signup.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/signup.js"));
module.exports = __webpack_exports__;

})();