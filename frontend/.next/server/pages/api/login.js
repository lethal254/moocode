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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ \"./config.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst login = async (req, res) => {\n  // Checking the request type i.e should be a POST  and then make our api call to the backend\n  if (req.method === \"POST\") {\n    const {\n      email,\n      password\n    } = req.body;\n    console.log(email, password);\n    const config = {\n      headers: {\n        \"Content-Type\": \"application/json\"\n      }\n    };\n\n    try {\n      const {\n        data\n      } = await axios__WEBPACK_IMPORTED_MODULE_1___default().post(`${_config__WEBPACK_IMPORTED_MODULE_0__.API_URL}/api/auth/login`, {\n        email,\n        password\n      }, config); // Setting the cookie\n\n      res.setHeader(\"Set-Cookie\", cookie__WEBPACK_IMPORTED_MODULE_2___default().serialize(\"token\", data.token, {\n        httpOnly: true,\n        secure: false,\n        maxAge: 60 * 60 * 24 * 7,\n        //1 week\n        sameSite: \"strict\",\n        path: \"/\"\n      }));\n      res.status(200).send(data);\n    } catch (error) {\n      res.status(500).send(\"error\");\n      console.log(error);\n    }\n  } else {\n    res.setHeader(\"Allow\", [\"POST\"]);\n    res.status(405).json({\n      message: `Method ${req.method} not allowed`\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (login);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1HLEtBQUssR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDaEM7QUFDQSxNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN6QixVQUFNO0FBQUVDLE1BQUFBLEtBQUY7QUFBU0MsTUFBQUE7QUFBVCxRQUFzQkosR0FBRyxDQUFDSyxJQUFoQztBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosS0FBWixFQUFtQkMsUUFBbkI7QUFDQSxVQUFNSSxNQUFNLEdBQUc7QUFDYkMsTUFBQUEsT0FBTyxFQUFFO0FBQ1Asd0JBQWdCO0FBRFQ7QUFESSxLQUFmOztBQUtBLFFBQUk7QUFDRixZQUFNO0FBQUVDLFFBQUFBO0FBQUYsVUFBVyxNQUFNYixpREFBQSxDQUNwQixHQUFFRCw0Q0FBUSxpQkFEVSxFQUVyQjtBQUFFTyxRQUFBQSxLQUFGO0FBQVNDLFFBQUFBO0FBQVQsT0FGcUIsRUFHckJJLE1BSHFCLENBQXZCLENBREUsQ0FPRjs7QUFDQVAsTUFBQUEsR0FBRyxDQUFDVyxTQUFKLENBQ0UsWUFERixFQUVFZCx1REFBQSxDQUFpQixPQUFqQixFQUEwQlksSUFBSSxDQUFDSSxLQUEvQixFQUFzQztBQUNwQ0MsUUFBQUEsUUFBUSxFQUFFLElBRDBCO0FBRXBDQyxRQUFBQSxNQUFNLE9BRjhCO0FBR3BDQyxRQUFBQSxNQUFNLEVBQUUsS0FBSyxFQUFMLEdBQVUsRUFBVixHQUFlLENBSGE7QUFHVjtBQUMxQkMsUUFBQUEsUUFBUSxFQUFFLFFBSjBCO0FBS3BDQyxRQUFBQSxJQUFJLEVBQUU7QUFMOEIsT0FBdEMsQ0FGRjtBQVdBbEIsTUFBQUEsR0FBRyxDQUFDbUIsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCWCxJQUFyQjtBQUNELEtBcEJELENBb0JFLE9BQU9ZLEtBQVAsRUFBYztBQUNkckIsTUFBQUEsR0FBRyxDQUFDbUIsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLE9BQXJCO0FBQ0FmLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZSxLQUFaO0FBQ0Q7QUFDRixHQWhDRCxNQWdDTztBQUNMckIsSUFBQUEsR0FBRyxDQUFDVyxTQUFKLENBQWMsT0FBZCxFQUF1QixDQUFDLE1BQUQsQ0FBdkI7QUFDQVgsSUFBQUEsR0FBRyxDQUFDbUIsTUFBSixDQUFXLEdBQVgsRUFBZ0JHLElBQWhCLENBQXFCO0FBQUVDLE1BQUFBLE9BQU8sRUFBRyxVQUFTeEIsR0FBRyxDQUFDRSxNQUFPO0FBQWhDLEtBQXJCO0FBQ0Q7QUFDRixDQXRDRDs7QUF3Q0EsaUVBQWVILEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2FwaS9sb2dpbi5qcz8wMzg0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSV9VUkwgfSBmcm9tIFwiLi4vLi4vY29uZmlnXCJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuaW1wb3J0IGNvb2tpZSBmcm9tIFwiY29va2llXCJcblxuY29uc3QgbG9naW4gPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgLy8gQ2hlY2tpbmcgdGhlIHJlcXVlc3QgdHlwZSBpLmUgc2hvdWxkIGJlIGEgUE9TVCAgYW5kIHRoZW4gbWFrZSBvdXIgYXBpIGNhbGwgdG8gdGhlIGJhY2tlbmRcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5XG4gICAgY29uc29sZS5sb2coZW1haWwsIHBhc3N3b3JkKVxuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICBgJHtBUElfVVJMfS9hcGkvYXV0aC9sb2dpbmAsXG4gICAgICAgIHsgZW1haWwsIHBhc3N3b3JkIH0sXG4gICAgICAgIGNvbmZpZ1xuICAgICAgKVxuXG4gICAgICAvLyBTZXR0aW5nIHRoZSBjb29raWVcbiAgICAgIHJlcy5zZXRIZWFkZXIoXG4gICAgICAgIFwiU2V0LUNvb2tpZVwiLFxuICAgICAgICBjb29raWUuc2VyaWFsaXplKFwidG9rZW5cIiwgZGF0YS50b2tlbiwge1xuICAgICAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwiZGV2ZWxvcG1lbnRcIixcbiAgICAgICAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDcsIC8vMSB3ZWVrXG4gICAgICAgICAgc2FtZVNpdGU6IFwic3RyaWN0XCIsXG4gICAgICAgICAgcGF0aDogXCIvXCIsXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGRhdGEpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKFwiZXJyb3JcIilcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXMuc2V0SGVhZGVyKFwiQWxsb3dcIiwgW1wiUE9TVFwiXSlcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6IGBNZXRob2QgJHtyZXEubWV0aG9kfSBub3QgYWxsb3dlZGAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2dpblxuIl0sIm5hbWVzIjpbIkFQSV9VUkwiLCJheGlvcyIsImNvb2tpZSIsImxvZ2luIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZW1haWwiLCJwYXNzd29yZCIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwiY29uZmlnIiwiaGVhZGVycyIsImRhdGEiLCJwb3N0Iiwic2V0SGVhZGVyIiwic2VyaWFsaXplIiwidG9rZW4iLCJodHRwT25seSIsInNlY3VyZSIsIm1heEFnZSIsInNhbWVTaXRlIiwicGF0aCIsInN0YXR1cyIsInNlbmQiLCJlcnJvciIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/login.js\n");

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