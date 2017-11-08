(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["ElTableWrapper"] = factory(require("vue"));
	else
		root["ElTableWrapper"] = factory(root["Vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_10__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ElTableWrapper__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ElTableWrapper", function() { return __WEBPACK_IMPORTED_MODULE_0__components_ElTableWrapper__["a"]; });


var install = function install(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__components_ElTableWrapper__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__components_ElTableWrapper__["a" /* default */]);
};

__WEBPACK_IMPORTED_MODULE_0__components_ElTableWrapper__["a" /* default */].install = install;

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__components_ElTableWrapper__["a" /* default */]);



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_script_index_0_ElTableWrapper_vue__ = __webpack_require__(8);
function injectStyle (ssrContext) {
  __webpack_require__(2)
}
var normalizeComponent = __webpack_require__(7)
/* script */

/* template */
var __vue_template__ = null
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_script_index_0_ElTableWrapper_vue__["a" /* default */],
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("11565cc8", content, true);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".ll-table-pagination{margin:16px 0;padding:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.ll-table.custom-header th{padding:0;vertical-align:top}.ll-table.custom-header th div{padding:0;line-height:23px}.ll-table.custom-header th .cell{vertical-align:top;line-height:14px}.ll-table.custom-header th .cell .caret-wrapper,.ll-table.custom-header th .cell .el-table__column-filter-trigger{display:none}.ll-table.custom-header th.el-table-column--selection .cell,.ll-table.custom-header th.ll-index .cell{padding:12px 10px;line-height:23px;border-bottom:1px solid #e6ebf5}.ll-table.custom-header .table-header{width:100%}.ll-table.custom-header .table-header-title{-webkit-box-sizing:border-box;box-sizing:border-box;padding:12px 10px;line-height:23px;border-bottom:1px solid #e6ebf5;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ll-table.custom-header .table-header-title,.ll-table.custom-header .table-header-title.left{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.ll-table.custom-header .table-header-title.right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.ll-table.custom-header .table-header-title.center{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.ll-table.custom-header .table-header-title .sort-caret-wrapper{cursor:pointer;position:relative;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:24px;height:13px;line-height:23px;overflow:initial}.ll-table.custom-header .table-header-title .sort-caret-wrapper .sort-icon-wrapper{color:#878d99;width:14px;overflow:hidden;font-size:13px;line-height:23px}.ll-table.custom-header .ascending .sort-icon-wrapper .el-icon-sort-up,.ll-table.custom-header .descending .sort-icon-wrapper .el-icon-sort-down{color:#409eff}.ll-table.custom-header .table-header-content{-webkit-box-sizing:border-box;box-sizing:border-box;padding:10px;line-height:23px;cursor:default;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ll-table.custom-header .table-header-content .icon-search-delete{cursor:pointer;line-height:23px}.ll-table.custom-header .table-header-content .el-input,.ll-table.custom-header .table-header-content .el-select{width:100%;font-size:12px}.ll-table.custom-header .table-header-content .el-select .el-input input{height:26px;max-height:26px;overflow:hidden}.ll-table.custom-header .table-header-content .el-select .el-select__tags{background-color:transparent;height:22px;line-height:22px;max-height:22px;overflow:hidden}.ll-table.custom-header .table-header-content .el-select .el-tag{height:22px;line-height:22px;margin:0 0 0 6px}.ll-table.custom-header .table-header-content .el-input__inner{height:26px}", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(6)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_debounce__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_debounce__);


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//





var defaultPagination = {
  currentPage: 1,
  pageSize: 10,
  layout: 'prev,pager,next'
};

var defaultFilterMultiple = true;

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'ElTableWrapper',
  data: function data() {
    return {
      states: {
        filters: {},
        sortColumn: null,
        sortOrder: null,
        searches: {},
        pagination: this.getDefaultPagination()
      }
    };
  },

  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    columns: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    showCustomHeader: {
      type: Boolean,
      default: false
    },
    columnDefault: Object,
    pagination: [Object, {
      type: Boolean,
      default: true
    }],
    defaultSort: Object
  },
  computed: {
    localData: function localData() {
      var _this = this;

      var states = this.states;
      var dataSource = this.data;
      var data = dataSource || [];
      // 本地排序
      data = data.slice(0);
      data = this.sortData(data);
      // 筛选
      if (states.filters) {
        Object.keys(states.filters).forEach(function (columnKey) {
          var col = _this.findColumn(columnKey);
          if (!col) {
            return;
          }
          var values = states.filters[columnKey] || [];
          if (values.length === 0) {
            return;
          }
          var filterMethod = col.filterMethod;
          if (col.searchable) {
            filterMethod = col.searchMethod || _this.getDefaultSearchMethod(col);
          }
          data = filterMethod ? data.filter(function (record) {
            return values.some(function (v) {
              return filterMethod(v, record);
            });
          }) : data;
        });
      }
      return data;
    },
    currentPageData: function currentPageData() {
      var data = this.localData;
      var pagination = this.states.pagination;
      // 如果没有分页的话，默认全部展示
      if (!this.hasPagination()) {
        return data;
      }

      // 分页
      // ---
      // 当数据量少于等于每页数量时，直接设置数据
      // 否则进行读取分页数据
      var currentPage = this.getMaxCurrent(pagination.total || data.length);
      var pageSize = pagination.pageSize;
      if (data.length > pageSize) {
        data = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);
      }
      return data;
    }
  },
  watch: {
    pagination: {
      handler: function handler(val) {
        if (val === false) {
          this.states.pagination = {};
          return;
        }
        this.states.pagination = _extends({}, defaultPagination, this.states.pagination, val, {
          currentPage: val.currentPage || 1,
          pageSize: val.pageSize || 10
        });
      },
      deep: true
    }
  },
  created: function created() {},
  mounted: function mounted() {
    var _this2 = this;

    this.columns.map(function (columnAttr, i) {
      if (columnAttr.filters && columnAttr.filteredValue) {
        var values = columnAttr.filteredValue || [];
        var key = _this2.getColumnKey(columnAttr);
        _this2.states.filters[key] = values;
      }
    });

    if (this.defaulSort) {
      this.states.sortColumn = this.findColumnByProp(this.defaulSort.prop);
      this.states.sortOrder = this.defaulSort.order || 'ascending';
    }
  },

  methods: {
    onSortClick: function onSortClick(event, _ref) {
      var columnAttr = _ref.columnAttr,
          order = _ref.order,
          column = _ref.column;

      event.stopPropagation();

      var _states = this.states,
          sortColumn = _states.sortColumn,
          sortOrder = _states.sortOrder;
      // 只同时允许一列进行排序，否则会导致排序顺序的逻辑问题

      var isSortColumn = this.isSortColumn(columnAttr);
      if (!isSortColumn) {
        // 当前列未排序
        sortColumn = columnAttr;
        sortOrder = order;
      } else {
        // 当前列已排序
        if (sortOrder === order) {
          sortOrder = '';
          sortColumn = null;
        } else {
          // 切换为排序状态
          sortOrder = order;
        }
      }

      this.states.sortOrder = sortOrder;
      this.states.sortColumn = sortColumn;

      // TODO: 此处依赖el-table实现底层，有待废除
      column.order = sortOrder;

      this.$emit('sort-change', {
        column: column,
        columnAttr: sortColumn,
        prop: sortColumn ? sortColumn.prop : null,
        order: sortOrder
      });
    },
    onSearchClearClick: function onSearchClearClick(event, columnAttr) {
      event.stopPropagation();
      var key = this.getColumnKey(columnAttr);
      this.states.searches[key] = '';
      this.onSearchChange(columnAttr, '');
    },
    onSearchEnterPress: function onSearchEnterPress(event, columnAttr) {
      event.stopPropagation();
      event.preventDefault();
      var key = this.getColumnKey(columnAttr);
      var searchValue = this.states.searches[key];
      this.onSearchChange(columnAttr, searchValue);
    },
    onSearchInput: function onSearchInput(columnAttr, value) {
      var key = this.getColumnKey(columnAttr);
      this.states.searches[key] = value;
      if (columnAttr.searchOnInput) {
        this.onSearchChange(columnAttr, value);
      }
    },
    onSearchChange: function onSearchChange(columnAttr, value) {
      var key = this.getColumnKey(columnAttr);

      if (columnAttr.searchable && columnAttr.searchable === true) {
        this.states.filters = _extends({}, this.states.filters, _defineProperty({}, key, [value]));
      }

      if (this.hasPagination()) {
        var currentPage = 1;
        this.onPageCurrentChange(currentPage);
      }

      this.$emit('search-change', {
        columnAttr: columnAttr,
        prop: columnAttr.prop,
        value: value
      });
    },
    onFilterChange: function onFilterChange(columnAttr, filterdValue) {
      var values = [];
      if (filterdValue) {
        values = Array.isArray(filterdValue) ? filterdValue : [filterdValue];
      }
      var key = this.getColumnKey(columnAttr);

      this.onTableFilterChange(_defineProperty({}, key, values));
    },
    onTableSortChange: function onTableSortChange(_ref2) {
      var column = _ref2.column,
          prop = _ref2.prop,
          order = _ref2.order;

      var columnAttr = column ? this.findColumn(column.columnKey || column.property) : null;
      this.states.sortColumn = columnAttr;
      this.states.sortOrder = order;
      this.$emit('sort-change', {
        column: column,
        columnAttr: columnAttr,
        prop: prop,
        order: order
      });
    },
    onTableFilterChange: function onTableFilterChange(filters) {
      var nextFilters = _extends({}, this.states.filters, filters);

      if (this.hasPagination()) {
        // Controlled current prop will not respond user interaction
        if (!(this.pagination && _typeof(this.pagination) === 'object' && 'currentPage' in this.pagination)) {
          var currentPage = 1;
          this.onPageCurrentChange(currentPage);
        }
      }

      this.states.filters = nextFilters;
      this.$emit('filter-change', filters);
    },
    onPageSizeChange: function onPageSizeChange(size) {
      var pagination = this.states.pagination;
      if (pagination.onSizeChange) {
        pagination.onSizeChange(size);
      }
      var nextPagination = _extends({}, pagination, {
        pageSize: size
      });
      this.states.pagination = nextPagination;
      this.$emit('pagination-change', nextPagination);
    },
    onPageCurrentChange: function onPageCurrentChange(currentPage) {
      var pagination = this.states.pagination;
      if (pagination.onCurrentChange) {
        pagination.onCurrentChange(currentPage);
      }
      var nextPagination = _extends({}, pagination, {
        currentPage: currentPage || pagination.currentPage || 1
        // Controlled current prop will not respond user interaction
      });if (this.pagination && _typeof(this.pagination) === 'object' && 'currentPage' in this.pagination) {
        nextPagination.currentPage = pagination.currentPage;
      }
      this.states.pagination = nextPagination;
      this.$emit('pagination-change', nextPagination);
    },
    onHeaderTitleClick: function onHeaderTitleClick(e, _ref3) {
      var columnAttr = _ref3.columnAttr;

      var filterable = columnAttr.filters;
      if (filterable && this.showCustomHeader) {
        e.stopPropagation();
      }
    },
    onHeaderContentClick: function onHeaderContentClick(e) {
      e.stopPropagation();
    },
    getDefaultPagination: function getDefaultPagination() {
      var pagination = this.pagination || {};
      return this.hasPagination() ? _extends({}, defaultPagination, pagination) : {};
    },
    hasPagination: function hasPagination() {
      return this.pagination !== false;
    },
    sortData: function sortData(data) {
      var states = this.states;
      var sortColumn = states.sortColumn,
          sortOrder = states.sortOrder;

      if (!sortColumn || typeof sortColumn.sortable === 'string') {
        return data;
      }
      return Object(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* orderBy */])(data, sortColumn.prop, sortOrder, sortColumn.sortMethod);
    },
    getDefaultSearchMethod: function getDefaultSearchMethod(columnAttr) {
      var prop = columnAttr.prop;
      return function (value, row) {
        var elementValue = prop && prop.indexOf('.') === -1 ? row[prop] : Object(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* getValueByPath */])(row, prop);
        var elementValueStr = elementValue.toString().toLowerCase();
        var valueStr = value.toString().toLowerCase();
        return elementValueStr.indexOf(valueStr) > -1;
      };
    },
    getMaxCurrent: function getMaxCurrent(total) {
      var _states$pagination = this.states.pagination,
          currentPage = _states$pagination.currentPage,
          pageSize = _states$pagination.pageSize;

      if ((currentPage - 1) * pageSize >= total) {
        return Math.floor((total - 1) / pageSize) + 1;
      }
      return currentPage;
    },
    findColumn: function findColumn(myKey) {
      var _this3 = this;

      if (!myKey) {
        return null;
      }
      var column = void 0;
      this.columns.map(function (columnAttr) {
        if (_this3.getColumnKey(columnAttr) === myKey) {
          column = columnAttr;
        }
      });
      return column;
    },
    findColumnByProp: function findColumnByProp(key) {
      if (!key) {
        return null;
      }
      var column = void 0;
      this.columns.map(function (columnAttr) {
        if (columnAttr.prop === key) {
          column = columnAttr;
        }
      });
      return column;
    },
    getColumnKey: function getColumnKey(columnAttr, index) {
      return columnAttr.columnKey || columnAttr.prop || index;
    },
    isSortColumn: function isSortColumn(columnAttr) {
      var sortColumn = this.states.sortColumn;
      if (!columnAttr || !sortColumn) {
        return false;
      }
      return this.getColumnKey(sortColumn) === this.getColumnKey(columnAttr);
    },
    isFilterMultiple: function isFilterMultiple(columnAttr) {
      return columnAttr.hasOwnProperty('filterMultiple') ? columnAttr.filterMultiple : defaultFilterMultiple;
    },
    renderHeaderContentSearch: function renderHeaderContentSearch(h, columnAttr, column) {
      var that = this;
      var key = this.getColumnKey(columnAttr);
      if (!this.states.searches[key]) {
        __WEBPACK_IMPORTED_MODULE_1_vue___default.a.set(this.states.searches, key, '');
      }
      var value = this.states.searches[key] || '';
      return h(
        'el-input',
        __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{ 'class': 'header-content-search' }, {
          props: {
            value: value
          },
          on: {
            input: __WEBPACK_IMPORTED_MODULE_3_lodash_debounce___default()(function (value) {
              that.onSearchInput(columnAttr, value);
            }, 300)
          },
          nativeOn: {
            keyup: function keyup(e) {
              // if (e.target !== e.currentTarget) {
              //   return
              // }
              if (e.keyCode === 13) {
                // Enter
                that.onSearchEnterPress(e, columnAttr);
              }
            }
          }
        }]),
        [value && h(
          'i',
          __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{ 'class': 'el-input__icon el-icon-close icon-search-delete' }, {
            slot: 'suffix',
            on: {
              click: function click(e) {
                return that.onSearchClearClick(e, columnAttr);
              }
            }
          }]),
          []
        )]
      );
    },
    renderHeaderContentFilter: function renderHeaderContentFilter(h, columnAttr, column) {
      var that = this;
      var filters = columnAttr.filters;
      var key = this.getColumnKey(columnAttr);
      if (!this.states.filters[key]) {
        __WEBPACK_IMPORTED_MODULE_1_vue___default.a.set(this.states.filters, key, '');
      }
      var isMultiple = this.isFilterMultiple(columnAttr);
      var filterValue = this.states.filters[key];
      if (filterValue && !isMultiple) {
        filterValue = filterValue.length > 0 ? filterValue[0] : '';
      }
      return h(
        'el-select',
        __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{ 'class': 'header-content-filter' }, {
          props: {
            value: filterValue,
            placeholder: columnAttr.filterPlaceholder,
            multiple: isMultiple,
            clearable: true
          },
          on: {
            input: function input(value) {
              that.states.filters[key] = value;
              that.onFilterChange(columnAttr, value);
            },
            clear: function clear() {
              that.states.filters[key] = '';
              that.onFilterChange(columnAttr, '');
            }
          }
        }]),
        [filters && filters.map(function (filter, i) {
          return h(
            'el-option',
            {
              props: {
                label: filter.text,
                value: filter.value
              }
            },
            []
          );
        })]
      );
    },
    renderHeaderContentFilterAndSearch: function renderHeaderContentFilterAndSearch() {},
    renderHeaderContent: function renderHeaderContent(h, columnAttr, column, $index) {
      if (columnAttr.custom && columnAttr.custom.renderHeaderContent) {
        return columnAttr.custom.renderHeaderContent(h, { column: column, $index: $index });
      }

      if (columnAttr.searchable) {
        return this.renderHeaderContentSearch(h, columnAttr, column);
      }

      var filterable = columnAttr.filters;
      if (filterable) {
        return this.renderHeaderContentFilter(h, columnAttr, column);
      }

      return '';
    },
    getRenderHeaderFn: function getRenderHeaderFn(columnAttr) {
      var h = this.$createElement;

      var that = this;
      /* eslint-disable */
      var headerAlign = columnAttr.headerAlign || columnAttr.align || '';
      /* eslint-enable */
      // TODO: sort classname should be here with table-header-title
      return function (h, _ref4) {
        var column = _ref4.column,
            $index = _ref4.$index;

        return h(
          'div',
          { 'class': 'table-header' },
          [h(
            'div',
            { 'class': ['table-header-title', headerAlign],
              on: {
                'click': function click(e) {
                  return that.onHeaderTitleClick(e, {
                    columnAttr: columnAttr
                  });
                }
              }
            },
            [h(
              'span',
              null,
              [columnAttr.label]
            ), columnAttr.sortable && h(
              'span',
              { 'class': 'sort-caret-wrapper' },
              [h(
                'span',
                { 'class': 'sort-icon-wrapper' },
                [h(
                  'i',
                  { 'class': 'sort-icon el-icon-sort-up',
                    on: {
                      'click': function click($event) {
                        return that.onSortClick($event, {
                          column: column,
                          columnAttr: columnAttr,
                          order: 'ascending'
                        });
                      }
                    }
                  },
                  []
                )]
              ), h(
                'span',
                { 'class': 'sort-icon-wrapper' },
                [h(
                  'i',
                  { 'class': 'sort-icon el-icon-sort-down',
                    on: {
                      'click': function click($event) {
                        return that.onSortClick($event, {
                          column: column,
                          columnAttr: columnAttr,
                          order: 'descending'
                        });
                      }
                    }
                  },
                  []
                )]
              )]
            )]
          ), h(
            'div',
            { 'class': 'table-header-content',
              on: {
                'click': function click(e) {
                  return that.onHeaderContentClick(e);
                }
              }
            },
            [that.renderHeaderContent(h, columnAttr, column, $index)]
          )]
        );
      };
    },
    renderColumn: function renderColumn(columnProps, tableProps) {
      var h = this.$createElement;

      var propsNoCustom = _extends({}, columnProps);
      if (propsNoCustom.custom) {
        delete propsNoCustom.custom;
      }

      if (tableProps.showCustomHeader) {
        propsNoCustom.renderHeader = this.getRenderHeaderFn(columnProps);
      }

      if (columnProps.searchable && columnProps.searchable === true) {
        propsNoCustom.filterMethod = null;
        propsNoCustom.filters = null;
        delete propsNoCustom.searchable;
      }
      if (columnProps.filterMethod) {
        propsNoCustom.filterMethod = null;
      }
      if (columnProps.sortable) {
        propsNoCustom.sortable = 'custom';
      }
      if (columnProps.scopedSlot) {
        delete propsNoCustom.scopedSlot;
      }
      if (columnProps.type && columnProps.type === 'index') {
        propsNoCustom.className = propsNoCustom.className || '';
        propsNoCustom.className += ' ll-index';
      }

      return h(
        'el-table-column',
        {
          props: propsNoCustom
        },
        [columnProps && columnProps.scopedSlot ? this.$scopedSlots[columnProps.scopedSlot] : '']
      );
    },
    renderPagination: function renderPagination() {
      var h = this.$createElement;

      if (!this.hasPagination) {
        return null;
      }
      var pagination = this.states.pagination;

      var total = pagination.total || this.localData.length;
      if (!(total > 0)) {
        return null;
      }
      return h(
        'el-pagination',
        __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{ 'class': 'll-table-pagination' }, {
          props: _extends({}, pagination, {
            total: total,
            currentPage: this.getMaxCurrent(total)
          }),
          on: {
            'size-change': this.onPageSizeChange,
            'current-change': this.onPageCurrentChange
          }
        }]),
        []
      );
    }
  },
  render: function render() {
    var _this4 = this;

    var h = arguments[0];

    var that = this;
    var tableOptions = {
      showCustomHeader: this.showCustomHeader,
      data: this.currentPageData,
      defaultSort: this.defaultSort
    };
    var defaultColumnOptions = this.columnDefault || {};

    var props = _extends({}, tableOptions, this.$attrs);

    return h(
      'div',
      { 'class': 'll-table-container' },
      [h(
        'el-table',
        __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{ 'class': { 'll-table': true, 'custom-header': this.showCustomHeader },
          ref: 'll-table' }, {
          props: props,
          on: _extends({}, this.$listeners, {
            'filter-change': that.onTableFilterChange,
            'sort-change': that.onTableSortChange
          }),
          slot: 'append'
        }]),
        [this.$slots.append && h(
          'div',
          { 'class': 'll-table-body-append', slot: 'append' },
          [this.$slots.append]
        ), this.columns.map(function (column) {
          var columnOptions = _extends({}, defaultColumnOptions, column);
          return _this4.renderColumn(columnOptions, tableOptions);
        })]
      ), this.renderPagination()]
    );
  }
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var nestRE = /^(attrs|props|on|nativeOn|class|style|hook)$/

module.exports = function mergeJSXProps (objs) {
  return objs.reduce(function (a, b) {
    var aa, bb, key, nestedKey, temp
    for (key in b) {
      aa = a[key]
      bb = b[key]
      if (aa && nestRE.test(key)) {
        // normalize class
        if (key === 'class') {
          if (typeof aa === 'string') {
            temp = aa
            a[key] = aa = {}
            aa[temp] = true
          }
          if (typeof bb === 'string') {
            temp = bb
            b[key] = bb = {}
            bb[temp] = true
          }
        }
        if (key === 'on' || key === 'nativeOn' || key === 'hook') {
          // merge functions
          for (nestedKey in bb) {
            aa[nestedKey] = mergeFn(aa[nestedKey], bb[nestedKey])
          }
        } else if (Array.isArray(aa)) {
          a[key] = aa.concat(bb)
        } else if (Array.isArray(bb)) {
          a[key] = [aa].concat(bb)
        } else {
          for (nestedKey in bb) {
            aa[nestedKey] = bb[nestedKey]
          }
        }
      } else {
        a[key] = b[key]
      }
    }
    return a
  }, {})
}

function mergeFn (a, b) {
  return function () {
    a.apply(this, arguments)
    b.apply(this, arguments)
  }
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getValueByPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return orderBy; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var getValueByPath = function getValueByPath(object, prop) {
  prop = prop || '';
  var paths = prop.split('.');
  var current = object;
  var result = null;
  for (var i = 0, j = paths.length; i < j; i++) {
    var path = paths[i];
    if (!current) break;

    if (i === j - 1) {
      result = current[path];
      break;
    }
    current = current[path];
  }
  return result;
};

var isObject = function isObject(obj) {
  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
};

var orderBy = function orderBy(array, sortKey, reverse, sortMethod) {
  if (typeof reverse === 'string') {
    reverse = reverse === 'descending' ? -1 : 1;
  }
  if (!sortKey && !sortMethod) {
    return array;
  }
  var order = reverse && reverse < 0 ? -1 : 1;

  // sort on a copy to avoid mutating original array
  return array.slice().sort(sortMethod ? function (a, b) {
    var result = sortMethod(a, b);
    return result === 0 ? 0 : result > 0 ? order : -order;
  } : function (a, b) {
    if (sortKey !== '$key') {
      if (isObject(a) && '$value' in a) a = a.$value;
      if (isObject(b) && '$value' in b) b = b.$value;
    }
    a = isObject(a) ? getValueByPath(a, sortKey) : a;
    b = isObject(b) ? getValueByPath(b, sortKey) : b;
    return a === b ? 0 : a > b ? order : -order;
  });
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);
});