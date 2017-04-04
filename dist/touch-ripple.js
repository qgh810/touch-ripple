(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("TouchRipple", [], factory);
	else if(typeof exports === 'object')
		exports["TouchRipple"] = factory();
	else
		root["TouchRipple"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.checkNode = checkNode;
function checkNode(el) {
  HTMLElement.prototype.__defineGetter__('currentStyle', function () {
    return this.ownerDocument.defaultView.getComputedStyle(this, null);
  });
  var result = el;
  if (!result) {
    return console.error('找不到当前节点', el);
  }
  if (typeof el === 'string') {
    var domName = el;
    result = document.querySelector(domName);
    if (!result) {
      return console.error('找不到当前节点', el);
    }
  } else if ((typeof el === 'undefined' ? 'undefined' : _typeof(el)) === 'object') {
    if (!el.nodeName) {
      return console.error('找不到当前节点', el);
    }
  }
  return result;
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});
function isPC() {
   var userAgentInfo = navigator.userAgent;
   var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
   var flag = true;
   for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
         flag = false;break;
      }
   }
   return flag;
}
exports.default = isPC;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(3);

function showWarn(str) {
  console.warn(str + ' 请参考相关文档: ' + _config.DOCUMENT_ADDR);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DOCUMENT_ADDR = exports.DOCUMENT_ADDR = 'https://github.com/qgh810/animate-text';

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _check = __webpack_require__(0);

var _log = __webpack_require__(2);

var _isPC = __webpack_require__(1);

var _isPC2 = _interopRequireDefault(_isPC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MARK_CLASSNAME = 'q-touch-ripple-mark';
var ISPC = (0, _isPC2.default)();

var TouchRipple = function () {
  function TouchRipple(el, options) {
    _classCallCheck(this, TouchRipple);

    this.initData(el, options) && this.init();
  }

  /**
   * 检查和初始化传入参数
   */


  _createClass(TouchRipple, [{
    key: 'initData',
    value: function initData(el, options) {
      this.el = (0, _check.checkNode)(el);
      if (!this.el) return;
      options = this.checkOptions(options);
      this.options = options;
      return true;
    }

    /**
     * 检查并且初始化options
     */

  }, {
    key: 'checkOptions',
    value: function checkOptions(options) {
      if (typeof options === 'string') {
        options = { color: options };
      }
      options = options || {};
      var baseOptions = {
        color: 'rgba(0,0,0,0.2)',
        time: 500,
        size: 0
      };
      for (var option in baseOptions) {
        !options[option] && (options[option] = baseOptions[option]);
      }
      return options;
    }
  }, {
    key: 'init',
    value: function init() {
      this.setElStyle();
      this.addEventListener();
    }
  }, {
    key: 'setElStyle',
    value: function setElStyle() {
      this.el.style.position = this.el.style.position || 'relative';
    }
  }, {
    key: 'addEventListener',
    value: function addEventListener() {
      if (ISPC) {
        this.el.addEventListener('mousedown', this.onMouseDown.bind(this));
        this.el.addEventListener('mouseup', this.onMouseUp.bind(this));
      } else {
        this.el.addEventListener('touchstart', this.onMouseDown.bind(this));
        this.el.addEventListener('touchend', this.onMouseUp.bind(this));
      }
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(e) {
      e.preventDefault();
      this.target = e.target;

      var _ref = ISPC ? e : e.touches[0],
          pageX = _ref.pageX,
          pageY = _ref.pageY;

      this.mouseDownPosition = { pageX: pageX, pageY: pageY };
      this.showRipples();
    }
  }, {
    key: 'showRipples',
    value: function showRipples() {
      var mark = document.createElement('div');
      mark.className = MARK_CLASSNAME;
      this.setMarkStyle(mark);
      var ripples = document.createElement('div');
      this.setRipplesStyle(ripples, mark);
      mark.appendChild(ripples);
      this.el.appendChild(mark);
    }
  }, {
    key: 'setMarkStyle',
    value: function setMarkStyle(element) {
      HTMLElement.prototype.__defineGetter__('currentStyle', function () {
        return this.ownerDocument.defaultView.getComputedStyle(this, null);
      });
      var style = element.style;

      var _el$getBoundingClient = this.el.getBoundingClientRect(),
          width = _el$getBoundingClient.width,
          height = _el$getBoundingClient.height;

      width -= parseInt(this.el.currentStyle.borderLeftWidth);
      width -= parseInt(this.el.currentStyle.borderRightWidth);
      height -= parseInt(this.el.currentStyle.borderTopWidth);
      height -= parseInt(this.el.currentStyle.borderBottomWidth);
      style.position = 'absolute';
      style.left = '0';
      style.top = '0';
      style.width = width + 'px';
      style.height = height + 'px';
      style.borderRadius = this.el.currentStyle.borderRadius;
      style.cursor = this.target.currentStyle.cursor;
      style.overflow = 'hidden';
      style.zIndex = '20';

      // style.background = 'rgba(255,0,0,0.5)'
    }
  }, {
    key: 'setRipplesStyle',
    value: function setRipplesStyle(ripples, mark) {
      var _this = this;

      var style = ripples.style;

      var _el$getBoundingClient2 = this.el.getBoundingClientRect(),
          width = _el$getBoundingClient2.width,
          height = _el$getBoundingClient2.height,
          left = _el$getBoundingClient2.left,
          top = _el$getBoundingClient2.top;

      var length = parseInt(this.options.size) || Math.max(width, height);
      style.position = 'absolute';
      var offsetLeft = this.mouseDownPosition.pageX - left - length / 2 + 'px';
      var offsetTop = this.mouseDownPosition.pageY - top - length / 2 + 'px';
      style.left = offsetLeft;
      style.top = offsetTop;
      style.width = style.height = length + 'px';
      style.background = this.options.color;
      style.borderRadius = '50%';
      style.borderRadius = '50%';
      style.transition = 'all ease ' + this.options.time / 1000 + 's';

      style.transform = 'scale(0)';
      style.opacity = 1;

      setTimeout(function () {
        style.transform = 'scale(1)';
        style.opacity = 0;
        setTimeout(function () {
          _this.onAnimationEnd(mark);
        }, _this.options.time);
      }, 0);
    }
  }, {
    key: 'onAnimationEnd',
    value: function onAnimationEnd(mark) {
      this.el.removeChild(mark);
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp() {
      this.el !== this.target && this.dispatchEvent('click', this.target);
    }
  }, {
    key: 'dispatchEvent',
    value: function dispatchEvent(eventName, el) {
      try {
        //非IE
        var evObj = document.createEvent('MouseEvents');
        evObj.initEvent(eventName, true, false);
        el.dispatchEvent(evObj);
      } catch (e) {
        //IE
        el.fireEvent('on' + eventName);
      }
    }
  }]);

  return TouchRipple;
}();

module.exports = TouchRipple;

/***/ })
/******/ ]);
});