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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html, body {\\n    height: 100%;\\n    width: 100%;\\n    margin: 0px;\\n}\\nbody {\\n    display: flex;\\n}\\n.sidebar {\\n    width: 300px;\\n    height: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    background-color: rgb(238, 238, 238);\\n}\\n.todo-item {\\n    display: flex;\\n    gap: 15px;\\n    background-color: rgb(238, 238, 238);\\n}\\n.complete {\\n    background-color: aquamarine;\\n}\\n.inbox, .today, .week {\\n    font-weight: bold;\\n    font-size: 22px;\\n}\\n.projects-heading {\\n    font-weight: bold;\\n    font-size: 22px;\\n    margin-bottom: 5px;\\n}\\n.projects-container > div {\\n    padding-left: 10px;\\n}\\n.projects-container > div:hover {\\n    background-color: grey;\\n}\\n.dropdown {\\n    align-self: end;\\n    position: relative;\\n    display: inline-block;\\n}\\n.dropdown-content {\\n    display: none;\\n    position: absolute;\\n    flex-direction: column;\\n    background: white;\\n}\\n.dropdown-content a {\\n    display: block;\\n}\\n.new-container {\\n    margin-top: 15px;\\n    width: 100%;\\n    \\n}\\n.new-project {\\n    display: flex;\\n    align-items: center;\\n    justify-content: start;\\n    width: 100%;\\n    border: none;\\n    padding-left: 15px;\\n}\\n.new-project:hover {\\n    background-color: rgb(204, 204, 204);\\n}\\n#project-name-display {\\n    font-size: 18px;\\n    font-weight: bold;\\n}\\n.items-container {\\n}\\n#add-item {\\n    position: absolute;\\n}\\n.new-task-popup, .edit-task-popup {\\n    display: none;\\n    border: 1px solid black;\\n    padding: 7px;\\n    position: absolute;\\n    left: 30%;\\n    top: 15%;\\n    flex-direction: column;\\n    gap: 15px;\\n}\\n#new-task-form, #edit-task-form {\\n    display: flex;\\n    flex-direction: column;\\n}\\n.description {\\n    height: 60px; \\n    width: 300px;\\n}\\n.due-date-container {\\n    display: flex;\\n    gap: 10px;\\n    align-items: center;\\n}\\n#due-date {\\n\\n}\\n.task-button-container {\\n    display: flex;\\n    justify-content: space-between;\\n}\\n.priority-container {\\n    display: flex;\\n    gap: 10px;\\n}\\n.close, .close-edit {\\n    position: absolute;\\n    height: fit-content;\\n    width: fit-content;\\n    top: 0;\\n    right: 0;\\n}\\n.project-display {\\n    display: none;\\n    padding: 20px;\\n    width: 100%;\\n    flex-direction: column;\\n}\\n.project-display-heading {\\n    display: flex;\\n    justify-content: space-between;\\n}\\n#add-item-button {\\n    width: fit-content;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://projects/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://projects/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://projects/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://projects/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://projects/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://projects/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://projects/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://projects/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://projects/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://projects/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ \"./src/item.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\nconst DOMManipulation = (() => {\n\n    const body = document.querySelector('body');\n    const sidebar = document.querySelector('.sidebar');\n\n    //add name of project to list in sidebar. also add event listener so that when clicked, the projects information is displayed\n    function addProjectToSidebar(project, projects) {\n        const container = document.querySelector('.projects-container');\n        let toAdd = document.createElement('div');\n        toAdd.textContent = project.name;\n        toAdd.id = `sidebar-${project.id}`;\n        toAdd.addEventListener('click', ()=> displayProject(project));\n        container.appendChild(toAdd);\n    }\n\n    function displayProject(project) {\n        const container = document.querySelector('.project-display');\n        container.id = project.id;\n        const heading = document.createElement('div');\n        heading.classList.add('project-display-heading');\n        container.style.display = 'flex';\n        removeAllChildren(container);\n        let name = document.createElement('div')\n        name.textContent = project.name;\n        name.id = 'project-name-display';\n\n        let taskContainer = document.createElement('div');\n        taskContainer.classList.add('task-container');\n\n        let description = document.createElement('div');\n        description.textContent = project.description;\n\n        let dropDown = createDropDown(project);\n\n        let addItemBtn = document.createElement('button');\n        addItemBtn.textContent = '+ Task';\n        addItemBtn.id = 'add-item-button';\n\n        let removeBtn = document.createElement('button');\n        removeBtn.textContent = 'Remove Project';\n\n        heading.appendChild(name);\n        heading.appendChild(removeBtn);\n        if (container.id == '9999') removeBtn.style.display = 'none';\n        container.appendChild(heading);\n        container.appendChild(addItemBtn);\n        container.appendChild(taskContainer);\n         addProjectButtonClickEvents(addItemBtn, removeBtn, project);\n        container.appendChild(description);\n        container.appendChild(dropDown);\n        if (project.items.length) {\n            container.appendChild(createItemElements(project));\n        }\n        \n    }\n\n    function createDropDown(project) {\n        const container = document.createElement('div');\n        container.classList.add('dropdown');\n\n        const btn = document.createElement('button');\n        btn.textContent = 'Mark As';\n        btn.classList.add('dropbtn');\n        let dropdown = document.querySelector('.dropdown-content')\n        btn.addEventListener('click', ()=> document.querySelector('.dropdown-content').style.display = 'flex');\n        window.onclick = function(event) {\n            if (!event.target.matches('.dropbtn') && document.querySelector('.dropdown-content')) document.querySelector('.dropdown-content').style.display = 'none';\n        }\n        container.appendChild(btn);\n\n        const content = document.createElement('div');\n        content.classList.add('dropdown-content');\n        container.appendChild(content);\n\n        const itemText = ['Complete', 'Incomplete'];\n        itemText.forEach((text, i) => {\n            let item = document.createElement('a');\n            item.id = text.toLowerCase();\n            item.addEventListener('click', (e) => {\n                getCheckedItems().forEach(check => project.items.forEach(item => {\n                    if (item.id == check.id) {\n                        if (e.target.id == 'complete') {\n                        item.complete = true;\n                        check.classList.add('complete');\n                        } else {\n                            item.complete = false;\n                            check.classList.remove('complete');\n                        }\n                    }\n                }))\n            })\n            item.textContent = text;\n            content.appendChild(item);\n        })\n        return container;\n    }\n\n    function getCheckedItems() {\n        let checked = [];\n        const boxes = document.querySelectorAll('.todo-item input');\n        boxes.forEach(box => {\n            if (box.checked) checked.push(box.parentNode);\n            box.checked = false;\n        })\n        return checked;\n    }\n    //create a list of todo items for each project in the DOM\n    function createItemElements(project) {\n        const items = project.items;\n        const container = document.createElement('div');\n        container.classList.add('items-container');\n        items.forEach((item, i) => {\n            let itemElement = document.createElement('div');\n            itemElement.classList.add('todo-item');\n            if (item['complete']) itemElement.classList.add('complete');\n            itemElement.id = item.id;\n\n            let checkbox = document.createElement('input');\n            checkbox.type = 'checkbox';\n\n            let edit = document.createElement('button');\n            edit.textContent = 'Edit';\n            edit.classList.add('edit');\n            edit.id = `edit-${item.id}`;\n            edit.addEventListener('click', (e) => {\n                let taskId = document.getElementById(e.target.id).parentNode.id;\n                setEditTaskFields(taskId);\n                setEditTaskEvents(taskId);\n            })\n\n            let deleteBtn = document.createElement('button');\n            deleteBtn.textContent = 'Delete';\n            deleteBtn.classList.add('delete');\n            deleteBtn.id = `delete-${item.id}`\n            deleteBtn.addEventListener('click', (event)=> {\n                console.log(event.target.id)\n                let parent = document.getElementById(event.target.id).parentNode;\n                parent.remove();\n                project.removeItem(parent.id);\n            })\n\n            itemElement.appendChild(checkbox);\n            let keys = ['title', 'dueDate', 'priority'];\n            \n            keys.forEach(key => {\n                let field = document.createElement('div');\n                field.textContent = key == 'dueDate' ? formatDate(item[key]) : item[key];\n                itemElement.appendChild(field)\n            })\n\n            itemElement.appendChild(edit);\n            itemElement.appendChild(deleteBtn);\n            container.appendChild(itemElement);\n        })\n        return container;\n    }\n\n    function setEditTaskFields(taskId) {\n        const popup = document.querySelector('.edit-task-popup');\n        popup.style.display = 'flex';\n        const task = selectDisplayedProject().items.filter(task => task.id == taskId)[0];\n\n        let title = document.querySelector('#edit-task-form #title');\n        let description = document.querySelector('#edit-task-form .description');\n        let dueDate = document.querySelector('#edit-task-form #due-date');\n\n        title.value = task.title;\n        description.value = task.description;\n        dueDate.value = task.dueDate;\n        document.querySelectorAll('#edit-task-form .priority-container input').forEach(radio => {\n            if (task.priority == radio.value) radio.checked = true;\n        });\n    }\n\n    function setEditTaskEvents(taskId) {\n        const project = selectDisplayedProject()\n        const byId = project.items.map(e => e.id);\n        const task = selectDisplayedProject().items.filter(task => task.id == taskId)[0];\n        const form = document.getElementById('edit-task-form')\n        const newForm = form.cloneNode(true);  \n        const closeForm = () => document.querySelector('.edit-task-popup').style.display = 'none';\n        form.parentNode.replaceChild(newForm, form);\n        newForm.addEventListener('submit', ()=> {\n            let title = document.querySelector('#edit-task-form #title').value;\n            let description = document.querySelector('#edit-task-form .description').value;\n            let dueDate = document.querySelector('#edit-task-form #due-date').value;\n            document.querySelectorAll('#edit-task-form .priority-container input').forEach(radio => {\n                if (radio.checked) project.items[byId.indexOf(taskId)] = (0,_item__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(title, description, dueDate, radio.value, selectDisplayedProject());\n            });\n            displayProject(selectDisplayedProject());\n            closeForm();\n        })\n\n        const close = document.querySelector('.close-edit');\n        close.addEventListener('click', ()=> closeForm());\n        \n    }\n\n    function formatDate(date) {\n        date = new Date(date.replace(/-/g, '\\/'));\n        return date.toLocaleDateString([], {\n            month: 'short',\n            day: 'numeric',\n        })\n    }\n\n\n\n    function addProjectButtonClickEvents(addItem, removeProject, project) {\n        const taskFormContainer = document.querySelector('.new-task-popup');\n        const taskForm = document.getElementById('new-task-form');\n        taskForm.addEventListener('submit', submitForm);\n        addItem.addEventListener('click', () => {\n            taskFormContainer.style.display = 'flex';            \n        })\n        let cancel = document.querySelector('.close');\n        cancel.addEventListener('click', () => {\n            taskFormContainer.style.display = 'none';\n            taskForm.reset();\n        })\n        removeProject.addEventListener('click', ()=> {\n            document.getElementById(`sidebar-${project.id}`).remove();\n            _index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].removeProject(project);\n            removeAllChildren(document.querySelector('.project-display'));\n        });\n        function submitForm(e) {\n            project = selectDisplayedProject();\n            let title = document.querySelector('.new-task-popup #title').value;\n            let description = document.querySelector('.new-task-popup .description').value;\n            let dueDate = document.querySelector('.new-task-popup #due-date').value;\n            document.querySelectorAll('.new-task-popup .priority-container input').forEach(radio => {\n                if (radio.checked && title && dueDate) {\n                    project.addItem((0,_item__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(title, description, dueDate, radio.value, project));\n                }\n            });\n            console.log(project);\n            taskFormContainer.style.display = 'none';\n            displayProject(project);\n            taskForm.reset();\n            taskForm.removeEventListener('submit', submitForm);\n        }\n    }\n\n    \n\n    function selectDisplayedProject() {\n        const byId = _index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projects.map(e => e.id);\n        let currentId = document.querySelector('.project-display').id;\n        let project = _index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projects[byId.indexOf(currentId)];\n        return project ? project : _index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].inbox;\n    }\n    function removeAllChildren(parent) {\n        while (parent.firstChild) {\n            parent.removeChild(parent.firstChild);\n        }\n    }\n    //create a form for input. accepts type as argument, which can be 'project' or 'item'\n    function createProjectNameForm() {\n        document.querySelector('.new-project').style.display = 'none';\n\n        let container = document.createElement('div');\n        container.id = 'add-project';\n\n        let input = document.createElement('input');\n        input.type = 'text';\n        input.placeholder = 'Name';\n        container.appendChild(input);\n\n        let buttonContainer = document.createElement('div');\n\n        let submitButton = document.createElement('button');\n        submitButton.textContent = 'Submit';\n        submitButton.id = 'submit';\n        buttonContainer.appendChild(submitButton);\n\n        let cancelButton = document.createElement('button');\n        cancelButton.textContent = 'Cancel';\n        cancelButton.id = 'cancel';\n        buttonContainer.appendChild(cancelButton);\n\n        container.appendChild(buttonContainer);\n        sidebar.appendChild(container);\n    }\n\n\n\n    return {createProjectNameForm, addProjectToSidebar, displayProject};\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMManipulation);\n\n//# sourceURL=webpack://projects/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ \"./src/item.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\n\n\n\n\n\nconst Main = (() => {\n    const projects = [];\n    const inbox = (0,_project_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('Inbox', [], true);\n    _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayProject(inbox);\n    document.querySelector('.inbox').addEventListener('click', ()=> {\n        _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayProject(inbox);\n    })\n    const newProjectButton = document.querySelector('.new-project');\n    newProjectButton.addEventListener('click', ()=> {\n        _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createProjectNameForm();\n        let submit = document.getElementById('submit');\n        let cancel = document.getElementById('cancel');\n        submit.addEventListener('click', ()=> {\n            addProject();\n            document.getElementById('add-project').remove();\n            newProjectButton.style.display = 'flex';\n        })\n        cancel.addEventListener('click', () => {\n            document.getElementById('add-project').remove();\n            newProjectButton.style.display = 'flex';\n        })\n    })\n\n    const addProject = () => {\n        let name = document.querySelector('#add-project input').value;\n        if (name) {\n            let newProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(name, projects);\n            projects.push(newProject);\n            _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addProjectToSidebar(newProject, projects);\n            document.querySelector('.projects-heading').textContent = `Projects (${projects.length})`;\n            _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayProject(newProject);\n        }\n    }\n    const removeProject = (project) => {\n        let byId = projects.map(e => e.id);\n        projects.splice(byId.indexOf(project.id), 1);\n        document.querySelector('.projects-heading').textContent = `Projects (${projects.length})`;\n    }\n\n    return {removeProject, projects, inbox};\n})();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);\n\n\n//# sourceURL=webpack://projects/./src/index.js?");

/***/ }),

/***/ "./src/item.js":
/*!*********************!*\
  !*** ./src/item.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//factory function for creating objects for todo items\nconst Task = (title, description, dueDate, priority, project) => {\n    let complete = false;\n\n    const getUniqueId = () => {\n       let otherIds = project.items.map(e => Number(e.id.match(/\\d{3}$/)));\n       if (!otherIds.length) {\n        return `${project.id}-000`;\n       } else {\n        let largest = Math.max(...otherIds);\n        return `${project.id}-${(largest + 1).toString().padStart(3, '0')}`\n       }\n    }\n\n    const id = getUniqueId();\n\n\n    return {title, description, dueDate, priority, complete, id};\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://projects/./src/item.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//factory function for creating objects for projects\nconst Project = (name, projects, isInbox = false) => {\n    const items = [];\n\n    const addItem = (item) => items.push(item);\n\n    const getUniqueId = () => {\n        let otherIds = projects.map(e => Number(e.id.match(/\\d{3}$/)[0]));\n        if (!otherIds.length) {\n         return `000`;\n        } else {\n         let largest = Math.max(...otherIds);\n         return (largest + 1).toString().padStart(3, '0');\n        }\n    }\n\n    const removeItem = (itemId) => {\n        let byId = items.map(e => e.id);\n        items.splice(byId.indexOf(itemId), 1);\n    }\n\n    const id = isInbox ? '9999' : getUniqueId();\n\n    return {name, addItem, items, id, removeItem};\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n\n//# sourceURL=webpack://projects/./src/project.js?");

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;