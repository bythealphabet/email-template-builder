/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./build-utils/devBundle.ts":
/*!**********************************!*\
  !*** ./build-utils/devBundle.ts ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _webpack_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./webpack.client */ \"./build-utils/webpack.client.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\nvar compile = function compile(app) {\n  if (true) {\n    var compiler = webpack__WEBPACK_IMPORTED_MODULE_0___default()(_webpack_client__WEBPACK_IMPORTED_MODULE_3__.config);\n    var middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default()(compiler, {\n      publicPath: _webpack_client__WEBPACK_IMPORTED_MODULE_3__.config.output.publicPath\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler));\n  }\n};\nvar _default = {\n  compile: compile\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(compile, \"compile\", \"/home/isaaclucas/projects/email/email-template-builder/build-utils/devBundle.ts\");\n  reactHotLoader.register(_default, \"default\", \"/home/isaaclucas/projects/email/email-template-builder/build-utils/devBundle.ts\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://email-templat-builder/./build-utils/devBundle.ts?");

/***/ }),

/***/ "./build-utils/webpack.client.ts":
/*!***************************************!*\
  !*** ./build-utils/webpack.client.ts ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n// import ForkTsCheckerWebpackPlugin from \"fork-ts-checker-webpack-plugin\";\nvar CURRENT_WORKING_DIR = process.cwd();\nvar config = {\n  name: \"browser\",\n  mode: \"development\",\n  devtool: \"eval-source-map\",\n  entry: [\"webpack-hot-middleware/client?reload=true\", path__WEBPACK_IMPORTED_MODULE_0___default().join(CURRENT_WORKING_DIR, \"client/main.tsx\")],\n  output: {\n    path: path__WEBPACK_IMPORTED_MODULE_0___default().join(CURRENT_WORKING_DIR, \"/dist\"),\n    filename: \"bundle.js\",\n    publicPath: \"/dist/\"\n  },\n  module: {\n    rules: [{\n      test: /\\.(ts|js)x?$/i,\n      exclude: /node_modules/,\n      use: [\"babel-loader\"]\n    }, {\n      test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n      use: \"file-loader\"\n    }]\n  },\n  plugins: [new (webpack__WEBPACK_IMPORTED_MODULE_1___default().HotModuleReplacementPlugin)(), new (webpack__WEBPACK_IMPORTED_MODULE_1___default().NoEmitOnErrorsPlugin)()\n  // new ForkTsCheckerWebpackPlugin({\n  //   async: false,\n  // }),\n  ],\n\n  resolve: {\n    extensions: [\".tsx\", \".ts\", \".js\"],\n    alias: {\n      \"react-dom\": \"@hot-loader/react-dom\"\n    }\n  }\n};\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/home/isaaclucas/projects/email/email-template-builder/build-utils/webpack.client.ts\");\n  reactHotLoader.register(config, \"config\", \"/home/isaaclucas/projects/email/email-template-builder/build-utils/webpack.client.ts\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://email-templat-builder/./build-utils/webpack.client.ts?");

/***/ }),

/***/ "./config/config.ts":
/*!**************************!*\
  !*** ./config/config.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\ndotenv__WEBPACK_IMPORTED_MODULE_0___default().config();\nvar config = {\n  env: \"development\" || 0,\n  port: process.env.PORT || 3000,\n  jwtSecret: process.env.JWT_SECRET || \"your_secret_key\",\n  jwtAcountActivation: process.env.JWT_ACCOUNT_ACTIVATION || \"acount_activation\",\n  sendGridApiKey: process.env.SENDGRID_API_KEY,\n  mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST || \"mongodb://\".concat(process.env.IP || \"localhost\", \":\").concat(process.env.MONGO_PORT || \"27017\", \"/electronics-db\")\n};\nvar _default = config;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(config, \"config\", \"/home/isaaclucas/projects/email/email-template-builder/config/config.ts\");\n  reactHotLoader.register(_default, \"default\", \"/home/isaaclucas/projects/email/email-template-builder/config/config.ts\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://email-templat-builder/./config/config.ts?");

/***/ }),

/***/ "./emails/index.tsx":
/*!**************************!*\
  !*** ./emails/index.tsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mjml_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mjml-react */ \"mjml-react\");\n/* harmony import */ var mjml_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mjml_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\nfunction Component(_ref) {\n  var width = _ref.width,\n    color = _ref.color;\n  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(mjml_react__WEBPACK_IMPORTED_MODULE_0__.Mjml, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(mjml_react__WEBPACK_IMPORTED_MODULE_0__.MjmlHead, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(mjml_react__WEBPACK_IMPORTED_MODULE_0__.MjmlTitle, null, \"Last Minute Offer\"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(mjml_react__WEBPACK_IMPORTED_MODULE_0__.MjmlPreview, null, \"Last Minute Offer...\")), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(mjml_react__WEBPACK_IMPORTED_MODULE_0__.MjmlBody, {\n    width: width\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(mjml_react__WEBPACK_IMPORTED_MODULE_0__.MjmlSection, {\n    fullWidth: true,\n    backgroundColor: color\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(mjml_react__WEBPACK_IMPORTED_MODULE_0__.MjmlColumn, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(mjml_react__WEBPACK_IMPORTED_MODULE_0__.MjmlImage, {\n    src: \"https://images.pexels.com/photos/14281753/pexels-photo-14281753.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load\"\n  }))), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(mjml_react__WEBPACK_IMPORTED_MODULE_0__.MjmlSection, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(mjml_react__WEBPACK_IMPORTED_MODULE_0__.MjmlColumn, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(mjml_react__WEBPACK_IMPORTED_MODULE_0__.MjmlButton, {\n    padding: \"10px\",\n    backgroundColor: \"#e37188\",\n    href: \"https://www.wix.com/\"\n  }, \"I like it!\")))));\n}\nfunction email(_ref2) {\n  var width = _ref2.width,\n    color = _ref2.color;\n  var _render = (0,mjml_react__WEBPACK_IMPORTED_MODULE_0__.render)((0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component, {\n      width: width,\n      color: color\n    }), {\n      validationLevel: \"soft\"\n    }),\n    html = _render.html;\n  return html;\n}\nvar _default = email;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(Component, \"Component\", \"/home/isaaclucas/projects/email/email-template-builder/emails/index.tsx\");\n  reactHotLoader.register(email, \"email\", \"/home/isaaclucas/projects/email/email-template-builder/emails/index.tsx\");\n  reactHotLoader.register(_default, \"default\", \"/home/isaaclucas/projects/email/email-template-builder/emails/index.tsx\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://email-templat-builder/./emails/index.tsx?");

/***/ }),

/***/ "./server/express.ts":
/*!***************************!*\
  !*** ./server/express.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template */ \"./server/template.ts\");\n/* harmony import */ var _build_utils_devBundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../build-utils/devBundle */ \"./build-utils/devBundle.ts\");\n/* harmony import */ var _emails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../emails */ \"./emails/index.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\nvar CURRENT_WORKING_DIR = process.cwd();\nvar development = \"development\" === \"development\";\nif (development) {\n  console.log(\"development mode devBundle active:\");\n  _build_utils_devBundle__WEBPACK_IMPORTED_MODULE_3__[\"default\"].compile(app);\n}\napp.use(\"/dist\", express__WEBPACK_IMPORTED_MODULE_1___default()[\"static\"](path__WEBPACK_IMPORTED_MODULE_0___default().join(CURRENT_WORKING_DIR, \"dist\")));\napp.use(\"/email\", function (req, res) {\n  res.status(200).json({\n    htmlEmail: (0,_emails__WEBPACK_IMPORTED_MODULE_4__[\"default\"])().toString()\n  });\n});\napp.get(\"*\", function (req, res) {\n  if (req.url === \"/__webpack_hmr\") return;\n  res.status(200).send((0,_template__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n});\nvar _default = app;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(app, \"app\", \"/home/isaaclucas/projects/email/email-template-builder/server/express.ts\");\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/home/isaaclucas/projects/email/email-template-builder/server/express.ts\");\n  reactHotLoader.register(development, \"development\", \"/home/isaaclucas/projects/email/email-template-builder/server/express.ts\");\n  reactHotLoader.register(_default, \"default\", \"/home/isaaclucas/projects/email/email-template-builder/server/express.ts\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://email-templat-builder/./server/express.ts?");

/***/ }),

/***/ "./server/server.ts":
/*!**************************!*\
  !*** ./server/server.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./express */ \"./server/express.ts\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config */ \"./config/config.ts\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io */ \"socket.io\");\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./socket */ \"./server/socket.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\nvar server = http__WEBPACK_IMPORTED_MODULE_4___default().createServer(_express__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar io = new socket_io__WEBPACK_IMPORTED_MODULE_5__.Server(server);\nmain();\nfunction main() {\n  return _main.apply(this, arguments);\n}\nfunction _main() {\n  _main = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          io.on(\"connection\", function (socket) {\n            return (0,_socket__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(io, socket);\n          });\n          _context.next = 4;\n          return server.listen(_config_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].port, function () {\n            console.log(\"Server is listening on PORT:\", _config_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].port);\n          });\n        case 4:\n          _context.next = 9;\n          break;\n        case 6:\n          _context.prev = 6;\n          _context.t0 = _context[\"catch\"](0);\n          console.log(\"Error Mongoose Connection:\", _context.t0);\n        case 9:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee, null, [[0, 6]]);\n  }));\n  return _main.apply(this, arguments);\n}\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(server, \"server\", \"/home/isaaclucas/projects/email/email-template-builder/server/server.ts\");\n  reactHotLoader.register(io, \"io\", \"/home/isaaclucas/projects/email/email-template-builder/server/server.ts\");\n  reactHotLoader.register(main, \"main\", \"/home/isaaclucas/projects/email/email-template-builder/server/server.ts\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://email-templat-builder/./server/server.ts?");

/***/ }),

/***/ "./server/socket.ts":
/*!**************************!*\
  !*** ./server/socket.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ioSocket)\n/* harmony export */ });\n/* harmony import */ var _emails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../emails */ \"./emails/index.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nfunction ioSocket(io, socket) {\n  console.info(\"connect: \".concat(socket.id));\n  socket.emit(\"layout:get\", {\n    links: [\"/\", \"order-confirmed\", \"welcome-email\", \"shipping-order\"]\n  });\n  socket.emit(\"htmlEmail:get\", {\n    msg: \"email here\",\n    htmlEmail: (0,_emails__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      color: \"red\",\n      width: 500\n    }).toString()\n  });\n  socket.on(\"disconnect\", function () {\n    console.log(\"disconnect: \".concat(socket.id));\n  });\n  socket.on(\"htmlEmail:post\", function (data) {\n    io.emit(\"htmlEmail:get\", {\n      msg: \"email here\",\n      htmlEmail: (0,_emails__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data).toString()\n    });\n  });\n}\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(ioSocket, \"ioSocket\", \"/home/isaaclucas/projects/email/email-template-builder/server/socket.ts\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://email-templat-builder/./server/socket.ts?");

/***/ }),

/***/ "./server/template.ts":
/*!****************************!*\
  !*** ./server/template.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\nvar _default = function _default() {\n  return \"<!doctype html>\\n<html lang=\\\"en\\\">\\n  <head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n   \\n    <link rel=\\\"preconnect\\\" href=\\\"https://fonts.googleapis.com\\\">\\n    <link rel=\\\"preconnect\\\" href=\\\"https://fonts.gstatic.com\\\" crossorigin>\\n    <link href=\\\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,400&display=swap\\\" rel=\\\"stylesheet\\\">\\n    <title>Web Shop</title>\\n\\n   \\n  </head>\\n  <body>\\n    <div id=\\\"root\\\" ></div>\\n    <script type=\\\"text/javascript\\\" src=\\\"/dist/bundle.js\\\">\\n    </script>\\n  </body>\\n</html>\";\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(_default, \"default\", \"/home/isaaclucas/projects/email/email-template-builder/server/template.ts\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://email-templat-builder/./server/template.ts?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "mjml-react":
/*!*****************************!*\
  !*** external "mjml-react" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("mjml-react");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("socket.io");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("webpack");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("webpack-dev-middleware");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("webpack-hot-middleware");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./server/server.ts");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;