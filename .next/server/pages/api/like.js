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
exports.id = "pages/api/like";
exports.ids = ["pages/api/like"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./libs/prismadb.ts":
/*!**************************!*\
  !*** ./libs/prismadb.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalThis.prisma = client;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWJzL3ByaXNtYWRiLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQU03QyxNQUFNQyxTQUFTQyxXQUFXQyxNQUFNLElBQUksSUFBSUgsd0RBQVlBO0FBQ3BELElBQUlJLElBQXFDLEVBQUVGLFdBQVdDLE1BQU0sR0FBR0Y7QUFFL0QsaUVBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90d2l0dGVyLWNsb25lLy4vbGlicy9wcmlzbWFkYi50cz83ZDlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiXHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgdmFyIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkXHJcbn1cclxuXHJcbmNvbnN0IGNsaWVudCA9IGdsb2JhbFRoaXMucHJpc21hIHx8IG5ldyBQcmlzbWFDbGllbnQoKVxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSBnbG9iYWxUaGlzLnByaXNtYSA9IGNsaWVudFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImNsaWVudCIsImdsb2JhbFRoaXMiLCJwcmlzbWEiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./libs/prismadb.ts\n");

/***/ }),

/***/ "(api)/./libs/serverAuth.ts":
/*!****************************!*\
  !*** ./libs/serverAuth.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/prismadb */ \"(api)/./libs/prismadb.ts\");\n/* harmony import */ var _pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/pages/api/auth/[...nextauth] */ \"(api)/./pages/api/auth/[...nextauth].ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst serverAuth = async (req, res)=>{\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(req, res, _pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_1__.authOptions);\n    if (!session?.user?.email) {\n        throw new Error(\"Not signed in\");\n    }\n    const currentUser = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n        where: {\n            email: session.user.email\n        }\n    });\n    if (!currentUser) {\n        throw new Error(\"Not signed in\");\n    }\n    return {\n        currentUser\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (serverAuth);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWJzL3NlcnZlckF1dGgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFcUM7QUFDd0I7QUFDaEI7QUFFN0MsTUFBTUcsYUFBYSxPQUFPQyxLQUFxQkMsTUFBeUI7SUFDdEUsTUFBTUMsVUFBVSxNQUFNSiwyREFBZ0JBLENBQUNFLEtBQUtDLEtBQUtKLGtFQUFXQTtJQUU1RCxJQUFJLENBQUNLLFNBQVNDLE1BQU1DLE9BQU87UUFDekIsTUFBTSxJQUFJQyxNQUFNLGlCQUFpQjtJQUNuQyxDQUFDO0lBRUQsTUFBTUMsY0FBYyxNQUFNVixzRUFBc0IsQ0FBQztRQUMvQ1ksT0FBTztZQUNMSixPQUFPRixRQUFRQyxJQUFJLENBQUNDLEtBQUs7UUFDM0I7SUFDRjtJQUVBLElBQUksQ0FBQ0UsYUFBYTtRQUNoQixNQUFNLElBQUlELE1BQU0saUJBQWlCO0lBQ25DLENBQUM7SUFFRCxPQUFPO1FBQUVDO0lBQVk7QUFDdkI7QUFFQSxpRUFBZVAsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R3aXR0ZXItY2xvbmUvLi9saWJzL3NlcnZlckF1dGgudHM/ODU5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XHJcblxyXG5pbXBvcnQgcHJpc21hIGZyb20gJ0AvbGlicy9wcmlzbWFkYic7XHJcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSAnQC9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdJztcclxuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aCc7XHJcblxyXG5jb25zdCBzZXJ2ZXJBdXRoID0gYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24ocmVxLCByZXMsIGF1dGhPcHRpb25zKTtcclxuXHJcbiAgaWYgKCFzZXNzaW9uPy51c2VyPy5lbWFpbCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3Qgc2lnbmVkIGluJyk7XHJcbiAgfSBcclxuXHJcbiAgY29uc3QgY3VycmVudFVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcclxuICAgIHdoZXJlOiB7XHJcbiAgICAgIGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwsXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGlmICghY3VycmVudFVzZXIpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignTm90IHNpZ25lZCBpbicpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgY3VycmVudFVzZXIgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlcnZlckF1dGg7XHJcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJhdXRoT3B0aW9ucyIsImdldFNlcnZlclNlc3Npb24iLCJzZXJ2ZXJBdXRoIiwicmVxIiwicmVzIiwic2Vzc2lvbiIsInVzZXIiLCJlbWFpbCIsIkVycm9yIiwiY3VycmVudFVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./libs/serverAuth.ts\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _libs_prismadb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/libs/prismadb */ \"(api)/./libs/prismadb.ts\");\n\n\n\n\n\nconst authOptions = {\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3__.PrismaAdapter)(_libs_prismadb__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                const user = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_4__[\"default\"].user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user || !user?.hashedPassword) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                const isCorrectPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().compare(credentials.password, user.hashedPassword);\n                if (!isCorrectPassword) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                return user;\n            }\n        })\n    ],\n    debug: \"development\" === \"development\",\n    session: {\n        strategy: \"jwt\"\n    },\n    jwt: {\n        secret: process.env.NEXTAUTH_JWT_SECRET\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTJCO0FBQ3NCO0FBQ2dCO0FBQ1I7QUFFckI7QUFFN0IsTUFBTUssY0FBMkI7SUFDdENDLFNBQVNILHdFQUFhQSxDQUFDQyxzREFBTUE7SUFDN0JHLFdBQVc7UUFDVEwsc0VBQW1CQSxDQUFDO1lBQ2xCTSxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1hDLE9BQU87b0JBQUVDLE9BQU87b0JBQVNDLE1BQU07Z0JBQU87Z0JBQ3RDQyxVQUFVO29CQUFFRixPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTUUsV0FBVUwsV0FBVyxFQUFFO2dCQUMzQixJQUFJLENBQUNBLGFBQWFDLFNBQVMsQ0FBQ0QsYUFBYUksVUFBVTtvQkFDakQsTUFBTSxJQUFJRSxNQUFNLHVCQUF1QjtnQkFDekMsQ0FBQztnQkFFRCxNQUFNQyxPQUFPLE1BQU1aLHNFQUFzQixDQUFDO29CQUN4Q2MsT0FBTzt3QkFDTFIsT0FBT0QsWUFBWUMsS0FBSztvQkFDMUI7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDTSxRQUFRLENBQUNBLE1BQU1HLGdCQUFnQjtvQkFDbEMsTUFBTSxJQUFJSixNQUFNLHVCQUF1QjtnQkFDekMsQ0FBQztnQkFFRCxNQUFNSyxvQkFBb0IsTUFBTXBCLHFEQUFjLENBQzVDUyxZQUFZSSxRQUFRLEVBQ3BCRyxLQUFLRyxjQUFjO2dCQUdyQixJQUFJLENBQUNDLG1CQUFtQjtvQkFDdEIsTUFBTSxJQUFJTCxNQUFNLHVCQUF1QjtnQkFDekMsQ0FBQztnQkFFRCxPQUFPQztZQUNUO1FBQ0Y7S0FDRDtJQUNETSxPQUFPQyxrQkFBeUI7SUFDaENDLFNBQVM7UUFDUEMsVUFBVTtJQUNaO0lBQ0FDLEtBQUs7UUFDSEMsUUFBUUosUUFBUUssR0FBRyxDQUFDQyxtQkFBbUI7SUFDekM7SUFDQUYsUUFBUUosUUFBUUssR0FBRyxDQUFDRSxlQUFlO0FBQ3JDLEVBQUU7QUFFRixpRUFBZTdCLGdEQUFRQSxDQUFDSSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHdpdHRlci1jbG9uZS8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/MmU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRcIlxyXG5pbXBvcnQgTmV4dEF1dGgsIHsgQXV0aE9wdGlvbnMgfSBmcm9tIFwibmV4dC1hdXRoXCJcclxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIlxyXG5pbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSBcIkBuZXh0LWF1dGgvcHJpc21hLWFkYXB0ZXJcIlxyXG5cclxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWJzL3ByaXNtYWRiXCJcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogQXV0aE9wdGlvbnMgPSB7XHJcbiAgYWRhcHRlcjogUHJpc21hQWRhcHRlcihwcmlzbWEpLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XHJcbiAgICAgIG5hbWU6ICdjcmVkZW50aWFscycsXHJcbiAgICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6ICdlbWFpbCcsIHR5cGU6ICd0ZXh0JyB9LFxyXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiAncGFzc3dvcmQnLCB0eXBlOiAncGFzc3dvcmQnIH1cclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XHJcbiAgICAgICAgaWYgKCFjcmVkZW50aWFscz8uZW1haWwgfHwgIWNyZWRlbnRpYWxzPy5wYXNzd29yZCkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNyZWRlbnRpYWxzJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICBlbWFpbDogY3JlZGVudGlhbHMuZW1haWxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyIHx8ICF1c2VyPy5oYXNoZWRQYXNzd29yZCkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNyZWRlbnRpYWxzJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpc0NvcnJlY3RQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKFxyXG4gICAgICAgICAgY3JlZGVudGlhbHMucGFzc3dvcmQsXHJcbiAgICAgICAgICB1c2VyLmhhc2hlZFBhc3N3b3JkXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKCFpc0NvcnJlY3RQYXNzd29yZCkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNyZWRlbnRpYWxzJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICBdLFxyXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyxcclxuICBzZXNzaW9uOiB7XHJcbiAgICBzdHJhdGVneTogJ2p3dCcsXHJcbiAgfSxcclxuICBqd3Q6IHtcclxuICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfSldUX1NFQ1JFVCxcclxuICB9LFxyXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xyXG4iXSwibmFtZXMiOlsiYmNyeXB0IiwiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiUHJpc21hQWRhcHRlciIsInByaXNtYSIsImF1dGhPcHRpb25zIiwiYWRhcHRlciIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJFcnJvciIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJoYXNoZWRQYXNzd29yZCIsImlzQ29ycmVjdFBhc3N3b3JkIiwiY29tcGFyZSIsImRlYnVnIiwicHJvY2VzcyIsInNlc3Npb24iLCJzdHJhdGVneSIsImp3dCIsInNlY3JldCIsImVudiIsIk5FWFRBVVRIX0pXVF9TRUNSRVQiLCJORVhUQVVUSF9TRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "(api)/./pages/api/like.ts":
/*!***************************!*\
  !*** ./pages/api/like.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/prismadb */ \"(api)/./libs/prismadb.ts\");\n/* harmony import */ var _libs_serverAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/serverAuth */ \"(api)/./libs/serverAuth.ts\");\n\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\" && req.method !== \"DELETE\") {\n        return res.status(405).end();\n    }\n    try {\n        const { postId  } = req.body;\n        const { currentUser  } = await (0,_libs_serverAuth__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(req, res);\n        if (!postId || typeof postId !== \"string\") {\n            throw new Error(\"Invalid ID\");\n        }\n        const post = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post.findUnique({\n            where: {\n                id: postId\n            }\n        });\n        if (!post) {\n            throw new Error(\"Invalid ID\");\n        }\n        let updatedLikedIds = [\n            ...post.likedIds || []\n        ];\n        if (req.method === \"POST\") {\n            updatedLikedIds.push(currentUser.id);\n            // NOTIFICATION PART START\n            try {\n                const post = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post.findUnique({\n                    where: {\n                        id: postId\n                    }\n                });\n                if (post?.userId) {\n                    await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notification.create({\n                        data: {\n                            body: \"Someone liked your tweet!\",\n                            userId: post.userId\n                        }\n                    });\n                    await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.update({\n                        where: {\n                            id: post.userId\n                        },\n                        data: {\n                            hasNotification: true\n                        }\n                    });\n                }\n            } catch (error) {\n                console.log(error);\n            }\n        // NOTIFICATION PART END\n        }\n        if (req.method === \"DELETE\") {\n            updatedLikedIds = updatedLikedIds.filter((likedId)=>likedId !== currentUser?.id);\n        }\n        const updatedPost = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post.update({\n            where: {\n                id: postId\n            },\n            data: {\n                likedIds: updatedLikedIds\n            }\n        });\n        return res.status(200).json(updatedPost);\n    } catch (error) {\n        console.log(error);\n        return res.status(400).end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbGlrZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFcUM7QUFDTTtBQUU1QixlQUFlRSxRQUFRQyxHQUFtQixFQUFFQyxHQUFvQixFQUFFO0lBQy9FLElBQUlELElBQUlFLE1BQU0sS0FBSyxVQUFVRixJQUFJRSxNQUFNLEtBQUssVUFBVTtRQUNwRCxPQUFPRCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsR0FBRztJQUM1QixDQUFDO0lBRUQsSUFBSTtRQUNGLE1BQU0sRUFBRUMsT0FBTSxFQUFFLEdBQUdMLElBQUlNLElBQUk7UUFFM0IsTUFBTSxFQUFFQyxZQUFXLEVBQUUsR0FBRyxNQUFNVCw0REFBVUEsQ0FBQ0UsS0FBS0M7UUFFOUMsSUFBSSxDQUFDSSxVQUFVLE9BQU9BLFdBQVcsVUFBVTtZQUN6QyxNQUFNLElBQUlHLE1BQU0sY0FBYztRQUNoQyxDQUFDO1FBRUQsTUFBTUMsT0FBTyxNQUFNWixzRUFBc0IsQ0FBQztZQUN4Q2MsT0FBTztnQkFDTEMsSUFBSVA7WUFDTjtRQUNGO1FBRUEsSUFBSSxDQUFDSSxNQUFNO1lBQ1QsTUFBTSxJQUFJRCxNQUFNLGNBQWM7UUFDaEMsQ0FBQztRQUVELElBQUlLLGtCQUFrQjtlQUFLSixLQUFLSyxRQUFRLElBQUksRUFBRTtTQUFFO1FBRWhELElBQUlkLElBQUlFLE1BQU0sS0FBSyxRQUFRO1lBQ3pCVyxnQkFBZ0JFLElBQUksQ0FBQ1IsWUFBWUssRUFBRTtZQUVuQywwQkFBMEI7WUFDMUIsSUFBSTtnQkFDRixNQUFNSCxPQUFPLE1BQU1aLHNFQUFzQixDQUFDO29CQUN4Q2MsT0FBTzt3QkFDTEMsSUFBSVA7b0JBQ047Z0JBQ0Y7Z0JBRUEsSUFBSUksTUFBTU8sUUFBUTtvQkFDaEIsTUFBTW5CLDBFQUEwQixDQUFDO3dCQUMvQnNCLE1BQU07NEJBQ0piLE1BQU07NEJBQ05VLFFBQVFQLEtBQUtPLE1BQU07d0JBQ3JCO29CQUNGO29CQUVBLE1BQU1uQixrRUFBa0IsQ0FBQzt3QkFDdkJjLE9BQU87NEJBQ0xDLElBQUlILEtBQUtPLE1BQU07d0JBQ2pCO3dCQUNBRyxNQUFNOzRCQUNKRyxpQkFBaUIsSUFBSTt3QkFDdkI7b0JBQ0Y7Z0JBQ0YsQ0FBQztZQUNILEVBQUUsT0FBTUMsT0FBTztnQkFDYkMsUUFBUUMsR0FBRyxDQUFDRjtZQUNkO1FBQ0Esd0JBQXdCO1FBQzFCLENBQUM7UUFFRCxJQUFJdkIsSUFBSUUsTUFBTSxLQUFLLFVBQVU7WUFDM0JXLGtCQUFrQkEsZ0JBQWdCYSxNQUFNLENBQUMsQ0FBQ0MsVUFBWUEsWUFBWXBCLGFBQWFLO1FBQ2pGLENBQUM7UUFFRCxNQUFNZ0IsY0FBYyxNQUFNL0Isa0VBQWtCLENBQUM7WUFDM0NjLE9BQU87Z0JBQ0xDLElBQUlQO1lBQ047WUFDQWMsTUFBTTtnQkFDSkwsVUFBVUQ7WUFDWjtRQUNGO1FBRUEsT0FBT1osSUFBSUUsTUFBTSxDQUFDLEtBQUswQixJQUFJLENBQUNEO0lBQzlCLEVBQUUsT0FBT0wsT0FBTztRQUNkQyxRQUFRQyxHQUFHLENBQUNGO1FBQ1osT0FBT3RCLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxHQUFHO0lBQzVCO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R3aXR0ZXItY2xvbmUvLi9wYWdlcy9hcGkvbGlrZS50cz81ZDJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5cclxuaW1wb3J0IHByaXNtYSBmcm9tICdAL2xpYnMvcHJpc21hZGInO1xyXG5pbXBvcnQgc2VydmVyQXV0aCBmcm9tIFwiQC9saWJzL3NlcnZlckF1dGhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcclxuICBpZiAocmVxLm1ldGhvZCAhPT0gJ1BPU1QnICYmIHJlcS5tZXRob2QgIT09ICdERUxFVEUnKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmVuZCgpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgcG9zdElkIH0gPSByZXEuYm9keTtcclxuXHJcbiAgICBjb25zdCB7IGN1cnJlbnRVc2VyIH0gPSBhd2FpdCBzZXJ2ZXJBdXRoKHJlcSwgcmVzKTtcclxuXHJcbiAgICBpZiAoIXBvc3RJZCB8fCB0eXBlb2YgcG9zdElkICE9PSAnc3RyaW5nJykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgSUQnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwb3N0ID0gYXdhaXQgcHJpc21hLnBvc3QuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgaWQ6IHBvc3RJZFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXBvc3QpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIElEJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHVwZGF0ZWRMaWtlZElkcyA9IFsuLi4ocG9zdC5saWtlZElkcyB8fCBbXSldO1xyXG5cclxuICAgIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgICAgdXBkYXRlZExpa2VkSWRzLnB1c2goY3VycmVudFVzZXIuaWQpO1xyXG4gICAgICBcclxuICAgICAgLy8gTk9USUZJQ0FUSU9OIFBBUlQgU1RBUlRcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBwb3N0ID0gYXdhaXQgcHJpc21hLnBvc3QuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICBpZDogcG9zdElkLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKHBvc3Q/LnVzZXJJZCkge1xyXG4gICAgICAgICAgYXdhaXQgcHJpc21hLm5vdGlmaWNhdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgYm9keTogJ1NvbWVvbmUgbGlrZWQgeW91ciB0d2VldCEnLFxyXG4gICAgICAgICAgICAgIHVzZXJJZDogcG9zdC51c2VySWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgIGF3YWl0IHByaXNtYS51c2VyLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgaWQ6IHBvc3QudXNlcklkXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICBoYXNOb3RpZmljYXRpb246IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIE5PVElGSUNBVElPTiBQQVJUIEVORFxyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXEubWV0aG9kID09PSAnREVMRVRFJykge1xyXG4gICAgICB1cGRhdGVkTGlrZWRJZHMgPSB1cGRhdGVkTGlrZWRJZHMuZmlsdGVyKChsaWtlZElkKSA9PiBsaWtlZElkICE9PSBjdXJyZW50VXNlcj8uaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZWRQb3N0ID0gYXdhaXQgcHJpc21hLnBvc3QudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBpZDogcG9zdElkXHJcbiAgICAgIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsaWtlZElkczogdXBkYXRlZExpa2VkSWRzXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih1cGRhdGVkUG9zdCk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuZW5kKCk7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbInByaXNtYSIsInNlcnZlckF1dGgiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwiZW5kIiwicG9zdElkIiwiYm9keSIsImN1cnJlbnRVc2VyIiwiRXJyb3IiLCJwb3N0IiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaWQiLCJ1cGRhdGVkTGlrZWRJZHMiLCJsaWtlZElkcyIsInB1c2giLCJ1c2VySWQiLCJub3RpZmljYXRpb24iLCJjcmVhdGUiLCJkYXRhIiwidXNlciIsInVwZGF0ZSIsImhhc05vdGlmaWNhdGlvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImZpbHRlciIsImxpa2VkSWQiLCJ1cGRhdGVkUG9zdCIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/like.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/like.ts"));
module.exports = __webpack_exports__;

})();