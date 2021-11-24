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
exports.id = "pages/api/request_access";
exports.ids = ["pages/api/request_access"];
exports.modules = {

/***/ "./pages/api/request_access.ts":
/*!*************************************!*\
  !*** ./pages/api/request_access.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    // TODO: nonce CANNOT BE hardcoded. The number should only be used once and have expiration.\n    // Store it persistently for validation.\n    res.status(200).json({\n        nonce: 42\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcmVxdWVzdF9hY2Nlc3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVlLGVBQWVBLE9BQU8sQ0FDbkNDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNwQixDQUFDO0lBQ0QsRUFBNEY7SUFDNUYsRUFBd0M7SUFDeENBLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7UUFBQ0MsS0FBSyxFQUFFLEVBQUU7SUFBQyxDQUFDO0FBQ3BDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9hcGkvcmVxdWVzdF9hY2Nlc3MudHM/NDgxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZVxuKSB7XG4gIC8vIFRPRE86IG5vbmNlIENBTk5PVCBCRSBoYXJkY29kZWQuIFRoZSBudW1iZXIgc2hvdWxkIG9ubHkgYmUgdXNlZCBvbmNlIGFuZCBoYXZlIGV4cGlyYXRpb24uXG4gIC8vIFN0b3JlIGl0IHBlcnNpc3RlbnRseSBmb3IgdmFsaWRhdGlvbi5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBub25jZTogNDIgfSk7XG59XG4iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsInN0YXR1cyIsImpzb24iLCJub25jZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/request_access.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/request_access.ts"));
module.exports = __webpack_exports__;

})();