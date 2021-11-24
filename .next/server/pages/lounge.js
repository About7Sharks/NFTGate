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
exports.id = "pages/lounge";
exports.ids = ["pages/lounge"];
exports.modules = {

/***/ "./pages/lounge.tsx":
/*!**************************!*\
  !*** ./pages/lounge.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _3rdweb_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @3rdweb/sdk */ \"@3rdweb/sdk\");\n/* harmony import */ var _3rdweb_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_3rdweb_sdk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ethersproject_wallet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ethersproject/wallet */ \"@ethersproject/wallet\");\n/* harmony import */ var _ethersproject_wallet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_wallet__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n// Polygon only\nconst MEMBERSHIP_NFT_CONTRACT_ADDRESS = \"0x2953399124f0cbb46d2cbacd8a89cf0599974963\";\nconst MEMBERSHIP_NFT_TOKEN_ID_REQ = \"47609522723514433734824687530042294980736405256883231083500050416333544751304\";\nconst MEMBERSHIP_NFT_TOKEN_COUNT_REQ = 1;\nconst Home = ({ signature , walletAddress , balance  })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        // remove `signature` query params on load\n        if (router.query.signature) {\n            router.replace(\"/lounge\", undefined, {\n                shallow: true\n            });\n        }\n    }, [\n        router\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        __source: {\n            fileName: \"/Users/zach/Desktop/code/nextjs-membership-lounge/pages/lounge.tsx\",\n            lineNumber: 31,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                __source: {\n                    fileName: \"/Users/zach/Desktop/code/nextjs-membership-lounge/pages/lounge.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 7\n                },\n                __self: undefined,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"/Users/zach/Desktop/code/nextjs-membership-lounge/pages/lounge.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 9\n                        },\n                        __self: undefined,\n                        children: \"thirdweb membership content gate\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\",\n                        __source: {\n                            fileName: \"/Users/zach/Desktop/code/nextjs-membership-lounge/pages/lounge.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 9\n                        },\n                        __self: undefined\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        __source: {\n                            fileName: \"/Users/zach/Desktop/code/nextjs-membership-lounge/pages/lounge.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 9\n                        },\n                        __self: undefined\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Center, {\n                flexDirection: \"column\",\n                __source: {\n                    fileName: \"/Users/zach/Desktop/code/nextjs-membership-lounge/pages/lounge.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 7\n                },\n                __self: undefined,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                        direction: \"row\",\n                        __source: {\n                            fileName: \"/Users/zach/Desktop/code/nextjs-membership-lounge/pages/lounge.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 9\n                        },\n                        __self: undefined,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                            fontSize: \"xs\",\n                            __source: {\n                                fileName: \"/Users/zach/Desktop/code/nextjs-membership-lounge/pages/lounge.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            },\n                            __self: undefined,\n                            children: [\n                                \"Address: \",\n                                walletAddress\n                            ]\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        mt: 8,\n                        __source: {\n                            fileName: \"/Users/zach/Desktop/code/nextjs-membership-lounge/pages/lounge.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 9\n                        },\n                        __self: undefined\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                        __source: {\n                            fileName: \"/Users/zach/Desktop/code/nextjs-membership-lounge/pages/lounge.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 9\n                        },\n                        __self: undefined,\n                        children: \"Member Only Content\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        __source: {\n                            fileName: \"/Users/zach/Desktop/code/nextjs-membership-lounge/pages/lounge.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 9\n                        },\n                        __self: undefined,\n                        children: \"ATOOO This is private content for people who have this NFT.\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        __source: {\n                            fileName: \"/Users/zach/Desktop/code/nextjs-membership-lounge/pages/lounge.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 9\n                        },\n                        __self: undefined,\n                        children: \"Imagine the stuff like gated gonent and what not that could go here\"\n                    })\n                ]\n            })\n        ]\n    }));\n};\nasync function getServerSideProps(context) {\n    const signature = context.query.signature;\n    if (!signature) {\n        return {\n            redirect: {\n                destination: \"/\",\n                permanent: false\n            }\n        };\n    }\n    const provider = ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.getDefaultProvider(\"https://polygon-rpc.com\");\n    const module = new _3rdweb_sdk__WEBPACK_IMPORTED_MODULE_1__.ThirdwebSDK(provider).getCollectionModule(MEMBERSHIP_NFT_CONTRACT_ADDRESS);\n    // TODO: get the nonce from the previous GET /request_access request.\n    // this nonce number should only be used once and has expiration.\n    const expectedNonce = 42;\n    const expectedSignMessage = `I want to enter the lounge. one-time access code: ${expectedNonce}`;\n    const walletAddress = (0,_ethersproject_wallet__WEBPACK_IMPORTED_MODULE_4__.verifyMessage)(expectedSignMessage, signature);\n    const balance = await module.balanceOf(walletAddress, MEMBERSHIP_NFT_TOKEN_ID_REQ);\n    if (balance.toNumber() < MEMBERSHIP_NFT_TOKEN_COUNT_REQ) {\n        return {\n            redirect: {\n                destination: \"/?denied=true\",\n                permanent: false\n            }\n        };\n    }\n    return {\n        props: {\n            signature,\n            walletAddress,\n            balance: balance.toNumber()\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sQ0FBQyxDQUFDO1lBQ051QixRQUFRLEVBQUUsQ0FBQztnQkFDVEMsV0FBVyxFQUFFLENBQWU7Z0JBQzVCQyxTQUFTLEVBQUUsS0FBSztZQUNsQixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsQ0FBQztRQUNOUyxLQUFLLEVBQUUsQ0FBQztZQUFDaEMsU0FBUztZQUFFQyxhQUFhO1lBQUVDLE9BQU8sRUFBRUEsT0FBTyxDQUFDNkIsUUFBUTtRQUFHLENBQUM7SUFDbEUsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZWhDLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL2xvdW5nZS50c3g/ZGVhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGlyZHdlYlNESyB9IGZyb20gXCJAM3Jkd2ViL3Nka1wiO1xuaW1wb3J0IHsgQ2VudGVyLCBDb250YWluZXIsIFRleHQsIEhlYWRpbmcsIEJveCwgU3RhY2sgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgdmVyaWZ5TWVzc2FnZSB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC93YWxsZXRcIjtcbmltcG9ydCB0eXBlIHsgSW5mZXJHZXRTZXJ2ZXJTaWRlUHJvcHNUeXBlLCBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuLy8gUG9seWdvbiBvbmx5XG5jb25zdCBNRU1CRVJTSElQX05GVF9DT05UUkFDVF9BRERSRVNTID1cbiAgXCIweDI5NTMzOTkxMjRmMGNiYjQ2ZDJjYmFjZDhhODljZjA1OTk5NzQ5NjNcIjtcbmNvbnN0IE1FTUJFUlNISVBfTkZUX1RPS0VOX0lEX1JFUSA9IFwiNDc2MDk1MjI3MjM1MTQ0MzM3MzQ4MjQ2ODc1MzAwNDIyOTQ5ODA3MzY0MDUyNTY4ODMyMzEwODM1MDAwNTA0MTYzMzM1NDQ3NTEzMDRcIjtcbmNvbnN0IE1FTUJFUlNISVBfTkZUX1RPS0VOX0NPVU5UX1JFUSA9IDE7XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKHtcbiAgc2lnbmF0dXJlLFxuICB3YWxsZXRBZGRyZXNzLFxuICBiYWxhbmNlLFxufTogSW5mZXJHZXRTZXJ2ZXJTaWRlUHJvcHNUeXBlPHR5cGVvZiBnZXRTZXJ2ZXJTaWRlUHJvcHM+KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gcmVtb3ZlIGBzaWduYXR1cmVgIHF1ZXJ5IHBhcmFtcyBvbiBsb2FkXG4gICAgaWYgKHJvdXRlci5xdWVyeS5zaWduYXR1cmUpIHtcbiAgICAgIHJvdXRlci5yZXBsYWNlKFwiL2xvdW5nZVwiLCB1bmRlZmluZWQsIHsgc2hhbGxvdzogdHJ1ZSB9KTtcbiAgICB9XG4gIH0sIFtyb3V0ZXJdKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnRoaXJkd2ViIG1lbWJlcnNoaXAgY29udGVudCBnYXRlPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIHsvKiAgKi99XG4gICAgICA8Q2VudGVyIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiPlxuICAgICAgICAgIHsvKiA8VGV4dCBmb250U2l6ZT1cInhzXCI+U2lnbmF0dXJlOiB7c2lnbmF0dXJlfTwvVGV4dD4gKi99XG4gICAgICAgICAgPFRleHQgZm9udFNpemU9XCJ4c1wiPkFkZHJlc3M6IHt3YWxsZXRBZGRyZXNzfTwvVGV4dD5cbiAgICAgICAgICB7LyogPFRleHQgZm9udFNpemU9XCJ4c1wiPkJhbGFuY2U6IHtiYWxhbmNlfTwvVGV4dD4gKi99XG4gICAgICAgIDwvU3RhY2s+XG5cbiAgICAgICAgPEJveCBtdD17OH0gLz5cblxuICAgICAgICA8SGVhZGluZz5NZW1iZXIgT25seSBDb250ZW50PC9IZWFkaW5nPlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICBBVE9PTyBUaGlzIGlzIHByaXZhdGUgY29udGVudCBmb3IgcGVvcGxlIHdobyBoYXZlIHRoaXMgTkZULlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0PkltYWdpbmUgdGhlIHN0dWZmIGxpa2UgZ2F0ZWQgZ29uZW50IGFuZCB3aGF0IG5vdCB0aGF0IGNvdWxkIGdvIGhlcmU8L1RleHQ+XG4gICAgICA8L0NlbnRlcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dDogYW55KSB7XG4gIGNvbnN0IHNpZ25hdHVyZSA9IGNvbnRleHQucXVlcnkuc2lnbmF0dXJlO1xuICBpZiAoIXNpZ25hdHVyZSkge1xuICAgIHJldHVybiB7IHJlZGlyZWN0OiB7IGRlc3RpbmF0aW9uOiBcIi9cIiwgcGVybWFuZW50OiBmYWxzZSB9IH07XG4gIH1cblxuICBjb25zdCBwcm92aWRlciA9IGV0aGVycy5nZXREZWZhdWx0UHJvdmlkZXIoXCJodHRwczovL3BvbHlnb24tcnBjLmNvbVwiKTtcbiAgY29uc3QgbW9kdWxlID0gbmV3IFRoaXJkd2ViU0RLKHByb3ZpZGVyKS5nZXRDb2xsZWN0aW9uTW9kdWxlKFxuICAgIE1FTUJFUlNISVBfTkZUX0NPTlRSQUNUX0FERFJFU1NcbiAgKTtcblxuICAvLyBUT0RPOiBnZXQgdGhlIG5vbmNlIGZyb20gdGhlIHByZXZpb3VzIEdFVCAvcmVxdWVzdF9hY2Nlc3MgcmVxdWVzdC5cbiAgLy8gdGhpcyBub25jZSBudW1iZXIgc2hvdWxkIG9ubHkgYmUgdXNlZCBvbmNlIGFuZCBoYXMgZXhwaXJhdGlvbi5cbiAgY29uc3QgZXhwZWN0ZWROb25jZSA9IDQyO1xuICBjb25zdCBleHBlY3RlZFNpZ25NZXNzYWdlID0gYEkgd2FudCB0byBlbnRlciB0aGUgbG91bmdlLiBvbmUtdGltZSBhY2Nlc3MgY29kZTogJHtleHBlY3RlZE5vbmNlfWA7XG5cbiAgY29uc3Qgd2FsbGV0QWRkcmVzcyA9IHZlcmlmeU1lc3NhZ2UoZXhwZWN0ZWRTaWduTWVzc2FnZSwgc2lnbmF0dXJlKTtcbiAgY29uc3QgYmFsYW5jZSA9IGF3YWl0IG1vZHVsZS5iYWxhbmNlT2YoXG4gICAgd2FsbGV0QWRkcmVzcyxcbiAgICBNRU1CRVJTSElQX05GVF9UT0tFTl9JRF9SRVFcbiAgKTtcblxuICBpZiAoYmFsYW5jZS50b051bWJlcigpIDwgTUVNQkVSU0hJUF9ORlRfVE9LRU5fQ09VTlRfUkVRKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgIGRlc3RpbmF0aW9uOiBcIi8/ZGVuaWVkPXRydWVcIixcbiAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgc2lnbmF0dXJlLCB3YWxsZXRBZGRyZXNzLCBiYWxhbmNlOiBiYWxhbmNlLnRvTnVtYmVyKCkgfSwgLy8gV2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiVGhpcmR3ZWJTREsiLCJDZW50ZXIiLCJDb250YWluZXIiLCJUZXh0IiwiSGVhZGluZyIsIkJveCIsIlN0YWNrIiwiZXRoZXJzIiwidmVyaWZ5TWVzc2FnZSIsIkhlYWQiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIk1FTUJFUlNISVBfTkZUX0NPTlRSQUNUX0FERFJFU1MiLCJNRU1CRVJTSElQX05GVF9UT0tFTl9JRF9SRVEiLCJNRU1CRVJTSElQX05GVF9UT0tFTl9DT1VOVF9SRVEiLCJIb21lIiwic2lnbmF0dXJlIiwid2FsbGV0QWRkcmVzcyIsImJhbGFuY2UiLCJyb3V0ZXIiLCJxdWVyeSIsInJlcGxhY2UiLCJ1bmRlZmluZWQiLCJzaGFsbG93IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImZsZXhEaXJlY3Rpb24iLCJkaXJlY3Rpb24iLCJmb250U2l6ZSIsIm10IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInJlZGlyZWN0IiwiZGVzdGluYXRpb24iLCJwZXJtYW5lbnQiLCJwcm92aWRlciIsImdldERlZmF1bHRQcm92aWRlciIsIm1vZHVsZSIsImdldENvbGxlY3Rpb25Nb2R1bGUiLCJleHBlY3RlZE5vbmNlIiwiZXhwZWN0ZWRTaWduTWVzc2FnZSIsImJhbGFuY2VPZiIsInRvTnVtYmVyIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/lounge.tsx\n");

/***/ }),

/***/ "@3rdweb/sdk":
/*!******************************!*\
  !*** external "@3rdweb/sdk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@3rdweb/sdk");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "@ethersproject/wallet":
/*!****************************************!*\
  !*** external "@ethersproject/wallet" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@ethersproject/wallet");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/lounge.tsx"));
module.exports = __webpack_exports__;

})();