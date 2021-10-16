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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_URL\": () => (/* binding */ API_URL),\n/* harmony export */   \"NEXT_URL\": () => (/* binding */ NEXT_URL)\n/* harmony export */ });\nconst API_URL = \"http://localhost:5000\";\nconst NEXT_URL = \"http://localhost:3000\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxNQUFNQSxPQUFPLEdBQUcsdUJBQWhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLHVCQUFqQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vY29uZmlnLmpzP2ExYmMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMFwiXG5leHBvcnQgY29uc3QgTkVYVF9VUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiXG4iXSwibmFtZXMiOlsiQVBJX1VSTCIsIk5FWFRfVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config.js\n");

/***/ }),

/***/ "./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ \"./config.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst login = async (req, res) => {\n  // Checking the request type i.e should be a POST  and then make our api call to the backend\n  if (req.method === \"POST\") {\n    const {\n      email,\n      password\n    } = req.body;\n    const config = {\n      headers: {\n        \"Content-Type\": \"application/json\"\n      }\n    };\n\n    try {\n      const {\n        data\n      } = await axios__WEBPACK_IMPORTED_MODULE_1___default().post(`${_config__WEBPACK_IMPORTED_MODULE_0__.API_URL}/api/auth/login`, {\n        email,\n        password\n      }, config); // Setting the cookie\n\n      res.setHeader(\"Set-Cookie\", cookie__WEBPACK_IMPORTED_MODULE_2___default().serialize(\"token\", data.token, {\n        httpOnly: true,\n        secure: false,\n        maxAge: 60 * 60 * 24 * 7,\n        //1 week\n        sameSite: \"strict\",\n        path: \"/\"\n      }));\n      res.status(200).send(data);\n    } catch (error) {\n      res.status(500).send(\"error\");\n      console.log(error);\n    }\n  } else {\n    res.setHeader(\"Allow\", [\"POST\"]);\n    res.status(405).json({\n      message: `Method ${req.method} not allowed`\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (login);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1HLEtBQUssR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDaEM7QUFDQSxNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN6QixVQUFNO0FBQUVDLE1BQUFBLEtBQUY7QUFBU0MsTUFBQUE7QUFBVCxRQUFzQkosR0FBRyxDQUFDSyxJQUFoQztBQUNBLFVBQU1DLE1BQU0sR0FBRztBQUNiQyxNQUFBQSxPQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVDtBQURJLEtBQWY7O0FBS0EsUUFBSTtBQUNGLFlBQU07QUFBRUMsUUFBQUE7QUFBRixVQUFXLE1BQU1YLGlEQUFBLENBQ3BCLEdBQUVELDRDQUFRLGlCQURVLEVBRXJCO0FBQUVPLFFBQUFBLEtBQUY7QUFBU0MsUUFBQUE7QUFBVCxPQUZxQixFQUdyQkUsTUFIcUIsQ0FBdkIsQ0FERSxDQU9GOztBQUNBTCxNQUFBQSxHQUFHLENBQUNTLFNBQUosQ0FDRSxZQURGLEVBRUVaLHVEQUFBLENBQWlCLE9BQWpCLEVBQTBCVSxJQUFJLENBQUNJLEtBQS9CLEVBQXNDO0FBQ3BDQyxRQUFBQSxRQUFRLEVBQUUsSUFEMEI7QUFFcENDLFFBQUFBLE1BQU0sT0FGOEI7QUFHcENDLFFBQUFBLE1BQU0sRUFBRSxLQUFLLEVBQUwsR0FBVSxFQUFWLEdBQWUsQ0FIYTtBQUdWO0FBQzFCQyxRQUFBQSxRQUFRLEVBQUUsUUFKMEI7QUFLcENDLFFBQUFBLElBQUksRUFBRTtBQUw4QixPQUF0QyxDQUZGO0FBV0FoQixNQUFBQSxHQUFHLENBQUNpQixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJYLElBQXJCO0FBQ0QsS0FwQkQsQ0FvQkUsT0FBT1ksS0FBUCxFQUFjO0FBQ2RuQixNQUFBQSxHQUFHLENBQUNpQixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsT0FBckI7QUFDQUUsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDRDtBQUNGLEdBL0JELE1BK0JPO0FBQ0xuQixJQUFBQSxHQUFHLENBQUNTLFNBQUosQ0FBYyxPQUFkLEVBQXVCLENBQUMsTUFBRCxDQUF2QjtBQUNBVCxJQUFBQSxHQUFHLENBQUNpQixNQUFKLENBQVcsR0FBWCxFQUFnQkssSUFBaEIsQ0FBcUI7QUFBRUMsTUFBQUEsT0FBTyxFQUFHLFVBQVN4QixHQUFHLENBQUNFLE1BQU87QUFBaEMsS0FBckI7QUFDRDtBQUNGLENBckNEOztBQXVDQSxpRUFBZUgsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvYXBpL2xvZ2luLmpzPzAzODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCIuLi8uLi9jb25maWdcIlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5pbXBvcnQgY29va2llIGZyb20gXCJjb29raWVcIlxuXG5jb25zdCBsb2dpbiA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAvLyBDaGVja2luZyB0aGUgcmVxdWVzdCB0eXBlIGkuZSBzaG91bGQgYmUgYSBQT1NUICBhbmQgdGhlbiBtYWtlIG91ciBhcGkgY2FsbCB0byB0aGUgYmFja2VuZFxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHlcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgYCR7QVBJX1VSTH0vYXBpL2F1dGgvbG9naW5gLFxuICAgICAgICB7IGVtYWlsLCBwYXNzd29yZCB9LFxuICAgICAgICBjb25maWdcbiAgICAgIClcblxuICAgICAgLy8gU2V0dGluZyB0aGUgY29va2llXG4gICAgICByZXMuc2V0SGVhZGVyKFxuICAgICAgICBcIlNldC1Db29raWVcIixcbiAgICAgICAgY29va2llLnNlcmlhbGl6ZShcInRva2VuXCIsIGRhdGEudG9rZW4sIHtcbiAgICAgICAgICBodHRwT25seTogdHJ1ZSxcbiAgICAgICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcImRldmVsb3BtZW50XCIsXG4gICAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiA3LCAvLzEgd2Vla1xuICAgICAgICAgIHNhbWVTaXRlOiBcInN0cmljdFwiLFxuICAgICAgICAgIHBhdGg6IFwiL1wiLFxuICAgICAgICB9KVxuICAgICAgKVxuXG4gICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChkYXRhKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZChcImVycm9yXCIpXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzLnNldEhlYWRlcihcIkFsbG93XCIsIFtcIlBPU1RcIl0pXG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiBgTWV0aG9kICR7cmVxLm1ldGhvZH0gbm90IGFsbG93ZWRgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9naW5cbiJdLCJuYW1lcyI6WyJBUElfVVJMIiwiYXhpb3MiLCJjb29raWUiLCJsb2dpbiIsInJlcSIsInJlcyIsIm1ldGhvZCIsImVtYWlsIiwicGFzc3dvcmQiLCJib2R5IiwiY29uZmlnIiwiaGVhZGVycyIsImRhdGEiLCJwb3N0Iiwic2V0SGVhZGVyIiwic2VyaWFsaXplIiwidG9rZW4iLCJodHRwT25seSIsInNlY3VyZSIsIm1heEFnZSIsInNhbWVTaXRlIiwicGF0aCIsInN0YXR1cyIsInNlbmQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/login.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/login.js"));
module.exports = __webpack_exports__;

})();