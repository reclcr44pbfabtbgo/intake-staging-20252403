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
exports.id = "app/api/send-otp/route";
exports.ids = ["app/api/send-otp/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-otp%2Froute&page=%2Fapi%2Fsend-otp%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-otp%2Froute.js&appDir=C%3A%5CUsers%5Cxzvl%5CDownloads%5Ctrv%5Cintake%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cxzvl%5CDownloads%5Ctrv%5Cintake&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-otp%2Froute&page=%2Fapi%2Fsend-otp%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-otp%2Froute.js&appDir=C%3A%5CUsers%5Cxzvl%5CDownloads%5Ctrv%5Cintake%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cxzvl%5CDownloads%5Ctrv%5Cintake&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_xzvl_Downloads_trv_intake_app_api_send_otp_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/send-otp/route.js */ \"(rsc)/./app/api/send-otp/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/send-otp/route\",\n        pathname: \"/api/send-otp\",\n        filename: \"route\",\n        bundlePath: \"app/api/send-otp/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\xzvl\\\\Downloads\\\\trv\\\\intake\\\\app\\\\api\\\\send-otp\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_xzvl_Downloads_trv_intake_app_api_send_otp_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/send-otp/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzZW5kLW90cCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGc2VuZC1vdHAlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZzZW5kLW90cCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUN4enZsJTVDRG93bmxvYWRzJTVDdHJ2JTVDaW50YWtlJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUN4enZsJTVDRG93bmxvYWRzJTVDdHJ2JTVDaW50YWtlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNxQjtBQUNsRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3BhdGllbnQtaW50YWtlLWFwcC8/OGMyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFx4enZsXFxcXERvd25sb2Fkc1xcXFx0cnZcXFxcaW50YWtlXFxcXGFwcFxcXFxhcGlcXFxcc2VuZC1vdHBcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3NlbmQtb3RwL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvc2VuZC1vdHBcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3NlbmQtb3RwL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxceHp2bFxcXFxEb3dubG9hZHNcXFxcdHJ2XFxcXGludGFrZVxcXFxhcHBcXFxcYXBpXFxcXHNlbmQtb3RwXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9zZW5kLW90cC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-otp%2Froute&page=%2Fapi%2Fsend-otp%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-otp%2Froute.js&appDir=C%3A%5CUsers%5Cxzvl%5CDownloads%5Ctrv%5Cintake%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cxzvl%5CDownloads%5Ctrv%5Cintake&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/send-otp/route.js":
/*!***********************************!*\
  !*** ./app/api/send-otp/route.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var twilio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! twilio */ \"(rsc)/./node_modules/twilio/lib/index.js\");\n/* harmony import */ var twilio__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(twilio__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst accountSid = process.env.TWILIO_ACCOUNT_SID;\nconst authToken = process.env.TWILIO_AUTH_TOKEN;\nconst serviceSid = process.env.TWILIO_VERIFY_SERVICE_SID;\nconst client = new twilio__WEBPACK_IMPORTED_MODULE_1__.Twilio(accountSid, authToken);\nasync function POST(req) {\n    try {\n        const { OTPPhoneNumber } = await req.json();\n        if (!OTPPhoneNumber) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Phone number is required\"\n            }, {\n                status: 400\n            });\n        }\n        const verification = await client.verify.services(serviceSid).verifications.create({\n            to: OTPPhoneNumber,\n            channel: \"sms\"\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            status: verification.status\n        });\n    } catch (error) {\n        console.error(\"Error in /api/send-otp:\", error.message); // Log the detailed error for debugging\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3NlbmQtb3RwL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMkM7QUFDWDtBQUVoQyxNQUFNRSxhQUFhQyxRQUFRQyxHQUFHLENBQUNDLGtCQUFrQjtBQUNqRCxNQUFNQyxZQUFZSCxRQUFRQyxHQUFHLENBQUNHLGlCQUFpQjtBQUMvQyxNQUFNQyxhQUFhTCxRQUFRQyxHQUFHLENBQUNLLHlCQUF5QjtBQUV4RCxNQUFNQyxTQUFTLElBQUlULDBDQUFNQSxDQUFDQyxZQUFZSTtBQUUvQixlQUFlSyxLQUFLQyxHQUFHO0lBQzFCLElBQUk7UUFDQSxNQUFNLEVBQUVDLGNBQWMsRUFBRSxHQUFHLE1BQU1ELElBQUlFLElBQUk7UUFDekMsSUFBSSxDQUFDRCxnQkFBZ0I7WUFDakIsT0FBT2IscURBQVlBLENBQUNjLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUEyQixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDbEY7UUFFQSxNQUFNQyxlQUFlLE1BQU1QLE9BQU9RLE1BQU0sQ0FDbkNDLFFBQVEsQ0FBQ1gsWUFDVFksYUFBYSxDQUFDQyxNQUFNLENBQUM7WUFDbEJDLElBQUlUO1lBQ0pVLFNBQVM7UUFDYjtRQUVKLE9BQU92QixxREFBWUEsQ0FBQ2MsSUFBSSxDQUFDO1lBQUVFLFFBQVFDLGFBQWFELE1BQU07UUFBQztJQUMzRCxFQUFFLE9BQU9ELE9BQU87UUFDWlMsUUFBUVQsS0FBSyxDQUFDLDJCQUEyQkEsTUFBTVUsT0FBTyxHQUFJLHVDQUF1QztRQUNqRyxPQUFPekIscURBQVlBLENBQUNjLElBQUksQ0FBQztZQUFFQyxPQUFPQSxNQUFNVSxPQUFPO1FBQUMsR0FBRztZQUFFVCxRQUFRO1FBQUk7SUFDckU7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3BhdGllbnQtaW50YWtlLWFwcC8uL2FwcC9hcGkvc2VuZC1vdHAvcm91dGUuanM/YWZmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XHJcbmltcG9ydCB7IFR3aWxpbyB9IGZyb20gJ3R3aWxpbyc7XHJcblxyXG5jb25zdCBhY2NvdW50U2lkID0gcHJvY2Vzcy5lbnYuVFdJTElPX0FDQ09VTlRfU0lEO1xyXG5jb25zdCBhdXRoVG9rZW4gPSBwcm9jZXNzLmVudi5UV0lMSU9fQVVUSF9UT0tFTjtcclxuY29uc3Qgc2VydmljZVNpZCA9IHByb2Nlc3MuZW52LlRXSUxJT19WRVJJRllfU0VSVklDRV9TSUQ7XHJcblxyXG5jb25zdCBjbGllbnQgPSBuZXcgVHdpbGlvKGFjY291bnRTaWQsIGF1dGhUb2tlbik7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXEpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBPVFBQaG9uZU51bWJlciB9ID0gYXdhaXQgcmVxLmpzb24oKTtcclxuICAgICAgICBpZiAoIU9UUFBob25lTnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnUGhvbmUgbnVtYmVyIGlzIHJlcXVpcmVkJyB9LCB7IHN0YXR1czogNDAwIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdmVyaWZpY2F0aW9uID0gYXdhaXQgY2xpZW50LnZlcmlmeVxyXG4gICAgICAgICAgICAuc2VydmljZXMoc2VydmljZVNpZClcclxuICAgICAgICAgICAgLnZlcmlmaWNhdGlvbnMuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIHRvOiBPVFBQaG9uZU51bWJlcixcclxuICAgICAgICAgICAgICAgIGNoYW5uZWw6ICdzbXMnLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3RhdHVzOiB2ZXJpZmljYXRpb24uc3RhdHVzIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiAvYXBpL3NlbmQtb3RwOicsIGVycm9yLm1lc3NhZ2UpOyAgLy8gTG9nIHRoZSBkZXRhaWxlZCBlcnJvciBmb3IgZGVidWdnaW5nXHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJUd2lsaW8iLCJhY2NvdW50U2lkIiwicHJvY2VzcyIsImVudiIsIlRXSUxJT19BQ0NPVU5UX1NJRCIsImF1dGhUb2tlbiIsIlRXSUxJT19BVVRIX1RPS0VOIiwic2VydmljZVNpZCIsIlRXSUxJT19WRVJJRllfU0VSVklDRV9TSUQiLCJjbGllbnQiLCJQT1NUIiwicmVxIiwiT1RQUGhvbmVOdW1iZXIiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJ2ZXJpZmljYXRpb24iLCJ2ZXJpZnkiLCJzZXJ2aWNlcyIsInZlcmlmaWNhdGlvbnMiLCJjcmVhdGUiLCJ0byIsImNoYW5uZWwiLCJjb25zb2xlIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/send-otp/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/twilio","vendor-chunks/semver","vendor-chunks/xmlbuilder","vendor-chunks/jsonwebtoken","vendor-chunks/asynckit","vendor-chunks/es-errors","vendor-chunks/qs","vendor-chunks/jws","vendor-chunks/debug","vendor-chunks/https-proxy-agent","vendor-chunks/scmp","vendor-chunks/object-inspect","vendor-chunks/mime-db","vendor-chunks/has-symbols","vendor-chunks/function-bind","vendor-chunks/form-data","vendor-chunks/follow-redirects","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/dayjs","vendor-chunks/call-bind","vendor-chunks/agent-base","vendor-chunks/axios","vendor-chunks/supports-color","vendor-chunks/side-channel","vendor-chunks/set-function-length","vendor-chunks/safe-buffer","vendor-chunks/proxy-from-env","vendor-chunks/ms","vendor-chunks/mime-types","vendor-chunks/lodash.once","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isinteger","vendor-chunks/lodash.isboolean","vendor-chunks/lodash.includes","vendor-chunks/jwa","vendor-chunks/hasown","vendor-chunks/has-proto","vendor-chunks/has-property-descriptors","vendor-chunks/has-flag","vendor-chunks/gopd","vendor-chunks/get-intrinsic","vendor-chunks/es-define-property","vendor-chunks/delayed-stream","vendor-chunks/define-data-property","vendor-chunks/combined-stream","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-otp%2Froute&page=%2Fapi%2Fsend-otp%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-otp%2Froute.js&appDir=C%3A%5CUsers%5Cxzvl%5CDownloads%5Ctrv%5Cintake%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cxzvl%5CDownloads%5Ctrv%5Cintake&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();