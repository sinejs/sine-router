(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sine"] = factory();
	else
		root["sine"] = factory();
})(window, function() {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/animation/animate.js":
/*!**********************************!*\
  !*** ./src/animation/animate.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorator */ "./src/decorator/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var TRANSITION = 'transition';
var ANIMATION = 'animation';
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
var transformRE = /\b(transform|all)(,|$)/;
var AnimateService = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_2__["service"])({
  namespace: 'sine',
  selector: '$animate'
}), _dec(_class =
/*#__PURE__*/
function (_Service) {
  _inherits(AnimateService, _Service);

  function AnimateService() {
    _classCallCheck(this, AnimateService);

    return _possibleConstructorReturn(this, _getPrototypeOf(AnimateService).call(this));
  }

  _createClass(AnimateService, [{
    key: "enter",
    value: function enter(vnode, doEnter) {
      var el = vnode.htmlElement; // call leave callback now

      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](el._leaveCb)) {
        el._leaveCb.cancelled = true;

        el._leaveCb();
      }

      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](el._enterCb) || el.nodeType !== 1) {
        return;
      }

      var animation = this.resolveAnimationContext(vnode);

      if (!animation) {
        return doEnter();
      }

      var data = this.resolveAnimation(animation);
      var self = this;
      var type = data.type;
      var enterClass = data.enterClass;
      var enterToClass = data.enterToClass;
      var enterActiveClass = data.enterActiveClass;
      var duration = data.duration;
      var explicitEnterDuration = _utility__WEBPACK_IMPORTED_MODULE_0__["toNumber"](_utility__WEBPACK_IMPORTED_MODULE_0__["isObject"](duration) ? duration.enter : duration);
      var cb = el._enterCb = self.once(function () {
        self.removeAnimationClass(el, enterToClass);
        self.removeAnimationClass(el, enterActiveClass);

        if (cb.cancelled) {
          self.removeAnimationClass(el, enterClass);
          animation.enterCancelled && animation.enterCancelled(el);
        } else {
          animation.afterEnter && animation.afterEnter(el);
        }

        el._enterCb = null;
      }); // start enter animation

      animation.beforeEnter && animation.beforeEnter(el);
      self.addAnimationClass(el, enterClass);
      self.addAnimationClass(el, enterActiveClass);
      self.nextFrame(function () {
        self.removeAnimationClass(el, enterClass);

        if (!cb.cancelled) {
          self.addAnimationClass(el, enterToClass);

          if (self.isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            self.whenAnimationEnds(el, type, cb);
          }
        }
      });
      doEnter();
      animation.enter && animation.enter(el, cb);
    }
  }, {
    key: "leave",
    value: function leave(vnode, doLeave) {
      var el = vnode.htmlElement; // call enter callback now

      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](el._enterCb)) {
        el._enterCb.cancelled = true;

        el._enterCb();
      }

      var animation = this.resolveAnimationContext(vnode);

      if (!animation || el.nodeType !== 1) {
        return doLeave();
      }

      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](el._leaveCb)) {
        return;
      }

      var data = this.resolveAnimation(animation);
      var self = this;
      var type = data.type;
      var leaveClass = data.leaveClass;
      var leaveToClass = data.leaveToClass;
      var leaveActiveClass = data.leaveActiveClass;
      var duration = data.duration;
      var explicitLeaveDuration = _utility__WEBPACK_IMPORTED_MODULE_0__["toNumber"](_utility__WEBPACK_IMPORTED_MODULE_0__["isObject"](duration) ? duration.leave : duration);
      var cb = el._leaveCb = self.once(function () {
        self.removeAnimationClass(el, leaveToClass);
        self.removeAnimationClass(el, leaveActiveClass);

        if (cb.cancelled) {
          self.removeAnimationClass(el, leaveClass);
          animation.leaveCancelled && animation.leaveCancelled(el);
        } else {
          doLeave();
          animation.afterLeave && animation.afterLeave(el);
        }

        el._leaveCb = null;
      });

      if (animation.delayLeave) {
        animation.delayLeave(performLeave);
      } else {
        performLeave();
      }

      function performLeave() {
        // the delayed leave may have already been cancelled
        if (cb.cancelled) {
          return;
        }

        animation.beforeLeave && animation.beforeLeave(el);
        self.addAnimationClass(el, leaveClass);
        self.addAnimationClass(el, leaveActiveClass);
        self.nextFrame(function () {
          self.removeAnimationClass(el, leaveClass);

          if (!cb.cancelled) {
            self.addAnimationClass(el, leaveToClass);

            if (self.isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              self.whenAnimationEnds(el, type, cb);
            }
          }
        });
        animation.leave && animation.leave(el, cb);
      }
    }
  }, {
    key: "resolveAnimation",
    value: function resolveAnimation(config) {
      var res = {};

      if (config.css !== false) {
        _utility__WEBPACK_IMPORTED_MODULE_0__["extend"](res, this.autoCssAnimation(config.name || 'n'));
      }

      _utility__WEBPACK_IMPORTED_MODULE_0__["extend"](res, config);
      return res;
    }
  }, {
    key: "autoCssAnimation",
    value: function autoCssAnimation(name) {
      return {
        enterClass: name + "-enter",
        enterToClass: name + "-enter-to",
        enterActiveClass: name + "-enter-active",
        leaveClass: name + "-leave",
        leaveToClass: name + "-leave-to",
        leaveActiveClass: name + "-leave-active"
      };
    }
  }, {
    key: "once",
    value: function once(fn) {
      var called = false;
      return function () {
        if (!called) {
          called = true;
          fn.apply(this, arguments);
        }
      };
    }
  }, {
    key: "nextFrame",
    value: function nextFrame(fn) {
      requestAnimationFrame(function () {
        requestAnimationFrame(fn);
      });
    }
  }, {
    key: "addAnimationClass",
    value: function addAnimationClass(el, cls) {
      var animationClasses = el._animationClasses || (el._animationClasses = []);

      if (animationClasses.indexOf(cls) < 0) {
        animationClasses.push(cls);
        _utility__WEBPACK_IMPORTED_MODULE_0__["addClass"](el, cls);
      }
    }
  }, {
    key: "removeAnimationClass",
    value: function removeAnimationClass(el, cls) {
      if (el._animationClasses) {
        _utility__WEBPACK_IMPORTED_MODULE_0__["remove"](el._animationClasses, cls);
      }

      _utility__WEBPACK_IMPORTED_MODULE_0__["removeClass"](el, cls);
    }
  }, {
    key: "whenAnimationEnds",
    value: function whenAnimationEnds(el, expectedType, cb) {
      var ref = this.getAnimationInfo(el, expectedType);
      var type = ref.type;
      var timeout = ref.timeout;
      var propCount = ref.propCount;

      if (!type) {
        return cb();
      }

      var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
      var ended = 0;

      var end = function end() {
        el.removeEventListener(event, onEnd);
        cb();
      };

      var onEnd = function onEnd(e) {
        if (e.target === el) {
          if (++ended >= propCount) {
            end();
          }
        }
      };

      setTimeout(function () {
        if (ended < propCount) {
          end();
        }
      }, timeout + 1);
      el.addEventListener(event, onEnd);
    }
  }, {
    key: "getAnimationInfo",
    value: function getAnimationInfo(el, expectedType) {
      var styles = window.getComputedStyle(el);
      var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
      var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
      var transitionTimeout = this.getTimeout(transitionDelays, transitionDurations);
      var animationDelays = styles[animationProp + 'Delay'].split(', ');
      var animationDurations = styles[animationProp + 'Duration'].split(', ');
      var animationTimeout = this.getTimeout(animationDelays, animationDurations);
      var type;
      var timeout = 0;
      var propCount = 0;
      /* istanbul ignore if */

      if (expectedType === TRANSITION) {
        if (transitionTimeout > 0) {
          type = TRANSITION;
          timeout = transitionTimeout;
          propCount = transitionDurations.length;
        }
      } else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
          type = ANIMATION;
          timeout = animationTimeout;
          propCount = animationDurations.length;
        }
      } else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
        propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
      }

      var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
      return {
        type: type,
        timeout: timeout,
        propCount: propCount,
        hasTransform: hasTransform
      };
    }
  }, {
    key: "getTimeout",
    value: function getTimeout(delays, durations) {
      var self = this;

      while (delays.length < durations.length) {
        delays = delays.concat(delays);
      }

      return Math.max.apply(null, durations.map(function (d, i) {
        return self.toMs(d) + self.toMs(delays[i]);
      }));
    }
  }, {
    key: "toMs",
    value: function toMs(s) {
      return Number(s.slice(0, -1)) * 1000;
    }
  }, {
    key: "isValidDuration",
    value: function isValidDuration(value) {
      return typeof value === 'number' && !isNaN(value);
    }
  }, {
    key: "resolveAnimationContext",
    value: function resolveAnimationContext(element) {
      var animations = element.getDirectives().filter(function (dir) {
        return dir.animation = true;
      });

      if (animations.length) {
        return animations[0];
      }

      return null;
    }
  }]);

  return AnimateService;
}(_view__WEBPACK_IMPORTED_MODULE_1__["Service"])) || _class);

/***/ }),

/***/ "./src/animation/animation.js":
/*!************************************!*\
  !*** ./src/animation/animation.js ***!
  \************************************/
/*! exports provided: Animation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator */ "./src/decorator/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Animation = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'animation'
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(Animation, _Directive);

  function Animation() {
    var _this;

    _classCallCheck(this, Animation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Animation).call(this)); // animation type, "transition" or "animation"

    _this.animation = true;
    _this.name = '';
    _this.type = '';
    _this.css = true; // this.enterClass = '';
    // this.enterToClass = '';
    // this.enterActiveClass = '';
    // this.leaveClass = '';
    // this.leaveToClass = '';
    // this.leaveActiveClass = '';

    _this.$priority = -100;
    return _this;
  }

  _createClass(Animation, [{
    key: "nextFrame",
    value: function nextFrame(fn) {
      requestAnimationFrame(function () {
        requestAnimationFrame(fn);
      });
    } // beforeEnter() {
    //
    // }
    //
    // enter() {
    //
    // }
    //
    // afterEnter() {
    //
    // }
    //
    // enterCancelled() {
    //
    // }
    //
    // beforeLeave() {
    //
    // }
    //
    // leave() {
    //
    // }
    //
    // afterLeave() {
    //
    // }
    //
    // leaveCancelled() {
    //
    // }
    //
    // delayLeave() {
    //
    // }

  }]);

  return Animation;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);


/***/ }),

/***/ "./src/animation/index.js":
/*!********************************!*\
  !*** ./src/animation/index.js ***!
  \********************************/
/*! exports provided: Animation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animate */ "./src/animation/animate.js");
/* empty/unused harmony star reexport *//* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation */ "./src/animation/animation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return _animation__WEBPACK_IMPORTED_MODULE_1__["Animation"]; });




/***/ }),

/***/ "./src/core/attribute.js":
/*!*******************************!*\
  !*** ./src/core/attribute.js ***!
  \*******************************/
/*! exports provided: AttrNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttrNode", function() { return AttrNode; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./src/core/base.js");
/* harmony import */ var _binding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./binding */ "./src/core/binding.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 // // Window Events
// case 'on-load':
// case 'on-unload':
// // Form Element Events
// case 'on-change':
// case 'on-submit':
// case 'on-reset':
// case 'on-select':
// case 'on-blur':
// case 'on-focus':
// // Image Events
// case 'on-abort':
// // Keyboard Events
// case 'on-keydown':
// case 'on-keypress':
// case 'on-keyup':
// // Mouse Events
// case 'on-click':
// case 'on-dblclick':
// case 'on-mousedown':
// case 'on-mousemove':
// case 'on-mouseout':
// case 'on-mouseover':
// case 'on-mouseup':

var eventText = 'load unload change submit reset select blur focus abort keydown keypress keyup click dblclick mousedown mousemove mouseout mouseover mouseup';
var domEvents = eventText.split(' ');

var AttrNode =
/*#__PURE__*/
function (_VNode) {
  _inherits(AttrNode, _VNode);

  function AttrNode(name, value) {
    var _this;

    _classCallCheck(this, AttrNode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AttrNode).call(this, _base__WEBPACK_IMPORTED_MODULE_1__["VNodeType"].attribute, name, value));
    _this.quote = '"';
    _this.origin = name;
    _this.isEvent = false;
    _this.isBinding = false;
    _this.isDomEvent = false;
    _this.isDirective = false;
    _this.directive = null;
    _this.ownerElement = null;
    _this.ownerComponent = null;
    _this.htmlElement = null;
    _this.binding = new _binding__WEBPACK_IMPORTED_MODULE_2__["Binding"]();
    _this.priority = 0;
    return _this;
  }

  _createClass(AttrNode, [{
    key: "belongTo",
    value: function belongTo(key) {
      return this.origin === key;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.nodeValue = value;
      this.compile(this.options);
    }
  }, {
    key: "observe",
    value: function observe(action) {
      this.binding.observe(action);
    }
  }, {
    key: "compile",
    value: function compile(options) {
      this.isEvent = this.nodeName.startsWith('@');
      this.isBinding = this.nodeName.startsWith(':');
      this.isDirective = this.nodeName.startsWith('*');

      if (this.isEvent || this.isBinding || this.isDirective) {
        this.nodeName = this.nodeName.substr(1);
      }

      this.isDomEvent = _utility__WEBPACK_IMPORTED_MODULE_0__["contains"](domEvents, this.nodeName);
      this.binding.setOutput(this.isEvent);
      this.binding.bind(this.nodeValue, this.isEvent || this.isBinding || this.isDirective);

      if (this.isDirective) {
        if (options.containsDirective(this.nodeName)) {
          this.directive = options.createDirective(this.nodeName);
          this.directive.$bindNode(this);
          this.binding.setOutput(this.directive.$output);
          this.priority = this.directive.$priority;
        } else {
          throw new Error('directive ' + this.nodeName + ' is not defined');
        }
      }
    }
  }, {
    key: "notifyCompiled",
    value: function notifyCompiled(options) {
      if (this.directive != null) {
        this.directive.$compile(options);
      }
    }
  }, {
    key: "link",
    value: function link(scope, htmlElement, ownerComponent) {
      var self = this;
      this.scope = scope;
      this.htmlElement = htmlElement;
      this.ownerComponent = ownerComponent;
      this.binding.setScope(scope);

      if (this.isEvent) {
        if (this.isDomEvent) {
          this.htmlElement.addEventListener(this.nodeName, function (e) {
            self.binding.compute({
              locals: {
                $event: e,
                $args: null,
                $element: self.htmlElement
              }
            });
          });
        } else if (ownerComponent != null) {
          ownerComponent.$listen(this.nodeName, function (e, args) {
            self.binding.compute({
              locals: {
                $event: e,
                $args: args,
                $element: self.htmlElement
              }
            });
          });
        }
      } else {
        if (this.directive) {
          scope.$$childDirectives.push(this.directive);
          this.directive.$setBinding(this.binding);
        } else if (ownerComponent != null && ownerComponent.$hasAttr(this.nodeName)) {
          ownerComponent.$initAttr(this.nodeName, this.binding.compute());
        } else {
          if (this.nodeName.startsWith('style')) {
            _utility__WEBPACK_IMPORTED_MODULE_0__["setProperty"](this.htmlElement, this.nodeName, this.binding.compute());
          } else {
            this.htmlElement.setAttribute(this.nodeName, this.binding.compute());
          }
        }

        this.observe(function () {
          self.update();
        });
      }
    }
  }, {
    key: "detect",
    value: function detect() {
      if (this.directive == null) {
        if (this.hasChange()) {
          this.update();
        }
      } else {
        this.directive.$detect();
      }
    }
  }, {
    key: "hasChange",
    value: function hasChange() {
      return this.binding.detect();
    }
  }, {
    key: "update",
    value: function update() {
      if (this.directive != null) {
        this.directive.$update();
      } else {
        if (this.ownerComponent != null && this.ownerComponent.$hasAttr(this.nodeName)) {
          this.ownerComponent.$setAttr(this.nodeName, this.binding.value);
        } else {
          if (this.nodeName.startsWith('style')) {
            _utility__WEBPACK_IMPORTED_MODULE_0__["setProperty"](this.htmlElement, this.nodeName, this.binding.value);
          } else {
            this.htmlElement.setAttribute(this.nodeName, this.binding.value);

            if (this.htmlElement.nodeName === 'INPUT' && this.nodeName === 'value') {
              this.htmlElement.value = this.binding.value;
            }
          }
        }
      }
    }
  }, {
    key: "notifyLinked",
    value: function notifyLinked() {
      if (this.directive) {
        this.directive.$insert();
      }
    }
  }, {
    key: "getDirective",
    value: function getDirective(key) {
      if (key == null) {
        return this.directive;
      }

      if (this.directive != null && this.directive.$$meta.selector === key) {
        return this.directive;
      }

      return null;
    }
  }, {
    key: "getOuterTpl",
    value: function getOuterTpl() {
      return this.origin + (this.nodeValue == null ? '' : '=' + this.quote + this.nodeValue + this.quote);
    }
  }, {
    key: "getInnerTpl",
    value: function getInnerTpl() {
      return this.origin + (this.nodeValue == null ? '' : '=' + this.quote + this.nodeValue + this.quote);
    }
  }, {
    key: "dispose",
    value: function dispose(isFromDirective) {
      if (isFromDirective) {
        this.directive = null;
      }

      this.binding.destroy();
      this.binding = null;
      this.ownerElement = null;
      this.ownerComponent = null;
      this.htmlElement = null;
      this.$destroy();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.directive != null) {
        this.directive.$dispose(true);
        this.directive = null;
      }

      this.dispose();
    }
  }]);

  return AttrNode;
}(_base__WEBPACK_IMPORTED_MODULE_1__["VNode"]);



/***/ }),

/***/ "./src/core/base.js":
/*!**************************!*\
  !*** ./src/core/base.js ***!
  \**************************/
/*! exports provided: VNodeType, VNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VNodeType", function() { return VNodeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VNode", function() { return VNode; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var VNodeType = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  entity: 6,
  processingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12,
  connection: 101
}; // virtual node

var VNode =
/*#__PURE__*/
function () {
  function VNode(type, name, value) {
    _classCallCheck(this, VNode);

    this.nodeType = type;
    this.nodeName = name;
    this.nodeValue = value;
    this.childNodes = [];
    this.parentNode = null;
    this.previousSibling = null;
    this.nextSibling = null;
    this.firstChild = null;
    this.lastChild = null;
    this.ownerDocument = null;
    this.scope = null;
  }

  _createClass(VNode, [{
    key: "$pushChild",
    value: function $pushChild(child) {
      child.parentNode = this;
      this.childNodes.push(child);
    }
  }, {
    key: "$buildSibling",
    value: function $buildSibling() {
      if (this.childNodes.length === 0) {
        return;
      }

      var self = this;

      if (this.childNodes.length === 1) {
        this.firstChild = this.childNodes[0];
        this.lastChild = this.childNodes[0];
      } else {
        this.firstChild = this.childNodes[0];
        this.lastChild = this.childNodes[this.childNodes.length - 1];
        this.childNodes.forEach(function (child, index) {
          if (index === 0) {
            child.nextSibling = self.childNodes[index + 1];
            return;
          }

          if (index === self.childNodes.length - 1) {
            child.previousSibling = self.childNodes[index - 1];
            return;
          }

          child.previousSibling = self.childNodes[index - 1];
          child.nextSibling = self.childNodes[index + 1];
        });
      }

      this.childNodes.forEach(function (child) {
        child.$buildSibling();
      });
    }
  }, {
    key: "$clearParentAndSibling",
    value: function $clearParentAndSibling() {
      this.parentNode = null;
      this.previousSibling = null;
      this.nextSibling = null;
    }
  }, {
    key: "$remove",
    value: function $remove() {
      if (this.parentNode != null) {
        this.parentNode.removeChild(this);
      }
    }
  }, {
    key: "$destroy",
    value: function $destroy() {
      this.$remove();
      this.$clearParentAndSibling();
      this.childNodes.length = 0;
      this.firstChild = null;
      this.lastChild = null;
      this.ownerDocument = null;
      this.scope = null;
    }
  }, {
    key: "hasChildNodes",
    value: function hasChildNodes() {
      return this.childNodes.length !== 0;
    }
  }, {
    key: "clearChildNodes",
    value: function clearChildNodes() {
      this.childNodes.forEach(function (child) {
        child.destroy();
      });
      this.childNodes.length = 0;
    }
  }, {
    key: "appendChild",
    value: function appendChild(child) {
      if (child.parentNode != null) {
        child.parentNode.removeChild(child);
      }

      child.parentNode = this;

      if (this.childNodes.length === 0) {
        this.firstChild = child;
      } else {
        this.lastChild.nextSibling = child;
        child.previousSibling = this.lastChild;
      }

      child.compile(this.compileOptions);
      this.lastChild = child;
      this.childNodes.push(child);
      return child;
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(refChild, newChild) {
      if (newChild.parentNode != null) {
        newChild.parentNode.removeChild(newChild);
      }

      var index = this.childNodes.indexOf(refChild);

      if (index === -1) {
        throw new Error('Ref node is not a child of specified node');
      }

      newChild.parentNode = this;

      if (refChild.previousSibling != null) {
        newChild.previousSibling = refChild.previousSibling;
        refChild.previousSibling.nextSibling = newChild;
      }

      newChild.nextSibling = refChild;
      refChild.previousSibling = newChild;

      if (index === 0) {
        this.firstChild = newChild;
      }

      newChild.compile(this.compileOptions);
      this.childNodes.splice(index, 0, newChild);
      return newChild;
    }
  }, {
    key: "insertAfter",
    value: function insertAfter(refChild, newChild) {
      if (refChild.nextSibling == null) {
        return this.appendChild(newChild);
      }

      return this.insertBefore(refChild.nextSibling, newChild);
    }
  }, {
    key: "removeChild",
    value: function removeChild(child) {
      var index = this.childNodes.indexOf(child);

      if (index === -1) {
        throw new Error('Remove node is not a child of specified node');
      }

      if (child.previousSibling != null) {
        child.previousSibling.nextSibling = child.nextSibling;
      }

      if (child.nextSibling != null) {
        child.nextSibling.previousSibling = child.previousSibling;
      }

      if (index === 0) {
        this.firstChild = child.nextSibling;
      }

      if (index === this.childNodes.length - 1) {
        this.lastChild = child.previousSibling;
      }

      child.$clearParentAndSibling();
      this.childNodes.splice(index, 1);
      return child;
    }
  }, {
    key: "replaceChild",
    value: function replaceChild(refChild, newChild) {
      if (newChild.parentNode != null) {
        newChild.parentNode.removeChild(newChild);
      }

      var index = this.childNodes.indexOf(refChild);

      if (index === -1) {
        throw new Error('Ref node is not a child of specified node');
      }

      newChild.parentNode = this;
      newChild.previousSibling = refChild.previousSibling;
      newChild.nextSibling = refChild.nextSibling;

      if (this.firstChild === refChild) {
        this.firstChild = newChild;
      }

      if (this.lastChild === refChild) {
        this.lastChild = newChild;
      }

      refChild.$clearParentAndSibling();
      newChild.compile(this.compileOptions);
      this.childNodes.splice(index, 1, newChild);
      return newChild;
    }
  }, {
    key: "cloneNode",
    value: function cloneNode() {
      throw new Error('not implemented');
    }
  }, {
    key: "compile",
    value: function compile(options) {
      this.childNodes.forEach(function (child) {
        child.compile(options);
      });
    }
  }, {
    key: "notifyCompiled",
    value: function notifyCompiled(options) {
      this.childNodes.forEach(function (child) {
        child.notifyCompiled(options);
      });
    }
  }, {
    key: "link",
    value: function link(scope) {
      this.scope = scope;
      return this.childNodes.map(function (child) {
        child.link(scope);
      });
    }
  }, {
    key: "notifyLinked",
    value: function notifyLinked() {
      this.childNodes.forEach(function (child) {
        child.notifyLinked();
      });
    }
  }, {
    key: "detect",
    value: function detect() {
      if (this.hasChange()) {
        this.update();
      }
    }
  }, {
    key: "hasChange",
    value: function hasChange() {
      return false;
    }
  }, {
    key: "update",
    value: function update() {}
  }, {
    key: "destroy",
    value: function destroy() {
      this.childNodes.map(function (child) {
        child.destroy();
      });
      this.$destroy();
    }
  }]);

  return VNode;
}();



/***/ }),

/***/ "./src/core/binding.js":
/*!*****************************!*\
  !*** ./src/core/binding.js ***!
  \*****************************/
/*! exports provided: Binding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Binding", function() { return Binding; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parser */ "./src/parser/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var ExpNode =
/*#__PURE__*/
function () {
  function ExpNode(text) {
    _classCallCheck(this, ExpNode);

    this.text = text;
    this.value = null;
    this.oldValue = null;
  }

  _createClass(ExpNode, [{
    key: "compute",
    value: function compute(scope, options) {
      this.oldValue = this.value;
      this.value = Object(_parser__WEBPACK_IMPORTED_MODULE_1__["compute"])(this.text, scope, options);
    }
  }, {
    key: "detect",
    value: function detect() {
      return this.value !== this.oldValue;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.value = null;
      this.oldValue = null;
    }
  }]);

  return ExpNode;
}();

var Binding =
/*#__PURE__*/
function () {
  function Binding() {
    _classCallCheck(this, Binding);

    this.scope = null;
    this.text = '';
    this.isExp = false;
    this.segments = [];
    this.rightStr = '';
    this.output = false;
    this.value = null;
    this.oldValue = null;
    this.unwatches = [];
    this.change = new _utility__WEBPACK_IMPORTED_MODULE_0__["Messenger"]();
  }

  _createClass(Binding, [{
    key: "setScope",
    value: function setScope(value) {
      this.scope = value;
    }
  }, {
    key: "setOutput",
    value: function setOutput(value) {
      this.output = value;
    }
  }, {
    key: "bind",
    value: function bind(text, isExp) {
      if (text == null) {
        return;
      }

      this.text = text;
      this.isExp = isExp;

      if (isExp) {
        this.segments.push({
          exp: new ExpNode(text),
          leftStr: ''
        });
        return;
      }

      var pattern = /{{([^}]*)}}/g;
      var lastIndex = pattern.lastIndex;
      var match = pattern.exec(text);

      while (match != null) {
        this.segments.push({
          index: match.index,
          exp: new ExpNode(match[1]),
          leftStr: text.substring(lastIndex, match.index)
        });
        lastIndex = pattern.lastIndex;
        match = pattern.exec(text);
      }

      if (this.segments.length > 0 && lastIndex < text.length) {
        this.rightStr = text.substring(lastIndex);
      }
    }
  }, {
    key: "compute",
    value: function compute(options) {
      var self = this;
      options = options || {};
      this.oldValue = this.value;

      if (this.segments.length === 0) {
        this.value = this.text;
      } else {
        if (this.isExp && this.segments.length === 1) {
          this.segments[0].exp.compute(self.scope, options);
          this.value = this.segments[0].exp.value;
        } else {
          var text = '';
          this.segments.forEach(function (segment) {
            segment.exp.compute(self.scope, options);
            text += segment.leftStr + segment.exp.value;
          });
          this.value = text + this.rightStr;
        }
      }

      return this.value;
    }
  }, {
    key: "assign",
    value: function assign(value) {
      var assignment = Object(_parser__WEBPACK_IMPORTED_MODULE_1__["parseAssignment"])(this.text, this.scope);

      if (assignment.obj != null && assignment.prop != null) {
        assignment.obj.toProxy()[assignment.prop] = value;
      }
    }
  }, {
    key: "listen",
    value: function listen() {
      var self = this;
      this.unwatches = this.segments.map(function (segment) {
        return self.scope.$watch(segment.exp.text, function () {
          self.defer(function () {
            if (self.detect()) {
              self.change.fire();
            }
          });
        });
      });
    }
  }, {
    key: "defer",
    value: function defer(action) {
      var self = this;
      this.cancelTimeout();
      this.timeoutId = setTimeout(function () {
        self.timeoutId = null;
        action.call(self);
      });
    }
  }, {
    key: "cancelTimeout",
    value: function cancelTimeout() {
      if (this.timeoutId != null) {
        clearTimeout(this.timeoutId);
        this.timeoutId = null;
      }
    }
  }, {
    key: "observe",
    value: function observe(action) {
      if (this.output) {
        return;
      }

      this.listen();
      this.change.on(action);
      return function () {
        this.change.off(action);
      };
    }
  }, {
    key: "detect",
    value: function detect() {
      if (this.output) {
        return false;
      }

      this.compute();
      return this.value !== this.oldValue; // return this.segments.some(function (segment) {
      //     return segment.exp.detect();
      // });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.cancelTimeout();
      this.unwatches.forEach(function (unwatch) {
        unwatch.call();
      });
      this.segments.forEach(function (segment) {
        segment.exp.destroy();
      });
      this.segments = null;
      this.scope = null;
      this.value = null;
      this.oldValue = null;
    }
  }]);

  return Binding;
}();



/***/ }),

/***/ "./src/core/cdatasection.js":
/*!**********************************!*\
  !*** ./src/core/cdatasection.js ***!
  \**********************************/
/*! exports provided: CDataSectionNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDataSectionNode", function() { return CDataSectionNode; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/core/base.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var CDataSectionNode =
/*#__PURE__*/
function (_VNode) {
  _inherits(CDataSectionNode, _VNode);

  function CDataSectionNode() {
    _classCallCheck(this, CDataSectionNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(CDataSectionNode).call(this, _base__WEBPACK_IMPORTED_MODULE_0__["VNodeType"].cdataSection));
  }

  return CDataSectionNode;
}(_base__WEBPACK_IMPORTED_MODULE_0__["VNode"]);



/***/ }),

/***/ "./src/core/comment.js":
/*!*****************************!*\
  !*** ./src/core/comment.js ***!
  \*****************************/
/*! exports provided: CommentNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentNode", function() { return CommentNode; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/core/base.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var CommentNode =
/*#__PURE__*/
function (_VNode) {
  _inherits(CommentNode, _VNode);

  function CommentNode() {
    _classCallCheck(this, CommentNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(CommentNode).call(this, _base__WEBPACK_IMPORTED_MODULE_0__["VNodeType"].comment, '#comment'));
  }

  _createClass(CommentNode, [{
    key: "link",
    value: function link() {
      return document.createComment(this.nodeValue);
    }
  }, {
    key: "getOuterTpl",
    value: function getOuterTpl() {
      return this.nodeValue;
    }
  }, {
    key: "getInnerTpl",
    value: function getInnerTpl() {
      return this.nodeValue;
    }
  }]);

  return CommentNode;
}(_base__WEBPACK_IMPORTED_MODULE_0__["VNode"]);



/***/ }),

/***/ "./src/core/connection.js":
/*!********************************!*\
  !*** ./src/core/connection.js ***!
  \********************************/
/*! exports provided: ConnectionNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionNode", function() { return ConnectionNode; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./src/core/base.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ConnectionNode =
/*#__PURE__*/
function (_VNode) {
  _inherits(ConnectionNode, _VNode);

  function ConnectionNode(name, linker) {
    var _this;

    _classCallCheck(this, ConnectionNode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConnectionNode).call(this, _base__WEBPACK_IMPORTED_MODULE_1__["VNodeType"].connection, name));
    _this.linker = linker;
    return _this;
  }

  _createClass(ConnectionNode, [{
    key: "link",
    value: function link(scope) {
      this.scope = scope;
      return this.linker.call(this, scope);
    }
  }, {
    key: "notifyLinked",
    value: function notifyLinked() {
      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onInsert)) {
        return this.onInsert.call(this);
      }
    }
  }, {
    key: "detect",
    value: function detect() {
      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onDetect)) {
        return this.onDetect.call(this);
      }
    }
  }, {
    key: "hasChange",
    value: function hasChange() {
      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onHasChange)) {
        return this.onHasChange.call(this);
      }
    }
  }, {
    key: "update",
    value: function update() {
      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onUpdate)) {
        return this.onUpdate.call(this);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onDestroy)) {
        return this.onDestroy.call(this);
      }

      this.$destroy();
    }
  }]);

  return ConnectionNode;
}(_base__WEBPACK_IMPORTED_MODULE_1__["VNode"]);



/***/ }),

/***/ "./src/core/doctype.js":
/*!*****************************!*\
  !*** ./src/core/doctype.js ***!
  \*****************************/
/*! exports provided: DocumentTypeNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentTypeNode", function() { return DocumentTypeNode; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/core/base.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var DocumentTypeNode =
/*#__PURE__*/
function (_VNode) {
  _inherits(DocumentTypeNode, _VNode);

  function DocumentTypeNode() {
    _classCallCheck(this, DocumentTypeNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(DocumentTypeNode).call(this, _base__WEBPACK_IMPORTED_MODULE_0__["VNodeType"].documentType));
  }

  return DocumentTypeNode;
}(_base__WEBPACK_IMPORTED_MODULE_0__["VNode"]);



/***/ }),

/***/ "./src/core/document.js":
/*!******************************!*\
  !*** ./src/core/document.js ***!
  \******************************/
/*! exports provided: DocumentNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentNode", function() { return DocumentNode; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/core/base.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var DocumentNode =
/*#__PURE__*/
function (_VNode) {
  _inherits(DocumentNode, _VNode);

  function DocumentNode() {
    _classCallCheck(this, DocumentNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(DocumentNode).call(this, _base__WEBPACK_IMPORTED_MODULE_0__["VNodeType"].document));
  }

  return DocumentNode;
}(_base__WEBPACK_IMPORTED_MODULE_0__["VNode"]);



/***/ }),

/***/ "./src/core/element.js":
/*!*****************************!*\
  !*** ./src/core/element.js ***!
  \*****************************/
/*! exports provided: ElementNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementNode", function() { return ElementNode; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./src/core/base.js");
/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connection */ "./src/core/connection.js");
/* harmony import */ var _attribute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attribute */ "./src/core/attribute.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parser */ "./src/parser/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var ElementNode =
/*#__PURE__*/
function (_VNode) {
  _inherits(ElementNode, _VNode);

  _createClass(ElementNode, [{
    key: "parentElement",
    get: function get() {
      return this.parentNode;
    }
  }]);

  function ElementNode() {
    var _this;

    _classCallCheck(this, ElementNode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ElementNode).call(this, _base__WEBPACK_IMPORTED_MODULE_1__["VNodeType"].element, name));
    _this.attributes = [];
    _this.htmlElement = null;
    _this.component = null;
    _this.selfClosed = false;
    _this.compileOptions = null;
    _this.isComponent = false;
    return _this;
  }

  _createClass(ElementNode, [{
    key: "$pushAttribute",
    value: function $pushAttribute(attr) {
      attr.ownerElement = this;
      this.attributes.push(attr);
    }
  }, {
    key: "hasAttributes",
    value: function hasAttributes() {
      return this.attributes.length !== 0;
    }
  }, {
    key: "getAttribute",
    value: function getAttribute(key) {
      var matches = this.attributes.filter(function (attr) {
        return attr.belongTo(key);
      });

      if (!matches.length) {
        return null;
      }

      return matches[0];
    }
  }, {
    key: "setAttribute",
    value: function setAttribute(key, value) {
      var target,
          matches = this.attributes.filter(function (attr) {
        return attr.belongTo(key);
      });

      if (matches.length > 0) {
        target = matches[0];
        target.setValue(value);
      } else {
        target = new _attribute__WEBPACK_IMPORTED_MODULE_3__["AttrNode"](key, value);
        target.ownerElement = this;
        target.compile(this.compileOptions);
      }

      this.attributes.push(target);
      return target;
    }
  }, {
    key: "removeAttribute",
    value: function removeAttribute(key) {
      var target = [],
          self = this;

      if (key instanceof _attribute__WEBPACK_IMPORTED_MODULE_3__["AttrNode"]) {
        var index = this.attributes.indexOf(key);

        if (index !== -1) {
          target = self.attributes.splice(index, 1);
        }
      } else {
        this.attributes.filter(function (attr) {
          return attr.belongTo(key);
        }).forEach(function (match) {
          var index = self.attributes.indexOf(match);
          match.destroy();
          target = self.attributes.splice(index, 1);
        });
      }

      return target.length > 0 ? target[0] : null;
    }
  }, {
    key: "appendAttribute",
    value: function appendAttribute(attr) {
      if (attr.ownerElement != null) {
        throw new Error("Current attribute is not new!");
      }

      attr.ownerElement = this;
      attr.compile(this.compileOptions);
      this.attributes.push(attr);
      return attr;
    }
  }, {
    key: "observe",
    value: function observe(key, action) {
      var matches = this.attributes.filter(function (attr) {
        return attr.belongTo(key);
      });

      if (!matches.length) {
        return;
      }

      return matches[0].observe(action);
    }
  }, {
    key: "getOuterTpl",
    value: function getOuterTpl() {
      var attrTpl = '',
          childTpl = '';
      this.attributes.forEach(function (attr) {
        attrTpl += ' ';
        attrTpl += attr.getOuterTpl();
      });
      this.childNodes.forEach(function (child) {
        childTpl += child.getOuterTpl();
      });
      var tpl = '<' + this.nodeName + attrTpl + '>' + childTpl;

      if (!this.selfClosed) {
        tpl += '</' + this.nodeName + '>';
      }

      return tpl;
    }
  }, {
    key: "getInnerTpl",
    value: function getInnerTpl() {
      var childTpl = '';
      this.childNodes.forEach(function (child) {
        childTpl += child.getOuterTpl();
      });
      return childTpl;
    }
  }, {
    key: "setOuterTpl",
    value: function setOuterTpl(tpl) {
      var self = this;
      Object(_parser__WEBPACK_IMPORTED_MODULE_4__["parse"])(tpl).forEach(function (vnode) {
        vnode.parentNode = null;
        self.parentNode.insertBefore(self, vnode);
      });
      self.parentNode.removeChild(self);
    }
  }, {
    key: "setInnerTpl",
    value: function setInnerTpl(tpl) {
      var self = this;
      this.clearChildNodes();
      Object(_parser__WEBPACK_IMPORTED_MODULE_4__["parse"])(tpl).forEach(function (vnode) {
        vnode.parentNode = null;
        self.appendChild(vnode);
      });
    }
  }, {
    key: "getDirective",
    value: function getDirective(key) {
      var result = null;
      this.attributes.some(function (attr) {
        result = attr.getDirective(key);
        return result != null;
      });
      return result;
    }
  }, {
    key: "getDirectives",
    value: function getDirectives() {
      return this.attributes.map(function (attr) {
        return attr.getDirective();
      }).filter(function (dir) {
        return dir != null;
      });
    }
  }, {
    key: "compile",
    value: function compile(options) {
      this.compileOptions = options;
      this.attributes.forEach(function (attr) {
        attr.compile(options);
      }); // perform directive according to priority

      this.attributes = _utility__WEBPACK_IMPORTED_MODULE_0__["orderBy"](this.attributes, function (item) {
        return item.priority;
      });
      this.isComponent = options.containsComponent(this.nodeName);

      if (!this.isComponent) {
        this.childNodes.forEach(function (child) {
          child.compile(options);
        });
      }
    }
  }, {
    key: "notifyCompiled",
    value: function notifyCompiled(options) {
      this.attributes.forEach(function (attr) {
        attr.notifyCompiled(options);
      });

      if (this.component == null) {
        this.childNodes.forEach(function (child) {
          child.notifyCompiled(options);
        });
      }
    }
  }, {
    key: "link",
    value: function link(scope) {
      var self = this;
      self.scope = scope;
      self.htmlElement = document.createElement(self.nodeName);

      if (this.isComponent) {
        this.component = scope.$createChildCmp(this.nodeName);
        this.component.$bindNode(this);
        self.attributes.forEach(function (attr) {
          attr.link(scope, self.htmlElement, self.component);
        });
        self.component.$initAttrDone();
        self.component.$mount(self.htmlElement);
      } else {
        this.attributes.forEach(function (attr) {
          attr.link(scope, self.htmlElement);
        });
        self.childNodes.forEach(function (child) {
          self.htmlElement.appendChild(child.link(scope));
        });
      }

      return self.htmlElement;
    }
  }, {
    key: "notifyLinked",
    value: function notifyLinked() {
      this.attributes.forEach(function (attr) {
        attr.notifyLinked();
      });

      if (this.component == null) {
        this.childNodes.forEach(function (child) {
          child.notifyLinked();
        });
      }
    }
  }, {
    key: "detect",
    value: function detect() {
      this.attributes.forEach(function (attr) {
        attr.detect();
      });

      if (this.component == null) {
        this.childNodes.forEach(function (child) {
          child.detect();
        });
      }
    }
  }, {
    key: "dispose",
    value: function dispose(isFromComponent) {
      if (this.component == null) {
        this.childNodes.forEach(function (child) {
          child.destroy();
        });
      } else if (isFromComponent) {
        this.component = null;
      }

      this.attributes.forEach(function (attr) {
        attr.destroy();
      });
      this.attributes.length = 0;
      this.removeHtmlElement();
      this.compileOptions = null;
      this.$destroy();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.component != null) {
        this.component.$dispose(true);
        this.component = null;
      }

      this.dispose();
    }
  }, {
    key: "getHtmlElement",
    value: function getHtmlElement() {
      return this.htmlElement;
    }
  }, {
    key: "removeHtmlElement",
    value: function removeHtmlElement() {
      if (this.htmlElement != null) {
        _utility__WEBPACK_IMPORTED_MODULE_0__["removeNode"](this.htmlElement);
      }
    }
  }, {
    key: "createElement",
    value: function createElement(name) {
      return new ElementNode(name);
    }
  }, {
    key: "createAttr",
    value: function createAttr(name) {
      return new _attribute__WEBPACK_IMPORTED_MODULE_3__["AttrNode"](name);
    }
  }, {
    key: "createConnection",
    value: function createConnection(name, linker) {
      return new _connection__WEBPACK_IMPORTED_MODULE_2__["ConnectionNode"](name, linker);
    }
  }]);

  return ElementNode;
}(_base__WEBPACK_IMPORTED_MODULE_1__["VNode"]);



/***/ }),

/***/ "./src/core/fragment.js":
/*!******************************!*\
  !*** ./src/core/fragment.js ***!
  \******************************/
/*! exports provided: DocumentFragmentNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentFragmentNode", function() { return DocumentFragmentNode; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/core/base.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var DocumentFragmentNode =
/*#__PURE__*/
function (_VNode) {
  _inherits(DocumentFragmentNode, _VNode);

  function DocumentFragmentNode() {
    _classCallCheck(this, DocumentFragmentNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(DocumentFragmentNode).call(this, _base__WEBPACK_IMPORTED_MODULE_0__["VNodeType"].documentFragment, '#document-fragment'));
  }

  return DocumentFragmentNode;
}(_base__WEBPACK_IMPORTED_MODULE_0__["VNode"]);



/***/ }),

/***/ "./src/core/handler.js":
/*!*****************************!*\
  !*** ./src/core/handler.js ***!
  \*****************************/
/*! exports provided: GetPropertyHandler, SetPropertyHandler, AccessPropertyHandler, propChangingMsg, propChangedMsg, getTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPropertyHandler", function() { return GetPropertyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPropertyHandler", function() { return SetPropertyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessPropertyHandler", function() { return AccessPropertyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propChangingMsg", function() { return propChangingMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propChangedMsg", function() { return propChangedMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTarget", function() { return getTarget; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var propChangingMsg = new _utility__WEBPACK_IMPORTED_MODULE_0__["Messenger"]();
var propChangedMsg = new _utility__WEBPACK_IMPORTED_MODULE_0__["Messenger"]();
var targetKey = '__target__';

function getTarget(value) {
  if (Object(_utility__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value)) {
    var target = value[targetKey]; // value is a proxy return by proxy handler

    if (target != null) {
      value = target;
    }
  }

  return value;
}

var GetPropertyHandler =
/*#__PURE__*/
function () {
  function GetPropertyHandler(deepProxy, variables, fullTargetKey) {
    _classCallCheck(this, GetPropertyHandler);

    this.deepProxy = deepProxy;
    this.variables = variables;
    this.fullTargetKey = fullTargetKey;
  }

  _createClass(GetPropertyHandler, [{
    key: "get",
    value: function get(target, key) {
      if (targetKey === key) {
        return target;
      }

      var value = target[key],
          fullKey = key;

      if (this.fullTargetKey != null) {
        fullKey = this.fullTargetKey + '.' + key;
      }

      if (this.deepProxy && Object(_utility__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value)) {
        value = new Proxy(value, new GetPropertyHandler(this.deepProxy, this.variables, fullKey));
      }

      var existed = this.variables.some(function (item) {
        return item.target === target && item.key === key;
      });

      if (!existed) {
        this.variables.push({
          target: target,
          key: key,
          targetKey: this.fullTargetKey
        });
      }

      return value;
    }
  }]);

  return GetPropertyHandler;
}();

var SetPropertyHandler =
/*#__PURE__*/
function () {
  function SetPropertyHandler() {
    _classCallCheck(this, SetPropertyHandler);
  }

  _createClass(SetPropertyHandler, [{
    key: "set",
    value: function set(target, key, value) {
      var oldValue = target[key];

      if (oldValue !== value || Object(_utility__WEBPACK_IMPORTED_MODULE_0__["isArray"])(target) && key === 'length') {
        var validation = {
          valid: true,
          apply: true,
          oldValue: oldValue,
          newValue: value
        };
        propChangingMsg.fire({
          target: target,
          key: key,
          data: validation
        });

        if (validation.apply) {
          target[key] = value;
          propChangedMsg.fire({
            target: target,
            key: key,
            data: {
              oldValue: oldValue,
              newValue: value
            }
          });
        }
      }

      return true;
    }
  }]);

  return SetPropertyHandler;
}();

var AccessPropertyHandler =
/*#__PURE__*/
function () {
  function AccessPropertyHandler(deepProxy) {
    _classCallCheck(this, AccessPropertyHandler);

    this.deepProxy = deepProxy;
  }

  _createClass(AccessPropertyHandler, [{
    key: "get",
    value: function get(target, key) {
      if (targetKey === key) {
        return target;
      }

      var value = target[key];

      if (this.deepProxy && Object(_utility__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value)) {
        value = new Proxy(value, new SetPropertyHandler(this.deepProxy));
      }

      return value;
    }
  }, {
    key: "set",
    value: function set(target, key, value) {
      if (this.deepProxy) {
        value = getTarget(value);
      }

      var oldValue = target[key];

      if (oldValue !== value || Object(_utility__WEBPACK_IMPORTED_MODULE_0__["isArray"])(target) && key === 'length') {
        var validation = {
          valid: true,
          apply: true,
          oldValue: oldValue,
          newValue: value
        };
        propChangingMsg.fire({
          target: target,
          key: key,
          data: validation
        });

        if (validation.apply) {
          target[key] = value;
          propChangedMsg.fire({
            target: target,
            key: key,
            data: {
              oldValue: oldValue,
              newValue: value
            }
          });
        }
      }

      return true;
    }
  }]);

  return AccessPropertyHandler;
}();



/***/ }),

/***/ "./src/core/index.js":
/*!***************************!*\
  !*** ./src/core/index.js ***!
  \***************************/
/*! exports provided: VNodeType, VNode, AttrNode, CDataSectionNode, CommentNode, ConnectionNode, DocumentTypeNode, DocumentNode, ElementNode, DocumentFragmentNode, TextNode, Binding, GetPropertyHandler, SetPropertyHandler, AccessPropertyHandler, propChangingMsg, propChangedMsg, getTarget, PropertyObserver, Observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/core/base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VNodeType", function() { return _base__WEBPACK_IMPORTED_MODULE_0__["VNodeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VNode", function() { return _base__WEBPACK_IMPORTED_MODULE_0__["VNode"]; });

/* harmony import */ var _attribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attribute */ "./src/core/attribute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttrNode", function() { return _attribute__WEBPACK_IMPORTED_MODULE_1__["AttrNode"]; });

/* harmony import */ var _cdatasection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cdatasection */ "./src/core/cdatasection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CDataSectionNode", function() { return _cdatasection__WEBPACK_IMPORTED_MODULE_2__["CDataSectionNode"]; });

/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comment */ "./src/core/comment.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommentNode", function() { return _comment__WEBPACK_IMPORTED_MODULE_3__["CommentNode"]; });

/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./connection */ "./src/core/connection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConnectionNode", function() { return _connection__WEBPACK_IMPORTED_MODULE_4__["ConnectionNode"]; });

/* harmony import */ var _doctype__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./doctype */ "./src/core/doctype.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentTypeNode", function() { return _doctype__WEBPACK_IMPORTED_MODULE_5__["DocumentTypeNode"]; });

/* harmony import */ var _document__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./document */ "./src/core/document.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentNode", function() { return _document__WEBPACK_IMPORTED_MODULE_6__["DocumentNode"]; });

/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./element */ "./src/core/element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementNode", function() { return _element__WEBPACK_IMPORTED_MODULE_7__["ElementNode"]; });

/* harmony import */ var _fragment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fragment */ "./src/core/fragment.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentFragmentNode", function() { return _fragment__WEBPACK_IMPORTED_MODULE_8__["DocumentFragmentNode"]; });

/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./text */ "./src/core/text.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextNode", function() { return _text__WEBPACK_IMPORTED_MODULE_9__["TextNode"]; });

/* harmony import */ var _binding__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./binding */ "./src/core/binding.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Binding", function() { return _binding__WEBPACK_IMPORTED_MODULE_10__["Binding"]; });

/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./handler */ "./src/core/handler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetPropertyHandler", function() { return _handler__WEBPACK_IMPORTED_MODULE_11__["GetPropertyHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetPropertyHandler", function() { return _handler__WEBPACK_IMPORTED_MODULE_11__["SetPropertyHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccessPropertyHandler", function() { return _handler__WEBPACK_IMPORTED_MODULE_11__["AccessPropertyHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "propChangingMsg", function() { return _handler__WEBPACK_IMPORTED_MODULE_11__["propChangingMsg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "propChangedMsg", function() { return _handler__WEBPACK_IMPORTED_MODULE_11__["propChangedMsg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTarget", function() { return _handler__WEBPACK_IMPORTED_MODULE_11__["getTarget"]; });

/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./observer */ "./src/core/observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyObserver", function() { return _observer__WEBPACK_IMPORTED_MODULE_12__["PropertyObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return _observer__WEBPACK_IMPORTED_MODULE_12__["Observer"]; });

/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./proxy */ "./src/core/proxy.js");
/* empty/unused harmony star reexport */














/***/ }),

/***/ "./src/core/observer.js":
/*!******************************!*\
  !*** ./src/core/observer.js ***!
  \******************************/
/*! exports provided: PropertyObserver, Observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyObserver", function() { return PropertyObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return Observer; });
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parser */ "./src/parser/index.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handler */ "./src/core/handler.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var PropertyObserver =
/*#__PURE__*/
function () {
  function PropertyObserver() {
    _classCallCheck(this, PropertyObserver);

    this.plainMap = new Map();
    this.regexMap = new Map();
  }

  _createClass(PropertyObserver, [{
    key: "on",
    value: function on(prop, action, options) {
      var self = this,
          map = Object(_utility__WEBPACK_IMPORTED_MODULE_1__["isRegExp"])(prop) ? this.regexMap : this.plainMap;

      if (!map.has(prop)) {
        map.set(prop, []);
      }

      if (options) {
        action.beforeChanged = options.beforeChanged;
      }

      map.get(prop).push(action);
      return function () {
        self.off(prop, action);
      };
    }
  }, {
    key: "off",
    value: function off(prop, action) {
      var map = Object(_utility__WEBPACK_IMPORTED_MODULE_1__["isRegExp"])(prop) ? this.regexMap : this.plainMap;

      if (!map.has(prop)) {
        return;
      }

      var actions = map.get(prop);
      var index = actions.indexOf(action);

      if (index !== -1) {
        actions.splice(index, 1);
      }
    }
  }, {
    key: "fireChanged",
    value: function fireChanged(prop, args) {
      var self = this;

      if (this.plainMap.has(prop)) {
        this.plainMap.get(prop).forEach(function (action) {
          if (!action.beforeChanged) {
            action.call(self, prop, args);
          }
        });
      }

      this.regexMap.forEach(function (actions, pattern) {
        if (pattern.test(prop)) {
          actions.forEach(function (action) {
            if (!action.beforeChanged) {
              action.call(self, prop, args);
            }
          });
        }
      });
    }
  }, {
    key: "fireChanging",
    value: function fireChanging(prop, args) {
      var self = this;

      if (this.plainMap.has(prop)) {
        this.plainMap.get(prop).forEach(function (action) {
          if (action.beforeChanged) {
            action.call(self, prop, args);
          }
        });
      }

      this.regexMap.forEach(function (actions, pattern) {
        if (pattern.test(prop)) {
          actions.forEach(function (action) {
            if (action.beforeChanged) {
              action.call(self, prop, args);
            }
          });
        }
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.plainMap.clear();
      this.regexMap.clear();
    }
  }]);

  return PropertyObserver;
}();

var ObjectObserver =
/*#__PURE__*/
function () {
  function ObjectObserver() {
    _classCallCheck(this, ObjectObserver);

    var self = this,
        onchanging = function onchanging(args) {
      var obj = args.target,
          prop = args.key;
      self.fireChanging(obj, prop, args.data);
    },
        onchanged = function onchanged(args) {
      var obj = args.target,
          prop = args.key;
      self.fireChanged(obj, prop, args.data);
    };

    _handler__WEBPACK_IMPORTED_MODULE_2__["propChangingMsg"].on(onchanging);
    _handler__WEBPACK_IMPORTED_MODULE_2__["propChangedMsg"].on(onchanged);

    this.offChange = function () {
      _handler__WEBPACK_IMPORTED_MODULE_2__["propChangingMsg"].off(onchanging);
      _handler__WEBPACK_IMPORTED_MODULE_2__["propChangedMsg"].off(onchanged);
    };

    this.objMap = new Map();
  }

  _createClass(ObjectObserver, [{
    key: "on",
    value: function on(obj, prop, action, options) {
      var self = this;

      if (!this.objMap.has(obj)) {
        this.objMap.set(obj, new PropertyObserver());
      }

      return this.objMap.get(obj).on(prop, action, options);
    }
  }, {
    key: "off",
    value: function off(obj, prop, action) {
      if (this.objMap.has(obj)) {
        this.objMap.get(obj).off(prop, action);
      }
    }
  }, {
    key: "fireChanged",
    value: function fireChanged(obj, prop, args) {
      if (this.objMap.has(obj)) {
        this.objMap.get(obj).fireChanged(prop, args);
      }
    }
  }, {
    key: "fireChanging",
    value: function fireChanging(obj, prop, args) {
      if (this.objMap.has(obj)) {
        this.objMap.get(obj).fireChanging(prop, args);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.offChange.call(this);
      this.objMap.forEach(function (item) {
        item.destroy();
      });
      this.objMap = null;
    }
  }]);

  return ObjectObserver;
}();

var MemberWatcher =
/*#__PURE__*/
function () {
  function MemberWatcher(scope, target, key, targetKey) {
    _classCallCheck(this, MemberWatcher);

    this.scope = scope;
    this.target = target;
    this.key = key;
    this.targetKey = targetKey;
    this.observer = null;
    this.action = null;
    this.unwatch = null;
    this.options = null;

    if (!targetKey) {
      this.id = key;
    } else {
      this.id = targetKey + '.' + key;
    }
  }

  _createClass(MemberWatcher, [{
    key: "start",
    value: function start(observer, action, options) {
      this.observer = observer;
      this.action = action;
      this.options = options;
      this.unwatch = this.observer.on(this.target, this.key, this.action, this.options);
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.unwatch != null) {
        this.unwatch.call();
      }
    }
  }, {
    key: "update",
    value: function update(changeKey) {
      if (this.targetKey != null && this.targetKey.startsWith(changeKey)) {
        var newTarget = Object(_parser__WEBPACK_IMPORTED_MODULE_0__["compute"])(this.targetKey, this.scope);

        if (newTarget !== this.target) {
          this.stop();
          this.target = newTarget;
          this.unwatch = this.observer.on(this.target, this.key, this.action, this.options);
        }
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.stop();
      this.scope = null;
      this.target = null;
      this.observer = null;
      this.action = null;
      this.unwatch = null;
    }
  }]);

  return MemberWatcher;
}();

var Detector =
/*#__PURE__*/
function () {
  function Detector() {
    _classCallCheck(this, Detector);

    var self = this;
    this.queue = [];
    this.timeoutId = null;

    this.digest = function () {
      self.defer(function () {
        self.queue.forEach(function (action) {
          action.call(self);
        });
      });
    };
  }

  _createClass(Detector, [{
    key: "defer",
    value: function defer(action) {
      var self = this;
      this.clearDefer();
      this.timeoutId = setTimeout(function () {
        this.timeoutId = null;
        action.call(self);
      });
    }
  }, {
    key: "clearDefer",
    value: function clearDefer() {
      if (this.timeoutId != null) {
        clearTimeout(this.timeoutId);
        this.timeoutId = null;
      }
    }
  }, {
    key: "execute",
    value: function execute() {
      _handler__WEBPACK_IMPORTED_MODULE_2__["propChangedMsg"].on(this.digest);
    }
  }, {
    key: "apply",
    value: function apply(action) {
      this.queue.push(action);
    }
  }, {
    key: "remove",
    value: function remove(action) {
      var index = this.queue.indexOf(action);

      if (index !== -1) {
        this.queue.splice(index, 1);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _handler__WEBPACK_IMPORTED_MODULE_2__["propChangedMsg"].off(this.digest);
      this.clearDefer();
      this.queue = [];
    }
  }]);

  return Detector;
}();

var detector = new Detector();
detector.execute();

var ExpWatcher =
/*#__PURE__*/
function () {
  function ExpWatcher(scope, exp) {
    _classCallCheck(this, ExpWatcher);

    var self = this;
    this.scope = scope;
    this.exp = exp;
    this.value = null;
    this.unwatch = null;

    this.detect = function () {
      var oldValue = self.value,
          newValue = Object(_parser__WEBPACK_IMPORTED_MODULE_0__["compute"])(self.exp, self.scope);

      if (newValue !== oldValue) {
        self.value = newValue;
        self.action.call(self, {
          oldValue: oldValue,
          newValue: newValue
        });
      }
    };
  }

  _createClass(ExpWatcher, [{
    key: "start",
    value: function start(action) {
      var self = this;
      this.action = action;
      this.value = Object(_parser__WEBPACK_IMPORTED_MODULE_0__["compute"])(this.exp, this.scope);
      detector.apply(self.detect);

      this.unwatch = function () {
        detector.remove(self.detect);
      };
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.unwatch != null) {
        this.unwatch.call();
        this.action = null;
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.stop();
      this.scope = null;
      this.unwatch = null;
    }
  }]);

  return ExpWatcher;
}();

var Watcher =
/*#__PURE__*/
function () {
  function Watcher(scope, exp) {
    _classCallCheck(this, Watcher);

    this.scope = scope;
    this.exp = exp;
    this.observer = null;
    this.action = null;
    this.members = {};
    this.digests = [];
    this.options = null;
  }

  _createClass(Watcher, [{
    key: "parse",
    value: function parse() {
      if (this.exp === '*') {
        this.exp = /.+/i;
      }

      if (Object(_utility__WEBPACK_IMPORTED_MODULE_1__["isRegExp"])(this.exp)) {
        return [{
          target: this.scope,
          key: this.exp
        }];
      }

      var ast = Object(_parser__WEBPACK_IMPORTED_MODULE_0__["parseExp"])(this.exp);

      if (ast.hasCC()) {
        return [{
          dirtyCheck: true,
          key: this.exp
        }];
      } // var items = [],
      //     handler = new GetPropertyHandler(true, items),
      //     proxy = new Proxy(this.scope, handler);
      //
      // compute(this.exp, proxy);
      //
      // return items;


      var options = {
        collectMembers: true
      };
      Object(_parser__WEBPACK_IMPORTED_MODULE_0__["compute"])(this.exp, this.scope, options);
      return options.members;
    }
  }, {
    key: "start",
    value: function start(observer, action, options) {
      this.observer = observer;
      this.action = action;
      this.options = options;
      this.updateMember();
    }
  }, {
    key: "updateMember",
    value: function updateMember() {
      var self = this;
      this.parse().forEach(function (item) {
        if (item.dirtyCheck) {
          var digest = new ExpWatcher(self.scope, item.key);
          self.digests.push(digest);
          self.startDigest(digest);
        } else {
          var member = new MemberWatcher(self.scope, item.target, item.key, item.targetKey);

          if (!self.members[member.id]) {
            self.members[member.id] = member;
            self.startMember(member);
          }
        }
      });
    }
  }, {
    key: "startDigest",
    value: function startDigest(digest) {
      var self = this;
      digest.start(function (args) {
        self.action.call(this, args);
      }, this.options);
    }
  }, {
    key: "startMember",
    value: function startMember(member) {
      var self = this;
      member.start(self.observer, function (prop, args) {
        var changeKey = prop;

        if (member.targetKey != null) {
          changeKey = member.targetKey + '.' + prop;
        }

        Object(_utility__WEBPACK_IMPORTED_MODULE_1__["forEach"])(self.members, function (memberWatcher, key) {
          memberWatcher.update(changeKey);
        }); // self.updateMember();

        self.action.call(this, prop, args);
      }, this.options);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      Object(_utility__WEBPACK_IMPORTED_MODULE_1__["forEach"])(this.members, function (member, key) {
        member.destroy();
      });
      this.digests.forEach(function (digest) {
        digest.destroy();
      });
      this.scope = null;
      this.observer = null;
      this.action = null;
      this.members = null;
      this.digests = null;
    }
  }]);

  return Watcher;
}();

var Observer =
/*#__PURE__*/
function () {
  function Observer() {
    _classCallCheck(this, Observer);

    this.observer = new ObjectObserver();
    this.watchers = [];
  }

  _createClass(Observer, [{
    key: "watch",
    value: function watch(obj, exp, action) {
      var self = this,
          watcher = this.createWatcher(obj, exp);
      watcher.start(this.observer, action);
      return function () {
        watcher.destroy();
        self.removeWatcher(watcher);
      };
    }
  }, {
    key: "validate",
    value: function validate(obj, exp, action) {
      var self = this,
          watcher = this.createWatcher(obj, exp);
      watcher.start(this.observer, action, {
        beforeChanged: true
      });
      return function () {
        watcher.destroy();
        self.removeWatcher(watcher);
      };
    }
  }, {
    key: "createWatcher",
    value: function createWatcher(obj, exp) {
      var watcher = new Watcher(obj, exp);
      this.watchers.push(watcher);
      return watcher;
    }
  }, {
    key: "removeWatcher",
    value: function removeWatcher(watcher) {
      var index = this.watchers.indexOf(watcher);

      if (index !== -1) {
        this.watchers.splice(index, 1);
      }
    }
  }, {
    key: "fireChanged",
    value: function fireChanged(obj, prop, args) {
      return this.observer.fireChanged(obj, prop, args);
    }
  }, {
    key: "fireChanging",
    value: function fireChanging(obj, prop, args) {
      return this.observer.fireChanging(obj, prop, args);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.watchers.forEach(function (watcher) {
        watcher.destroy();
      });
      this.watchers = null;
      this.observer.destroy();
      this.observer = null;
    }
  }]);

  return Observer;
}();



/***/ }),

/***/ "./src/core/proxy.js":
/*!***************************!*\
  !*** ./src/core/proxy.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handler */ "./src/core/handler.js");


Object.prototype.toProxy = function () {
  return new Proxy(this, new _handler__WEBPACK_IMPORTED_MODULE_0__["SetPropertyHandler"]());
};

/***/ }),

/***/ "./src/core/text.js":
/*!**************************!*\
  !*** ./src/core/text.js ***!
  \**************************/
/*! exports provided: TextNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextNode", function() { return TextNode; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./src/core/base.js");
/* harmony import */ var _binding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./binding */ "./src/core/binding.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var TextNode =
/*#__PURE__*/
function (_VNode) {
  _inherits(TextNode, _VNode);

  function TextNode() {
    var _this;

    _classCallCheck(this, TextNode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextNode).call(this, _base__WEBPACK_IMPORTED_MODULE_1__["VNodeType"].text, '#text'));
    _this.binding = new _binding__WEBPACK_IMPORTED_MODULE_2__["Binding"]();
    _this.htmlElement = null;
    return _this;
  }

  _createClass(TextNode, [{
    key: "compile",
    value: function compile() {
      this.binding.bind(this.nodeValue);
    }
  }, {
    key: "link",
    value: function link(scope) {
      var self = this;
      this.binding.setScope(scope);
      this.binding.observe(function () {
        self.update();
      });
      return this.render(this.binding.compute());
    }
  }, {
    key: "hasChange",
    value: function hasChange() {
      return this.binding.detect();
    }
  }, {
    key: "update",
    value: function update() {
      _utility__WEBPACK_IMPORTED_MODULE_0__["replaceNode"](this.htmlElement, this.render(this.binding.value));
    }
  }, {
    key: "render",
    value: function render(value) {
      this.htmlElement = document.createTextNode(value);
      return this.htmlElement;
    }
  }, {
    key: "getOuterTpl",
    value: function getOuterTpl() {
      return this.nodeValue;
    }
  }, {
    key: "getInnerTpl",
    value: function getInnerTpl() {
      return this.nodeValue;
    }
  }, {
    key: "removeHtmlElement",
    value: function removeHtmlElement() {
      if (this.htmlElement != null) {
        _utility__WEBPACK_IMPORTED_MODULE_0__["removeNode"](this.htmlElement);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.binding.destroy();
      this.binding = null;
      this.htmlElement = null;
      this.$destroy();
    }
  }]);

  return TextNode;
}(_base__WEBPACK_IMPORTED_MODULE_1__["VNode"]);



/***/ }),

/***/ "./src/decorator/component.js":
/*!************************************!*\
  !*** ./src/decorator/component.js ***!
  \************************************/
/*! exports provided: component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "component", function() { return component; });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");

function component(meta) {
  return function (target) {
    var selector = meta.selector || target.name;
    _view__WEBPACK_IMPORTED_MODULE_0__["injector"].registerConstructor(_view__WEBPACK_IMPORTED_MODULE_0__["typeConst"].component, selector, target, meta);
  };
}

/***/ }),

/***/ "./src/decorator/directive.js":
/*!************************************!*\
  !*** ./src/decorator/directive.js ***!
  \************************************/
/*! exports provided: directive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return directive; });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");

function directive(meta) {
  return function (target) {
    var selector = meta.selector || target.name;
    _view__WEBPACK_IMPORTED_MODULE_0__["injector"].registerConstructor(_view__WEBPACK_IMPORTED_MODULE_0__["typeConst"].directive, selector, target, meta);
  };
}

/***/ }),

/***/ "./src/decorator/filter.js":
/*!*********************************!*\
  !*** ./src/decorator/filter.js ***!
  \*********************************/
/*! exports provided: filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");

function filter(meta) {
  return function (target) {
    var selector = meta.selector || target.name;
    _view__WEBPACK_IMPORTED_MODULE_0__["injector"].registerConstructor(_view__WEBPACK_IMPORTED_MODULE_0__["typeConst"].filter, selector, target, meta);
  };
}

/***/ }),

/***/ "./src/decorator/index.js":
/*!********************************!*\
  !*** ./src/decorator/index.js ***!
  \********************************/
/*! exports provided: component, directive, filter, service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/decorator/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "component", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["component"]; });

/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directive */ "./src/decorator/directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return _directive__WEBPACK_IMPORTED_MODULE_1__["directive"]; });

/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter */ "./src/decorator/filter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _filter__WEBPACK_IMPORTED_MODULE_2__["filter"]; });

/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service */ "./src/decorator/service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "service", function() { return _service__WEBPACK_IMPORTED_MODULE_3__["service"]; });






/***/ }),

/***/ "./src/decorator/service.js":
/*!**********************************!*\
  !*** ./src/decorator/service.js ***!
  \**********************************/
/*! exports provided: service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "service", function() { return service; });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");

function service(meta) {
  return function (target) {
    var selector = meta.selector || target.name;
    _view__WEBPACK_IMPORTED_MODULE_0__["injector"].registerConstructor(_view__WEBPACK_IMPORTED_MODULE_0__["typeConst"].service, selector, target, meta);
  };
}

/***/ }),

/***/ "./src/directive/bind-cmp-options.js":
/*!*******************************************!*\
  !*** ./src/directive/bind-cmp-options.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator */ "./src/decorator/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var BindCmpOptionsDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-bind-cmp-options'
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(BindCmpOptionsDirective, _Directive);

  function BindCmpOptionsDirective() {
    var _this;

    _classCallCheck(this, BindCmpOptionsDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BindCmpOptionsDirective).call(this));
    _this.value = null;
    return _this;
  }

  _createClass(BindCmpOptionsDirective, [{
    key: "onInsert",
    value: function onInsert() {
      this.updateOptions();
    }
  }, {
    key: "onUpdate",
    value: function onUpdate() {
      this.clearOptions();
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      this.clear();
    }
  }, {
    key: "updateOptions",
    value: function updateOptions() {
      this.value = this.$binding.compute();
    }
  }, {
    key: "clearOptions",
    value: function clearOptions() {
      this.value = null;
    }
  }]);

  return BindCmpOptionsDirective;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/directive/bind-cmp.js":
/*!***********************************!*\
  !*** ./src/directive/bind-cmp.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator */ "./src/decorator/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var BindCmpDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-bind-cmp'
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(BindCmpDirective, _Directive);

  function BindCmpDirective() {
    var _this;

    _classCallCheck(this, BindCmpDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BindCmpDirective).call(this));
    _this.$priority = 5;
    _this.nameDir = null;
    _this.config = null;
    _this.view = null;
    return _this;
  }

  _createClass(BindCmpDirective, [{
    key: "onInsert",
    value: function onInsert() {
      this.init();
      this.render();
    }
  }, {
    key: "onUpdate",
    value: function onUpdate() {
      this.clear();
      this.render();
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      this.clear();
      this.nameDir = null;
    }
  }, {
    key: "init",
    value: function init() {
      this.nameDir = this.$element.getDirective('n-name');
      this.bindCmpOptionsDir = this.$element.getDirective('n-bind-cmp-options');

      if (this.bindCmpOptionsDir != null) {
        this.config = this.bindCmpOptionsDir.value;
      } else {
        this.config = {};
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      if (this.view != null) {
        this.view.$destroy();
      }

      this.config = null;
    }
  }, {
    key: "render",
    value: function render() {
      var component = this.$binding.compute();

      if (component == null) {
        return;
      }

      this.view = this.$binding.scope.$createChildCmp(component);
      this.config && this.config.onInit(this.view);
      this.view.$mount(this.$htmlElement);

      if (this.nameDir != null) {
        this.nameDir.setCmp(this.view);
      }
    }
  }]);

  return BindCmpDirective;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/directive/bind.js":
/*!*******************************!*\
  !*** ./src/directive/bind.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator */ "./src/decorator/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var BindDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-bind'
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(BindDirective, _Directive);

  function BindDirective() {
    _classCallCheck(this, BindDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(BindDirective).call(this));
  }

  _createClass(BindDirective, [{
    key: "onInsert",
    value: function onInsert() {
      this.bind();
    }
  }, {
    key: "onUpdate",
    value: function onUpdate() {
      this.bind();
    }
  }, {
    key: "bind",
    value: function bind() {
      this.$htmlElement.innerText = this.$binding.compute();
    }
  }]);

  return BindDirective;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/directive/embed.js":
/*!********************************!*\
  !*** ./src/directive/embed.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator */ "./src/decorator/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var EmbedDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-embed'
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(EmbedDirective, _Directive);

  function EmbedDirective() {
    _classCallCheck(this, EmbedDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(EmbedDirective).call(this));
  }

  _createClass(EmbedDirective, [{
    key: "onCompile",
    value: function onCompile(options) {
      var embedTpl = options.getEmbedTpl();

      if (embedTpl) {
        this.$element.setInnerTpl(embedTpl);
      }
    }
  }]);

  return EmbedDirective;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/directive/hide.js":
/*!*******************************!*\
  !*** ./src/directive/hide.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator */ "./src/decorator/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var HideDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-hide',
  inject: {
    $animate: '$animate'
  }
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(HideDirective, _Directive);

  function HideDirective() {
    _classCallCheck(this, HideDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(HideDirective).call(this));
  }

  _createClass(HideDirective, [{
    key: "onInsert",
    value: function onInsert() {
      this.toggle();
    }
  }, {
    key: "onUpdate",
    value: function onUpdate() {
      this.toggle();
    }
  }, {
    key: "toggle",
    value: function toggle() {
      var self = this;

      if (this.$binding.compute()) {
        this.$animate.leave(this.$element, function () {
          self.$htmlElement.style.display = 'none';
        });
      } else {
        this.$animate.enter(this.$element, function () {
          self.$htmlElement.style.display = 'initial';
        });
      }
    }
  }]);

  return HideDirective;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/directive/if.js":
/*!*****************************!*\
  !*** ./src/directive/if.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator */ "./src/decorator/index.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var IfDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-if',
  inject: {
    $animate: '$animate'
  }
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(IfDirective, _Directive);

  function IfDirective() {
    var _this;

    _classCallCheck(this, IfDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IfDirective).call(this));
    _this.htmlComment = null;
    return _this;
  }

  _createClass(IfDirective, [{
    key: "onInsert",
    value: function onInsert() {
      this.htmlComment = document.createComment('n-if');

      if (!this.$binding.compute()) {
        _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](this.$htmlElement, this.htmlComment);
      }
    }
  }, {
    key: "onUpdate",
    value: function onUpdate() {
      var self = this;

      if (this.$binding.compute()) {
        if (this.$htmlElement.parentNode == null) {
          this.$animate.enter(this.$element, function () {
            _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](self.htmlComment, self.$htmlElement);
          });
        }
      } else {
        if (this.$htmlElement.parentNode != null) {
          this.$animate.leave(this.$element, function () {
            _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](self.$htmlElement, self.htmlComment);
          });
        }
      }
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      this.htmlComment = null;
    }
  }]);

  return IfDirective;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/directive/index.js":
/*!********************************!*\
  !*** ./src/directive/index.js ***!
  \********************************/
/*! exports provided: ClassDirective, StyleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bind */ "./src/directive/bind.js");
/* empty/unused harmony star reexport *//* harmony import */ var _embed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./embed */ "./src/directive/embed.js");
/* empty/unused harmony star reexport *//* harmony import */ var _hide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hide */ "./src/directive/hide.js");
/* empty/unused harmony star reexport *//* harmony import */ var _if__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./if */ "./src/directive/if.js");
/* empty/unused harmony star reexport *//* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model */ "./src/directive/model.js");
/* empty/unused harmony star reexport *//* harmony import */ var _repeat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./repeat */ "./src/directive/repeat.js");
/* empty/unused harmony star reexport *//* harmony import */ var _show__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show */ "./src/directive/show.js");
/* empty/unused harmony star reexport *//* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style */ "./src/directive/style/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClassDirective", function() { return _style__WEBPACK_IMPORTED_MODULE_7__["ClassDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleDirective", function() { return _style__WEBPACK_IMPORTED_MODULE_7__["StyleDirective"]; });

/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./switch */ "./src/directive/switch/index.js");
/* empty/unused harmony star reexport *//* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./state */ "./src/directive/state/index.js");
/* empty/unused harmony star reexport *//* harmony import */ var _name__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./name */ "./src/directive/name.js");
/* empty/unused harmony star reexport *//* harmony import */ var _bind_cmp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bind-cmp */ "./src/directive/bind-cmp.js");
/* empty/unused harmony star reexport *//* harmony import */ var _bind_cmp_options__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bind-cmp-options */ "./src/directive/bind-cmp-options.js");
/* empty/unused harmony star reexport */













/***/ }),

/***/ "./src/directive/model.js":
/*!********************************!*\
  !*** ./src/directive/model.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator */ "./src/decorator/index.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ModelDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-model',
  inject: {
    options: '$modelOptions'
  }
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(ModelDirective, _Directive);

  function ModelDirective() {
    var _this;

    _classCallCheck(this, ModelDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ModelDirective).call(this));
    _this.$viewValue = null;
    _this.$modelValue = null;
    _this.$parsers = [];
    _this.$formatters = [];
    _this.$viewChangeListeners = [];
    _this.$validators = [];
    _this.$feedback = '';
    _this.$pristine = true;
    _this.$dirty = false;
    _this.$valid = true;
    _this.$invalid = false;
    return _this;
  }

  _createClass(ModelDirective, [{
    key: "onInsert",
    value: function onInsert() {
      var self = this;
      this.setViewValue();

      if (this.$component == null) {
        this.$htmlElement.addEventListener('input', function (e) {
          self.setModelValue(e.target.value);
        });
      } else {
        if (_utility__WEBPACK_IMPORTED_MODULE_2__["isMessenger"](this.$component.change)) {
          this.$component.change.on(function (e, args) {
            self.setModelValue(args.newvalue);
          });
        }

        throw new Error('Compoent ' + this.$component.$$meta.selector + 'must define [change] event');
      }
    }
  }, {
    key: "onUpdate",
    value: function onUpdate() {
      this.setViewValue();
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      this.$parsers = null;
      this.$formatters = null;
      this.$viewChangeListeners = null;
      this.$validators = null;
    }
  }, {
    key: "setViewValue",
    value: function setViewValue() {
      var self = this;
      this.$modelValue = this.$binding.compute();
      var viewValue = this.$modelValue;
      this.$validators.forEach(function (validator) {
        validator.call(self, self.$modelValue, self.$viewValue);
      });
      this.$formatters.forEach(function (formatter) {
        viewValue = formatter.call(self, viewValue);
      });

      if (this.$viewValue !== viewValue) {
        this.$viewValue = viewValue;

        if (this.$component == null) {
          this.$htmlElement.value = this.$modelValue;
        } else {
          this.$component.$setAttr('value', this.$modelValue);
        }
      }

      this.updateCss();
      this.updateState();
    }
  }, {
    key: "setModelValue",
    value: function setModelValue(viewValue) {
      var self = this;
      this.setDirty(true);
      this.$viewValue = viewValue;
      this.$viewChangeListeners.forEach(function (listener) {
        listener.call(self, viewValue);
      });
      var modelValue = this.$viewValue;
      this.$parsers.forEach(function (parser) {
        modelValue = parser.call(self, modelValue);
      });

      if (this.$modelValue !== modelValue) {
        this.$modelValue = modelValue;
        this.$validators.forEach(function (validator) {
          validator.call(self, self.$modelValue, self.$viewValue);
        });
        this.$binding.assign(this.$modelValue);
      }
    }
  }, {
    key: "updateCss",
    value: function updateCss() {
      var ele = this.$htmlElement,
          css = this.options.cssClass;

      if (this.$dirty) {
        ele.classList.add(css.dirty);
        ele.classList.remove(css.pristine);
      } else {
        ele.classList.add(css.pristine);
        ele.classList.remove(css.dirty);
      }

      if (this.$valid) {
        ele.classList.add(css.valid);
        ele.classList.remove(css.invalid);
      } else {
        ele.classList.add(css.invalid);
        ele.classList.remove(css.valid);
      }
    }
  }, {
    key: "updateState",
    value: function updateState() {
      var name = this.$htmlElement.name;

      if (!name) {
        return;
      }

      var scope = this.$binding.scope.toProxy();

      if (scope[name] == null) {
        scope[name] = {};
      }

      var state = scope[name].toProxy();
      state.$pristine = this.$pristine;
      state.$dirty = this.$dirty;
      state.$valid = this.$valid;
      state.$invalid = this.$invalid;
      state.$feedback = this.$feedback;
    }
  }, {
    key: "setDirty",
    value: function setDirty(dirty) {
      this.$dirty = dirty;
      this.$pristine = !dirty;
      this.updateState();
      this.updateCss();
    }
  }, {
    key: "setValidity",
    value: function setValidity(valid, feedback) {
      this.$valid = valid;
      this.$invalid = !valid;
      this.$feedback = feedback;
      this.updateState();
      this.updateCss();
    }
  }]);

  return ModelDirective;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/directive/name.js":
/*!*******************************!*\
  !*** ./src/directive/name.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator */ "./src/decorator/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var NameDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-name'
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(NameDirective, _Directive);

  function NameDirective() {
    var _this;

    _classCallCheck(this, NameDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NameDirective).call(this));
    _this.$output = true;
    _this.name = null;
    return _this;
  }

  _createClass(NameDirective, [{
    key: "onInsert",
    value: function onInsert() {
      this.name = this.$binding.text;

      if (!this.name) {
        return;
      }

      var proxy = this.$scope.toProxy();

      if (this.$component != null) {
        proxy[this.name] = this.$component;
      } else {
        proxy[this.name] = this.$element;
      }
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      if (this.name != null) {
        this.$scope[this.name] = null;
      }
    }
  }, {
    key: "setCmp",
    value: function setCmp(cmp) {
      var proxy = this.$scope.toProxy();
      proxy[this.name] = cmp;
    }
  }]);

  return NameDirective;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/directive/repeat.js":
/*!*********************************!*\
  !*** ./src/directive/repeat.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator */ "./src/decorator/index.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var RepeatDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-repeat'
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(RepeatDirective, _Directive);

  function RepeatDirective() {
    var _this;

    _classCallCheck(this, RepeatDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RepeatDirective).call(this));
    _this.scope = null;
    _this.itemExp = '';
    _this.itemsExp = '';
    _this.itemTemplate = '';
    _this.dataItems = [];
    _this.cmpItems = [];
    _this.header = null;
    _this.footer = null;
    return _this;
  }

  _createClass(RepeatDirective, [{
    key: "onCompile",
    value: function onCompile() {
      var arg = this.$attr.nodeValue;
      var element = this.$element;
      var pattern = /^([a-z_]+\w+)\s+in\s+(.+)$/i;
      var result = pattern.exec(arg);

      if (result == null) {
        throw new Error('n-repeat: parameter is not valid');
      }

      this.itemExp = result[1];
      this.itemsExp = result[2];
      element.removeAttribute(this.$attr);
      this.itemTemplate = element.getOuterTpl();
      var self = this;
      var connection = element.createConnection('n-repeat', function (scope) {
        var fragment = document.createDocumentFragment();
        var items = scope.$eval(self.itemsExp);
        self.scope = scope;
        self.setDataItems(items);
        self.header = document.createComment('start: n-repeat');
        self.footer = document.createComment('end: n-repeat');
        fragment.appendChild(self.header);
        fragment.appendChild(self.footer);
        return fragment;
      });
      element.parentNode.replaceChild(element, connection);
      element.destroy();

      connection.onInsert = function () {
        self.render();
      };

      connection.onDetect = function () {
        var items = self.scope.$eval(self.itemsExp);

        if (self.dataItems !== items) {
          self.setDataItems(items);
          self.render();
        } else {
          self.cmpItems.forEach(function (childScope) {
            childScope.$detect();
          });
        }
      };

      connection.onDestroy = function () {
        self.$destroy();
        element = null;
        connection = null;
      };
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      this.cmpItems.forEach(function (cmpItem) {
        cmpItem.$destroy();
      });
      this.cmpItems = null;
      this.scope = null;
      this.dataItems = null;
      this.header = null;
      this.footer = null;
    }
  }, {
    key: "setDataItems",
    value: function setDataItems(value) {
      var self = this;

      if (_utility__WEBPACK_IMPORTED_MODULE_2__["isArray"](value)) {
        this.dataItems = value;
      } else {
        this.dataItems = [];
      }

      this.scope.$watch(this.dataItems, 'length', function () {
        self.render();
      });
    }
  }, {
    key: "getCmpItem",
    value: function getCmpItem(dataItem) {
      var self = this,
          filters = this.cmpItems.filter(function (item) {
        return item[self.itemExp] === dataItem;
      });

      if (filters.length === 0) {
        return null;
      }

      var target = filters[0];
      this.cmpItems = this.cmpItems.filter(function (item) {
        return item[self.itemExp] !== dataItem;
      });
      return target;
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      var fragment = document.createDocumentFragment();
      var newCmpItems = [];
      var index = 0;
      _utility__WEBPACK_IMPORTED_MODULE_2__["forEach"](self.dataItems, function (item, key) {
        var cmpItem = self.getCmpItem(item);

        if (cmpItem == null) {
          cmpItem = new _view__WEBPACK_IMPORTED_MODULE_0__["Component"]({
            template: self.itemTemplate
          });
          cmpItem[self.itemExp] = item;
          cmpItem.$inheritCmp(self.scope);
        }

        cmpItem['$index'] = index;
        fragment.appendChild(cmpItem.$render(true));
        newCmpItems.push(cmpItem);
        index++;
      });

      if (self.cmpItems.length > 0) {
        self.cmpItems.forEach(function (repeatItem) {
          repeatItem.$destroy();
        });
      }

      self.cmpItems = newCmpItems;
      _utility__WEBPACK_IMPORTED_MODULE_2__["removeNodeBetween"](self.header, self.footer);
      self.footer.parentNode.insertBefore(fragment, self.footer);
    }
  }]);

  return RepeatDirective;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/directive/show.js":
/*!*******************************!*\
  !*** ./src/directive/show.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator */ "./src/decorator/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ShowDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-show',
  inject: {
    $animate: '$animate'
  }
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(ShowDirective, _Directive);

  function ShowDirective() {
    _classCallCheck(this, ShowDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(ShowDirective).call(this));
  }

  _createClass(ShowDirective, [{
    key: "onInsert",
    value: function onInsert() {
      this.toggle();
    }
  }, {
    key: "onUpdate",
    value: function onUpdate() {
      this.toggle();
    }
  }, {
    key: "toggle",
    value: function toggle() {
      var self = this;

      if (this.$binding.compute()) {
        this.$animate.enter(this.$element, function () {
          self.$htmlElement.style.display = 'initial';
        });
      } else {
        this.$animate.leave(this.$element, function () {
          self.$htmlElement.style.display = 'none';
        });
      }
    }
  }]);

  return ShowDirective;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/directive/state/checked.js":
/*!****************************************!*\
  !*** ./src/directive/state/checked.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/directive/state/state.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var CheckedDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-checked'
}), _dec(_class =
/*#__PURE__*/
function (_StateDirective) {
  _inherits(CheckedDirective, _StateDirective);

  function CheckedDirective() {
    _classCallCheck(this, CheckedDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(CheckedDirective).call(this, 'checked'));
  }

  return CheckedDirective;
}(_state__WEBPACK_IMPORTED_MODULE_0__["StateDirective"])) || _class);

/***/ }),

/***/ "./src/directive/state/disabled.js":
/*!*****************************************!*\
  !*** ./src/directive/state/disabled.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/directive/state/state.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var DisabledDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-disabled'
}), _dec(_class =
/*#__PURE__*/
function (_StateDirective) {
  _inherits(DisabledDirective, _StateDirective);

  function DisabledDirective() {
    _classCallCheck(this, DisabledDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(DisabledDirective).call(this, 'disabled'));
  }

  return DisabledDirective;
}(_state__WEBPACK_IMPORTED_MODULE_0__["StateDirective"])) || _class);

/***/ }),

/***/ "./src/directive/state/index.js":
/*!**************************************!*\
  !*** ./src/directive/state/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checked */ "./src/directive/state/checked.js");
/* empty/unused harmony star reexport *//* harmony import */ var _disabled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./disabled */ "./src/directive/state/disabled.js");
/* empty/unused harmony star reexport *//* harmony import */ var _readonly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./readonly */ "./src/directive/state/readonly.js");
/* empty/unused harmony star reexport *//* harmony import */ var _selected__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selected */ "./src/directive/state/selected.js");
/* empty/unused harmony star reexport */




/***/ }),

/***/ "./src/directive/state/readonly.js":
/*!*****************************************!*\
  !*** ./src/directive/state/readonly.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/directive/state/state.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ReadonlyDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-readonly'
}), _dec(_class =
/*#__PURE__*/
function (_StateDirective) {
  _inherits(ReadonlyDirective, _StateDirective);

  function ReadonlyDirective() {
    _classCallCheck(this, ReadonlyDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReadonlyDirective).call(this, 'readonly'));
  }

  return ReadonlyDirective;
}(_state__WEBPACK_IMPORTED_MODULE_0__["StateDirective"])) || _class);

/***/ }),

/***/ "./src/directive/state/selected.js":
/*!*****************************************!*\
  !*** ./src/directive/state/selected.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/directive/state/state.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var SelectedDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-selected'
}), _dec(_class =
/*#__PURE__*/
function (_StateDirective) {
  _inherits(SelectedDirective, _StateDirective);

  function SelectedDirective() {
    _classCallCheck(this, SelectedDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(SelectedDirective).call(this, 'selected'));
  }

  return SelectedDirective;
}(_state__WEBPACK_IMPORTED_MODULE_0__["StateDirective"])) || _class);

/***/ }),

/***/ "./src/directive/state/state.js":
/*!**************************************!*\
  !*** ./src/directive/state/state.js ***!
  \**************************************/
/*! exports provided: StateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateDirective", function() { return StateDirective; });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../view */ "./src/view/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var StateDirective =
/*#__PURE__*/
function (_Directive) {
  _inherits(StateDirective, _Directive);

  function StateDirective(attrName) {
    var _this;

    _classCallCheck(this, StateDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StateDirective).call(this));
    _this.attrName = attrName;
    return _this;
  }

  _createClass(StateDirective, [{
    key: "onInsert",
    value: function onInsert() {
      this.perform();
    }
  }, {
    key: "onUpdate",
    value: function onUpdate() {
      this.perform();
    }
  }, {
    key: "perform",
    value: function perform() {
      if (this.$binding.compute()) {
        if (!this.$htmlElement.hasAttribute(this.attrName)) {
          this.$htmlElement.setAttribute(this.attrName, '');
        }
      } else {
        if (this.$htmlElement.hasAttribute(this.attrName)) {
          this.$htmlElement.removeAttribute(this.attrName);
        }
      }
    }
  }]);

  return StateDirective;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"]);



/***/ }),

/***/ "./src/directive/style/class-even.js":
/*!*******************************************!*\
  !*** ./src/directive/style/class-even.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "./src/directive/style/class.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ClassEvenDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-class-even'
}), _dec(_class =
/*#__PURE__*/
function (_ClassDirective) {
  _inherits(ClassEvenDirective, _ClassDirective);

  function ClassEvenDirective() {
    _classCallCheck(this, ClassEvenDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(ClassEvenDirective).call(this));
  }

  _createClass(ClassEvenDirective, [{
    key: "skip",
    value: function skip() {
      return this.$scope.$index & 1 === 1;
    }
  }]);

  return ClassEvenDirective;
}(_class__WEBPACK_IMPORTED_MODULE_0__["ClassDirective"])) || _class);

/***/ }),

/***/ "./src/directive/style/class-odd.js":
/*!******************************************!*\
  !*** ./src/directive/style/class-odd.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "./src/directive/style/class.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ClassOddDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-class-odd'
}), _dec(_class =
/*#__PURE__*/
function (_ClassDirective) {
  _inherits(ClassOddDirective, _ClassDirective);

  function ClassOddDirective() {
    _classCallCheck(this, ClassOddDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(ClassOddDirective).call(this));
  }

  _createClass(ClassOddDirective, [{
    key: "skip",
    value: function skip() {
      return this.$scope.$index & 1 === 0;
    }
  }]);

  return ClassOddDirective;
}(_class__WEBPACK_IMPORTED_MODULE_0__["ClassDirective"])) || _class);

/***/ }),

/***/ "./src/directive/style/class.js":
/*!**************************************!*\
  !*** ./src/directive/style/class.js ***!
  \**************************************/
/*! exports provided: ClassDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassDirective", function() { return ClassDirective; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utility */ "./src/utility/index.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ClassDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_2__["directive"])({
  namespace: 'sine',
  selector: 'n-class'
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(ClassDirective, _Directive);

  function ClassDirective() {
    var _this;

    _classCallCheck(this, ClassDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ClassDirective).call(this));
    _this.unwatch = null;
    _this.initialClassList = [];
    return _this;
  }

  _createClass(ClassDirective, [{
    key: "onInsert",
    value: function onInsert() {
      this.parseClass();
      this.setClass();
    }
  }, {
    key: "onUpdate",
    value: function onUpdate() {
      this.setClass();
    }
  }, {
    key: "watchArray",
    value: function watchArray(arr, action) {
      var self = this;
      this.unwatchArray();
      this.$scope.$watch(arr, 'length', function () {
        action.call(self);
      });
    }
  }, {
    key: "unwatchArray",
    value: function unwatchArray() {
      if (this.unwatch != null) {
        this.unwatch.call(this);
        this.unwatch = null;
      }
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      this.unwatchArray();
    }
  }, {
    key: "textToArray",
    value: function textToArray(text) {
      return text.split(' ').filter(function (item) {
        return item.trim().length > 0;
      });
    }
  }, {
    key: "parseClass",
    value: function parseClass() {
      var classText = this.$getAttrValue('class');

      if (!classText) {
        return;
      }

      this.initialClassList = this.textToArray(classText);
    }
  }, {
    key: "setClassList",
    value: function setClassList(arr) {
      this.$htmlElement.classList.forEach(function (item) {
        this.$htmlElement.classList.remove(item);
      });
      this.initialClassList.forEach(function (item) {
        this.$htmlElement.classList.add(item);
      });
      arr.forEach(function (item) {
        this.$htmlElement.classList.add(item);
      });
    }
  }, {
    key: "setClass",
    value: function setClass() {
      if (this.skip()) {
        return;
      }

      var self = this,
          newArr = [],
          value = this.$binding.compute();

      if (value != null) {
        if (_utility__WEBPACK_IMPORTED_MODULE_0__["isString"](value)) {
          newArr = this.textToArray(value);
        } else if (_utility__WEBPACK_IMPORTED_MODULE_0__["isArray"](value)) {
          newArr = value;
          this.watchArray(value, function () {
            self.setClassList(value);
          });
        } else {
          throw new Error('Parameter of n-class should be string or array');
        }
      }

      this.setClassList(newArr);
    }
  }, {
    key: "skip",
    value: function skip() {
      return false;
    }
  }]);

  return ClassDirective;
}(_view__WEBPACK_IMPORTED_MODULE_1__["Directive"])) || _class);


/***/ }),

/***/ "./src/directive/style/index.js":
/*!**************************************!*\
  !*** ./src/directive/style/index.js ***!
  \**************************************/
/*! exports provided: ClassDirective, StyleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "./src/directive/style/class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClassDirective", function() { return _class__WEBPACK_IMPORTED_MODULE_0__["ClassDirective"]; });

/* harmony import */ var _class_even__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class-even */ "./src/directive/style/class-even.js");
/* empty/unused harmony star reexport *//* harmony import */ var _class_odd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class-odd */ "./src/directive/style/class-odd.js");
/* empty/unused harmony star reexport *//* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./src/directive/style/style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleDirective", function() { return _style__WEBPACK_IMPORTED_MODULE_3__["StyleDirective"]; });

/* harmony import */ var _style_even__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style-even */ "./src/directive/style/style-even.js");
/* empty/unused harmony star reexport *//* harmony import */ var _style_odd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style-odd */ "./src/directive/style/style-odd.js");
/* empty/unused harmony star reexport */






/***/ }),

/***/ "./src/directive/style/style-even.js":
/*!*******************************************!*\
  !*** ./src/directive/style/style-even.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "./src/directive/style/style.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var StyleEvenDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-style-even'
}), _dec(_class =
/*#__PURE__*/
function (_StyleDirective) {
  _inherits(StyleEvenDirective, _StyleDirective);

  function StyleEvenDirective() {
    _classCallCheck(this, StyleEvenDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(StyleEvenDirective).call(this));
  }

  _createClass(StyleEvenDirective, [{
    key: "skip",
    value: function skip() {
      return this.$scope.$index & 1 === 1;
    }
  }]);

  return StyleEvenDirective;
}(_style__WEBPACK_IMPORTED_MODULE_0__["StyleDirective"])) || _class);

/***/ }),

/***/ "./src/directive/style/style-odd.js":
/*!******************************************!*\
  !*** ./src/directive/style/style-odd.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "./src/directive/style/style.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var StyleOddDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-style-odd'
}), _dec(_class =
/*#__PURE__*/
function (_StyleDirective) {
  _inherits(StyleOddDirective, _StyleDirective);

  function StyleOddDirective() {
    _classCallCheck(this, StyleOddDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(StyleOddDirective).call(this));
  }

  _createClass(StyleOddDirective, [{
    key: "skip",
    value: function skip() {
      return this.$scope.$index & 1 === 0;
    }
  }]);

  return StyleOddDirective;
}(_style__WEBPACK_IMPORTED_MODULE_0__["StyleDirective"])) || _class);

/***/ }),

/***/ "./src/directive/style/style.js":
/*!**************************************!*\
  !*** ./src/directive/style/style.js ***!
  \**************************************/
/*! exports provided: StyleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleDirective", function() { return StyleDirective; });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utility */ "./src/utility/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var StyleDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-style'
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(StyleDirective, _Directive);

  function StyleDirective() {
    var _this;

    _classCallCheck(this, StyleDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StyleDirective).call(this));
    _this.unwatch = null;
    _this.initialStyle = {};
    return _this;
  }

  _createClass(StyleDirective, [{
    key: "onInsert",
    value: function onInsert() {
      this.parseStyle();
      this.setStyle();
    }
  }, {
    key: "onUpdate",
    value: function onUpdate() {
      this.setStyle();
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      this.unwatchObj();
    }
  }, {
    key: "watchObj",
    value: function watchObj(obj, action) {
      var self = this;
      this.unwatchObj();
      this.$scope.$watch(obj, '*', function () {
        action.call(self);
      });
    }
  }, {
    key: "unwatchObj",
    value: function unwatchObj() {
      if (this.unwatch != null) {
        this.unwatch.call(this);
        this.unwatch = null;
      }
    }
  }, {
    key: "parseStyle",
    value: function parseStyle() {
      var value = this.$getAttrValue('style');

      if (!value) {
        return;
      }

      this.initialStyle = this.textToObject(value);
    }
  }, {
    key: "textToObject",
    value: function textToObject(text) {
      var obj = {},
          list = text.split(';').filter(function (item) {
        return item.trim().length > 0;
      });
      list.forEach(function (item) {
        var subItems = item.split(':');
        var name = subItems[0];
        var value = subItems[1];
        obj[name] = value;
      });
      return obj;
    }
  }, {
    key: "applyStyle",
    value: function applyStyle(obj) {
      var element = this.$htmlElement; // clean up style

      element.style = ''; // set new style

      _utility__WEBPACK_IMPORTED_MODULE_2__["forEach"](this.initialStyle, function (value, key) {
        element.style[key] = value;
      });
      _utility__WEBPACK_IMPORTED_MODULE_2__["forEach"](obj, function (value, key) {
        element.style[key] = value;
      });
    }
  }, {
    key: "setStyle",
    value: function setStyle() {
      if (this.skip()) {
        return;
      }

      var self = this,
          newStyle = {};
      var value = this.$binding.compute();

      if (value != null) {
        if (_utility__WEBPACK_IMPORTED_MODULE_2__["isString"](value)) {
          newStyle = this.textToObject(value);
        } else if (_utility__WEBPACK_IMPORTED_MODULE_2__["isObject"](value)) {
          newStyle = value;
          this.watchObj(value, function () {
            self.applyStyle(value);
          });
        } else {
          throw new Error('Parameter of n-style should be string or object');
        }
      }

      this.applyStyle(newStyle);
    }
  }, {
    key: "skip",
    value: function skip() {
      return false;
    }
  }]);

  return StyleDirective;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);


/***/ }),

/***/ "./src/directive/switch/index.js":
/*!***************************************!*\
  !*** ./src/directive/switch/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switch */ "./src/directive/switch/switch.js");
/* empty/unused harmony star reexport *//* harmony import */ var _switch_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./switch-default */ "./src/directive/switch/switch-default.js");
/* empty/unused harmony star reexport *//* harmony import */ var _switch_when__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./switch-when */ "./src/directive/switch/switch-when.js");
/* empty/unused harmony star reexport */



/***/ }),

/***/ "./src/directive/switch/switch-default.js":
/*!************************************************!*\
  !*** ./src/directive/switch/switch-default.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utility */ "./src/utility/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var SwitchDefaultDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-switch-default'
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(SwitchDefaultDirective, _Directive);

  function SwitchDefaultDirective() {
    var _this;

    _classCallCheck(this, SwitchDefaultDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SwitchDefaultDirective).call(this));
    _this.isMatch = false;
    _this.htmlComment = null;
    _this.switchWhenDirs = [];
    return _this;
  }

  _createClass(SwitchDefaultDirective, [{
    key: "initSwitchWhenDirs",
    value: function initSwitchWhenDirs() {
      var vEle = this.$element;

      while (vEle.previousSibling != null) {
        var whenDir = vEle.previousSibling.getDirective('n-switch-when');

        if (whenDir != null) {
          this.switchWhenDirs.push(whenDir);
        }

        vEle = vEle.previousSibling;
      }
    }
  }, {
    key: "match",
    value: function match() {
      return !this.switchWhenDirs.some(function (item) {
        return item.isMatch;
      });
    }
  }, {
    key: "onInsert",
    value: function onInsert() {
      var self = this;
      this.initSwitchWhenDirs();
      this.isMatch = this.match();
      this.htmlComment = document.createComment('n-switch-default');

      if (!this.isMatch) {
        _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](this.$htmlElement, this.htmlComment);
      }

      this.switchWhenDirs.forEach(function (item) {
        item.isMatchChanged.on(function () {
          self.update();
        });
      });
    }
  }, {
    key: "update",
    value: function update() {
      var oldValue = this.isMatch,
          newValue = this.match();

      if (newValue !== oldValue) {
        this.isMatch = newValue;

        if (this.isMatch) {
          if (this.$htmlElement.parentNode == null) {
            _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](this.htmlComment, this.$htmlElement);
          }
        } else {
          if (this.$htmlElement.parentNode != null) {
            _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](this.$htmlElement, this.htmlComment);
          }
        }
      }
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      this.htmlComment = null;
      this.switchWhenDirs = null;
    }
  }]);

  return SwitchDefaultDirective;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/directive/switch/switch-when.js":
/*!*********************************************!*\
  !*** ./src/directive/switch/switch-when.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utility */ "./src/utility/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var SwitchWhenDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-switch-when'
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(SwitchWhenDirective, _Directive);

  function SwitchWhenDirective() {
    var _this;

    _classCallCheck(this, SwitchWhenDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SwitchWhenDirective).call(this));
    _this.isMatch = false;
    _this.htmlComment = null;
    _this.switchDir = null;
    _this.isMatchChanged = new _utility__WEBPACK_IMPORTED_MODULE_2__["Messenger"]();
    return _this;
  }

  _createClass(SwitchWhenDirective, [{
    key: "initSwitchDir",
    value: function initSwitchDir() {
      var switchDir = this.$element.parentNode.getDirective('n-switch');

      if (switchDir == null) {
        throw new Error('Require n-switch directive');
      }

      this.switchDir = switchDir;
    }
  }, {
    key: "onInsert",
    value: function onInsert() {
      var self = this;
      this.initSwitchDir();
      this.htmlComment = document.createComment('n-switch-when');
      this.isMatch = this.$binding.compute() === this.switchDir.value;

      if (!this.isMatch) {
        _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](this.$htmlElement, this.htmlComment);
      }

      this.switchDir.valueChanged.on(function () {
        self.update();
      });
    }
  }, {
    key: "update",
    value: function update() {
      var oldValue = this.isMatch,
          newValue = this.$binding.compute() === this.switchDir.value;

      if (newValue !== oldValue) {
        this.isMatch = newValue;
        this.isMatchChanged.fire();

        if (this.isMatch) {
          if (this.$htmlElement.parentNode == null) {
            _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](this.htmlComment, this.$htmlElement);
          }
        } else {
          if (this.$htmlElement.parentNode != null) {
            _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](this.$htmlElement, this.htmlComment);
          }
        }
      }
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      this.htmlComment = null;
      this.switchDir = null;
    }
  }]);

  return SwitchWhenDirective;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/directive/switch/switch.js":
/*!****************************************!*\
  !*** ./src/directive/switch/switch.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utility */ "./src/utility/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var SwitchDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-switch'
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(SwitchDirective, _Directive);

  function SwitchDirective() {
    var _this;

    _classCallCheck(this, SwitchDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SwitchDirective).call(this));
    _this.value = null;
    _this.valueChanged = new _utility__WEBPACK_IMPORTED_MODULE_2__["Messenger"]();
    return _this;
  }

  _createClass(SwitchDirective, [{
    key: "onInsert",
    value: function onInsert() {
      this.value = this.$binding.compute();
    }
  }, {
    key: "onUpdate",
    value: function onUpdate() {
      var oldValue = this.value,
          newValue = this.$binding.compute();

      if (newValue !== oldValue) {
        this.value = newValue;
      }

      this.valueChanged.fire({
        oldValue: oldValue,
        newValue: newValue
      });
    }
  }]);

  return SwitchDirective;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: decorator, typeConst, injector, Injector, Component, Directive, Filter, Service, isComponent, isDirective, isFilter, isService, namespace, component, directive, filter, service, bootstrap, compile, compute, parse, parseExp, parseAssignment, forEach, some, copy, extend, merge, object, inherit, lowercase, uppercase, isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isSame, isFormData, debug, contains, containsStr, hasProperty, getProperty, setProperty, concat, orderBy, orderByDescending, toNumber, remove, getChildNodes, clearChildNodes, replaceNode, removeNode, removeNodeBetween, insertNodeAfter, queryElementLoaded, queryElementUnloaded, queryElementState, addClass, removeClass, httpGet, httpPost, Messenger, MessengerBus, isMessenger, Animation, ClassDirective, StyleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorator */ "./src/decorator/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "decorator", function() { return _decorator__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility */ "./src/utility/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["forEach"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "some", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["some"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["copy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["extend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["merge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "object", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["object"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inherit", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["inherit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lowercase", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["lowercase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uppercase", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["uppercase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["isDefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBlankObject", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["isBlankObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["isDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["isRegExp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["isBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSame", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["isSame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFormData", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["isFormData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["debug"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["contains"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "containsStr", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["containsStr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasProperty", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["hasProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProperty", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["getProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setProperty", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["setProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["concat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orderBy", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["orderBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orderByDescending", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["orderByDescending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["toNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["remove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChildNodes", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["getChildNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearChildNodes", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["clearChildNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceNode", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["replaceNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNode", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["removeNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNodeBetween", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["removeNodeBetween"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertNodeAfter", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["insertNodeAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryElementLoaded", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["queryElementLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryElementUnloaded", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["queryElementUnloaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryElementState", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["queryElementState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["addClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["removeClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "httpGet", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["httpGet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "httpPost", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["httpPost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Messenger", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["Messenger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessengerBus", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["MessengerBus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMessenger", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["isMessenger"]; });

/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ "./src/view/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typeConst", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["typeConst"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "injector", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["injector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Injector", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["Injector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["Component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Directive", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["Directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["Filter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["Service"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isComponent", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["isComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["isDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFilter", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["isFilter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isService", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["isService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["namespace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "component", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["filter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "service", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["service"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["bootstrap"]; });

/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parser */ "./src/parser/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return _parser__WEBPACK_IMPORTED_MODULE_3__["compile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compute", function() { return _parser__WEBPACK_IMPORTED_MODULE_3__["compute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _parser__WEBPACK_IMPORTED_MODULE_3__["parse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseExp", function() { return _parser__WEBPACK_IMPORTED_MODULE_3__["parseExp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseAssignment", function() { return _parser__WEBPACK_IMPORTED_MODULE_3__["parseAssignment"]; });

/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service */ "./src/service/index.js");
/* empty/unused harmony star reexport *//* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directive */ "./src/directive/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClassDirective", function() { return _directive__WEBPACK_IMPORTED_MODULE_5__["ClassDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleDirective", function() { return _directive__WEBPACK_IMPORTED_MODULE_5__["StyleDirective"]; });

/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animation */ "./src/animation/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return _animation__WEBPACK_IMPORTED_MODULE_6__["Animation"]; });










/***/ }),

/***/ "./src/parser/html-lexer.js":
/*!**********************************!*\
  !*** ./src/parser/html-lexer.js ***!
  \**********************************/
/*! exports provided: HtmlLexer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlLexer", function() { return HtmlLexer; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
/* harmony import */ var _lexer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lexer */ "./src/parser/lexer.js");


_utility__WEBPACK_IMPORTED_MODULE_0__["inherit"](HtmlLexer, _lexer__WEBPACK_IMPORTED_MODULE_1__["Lexer"]);

function HtmlLexer(options) {
  HtmlLexer["super"].call(this, options);
}

HtmlLexer.prototype.isValidIdentifierStart = function (ch) {
  return 'a' <= ch && ch <= 'z' || 'A' <= ch && ch <= 'Z' || '_' === ch || ch === '$' || ch === '@' || ch === ':' || ch === '*';
};

HtmlLexer.prototype.isValidIdentifierContinue = function (ch, cp) {
  return this.isValidIdentifierStart(ch, cp) || this.isNumber(ch) || ch === '-' || ch === '.';
};

HtmlLexer.prototype.expectString = function (str) {
  var num = str.length;
  return this.index + num <= this.text.length ? str === this.text.substr(this.index, num) : false;
}; // html comment "<!--comment-->"


HtmlLexer.prototype.readComment = function (begin, end) {
  var start = this.index;
  this.index += begin.length;
  var string = '';
  var rawString = begin;

  while (this.index < this.text.length) {
    var ch = this.text.charAt(this.index);
    rawString += ch;

    if (this.expectString(end)) {
      rawString += end;
      this.index += end.length;
      this.tokens.push({
        index: start,
        text: rawString,
        comment: true,
        value: string
      });
      return;
    } else {
      string += ch;
    }

    this.index++;
  }

  this.throwError('Unterminated comment', start);
}; // html text


HtmlLexer.prototype.readText = function () {
  var start = this.index;
  var string = '';

  while (this.index < this.text.length) {
    var ch = this.text.charAt(this.index);
    var ch2 = this.peek();

    if (ch === '<' && (this.isIdentifierStart(ch2) || ch2 === '/') || this.expectString('<!--')) {
      break;
    }

    string += ch;
    this.index++;
  }

  this.tokens.push({
    index: start,
    text: string,
    textTag: true
  });
}; // html tag


HtmlLexer.prototype.readTag = function (begin, end, closing, doctype) {
  this.tokens.push({
    index: this.index,
    text: begin,
    tag: true,
    closing: closing,
    begin: true,
    doctype: doctype
  });
  this.index += begin.length;
  this.readIdent();

  while (this.index < this.text.length) {
    var ch = this.text.charAt(this.index);

    if (!closing) {
      var ch2 = this.peek();
      var str = ch + ch2;

      if (str === '/' + end) {
        this.tokens.push({
          index: this.index,
          text: str,
          tag: true,
          closing: true,
          end: true
        });
        this.index += str.length;
        break;
      }
    }

    if (ch === end) {
      this.tokens.push({
        index: this.index,
        text: end,
        tag: true,
        closing: !!doctype ? true : closing,
        end: true
      });
      this.index += end.length;
      break;
    }

    if (this.isIdentifierStart(this.peekMultichar())) {
      this.readIdent();
    } else if (ch === '"' || ch === '\'') {
      this.readString(ch);
    } else if (this.isWhitespace(ch)) {
      this.index++;
    } else if (ch === '=') {
      this.tokens.push({
        index: this.index,
        text: '=',
        equal: true
      });
      this.index++;
    } else {
      this.throwError('Unexpected next character ', this.index, this.index + 1);
    }
  }
};

HtmlLexer.prototype.lex = function (text) {
  this.text = text;
  this.index = 0;
  this.tokens = [];
  var allowDocType = !!this.options.allowDocType;

  while (this.index < this.text.length) {
    var ch = this.text.charAt(this.index);
    var ch2 = this.peek();
    var ch3 = this.peek(2);

    if (this.expectString('<!--')) {
      this.readComment('<!--', '-->');
    } else if (ch === '<' && this.isIdentifierStart(ch2)) {
      this.readTag('<', '>', false);
    } else if (this.expectString('</') && this.isIdentifierStart(ch3)) {
      this.readTag('</', '>', true);
    } else if (this.expectString('<!DOCTYPE')) {
      if (allowDocType) {
        this.readTag('<!', '>', true, true);
      } else {
        this.throwError('DOCTYPE is not allowed', this.index, this.index + 1);
      }
    } else {
      this.readText();
    }
  }

  return this.tokens;
};



/***/ }),

/***/ "./src/parser/html-parser.js":
/*!***********************************!*\
  !*** ./src/parser/html-parser.js ***!
  \***********************************/
/*! exports provided: HtmlParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlParser", function() { return HtmlParser; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser */ "./src/parser/parser.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/core/index.js");



_utility__WEBPACK_IMPORTED_MODULE_0__["inherit"](HtmlParser, _parser__WEBPACK_IMPORTED_MODULE_1__["Parser"]);

function HtmlParser(lexer, options) {
  HtmlParser["super"].call(this, lexer, options);
}

HtmlParser.prototype.parse = function (text) {
  this.index = 0;
  this.text = text;
  this.tokens = this.lexer.lex(text);
  var fargment = new _core__WEBPACK_IMPORTED_MODULE_2__["DocumentFragmentNode"]();
  var doctype,
      allowDocType = !!this.options.allowDocType;

  while (this.index < this.tokens.length) {
    var token = this.current();

    if (token.doctype) {
      if (allowDocType) {
        if (!doctype) {
          doctype = this.doctype();
          fargment.$pushChild(doctype);
        } else {
          this.throwError("DOCTYPE only allow one", token);
        }
      } else {
        this.throwError("DOCTYPE is not allowed", token);
      }
    } else if (token.comment) {
      var comment = new _core__WEBPACK_IMPORTED_MODULE_2__["CommentNode"]();
      comment.nodeValue = token.text;
      fargment.$pushChild(comment);
      this.next();
    } else if (token.textTag) {
      var text = new _core__WEBPACK_IMPORTED_MODULE_2__["TextNode"]();
      text.nodeValue = token.text;
      fargment.$pushChild(text);
      this.next();
    } else if (token.tag && token.begin) {
      fargment.$pushChild(this.element());
    } else {
      this.throwError("impossible", token);
    }
  }

  fargment.$buildSibling();
  return fargment.childNodes;
};

HtmlParser.prototype.doctype = function () {
  this.next();
  var docType = new _core__WEBPACK_IMPORTED_MODULE_2__["DocumentTypeNode"]();
  var token = this.current();

  if (token.identifier) {
    docType.nodeValue = token.text;
  } else {
    this.throwError(" Unexpected ", token);
  }

  this.attrs(docType).forEach(function (attr) {
    docType.childNodes.push(attr);
  });
  token = this.current();

  if (token.tag && token.end && token.closing) {
    this.next();
  } else {
    this.throwError(" Unexpected ", token);
  }

  return docType;
};

HtmlParser.prototype.element = function (p) {
  this.next();
  var ele = new _core__WEBPACK_IMPORTED_MODULE_2__["ElementNode"]();
  var token = this.current();

  if (token.identifier) {
    ele.nodeName = token.text;
    this.next();
  } else {
    this.throwError(" Unexpected ", token);
  }

  this.attrs(ele).forEach(function (attr) {
    ele.$pushAttribute(attr);
  });
  token = this.current();

  if (token.tag && token.end) {
    this.next();

    if (ele.nodeName === 'input') {
      ele.selfClosed = true;
      return ele;
    }

    if (!token.closing) {
      this.childElements(ele).forEach(function (child) {
        ele.$pushChild(child);
      });
    }
  } else {
    this.throwError(" Unexpected ", token);
  }

  token = this.current();

  if (token.tag && token.begin && token.closing) {
    this.next();
    token = this.current();

    if (token.identifier) {
      if (ele.nodeName === token.text) {
        this.next();
        token = this.current();

        if (token.tag && token.end && token.closing) {
          this.next();
        } else {
          this.throwError(" Unexpected ", token);
        }
      } else {
        this.throwError(" Unexpected ", token);
      }
    } else {
      this.throwError(" Unexpected ", token);
    }
  } else {
    this.throwError(" Unexpected ", token);
  }

  return ele;
};

HtmlParser.prototype.childElements = function (p) {
  var eles = [];

  while (this.index < this.tokens.length) {
    var token = this.current();

    if (token.tag && token.closing) {
      break;
    } else if (token.comment) {
      var comment = new _core__WEBPACK_IMPORTED_MODULE_2__["CommentNode"]();
      comment.nodeValue = token.text;
      eles.push(comment);
      this.next();
    } else if (token.textTag) {
      var text = new _core__WEBPACK_IMPORTED_MODULE_2__["TextNode"]();
      text.nodeValue = token.text;
      eles.push(text);
      this.next();
    } else if (token.tag && token.begin) {
      eles.push(this.element(p));
    } else {
      this.throwError(" Unexpected ", token);
    }
  }

  return eles;
};

HtmlParser.prototype.attrs = function (p) {
  var attrs = [];

  while (this.index < this.tokens.length) {
    var token = this.current();

    if (token.tag && token.end) {
      break;
    }

    var attr = new _core__WEBPACK_IMPORTED_MODULE_2__["AttrNode"]();

    if (token.identifier) {
      attr.nodeName = token.text;
      attr.origin = token.text;
      this.next();
      token = this.current();

      if (token.equal) {
        this.next();
        token = this.current();

        if (token.constant) {
          attr.nodeValue = token.value;
          this.next();
        } else {
          this.throwError(" Unexpected ", token);
        }
      }
    }

    attrs.push(attr);
  }

  return attrs;
};

HtmlParser.prototype.current = function () {
  if (this.index < this.tokens.length) {
    return this.tokens[this.index];
  }

  return {};
};

HtmlParser.prototype.next = function () {
  this.index++;
};



/***/ }),

/***/ "./src/parser/index.js":
/*!*****************************!*\
  !*** ./src/parser/index.js ***!
  \*****************************/
/*! exports provided: compile, compute, parse, parseExp, parseAssignment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return compile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compute", function() { return compute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseExp", function() { return parseExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseAssignment", function() { return parseAssignment; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
/* harmony import */ var _lexer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lexer */ "./src/parser/lexer.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parser */ "./src/parser/parser.js");
/* harmony import */ var _html_lexer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html-lexer */ "./src/parser/html-lexer.js");
/* harmony import */ var _html_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./html-parser */ "./src/parser/html-parser.js");





var parseOptions = {
  isIdentifierContinue: false,
  isIdentifierStart: false,
  literals: {
    "false": false,
    "null": null,
    "true": true,
    undefined: undefined
  }
};

function parse(html) {
  var lexer = new _html_lexer__WEBPACK_IMPORTED_MODULE_3__["HtmlLexer"](parseOptions);
  var parser = new _html_parser__WEBPACK_IMPORTED_MODULE_4__["HtmlParser"](lexer, parseOptions);
  return parser.parse(html);
}

function compile(html, options) {
  var defaults = {
    getEmbedTpl: function getEmbedTpl() {
      return '';
    },
    containsComponent: function containsComponent() {
      return false;
    },
    createComponent: function createComponent() {
      return null;
    },
    containsDirective: function containsDirective() {
      return false;
    },
    createDirective: function createDirective() {
      return null;
    }
  },
      settings = _utility__WEBPACK_IMPORTED_MODULE_0__["merge"](defaults, options),
      astNodes = parse(html);
  astNodes.forEach(function (astNode) {
    astNode.compile(settings);
  });
  astNodes.forEach(function (astNode) {
    astNode.notifyCompiled(settings);
  });
  return function (scope) {
    var fragment = document.createDocumentFragment();
    scope.$$childElements = astNodes;
    astNodes.forEach(function (astNode) {
      fragment.appendChild(astNode.link(scope));
    });
    astNodes.forEach(function (astNode) {
      astNode.notifyLinked();
    });
    return fragment;
  };
}

function compute(exp, scope, options) {
  options = options || {};

  options.createFilter = function (name) {
    return injector.createFilter(name);
  };

  if (options.collectMembers) {
    options.members = [];
  }

  return parseExp(exp).compute(scope, options);
}

function parseExp(exp) {
  if (exp == null) {
    return;
  }

  exp = exp.trim();

  if (exp.length === 0) {
    return;
  }

  exp = exp.replace('&gt;', '>').replace('&lt;', '<');
  var lexer = new _lexer__WEBPACK_IMPORTED_MODULE_1__["Lexer"](parseOptions);
  var parser = new _parser__WEBPACK_IMPORTED_MODULE_2__["Parser"](lexer, parseOptions);
  return parser.parse(exp);
}

function parseAssignment(exp, scope, options) {
  var ast = parseExp(exp);
  var memberExp = ast.getMemberExpression();

  if (memberExp == null) {
    throw new Error(exp + 'is not valid member expression');
  }

  options = options || {};

  options.createFilter = function (name) {
    return injector.createFilter(name);
  };

  return {
    obj: memberExp.object.compute(scope, options, {}, scope),
    prop: memberExp.property.compute(scope, options, {}, scope)
  };
}



/***/ }),

/***/ "./src/parser/lexer.js":
/*!*****************************!*\
  !*** ./src/parser/lexer.js ***!
  \*****************************/
/*! exports provided: Lexer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lexer", function() { return Lexer; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");

var OPERATORS = {};
var operatorText = '+ - * / % === !== == != < > <= >= && || ! = |';
var ESCAPE = {
  'n': '\n',
  'f': '\f',
  'r': '\r',
  't': '\t',
  'v': '\v',
  '\'': '\'',
  '"': '"'
};
operatorText.split(' ').forEach(function (operator) {
  OPERATORS[operator] = true;
});

function Lexer(options) {
  this.options = options;
}

Lexer.prototype.lex = function (text) {
  this.text = text;
  this.index = 0;
  this.tokens = [];

  while (this.index < this.text.length) {
    var ch = this.text.charAt(this.index);

    if (ch === '"' || ch === '\'') {
      this.readString(ch);
    } else if (this.isNumber(ch) || ch === '.' && this.isNumber(this.peek())) {
      this.readNumber();
    } else if (this.isIdentifierStart(this.peekMultichar())) {
      this.readIdent();
    } else if (this.is(ch, '(){}[].,;:?')) {
      this.tokens.push({
        index: this.index,
        text: ch
      });
      this.index++;
    } else if (this.isWhitespace(ch)) {
      this.index++;
    } else {
      var ch2 = ch + this.peek();
      var ch3 = ch2 + this.peek(2);
      var op1 = OPERATORS[ch];
      var op2 = OPERATORS[ch2];
      var op3 = OPERATORS[ch3];

      if (op1 || op2 || op3) {
        var token = op3 ? ch3 : op2 ? ch2 : ch;
        this.tokens.push({
          index: this.index,
          text: token,
          operator: true
        });
        this.index += token.length;
      } else {
        this.throwError('Unexpected next character ', this.index, this.index + 1);
      }
    }
  }

  return this.tokens;
};

Lexer.prototype.is = function (ch, chars) {
  return chars.indexOf(ch) !== -1;
};

Lexer.prototype.peek = function (i) {
  var num = i || 1;
  return this.index + num < this.text.length ? this.text.charAt(this.index + num) : false;
};

Lexer.prototype.isNumber = function (ch) {
  return '0' <= ch && ch <= '9' && typeof ch === 'string';
};

Lexer.prototype.isWhitespace = function (ch) {
  // IE treats non-breaking space as \u00A0
  return ch === ' ' || ch === '\r' || ch === '\t' || ch === '\n' || ch === '\v' || ch === "\xA0";
};

Lexer.prototype.isIdentifierStart = function (ch) {
  return this.options.isIdentifierStart ? this.options.isIdentifierStart(ch, this.codePointAt(ch)) : this.isValidIdentifierStart(ch);
};

Lexer.prototype.isValidIdentifierStart = function (ch) {
  return 'a' <= ch && ch <= 'z' || 'A' <= ch && ch <= 'Z' || '_' === ch || ch === '$';
};

Lexer.prototype.isIdentifierContinue = function (ch) {
  return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(ch, this.codePointAt(ch)) : this.isValidIdentifierContinue(ch);
};

Lexer.prototype.isValidIdentifierContinue = function (ch, cp) {
  return this.isValidIdentifierStart(ch, cp) || this.isNumber(ch);
};

Lexer.prototype.codePointAt = function (ch) {
  if (ch.length === 1) {
    return ch.charCodeAt(0);
  } // eslint-disable-next-line no-bitwise


  return (ch.charCodeAt(0) << 10) + ch.charCodeAt(1) - 0x35FDC00;
};

Lexer.prototype.peekMultichar = function () {
  var ch = this.text.charAt(this.index);
  var peek = this.peek();

  if (!peek) {
    return ch;
  }

  var cp1 = ch.charCodeAt(0);
  var cp2 = peek.charCodeAt(0);

  if (cp1 >= 0xD800 && cp1 <= 0xDBFF && cp2 >= 0xDC00 && cp2 <= 0xDFFF) {
    return ch + peek;
  }

  return ch;
};

Lexer.prototype.isExpOperator = function (ch) {
  return ch === '-' || ch === '+' || this.isNumber(ch);
};

Lexer.prototype.throwError = function (error, start, end) {
  end = end || this.index;
  var colStr = _utility__WEBPACK_IMPORTED_MODULE_0__["isDefined"](start) ? 's ' + start + '-' + this.index + ' [' + this.text.substring(start, end) + ']' : ' ' + end;
  throw new Error('Lexer Error: ' + error + ' at column' + colStr + ' in expression [' + this.text + '].');
};

Lexer.prototype.readNumber = function () {
  var number = '';
  var start = this.index;

  while (this.index < this.text.length) {
    var ch = _utility__WEBPACK_IMPORTED_MODULE_0__["lowercase"](this.text.charAt(this.index));

    if (ch === '.' || this.isNumber(ch)) {
      number += ch;
    } else {
      var peekCh = this.peek();

      if (ch === 'e' && this.isExpOperator(peekCh)) {
        number += ch;
      } else if (this.isExpOperator(ch) && peekCh && this.isNumber(peekCh) && number.charAt(number.length - 1) === 'e') {
        number += ch;
      } else if (this.isExpOperator(ch) && (!peekCh || !this.isNumber(peekCh)) && number.charAt(number.length - 1) === 'e') {
        this.throwError('Invalid exponent');
      } else {
        break;
      }
    }

    this.index++;
  }

  this.tokens.push({
    index: start,
    text: number,
    constant: true,
    value: Number(number)
  });
};

Lexer.prototype.readIdent = function () {
  var start = this.index;
  this.index += this.peekMultichar().length;

  while (this.index < this.text.length) {
    var ch = this.peekMultichar();

    if (!this.isIdentifierContinue(ch)) {
      break;
    }

    this.index += ch.length;
  }

  this.tokens.push({
    index: start,
    text: this.text.slice(start, this.index),
    identifier: true
  });
};

Lexer.prototype.readString = function (quote) {
  var start = this.index;
  this.index++;
  var string = '';
  var rawString = quote;
  var escape = false;

  while (this.index < this.text.length) {
    var ch = this.text.charAt(this.index);
    rawString += ch;

    if (escape) {
      if (ch === 'u') {
        var hex = this.text.substring(this.index + 1, this.index + 5);

        if (!hex.match(/[\da-f]{4}/i)) {
          this.throwError("Invalid unicode escape [\\u" + hex + ']');
        }

        this.index += 4;
        string += String.fromCharCode(parseInt(hex, 16));
      } else {
        var rep = ESCAPE[ch];
        string = string + (rep || ch);
      }

      escape = false;
    } else if (ch === '\\') {
      escape = true;
    } else if (ch === quote) {
      this.index++;
      this.tokens.push({
        index: start,
        text: rawString,
        constant: true,
        value: string
      });
      return;
    } else {
      string += ch;
    }

    this.index++;
  }

  this.throwError('Unterminated quote', start);
};



/***/ }),

/***/ "./src/parser/null-object.js":
/*!***********************************!*\
  !*** ./src/parser/null-object.js ***!
  \***********************************/
/*! exports provided: NullObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NullObject", function() { return NullObject; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NullObject = function NullObject() {
  _classCallCheck(this, NullObject);
};



/***/ }),

/***/ "./src/parser/parser.js":
/*!******************************!*\
  !*** ./src/parser/parser.js ***!
  \******************************/
/*! exports provided: Parser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parser", function() { return Parser; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _null_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./null-object */ "./src/parser/null-object.js");



var AST = {};
AST.Program = 'Program';
AST.ExpressionStatement = 'ExpressionStatement';
AST.AssignmentExpression = 'AssignmentExpression';
AST.ConditionalExpression = 'ConditionalExpression';
AST.LogicalExpression = 'LogicalExpression';
AST.BinaryExpression = 'BinaryExpression';
AST.UnaryExpression = 'UnaryExpression';
AST.CallExpression = 'CallExpression';
AST.MemberExpression = 'MemberExpression';
AST.Identifier = 'Identifier';
AST.Literal = 'Literal';
AST.ArrayExpression = 'ArrayExpression';
AST.Property = 'Property';
AST.ObjectExpression = 'ObjectExpression';

function AstNode(type) {
  this.type = type;
  this.childNodes = [];
}

AstNode.prototype.appendChild = function (child) {
  this.childNodes.push(child);
};

AstNode.prototype.compute = function (scope, options, context) {
  return this.childNodes.map(function (child) {
    return child.compute(scope, options || {}, context);
  });
}; // has condition or call expression


AstNode.prototype.hasCC = function () {
  return this.childNodes.some(function (child) {
    return child.hasCC();
  });
};

_utility__WEBPACK_IMPORTED_MODULE_0__["inherit"](ProgramNode, AstNode);

function ProgramNode() {
  ProgramNode["super"].call(this, AST.Program);
}

ProgramNode.prototype.compute = function (scope, options) {
  var result = this.childNodes[0].compute(scope, options || {});

  if (result instanceof _null_object__WEBPACK_IMPORTED_MODULE_2__["NullObject"]) {
    return null;
  }

  return result;
};

ProgramNode.prototype.getMemberExpression = function () {
  return this.childNodes[0].getMemberExpression();
};

_utility__WEBPACK_IMPORTED_MODULE_0__["inherit"](ExpressionStatementNode, AstNode);

function ExpressionStatementNode() {
  ExpressionStatementNode["super"].call(this, AST.ExpressionStatement);
}

ExpressionStatementNode.prototype.compute = function (scope, options, context) {
  return this.childNodes[0].compute(scope, options || {}, context);
};

ExpressionStatementNode.prototype.getMemberExpression = function () {
  var child = this.childNodes[0];

  if (child instanceof MemberExpressionNode) {
    return child;
  }

  return null;
};

_utility__WEBPACK_IMPORTED_MODULE_0__["inherit"](AssignmentExpressionNode, AstNode);

function AssignmentExpressionNode(left, right, operator) {
  AssignmentExpressionNode["super"].call(this, AST.AssignmentExpression);
  this.left = left;
  this.right = right;
  this.operator = operator;
}

AssignmentExpressionNode.prototype.compute = function (scope, options) {
  var target = this.left.compute(scope, options, {
    assignmentLeft: true
  });
  var value = this.right.compute(scope, options);
  target.obj[target.prop] = value;
};

_utility__WEBPACK_IMPORTED_MODULE_0__["inherit"](ConditionalExpressionNode, AstNode);

function ConditionalExpressionNode(test, alternate, consequent) {
  ConditionalExpressionNode["super"].call(this, AST.ConditionalExpression);
  this.test = test;
  this.alternate = alternate;
  this.consequent = consequent;
}

ConditionalExpressionNode.prototype.compute = function (scope, options) {
  if (this.test.compute(scope, options)) {
    return this.alternate.compute(scope, options);
  }

  return this.consequent.compute(scope, options);
}; // has condition or call expression


ConditionalExpressionNode.prototype.hasCC = function () {
  return true;
};

_utility__WEBPACK_IMPORTED_MODULE_0__["inherit"](LogicalExpressionNode, AstNode);

function LogicalExpressionNode(operator, left, right) {
  LogicalExpressionNode["super"].call(this, AST.LogicalExpression);
  this.operator = operator;
  this.left = left;
  this.right = right;
}

LogicalExpressionNode.prototype.compute = function (scope, options) {
  var result;
  var leftValue = this.left.compute(scope, options);
  var rightValue = this.right.compute(scope, options);

  switch (this.operator) {
    case '&&':
      result = leftValue && rightValue;
      break;

    case '||':
      result = leftValue && rightValue;
      break;
  }

  return result;
};

_utility__WEBPACK_IMPORTED_MODULE_0__["inherit"](BinaryExpressionNode, AstNode);

function BinaryExpressionNode(operator, left, right) {
  BinaryExpressionNode["super"].call(this, AST.BinaryExpression);
  this.operator = operator;
  this.left = left;
  this.right = right;
}

BinaryExpressionNode.prototype.compute = function (scope, options) {
  var result;
  var leftValue = this.left.compute(scope, options);
  var rightValue = this.right.compute(scope, options); // '+', '-', '*', '/', '%', '<', '>', '<=', '>=', '==', '!=', '===', '!=='

  switch (this.operator) {
    case '+':
      result = leftValue + rightValue;
      break;

    case '-':
      result = leftValue - rightValue;
      break;

    case '*':
      result = leftValue * rightValue;
      break;

    case '/':
      result = leftValue / rightValue;
      break;

    case '%':
      result = leftValue % rightValue;
      break;

    case '<':
      result = leftValue < rightValue;
      break;

    case '>':
      result = leftValue > rightValue;
      break;

    case '<=':
      result = leftValue <= rightValue;
      break;

    case '>=':
      result = leftValue >= rightValue;
      break;

    case '==':
      result = leftValue == rightValue;
      break;

    case '!=':
      result = leftValue != rightValue;
      break;

    case '===':
      result = leftValue === rightValue;
      break;

    case '!==':
      result = leftValue !== rightValue;
      break;
  }

  return result;
};

_utility__WEBPACK_IMPORTED_MODULE_0__["inherit"](UnaryExpressionNode, AstNode);

function UnaryExpressionNode(operator, arg) {
  UnaryExpressionNode["super"].call(this, AST.UnaryExpression);
  this.prefix = true;
  this.operator = operator;
  this.arg = arg;
}

UnaryExpressionNode.prototype.compute = function (scope, options) {
  var result,
      value = this.arg.compute(scope, options);

  switch (this.operator) {
    case '+':
      result = value;
      break;

    case '-':
      result = -value;
      break;

    case '!':
      result = !value;
      break;
  }

  return result;
};

_utility__WEBPACK_IMPORTED_MODULE_0__["inherit"](LiteralNode, AstNode);

function LiteralNode(value) {
  LiteralNode["super"].call(this, AST.Literal);
  this.value = value;
}

LiteralNode.prototype.compute = function () {
  return this.value;
};

LiteralNode.prototype.toText = function () {
  return this.value;
};

_utility__WEBPACK_IMPORTED_MODULE_0__["inherit"](CallExpressionNode, AstNode);

function CallExpressionNode(callee, args) {
  CallExpressionNode["super"].call(this, AST.CallExpression);
  this.callee = callee;
  this.args = args;
  this.filter = false;
}

CallExpressionNode.prototype.compute = function (scope, options) {
  var context = this.callee.compute(scope, options, {
    callee: true
  });
  var argValues = this.args.map(function (arg) {
    return arg.compute(scope, options);
  });

  if (this.filter) {
    var filterIns = options.createFilter(context.prop);

    if (Object(_view__WEBPACK_IMPORTED_MODULE_1__["isFilter"])(filterIns)) {
      return filterIns.$execute.apply(filterIns, argValues);
    }

    throw new Error('Filter "' + context.prop + '" is not defined');
  } else {
    var fn = context.obj[context.prop];

    if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](fn)) {
      return fn.apply(context.obj, argValues);
    }

    throw new Error(context.prop + ' is not a function');
  }
}; // has condition or call expression


CallExpressionNode.prototype.hasCC = function () {
  return !this.filter;
};

_utility__WEBPACK_IMPORTED_MODULE_0__["inherit"](MemberExpressionNode, AstNode);

function MemberExpressionNode(object, property, computed) {
  MemberExpressionNode["super"].call(this, AST.MemberExpression);
  this.object = object;
  this.property = property;
  this.computed = computed;
  this.allowNull = false;
}

MemberExpressionNode.prototype.compute = function (scope, options, context) {
  var obj = this.object.compute(scope, options);

  if (obj == null && this.object.allowNull) {
    obj = new _null_object__WEBPACK_IMPORTED_MODULE_2__["NullObject"]();
  }

  if (this.computed) {
    var prop = this.property.compute(scope, options, context);

    if (_utility__WEBPACK_IMPORTED_MODULE_0__["isArray"](options.members)) {
      options.members.push({
        target: obj,
        targetKey: this.object.toText(),
        key: prop
      });
    }

    return obj[prop];
  }

  return this.property.compute(obj, options, context, this.object);
};

MemberExpressionNode.prototype.toText = function () {
  return this.object.toText() + '.' + this.property.toText();
};

_utility__WEBPACK_IMPORTED_MODULE_0__["inherit"](IdentifierNode, AstNode);

function IdentifierNode(name) {
  IdentifierNode["super"].call(this, AST.Identifier);
  this.name = name;
  this.allowNull = false;
}

IdentifierNode.prototype.compute = function (obj, options, context, objNode) {
  if (context) {
    if (context.assignmentLeft || context.callee) {
      return {
        obj: obj,
        prop: this.name
      };
    } else if (context.propertyKey) {
      return this.name;
    }
  }

  var result = obj[this.name];

  if (_utility__WEBPACK_IMPORTED_MODULE_0__["isArray"](options.members)) {
    options.members.push({
      target: obj,
      targetKey: objNode != null ? objNode.toText() : null,
      key: this.name
    });
  }

  if (result == null && options.locals) {
    result = options.locals[this.name];
  }

  return result;
};

IdentifierNode.prototype.toText = function () {
  return this.name;
};

_utility__WEBPACK_IMPORTED_MODULE_0__["inherit"](ArrayExpressionNode, AstNode);

function ArrayExpressionNode() {
  ArrayExpressionNode["super"].call(this, AST.ArrayExpression);
}

_utility__WEBPACK_IMPORTED_MODULE_0__["inherit"](PropertyNode, AstNode);

function PropertyNode() {
  PropertyNode["super"].call(this, AST.Property);
  this.kind = 'init';
  this.key = null;
  this.value = null;
  this.computed = false;
}

PropertyNode.prototype.compute = function (scope, options) {
  return {
    key: this.key.compute(scope, options, {
      propertyKey: true
    }),
    value: this.value.compute(scope, options)
  };
};

_utility__WEBPACK_IMPORTED_MODULE_0__["inherit"](ObjectExpressionNode, AstNode);

function ObjectExpressionNode(properties) {
  ObjectExpressionNode["super"].call(this, AST.ObjectExpression);
  this.properties = properties;
}

ObjectExpressionNode.prototype.compute = function (scope, options) {
  var result = {};
  this.properties.forEach(function (item) {
    var def = item.compute(scope, options);
    result[def.key] = def.value;
  });
  return result;
};

function isAssignable(ast) {
  return ast.type === AST.Identifier || ast.type === AST.MemberExpression;
}

function Parser(lexer, options) {
  this.lexer = lexer;
  this.options = options;
}

Parser.prototype.throwError = function (msg, token) {
  throw new Error('Syntax Error: Token \'' + token.text + '\'' + msg + ' at column ' + (token.index + 1) + ' of the expression [' + this.text + '] starting at [' + this.text.substring(token.index) + '].');
};

Parser.prototype.parse = function (text) {
  this.text = text;
  this.tokens = this.lexer.lex(text);
  var value = this.program();

  if (this.tokens.length !== 0) {
    this.throwError('is an unexpected token', this.tokens[0]);
  }

  return value;
};

Parser.prototype.program = function () {
  var program = new ProgramNode();

  while (true) {
    if (this.tokens.length > 0 && !this.peek('}', ')', ';', ']')) {
      program.appendChild(this.expressionStatement());
    }

    if (!this.expect(';')) {
      return program;
    }
  }
};

Parser.prototype.expressionStatement = function () {
  var exp = new ExpressionStatementNode();
  exp.appendChild(this.filterChain());
  return exp;
};

Parser.prototype.filterChain = function () {
  var left = this.expression();

  while (this.expect('|')) {
    left = this.filter(left);
  }

  return left;
};

Parser.prototype.expression = function () {
  return this.assignment();
};

Parser.prototype.assignment = function () {
  var result = this.ternary();

  if (this.expect('=')) {
    if (!isAssignable(result)) {
      throw new Error('Trying to assign a value to a non l-value');
    }

    result = new AssignmentExpressionNode(result, this.assignment(), '=');
  }

  return result;
};

Parser.prototype.ternary = function () {
  var test = this.logicalOR();
  var alternate;
  var consequent;

  if (this.expect('?')) {
    alternate = this.expression();

    if (this.consume(':')) {
      consequent = this.expression();
      return new ConditionalExpressionNode(test, alternate, consequent);
    }
  }

  return test;
};

Parser.prototype.logicalOR = function () {
  var left = this.logicalAND();

  while (this.expect('||')) {
    left = new LogicalExpressionNode('||', left, this.logicalAND());
  }

  return left;
};

Parser.prototype.logicalAND = function () {
  var left = this.equality();

  while (this.expect('&&')) {
    left = new LogicalExpressionNode('&&', left, this.equality());
  }

  return left;
};

Parser.prototype.equality = function () {
  var left = this.relational();
  var token;

  while (token = this.expect('==', '!=', '===', '!==')) {
    left = new BinaryExpressionNode(token.text, left, this.relational());
  }

  return left;
};

Parser.prototype.relational = function () {
  var left = this.additive();
  var token;

  while (token = this.expect('<', '>', '<=', '>=')) {
    left = new BinaryExpressionNode(token.text, left, this.additive());
  }

  return left;
};

Parser.prototype.additive = function () {
  var left = this.multiplicative();
  var token;

  while (token = this.expect('+', '-')) {
    left = new BinaryExpressionNode(token.text, left, this.multiplicative());
  }

  return left;
};

Parser.prototype.multiplicative = function () {
  var left = this.unary();
  var token;

  while (token = this.expect('*', '/', '%')) {
    left = new BinaryExpressionNode(token.text, left, this.unary());
  }

  return left;
};

Parser.prototype.unary = function () {
  var token;

  if (token = this.expect('+', '-', '!')) {
    return new UnaryExpressionNode(token.text, this.unary());
  } else {
    return this.primary();
  }
};

Parser.prototype.primary = function () {
  var primary;

  if (this.expect('(')) {
    primary = this.filterChain();
    this.consume(')');
  } else if (this.expect('[')) {
    primary = this.arrayDeclaration();
  } else if (this.expect('{')) {
    primary = this.object();
  } else if (this.options.literals.hasOwnProperty(this.peek().text)) {
    primary = new LiteralNode(this.options.literals[this.consume().text]);
  } else if (this.peek().identifier) {
    primary = this.identifier();
  } else if (this.peek().constant) {
    primary = this.constant();
  } else {
    this.throwError('not a primary expression', this.peek());
  }

  var next;

  while (this.peek('(', '[', '.') || this.peek('?') && this.peekAhead(1, '.')) {
    if (this.expect('?')) {
      primary.allowNull = true;
    }

    next = this.expect('(', '[', '.');

    if (next.text === '(') {
      primary = new CallExpressionNode(primary, this.parseArguments());
      this.consume(')');
    } else if (next.text === '[') {
      primary = new MemberExpressionNode(primary, this.expression(), true);
      this.consume(']');
    } else if (next.text === '.') {
      primary = new MemberExpressionNode(primary, this.identifier(), false);
    } else {
      this.throwError('IMPOSSIBLE');
    }
  }

  return primary;
};

Parser.prototype.filter = function (baseExpression) {
  var args = [baseExpression],
      identifiers = [this.identifier()];

  while (this.expect('.')) {
    identifiers.push(this.identifier());
  } // plus namespace


  var entireName = identifiers.map(function (item) {
    return item.name;
  }).join('.');
  var result = new CallExpressionNode(new IdentifierNode(entireName), args);
  result.filter = true;

  while (this.expect(':')) {
    args.push(this.expression());
  }

  return result;
};

Parser.prototype.parseArguments = function () {
  var args = [];

  if (this.peekToken().text !== ')') {
    do {
      args.push(this.filterChain());
    } while (this.expect(','));
  }

  return args;
};

Parser.prototype.identifier = function () {
  var token = this.consume();

  if (!token.identifier) {
    this.throwError('is not a valid identifier', token);
  }

  return new IdentifierNode(token.text);
};

Parser.prototype.constant = function () {
  // TODO check that it is a constant
  return new LiteralNode(this.consume().value);
};

Parser.prototype.arrayDeclaration = function () {
  var arr = new ArrayExpressionNode();

  if (this.peekToken().text !== ']') {
    do {
      if (this.peek(']')) {
        // Support trailing commas per ES5.1.
        break;
      }

      arr.appendChild(this.expression());
    } while (this.expect(','));
  }

  this.consume(']');
  return arr;
};

Parser.prototype.object = function () {
  var properties = [],
      property;

  if (this.peekToken().text !== '}') {
    do {
      if (this.peek('}')) {
        // Support trailing commas per ES5.1.
        break;
      }

      property = new PropertyNode();

      if (this.peek().constant) {
        property.key = this.constant();
        property.computed = false;
        this.consume(':');
        property.value = this.expression();
      } else if (this.peek().identifier) {
        property.key = this.identifier();
        property.computed = false;

        if (this.peek(':')) {
          this.consume(':');
          property.value = this.expression();
        } else {
          property.value = property.key;
        }
      } else if (this.peek('[')) {
        this.consume('[');
        property.key = this.expression();
        this.consume(']');
        property.computed = true;
        this.consume(':');
        property.value = this.expression();
      } else {
        this.throwError('invalid key', this.peek());
      }

      properties.push(property);
    } while (this.expect(','));
  }

  this.consume('}');
  return new ObjectExpressionNode(properties);
};

Parser.prototype.consume = function (e1) {
  if (this.tokens.length === 0) {
    throw new Error('Unexpected end of expression: ' + this.text);
  }

  var token = this.expect(e1);

  if (!token) {
    this.throwError('is unexpected, expecting [' + e1 + ']', this.peek());
  }

  return token;
};

Parser.prototype.peekToken = function () {
  if (this.tokens.length === 0) {
    throw new Error('Unexpected end of expression: ' + this.text);
  }

  return this.tokens[0];
};

Parser.prototype.peek = function (e1, e2, e3, e4) {
  return this.peekAhead(0, e1, e2, e3, e4);
};

Parser.prototype.peekAhead = function (i, e1, e2, e3, e4) {
  if (this.tokens.length > i) {
    var token = this.tokens[i];
    var t = token.text;

    if (t === e1 || t === e2 || t === e3 || t === e4 || !e1 && !e2 && !e3 && !e4) {
      return token;
    }
  }

  return false;
};

Parser.prototype.expect = function (e1, e2, e3, e4) {
  var token = this.peek(e1, e2, e3, e4);

  if (token) {
    this.tokens.shift();
    return token;
  }

  return false;
};



/***/ }),

/***/ "./src/service/index.js":
/*!******************************!*\
  !*** ./src/service/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _template_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template-cache */ "./src/service/template-cache.js");
/* empty/unused harmony star reexport *//* harmony import */ var _model_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model-options */ "./src/service/model-options.js");
/* empty/unused harmony star reexport */


/***/ }),

/***/ "./src/service/model-options.js":
/*!**************************************!*\
  !*** ./src/service/model-options.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator */ "./src/decorator/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ModelOptionsService = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["service"])({
  namespace: 'sine',
  selector: '$modelOptions'
}), _dec(_class =
/*#__PURE__*/
function (_Service) {
  _inherits(ModelOptionsService, _Service);

  function ModelOptionsService() {
    var _this;

    _classCallCheck(this, ModelOptionsService);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ModelOptionsService).call(this));
    _this.cssClass = {
      pristine: 'n-pristine',
      dirty: 'n-dirty',
      valid: 'n-valid',
      invalid: 'n-invalid'
    };
    return _this;
  }

  return ModelOptionsService;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Service"])) || _class);

/***/ }),

/***/ "./src/service/template-cache.js":
/*!***************************************!*\
  !*** ./src/service/template-cache.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorator */ "./src/decorator/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var TemplateCacheService = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_2__["service"])({
  namespace: 'sine',
  selector: '$templateCache'
}), _dec(_class =
/*#__PURE__*/
function (_Service) {
  _inherits(TemplateCacheService, _Service);

  function TemplateCacheService() {
    var _this;

    _classCallCheck(this, TemplateCacheService);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TemplateCacheService).call(this));
    _this.tplCache = {};
    _this.promiseCache = {};
    return _this;
  }

  _createClass(TemplateCacheService, [{
    key: "getTplByUrl",
    value: function getTplByUrl(url) {
      var self = this;

      if (this.tplCache[url]) {
        return new Promise(function (resolve) {
          resolve(self.tplCache[url]);
        });
      }

      if (!this.promiseCache[url]) {
        this.promiseCache[url] = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["httpGet"])(url).then(function (res) {
          self.promiseCache[url] = null;
          self.tplCache[url] = res.data || '';
          return self.tplCache[url];
        });
      }

      return this.promiseCache[url];
    }
  }]);

  return TemplateCacheService;
}(_view__WEBPACK_IMPORTED_MODULE_1__["Service"])) || _class);

/***/ }),

/***/ "./src/utility/http.js":
/*!*****************************!*\
  !*** ./src/utility/http.js ***!
  \*****************************/
/*! exports provided: httpGet, httpPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpGet", function() { return httpGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpPost", function() { return httpPost; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utility/utils.js");

var readyStateEnum = {
  start: 0,
  opened: 1,
  sent: 2,
  received: 3,
  finish: 4
};

function createXHR() {
  return new XMLHttpRequest();
}

function createPromise(resolve, reject) {
  return new Promise(resolve, reject);
}

function addUrlParam(url, name, value) {
  url += url.indexOf('?') === -1 ? '?' : '&';
  url += encodeURIComponent(name) + '=' + encodeURIComponent(value);
  return url;
}

function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {
    return parsed;
  }

  _utils__WEBPACK_IMPORTED_MODULE_0__["forEach"](headers.split('\n'), function parser(line, index) {
    i = line.indexOf(':');
    key = line.substr(0, i).trim().toLowerCase();
    val = line.substr(i + 1).trim();

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }

      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });
  return parsed;
}

function buildUrl(url, config) {
  if (config.data != null && config.method.toLowerCase() === 'get') {
    _utils__WEBPACK_IMPORTED_MODULE_0__["forEach"](config.data, function (value, name) {
      addUrlParam(url, name, value);
    });
  }

  return url;
}

function request(config) {
  return createPromise(function (resolve, reject) {
    var xhr = createXHR();

    if (_utils__WEBPACK_IMPORTED_MODULE_0__["isFormData"](config.data)) {
      delete config.data['Content-Type']; // Let the browser set it
    }

    xhr.onreadystatechange = function () {
      if (!xhr || xhr.readyState !== readyStateEnum.finish) {
        return;
      }

      if (xhr.status === 0 && !(xhr.responseURL && xhr.responseURL.indexOf('file:') === 0)) {
        return;
      } // Prepare the response


      var responseHeaders = 'getAllResponseHeaders' in xhr ? parseHeaders(xhr.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? xhr.responseText : xhr.response;
      var response = {
        data: responseData,
        status: xhr.status,
        statusText: xhr.statusText,
        headers: responseHeaders,
        config: config,
        request: xhr
      };

      if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
        // successfully
        resolve(response);
      } else {
        // unsuccessfully
        reject(response);
      }

      xhr = null;
    };

    xhr.open(config.method.toLowerCase(), buildUrl(config.url, config), true);
    xhr.send(config.data);
  });
}

function httpGet(url, data, options) {
  var config = {
    method: 'get',
    url: url,
    data: data
  };

  if (options != null) {
    _utils__WEBPACK_IMPORTED_MODULE_0__["extend"](config, options);
  }

  return request(config);
}

function httpPost(url, data, options) {
  var config = {
    method: 'post',
    url: url,
    data: data
  };

  if (options != null) {
    _utils__WEBPACK_IMPORTED_MODULE_0__["extend"](config, options);
  }

  return request(config);
}



/***/ }),

/***/ "./src/utility/index.js":
/*!******************************!*\
  !*** ./src/utility/index.js ***!
  \******************************/
/*! exports provided: forEach, some, copy, extend, merge, object, inherit, lowercase, uppercase, isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isSame, isFormData, debug, contains, containsStr, hasProperty, getProperty, setProperty, concat, orderBy, orderByDescending, toNumber, remove, getChildNodes, clearChildNodes, replaceNode, removeNode, removeNodeBetween, insertNodeAfter, queryElementLoaded, queryElementUnloaded, queryElementState, addClass, removeClass, httpGet, httpPost, Messenger, MessengerBus, isMessenger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utility/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["forEach"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "some", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["some"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["copy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["extend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["merge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "object", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["object"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inherit", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["inherit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lowercase", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["lowercase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uppercase", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["uppercase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isDefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBlankObject", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isBlankObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isRegExp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSame", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isSame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFormData", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isFormData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["debug"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["contains"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "containsStr", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["containsStr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasProperty", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["hasProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProperty", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["getProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setProperty", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["setProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["concat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orderBy", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["orderBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orderByDescending", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["orderByDescending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["toNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["remove"]; });

/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node */ "./src/utility/node.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChildNodes", function() { return _node__WEBPACK_IMPORTED_MODULE_1__["getChildNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearChildNodes", function() { return _node__WEBPACK_IMPORTED_MODULE_1__["clearChildNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceNode", function() { return _node__WEBPACK_IMPORTED_MODULE_1__["replaceNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNode", function() { return _node__WEBPACK_IMPORTED_MODULE_1__["removeNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNodeBetween", function() { return _node__WEBPACK_IMPORTED_MODULE_1__["removeNodeBetween"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertNodeAfter", function() { return _node__WEBPACK_IMPORTED_MODULE_1__["insertNodeAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryElementLoaded", function() { return _node__WEBPACK_IMPORTED_MODULE_1__["queryElementLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryElementUnloaded", function() { return _node__WEBPACK_IMPORTED_MODULE_1__["queryElementUnloaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryElementState", function() { return _node__WEBPACK_IMPORTED_MODULE_1__["queryElementState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return _node__WEBPACK_IMPORTED_MODULE_1__["addClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return _node__WEBPACK_IMPORTED_MODULE_1__["removeClass"]; });

/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http */ "./src/utility/http.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "httpGet", function() { return _http__WEBPACK_IMPORTED_MODULE_2__["httpGet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "httpPost", function() { return _http__WEBPACK_IMPORTED_MODULE_2__["httpPost"]; });

/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message */ "./src/utility/message.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Messenger", function() { return _message__WEBPACK_IMPORTED_MODULE_3__["Messenger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessengerBus", function() { return _message__WEBPACK_IMPORTED_MODULE_3__["MessengerBus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMessenger", function() { return _message__WEBPACK_IMPORTED_MODULE_3__["isMessenger"]; });






/***/ }),

/***/ "./src/utility/message.js":
/*!********************************!*\
  !*** ./src/utility/message.js ***!
  \********************************/
/*! exports provided: Messenger, MessengerBus, isMessenger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Messenger", function() { return Messenger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessengerBus", function() { return MessengerBus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMessenger", function() { return isMessenger; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utility/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Messenger =
/*#__PURE__*/
function () {
  function Messenger() {
    _classCallCheck(this, Messenger);

    this.handlers = [];
  }

  _createClass(Messenger, [{
    key: "on",
    value: function on(fn) {
      this.handlers.push(fn);
    }
  }, {
    key: "off",
    value: function off(fn) {
      for (var i = 0; i < this.handlers.length; i++) {
        if (this.handlers[i] === fn) {
          this.handlers.splice(i, 1);
        }
      }
    }
  }, {
    key: "fire",
    value: function fire(args, scope) {
      var returnValue;
      scope = scope || this;

      for (var i = 0; i < this.handlers.length; i++) {
        if (_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.handlers[i])) {
          returnValue = this.handlers[i].call(scope, args);
        }
      }

      return returnValue;
    }
  }]);

  return Messenger;
}();

var MessengerBus =
/*#__PURE__*/
function () {
  function MessengerBus() {
    _classCallCheck(this, MessengerBus);

    this.messengers = {};
  }

  _createClass(MessengerBus, [{
    key: "get",
    value: function get(e) {
      if (!this.messengers[e]) {
        this.messengers[e] = new Messenger();
      }

      return this.messengers[e];
    }
  }, {
    key: "on",
    value: function on(e, fn) {
      this.get(e).on(fn);
    }
  }, {
    key: "off",
    value: function off(e, fn) {
      this.get(e).off(fn);
    }
  }, {
    key: "fire",
    value: function fire(e, args, scope) {
      return this.get(e).fire(args, scope);
    }
  }]);

  return MessengerBus;
}();

function isMessenger(obj) {
  return obj instanceof Messenger;
}



/***/ }),

/***/ "./src/utility/node.js":
/*!*****************************!*\
  !*** ./src/utility/node.js ***!
  \*****************************/
/*! exports provided: getChildNodes, clearChildNodes, replaceNode, removeNode, removeNodeBetween, insertNodeAfter, queryElementLoaded, queryElementUnloaded, queryElementState, addClass, removeClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildNodes", function() { return getChildNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearChildNodes", function() { return clearChildNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceNode", function() { return replaceNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNode", function() { return removeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNodeBetween", function() { return removeNodeBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertNodeAfter", function() { return insertNodeAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryElementLoaded", function() { return queryElementLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryElementUnloaded", function() { return queryElementUnloaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryElementState", function() { return queryElementState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
function getChildNodes(node) {
  return Array.prototype.slice.call(node.childNodes, 0);
}

function clearChildNodes(node) {
  getChildNodes(node).forEach(function (child) {
    node.removeChild(child);
  });
}

function replaceNode(refNode, newNode) {
  var parentNode = refNode.parentNode;

  if (parentNode != null) {
    parentNode.insertBefore(newNode, refNode);
    parentNode.removeChild(refNode);
  }
}

function removeNode(node) {
  var parentNode = node.parentNode;

  if (parentNode != null) {
    parentNode.removeChild(node);
  }
}

function removeNodeBetween(beginNode, endNode) {
  var parentNode = beginNode.parentNode;
  var childNodes = getChildNodes(parentNode);
  childNodes.forEach(function (child) {
    if (child.previousSibling === beginNode && child !== endNode) {
      parentNode.removeChild(child);
    }

    if (child.nextSibling === endNode && child !== beginNode) {
      parentNode.removeChild(child);
    }
  });
}

function insertNodeAfter(refNode, newNode) {
  var parentNode = refNode.parentNode;

  if (parentNode.lastChild === refNode) {
    parentNode.appendChild(newNode);
  } else {
    parentNode.insertBefore(newNode, refNode.nextSibling);
  }
}

function queryElementLoaded(ele, callback) {
  var cancelToken = false;

  function query() {
    if (cancelToken) {
      return;
    }

    if (ele.clientWidth > 0 && ele.clientHeight > 0) {
      callback();
    } else {
      requestAnimationFrame(query);
    }
  }

  requestAnimationFrame(query);
  return function () {
    cancelToken = true;
  };
}

function queryElementUnloaded(ele, callback) {
  var cancelToken = false;

  function query() {
    if (cancelToken) {
      return;
    }

    if (ele.clientWidth === 0 && ele.clientHeight == 0) {
      callback();
    } else {
      requestAnimationFrame(query);
    }
  }

  requestAnimationFrame(query);
  return function () {
    cancelToken = true;
  };
}

function queryElementState(ele, callbacks) {
  var cancelToken = false,
      loaded = false;

  function query() {
    if (cancelToken) {
      return;
    }

    if (ele.clientWidth > 0 && ele.clientHeight > 0) {
      if (!loaded) {
        loaded = true;

        if (callbacks.onEnter != null) {
          callbacks.onEnter.call(callbacks);
        }
      }
    } else {
      if (loaded) {
        loaded = false;

        if (callbacks.onLeave != null) {
          callbacks.onLeave.call(callbacks);
        }
      }
    }

    requestAnimationFrame(query);
  }

  requestAnimationFrame(query);
  return function () {
    cancelToken = true;
  };
}

function addClass(el, cls) {
  if (!cls || !(cls = cls.trim())) {
    return;
  }

  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) {
        return el.classList.add(c);
      });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";

    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

function removeClass(el, cls) {
  if (!cls || !(cls = cls.trim())) {
    return;
  }

  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) {
        return el.classList.remove(c);
      });
    } else {
      el.classList.remove(cls);
    }

    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';

    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }

    cur = cur.trim();

    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}



/***/ }),

/***/ "./src/utility/utils.js":
/*!******************************!*\
  !*** ./src/utility/utils.js ***!
  \******************************/
/*! exports provided: forEach, some, copy, extend, merge, object, inherit, lowercase, uppercase, isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isSame, isFormData, debug, contains, containsStr, hasProperty, getProperty, setProperty, concat, orderBy, orderByDescending, toNumber, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "some", function() { return some; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "object", function() { return object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inherit", function() { return inherit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lowercase", function() { return lowercase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uppercase", function() { return uppercase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return isDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBlankObject", function() { return isBlankObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return isDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return isRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSame", function() { return isSame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFormData", function() { return isFormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsStr", function() { return containsStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasProperty", function() { return hasProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProperty", function() { return getProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProperty", function() { return setProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderBy", function() { return orderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderByDescending", function() { return orderByDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var debugMode = true,
    toString = Object.prototype.toString,
    getPrototypeOf = Object.getPrototypeOf;

function forEach(obj, action, ignoreOwn) {
  if (isArray(obj)) {
    for (var index = 0; index < obj.length; index++) {
      if (action(obj[index], index)) {
        return;
      }
    }
  } else if (isObject(obj)) {
    for (var p in obj) {
      if (ignoreOwn || obj.hasOwnProperty(p)) {
        if (action(obj[p], p)) {
          return;
        }
      }
    }
  } else {
    action(obj, obj);
  }
}

function some(obj, action) {
  if (isArray(obj)) {
    for (var index = 0; index < obj.length; index++) {
      if (action(index, obj[index])) {
        return true;
      }
    }
  } else if (isObject(obj)) {
    for (var p in obj) {
      if (obj.hasOwnProperty(p)) {
        if (action(p, obj[p])) {
          return true;
        }
      }
    }
  } else {
    return action(obj, obj);
  }
}

function copy() {
  var deep = false,
      objIndex = 0,
      obj = arguments[objIndex],
      filter;

  if (isBoolean(obj)) {
    deep = obj;
    objIndex++;
    obj = arguments[objIndex];
  }

  if (arguments.length > objIndex + 1) {
    filter = arguments[objIndex + 1];
  }

  if (isArray(obj)) {
    var newArr = [];
    obj.forEach(function (item, index) {
      if (filter == null || filter(obj, index, item)) {
        newArr.push(deep ? copy(item) : item);
      }
    });
    return newArr;
  }

  if (isObject(obj)) {
    var newObj = object(obj);
    forEach(obj, function (value, key) {
      if (filter == null || filter(obj, key, value)) {
        newObj[key] = deep ? copy(value) : value;
      }
    });
    return newObj;
  }

  return obj;
}

function extend() {
  var deep = false,
      index = 0,
      target = arguments[index];

  if (isBoolean(target)) {
    deep = target;
    target = arguments[++index];
  }

  if (deep) {
    Array.prototype.slice.call(arguments, index + 1).forEach(function (item) {
      deepMerge(target, item);
    });
  } else {
    Array.prototype.slice.call(arguments, index + 1).forEach(function (item) {
      plainMerge(target, item);
    });
  }
}

function merge() {
  var deep = false,
      index = 0,
      target = {};

  if (isBoolean(arguments[index])) {
    deep = arguments[index];
    index++;
  }

  if (deep) {
    Array.prototype.slice.call(arguments, index).forEach(function (item) {
      deepMerge(target, item);
    });
  } else {
    Array.prototype.slice.call(arguments, index).forEach(function (item) {
      plainMerge(target, item);
    });
  }

  return target;
}

function plainMerge(target, source) {
  forEach(source, function (value, key) {
    target[key] = value;
  });
}

function deepMerge(target, source) {
  forEach(source, function (value, key) {
    if (target[key] == null) {
      target[key] = value;
    } else {
      if (isObject(target[key]) && isObject(value)) {
        deepMerge(target[key], value);
      } else {
        target[key] = value;
      }
    }
  });
}

function object(o) {
  function F() {}

  F.prototype = o;
  return new F();
}

function inheritPrototype(subType, superType) {
  var prototype = object(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}

function inherit(subType, superType) {
  inheritPrototype(subType, superType);

  subType["super"] = function () {
    superType.apply(this, arguments);
  };
}

function lowercase(string) {
  return isString(string) ? string.toLowerCase() : string;
}

function uppercase(string) {
  return isString(string) ? string.toUpperCase() : string;
}

function isUndefined(value) {
  return typeof value === 'undefined';
}

function isDefined(value) {
  return typeof value !== 'undefined';
}

function isArray(obj) {
  return obj instanceof Array;
}

function isMap(obj) {
  return obj instanceof Map;
}

function isObject(value) {
  return value !== null && _typeof(value) === 'object';
}

function isBlankObject(value) {
  return value !== null && _typeof(value) === 'object' && !getPrototypeOf(value);
}

function isString(value) {
  return typeof value === 'string';
}

function isNumber(value) {
  return typeof value === 'number';
}

function isDate(value) {
  return toString.call(value) === '[object Date]';
}

function isFunction(value) {
  return typeof value === 'function';
}

function isRegExp(value) {
  return toString.call(value) === '[object RegExp]';
}

function isBoolean(value) {
  return typeof value === 'boolean';
}

function isFormData(value) {
  return typeof FormData !== 'undefined' && value instanceof FormData;
}

function isSame(obj1, obj2) {
  var same = obj1 === obj2;

  if (!same) {
    if (isArray(obj1) && isArray(obj2)) {
      if (obj1.length === obj2.length) {
        same = !some(obj1, function (index, value) {
          return !isSame(value, obj2[index]);
        });
      }
    } else if (isObject(obj1) && isObject(obj2) && getPrototypeOf(obj1) === getPrototypeOf(obj2)) {
      same = !some(obj1, function (key, value) {
        return !isSame(value, obj2[key]);
      });
    }
  }

  return same;
}

function debug(log) {
  if (debugMode) {
    console.log(log);
  }
}

function contains(arr, obj) {
  return arr.some(function (item) {
    return item === obj;
  });
}

function containsStr(arr, str, ignoreCase) {
  return arr.some(function (item) {
    return item === str || ignoreCase && lowercase(item) === lowercase(str);
  });
}

function hasProperty(obj, key, ignoreCase) {
  if (!obj) {
    return false;
  }

  var key2,
      hasProp = true,
      keys = key.split('.'),
      target = obj;

  while (hasProp && keys.length > 0) {
    key2 = keys.shift();
    hasProp = false;
    forEach(target, function (value3, key3) {
      hasProp = key3 === key2 || ignoreCase && lowercase(key3) === lowercase(key2);

      if (hasProp) {
        target = value3;
      }

      return hasProp;
    }, true);
  }

  return hasProp;
}

function getProperty(obj, key, ignoreCase) {
  if (!obj) {
    return null;
  }

  var key2,
      hasProp = true,
      keys = key.split('.'),
      target = obj;

  while (hasProp && keys.length > 0) {
    key2 = keys.shift();
    hasProp = false;
    forEach(target, function (value3, key3) {
      hasProp = key3 === key2 || ignoreCase && lowercase(key3) === lowercase(key2);

      if (hasProp) {
        target = value3;
      }

      return hasProp;
    }, true);
  }

  return hasProp ? target : null;
}

function setProperty(obj, key, value, ignoreCase) {
  if (!obj) {
    return;
  }

  var key2,
      hasProp = true,
      keys = key.split('.'),
      target = obj;

  while (hasProp && keys.length > 0) {
    key2 = keys.shift();

    if (keys.length === 0) {
      target[key2] = value;
    } else {
      hasProp = false;
      forEach(target, function (value3, key3) {
        hasProp = key3 === key2 || ignoreCase && lowercase(key3) === lowercase(key2);

        if (hasProp) {
          target = value3;
        }

        return hasProp;
      }, true);
    }
  }

  if (!hasProp) {
    throw new Error(key + ': Can not set property of undefined');
  }
}

function concat() {
  return Array.prototype.concat.apply([], arguments);
}

function orderBy(arr, getter) {
  var getValue = function getValue(item) {
    if (getter == null) {
      return item;
    }

    return getter(item);
  };

  return arr.sort(function (a, b) {
    if (getValue(a) < getValue(b)) {
      return -1;
    }

    if (getValue(a) > getValue(b)) {
      return 1;
    }

    return 0;
  });
}

function orderByDescending(arr, getter) {
  var getValue = function getValue(item) {
    if (getter == null) {
      return item;
    }

    return getter(item);
  };

  return arr.sort(function (a, b) {
    if (getValue(a) < getValue(b)) {
      return 1;
    }

    if (getValue(a) > getValue(b)) {
      return -1;
    }

    return 0;
  });
}

function toNumber(value) {
  var n = parseFloat(value);
  return isNaN(n) ? value : n;
}

function remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);

    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}



/***/ }),

/***/ "./src/view/component.js":
/*!*******************************!*\
  !*** ./src/view/component.js ***!
  \*******************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "./src/core/index.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parser */ "./src/parser/index.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./injector */ "./src/view/injector.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Component =
/*#__PURE__*/
function () {
  _createClass(Component, [{
    key: "$proxy",
    get: function get() {
      return this.toProxy();
    }
  }]);

  function Component(meta) {
    _classCallCheck(this, Component);

    Component.construct.call(this, meta);
  }

  _createClass(Component, [{
    key: "$hooks",
    value: function $hooks() {
      return {
        beforeAttrChange: '',
        afterAttrChange: '',
        onInit: '',
        beforeViewInit: '',
        afterViewMount: '',
        onDestroy: ''
      };
    }
  }, {
    key: "$getMeta",
    value: function $getMeta() {
      return this.$$meta || {};
    }
  }, {
    key: "$setMeta",
    value: function $setMeta(value) {
      this.$$meta = value;
    }
  }, {
    key: "$bindNode",
    value: function $bindNode(node) {
      this.$$element = node;
    }
  }, {
    key: "$hasAttr",
    value: function $hasAttr(prop) {
      return _utility__WEBPACK_IMPORTED_MODULE_0__["hasProperty"](this, prop, true);
    }
  }, {
    key: "$initAttr",
    value: function $initAttr(prop, value) {
      var oldValue = _utility__WEBPACK_IMPORTED_MODULE_0__["getProperty"](this, prop, true);

      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.beforeAttrChange)) {
        this.beforeAttrChange.call(this, prop, value, oldValue);
      }

      _utility__WEBPACK_IMPORTED_MODULE_0__["setProperty"](this, prop, value, true);

      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.afterAttrChange)) {
        this.afterAttrChange.call(this, prop, value, oldValue);
      }
    }
  }, {
    key: "$initAttrDone",
    value: function $initAttrDone() {
      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onInit)) {
        this.onInit.call(this);
      }
    }
  }, {
    key: "$setAttr",
    value: function $setAttr(prop, value) {
      var oldValue = _utility__WEBPACK_IMPORTED_MODULE_0__["getProperty"](this, prop, true);

      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.beforeAttrChange)) {
        this.beforeAttrChange.call(this, prop, value, oldValue);
      }

      _utility__WEBPACK_IMPORTED_MODULE_0__["setProperty"](this.$proxy, prop, value, true);

      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.afterAttrChange)) {
        this.afterAttrChange.call(this, prop, value, oldValue);
      }
    }
  }, {
    key: "$listen",
    value: function $listen(e, fn) {
      var messenger = _utility__WEBPACK_IMPORTED_MODULE_0__["getProperty"](this, e, true);

      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isMessenger"](messenger)) {
        messenger.on(fn);
        return;
      }

      throw new Error(e + ' is not a event');
    }
  }, {
    key: "$getTemplate",
    value: function $getTemplate(sync) {
      var meta = this.$getMeta();

      if (sync) {
        return meta.template || '';
      }

      return new Promise(function (resolve) {
        if (_utility__WEBPACK_IMPORTED_MODULE_0__["isString"](meta.template)) {
          resolve(meta.template);
        } else if (_utility__WEBPACK_IMPORTED_MODULE_0__["isString"](meta.templateUrl)) {
          _injector__WEBPACK_IMPORTED_MODULE_3__["injector"].service('$templateCache').getTplByUrl(meta.templateUrl).then(function (tpl) {
            resolve(tpl);
          });
        } else {
          resolve('');
        }
      });
    }
  }, {
    key: "$using",
    value: function $using(name) {
      var meta = this.$getMeta(),
          using = meta.using,
          segments = name.split('.'),
          className = segments.pop(),
          spaceName = segments.join('.');

      if (spaceName && _utility__WEBPACK_IMPORTED_MODULE_0__["isObject"](using)) {
        _utility__WEBPACK_IMPORTED_MODULE_0__["some"](using, function (key, value) {
          if (key === spaceName) {
            name = value + '.' + className;
            return true;
          }
        });
      }

      return name;
    }
  }, {
    key: "$makeCompileOptions",
    value: function $makeCompileOptions() {
      var self = this;
      return {
        getEmbedTpl: function getEmbedTpl() {
          return self.$$element.getInnerTpl();
        },
        containsComponent: function containsComponent(name) {
          return _injector__WEBPACK_IMPORTED_MODULE_3__["injector"].containsComponent(self.$using(name));
        },
        createComponent: function createComponent(name) {
          return _injector__WEBPACK_IMPORTED_MODULE_3__["injector"].createComponent(self.$using(name));
        },
        containsDirective: function containsDirective(name) {
          return _injector__WEBPACK_IMPORTED_MODULE_3__["injector"].containsDirective(self.$using(name));
        },
        createDirective: function createDirective(name) {
          return _injector__WEBPACK_IMPORTED_MODULE_3__["injector"].createDirective(self.$using(name));
        }
      };
    }
  }, {
    key: "$hasView",
    value: function $hasView() {
      return _utility__WEBPACK_IMPORTED_MODULE_0__["isArray"](this.$$childElements);
    }
  }, {
    key: "$showView",
    value: function $showView() {
      var fragment = document.createDocumentFragment();
      this.$$childElements.forEach(function (child) {
        fragment.appendChild(child.getHtmlElement());
      });
      return fragment;
    }
  }, {
    key: "$clearView",
    value: function $clearView() {
      if (!this.$hasView()) {
        return;
      }

      this.$$childElements.forEach(function (child) {
        child.destroy();
      });
      this.$$childElements = null;
    }
  }, {
    key: "$render",
    value: function $render(sync) {
      var self = this,
          fragment = null;

      if (sync) {
        if (this.$hasView()) {
          fragment = this.$showView();
        } else {
          fragment = Object(_parser__WEBPACK_IMPORTED_MODULE_2__["compile"])(this.$getTemplate(sync), this.$makeCompileOptions())(this);
        }

        return fragment;
      }

      return new Promise(function (resolve) {
        if (self.$hasView()) {
          resolve(self.$showView());
        } else {
          self.$getTemplate().then(function (html) {
            fragment = Object(_parser__WEBPACK_IMPORTED_MODULE_2__["compile"])(html, self.$makeCompileOptions())(self);
            resolve(fragment);
          });
        }
      });
    }
  }, {
    key: "$refresh",
    value: function $refresh(sync) {
      this.$clearView();
      return this.$render(sync);
    }
  }, {
    key: "$mount",
    value: function $mount(selectorOrElement, options) {
      var self = this,
          element,
          options = options || {};

      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isString"](selectorOrElement)) {
        element = document.querySelector(selectorOrElement);
      } else {
        element = selectorOrElement;
      }

      if (!options.append) {
        _utility__WEBPACK_IMPORTED_MODULE_0__["clearChildNodes"](element);
      }

      if (options.sync) {
        element.appendChild(this.$render(options.sync));
        self.$afterViewMount();
      } else {
        this.$render(options.sync).then(function (ele) {
          element.appendChild(ele);
          self.$afterViewMount();
        });
      }
    }
  }, {
    key: "$unmount",
    value: function $unmount() {
      if (this.$$element != null) {
        this.$$element.$remove();
        this.$$element.removeHtmlElement();
      } else if (this.$hasView()) {
        this.$$childElements.forEach(function (child) {
          child.removeHtmlElement();
        });
      }

      if (this.$$parentComponent != null) {
        this.$$parentComponent.$removeChildCmp(this);
        this.$$parentComponent = null;
      }
    }
  }, {
    key: "$afterViewMount",
    value: function $afterViewMount() {
      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.afterViewMount)) {
        this.afterViewMount.call(this);
      }
    }
  }, {
    key: "$detect",
    value: function $detect() {
      if (this.$$detectTimeout || !this.$$childElements) {
        return;
      }

      var self = this;
      self.$$detectTimeout = setTimeout(function () {
        self.$$detectTimeout = null;
        self.$$childElements.forEach(function (child) {
          child.detect();
        });
      });
    }
  }, {
    key: "$validate",
    value: function $validate() {
      var obj,
          prop,
          action,
          self = this;

      if (arguments.length === 2) {
        obj = this;
        prop = arguments[0];
        action = arguments[1];
      } else if (arguments.length === 3) {
        obj = arguments[0];
        prop = arguments[1];
        action = arguments[2];
      } else {
        throw new Error('arguments error');
      }

      return this.$$observer.validate(obj, prop, action);
    }
  }, {
    key: "$watch",
    value: function $watch() {
      var obj,
          prop,
          action,
          self = this;

      if (arguments.length === 2) {
        obj = this;
        prop = arguments[0];
        action = arguments[1];
      } else if (arguments.length === 3) {
        obj = arguments[0];
        prop = arguments[1];
        action = arguments[2];
      } else {
        throw new Error('arguments error');
      }

      return this.$$observer.watch(obj, prop, action);
    }
  }, {
    key: "$eval",
    value: function $eval(exp) {
      return Object(_parser__WEBPACK_IMPORTED_MODULE_2__["compute"])(exp, this);
    }
  }, {
    key: "$getParentCmp",
    value: function $getParentCmp() {
      return this.$$parentComponent;
    }
  }, {
    key: "$removeChildCmp",
    value: function $removeChildCmp(childCmp) {
      var index = this.$$childComponents.indexOf(childCmp);

      if (index !== -1) {
        this.$$childComponents.splice(index, 1);
        childCmp.$$parentComponent = null;
      }
    }
  }, {
    key: "$createChildCmp",
    value: function $createChildCmp(childCmp) {
      var component = _injector__WEBPACK_IMPORTED_MODULE_3__["injector"].createComponent(childCmp);
      this.$$childComponents.push(component);
      component.$$parentComponent = this;
      return component;
    }
  }, {
    key: "$inheritCmp",
    value: function $inheritCmp(parentCmp) {
      var self = this;
      Object.setPrototypeOf(self, _utility__WEBPACK_IMPORTED_MODULE_0__["object"](parentCmp)); // todo - resolve issue calling parent component's lifecycle hooks

      _utility__WEBPACK_IMPORTED_MODULE_0__["forEach"](self.$hooks(), function (handler, hook) {
        if (self.hasOwnProperty(hook) == null) {
          self[hook] = function () {};
        }
      });
      this.$$disposers.push(parentCmp.$validate('*', function (prop, args) {
        self.$$observer.fireChanging(self, prop, args);
      }));
      this.$$disposers.push(parentCmp.$watch('*', function (prop, args) {
        self.$$observer.fireChanged(self, prop, args);
      }));
    }
  }, {
    key: "$dispose",
    value: function $dispose(destroyFromElement) {
      // remove virtual node first in case it triggers parent component destroy
      this.$unmount();

      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onDestroy)) {
        this.onDestroy.call(this);
      }

      if (this.$$detectTimeout) {
        clearTimeout(this.$$detectTimeout);
      }

      this.$$disposers.forEach(function (disposer) {
        disposer.call();
      });
      this.$clearView();
      this.$$observer.destroy();

      if (destroyFromElement) {
        this.$$element = null;
      }

      this.$$childComponents = null;
      this.$$childDirectives = null;
    }
  }, {
    key: "$destroy",
    value: function $destroy() {
      this.$dispose(); // destroy virtual node in the end because it may binds logic about destroy

      if (this.$$element != null) {
        this.$$element.dispose(true);
        this.$$element = null;
      }
    }
  }], [{
    key: "construct",
    value: function construct(meta) {
      this.$$element = null;
      this.$$childElements = null;
      this.$$parentComponent = null;
      this.$$childComponents = [];
      this.$$childDirectives = [];
      this.$$detectTimeout = null;
      this.$$observer = new _core__WEBPACK_IMPORTED_MODULE_1__["Observer"]();
      this.$$disposers = [];

      if (meta != null) {
        this.$setMeta(meta);
      }

      _injector__WEBPACK_IMPORTED_MODULE_3__["injector"].injectServices(this);
    }
  }]);

  return Component;
}();

/***/ }),

/***/ "./src/view/directive.js":
/*!*******************************!*\
  !*** ./src/view/directive.js ***!
  \*******************************/
/*! exports provided: Directive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Directive", function() { return Directive; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./injector */ "./src/view/injector.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Directive =
/*#__PURE__*/
function () {
  _createClass(Directive, [{
    key: "$htmlElement",
    get: function get() {
      if (this.$element != null) {
        return this.$element.htmlElement;
      }

      return null;
    }
  }, {
    key: "$component",
    get: function get() {
      if (this.$element != null) {
        return this.$element.ownerComponent;
      }

      return null;
    }
  }, {
    key: "$scope",
    get: function get() {
      if (this.$binding != null) {
        return this.$binding.scope;
      }

      return null;
    }
  }]);

  function Directive() {
    _classCallCheck(this, Directive);

    Directive.construct.call(this);
  }

  _createClass(Directive, [{
    key: "$hooks",
    value: function $hooks() {
      return {
        onInit: '',
        onCompile: '',
        onInsert: '',
        onDetect: '',
        onUpdate: '',
        onDestroy: ''
      };
    }
  }, {
    key: "$getMeta",
    value: function $getMeta() {
      return this.$$meta || {};
    }
  }, {
    key: "$setMeta",
    value: function $setMeta(value) {
      this.$$meta = value;
    }
  }, {
    key: "$bindNode",
    value: function $bindNode(node) {
      this.$attr = node;
      this.$element = node.ownerElement;
    }
  }, {
    key: "$setBinding",
    value: function $setBinding(binding) {
      this.$binding = binding;
    }
  }, {
    key: "$compile",
    value: function $compile(options) {
      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onCompile)) {
        this.onCompile.call(this, options);
      }
    }
  }, {
    key: "$insert",
    value: function $insert() {
      var self = this;

      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onInsert)) {
        this.onInsert.call(this);
      }

      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onEnter) || _utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onLeave)) {
        this.$requestAnimation();
      }
    }
  }, {
    key: "$isLoaded",
    value: function $isLoaded() {
      return this.$htmlElement.clientWidth > 0 && this.$htmlElement.clientHeight > 0;
    }
  }, {
    key: "$requestAnimation",
    value: function $requestAnimation() {
      var self = this;

      function query() {
        if (self.$$cancelAnimationToken) {
          return;
        }

        if (self.$isLoaded()) {
          if (!self.$elementloaded) {
            self.$elementloaded = true;

            if (self.onEnter != null) {
              self.onEnter.call(self);
            }
          }
        } else {
          if (self.$elementloaded) {
            self.$elementloaded = false;

            if (self.onLeave != null) {
              self.onLeave.call(self);
            }
          }
        }

        requestAnimationFrame(query);
      }

      requestAnimationFrame(query);
    }
  }, {
    key: "$cancelAnimation",
    value: function $cancelAnimation() {
      this.$$cancelAnimationToken = true;
    }
  }, {
    key: "$detect",
    value: function $detect() {
      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onDetect)) {
        return this.onDetect.call(this);
      }

      if (this.$binding.detect()) {
        this.$update();
      }
    }
  }, {
    key: "$update",
    value: function $update() {
      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onUpdate)) {
        this.onUpdate.call(this);
      }
    }
  }, {
    key: "$getAttrValue",
    value: function $getAttrValue(attrName) {
      var attrNode = this.$element.getAttribute(attrName);

      if (attrNode == null) {
        return '';
      }

      return attrNode.binding.value;
    }
  }, {
    key: "$dispose",
    value: function $dispose(destroyFromAttr) {
      var self = this;
      this.$cancelAnimation();

      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onDestroy)) {
        this.onDestroy.call(this);
      }

      if (destroyFromAttr) {
        this.$attr = null;
        this.$element = null;
      }

      this.$$disposers.forEach(function (disposer) {
        disposer.call(self);
      });
      this.$binding = null;
    }
  }, {
    key: "$destroy",
    value: function $destroy() {
      this.$dispose();

      if (this.$attr != null) {
        this.$attr.dispose(true);
        this.$attr = null;
        this.$element = null;
      }
    }
  }], [{
    key: "construct",
    value: function construct() {
      // private properties
      this.$$disposers = [];
      this.$$cancelAnimationToken = false; // private properties
      // public properties

      this.$output = false;
      this.$binding = null;
      this.$attr = null;
      this.$element = null;
      this.$priority = 0;
      this.$elementloaded = false; // public properties

      _injector__WEBPACK_IMPORTED_MODULE_1__["injector"].injectServices(this);
    }
  }]);

  return Directive;
}();

/***/ }),

/***/ "./src/view/filter.js":
/*!****************************!*\
  !*** ./src/view/filter.js ***!
  \****************************/
/*! exports provided: Filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return Filter; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./injector */ "./src/view/injector.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Filter =
/*#__PURE__*/
function () {
  function Filter() {
    _classCallCheck(this, Filter);

    Filter.construct.call(this);
  }

  _createClass(Filter, [{
    key: "$hooks",
    value: function $hooks() {
      return {
        onInit: '',
        onDestroy: ''
      };
    }
  }, {
    key: "$getMeta",
    value: function $getMeta() {
      return this.$$meta || {};
    }
  }, {
    key: "$setMeta",
    value: function $setMeta(value) {
      this.$$meta = value;
    }
  }, {
    key: "$execute",
    value: function $execute() {
      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onExecute)) {
        return this.onExecute.apply(this, arguments);
      }
    }
  }, {
    key: "$destroy",
    value: function $destroy() {
      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onDestroy)) {
        this.onDestroy.call(this);
      }
    }
  }], [{
    key: "construct",
    value: function construct() {
      _injector__WEBPACK_IMPORTED_MODULE_1__["injector"].injectServices(this);
    }
  }]);

  return Filter;
}();

/***/ }),

/***/ "./src/view/index.js":
/*!***************************!*\
  !*** ./src/view/index.js ***!
  \***************************/
/*! exports provided: typeConst, injector, Injector, Component, Directive, Filter, Service, isComponent, isDirective, isFilter, isService, namespace, component, directive, filter, service, bootstrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComponent", function() { return isComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return isDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFilter", function() { return isFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isService", function() { return isService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return namespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "component", function() { return _component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return _directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "service", function() { return _service; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return bootstrap; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./injector */ "./src/view/injector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typeConst", function() { return _injector__WEBPACK_IMPORTED_MODULE_1__["typeConst"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "injector", function() { return _injector__WEBPACK_IMPORTED_MODULE_1__["injector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Injector", function() { return _injector__WEBPACK_IMPORTED_MODULE_1__["Injector"]; });

/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component */ "./src/view/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _component__WEBPACK_IMPORTED_MODULE_2__["Component"]; });

/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directive */ "./src/view/directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Directive", function() { return _directive__WEBPACK_IMPORTED_MODULE_3__["Directive"]; });

/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter */ "./src/view/filter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return _filter__WEBPACK_IMPORTED_MODULE_4__["Filter"]; });

/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service */ "./src/view/service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return _service__WEBPACK_IMPORTED_MODULE_5__["Service"]; });








function namespace(ns) {
  return {
    component: function component(name, def) {
      def.namespace = ns;
      return _component(name, def);
    },
    directive: function directive(name, def) {
      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](def)) {
        def = {
          methods: {
            onInsert: def,
            onUpdate: def
          }
        };
      }

      def.namespace = ns;
      return _directive(name, def);
    },
    service: function service(name, def) {
      def.namespace = ns;
      return _service(name, def);
    },
    filter: function filter(name, def) {
      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](def)) {
        def = {
          methods: {
            onExecute: def
          }
        };
      }

      def.namespace = ns;
      return _filter(name, def);
    }
  };
}

function _component(name, def) {
  return _injector__WEBPACK_IMPORTED_MODULE_1__["injector"].buildConstructor(name, def, {
    contractType: _injector__WEBPACK_IMPORTED_MODULE_1__["typeConst"].component,
    superClass: makeConstructor(_component__WEBPACK_IMPORTED_MODULE_2__["Component"])
  });
}

function _directive(name, def) {
  if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](def)) {
    def = {
      methods: {
        onInsert: def,
        onUpdate: def
      }
    };
  }

  return _injector__WEBPACK_IMPORTED_MODULE_1__["injector"].buildConstructor(name, def, {
    contractType: _injector__WEBPACK_IMPORTED_MODULE_1__["typeConst"].directive,
    superClass: makeConstructor(_directive__WEBPACK_IMPORTED_MODULE_3__["Directive"])
  });
}

function _filter(name, def) {
  if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](def)) {
    def = {
      methods: {
        onExecute: def
      }
    };
  }

  return _injector__WEBPACK_IMPORTED_MODULE_1__["injector"].buildConstructor(name, def, {
    contractType: _injector__WEBPACK_IMPORTED_MODULE_1__["typeConst"].filter,
    superClass: makeConstructor(_filter__WEBPACK_IMPORTED_MODULE_4__["Filter"])
  });
}

function _service(name, def) {
  return _injector__WEBPACK_IMPORTED_MODULE_1__["injector"].buildConstructor(name, def, {
    contractType: _injector__WEBPACK_IMPORTED_MODULE_1__["typeConst"].service,
    superClass: makeConstructor(_service__WEBPACK_IMPORTED_MODULE_5__["Service"])
  });
}

function isComponent(obj) {
  return obj instanceof _component__WEBPACK_IMPORTED_MODULE_2__["Component"];
}

function isDirective(obj) {
  return obj instanceof _directive__WEBPACK_IMPORTED_MODULE_3__["Directive"];
}

function isFilter(obj) {
  return obj instanceof _filter__WEBPACK_IMPORTED_MODULE_4__["Filter"];
}

function isService(obj) {
  return obj instanceof _service__WEBPACK_IMPORTED_MODULE_5__["Service"];
}

function bootstrap(selectorOrElement) {
  var element, tpl;

  if (_utility__WEBPACK_IMPORTED_MODULE_0__["isString"](selectorOrElement)) {
    element = document.querySelector(selectorOrElement);
  } else {
    element = selectorOrElement;
  }

  tpl = element.innerHTML;
  new _component__WEBPACK_IMPORTED_MODULE_2__["Component"]({
    template: tpl
  }).$mount(element);
}

function makeConstructor(cls) {
  function f() {
    cls.construct.call(this);
  }

  f.prototype = cls.prototype;
  return f;
}



/***/ }),

/***/ "./src/view/injector.js":
/*!******************************!*\
  !*** ./src/view/injector.js ***!
  \******************************/
/*! exports provided: typeConst, Injector, injector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeConst", function() { return typeConst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Injector", function() { return Injector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injector", function() { return injector; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _utility_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/message */ "./src/utility/message.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var typeConst = {
  filter: 'filter',
  service: 'service',
  component: 'component',
  directive: 'directive'
};
var namePattern = /^[a-z_\$][\w\$-]*/i;

var Injector =
/*#__PURE__*/
function () {
  function Injector() {
    _classCallCheck(this, Injector);

    this.container = {};
    this.waitingToExtends = {};
    this.insContainer = {};
  }

  _createClass(Injector, [{
    key: "getMapping",
    value: function getMapping(contractType) {
      if (!this.container[contractType]) {
        this.container[contractType] = {};
      }

      return this.container[contractType];
    }
  }, {
    key: "getInstances",
    value: function getInstances(contractType) {
      if (!this.insContainer[contractType]) {
        this.insContainer[contractType] = [];
      }

      return this.insContainer[contractType];
    }
  }, {
    key: "register",
    value: function register(contractType, selector, constructor) {
      if (selector.indexOf('.') !== -1) {
        throw new Error('Illegal character "."');
      }

      var mapping = this.getMapping(contractType);

      if (mapping[selector] == null) {
        mapping[selector] = [];
      } else {
        var matches = mapping[selector].filter(function (item) {
          return item.prototype.$$meta.namespace === constructor.prototype.$$meta.namespace;
        });

        if (matches.length > 0) {
          throw new Error(selector + ' is exist under namespace ' + matches[0].prototype.$$meta.namespace);
        }
      }

      mapping[selector].push(constructor);
    }
  }, {
    key: "registerComponent",
    value: function registerComponent(selector, constructor) {
      this.register(typeConst.component, selector, constructor);
    }
  }, {
    key: "registerDirective",
    value: function registerDirective(selector, constructor) {
      this.register(typeConst.directive, selector, constructor);
    }
  }, {
    key: "contains",
    value: function contains(contractType, selector, ignoreCase) {
      var constructors,
          mapping = this.getMapping(contractType);
      var segments = selector.split('.');
      var namespace = '';

      if (segments.length > 1) {
        selector = segments.pop();
        namespace = segments.join('.');
      }

      if (ignoreCase) {
        constructors = _utility_utils__WEBPACK_IMPORTED_MODULE_0__["getProperty"](mapping, selector, true);
      } else {
        constructors = mapping[selector];
      }

      if (constructors == null) {
        return false;
      }

      if (namespace && constructors.length > 0) {
        constructors = constructors.filter(function (item) {
          var meta = item.prototype.$$meta;
          return meta.namespace && _utility_utils__WEBPACK_IMPORTED_MODULE_0__["lowercase"](meta.namespace) === _utility_utils__WEBPACK_IMPORTED_MODULE_0__["lowercase"](namespace);
        });

        if (constructors.length === 0) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "containsComponent",
    value: function containsComponent(selector) {
      return this.contains(typeConst.component, selector, true);
    }
  }, {
    key: "containsDirective",
    value: function containsDirective(selector) {
      return this.contains(typeConst.directive, selector, true);
    }
  }, {
    key: "get",
    value: function get(contractType, selector, ignoreCase) {
      var constructors,
          mapping = this.getMapping(contractType);
      var segments = selector.split('.');
      var namespace = '';

      if (segments.length > 1) {
        selector = segments.pop();
        namespace = segments.join('.');
      }

      if (ignoreCase) {
        constructors = _utility_utils__WEBPACK_IMPORTED_MODULE_0__["getProperty"](mapping, selector, true);
      } else {
        constructors = mapping[selector];
      }

      if (constructors == null) {
        throw new Error(contractType + ' ' + selector + ' is not defined');
      }

      if (namespace && constructors.length > 0) {
        constructors = constructors.filter(function (item) {
          var meta = item.prototype.$$meta;
          return meta.namespace && _utility_utils__WEBPACK_IMPORTED_MODULE_0__["lowercase"](meta.namespace) === _utility_utils__WEBPACK_IMPORTED_MODULE_0__["lowercase"](namespace);
        });

        if (constructors.length === 0) {
          throw new Error(selector + ' is not exist under namespace ' + namespace);
        }
      }

      if (constructors.length > 1) {
        var namespaces = constructors.map(function (item) {
          return item.prototype.$$meta.namespace;
        });
        throw new Error('namespace ' + namespaces.join('|') + ' all have ' + selector);
      }

      return constructors[0];
    }
  }, {
    key: "getComponent",
    value: function getComponent(selector) {
      return this.get(typeConst.component, selector);
    }
  }, {
    key: "getDirective",
    value: function getDirective(selector) {
      return this.get(typeConst.directive, selector);
    }
  }, {
    key: "getFilter",
    value: function getFilter(selector) {
      return this.get(typeConst.filter, selector);
    }
  }, {
    key: "getService",
    value: function getService(selector) {
      return this.get(typeConst.service, selector);
    }
  }, {
    key: "create",
    value: function create(contractType, selector) {
      var constructor = this.get(contractType, selector),
          instance;

      switch (contractType) {
        case typeConst.component:
          instance = this.createComponent(constructor);
          break;

        case typeConst.directive:
          instance = this.createDirective(constructor);
          break;

        case typeConst.filter:
          instance = this.createFilter(constructor);
          break;

        case typeConst.service:
          instance = this.createService(constructor);
          break;

        default:
          instance = new constructor();
          break;
      }

      return instance;
    }
  }, {
    key: "createComponent",
    value: function createComponent(constructor) {
      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](constructor)) {
        constructor = this.getComponent(constructor);
      }

      return new constructor();
    }
  }, {
    key: "createDirective",
    value: function createDirective(constructor) {
      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](constructor)) {
        constructor = this.getDirective(constructor);
      }

      return new constructor();
    }
  }, {
    key: "createFilter",
    value: function createFilter(constructor) {
      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](constructor)) {
        constructor = this.getFilter(constructor);
      }

      return new constructor();
    }
  }, {
    key: "createService",
    value: function createService(constructor) {
      var instance,
          services = this.getInstances(typeConst.service);

      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](constructor)) {
        constructor = this.getService(constructor);
      }

      if (!constructor.prototype.$$meta.nonShared) {
        var result = services.filter(function (item) {
          return item instanceof constructor;
        });

        if (result.length) {
          instance = result[0];
        }
      }

      if (!instance) {
        instance = new constructor();
        services.push(instance);
      }

      return instance;
    }
  }, {
    key: "service",
    value: function service(selector) {
      return this.createService(selector);
    }
  }, {
    key: "getWaitingToExtends",
    value: function getWaitingToExtends(contractType) {
      if (!this.waitingToExtends[contractType]) {
        this.waitingToExtends[contractType] = [];
      }

      return this.waitingToExtends[contractType];
    }
  }, {
    key: "setWaitingToExtends",
    value: function setWaitingToExtends(contractType, value) {
      this.waitingToExtends[contractType] = value;
    }
  }, {
    key: "checkSelector",
    value: function checkSelector(selector, contractType) {
      if (namePattern.test(selector)) {
        var constructorName = '';
        var segments = selector.split('-');
        segments.forEach(function (segment) {
          constructorName += _utility_utils__WEBPACK_IMPORTED_MODULE_0__["uppercase"](segment[0]) + segment.substring(1);
        });

        switch (contractType) {
          case typeConst.component:
            constructorName += 'Component';
            break;

          case typeConst.directive:
            constructorName += 'Directive';
            break;

          case typeConst.filter:
            constructorName += 'Filter';
            break;

          case typeConst.service:
            constructorName += 'Service';
            break;
        }

        return constructorName;
      } else {
        throw new Error(selector + 'is not a valid name');
      }
    }
  }, {
    key: "buildConstructor",
    value: function buildConstructor(selector, meta, options) {
      var self = this,
          constructor,
          constructorName = this.checkSelector(selector, options.contractType),
          waitingToExtends = self.getWaitingToExtends(options.contractType),
          onConstruct = function onConstruct() {
        if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](constructor["super"])) {
          constructor["super"].call(this);
        }

        if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](meta.construct)) {
          meta.construct.call(this, _utility_message__WEBPACK_IMPORTED_MODULE_1__["Messenger"]);
        }
      };

      constructor = new Function('onConstruct', '"use strict";return function ' + constructorName + '(){onConstruct.call(this);};')(onConstruct);

      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](options.superClass)) {
        _utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](constructor, options.superClass);
      }

      meta.selector = selector; // apply properties and methods

      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](meta["extends"])) {
        if (injector.contains(options.contractType, meta["extends"])) {
          var superOne = injector.get(options.contractType, meta["extends"]);
          remainConstructor(selector, meta, constructor, superOne);
        } else {
          waitingToExtends.push({
            superName: meta["extends"],
            callback: function callback(superOne) {
              remainConstructor(selector, meta, constructor, superOne);
            }
          });
        }
      } else {
        remainConstructor(selector, meta, constructor);
      }

      function extendMeta(meta, superOne) {
        if (superOne.prototype.$$meta && superOne.prototype.$$meta["protected"]) {
          throw new Error(options.contractType + ': ' + meta["extends"] + ' is protected, it is not allowed to extend!');
        }

        var superMeta = superOne.prototype.$$meta;
        var copy = _utility_utils__WEBPACK_IMPORTED_MODULE_0__["copy"](true, superMeta, function (obj, key) {
          return !(obj === superMeta && (key === 'construct' || key === 'methods'));
        });
        return _utility_utils__WEBPACK_IMPORTED_MODULE_0__["merge"](true, copy, meta);
      }

      function remainConstructor(selector, meta, constructor, superOne) {
        if (superOne != null) {
          _utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](constructor, superOne);
        } // create methods


        if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](meta.methods)) {
          _utility_utils__WEBPACK_IMPORTED_MODULE_0__["extend"](constructor.prototype, meta.methods);
        }

        self.registerConstructor(options.contractType, selector, constructor, meta); // check if there is any component extends current component

        var waitingToExtends2 = [],
            fullSelector = meta.namespace + '.' + selector;
        waitingToExtends.forEach(function (item) {
          if (item.superName === fullSelector) {
            item.callback.call(null, constructor);
          } else {
            waitingToExtends2.push(item);
          }
        });
        self.setWaitingToExtends(options.contractType, waitingToExtends2);
      }

      return constructor;
    }
  }, {
    key: "registerConstructor",
    value: function registerConstructor(contractType, selector, constructor, meta) {
      var superMeta = constructor.prototype.$$meta;

      if (superMeta && superMeta["protected"]) {
        throw new Error(contractType + ': ' + meta["extends"] + ' is protected, it is not allowed to extend!');
      }

      var copy = _utility_utils__WEBPACK_IMPORTED_MODULE_0__["copy"](true, superMeta, function (obj, key) {
        return !(obj === superMeta && (key === 'construct' || key === 'methods'));
      });
      meta = _utility_utils__WEBPACK_IMPORTED_MODULE_0__["merge"](true, copy, meta);
      constructor.prototype.$$meta = meta; // register component if it is global

      if (!meta.local) {
        injector.register(contractType, selector, constructor);
      }
    }
  }, {
    key: "injectServices",
    value: function injectServices(instance) {
      var self = this,
          meta = instance.$getMeta();

      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](meta.inject)) {
        _utility_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"](meta.inject, function (value, key) {
          Object.defineProperty(instance, key, {
            enumerable: false,
            configurable: false,
            get: function get() {
              var privateKey = '$$' + key;

              if (instance[privateKey] == null) {
                instance[privateKey] = self.createService(value);
              }

              return instance[privateKey];
            }
          });
        });
      }
    }
  }]);

  return Injector;
}();

var injector = new Injector();


/***/ }),

/***/ "./src/view/service.js":
/*!*****************************!*\
  !*** ./src/view/service.js ***!
  \*****************************/
/*! exports provided: Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./injector */ "./src/view/injector.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Service =
/*#__PURE__*/
function () {
  function Service() {
    _classCallCheck(this, Service);

    Service.construct.call(this);
  }

  _createClass(Service, [{
    key: "$hooks",
    value: function $hooks() {
      return {
        onInit: '',
        onDestroy: ''
      };
    }
  }, {
    key: "$getMeta",
    value: function $getMeta() {
      return this.$$meta || {};
    }
  }, {
    key: "$setMeta",
    value: function $setMeta(value) {
      this.$$meta = value;
    }
  }, {
    key: "$destroy",
    value: function $destroy() {
      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onDestroy)) {
        this.onDestroy.call(this);
      }
    }
  }], [{
    key: "construct",
    value: function construct() {
      _injector__WEBPACK_IMPORTED_MODULE_1__["injector"].injectServices(this);
    }
  }]);

  return Service;
}();

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW5lL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9zaW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NpbmUvLi9zcmMvYW5pbWF0aW9uL2FuaW1hdGUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9hbmltYXRpb24vYW5pbWF0aW9uLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvYW5pbWF0aW9uL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS9hdHRyaWJ1dGUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2JpbmRpbmcuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2NkYXRhc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvY29tbWVudC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvY29ubmVjdGlvbi5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvZG9jdHlwZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvZG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2ZyYWdtZW50LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS9oYW5kbGVyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvb2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL3Byb3h5LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS90ZXh0LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGVjb3JhdG9yL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RlY29yYXRvci9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kZWNvcmF0b3IvZmlsdGVyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGVjb3JhdG9yL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGVjb3JhdG9yL3NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvYmluZC1jbXAtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9iaW5kLWNtcC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9iaW5kLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL2VtYmVkLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL2hpZGUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvaWYuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvbmFtZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvc2hvdy5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9jaGVja2VkLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2Rpc2FibGVkLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3JlYWRvbmx5LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3NlbGVjdGVkLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3N0YXRlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL2NsYXNzLWV2ZW4uanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvY2xhc3Mtb2RkLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL2NsYXNzLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL3N0eWxlLWV2ZW4uanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvc3R5bGUtb2RkLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL3N0eWxlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zd2l0Y2gvc3dpdGNoLWRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvc3dpdGNoL3N3aXRjaC13aGVuLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9zd2l0Y2guanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3BhcnNlci9odG1sLWxleGVyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvcGFyc2VyL2h0bWwtcGFyc2VyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvcGFyc2VyL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvcGFyc2VyL2xleGVyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvcGFyc2VyL251bGwtb2JqZWN0LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvcGFyc2VyL3BhcnNlci5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3NlcnZpY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9zZXJ2aWNlL21vZGVsLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9zZXJ2aWNlL3RlbXBsYXRlLWNhY2hlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdXRpbGl0eS9odHRwLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdXRpbGl0eS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3V0aWxpdHkvbWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3V0aWxpdHkvbm9kZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3V0aWxpdHkvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy92aWV3L2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3ZpZXcvZGlyZWN0aXZlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdmlldy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy92aWV3L2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdmlldy9pbmplY3Rvci5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3ZpZXcvc2VydmljZS5qcyJdLCJuYW1lcyI6WyJUUkFOU0lUSU9OIiwiQU5JTUFUSU9OIiwidHJhbnNpdGlvblByb3AiLCJ0cmFuc2l0aW9uRW5kRXZlbnQiLCJhbmltYXRpb25Qcm9wIiwiYW5pbWF0aW9uRW5kRXZlbnQiLCJ0cmFuc2Zvcm1SRSIsIkFuaW1hdGVTZXJ2aWNlIiwic2VydmljZSIsIm5hbWVzcGFjZSIsInNlbGVjdG9yIiwidm5vZGUiLCJkb0VudGVyIiwiZWwiLCJodG1sRWxlbWVudCIsInV0aWxzIiwiX2xlYXZlQ2IiLCJjYW5jZWxsZWQiLCJfZW50ZXJDYiIsIm5vZGVUeXBlIiwiYW5pbWF0aW9uIiwicmVzb2x2ZUFuaW1hdGlvbkNvbnRleHQiLCJkYXRhIiwicmVzb2x2ZUFuaW1hdGlvbiIsInNlbGYiLCJ0eXBlIiwiZW50ZXJDbGFzcyIsImVudGVyVG9DbGFzcyIsImVudGVyQWN0aXZlQ2xhc3MiLCJkdXJhdGlvbiIsImV4cGxpY2l0RW50ZXJEdXJhdGlvbiIsImVudGVyIiwiY2IiLCJvbmNlIiwicmVtb3ZlQW5pbWF0aW9uQ2xhc3MiLCJlbnRlckNhbmNlbGxlZCIsImFmdGVyRW50ZXIiLCJiZWZvcmVFbnRlciIsImFkZEFuaW1hdGlvbkNsYXNzIiwibmV4dEZyYW1lIiwiaXNWYWxpZER1cmF0aW9uIiwic2V0VGltZW91dCIsIndoZW5BbmltYXRpb25FbmRzIiwiZG9MZWF2ZSIsImxlYXZlQ2xhc3MiLCJsZWF2ZVRvQ2xhc3MiLCJsZWF2ZUFjdGl2ZUNsYXNzIiwiZXhwbGljaXRMZWF2ZUR1cmF0aW9uIiwibGVhdmUiLCJsZWF2ZUNhbmNlbGxlZCIsImFmdGVyTGVhdmUiLCJkZWxheUxlYXZlIiwicGVyZm9ybUxlYXZlIiwiYmVmb3JlTGVhdmUiLCJjb25maWciLCJyZXMiLCJjc3MiLCJhdXRvQ3NzQW5pbWF0aW9uIiwibmFtZSIsImZuIiwiY2FsbGVkIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbHMiLCJhbmltYXRpb25DbGFzc2VzIiwiX2FuaW1hdGlvbkNsYXNzZXMiLCJpbmRleE9mIiwicHVzaCIsImV4cGVjdGVkVHlwZSIsInJlZiIsImdldEFuaW1hdGlvbkluZm8iLCJ0aW1lb3V0IiwicHJvcENvdW50IiwiZXZlbnQiLCJlbmRlZCIsImVuZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvbkVuZCIsImUiLCJ0YXJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGVzIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInRyYW5zaXRpb25EZWxheXMiLCJzcGxpdCIsInRyYW5zaXRpb25EdXJhdGlvbnMiLCJ0cmFuc2l0aW9uVGltZW91dCIsImdldFRpbWVvdXQiLCJhbmltYXRpb25EZWxheXMiLCJhbmltYXRpb25EdXJhdGlvbnMiLCJhbmltYXRpb25UaW1lb3V0IiwibGVuZ3RoIiwiTWF0aCIsIm1heCIsImhhc1RyYW5zZm9ybSIsInRlc3QiLCJkZWxheXMiLCJkdXJhdGlvbnMiLCJjb25jYXQiLCJtYXAiLCJkIiwiaSIsInRvTXMiLCJzIiwiTnVtYmVyIiwic2xpY2UiLCJ2YWx1ZSIsImlzTmFOIiwiZWxlbWVudCIsImFuaW1hdGlvbnMiLCJnZXREaXJlY3RpdmVzIiwiZmlsdGVyIiwiZGlyIiwiU2VydmljZSIsIkFuaW1hdGlvbiIsImRpcmVjdGl2ZSIsIiRwcmlvcml0eSIsIkRpcmVjdGl2ZSIsImV2ZW50VGV4dCIsImRvbUV2ZW50cyIsIkF0dHJOb2RlIiwiVk5vZGVUeXBlIiwiYXR0cmlidXRlIiwicXVvdGUiLCJvcmlnaW4iLCJpc0V2ZW50IiwiaXNCaW5kaW5nIiwiaXNEb21FdmVudCIsImlzRGlyZWN0aXZlIiwib3duZXJFbGVtZW50Iiwib3duZXJDb21wb25lbnQiLCJiaW5kaW5nIiwiQmluZGluZyIsInByaW9yaXR5Iiwia2V5Iiwibm9kZVZhbHVlIiwiY29tcGlsZSIsIm9wdGlvbnMiLCJhY3Rpb24iLCJvYnNlcnZlIiwibm9kZU5hbWUiLCJzdGFydHNXaXRoIiwic3Vic3RyIiwic2V0T3V0cHV0IiwiYmluZCIsImNvbnRhaW5zRGlyZWN0aXZlIiwiY3JlYXRlRGlyZWN0aXZlIiwiJGJpbmROb2RlIiwiJG91dHB1dCIsIkVycm9yIiwiJGNvbXBpbGUiLCJzY29wZSIsInNldFNjb3BlIiwiY29tcHV0ZSIsImxvY2FscyIsIiRldmVudCIsIiRhcmdzIiwiJGVsZW1lbnQiLCIkbGlzdGVuIiwiYXJncyIsIiQkY2hpbGREaXJlY3RpdmVzIiwiJHNldEJpbmRpbmciLCIkaGFzQXR0ciIsIiRpbml0QXR0ciIsInNldEF0dHJpYnV0ZSIsInVwZGF0ZSIsImhhc0NoYW5nZSIsIiRkZXRlY3QiLCJkZXRlY3QiLCIkdXBkYXRlIiwiJHNldEF0dHIiLCIkaW5zZXJ0IiwiJCRtZXRhIiwiaXNGcm9tRGlyZWN0aXZlIiwiZGVzdHJveSIsIiRkZXN0cm95IiwiJGRpc3Bvc2UiLCJkaXNwb3NlIiwiVk5vZGUiLCJ0ZXh0IiwiY2RhdGFTZWN0aW9uIiwiZW50aXR5UmVmZXJlbmNlIiwiZW50aXR5IiwicHJvY2Vzc2luZ0luc3RydWN0aW9uIiwiY29tbWVudCIsImRvY3VtZW50IiwiZG9jdW1lbnRUeXBlIiwiZG9jdW1lbnRGcmFnbWVudCIsIm5vdGF0aW9uIiwiY29ubmVjdGlvbiIsImNoaWxkTm9kZXMiLCJwYXJlbnROb2RlIiwicHJldmlvdXNTaWJsaW5nIiwibmV4dFNpYmxpbmciLCJmaXJzdENoaWxkIiwibGFzdENoaWxkIiwib3duZXJEb2N1bWVudCIsImNoaWxkIiwiZm9yRWFjaCIsImluZGV4IiwiJGJ1aWxkU2libGluZyIsInJlbW92ZUNoaWxkIiwiJHJlbW92ZSIsIiRjbGVhclBhcmVudEFuZFNpYmxpbmciLCJjb21waWxlT3B0aW9ucyIsInJlZkNoaWxkIiwibmV3Q2hpbGQiLCJzcGxpY2UiLCJhcHBlbmRDaGlsZCIsImluc2VydEJlZm9yZSIsIm5vdGlmeUNvbXBpbGVkIiwibGluayIsIm5vdGlmeUxpbmtlZCIsIkV4cE5vZGUiLCJvbGRWYWx1ZSIsImlzRXhwIiwic2VnbWVudHMiLCJyaWdodFN0ciIsIm91dHB1dCIsInVud2F0Y2hlcyIsImNoYW5nZSIsIk1lc3NlbmdlciIsImV4cCIsImxlZnRTdHIiLCJwYXR0ZXJuIiwibGFzdEluZGV4IiwibWF0Y2giLCJleGVjIiwic3Vic3RyaW5nIiwic2VnbWVudCIsImFzc2lnbm1lbnQiLCJwYXJzZUFzc2lnbm1lbnQiLCJvYmoiLCJwcm9wIiwidG9Qcm94eSIsIiR3YXRjaCIsImRlZmVyIiwiZmlyZSIsImNhbmNlbFRpbWVvdXQiLCJ0aW1lb3V0SWQiLCJjYWxsIiwiY2xlYXJUaW1lb3V0IiwibGlzdGVuIiwib24iLCJvZmYiLCJ1bndhdGNoIiwiQ0RhdGFTZWN0aW9uTm9kZSIsIkNvbW1lbnROb2RlIiwiY3JlYXRlQ29tbWVudCIsIkNvbm5lY3Rpb25Ob2RlIiwibGlua2VyIiwib25JbnNlcnQiLCJvbkRldGVjdCIsIm9uSGFzQ2hhbmdlIiwib25VcGRhdGUiLCJvbkRlc3Ryb3kiLCJEb2N1bWVudFR5cGVOb2RlIiwiRG9jdW1lbnROb2RlIiwiRWxlbWVudE5vZGUiLCJhdHRyaWJ1dGVzIiwiY29tcG9uZW50Iiwic2VsZkNsb3NlZCIsImlzQ29tcG9uZW50IiwiYXR0ciIsIm1hdGNoZXMiLCJiZWxvbmdUbyIsInNldFZhbHVlIiwiYXR0clRwbCIsImNoaWxkVHBsIiwiZ2V0T3V0ZXJUcGwiLCJ0cGwiLCJwYXJzZSIsImNsZWFyQ2hpbGROb2RlcyIsInJlc3VsdCIsInNvbWUiLCJnZXREaXJlY3RpdmUiLCJpdGVtIiwiY29udGFpbnNDb21wb25lbnQiLCJjcmVhdGVFbGVtZW50IiwiJGNyZWF0ZUNoaWxkQ21wIiwiJGluaXRBdHRyRG9uZSIsIiRtb3VudCIsImlzRnJvbUNvbXBvbmVudCIsInJlbW92ZUh0bWxFbGVtZW50IiwiRG9jdW1lbnRGcmFnbWVudE5vZGUiLCJwcm9wQ2hhbmdpbmdNc2ciLCJwcm9wQ2hhbmdlZE1zZyIsInRhcmdldEtleSIsImdldFRhcmdldCIsImlzT2JqZWN0IiwiR2V0UHJvcGVydHlIYW5kbGVyIiwiZGVlcFByb3h5IiwidmFyaWFibGVzIiwiZnVsbFRhcmdldEtleSIsImZ1bGxLZXkiLCJQcm94eSIsImV4aXN0ZWQiLCJTZXRQcm9wZXJ0eUhhbmRsZXIiLCJpc0FycmF5IiwidmFsaWRhdGlvbiIsInZhbGlkIiwibmV3VmFsdWUiLCJBY2Nlc3NQcm9wZXJ0eUhhbmRsZXIiLCJQcm9wZXJ0eU9ic2VydmVyIiwicGxhaW5NYXAiLCJNYXAiLCJyZWdleE1hcCIsImlzUmVnRXhwIiwiaGFzIiwic2V0IiwiYmVmb3JlQ2hhbmdlZCIsImdldCIsImFjdGlvbnMiLCJjbGVhciIsIk9iamVjdE9ic2VydmVyIiwib25jaGFuZ2luZyIsImZpcmVDaGFuZ2luZyIsIm9uY2hhbmdlZCIsImZpcmVDaGFuZ2VkIiwib2ZmQ2hhbmdlIiwib2JqTWFwIiwiTWVtYmVyV2F0Y2hlciIsIm9ic2VydmVyIiwiaWQiLCJjaGFuZ2VLZXkiLCJuZXdUYXJnZXQiLCJzdG9wIiwiRGV0ZWN0b3IiLCJxdWV1ZSIsImRpZ2VzdCIsImNsZWFyRGVmZXIiLCJkZXRlY3RvciIsImV4ZWN1dGUiLCJFeHBXYXRjaGVyIiwicmVtb3ZlIiwiV2F0Y2hlciIsIm1lbWJlcnMiLCJkaWdlc3RzIiwiYXN0IiwicGFyc2VFeHAiLCJoYXNDQyIsImRpcnR5Q2hlY2siLCJjb2xsZWN0TWVtYmVycyIsInVwZGF0ZU1lbWJlciIsInN0YXJ0RGlnZXN0IiwibWVtYmVyIiwic3RhcnRNZW1iZXIiLCJzdGFydCIsIm1lbWJlcldhdGNoZXIiLCJPYnNlcnZlciIsIndhdGNoZXJzIiwid2F0Y2hlciIsImNyZWF0ZVdhdGNoZXIiLCJyZW1vdmVXYXRjaGVyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiVGV4dE5vZGUiLCJyZW5kZXIiLCJjcmVhdGVUZXh0Tm9kZSIsIm1ldGEiLCJpbmplY3RvciIsInJlZ2lzdGVyQ29uc3RydWN0b3IiLCJ0eXBlQ29uc3QiLCJCaW5kQ21wT3B0aW9uc0RpcmVjdGl2ZSIsInVwZGF0ZU9wdGlvbnMiLCJjbGVhck9wdGlvbnMiLCIkYmluZGluZyIsIkJpbmRDbXBEaXJlY3RpdmUiLCJuYW1lRGlyIiwidmlldyIsImluaXQiLCJiaW5kQ21wT3B0aW9uc0RpciIsIm9uSW5pdCIsIiRodG1sRWxlbWVudCIsInNldENtcCIsIkJpbmREaXJlY3RpdmUiLCJpbm5lclRleHQiLCJFbWJlZERpcmVjdGl2ZSIsImVtYmVkVHBsIiwiZ2V0RW1iZWRUcGwiLCJzZXRJbm5lclRwbCIsIkhpZGVEaXJlY3RpdmUiLCJpbmplY3QiLCIkYW5pbWF0ZSIsInRvZ2dsZSIsInN0eWxlIiwiZGlzcGxheSIsIklmRGlyZWN0aXZlIiwiaHRtbENvbW1lbnQiLCJNb2RlbERpcmVjdGl2ZSIsIiR2aWV3VmFsdWUiLCIkbW9kZWxWYWx1ZSIsIiRwYXJzZXJzIiwiJGZvcm1hdHRlcnMiLCIkdmlld0NoYW5nZUxpc3RlbmVycyIsIiR2YWxpZGF0b3JzIiwiJGZlZWRiYWNrIiwiJHByaXN0aW5lIiwiJGRpcnR5IiwiJHZhbGlkIiwiJGludmFsaWQiLCJzZXRWaWV3VmFsdWUiLCIkY29tcG9uZW50Iiwic2V0TW9kZWxWYWx1ZSIsIm5ld3ZhbHVlIiwidmlld1ZhbHVlIiwidmFsaWRhdG9yIiwiZm9ybWF0dGVyIiwidXBkYXRlQ3NzIiwidXBkYXRlU3RhdGUiLCJzZXREaXJ0eSIsImxpc3RlbmVyIiwibW9kZWxWYWx1ZSIsInBhcnNlciIsImFzc2lnbiIsImVsZSIsImNzc0NsYXNzIiwiY2xhc3NMaXN0IiwiYWRkIiwiZGlydHkiLCJwcmlzdGluZSIsImludmFsaWQiLCJzdGF0ZSIsImZlZWRiYWNrIiwiTmFtZURpcmVjdGl2ZSIsInByb3h5IiwiJHNjb3BlIiwiY21wIiwiUmVwZWF0RGlyZWN0aXZlIiwiaXRlbUV4cCIsIml0ZW1zRXhwIiwiaXRlbVRlbXBsYXRlIiwiZGF0YUl0ZW1zIiwiY21wSXRlbXMiLCJoZWFkZXIiLCJmb290ZXIiLCJhcmciLCIkYXR0ciIsInJlbW92ZUF0dHJpYnV0ZSIsImNyZWF0ZUNvbm5lY3Rpb24iLCJmcmFnbWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJpdGVtcyIsIiRldmFsIiwic2V0RGF0YUl0ZW1zIiwicmVwbGFjZUNoaWxkIiwiY2hpbGRTY29wZSIsImNtcEl0ZW0iLCJkYXRhSXRlbSIsImZpbHRlcnMiLCJuZXdDbXBJdGVtcyIsImdldENtcEl0ZW0iLCJDb21wb25lbnQiLCJ0ZW1wbGF0ZSIsIiRpbmhlcml0Q21wIiwiJHJlbmRlciIsInJlcGVhdEl0ZW0iLCJTaG93RGlyZWN0aXZlIiwiQ2hlY2tlZERpcmVjdGl2ZSIsIlN0YXRlRGlyZWN0aXZlIiwiRGlzYWJsZWREaXJlY3RpdmUiLCJSZWFkb25seURpcmVjdGl2ZSIsIlNlbGVjdGVkRGlyZWN0aXZlIiwiYXR0ck5hbWUiLCJwZXJmb3JtIiwiaGFzQXR0cmlidXRlIiwiQ2xhc3NFdmVuRGlyZWN0aXZlIiwiJGluZGV4IiwiQ2xhc3NEaXJlY3RpdmUiLCJDbGFzc09kZERpcmVjdGl2ZSIsImluaXRpYWxDbGFzc0xpc3QiLCJwYXJzZUNsYXNzIiwic2V0Q2xhc3MiLCJhcnIiLCJ1bndhdGNoQXJyYXkiLCJ0cmltIiwiY2xhc3NUZXh0IiwiJGdldEF0dHJWYWx1ZSIsInRleHRUb0FycmF5Iiwic2tpcCIsIm5ld0FyciIsIndhdGNoQXJyYXkiLCJzZXRDbGFzc0xpc3QiLCJTdHlsZUV2ZW5EaXJlY3RpdmUiLCJTdHlsZURpcmVjdGl2ZSIsIlN0eWxlT2RkRGlyZWN0aXZlIiwiaW5pdGlhbFN0eWxlIiwicGFyc2VTdHlsZSIsInNldFN0eWxlIiwidW53YXRjaE9iaiIsInRleHRUb09iamVjdCIsImxpc3QiLCJzdWJJdGVtcyIsIm5ld1N0eWxlIiwid2F0Y2hPYmoiLCJhcHBseVN0eWxlIiwiU3dpdGNoRGVmYXVsdERpcmVjdGl2ZSIsImlzTWF0Y2giLCJzd2l0Y2hXaGVuRGlycyIsInZFbGUiLCJ3aGVuRGlyIiwiaW5pdFN3aXRjaFdoZW5EaXJzIiwiaXNNYXRjaENoYW5nZWQiLCJTd2l0Y2hXaGVuRGlyZWN0aXZlIiwic3dpdGNoRGlyIiwiaW5pdFN3aXRjaERpciIsInZhbHVlQ2hhbmdlZCIsIlN3aXRjaERpcmVjdGl2ZSIsIkh0bWxMZXhlciIsIkxleGVyIiwiaXNWYWxpZElkZW50aWZpZXJTdGFydCIsImNoIiwiaXNWYWxpZElkZW50aWZpZXJDb250aW51ZSIsImNwIiwiaXNOdW1iZXIiLCJleHBlY3RTdHJpbmciLCJzdHIiLCJudW0iLCJyZWFkQ29tbWVudCIsImJlZ2luIiwic3RyaW5nIiwicmF3U3RyaW5nIiwiY2hhckF0IiwidG9rZW5zIiwidGhyb3dFcnJvciIsInJlYWRUZXh0IiwiY2gyIiwicGVlayIsImlzSWRlbnRpZmllclN0YXJ0IiwidGV4dFRhZyIsInJlYWRUYWciLCJjbG9zaW5nIiwiZG9jdHlwZSIsInRhZyIsInJlYWRJZGVudCIsInBlZWtNdWx0aWNoYXIiLCJyZWFkU3RyaW5nIiwiaXNXaGl0ZXNwYWNlIiwiZXF1YWwiLCJsZXgiLCJhbGxvd0RvY1R5cGUiLCJjaDMiLCJIdG1sUGFyc2VyIiwiUGFyc2VyIiwibGV4ZXIiLCJmYXJnbWVudCIsInRva2VuIiwiY3VycmVudCIsIiRwdXNoQ2hpbGQiLCJuZXh0IiwiZG9jVHlwZSIsImlkZW50aWZpZXIiLCJhdHRycyIsInAiLCIkcHVzaEF0dHJpYnV0ZSIsImNoaWxkRWxlbWVudHMiLCJlbGVzIiwiY29uc3RhbnQiLCJwYXJzZU9wdGlvbnMiLCJpc0lkZW50aWZpZXJDb250aW51ZSIsImxpdGVyYWxzIiwidW5kZWZpbmVkIiwiaHRtbCIsImRlZmF1bHRzIiwiY3JlYXRlQ29tcG9uZW50Iiwic2V0dGluZ3MiLCJhc3ROb2RlcyIsImFzdE5vZGUiLCIkJGNoaWxkRWxlbWVudHMiLCJjcmVhdGVGaWx0ZXIiLCJyZXBsYWNlIiwibWVtYmVyRXhwIiwiZ2V0TWVtYmVyRXhwcmVzc2lvbiIsIm9iamVjdCIsInByb3BlcnR5IiwiT1BFUkFUT1JTIiwib3BlcmF0b3JUZXh0IiwiRVNDQVBFIiwib3BlcmF0b3IiLCJyZWFkTnVtYmVyIiwiaXMiLCJvcDEiLCJvcDIiLCJvcDMiLCJjaGFycyIsImNvZGVQb2ludEF0IiwiY2hhckNvZGVBdCIsImNwMSIsImNwMiIsImlzRXhwT3BlcmF0b3IiLCJlcnJvciIsImNvbFN0ciIsIm51bWJlciIsInBlZWtDaCIsImVzY2FwZSIsImhleCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInBhcnNlSW50IiwicmVwIiwiTnVsbE9iamVjdCIsIkFTVCIsIlByb2dyYW0iLCJFeHByZXNzaW9uU3RhdGVtZW50IiwiQXNzaWdubWVudEV4cHJlc3Npb24iLCJDb25kaXRpb25hbEV4cHJlc3Npb24iLCJMb2dpY2FsRXhwcmVzc2lvbiIsIkJpbmFyeUV4cHJlc3Npb24iLCJVbmFyeUV4cHJlc3Npb24iLCJDYWxsRXhwcmVzc2lvbiIsIk1lbWJlckV4cHJlc3Npb24iLCJJZGVudGlmaWVyIiwiTGl0ZXJhbCIsIkFycmF5RXhwcmVzc2lvbiIsIlByb3BlcnR5IiwiT2JqZWN0RXhwcmVzc2lvbiIsIkFzdE5vZGUiLCJjb250ZXh0IiwiUHJvZ3JhbU5vZGUiLCJFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSIsIk1lbWJlckV4cHJlc3Npb25Ob2RlIiwiQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlIiwibGVmdCIsInJpZ2h0IiwiYXNzaWdubWVudExlZnQiLCJDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlIiwiYWx0ZXJuYXRlIiwiY29uc2VxdWVudCIsIkxvZ2ljYWxFeHByZXNzaW9uTm9kZSIsImxlZnRWYWx1ZSIsInJpZ2h0VmFsdWUiLCJCaW5hcnlFeHByZXNzaW9uTm9kZSIsIlVuYXJ5RXhwcmVzc2lvbk5vZGUiLCJwcmVmaXgiLCJMaXRlcmFsTm9kZSIsInRvVGV4dCIsIkNhbGxFeHByZXNzaW9uTm9kZSIsImNhbGxlZSIsImFyZ1ZhbHVlcyIsImZpbHRlcklucyIsImlzRmlsdGVyIiwiJGV4ZWN1dGUiLCJjb21wdXRlZCIsImFsbG93TnVsbCIsIklkZW50aWZpZXJOb2RlIiwib2JqTm9kZSIsInByb3BlcnR5S2V5IiwiQXJyYXlFeHByZXNzaW9uTm9kZSIsIlByb3BlcnR5Tm9kZSIsImtpbmQiLCJPYmplY3RFeHByZXNzaW9uTm9kZSIsInByb3BlcnRpZXMiLCJkZWYiLCJpc0Fzc2lnbmFibGUiLCJtc2ciLCJwcm9ncmFtIiwiZXhwcmVzc2lvblN0YXRlbWVudCIsImV4cGVjdCIsImZpbHRlckNoYWluIiwiZXhwcmVzc2lvbiIsInRlcm5hcnkiLCJsb2dpY2FsT1IiLCJjb25zdW1lIiwibG9naWNhbEFORCIsImVxdWFsaXR5IiwicmVsYXRpb25hbCIsImFkZGl0aXZlIiwibXVsdGlwbGljYXRpdmUiLCJ1bmFyeSIsInByaW1hcnkiLCJhcnJheURlY2xhcmF0aW9uIiwiaGFzT3duUHJvcGVydHkiLCJwZWVrQWhlYWQiLCJwYXJzZUFyZ3VtZW50cyIsImJhc2VFeHByZXNzaW9uIiwiaWRlbnRpZmllcnMiLCJlbnRpcmVOYW1lIiwiam9pbiIsInBlZWtUb2tlbiIsImUxIiwiZTIiLCJlMyIsImU0IiwidCIsInNoaWZ0IiwiTW9kZWxPcHRpb25zU2VydmljZSIsIlRlbXBsYXRlQ2FjaGVTZXJ2aWNlIiwidHBsQ2FjaGUiLCJwcm9taXNlQ2FjaGUiLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsImh0dHBHZXQiLCJ0aGVuIiwicmVhZHlTdGF0ZUVudW0iLCJvcGVuZWQiLCJzZW50IiwicmVjZWl2ZWQiLCJmaW5pc2giLCJjcmVhdGVYSFIiLCJYTUxIdHRwUmVxdWVzdCIsImNyZWF0ZVByb21pc2UiLCJyZWplY3QiLCJhZGRVcmxQYXJhbSIsImVuY29kZVVSSUNvbXBvbmVudCIsInBhcnNlSGVhZGVycyIsImhlYWRlcnMiLCJwYXJzZWQiLCJ2YWwiLCJsaW5lIiwidG9Mb3dlckNhc2UiLCJpZ25vcmVEdXBsaWNhdGVPZiIsImJ1aWxkVXJsIiwibWV0aG9kIiwicmVxdWVzdCIsInhociIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25zZVVSTCIsInJlc3BvbnNlSGVhZGVycyIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsInJlc3BvbnNlRGF0YSIsInJlc3BvbnNlVHlwZSIsInJlc3BvbnNlVGV4dCIsInJlc3BvbnNlIiwic3RhdHVzVGV4dCIsIm9wZW4iLCJzZW5kIiwiaHR0cFBvc3QiLCJoYW5kbGVycyIsInJldHVyblZhbHVlIiwiTWVzc2VuZ2VyQnVzIiwibWVzc2VuZ2VycyIsImlzTWVzc2VuZ2VyIiwiZ2V0Q2hpbGROb2RlcyIsIm5vZGUiLCJBcnJheSIsInJlcGxhY2VOb2RlIiwicmVmTm9kZSIsIm5ld05vZGUiLCJyZW1vdmVOb2RlIiwicmVtb3ZlTm9kZUJldHdlZW4iLCJiZWdpbk5vZGUiLCJlbmROb2RlIiwiaW5zZXJ0Tm9kZUFmdGVyIiwicXVlcnlFbGVtZW50TG9hZGVkIiwiY2FsbGJhY2siLCJjYW5jZWxUb2tlbiIsInF1ZXJ5IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJxdWVyeUVsZW1lbnRVbmxvYWRlZCIsInF1ZXJ5RWxlbWVudFN0YXRlIiwiY2FsbGJhY2tzIiwibG9hZGVkIiwib25FbnRlciIsIm9uTGVhdmUiLCJhZGRDbGFzcyIsImMiLCJjdXIiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmVDbGFzcyIsInRhciIsImRlYnVnTW9kZSIsInRvU3RyaW5nIiwiZ2V0UHJvdG90eXBlT2YiLCJpZ25vcmVPd24iLCJjb3B5IiwiZGVlcCIsIm9iakluZGV4IiwiaXNCb29sZWFuIiwibmV3T2JqIiwiZXh0ZW5kIiwiZGVlcE1lcmdlIiwicGxhaW5NZXJnZSIsIm1lcmdlIiwic291cmNlIiwibyIsIkYiLCJpbmhlcml0UHJvdG90eXBlIiwic3ViVHlwZSIsInN1cGVyVHlwZSIsImNvbnN0cnVjdG9yIiwiaW5oZXJpdCIsImxvd2VyY2FzZSIsImlzU3RyaW5nIiwidXBwZXJjYXNlIiwidG9VcHBlckNhc2UiLCJpc1VuZGVmaW5lZCIsImlzRGVmaW5lZCIsImlzTWFwIiwiaXNCbGFua09iamVjdCIsImlzRGF0ZSIsImlzRnVuY3Rpb24iLCJpc0Zvcm1EYXRhIiwiRm9ybURhdGEiLCJpc1NhbWUiLCJvYmoxIiwib2JqMiIsInNhbWUiLCJkZWJ1ZyIsImxvZyIsImNvbnNvbGUiLCJjb250YWlucyIsImNvbnRhaW5zU3RyIiwiaWdub3JlQ2FzZSIsImhhc1Byb3BlcnR5Iiwia2V5MiIsImhhc1Byb3AiLCJrZXlzIiwidmFsdWUzIiwia2V5MyIsImdldFByb3BlcnR5Iiwic2V0UHJvcGVydHkiLCJvcmRlckJ5IiwiZ2V0dGVyIiwiZ2V0VmFsdWUiLCJzb3J0IiwiYSIsImIiLCJvcmRlckJ5RGVzY2VuZGluZyIsInRvTnVtYmVyIiwibiIsInBhcnNlRmxvYXQiLCJjb25zdHJ1Y3QiLCJiZWZvcmVBdHRyQ2hhbmdlIiwiYWZ0ZXJBdHRyQ2hhbmdlIiwiYmVmb3JlVmlld0luaXQiLCJhZnRlclZpZXdNb3VudCIsIiQkZWxlbWVudCIsIiRwcm94eSIsIm1lc3NlbmdlciIsInN5bmMiLCIkZ2V0TWV0YSIsInRlbXBsYXRlVXJsIiwiZ2V0VHBsQnlVcmwiLCJ1c2luZyIsImNsYXNzTmFtZSIsInBvcCIsInNwYWNlTmFtZSIsImdldElubmVyVHBsIiwiJHVzaW5nIiwiZ2V0SHRtbEVsZW1lbnQiLCIkaGFzVmlldyIsIiRzaG93VmlldyIsIiRnZXRUZW1wbGF0ZSIsIiRtYWtlQ29tcGlsZU9wdGlvbnMiLCIkY2xlYXJWaWV3Iiwic2VsZWN0b3JPckVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYXBwZW5kIiwiJGFmdGVyVmlld01vdW50IiwiJCRwYXJlbnRDb21wb25lbnQiLCIkcmVtb3ZlQ2hpbGRDbXAiLCIkJGRldGVjdFRpbWVvdXQiLCIkJG9ic2VydmVyIiwidmFsaWRhdGUiLCJ3YXRjaCIsImNoaWxkQ21wIiwiJCRjaGlsZENvbXBvbmVudHMiLCJwYXJlbnRDbXAiLCJzZXRQcm90b3R5cGVPZiIsIiRob29rcyIsImhhbmRsZXIiLCJob29rIiwiJCRkaXNwb3NlcnMiLCIkdmFsaWRhdGUiLCJkZXN0cm95RnJvbUVsZW1lbnQiLCIkdW5tb3VudCIsImRpc3Bvc2VyIiwiJHNldE1ldGEiLCJpbmplY3RTZXJ2aWNlcyIsIm9uQ29tcGlsZSIsIiRyZXF1ZXN0QW5pbWF0aW9uIiwiJCRjYW5jZWxBbmltYXRpb25Ub2tlbiIsIiRpc0xvYWRlZCIsIiRlbGVtZW50bG9hZGVkIiwiYXR0ck5vZGUiLCJkZXN0cm95RnJvbUF0dHIiLCIkY2FuY2VsQW5pbWF0aW9uIiwiRmlsdGVyIiwib25FeGVjdXRlIiwibnMiLCJtZXRob2RzIiwiYnVpbGRDb25zdHJ1Y3RvciIsImNvbnRyYWN0VHlwZSIsInN1cGVyQ2xhc3MiLCJtYWtlQ29uc3RydWN0b3IiLCJpc1NlcnZpY2UiLCJib290c3RyYXAiLCJpbm5lckhUTUwiLCJmIiwibmFtZVBhdHRlcm4iLCJJbmplY3RvciIsImNvbnRhaW5lciIsIndhaXRpbmdUb0V4dGVuZHMiLCJpbnNDb250YWluZXIiLCJtYXBwaW5nIiwiZ2V0TWFwcGluZyIsInJlZ2lzdGVyIiwiY29uc3RydWN0b3JzIiwibmFtZXNwYWNlcyIsImluc3RhbmNlIiwiY3JlYXRlU2VydmljZSIsImdldENvbXBvbmVudCIsImdldEZpbHRlciIsInNlcnZpY2VzIiwiZ2V0SW5zdGFuY2VzIiwiZ2V0U2VydmljZSIsIm5vblNoYXJlZCIsImNvbnN0cnVjdG9yTmFtZSIsImNoZWNrU2VsZWN0b3IiLCJnZXRXYWl0aW5nVG9FeHRlbmRzIiwib25Db25zdHJ1Y3QiLCJGdW5jdGlvbiIsInN1cGVyT25lIiwicmVtYWluQ29uc3RydWN0b3IiLCJzdXBlck5hbWUiLCJleHRlbmRNZXRhIiwic3VwZXJNZXRhIiwid2FpdGluZ1RvRXh0ZW5kczIiLCJmdWxsU2VsZWN0b3IiLCJzZXRXYWl0aW5nVG9FeHRlbmRzIiwibG9jYWwiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJwcml2YXRlS2V5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFF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QUtrUCxTQUF0QixDQUFKLEVBQXNDO0FBQ2xDLGFBQUtBLFNBQUwsQ0FBZWYsSUFBZixDQUFvQixJQUFwQjtBQUNIO0FBQ0o7QUE1Qkw7QUFBQTtBQUFBLGdDQUt1QjtBQUNmd0gsd0RBQVEsQ0FBQ2dnQixjQUFULENBQXdCLElBQXhCO0FBQ0g7QUFQTDs7QUFBQTtBQUFBLEkiLCJmaWxlIjoic2luZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInNpbmVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wic2luZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5JztcclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJy4uL3ZpZXcnO1xyXG5pbXBvcnQgeyBzZXJ2aWNlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcclxuXHJcbnZhciBUUkFOU0lUSU9OID0gJ3RyYW5zaXRpb24nO1xyXG52YXIgQU5JTUFUSU9OID0gJ2FuaW1hdGlvbic7XHJcbnZhciB0cmFuc2l0aW9uUHJvcCA9ICd0cmFuc2l0aW9uJztcclxudmFyIHRyYW5zaXRpb25FbmRFdmVudCA9ICd0cmFuc2l0aW9uZW5kJztcclxudmFyIGFuaW1hdGlvblByb3AgPSAnYW5pbWF0aW9uJztcclxudmFyIGFuaW1hdGlvbkVuZEV2ZW50ID0gJ2FuaW1hdGlvbmVuZCc7XHJcbnZhciB0cmFuc2Zvcm1SRSA9IC9cXGIodHJhbnNmb3JtfGFsbCkoLHwkKS87XHJcblxyXG5Ac2VydmljZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnJGFuaW1hdGUnXHJcbn0pXHJcbmNsYXNzIEFuaW1hdGVTZXJ2aWNlIGV4dGVuZHMgU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKHZub2RlLCBkb0VudGVyKSB7XHJcbiAgICAgICAgdmFyIGVsID0gdm5vZGUuaHRtbEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIC8vIGNhbGwgbGVhdmUgY2FsbGJhY2sgbm93XHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZWwuX2xlYXZlQ2IpKSB7XHJcbiAgICAgICAgICAgIGVsLl9sZWF2ZUNiLmNhbmNlbGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGVsLl9sZWF2ZUNiKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihlbC5fZW50ZXJDYikgfHwgZWwubm9kZVR5cGUgIT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGFuaW1hdGlvbiA9IHRoaXMucmVzb2x2ZUFuaW1hdGlvbkNvbnRleHQodm5vZGUpO1xyXG5cclxuICAgICAgICBpZiAoIWFuaW1hdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gZG9FbnRlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLnJlc29sdmVBbmltYXRpb24oYW5pbWF0aW9uKTtcclxuXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciB0eXBlID0gZGF0YS50eXBlO1xyXG4gICAgICAgIHZhciBlbnRlckNsYXNzID0gZGF0YS5lbnRlckNsYXNzO1xyXG4gICAgICAgIHZhciBlbnRlclRvQ2xhc3MgPSBkYXRhLmVudGVyVG9DbGFzcztcclxuICAgICAgICB2YXIgZW50ZXJBY3RpdmVDbGFzcyA9IGRhdGEuZW50ZXJBY3RpdmVDbGFzcztcclxuICAgICAgICB2YXIgZHVyYXRpb24gPSBkYXRhLmR1cmF0aW9uO1xyXG5cclxuICAgICAgICB2YXIgZXhwbGljaXRFbnRlckR1cmF0aW9uID0gdXRpbHMudG9OdW1iZXIoXHJcbiAgICAgICAgICAgIHV0aWxzLmlzT2JqZWN0KGR1cmF0aW9uKVxyXG4gICAgICAgICAgICAgICAgPyBkdXJhdGlvbi5lbnRlclxyXG4gICAgICAgICAgICAgICAgOiBkdXJhdGlvblxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHZhciBjYiA9IGVsLl9lbnRlckNiID0gc2VsZi5vbmNlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi5yZW1vdmVBbmltYXRpb25DbGFzcyhlbCwgZW50ZXJUb0NsYXNzKTtcclxuICAgICAgICAgICAgc2VsZi5yZW1vdmVBbmltYXRpb25DbGFzcyhlbCwgZW50ZXJBY3RpdmVDbGFzcyk7XHJcbiAgICAgICAgICAgIGlmIChjYi5jYW5jZWxsZWQpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYucmVtb3ZlQW5pbWF0aW9uQ2xhc3MoZWwsIGVudGVyQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLmVudGVyQ2FuY2VsbGVkICYmIGFuaW1hdGlvbi5lbnRlckNhbmNlbGxlZChlbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24uYWZ0ZXJFbnRlciAmJiBhbmltYXRpb24uYWZ0ZXJFbnRlcihlbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWwuX2VudGVyQ2IgPSBudWxsO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBzdGFydCBlbnRlciBhbmltYXRpb25cclxuICAgICAgICBhbmltYXRpb24uYmVmb3JlRW50ZXIgJiYgYW5pbWF0aW9uLmJlZm9yZUVudGVyKGVsKTtcclxuICAgICAgICBzZWxmLmFkZEFuaW1hdGlvbkNsYXNzKGVsLCBlbnRlckNsYXNzKTtcclxuICAgICAgICBzZWxmLmFkZEFuaW1hdGlvbkNsYXNzKGVsLCBlbnRlckFjdGl2ZUNsYXNzKTtcclxuICAgICAgICBzZWxmLm5leHRGcmFtZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYucmVtb3ZlQW5pbWF0aW9uQ2xhc3MoZWwsIGVudGVyQ2xhc3MpO1xyXG4gICAgICAgICAgICBpZiAoIWNiLmNhbmNlbGxlZCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5hZGRBbmltYXRpb25DbGFzcyhlbCwgZW50ZXJUb0NsYXNzKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLmlzVmFsaWREdXJhdGlvbihleHBsaWNpdEVudGVyRHVyYXRpb24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChjYiwgZXhwbGljaXRFbnRlckR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi53aGVuQW5pbWF0aW9uRW5kcyhlbCwgdHlwZSwgY2IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvRW50ZXIoKTtcclxuICAgICAgICBhbmltYXRpb24uZW50ZXIgJiYgYW5pbWF0aW9uLmVudGVyKGVsLCBjYik7XHJcbiAgICB9XHJcblxyXG4gICAgbGVhdmUodm5vZGUsIGRvTGVhdmUpIHtcclxuICAgICAgICB2YXIgZWwgPSB2bm9kZS5odG1sRWxlbWVudDtcclxuXHJcbiAgICAgICAgLy8gY2FsbCBlbnRlciBjYWxsYmFjayBub3dcclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihlbC5fZW50ZXJDYikpIHtcclxuICAgICAgICAgICAgZWwuX2VudGVyQ2IuY2FuY2VsbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgZWwuX2VudGVyQ2IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBhbmltYXRpb24gPSB0aGlzLnJlc29sdmVBbmltYXRpb25Db250ZXh0KHZub2RlKTtcclxuXHJcbiAgICAgICAgaWYgKCFhbmltYXRpb24gfHwgZWwubm9kZVR5cGUgIT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRvTGVhdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGVsLl9sZWF2ZUNiKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZGF0YSA9IHRoaXMucmVzb2x2ZUFuaW1hdGlvbihhbmltYXRpb24pO1xyXG5cclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHR5cGUgPSBkYXRhLnR5cGU7XHJcbiAgICAgICAgdmFyIGxlYXZlQ2xhc3MgPSBkYXRhLmxlYXZlQ2xhc3M7XHJcbiAgICAgICAgdmFyIGxlYXZlVG9DbGFzcyA9IGRhdGEubGVhdmVUb0NsYXNzO1xyXG4gICAgICAgIHZhciBsZWF2ZUFjdGl2ZUNsYXNzID0gZGF0YS5sZWF2ZUFjdGl2ZUNsYXNzO1xyXG4gICAgICAgIHZhciBkdXJhdGlvbiA9IGRhdGEuZHVyYXRpb247XHJcblxyXG4gICAgICAgIHZhciBleHBsaWNpdExlYXZlRHVyYXRpb24gPSB1dGlscy50b051bWJlcihcclxuICAgICAgICAgICAgdXRpbHMuaXNPYmplY3QoZHVyYXRpb24pXHJcbiAgICAgICAgICAgICAgICA/IGR1cmF0aW9uLmxlYXZlXHJcbiAgICAgICAgICAgICAgICA6IGR1cmF0aW9uXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdmFyIGNiID0gZWwuX2xlYXZlQ2IgPSBzZWxmLm9uY2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLnJlbW92ZUFuaW1hdGlvbkNsYXNzKGVsLCBsZWF2ZVRvQ2xhc3MpO1xyXG4gICAgICAgICAgICBzZWxmLnJlbW92ZUFuaW1hdGlvbkNsYXNzKGVsLCBsZWF2ZUFjdGl2ZUNsYXNzKTtcclxuICAgICAgICAgICAgaWYgKGNiLmNhbmNlbGxlZCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5yZW1vdmVBbmltYXRpb25DbGFzcyhlbCwgbGVhdmVDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24ubGVhdmVDYW5jZWxsZWQgJiYgYW5pbWF0aW9uLmxlYXZlQ2FuY2VsbGVkKGVsKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRvTGVhdmUoKTtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5hZnRlckxlYXZlICYmIGFuaW1hdGlvbi5hZnRlckxlYXZlKGVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbC5fbGVhdmVDYiA9IG51bGw7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChhbmltYXRpb24uZGVsYXlMZWF2ZSkge1xyXG4gICAgICAgICAgICBhbmltYXRpb24uZGVsYXlMZWF2ZShwZXJmb3JtTGVhdmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBlcmZvcm1MZWF2ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcGVyZm9ybUxlYXZlKCkge1xyXG4gICAgICAgICAgICAvLyB0aGUgZGVsYXllZCBsZWF2ZSBtYXkgaGF2ZSBhbHJlYWR5IGJlZW4gY2FuY2VsbGVkXHJcbiAgICAgICAgICAgIGlmIChjYi5jYW5jZWxsZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhbmltYXRpb24uYmVmb3JlTGVhdmUgJiYgYW5pbWF0aW9uLmJlZm9yZUxlYXZlKGVsKTtcclxuICAgICAgICAgICAgc2VsZi5hZGRBbmltYXRpb25DbGFzcyhlbCwgbGVhdmVDbGFzcyk7XHJcbiAgICAgICAgICAgIHNlbGYuYWRkQW5pbWF0aW9uQ2xhc3MoZWwsIGxlYXZlQWN0aXZlQ2xhc3MpO1xyXG4gICAgICAgICAgICBzZWxmLm5leHRGcmFtZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnJlbW92ZUFuaW1hdGlvbkNsYXNzKGVsLCBsZWF2ZUNsYXNzKTtcclxuICAgICAgICAgICAgICAgIGlmICghY2IuY2FuY2VsbGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGRBbmltYXRpb25DbGFzcyhlbCwgbGVhdmVUb0NsYXNzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5pc1ZhbGlkRHVyYXRpb24oZXhwbGljaXRMZWF2ZUR1cmF0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGNiLCBleHBsaWNpdExlYXZlRHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYud2hlbkFuaW1hdGlvbkVuZHMoZWwsIHR5cGUsIGNiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhbmltYXRpb24ubGVhdmUgJiYgYW5pbWF0aW9uLmxlYXZlKGVsLCBjYik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc29sdmVBbmltYXRpb24oY29uZmlnKSB7XHJcbiAgICAgICAgdmFyIHJlcyA9IHt9O1xyXG5cclxuICAgICAgICBpZiAoY29uZmlnLmNzcyAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdXRpbHMuZXh0ZW5kKHJlcywgdGhpcy5hdXRvQ3NzQW5pbWF0aW9uKGNvbmZpZy5uYW1lIHx8ICduJykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXRpbHMuZXh0ZW5kKHJlcywgY29uZmlnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuXHJcbiAgICBhdXRvQ3NzQW5pbWF0aW9uKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBlbnRlckNsYXNzOiAobmFtZSArIFwiLWVudGVyXCIpLFxyXG4gICAgICAgICAgICBlbnRlclRvQ2xhc3M6IChuYW1lICsgXCItZW50ZXItdG9cIiksXHJcbiAgICAgICAgICAgIGVudGVyQWN0aXZlQ2xhc3M6IChuYW1lICsgXCItZW50ZXItYWN0aXZlXCIpLFxyXG4gICAgICAgICAgICBsZWF2ZUNsYXNzOiAobmFtZSArIFwiLWxlYXZlXCIpLFxyXG4gICAgICAgICAgICBsZWF2ZVRvQ2xhc3M6IChuYW1lICsgXCItbGVhdmUtdG9cIiksXHJcbiAgICAgICAgICAgIGxlYXZlQWN0aXZlQ2xhc3M6IChuYW1lICsgXCItbGVhdmUtYWN0aXZlXCIpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBvbmNlKGZuKSB7XHJcbiAgICAgICAgdmFyIGNhbGxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghY2FsbGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZXh0RnJhbWUoZm4pIHtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZm4pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEFuaW1hdGlvbkNsYXNzKGVsLCBjbHMpIHtcclxuICAgICAgICB2YXIgYW5pbWF0aW9uQ2xhc3NlcyA9IGVsLl9hbmltYXRpb25DbGFzc2VzIHx8IChlbC5fYW5pbWF0aW9uQ2xhc3NlcyA9IFtdKTtcclxuICAgICAgICBpZiAoYW5pbWF0aW9uQ2xhc3Nlcy5pbmRleE9mKGNscykgPCAwKSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbkNsYXNzZXMucHVzaChjbHMpO1xyXG4gICAgICAgICAgICB1dGlscy5hZGRDbGFzcyhlbCwgY2xzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQW5pbWF0aW9uQ2xhc3MoZWwsIGNscykge1xyXG4gICAgICAgIGlmIChlbC5fYW5pbWF0aW9uQ2xhc3Nlcykge1xyXG4gICAgICAgICAgICB1dGlscy5yZW1vdmUoZWwuX2FuaW1hdGlvbkNsYXNzZXMsIGNscyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHV0aWxzLnJlbW92ZUNsYXNzKGVsLCBjbHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHdoZW5BbmltYXRpb25FbmRzKGVsLFxyXG4gICAgICAgIGV4cGVjdGVkVHlwZSxcclxuICAgICAgICBjYikge1xyXG4gICAgICAgIHZhciByZWYgPSB0aGlzLmdldEFuaW1hdGlvbkluZm8oZWwsIGV4cGVjdGVkVHlwZSk7XHJcbiAgICAgICAgdmFyIHR5cGUgPSByZWYudHlwZTtcclxuICAgICAgICB2YXIgdGltZW91dCA9IHJlZi50aW1lb3V0O1xyXG4gICAgICAgIHZhciBwcm9wQ291bnQgPSByZWYucHJvcENvdW50O1xyXG4gICAgICAgIGlmICghdHlwZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGV2ZW50ID0gdHlwZSA9PT0gVFJBTlNJVElPTiA/IHRyYW5zaXRpb25FbmRFdmVudCA6IGFuaW1hdGlvbkVuZEV2ZW50O1xyXG4gICAgICAgIHZhciBlbmRlZCA9IDA7XHJcbiAgICAgICAgdmFyIGVuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgb25FbmQpO1xyXG4gICAgICAgICAgICBjYigpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIG9uRW5kID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBlbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCsrZW5kZWQgPj0gcHJvcENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoZW5kZWQgPCBwcm9wQ291bnQpIHtcclxuICAgICAgICAgICAgICAgIGVuZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGltZW91dCArIDEpO1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIG9uRW5kKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbmltYXRpb25JbmZvKGVsLCBleHBlY3RlZFR5cGUpIHtcclxuICAgICAgICB2YXIgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpO1xyXG4gICAgICAgIHZhciB0cmFuc2l0aW9uRGVsYXlzID0gc3R5bGVzW3RyYW5zaXRpb25Qcm9wICsgJ0RlbGF5J10uc3BsaXQoJywgJyk7XHJcbiAgICAgICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbnMgPSBzdHlsZXNbdHJhbnNpdGlvblByb3AgKyAnRHVyYXRpb24nXS5zcGxpdCgnLCAnKTtcclxuICAgICAgICB2YXIgdHJhbnNpdGlvblRpbWVvdXQgPSB0aGlzLmdldFRpbWVvdXQodHJhbnNpdGlvbkRlbGF5cywgdHJhbnNpdGlvbkR1cmF0aW9ucyk7XHJcbiAgICAgICAgdmFyIGFuaW1hdGlvbkRlbGF5cyA9IHN0eWxlc1thbmltYXRpb25Qcm9wICsgJ0RlbGF5J10uc3BsaXQoJywgJyk7XHJcbiAgICAgICAgdmFyIGFuaW1hdGlvbkR1cmF0aW9ucyA9IHN0eWxlc1thbmltYXRpb25Qcm9wICsgJ0R1cmF0aW9uJ10uc3BsaXQoJywgJyk7XHJcbiAgICAgICAgdmFyIGFuaW1hdGlvblRpbWVvdXQgPSB0aGlzLmdldFRpbWVvdXQoYW5pbWF0aW9uRGVsYXlzLCBhbmltYXRpb25EdXJhdGlvbnMpO1xyXG5cclxuICAgICAgICB2YXIgdHlwZTtcclxuICAgICAgICB2YXIgdGltZW91dCA9IDA7XHJcbiAgICAgICAgdmFyIHByb3BDb3VudCA9IDA7XHJcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgICAgICAgaWYgKGV4cGVjdGVkVHlwZSA9PT0gVFJBTlNJVElPTikge1xyXG4gICAgICAgICAgICBpZiAodHJhbnNpdGlvblRpbWVvdXQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlID0gVFJBTlNJVElPTjtcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSB0cmFuc2l0aW9uVGltZW91dDtcclxuICAgICAgICAgICAgICAgIHByb3BDb3VudCA9IHRyYW5zaXRpb25EdXJhdGlvbnMubGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChleHBlY3RlZFR5cGUgPT09IEFOSU1BVElPTikge1xyXG4gICAgICAgICAgICBpZiAoYW5pbWF0aW9uVGltZW91dCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHR5cGUgPSBBTklNQVRJT047XHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0ID0gYW5pbWF0aW9uVGltZW91dDtcclxuICAgICAgICAgICAgICAgIHByb3BDb3VudCA9IGFuaW1hdGlvbkR1cmF0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aW1lb3V0ID0gTWF0aC5tYXgodHJhbnNpdGlvblRpbWVvdXQsIGFuaW1hdGlvblRpbWVvdXQpO1xyXG4gICAgICAgICAgICB0eXBlID0gdGltZW91dCA+IDBcclxuICAgICAgICAgICAgICAgID8gdHJhbnNpdGlvblRpbWVvdXQgPiBhbmltYXRpb25UaW1lb3V0XHJcbiAgICAgICAgICAgICAgICAgICAgPyBUUkFOU0lUSU9OXHJcbiAgICAgICAgICAgICAgICAgICAgOiBBTklNQVRJT05cclxuICAgICAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICAgICAgcHJvcENvdW50ID0gdHlwZVxyXG4gICAgICAgICAgICAgICAgPyB0eXBlID09PSBUUkFOU0lUSU9OXHJcbiAgICAgICAgICAgICAgICAgICAgPyB0cmFuc2l0aW9uRHVyYXRpb25zLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgIDogYW5pbWF0aW9uRHVyYXRpb25zLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaGFzVHJhbnNmb3JtID1cclxuICAgICAgICAgICAgdHlwZSA9PT0gVFJBTlNJVElPTiAmJlxyXG4gICAgICAgICAgICB0cmFuc2Zvcm1SRS50ZXN0KHN0eWxlc1t0cmFuc2l0aW9uUHJvcCArICdQcm9wZXJ0eSddKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgICB0aW1lb3V0OiB0aW1lb3V0LFxyXG4gICAgICAgICAgICBwcm9wQ291bnQ6IHByb3BDb3VudCxcclxuICAgICAgICAgICAgaGFzVHJhbnNmb3JtOiBoYXNUcmFuc2Zvcm1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRpbWVvdXQoZGVsYXlzLCBkdXJhdGlvbnMpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHdoaWxlIChkZWxheXMubGVuZ3RoIDwgZHVyYXRpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBkZWxheXMgPSBkZWxheXMuY29uY2F0KGRlbGF5cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCwgZHVyYXRpb25zLm1hcChmdW5jdGlvbiAoZCwgaSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2VsZi50b01zKGQpICsgc2VsZi50b01zKGRlbGF5c1tpXSk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvTXMocykge1xyXG4gICAgICAgIHJldHVybiBOdW1iZXIocy5zbGljZSgwLCAtMSkpICogMTAwMDtcclxuICAgIH1cclxuXHJcbiAgICBpc1ZhbGlkRHVyYXRpb24odmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiAhaXNOYU4odmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc29sdmVBbmltYXRpb25Db250ZXh0KGVsZW1lbnQpIHtcclxuICAgICAgICB2YXIgYW5pbWF0aW9ucyA9IGVsZW1lbnQuZ2V0RGlyZWN0aXZlcygpLmZpbHRlcihmdW5jdGlvbiAoZGlyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkaXIuYW5pbWF0aW9uID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGFuaW1hdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhbmltYXRpb25zWzBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJ2FuaW1hdGlvbidcclxufSlcclxuY2xhc3MgQW5pbWF0aW9uIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgLy8gYW5pbWF0aW9uIHR5cGUsIFwidHJhbnNpdGlvblwiIG9yIFwiYW5pbWF0aW9uXCJcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gJyc7XHJcbiAgICAgICAgdGhpcy50eXBlID0gJyc7XHJcbiAgICAgICAgdGhpcy5jc3MgPSB0cnVlO1xyXG4gICAgICAgIC8vIHRoaXMuZW50ZXJDbGFzcyA9ICcnO1xyXG4gICAgICAgIC8vIHRoaXMuZW50ZXJUb0NsYXNzID0gJyc7XHJcbiAgICAgICAgLy8gdGhpcy5lbnRlckFjdGl2ZUNsYXNzID0gJyc7XHJcbiAgICAgICAgLy8gdGhpcy5sZWF2ZUNsYXNzID0gJyc7XHJcbiAgICAgICAgLy8gdGhpcy5sZWF2ZVRvQ2xhc3MgPSAnJztcclxuICAgICAgICAvLyB0aGlzLmxlYXZlQWN0aXZlQ2xhc3MgPSAnJztcclxuICAgICAgICB0aGlzLiRwcmlvcml0eSA9IC0xMDA7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dEZyYW1lKGZuKSB7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZuKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBiZWZvcmVFbnRlcigpIHtcclxuICAgIC8vXHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gZW50ZXIoKSB7XHJcbiAgICAvL1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGFmdGVyRW50ZXIoKSB7XHJcbiAgICAvL1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGVudGVyQ2FuY2VsbGVkKCkge1xyXG4gICAgLy9cclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBiZWZvcmVMZWF2ZSgpIHtcclxuICAgIC8vXHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gbGVhdmUoKSB7XHJcbiAgICAvL1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGFmdGVyTGVhdmUoKSB7XHJcbiAgICAvL1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGxlYXZlQ2FuY2VsbGVkKCkge1xyXG4gICAgLy9cclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBkZWxheUxlYXZlKCkge1xyXG4gICAgLy9cclxuICAgIC8vIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQW5pbWF0aW9uIH0iLCJleHBvcnQgKiBmcm9tICcuL2FuaW1hdGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2FuaW1hdGlvbic7IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eSc7XG5pbXBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH0gZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7IEJpbmRpbmcgfSBmcm9tICcuL2JpbmRpbmcnO1xuXG4vLyAvLyBXaW5kb3cgRXZlbnRzXG4vLyBjYXNlICdvbi1sb2FkJzpcbi8vIGNhc2UgJ29uLXVubG9hZCc6XG4vLyAvLyBGb3JtIEVsZW1lbnQgRXZlbnRzXG4vLyBjYXNlICdvbi1jaGFuZ2UnOlxuLy8gY2FzZSAnb24tc3VibWl0Jzpcbi8vIGNhc2UgJ29uLXJlc2V0Jzpcbi8vIGNhc2UgJ29uLXNlbGVjdCc6XG4vLyBjYXNlICdvbi1ibHVyJzpcbi8vIGNhc2UgJ29uLWZvY3VzJzpcbi8vIC8vIEltYWdlIEV2ZW50c1xuLy8gY2FzZSAnb24tYWJvcnQnOlxuLy8gLy8gS2V5Ym9hcmQgRXZlbnRzXG4vLyBjYXNlICdvbi1rZXlkb3duJzpcbi8vIGNhc2UgJ29uLWtleXByZXNzJzpcbi8vIGNhc2UgJ29uLWtleXVwJzpcbi8vIC8vIE1vdXNlIEV2ZW50c1xuLy8gY2FzZSAnb24tY2xpY2snOlxuLy8gY2FzZSAnb24tZGJsY2xpY2snOlxuLy8gY2FzZSAnb24tbW91c2Vkb3duJzpcbi8vIGNhc2UgJ29uLW1vdXNlbW92ZSc6XG4vLyBjYXNlICdvbi1tb3VzZW91dCc6XG4vLyBjYXNlICdvbi1tb3VzZW92ZXInOlxuLy8gY2FzZSAnb24tbW91c2V1cCc6XG52YXIgZXZlbnRUZXh0ID0gJ2xvYWQgdW5sb2FkIGNoYW5nZSBzdWJtaXQgcmVzZXQgc2VsZWN0IGJsdXIgZm9jdXMgYWJvcnQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2Vtb3ZlIG1vdXNlb3V0IG1vdXNlb3ZlciBtb3VzZXVwJztcbnZhciBkb21FdmVudHMgPSBldmVudFRleHQuc3BsaXQoJyAnKTtcblxuY2xhc3MgQXR0ck5vZGUgZXh0ZW5kcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgc3VwZXIoVk5vZGVUeXBlLmF0dHJpYnV0ZSwgbmFtZSwgdmFsdWUpO1xuICAgICAgICB0aGlzLnF1b3RlID0gJ1wiJztcbiAgICAgICAgdGhpcy5vcmlnaW4gPSBuYW1lO1xuICAgICAgICB0aGlzLmlzRXZlbnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0JpbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0RvbUV2ZW50ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNEaXJlY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kaXJlY3RpdmUgPSBudWxsO1xuICAgICAgICB0aGlzLm93bmVyRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMub3duZXJDb21wb25lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmh0bWxFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5iaW5kaW5nID0gbmV3IEJpbmRpbmcoKTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IDA7XG4gICAgfVxuXG4gICAgYmVsb25nVG8oa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9yaWdpbiA9PT0ga2V5O1xuICAgIH1cblxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMubm9kZVZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY29tcGlsZSh0aGlzLm9wdGlvbnMpO1xuICAgIH1cblxuICAgIG9ic2VydmUoYWN0aW9uKSB7XG4gICAgICAgIHRoaXMuYmluZGluZy5vYnNlcnZlKGFjdGlvbik7XG4gICAgfVxuXG4gICAgY29tcGlsZShvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuaXNFdmVudCA9IHRoaXMubm9kZU5hbWUuc3RhcnRzV2l0aCgnQCcpO1xuICAgICAgICB0aGlzLmlzQmluZGluZyA9IHRoaXMubm9kZU5hbWUuc3RhcnRzV2l0aCgnOicpO1xuICAgICAgICB0aGlzLmlzRGlyZWN0aXZlID0gdGhpcy5ub2RlTmFtZS5zdGFydHNXaXRoKCcqJyk7XG4gICAgICAgIGlmICh0aGlzLmlzRXZlbnQgfHwgdGhpcy5pc0JpbmRpbmcgfHwgdGhpcy5pc0RpcmVjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlTmFtZSA9IHRoaXMubm9kZU5hbWUuc3Vic3RyKDEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNEb21FdmVudCA9IHV0aWxzLmNvbnRhaW5zKGRvbUV2ZW50cywgdGhpcy5ub2RlTmFtZSk7XG4gICAgICAgIHRoaXMuYmluZGluZy5zZXRPdXRwdXQodGhpcy5pc0V2ZW50KTtcbiAgICAgICAgdGhpcy5iaW5kaW5nLmJpbmQodGhpcy5ub2RlVmFsdWUsIHRoaXMuaXNFdmVudCB8fCB0aGlzLmlzQmluZGluZyB8fCB0aGlzLmlzRGlyZWN0aXZlKTtcblxuICAgICAgICBpZiAodGhpcy5pc0RpcmVjdGl2ZSkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuY29udGFpbnNEaXJlY3RpdmUodGhpcy5ub2RlTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZSA9IG9wdGlvbnMuY3JlYXRlRGlyZWN0aXZlKHRoaXMubm9kZU5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlLiRiaW5kTm9kZSh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRpbmcuc2V0T3V0cHV0KHRoaXMuZGlyZWN0aXZlLiRvdXRwdXQpO1xuICAgICAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSB0aGlzLmRpcmVjdGl2ZS4kcHJpb3JpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RpcmVjdGl2ZSAnICsgdGhpcy5ub2RlTmFtZSArICcgaXMgbm90IGRlZmluZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5vdGlmeUNvbXBpbGVkKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aXZlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlLiRjb21waWxlKG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGluayhzY29wZSwgaHRtbEVsZW1lbnQsIG93bmVyQ29tcG9uZW50KSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQgPSBodG1sRWxlbWVudDtcbiAgICAgICAgdGhpcy5vd25lckNvbXBvbmVudCA9IG93bmVyQ29tcG9uZW50O1xuICAgICAgICB0aGlzLmJpbmRpbmcuc2V0U2NvcGUoc2NvcGUpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzRXZlbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRG9tRXZlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ub2RlTmFtZSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5iaW5kaW5nLmNvbXB1dGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50OiBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRhcmdzOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRlbGVtZW50OiBzZWxmLmh0bWxFbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3duZXJDb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG93bmVyQ29tcG9uZW50LiRsaXN0ZW4odGhpcy5ub2RlTmFtZSwgZnVuY3Rpb24gKGUsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5iaW5kaW5nLmNvbXB1dGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50OiBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRhcmdzOiBhcmdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRlbGVtZW50OiBzZWxmLmh0bWxFbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUuJCRjaGlsZERpcmVjdGl2ZXMucHVzaCh0aGlzLmRpcmVjdGl2ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUuJHNldEJpbmRpbmcodGhpcy5iaW5kaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG93bmVyQ29tcG9uZW50ICE9IG51bGwgJiYgb3duZXJDb21wb25lbnQuJGhhc0F0dHIodGhpcy5ub2RlTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBvd25lckNvbXBvbmVudC4kaW5pdEF0dHIodGhpcy5ub2RlTmFtZSwgdGhpcy5iaW5kaW5nLmNvbXB1dGUoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlTmFtZS5zdGFydHNXaXRoKCdzdHlsZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnNldFByb3BlcnR5KHRoaXMuaHRtbEVsZW1lbnQsIHRoaXMubm9kZU5hbWUsIHRoaXMuYmluZGluZy5jb21wdXRlKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5odG1sRWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5ub2RlTmFtZSwgdGhpcy5iaW5kaW5nLmNvbXB1dGUoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm9ic2VydmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRldGVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aXZlID09IG51bGwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc0NoYW5nZSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlLiRkZXRlY3QoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhc0NoYW5nZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmluZGluZy5kZXRlY3QoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGl2ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZS4kdXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vd25lckNvbXBvbmVudCAhPSBudWxsICYmIHRoaXMub3duZXJDb21wb25lbnQuJGhhc0F0dHIodGhpcy5ub2RlTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm93bmVyQ29tcG9uZW50LiRzZXRBdHRyKHRoaXMubm9kZU5hbWUsIHRoaXMuYmluZGluZy52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlTmFtZS5zdGFydHNXaXRoKCdzdHlsZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnNldFByb3BlcnR5KHRoaXMuaHRtbEVsZW1lbnQsIHRoaXMubm9kZU5hbWUsIHRoaXMuYmluZGluZy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmh0bWxFbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLm5vZGVOYW1lLCB0aGlzLmJpbmRpbmcudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5odG1sRWxlbWVudC5ub2RlTmFtZSA9PT0gJ0lOUFVUJyAmJiB0aGlzLm5vZGVOYW1lID09PSAndmFsdWUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmh0bWxFbGVtZW50LnZhbHVlID0gdGhpcy5iaW5kaW5nLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbm90aWZ5TGlua2VkKCkge1xuICAgICAgICBpZiAodGhpcy5kaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlLiRpbnNlcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldERpcmVjdGl2ZShrZXkpIHtcbiAgICAgICAgaWYgKGtleSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3RpdmU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kaXJlY3RpdmUgIT0gbnVsbCAmJiB0aGlzLmRpcmVjdGl2ZS4kJG1ldGEuc2VsZWN0b3IgPT09IGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZ2V0T3V0ZXJUcGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9yaWdpbiArICh0aGlzLm5vZGVWYWx1ZSA9PSBudWxsID8gJycgOiAoJz0nICsgdGhpcy5xdW90ZSArIHRoaXMubm9kZVZhbHVlICsgdGhpcy5xdW90ZSkpO1xuICAgIH1cblxuICAgIGdldElubmVyVHBsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcmlnaW4gKyAodGhpcy5ub2RlVmFsdWUgPT0gbnVsbCA/ICcnIDogKCc9JyArIHRoaXMucXVvdGUgKyB0aGlzLm5vZGVWYWx1ZSArIHRoaXMucXVvdGUpKTtcbiAgICB9XG5cbiAgICBkaXNwb3NlKGlzRnJvbURpcmVjdGl2ZSkge1xuICAgICAgICBpZiAoaXNGcm9tRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJpbmRpbmcuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLmJpbmRpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLm93bmVyRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMub3duZXJDb21wb25lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmh0bWxFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy4kZGVzdHJveSgpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGl2ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZS4kZGlzcG9zZSh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGlzcG9zZSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgQXR0ck5vZGUgfTtcbiIsIlxudmFyIFZOb2RlVHlwZSA9IHtcbiAgICBlbGVtZW50OiAxLFxuICAgIGF0dHJpYnV0ZTogMixcbiAgICB0ZXh0OiAzLFxuICAgIGNkYXRhU2VjdGlvbjogNCxcbiAgICBlbnRpdHlSZWZlcmVuY2U6IDUsXG4gICAgZW50aXR5OiA2LFxuICAgIHByb2Nlc3NpbmdJbnN0cnVjdGlvbjogNyxcbiAgICBjb21tZW50OiA4LFxuICAgIGRvY3VtZW50OiA5LFxuICAgIGRvY3VtZW50VHlwZTogMTAsXG4gICAgZG9jdW1lbnRGcmFnbWVudDogMTEsXG4gICAgbm90YXRpb246IDEyLFxuICAgIGNvbm5lY3Rpb246IDEwMVxufTtcblxuLy8gdmlydHVhbCBub2RlXG5jbGFzcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IodHlwZSwgbmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5ub2RlVHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMubm9kZU5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLm5vZGVWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMgPSBbXTtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcmV2aW91c1NpYmxpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLm5leHRTaWJsaW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBudWxsO1xuICAgICAgICB0aGlzLm93bmVyRG9jdW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLnNjb3BlID0gbnVsbDtcbiAgICB9XG5cbiAgICAkcHVzaENoaWxkKGNoaWxkKSB7XG4gICAgICAgIGNoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMucHVzaChjaGlsZCk7XG4gICAgfVxuXG4gICAgJGJ1aWxkU2libGluZygpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzWzBdO1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1t0aGlzLmNoaWxkTm9kZXMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQubmV4dFNpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IChzZWxmLmNoaWxkTm9kZXMubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgY2hpbGQubmV4dFNpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggKyAxXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZC4kYnVpbGRTaWJsaW5nKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgICRjbGVhclBhcmVudEFuZFNpYmxpbmcoKSB7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgICAgIHRoaXMucHJldmlvdXNTaWJsaW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5uZXh0U2libGluZyA9IG51bGw7XG4gICAgfVxuXG4gICAgJHJlbW92ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy4kcmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuJGNsZWFyUGFyZW50QW5kU2libGluZygpO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBudWxsO1xuICAgICAgICB0aGlzLm93bmVyRG9jdW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLnNjb3BlID0gbnVsbDtcbiAgICB9XG5cbiAgICBoYXNDaGlsZE5vZGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMDtcbiAgICB9XG5cbiAgICBjbGVhckNoaWxkTm9kZXMoKSB7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgYXBwZW5kQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgaWYgKGNoaWxkLnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZC5wYXJlbnROb2RlID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gY2hpbGQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZC5uZXh0U2libGluZyA9IGNoaWxkO1xuICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gdGhpcy5sYXN0Q2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IGNoaWxkO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMucHVzaChjaGlsZCk7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG5cbiAgICBpbnNlcnRCZWZvcmUocmVmQ2hpbGQsIG5ld0NoaWxkKSB7XG4gICAgICAgIGlmIChuZXdDaGlsZC5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobmV3Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKHJlZkNoaWxkKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWYgbm9kZSBpcyBub3QgYSBjaGlsZCBvZiBzcGVjaWZpZWQgbm9kZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHJlZkNoaWxkLnByZXZpb3VzU2libGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICBuZXdDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgICAgICByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmcubmV4dFNpYmxpbmcgPSBuZXdDaGlsZDtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0NoaWxkLm5leHRTaWJsaW5nID0gcmVmQ2hpbGQ7XG4gICAgICAgIHJlZkNoaWxkLnByZXZpb3VzU2libGluZyA9IG5ld0NoaWxkO1xuXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbmV3Q2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdDaGlsZC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAwLCBuZXdDaGlsZCk7XG4gICAgICAgIHJldHVybiBuZXdDaGlsZDtcbiAgICB9XG5cbiAgICBpbnNlcnRBZnRlcihyZWZDaGlsZCwgbmV3Q2hpbGQpIHtcbiAgICAgICAgaWYgKHJlZkNoaWxkLm5leHRTaWJsaW5nID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcGVuZENoaWxkKG5ld0NoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmluc2VydEJlZm9yZShyZWZDaGlsZC5uZXh0U2libGluZywgbmV3Q2hpbGQpO1xuICAgIH1cblxuICAgIHJlbW92ZUNoaWxkKGNoaWxkKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKGNoaWxkKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW1vdmUgbm9kZSBpcyBub3QgYSBjaGlsZCBvZiBzcGVjaWZpZWQgbm9kZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoaWxkLnByZXZpb3VzU2libGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICBjaGlsZC5wcmV2aW91c1NpYmxpbmcubmV4dFNpYmxpbmcgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGlsZC5uZXh0U2libGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICBjaGlsZC5uZXh0U2libGluZy5wcmV2aW91c1NpYmxpbmcgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IGNoaWxkLnByZXZpb3VzU2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGNoaWxkLiRjbGVhclBhcmVudEFuZFNpYmxpbmcoKTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cblxuICAgIHJlcGxhY2VDaGlsZChyZWZDaGlsZCwgbmV3Q2hpbGQpIHtcbiAgICAgICAgaWYgKG5ld0NoaWxkLnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuZXdDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2YocmVmQ2hpbGQpO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZiBub2RlIGlzIG5vdCBhIGNoaWxkIG9mIHNwZWNpZmllZCBub2RlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlID0gdGhpcztcbiAgICAgICAgbmV3Q2hpbGQucHJldmlvdXNTaWJsaW5nID0gcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICBuZXdDaGlsZC5uZXh0U2libGluZyA9IHJlZkNoaWxkLm5leHRTaWJsaW5nO1xuXG4gICAgICAgIGlmICh0aGlzLmZpcnN0Q2hpbGQgPT09IHJlZkNoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBuZXdDaGlsZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmxhc3RDaGlsZCA9PT0gcmVmQ2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkID0gbmV3Q2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICByZWZDaGlsZC4kY2xlYXJQYXJlbnRBbmRTaWJsaW5nKCk7XG4gICAgICAgIG5ld0NoaWxkLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5zcGxpY2UoaW5kZXgsIDEsIG5ld0NoaWxkKTtcbiAgICAgICAgcmV0dXJuIG5ld0NoaWxkO1xuICAgIH1cblxuICAgIGNsb25lTm9kZSgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdub3QgaW1wbGVtZW50ZWQnKTtcbiAgICB9XG5cbiAgICBjb21waWxlKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZC5jb21waWxlKG9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBub3RpZnlDb21waWxlZChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQubm90aWZ5Q29tcGlsZWQob3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxpbmsoc2NvcGUpIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkLmxpbmsoc2NvcGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBub3RpZnlMaW5rZWQoKSB7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQubm90aWZ5TGlua2VkKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRldGVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzQ2hhbmdlKCkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYXNDaGFuZ2UoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG5cbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4kZGVzdHJveSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9O1xuIiwiaW1wb3J0IHsgTWVzc2VuZ2VyIH0gZnJvbSAnLi4vdXRpbGl0eSc7XG5pbXBvcnQgeyBjb21wdXRlLCBwYXJzZUFzc2lnbm1lbnQgfSBmcm9tICcuLi9wYXJzZXInO1xuXG5jbGFzcyBFeHBOb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0KSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLm9sZFZhbHVlID0gbnVsbDtcbiAgICB9XG5cbiAgICBjb21wdXRlKHNjb3BlLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICB0aGlzLnZhbHVlID0gY29tcHV0ZSh0aGlzLnRleHQsIHNjb3BlLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBkZXRlY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlICE9PSB0aGlzLm9sZFZhbHVlO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLm9sZFZhbHVlID0gbnVsbDtcbiAgICB9XG59XG5cbmNsYXNzIEJpbmRpbmcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNjb3BlID0gbnVsbDtcbiAgICAgICAgdGhpcy50ZXh0ID0gJyc7XG4gICAgICAgIHRoaXMuaXNFeHAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZWdtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLnJpZ2h0U3RyID0gJyc7XG4gICAgICAgIHRoaXMub3V0cHV0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLm9sZFZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy51bndhdGNoZXMgPSBbXTtcbiAgICAgICAgdGhpcy5jaGFuZ2UgPSBuZXcgTWVzc2VuZ2VyKCk7XG4gICAgfVxuXG4gICAgc2V0U2NvcGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHNldE91dHB1dCh2YWx1ZSkge1xuICAgICAgICB0aGlzLm91dHB1dCA9IHZhbHVlO1xuICAgIH1cblxuICAgIGJpbmQodGV4dCwgaXNFeHApIHtcbiAgICAgICAgaWYgKHRleHQgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5pc0V4cCA9IGlzRXhwO1xuXG4gICAgICAgIGlmIChpc0V4cCkge1xuICAgICAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBleHA6IG5ldyBFeHBOb2RlKHRleHQpLFxuICAgICAgICAgICAgICAgIGxlZnRTdHI6ICcnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwYXR0ZXJuID0gL3t7KFtefV0qKX19L2c7XG4gICAgICAgIHZhciBsYXN0SW5kZXggPSBwYXR0ZXJuLmxhc3RJbmRleDtcbiAgICAgICAgdmFyIG1hdGNoID0gcGF0dGVybi5leGVjKHRleHQpO1xuXG4gICAgICAgIHdoaWxlIChtYXRjaCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2goe1xuICAgICAgICAgICAgICAgIGluZGV4OiBtYXRjaC5pbmRleCxcbiAgICAgICAgICAgICAgICBleHA6IG5ldyBFeHBOb2RlKG1hdGNoWzFdKSxcbiAgICAgICAgICAgICAgICBsZWZ0U3RyOiB0ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgsIG1hdGNoLmluZGV4KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsYXN0SW5kZXggPSBwYXR0ZXJuLmxhc3RJbmRleDtcbiAgICAgICAgICAgIG1hdGNoID0gcGF0dGVybi5leGVjKHRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2VnbWVudHMubGVuZ3RoID4gMCAmJiBsYXN0SW5kZXggPCB0ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5yaWdodFN0ciA9IHRleHQuc3Vic3RyaW5nKGxhc3RJbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wdXRlKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIHRoaXMub2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLnNlZ21lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudGV4dDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRXhwICYmIHRoaXMuc2VnbWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWdtZW50c1swXS5leHAuY29tcHV0ZShzZWxmLnNjb3BlLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5zZWdtZW50c1swXS5leHAudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgdGV4dCA9ICcnO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VnbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2VnbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBzZWdtZW50LmV4cC5jb21wdXRlKHNlbGYuc2NvcGUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IChzZWdtZW50LmxlZnRTdHIgKyBzZWdtZW50LmV4cC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRleHQgKyB0aGlzLnJpZ2h0U3RyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuXG4gICAgYXNzaWduKHZhbHVlKSB7XG4gICAgICAgIHZhciBhc3NpZ25tZW50ID0gcGFyc2VBc3NpZ25tZW50KHRoaXMudGV4dCwgdGhpcy5zY29wZSk7XG5cbiAgICAgICAgaWYgKGFzc2lnbm1lbnQub2JqICE9IG51bGwgJiYgYXNzaWdubWVudC5wcm9wICE9IG51bGwpIHtcbiAgICAgICAgICAgIGFzc2lnbm1lbnQub2JqLnRvUHJveHkoKVthc3NpZ25tZW50LnByb3BdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaXN0ZW4oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy51bndhdGNoZXMgPSB0aGlzLnNlZ21lbnRzLm1hcChmdW5jdGlvbiAoc2VnbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYuc2NvcGUuJHdhdGNoKHNlZ21lbnQuZXhwLnRleHQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmRlZmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuZGV0ZWN0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2hhbmdlLmZpcmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlZmVyKGFjdGlvbikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5jYW5jZWxUaW1lb3V0KCk7XG5cbiAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYudGltZW91dElkID0gbnVsbDtcbiAgICAgICAgICAgIGFjdGlvbi5jYWxsKHNlbGYpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjYW5jZWxUaW1lb3V0KCkge1xuICAgICAgICBpZiAodGhpcy50aW1lb3V0SWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dElkKTtcbiAgICAgICAgICAgIHRoaXMudGltZW91dElkID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9ic2VydmUoYWN0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLm91dHB1dCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5saXN0ZW4oKTtcbiAgICAgICAgdGhpcy5jaGFuZ2Uub24oYWN0aW9uKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2Uub2ZmKGFjdGlvbik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZGV0ZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5vdXRwdXQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXB1dGUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgIT09IHRoaXMub2xkVmFsdWU7XG4gICAgICAgIC8vIHJldHVybiB0aGlzLnNlZ21lbnRzLnNvbWUoZnVuY3Rpb24gKHNlZ21lbnQpIHtcbiAgICAgICAgLy8gICAgIHJldHVybiBzZWdtZW50LmV4cC5kZXRlY3QoKTtcbiAgICAgICAgLy8gfSk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5jYW5jZWxUaW1lb3V0KCk7XG4gICAgICAgIHRoaXMudW53YXRjaGVzLmZvckVhY2goZnVuY3Rpb24gKHVud2F0Y2gpIHtcbiAgICAgICAgICAgIHVud2F0Y2guY2FsbCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZWdtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzZWdtZW50KSB7XG4gICAgICAgICAgICBzZWdtZW50LmV4cC5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNlZ21lbnRzID0gbnVsbDtcbiAgICAgICAgdGhpcy5zY29wZSA9IG51bGw7XG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLm9sZFZhbHVlID0gbnVsbDtcbiAgICB9XG59XG5cbmV4cG9ydCB7IEJpbmRpbmcgfTsiLCJpbXBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH0gZnJvbSAnLi9iYXNlJztcblxuY2xhc3MgQ0RhdGFTZWN0aW9uTm9kZSBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcihWTm9kZVR5cGUuY2RhdGFTZWN0aW9uKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IENEYXRhU2VjdGlvbk5vZGUgfTsiLCJpbXBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH0gZnJvbSAnLi9iYXNlJztcblxuY2xhc3MgQ29tbWVudE5vZGUgZXh0ZW5kcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoVk5vZGVUeXBlLmNvbW1lbnQsICcjY29tbWVudCcpO1xuICAgIH1cblxuICAgIGxpbmsoKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVDb21tZW50KHRoaXMubm9kZVZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXRPdXRlclRwbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZVZhbHVlO1xuICAgIH1cblxuICAgIGdldElubmVyVHBsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlVmFsdWU7XG4gICAgfVxufVxuXG5leHBvcnQgeyBDb21tZW50Tm9kZSB9O1xuIiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eSc7XG5pbXBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH0gZnJvbSAnLi9iYXNlJztcblxuY2xhc3MgQ29ubmVjdGlvbk5vZGUgZXh0ZW5kcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgbGlua2VyKXtcbiAgICAgICAgc3VwZXIoVk5vZGVUeXBlLmNvbm5lY3Rpb24sIG5hbWUpO1xuICAgICAgICB0aGlzLmxpbmtlciA9IGxpbmtlcjtcbiAgICB9XG5cbiAgICBsaW5rKHNjb3BlKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlua2VyLmNhbGwodGhpcywgc2NvcGUpO1xuICAgIH1cblxuICAgIG5vdGlmeUxpbmtlZCgpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkluc2VydCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9uSW5zZXJ0LmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXRlY3QoKSB7XG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25EZXRlY3QpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkRldGVjdC5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFzQ2hhbmdlKCkge1xuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uSGFzQ2hhbmdlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub25IYXNDaGFuZ2UuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vblVwZGF0ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9uVXBkYXRlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uRGVzdHJveSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuJGRlc3Ryb3koKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IENvbm5lY3Rpb25Ob2RlIH07IiwiaW1wb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9IGZyb20gJy4vYmFzZSc7XG5cbmNsYXNzIERvY3VtZW50VHlwZU5vZGUgZXh0ZW5kcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKFZOb2RlVHlwZS5kb2N1bWVudFR5cGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgRG9jdW1lbnRUeXBlTm9kZSB9O1xuIiwiaW1wb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9IGZyb20gJy4vYmFzZSc7XG5cbmNsYXNzIERvY3VtZW50Tm9kZSBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoVk5vZGVUeXBlLmRvY3VtZW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IERvY3VtZW50Tm9kZSB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHknO1xuaW1wb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgeyBDb25uZWN0aW9uTm9kZSB9IGZyb20gJy4vY29ubmVjdGlvbic7XG5pbXBvcnQgeyBBdHRyTm9kZSB9IGZyb20gJy4vYXR0cmlidXRlJztcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSAnLi4vcGFyc2VyJztcblxuY2xhc3MgRWxlbWVudE5vZGUgZXh0ZW5kcyBWTm9kZSB7XG4gICAgZ2V0IHBhcmVudEVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudE5vZGU7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKFZOb2RlVHlwZS5lbGVtZW50LCBuYW1lKTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0gW107XG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuc2VsZkNsb3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbXBpbGVPcHRpb25zID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc0NvbXBvbmVudCA9IGZhbHNlO1xuICAgIH1cblxuICAgICRwdXNoQXR0cmlidXRlKGF0dHIpIHtcbiAgICAgICAgYXR0ci5vd25lckVsZW1lbnQgPSB0aGlzO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMucHVzaChhdHRyKTtcbiAgICB9XG5cbiAgICBoYXNBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLmxlbmd0aCAhPT0gMDtcbiAgICB9XG5cbiAgICBnZXRBdHRyaWJ1dGUoa2V5KSB7XG4gICAgICAgIHZhciBtYXRjaGVzID0gdGhpcy5hdHRyaWJ1dGVzLmZpbHRlcihmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgcmV0dXJuIGF0dHIuYmVsb25nVG8oa2V5KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFtYXRjaGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWF0Y2hlc1swXTtcbiAgICB9XG5cbiAgICBzZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgdGFyZ2V0LCBtYXRjaGVzID0gdGhpcy5hdHRyaWJ1dGVzLmZpbHRlcihmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgcmV0dXJuIGF0dHIuYmVsb25nVG8oa2V5KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGFyZ2V0ID0gbWF0Y2hlc1swXTtcbiAgICAgICAgICAgIHRhcmdldC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBuZXcgQXR0ck5vZGUoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB0YXJnZXQub3duZXJFbGVtZW50ID0gdGhpcztcbiAgICAgICAgICAgIHRhcmdldC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLnB1c2godGFyZ2V0KTtcblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIHJlbW92ZUF0dHJpYnV0ZShrZXkpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IFtdLCBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAoa2V5IGluc3RhbmNlb2YgQXR0ck5vZGUpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuYXR0cmlidXRlcy5pbmRleE9mKGtleSk7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gc2VsZi5hdHRyaWJ1dGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF0dHIuYmVsb25nVG8oa2V5KTtcbiAgICAgICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gc2VsZi5hdHRyaWJ1dGVzLmluZGV4T2YobWF0Y2gpO1xuICAgICAgICAgICAgICAgIG1hdGNoLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBzZWxmLmF0dHJpYnV0ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldC5sZW5ndGggPiAwID8gdGFyZ2V0WzBdIDogbnVsbDtcbiAgICB9XG5cbiAgICBhcHBlbmRBdHRyaWJ1dGUoYXR0cikge1xuICAgICAgICBpZiAoYXR0ci5vd25lckVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ3VycmVudCBhdHRyaWJ1dGUgaXMgbm90IG5ldyFcIik7XG4gICAgICAgIH1cblxuICAgICAgICBhdHRyLm93bmVyRWxlbWVudCA9IHRoaXM7XG4gICAgICAgIGF0dHIuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLnB1c2goYXR0cik7XG4gICAgICAgIHJldHVybiBhdHRyO1xuICAgIH1cblxuICAgIG9ic2VydmUoa2V5LCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIG1hdGNoZXMgPSB0aGlzLmF0dHJpYnV0ZXMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICByZXR1cm4gYXR0ci5iZWxvbmdUbyhrZXkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIW1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWF0Y2hlc1swXS5vYnNlcnZlKGFjdGlvbik7XG4gICAgfVxuXG4gICAgZ2V0T3V0ZXJUcGwoKSB7XG4gICAgICAgIHZhciBhdHRyVHBsID0gJycsIGNoaWxkVHBsID0gJyc7XG5cbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIGF0dHJUcGwgKz0gJyAnO1xuICAgICAgICAgICAgYXR0clRwbCArPSBhdHRyLmdldE91dGVyVHBsKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGRUcGwgKz0gY2hpbGQuZ2V0T3V0ZXJUcGwoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHRwbCA9ICc8JyArIHRoaXMubm9kZU5hbWUgKyBhdHRyVHBsICsgJz4nICsgY2hpbGRUcGw7XG5cbiAgICAgICAgaWYgKCF0aGlzLnNlbGZDbG9zZWQpIHtcbiAgICAgICAgICAgIHRwbCArPSAoJzwvJyArIHRoaXMubm9kZU5hbWUgKyAnPicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRwbDtcbiAgICB9XG5cbiAgICBnZXRJbm5lclRwbCgpIHtcbiAgICAgICAgdmFyIGNoaWxkVHBsID0gJyc7XG5cbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZFRwbCArPSBjaGlsZC5nZXRPdXRlclRwbCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY2hpbGRUcGw7XG4gICAgfVxuXG4gICAgc2V0T3V0ZXJUcGwodHBsKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgcGFyc2UodHBsKS5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xuICAgICAgICAgICAgdm5vZGUucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgICAgICAgICBzZWxmLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNlbGYsIHZub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzZWxmKTtcbiAgICB9XG5cbiAgICBzZXRJbm5lclRwbCh0cGwpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmNsZWFyQ2hpbGROb2RlcygpO1xuICAgICAgICBwYXJzZSh0cGwpLmZvckVhY2goZnVuY3Rpb24gKHZub2RlKSB7XG4gICAgICAgICAgICB2bm9kZS5wYXJlbnROb2RlID0gbnVsbDtcbiAgICAgICAgICAgIHNlbGYuYXBwZW5kQ2hpbGQodm5vZGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXREaXJlY3RpdmUoa2V5KSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5zb21lKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBhdHRyLmdldERpcmVjdGl2ZShrZXkpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCAhPSBudWxsO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGdldERpcmVjdGl2ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZXMubWFwKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICByZXR1cm4gYXR0ci5nZXREaXJlY3RpdmUoKTtcbiAgICAgICAgfSkuZmlsdGVyKGZ1bmN0aW9uIChkaXIpIHtcbiAgICAgICAgICAgIHJldHVybiBkaXIgIT0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29tcGlsZShvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuY29tcGlsZU9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgYXR0ci5jb21waWxlKG9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gcGVyZm9ybSBkaXJlY3RpdmUgYWNjb3JkaW5nIHRvIHByaW9yaXR5XG4gICAgICAgIHRoaXMuYXR0cmlidXRlcyA9IHV0aWxzLm9yZGVyQnkodGhpcy5hdHRyaWJ1dGVzLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0ucHJpb3JpdHk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmlzQ29tcG9uZW50ID0gb3B0aW9ucy5jb250YWluc0NvbXBvbmVudCh0aGlzLm5vZGVOYW1lKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzQ29tcG9uZW50KSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5jb21waWxlKG9wdGlvbnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBub3RpZnlDb21waWxlZChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICBhdHRyLm5vdGlmeUNvbXBpbGVkKG9wdGlvbnMpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5jb21wb25lbnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQubm90aWZ5Q29tcGlsZWQob3B0aW9ucyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxpbmsoc2NvcGUpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHNlbGYuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgc2VsZi5odG1sRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc2VsZi5ub2RlTmFtZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50ID0gc2NvcGUuJGNyZWF0ZUNoaWxkQ21wKHRoaXMubm9kZU5hbWUpO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuJGJpbmROb2RlKHRoaXMpO1xuICAgICAgICAgICAgc2VsZi5hdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgICAgICBhdHRyLmxpbmsoc2NvcGUsIHNlbGYuaHRtbEVsZW1lbnQsIHNlbGYuY29tcG9uZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2VsZi5jb21wb25lbnQuJGluaXRBdHRyRG9uZSgpO1xuICAgICAgICAgICAgc2VsZi5jb21wb25lbnQuJG1vdW50KHNlbGYuaHRtbEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgICAgICBhdHRyLmxpbmsoc2NvcGUsIHNlbGYuaHRtbEVsZW1lbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZWxmLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmh0bWxFbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkLmxpbmsoc2NvcGUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNlbGYuaHRtbEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgbm90aWZ5TGlua2VkKCkge1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgYXR0ci5ub3RpZnlMaW5rZWQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50ID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGNoaWxkLm5vdGlmeUxpbmtlZCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXRlY3QoKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICBhdHRyLmRldGVjdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50ID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGNoaWxkLmRldGVjdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNwb3NlKGlzRnJvbUNvbXBvbmVudCkge1xuICAgICAgICBpZiAodGhpcy5jb21wb25lbnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNGcm9tQ29tcG9uZW50KSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgYXR0ci5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLnJlbW92ZUh0bWxFbGVtZW50KCk7XG4gICAgICAgIHRoaXMuY29tcGlsZU9wdGlvbnMgPSBudWxsO1xuICAgICAgICB0aGlzLiRkZXN0cm95KCk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LiRkaXNwb3NlKHRydWUpO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kaXNwb3NlKCk7XG4gICAgfVxuXG4gICAgZ2V0SHRtbEVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0bWxFbGVtZW50O1xuICAgIH1cblxuICAgIHJlbW92ZUh0bWxFbGVtZW50KCkge1xuICAgICAgICBpZiAodGhpcy5odG1sRWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICB1dGlscy5yZW1vdmVOb2RlKHRoaXMuaHRtbEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlRWxlbWVudChuYW1lKSB7XG4gICAgICAgIHJldHVybiBuZXcgRWxlbWVudE5vZGUobmFtZSk7XG4gICAgfVxuXG4gICAgY3JlYXRlQXR0cihuYW1lKSB7XG4gICAgICAgIHJldHVybiBuZXcgQXR0ck5vZGUobmFtZSk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ29ubmVjdGlvbihuYW1lLCBsaW5rZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb25uZWN0aW9uTm9kZShuYW1lLCBsaW5rZXIpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgRWxlbWVudE5vZGUgfTsiLCJpbXBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH0gZnJvbSAnLi9iYXNlJztcblxuY2xhc3MgRG9jdW1lbnRGcmFnbWVudE5vZGUgZXh0ZW5kcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoVk5vZGVUeXBlLmRvY3VtZW50RnJhZ21lbnQsICcjZG9jdW1lbnQtZnJhZ21lbnQnKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IERvY3VtZW50RnJhZ21lbnROb2RlIH07XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNBcnJheSwgTWVzc2VuZ2VyIH0gZnJvbSAnLi4vdXRpbGl0eSc7XG5cbnZhciBwcm9wQ2hhbmdpbmdNc2cgPSBuZXcgTWVzc2VuZ2VyKCk7XG52YXIgcHJvcENoYW5nZWRNc2cgPSBuZXcgTWVzc2VuZ2VyKCk7XG52YXIgdGFyZ2V0S2V5ID0gJ19fdGFyZ2V0X18nO1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodmFsdWUpIHtcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSB2YWx1ZVt0YXJnZXRLZXldO1xuXG4gICAgICAgIC8vIHZhbHVlIGlzIGEgcHJveHkgcmV0dXJuIGJ5IHByb3h5IGhhbmRsZXJcbiAgICAgICAgaWYgKHRhcmdldCAhPSBudWxsKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRhcmdldDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuY2xhc3MgR2V0UHJvcGVydHlIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihkZWVwUHJveHksIHZhcmlhYmxlcywgZnVsbFRhcmdldEtleSkge1xuICAgICAgICB0aGlzLmRlZXBQcm94eSA9IGRlZXBQcm94eTtcbiAgICAgICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgICAgIHRoaXMuZnVsbFRhcmdldEtleSA9IGZ1bGxUYXJnZXRLZXk7XG4gICAgfVxuXG4gICAgZ2V0KHRhcmdldCwga2V5KSB7XG4gICAgICAgIGlmICh0YXJnZXRLZXkgPT09IGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB2YWx1ZSA9IHRhcmdldFtrZXldLCBmdWxsS2V5ID0ga2V5O1xuXG4gICAgICAgIGlmICh0aGlzLmZ1bGxUYXJnZXRLZXkgIT0gbnVsbCkge1xuICAgICAgICAgICAgZnVsbEtleSA9IHRoaXMuZnVsbFRhcmdldEtleSArICcuJyArIGtleTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRlZXBQcm94eSAmJiBpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbmV3IFByb3h5KHZhbHVlLCBuZXcgR2V0UHJvcGVydHlIYW5kbGVyKHRoaXMuZGVlcFByb3h5LCB0aGlzLnZhcmlhYmxlcywgZnVsbEtleSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGV4aXN0ZWQgPSB0aGlzLnZhcmlhYmxlcy5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS50YXJnZXQgPT09IHRhcmdldCAmJiBpdGVtLmtleSA9PT0ga2V5O1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIWV4aXN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMudmFyaWFibGVzLnB1c2goe1xuICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICAgIHRhcmdldEtleTogdGhpcy5mdWxsVGFyZ2V0S2V5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG59XG5cbmNsYXNzIFNldFByb3BlcnR5SGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBzZXQodGFyZ2V0LCBrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRhcmdldFtrZXldO1xuXG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdmFsdWUgfHwgKGlzQXJyYXkodGFyZ2V0KSAmJiBrZXkgPT09ICdsZW5ndGgnKSkge1xuICAgICAgICAgICAgdmFyIHZhbGlkYXRpb24gPSB7XG4gICAgICAgICAgICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgYXBwbHk6IHRydWUsXG4gICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiB2YWx1ZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcHJvcENoYW5naW5nTXNnLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICAgIGRhdGE6IHZhbGlkYXRpb25cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbi5hcHBseSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgcHJvcENoYW5nZWRNc2cuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxuY2xhc3MgQWNjZXNzUHJvcGVydHlIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihkZWVwUHJveHkpIHtcbiAgICAgICAgdGhpcy5kZWVwUHJveHkgPSBkZWVwUHJveHk7XG4gICAgfVxuXG4gICAgZ2V0KHRhcmdldCwga2V5KSB7XG4gICAgICAgIGlmICh0YXJnZXRLZXkgPT09IGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB2YWx1ZSA9IHRhcmdldFtrZXldO1xuXG4gICAgICAgIGlmICh0aGlzLmRlZXBQcm94eSAmJiBpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbmV3IFByb3h5KHZhbHVlLCBuZXcgU2V0UHJvcGVydHlIYW5kbGVyKHRoaXMuZGVlcFByb3h5KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0KHRhcmdldCwga2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5kZWVwUHJveHkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gZ2V0VGFyZ2V0KHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRhcmdldFtrZXldO1xuXG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdmFsdWUgfHwgKGlzQXJyYXkodGFyZ2V0KSAmJiBrZXkgPT09ICdsZW5ndGgnKSkge1xuICAgICAgICAgICAgdmFyIHZhbGlkYXRpb24gPSB7XG4gICAgICAgICAgICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgYXBwbHk6IHRydWUsXG4gICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiB2YWx1ZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcHJvcENoYW5naW5nTXNnLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICAgIGRhdGE6IHZhbGlkYXRpb25cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbi5hcHBseSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgcHJvcENoYW5nZWRNc2cuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgR2V0UHJvcGVydHlIYW5kbGVyLCBTZXRQcm9wZXJ0eUhhbmRsZXIsIEFjY2Vzc1Byb3BlcnR5SGFuZGxlciwgcHJvcENoYW5naW5nTXNnLCBwcm9wQ2hhbmdlZE1zZywgZ2V0VGFyZ2V0IH0iLCJleHBvcnQgKiBmcm9tICcuL2Jhc2UnO1xuZXhwb3J0ICogZnJvbSAnLi9hdHRyaWJ1dGUnO1xuZXhwb3J0ICogZnJvbSAnLi9jZGF0YXNlY3Rpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9jb21tZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY29ubmVjdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2RvY3R5cGUnO1xuZXhwb3J0ICogZnJvbSAnLi9kb2N1bWVudCc7XG5leHBvcnQgKiBmcm9tICcuL2VsZW1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9mcmFnbWVudCc7XG5leHBvcnQgKiBmcm9tICcuL3RleHQnO1xuZXhwb3J0ICogZnJvbSAnLi9iaW5kaW5nJztcbmV4cG9ydCAqIGZyb20gJy4vaGFuZGxlcic7XG5leHBvcnQgKiBmcm9tICcuL29ic2VydmVyJztcbmV4cG9ydCAqIGZyb20gJy4vcHJveHknOyIsImltcG9ydCB7IGNvbXB1dGUsIHBhcnNlRXhwIH0gZnJvbSAnLi4vcGFyc2VyJztcbmltcG9ydCB7IGlzUmVnRXhwLCBmb3JFYWNoIH0gZnJvbSAnLi4vdXRpbGl0eSc7XG5pbXBvcnQgeyBwcm9wQ2hhbmdpbmdNc2csIHByb3BDaGFuZ2VkTXNnLCBHZXRQcm9wZXJ0eUhhbmRsZXIgfSBmcm9tICcuL2hhbmRsZXInO1xuXG5jbGFzcyBQcm9wZXJ0eU9ic2VydmVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wbGFpbk1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5yZWdleE1hcCA9IG5ldyBNYXAoKTtcbiAgICB9XG5cbiAgICBvbihwcm9wLCBhY3Rpb24sIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgbWFwID0gaXNSZWdFeHAocHJvcCkgPyB0aGlzLnJlZ2V4TWFwIDogdGhpcy5wbGFpbk1hcDtcblxuICAgICAgICBpZiAoIW1hcC5oYXMocHJvcCkpIHtcbiAgICAgICAgICAgIG1hcC5zZXQocHJvcCwgW10pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGFjdGlvbi5iZWZvcmVDaGFuZ2VkID0gb3B0aW9ucy5iZWZvcmVDaGFuZ2VkO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFwLmdldChwcm9wKS5wdXNoKGFjdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYub2ZmKHByb3AsIGFjdGlvbik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgb2ZmKHByb3AsIGFjdGlvbikge1xuICAgICAgICB2YXIgbWFwID0gaXNSZWdFeHAocHJvcCkgPyB0aGlzLnJlZ2V4TWFwIDogdGhpcy5wbGFpbk1hcDtcblxuICAgICAgICBpZiAoIW1hcC5oYXMocHJvcCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhY3Rpb25zID0gbWFwLmdldChwcm9wKTtcbiAgICAgICAgdmFyIGluZGV4ID0gYWN0aW9ucy5pbmRleE9mKGFjdGlvbik7XG5cbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgYWN0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmlyZUNoYW5nZWQocHJvcCwgYXJncykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMucGxhaW5NYXAuaGFzKHByb3ApKSB7XG4gICAgICAgICAgICB0aGlzLnBsYWluTWFwLmdldChwcm9wKS5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoIWFjdGlvbi5iZWZvcmVDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5jYWxsKHNlbGYsIHByb3AsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZWdleE1hcC5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb25zLCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICBpZiAocGF0dGVybi50ZXN0KHByb3ApKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhY3Rpb24uYmVmb3JlQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmNhbGwoc2VsZiwgcHJvcCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZmlyZUNoYW5naW5nKHByb3AsIGFyZ3MpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLnBsYWluTWFwLmhhcyhwcm9wKSkge1xuICAgICAgICAgICAgdGhpcy5wbGFpbk1hcC5nZXQocHJvcCkuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbi5iZWZvcmVDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5jYWxsKHNlbGYsIHByb3AsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZWdleE1hcC5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb25zLCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICBpZiAocGF0dGVybi50ZXN0KHByb3ApKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGlvbi5iZWZvcmVDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24uY2FsbChzZWxmLCBwcm9wLCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLnBsYWluTWFwLmNsZWFyKCk7XG4gICAgICAgIHRoaXMucmVnZXhNYXAuY2xlYXIoKTtcbiAgICB9XG59XG5cbmNsYXNzIE9iamVjdE9ic2VydmVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgb25jaGFuZ2luZyA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9iaiA9IGFyZ3MudGFyZ2V0LCBwcm9wID0gYXJncy5rZXk7XG4gICAgICAgICAgICAgICAgc2VsZi5maXJlQ2hhbmdpbmcob2JqLCBwcm9wLCBhcmdzLmRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uY2hhbmdlZCA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9iaiA9IGFyZ3MudGFyZ2V0LCBwcm9wID0gYXJncy5rZXk7XG4gICAgICAgICAgICAgICAgc2VsZi5maXJlQ2hhbmdlZChvYmosIHByb3AsIGFyZ3MuZGF0YSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIHByb3BDaGFuZ2luZ01zZy5vbihvbmNoYW5naW5nKTtcbiAgICAgICAgcHJvcENoYW5nZWRNc2cub24ob25jaGFuZ2VkKTtcblxuICAgICAgICB0aGlzLm9mZkNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHByb3BDaGFuZ2luZ01zZy5vZmYob25jaGFuZ2luZyk7XG4gICAgICAgICAgICBwcm9wQ2hhbmdlZE1zZy5vZmYob25jaGFuZ2VkKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vYmpNYXAgPSBuZXcgTWFwKCk7XG4gICAgfVxuXG4gICAgb24ob2JqLCBwcm9wLCBhY3Rpb24sIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICghdGhpcy5vYmpNYXAuaGFzKG9iaikpIHtcbiAgICAgICAgICAgIHRoaXMub2JqTWFwLnNldChvYmosIG5ldyBQcm9wZXJ0eU9ic2VydmVyKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMub2JqTWFwLmdldChvYmopLm9uKHByb3AsIGFjdGlvbiwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgb2ZmKG9iaiwgcHJvcCwgYWN0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLm9iak1hcC5oYXMob2JqKSkge1xuICAgICAgICAgICAgdGhpcy5vYmpNYXAuZ2V0KG9iaikub2ZmKHByb3AsIGFjdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaXJlQ2hhbmdlZChvYmosIHByb3AsIGFyZ3MpIHtcbiAgICAgICAgaWYgKHRoaXMub2JqTWFwLmhhcyhvYmopKSB7XG4gICAgICAgICAgICB0aGlzLm9iak1hcC5nZXQob2JqKS5maXJlQ2hhbmdlZChwcm9wLCBhcmdzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpcmVDaGFuZ2luZyhvYmosIHByb3AsIGFyZ3MpIHtcbiAgICAgICAgaWYgKHRoaXMub2JqTWFwLmhhcyhvYmopKSB7XG4gICAgICAgICAgICB0aGlzLm9iak1hcC5nZXQob2JqKS5maXJlQ2hhbmdpbmcocHJvcCwgYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLm9mZkNoYW5nZS5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLm9iak1hcC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBpdGVtLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub2JqTWFwID0gbnVsbDtcbiAgICB9XG59XG5cbmNsYXNzIE1lbWJlcldhdGNoZXIge1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlLCB0YXJnZXQsIGtleSwgdGFyZ2V0S2V5KSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgICB0aGlzLnRhcmdldEtleSA9IHRhcmdldEtleTtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy51bndhdGNoID0gbnVsbDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gbnVsbDtcblxuICAgICAgICBpZiAoIXRhcmdldEtleSkge1xuICAgICAgICAgICAgdGhpcy5pZCA9IGtleTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0YXJnZXRLZXkgKyAnLicgKyBrZXk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydChvYnNlcnZlciwgYWN0aW9uLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBvYnNlcnZlcjtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMudW53YXRjaCA9IHRoaXMub2JzZXJ2ZXIub24odGhpcy50YXJnZXQsIHRoaXMua2V5LCB0aGlzLmFjdGlvbiwgdGhpcy5vcHRpb25zKTtcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICBpZiAodGhpcy51bndhdGNoICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudW53YXRjaC5jYWxsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoY2hhbmdlS2V5KSB7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldEtleSAhPSBudWxsICYmIHRoaXMudGFyZ2V0S2V5LnN0YXJ0c1dpdGgoY2hhbmdlS2V5KSkge1xuICAgICAgICAgICAgdmFyIG5ld1RhcmdldCA9IGNvbXB1dGUodGhpcy50YXJnZXRLZXksIHRoaXMuc2NvcGUpO1xuXG4gICAgICAgICAgICBpZiAobmV3VGFyZ2V0ICE9PSB0aGlzLnRhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gbmV3VGFyZ2V0O1xuICAgICAgICAgICAgICAgIHRoaXMudW53YXRjaCA9IHRoaXMub2JzZXJ2ZXIub24odGhpcy50YXJnZXQsIHRoaXMua2V5LCB0aGlzLmFjdGlvbiwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB0aGlzLnNjb3BlID0gbnVsbDtcbiAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBudWxsO1xuICAgICAgICB0aGlzLnVud2F0Y2ggPSBudWxsO1xuICAgIH1cbn1cblxuY2xhc3MgRGV0ZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBudWxsO1xuICAgICAgICB0aGlzLmRpZ2VzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuZGVmZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYucXVldWUuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5jYWxsKHNlbGYpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZGVmZXIoYWN0aW9uKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5jbGVhckRlZmVyKCk7XG4gICAgICAgIHRoaXMudGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgICAgICBhY3Rpb24uY2FsbChzZWxmKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xlYXJEZWZlcigpIHtcbiAgICAgICAgaWYgKHRoaXMudGltZW91dElkICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJZCk7XG4gICAgICAgICAgICB0aGlzLnRpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleGVjdXRlKCkge1xuICAgICAgICBwcm9wQ2hhbmdlZE1zZy5vbih0aGlzLmRpZ2VzdCk7XG4gICAgfVxuXG4gICAgYXBwbHkoYWN0aW9uKSB7XG4gICAgICAgIHRoaXMucXVldWUucHVzaChhY3Rpb24pO1xuICAgIH1cblxuICAgIHJlbW92ZShhY3Rpb24pIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5xdWV1ZS5pbmRleE9mKGFjdGlvbik7XG5cbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5xdWV1ZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgcHJvcENoYW5nZWRNc2cub2ZmKHRoaXMuZGlnZXN0KTtcbiAgICAgICAgdGhpcy5jbGVhckRlZmVyKCk7XG4gICAgICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICB9XG59XG5cbnZhciBkZXRlY3RvciA9IG5ldyBEZXRlY3RvcigpO1xuXG5kZXRlY3Rvci5leGVjdXRlKCk7XG5cbmNsYXNzIEV4cFdhdGNoZXIge1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlLCBleHApIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuZXhwID0gZXhwO1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy51bndhdGNoID0gbnVsbDtcbiAgICAgICAgdGhpcy5kZXRlY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb2xkVmFsdWUgPSBzZWxmLnZhbHVlLFxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gY29tcHV0ZShzZWxmLmV4cCwgc2VsZi5zY29wZSk7XG5cbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gb2xkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgc2VsZi5hY3Rpb24uY2FsbChzZWxmLCB7XG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3RhcnQoYWN0aW9uKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG4gICAgICAgIHRoaXMudmFsdWUgPSBjb21wdXRlKHRoaXMuZXhwLCB0aGlzLnNjb3BlKTtcbiAgICAgICAgZGV0ZWN0b3IuYXBwbHkoc2VsZi5kZXRlY3QpO1xuICAgICAgICB0aGlzLnVud2F0Y2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkZXRlY3Rvci5yZW1vdmUoc2VsZi5kZXRlY3QpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIGlmICh0aGlzLnVud2F0Y2ggIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy51bndhdGNoLmNhbGwoKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB0aGlzLnNjb3BlID0gbnVsbDtcbiAgICAgICAgdGhpcy51bndhdGNoID0gbnVsbDtcbiAgICB9XG59XG5cbmNsYXNzIFdhdGNoZXIge1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlLCBleHApIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmV4cCA9IGV4cDtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5tZW1iZXJzID0ge307XG4gICAgICAgIHRoaXMuZGlnZXN0cyA9IFtdO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBudWxsO1xuICAgIH1cblxuICAgIHBhcnNlKCkge1xuICAgICAgICBpZiAodGhpcy5leHAgPT09ICcqJykge1xuICAgICAgICAgICAgdGhpcy5leHAgPSAvLisvaTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1JlZ0V4cCh0aGlzLmV4cCkpIHtcbiAgICAgICAgICAgIHJldHVybiBbe1xuICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcy5zY29wZSxcbiAgICAgICAgICAgICAgICBrZXk6IHRoaXMuZXhwXG4gICAgICAgICAgICB9XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhc3QgPSBwYXJzZUV4cCh0aGlzLmV4cCk7XG5cbiAgICAgICAgaWYgKGFzdC5oYXNDQygpKSB7XG4gICAgICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICAgICAgICBkaXJ0eUNoZWNrOiB0cnVlLFxuICAgICAgICAgICAgICAgIGtleTogdGhpcy5leHBcbiAgICAgICAgICAgIH1dO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmFyIGl0ZW1zID0gW10sXG4gICAgICAgIC8vICAgICBoYW5kbGVyID0gbmV3IEdldFByb3BlcnR5SGFuZGxlcih0cnVlLCBpdGVtcyksXG4gICAgICAgIC8vICAgICBwcm94eSA9IG5ldyBQcm94eSh0aGlzLnNjb3BlLCBoYW5kbGVyKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gY29tcHV0ZSh0aGlzLmV4cCwgcHJveHkpO1xuICAgICAgICAvL1xuICAgICAgICAvLyByZXR1cm4gaXRlbXM7XG5cbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb2xsZWN0TWVtYmVyczogdHJ1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbXB1dGUodGhpcy5leHAsIHRoaXMuc2NvcGUsIG9wdGlvbnMpO1xuXG4gICAgICAgIHJldHVybiBvcHRpb25zLm1lbWJlcnM7XG4gICAgfVxuXG4gICAgc3RhcnQob2JzZXJ2ZXIsIGFjdGlvbiwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXI7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLnVwZGF0ZU1lbWJlcigpO1xuICAgIH1cblxuICAgIHVwZGF0ZU1lbWJlcigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMucGFyc2UoKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5kaXJ0eUNoZWNrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRpZ2VzdCA9IG5ldyBFeHBXYXRjaGVyKHNlbGYuc2NvcGUsIGl0ZW0ua2V5KTtcbiAgICAgICAgICAgICAgICBzZWxmLmRpZ2VzdHMucHVzaChkaWdlc3QpO1xuICAgICAgICAgICAgICAgIHNlbGYuc3RhcnREaWdlc3QoZGlnZXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBtZW1iZXIgPSBuZXcgTWVtYmVyV2F0Y2hlcihzZWxmLnNjb3BlLCBpdGVtLnRhcmdldCwgaXRlbS5rZXksIGl0ZW0udGFyZ2V0S2V5KTtcblxuICAgICAgICAgICAgICAgIGlmICghc2VsZi5tZW1iZXJzW21lbWJlci5pZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tZW1iZXJzW21lbWJlci5pZF0gPSBtZW1iZXI7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc3RhcnRNZW1iZXIobWVtYmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXJ0RGlnZXN0KGRpZ2VzdCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgZGlnZXN0LnN0YXJ0KGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICBzZWxmLmFjdGlvbi5jYWxsKHRoaXMsIGFyZ3MpO1xuICAgICAgICB9LCB0aGlzLm9wdGlvbnMpO1xuICAgIH1cblxuICAgIHN0YXJ0TWVtYmVyKG1lbWJlcikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgbWVtYmVyLnN0YXJ0KHNlbGYub2JzZXJ2ZXIsIGZ1bmN0aW9uIChwcm9wLCBhcmdzKSB7XG4gICAgICAgICAgICB2YXIgY2hhbmdlS2V5ID0gcHJvcDtcblxuICAgICAgICAgICAgaWYgKG1lbWJlci50YXJnZXRLZXkgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNoYW5nZUtleSA9IG1lbWJlci50YXJnZXRLZXkgKyAnLicgKyBwcm9wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3JFYWNoKHNlbGYubWVtYmVycywgZnVuY3Rpb24gKG1lbWJlcldhdGNoZXIsIGtleSkge1xuICAgICAgICAgICAgICAgIG1lbWJlcldhdGNoZXIudXBkYXRlKGNoYW5nZUtleSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gc2VsZi51cGRhdGVNZW1iZXIoKTtcbiAgICAgICAgICAgIHNlbGYuYWN0aW9uLmNhbGwodGhpcywgcHJvcCwgYXJncyk7XG4gICAgICAgIH0sIHRoaXMub3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgZm9yRWFjaCh0aGlzLm1lbWJlcnMsIGZ1bmN0aW9uIChtZW1iZXIsIGtleSkge1xuICAgICAgICAgICAgbWVtYmVyLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGlnZXN0cy5mb3JFYWNoKGZ1bmN0aW9uIChkaWdlc3QpIHtcbiAgICAgICAgICAgIGRpZ2VzdC5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNjb3BlID0gbnVsbDtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5tZW1iZXJzID0gbnVsbDtcbiAgICAgICAgdGhpcy5kaWdlc3RzID0gbnVsbDtcbiAgICB9XG59XG5cbmNsYXNzIE9ic2VydmVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBPYmplY3RPYnNlcnZlcigpO1xuICAgICAgICB0aGlzLndhdGNoZXJzID0gW107XG4gICAgfVxuXG4gICAgd2F0Y2gob2JqLCBleHAsIGFjdGlvbikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICB3YXRjaGVyID0gdGhpcy5jcmVhdGVXYXRjaGVyKG9iaiwgZXhwKTtcblxuICAgICAgICB3YXRjaGVyLnN0YXJ0KHRoaXMub2JzZXJ2ZXIsIGFjdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHdhdGNoZXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgc2VsZi5yZW1vdmVXYXRjaGVyKHdhdGNoZXIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhbGlkYXRlKG9iaiwgZXhwLCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgd2F0Y2hlciA9IHRoaXMuY3JlYXRlV2F0Y2hlcihvYmosIGV4cCk7XG5cbiAgICAgICAgd2F0Y2hlci5zdGFydCh0aGlzLm9ic2VydmVyLCBhY3Rpb24sIHtcbiAgICAgICAgICAgIGJlZm9yZUNoYW5nZWQ6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHdhdGNoZXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgc2VsZi5yZW1vdmVXYXRjaGVyKHdhdGNoZXIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNyZWF0ZVdhdGNoZXIob2JqLCBleHApIHtcbiAgICAgICAgdmFyIHdhdGNoZXIgPSBuZXcgV2F0Y2hlcihvYmosIGV4cCk7XG5cbiAgICAgICAgdGhpcy53YXRjaGVycy5wdXNoKHdhdGNoZXIpO1xuXG4gICAgICAgIHJldHVybiB3YXRjaGVyO1xuICAgIH1cblxuICAgIHJlbW92ZVdhdGNoZXIod2F0Y2hlcikge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLndhdGNoZXJzLmluZGV4T2Yod2F0Y2hlcik7XG5cbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy53YXRjaGVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmlyZUNoYW5nZWQob2JqLCBwcm9wLCBhcmdzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9ic2VydmVyLmZpcmVDaGFuZ2VkKG9iaiwgcHJvcCwgYXJncyk7XG4gICAgfVxuXG4gICAgZmlyZUNoYW5naW5nKG9iaiwgcHJvcCwgYXJncykge1xuICAgICAgICByZXR1cm4gdGhpcy5vYnNlcnZlci5maXJlQ2hhbmdpbmcob2JqLCBwcm9wLCBhcmdzKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLndhdGNoZXJzLmZvckVhY2goZnVuY3Rpb24gKHdhdGNoZXIpIHtcbiAgICAgICAgICAgIHdhdGNoZXIuZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy53YXRjaGVycyA9IG51bGw7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gbnVsbDtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFByb3BlcnR5T2JzZXJ2ZXIsIE9ic2VydmVyIH07IiwiaW1wb3J0IHsgU2V0UHJvcGVydHlIYW5kbGVyIH0gZnJvbSAnLi9oYW5kbGVyJztcclxuXHJcbk9iamVjdC5wcm90b3R5cGUudG9Qcm94eSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBuZXcgUHJveHkodGhpcywgbmV3IFNldFByb3BlcnR5SGFuZGxlcigpKTtcclxufTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5JztcbmltcG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHsgQmluZGluZyB9IGZyb20gJy4vYmluZGluZyc7XG5cbmNsYXNzIFRleHROb2RlIGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihWTm9kZVR5cGUudGV4dCwgJyN0ZXh0Jyk7XG4gICAgICAgIHRoaXMuYmluZGluZyA9IG5ldyBCaW5kaW5nKCk7XG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQgPSBudWxsO1xuICAgIH1cblxuICAgIGNvbXBpbGUoKSB7XG4gICAgICAgIHRoaXMuYmluZGluZy5iaW5kKHRoaXMubm9kZVZhbHVlKTtcbiAgICB9XG5cbiAgICBsaW5rKHNjb3BlKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLmJpbmRpbmcuc2V0U2NvcGUoc2NvcGUpO1xuXG4gICAgICAgIHRoaXMuYmluZGluZy5vYnNlcnZlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYudXBkYXRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcih0aGlzLmJpbmRpbmcuY29tcHV0ZSgpKTtcbiAgICB9XG5cbiAgICBoYXNDaGFuZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJpbmRpbmcuZGV0ZWN0KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB1dGlscy5yZXBsYWNlTm9kZSh0aGlzLmh0bWxFbGVtZW50LCB0aGlzLnJlbmRlcih0aGlzLmJpbmRpbmcudmFsdWUpKTtcbiAgICB9XG5cbiAgICByZW5kZXIodmFsdWUpIHtcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHRtbEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgZ2V0T3V0ZXJUcGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVWYWx1ZTtcbiAgICB9XG5cbiAgICBnZXRJbm5lclRwbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZVZhbHVlO1xuICAgIH1cblxuICAgIHJlbW92ZUh0bWxFbGVtZW50KCkge1xuICAgICAgICBpZiAodGhpcy5odG1sRWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICB1dGlscy5yZW1vdmVOb2RlKHRoaXMuaHRtbEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iaW5kaW5nLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5iaW5kaW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuJGRlc3Ryb3koKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFRleHROb2RlIH07IiwiaW1wb3J0IHsgdHlwZUNvbnN0LCBpbmplY3RvciB9IGZyb20gJy4uL3ZpZXcnXG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnQobWV0YSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciBzZWxlY3RvciA9IG1ldGEuc2VsZWN0b3IgfHwgdGFyZ2V0Lm5hbWU7XG4gICAgICAgIGluamVjdG9yLnJlZ2lzdGVyQ29uc3RydWN0b3IodHlwZUNvbnN0LmNvbXBvbmVudCwgc2VsZWN0b3IsIHRhcmdldCwgbWV0YSk7XG4gICAgfTtcbn0iLCJpbXBvcnQgeyB0eXBlQ29uc3QsIGluamVjdG9yIH0gZnJvbSAnLi4vdmlldydcblxuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdGl2ZShtZXRhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gbWV0YS5zZWxlY3RvciB8fCB0YXJnZXQubmFtZTtcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJDb25zdHJ1Y3Rvcih0eXBlQ29uc3QuZGlyZWN0aXZlLCBzZWxlY3RvciwgdGFyZ2V0LCBtZXRhKTtcbiAgICB9O1xufSIsImltcG9ydCB7IHR5cGVDb25zdCwgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3J1xuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyKG1ldGEpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB2YXIgc2VsZWN0b3IgPSBtZXRhLnNlbGVjdG9yIHx8IHRhcmdldC5uYW1lO1xuICAgICAgICBpbmplY3Rvci5yZWdpc3RlckNvbnN0cnVjdG9yKHR5cGVDb25zdC5maWx0ZXIsIHNlbGVjdG9yLCB0YXJnZXQsIG1ldGEpO1xuICAgIH07XG59IiwiZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9maWx0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlJzsiLCJpbXBvcnQgeyB0eXBlQ29uc3QsIGluamVjdG9yIH0gZnJvbSAnLi4vdmlldydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlcnZpY2UobWV0YSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciBzZWxlY3RvciA9IG1ldGEuc2VsZWN0b3IgfHwgdGFyZ2V0Lm5hbWU7XG4gICAgICAgIGluamVjdG9yLnJlZ2lzdGVyQ29uc3RydWN0b3IodHlwZUNvbnN0LnNlcnZpY2UsIHNlbGVjdG9yLCB0YXJnZXQsIG1ldGEpO1xuICAgIH07XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSBcIi4uL3ZpZXdcIjtcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSBcIi4uL2RlY29yYXRvclwiO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnbi1iaW5kLWNtcC1vcHRpb25zJ1xyXG59KVxyXG5jbGFzcyBCaW5kQ21wT3B0aW9uc0RpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5zZXJ0KCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlT3B0aW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJPcHRpb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVPcHRpb25zKCkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLiRiaW5kaW5nLmNvbXB1dGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhck9wdGlvbnMoKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tIFwiLi4vdmlld1wiO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tIFwiLi4vZGVjb3JhdG9yXCI7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICduLWJpbmQtY21wJ1xyXG59KVxyXG5jbGFzcyBCaW5kQ21wRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy4kcHJpb3JpdHkgPSA1O1xyXG4gICAgICAgIHRoaXMubmFtZURpciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudmlldyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnNlcnQoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMubmFtZURpciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLm5hbWVEaXIgPSB0aGlzLiRlbGVtZW50LmdldERpcmVjdGl2ZSgnbi1uYW1lJyk7XHJcbiAgICAgICAgdGhpcy5iaW5kQ21wT3B0aW9uc0RpciA9IHRoaXMuJGVsZW1lbnQuZ2V0RGlyZWN0aXZlKCduLWJpbmQtY21wLW9wdGlvbnMnKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYmluZENtcE9wdGlvbnNEaXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuYmluZENtcE9wdGlvbnNEaXIudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZyA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICBpZiAodGhpcy52aWV3ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy52aWV3LiRkZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uZmlnID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIGNvbXBvbmVudCA9IHRoaXMuJGJpbmRpbmcuY29tcHV0ZSgpO1xyXG5cclxuICAgICAgICBpZiAoY29tcG9uZW50ID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy52aWV3ID0gdGhpcy4kYmluZGluZy5zY29wZS4kY3JlYXRlQ2hpbGRDbXAoY29tcG9uZW50KTtcclxuICAgICAgICB0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5vbkluaXQodGhpcy52aWV3KTtcclxuICAgICAgICB0aGlzLnZpZXcuJG1vdW50KHRoaXMuJGh0bWxFbGVtZW50KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubmFtZURpciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZURpci5zZXRDbXAodGhpcy52aWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1iaW5kJ1xufSlcbmNsYXNzIEJpbmREaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uSW5zZXJ0KCkge1xuICAgICAgICB0aGlzLmJpbmQoKTtcbiAgICB9XG5cbiAgICBvblVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5iaW5kKCk7XG4gICAgfVxuXG4gICAgYmluZCgpIHtcbiAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy4kYmluZGluZy5jb21wdXRlKCk7XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICduLWVtYmVkJ1xufSlcbmNsYXNzIEVtYmVkRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkNvbXBpbGUob3B0aW9ucykge1xuICAgICAgICB2YXIgZW1iZWRUcGwgPSBvcHRpb25zLmdldEVtYmVkVHBsKCk7XG4gICAgICAgIGlmIChlbWJlZFRwbCkge1xuICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5zZXRJbm5lclRwbChlbWJlZFRwbCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcbiAgICBzZWxlY3RvcjogJ24taGlkZScsXG4gICAgaW5qZWN0OiB7XG4gICAgICAgICAgICAkYW5pbWF0ZTogJyRhbmltYXRlJ1xuICAgIH1cbn0pXG5jbGFzcyBIaWRlRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkluc2VydCgpIHtcbiAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICB9XG5cbiAgICBvblVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICB9XG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy4kYmluZGluZy5jb21wdXRlKCkpIHtcbiAgICAgICAgICAgIHRoaXMuJGFuaW1hdGUubGVhdmUodGhpcy4kZWxlbWVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuJGh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJGFuaW1hdGUuZW50ZXIodGhpcy4kZWxlbWVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuJGh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnaW5pdGlhbCc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5JztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICduLWlmJyxcbiAgICBpbmplY3Q6IHtcbiAgICAgICAgJGFuaW1hdGU6ICckYW5pbWF0ZSdcbiAgICB9XG59KVxuY2xhc3MgSWZEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmh0bWxDb21tZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICBvbkluc2VydCgpIHtcbiAgICAgICAgdGhpcy5odG1sQ29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ24taWYnKTtcblxuICAgICAgICBpZiAoIXRoaXMuJGJpbmRpbmcuY29tcHV0ZSgpKSB7XG4gICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZSh0aGlzLiRodG1sRWxlbWVudCwgdGhpcy5odG1sQ29tbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblVwZGF0ZSgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLiRiaW5kaW5nLmNvbXB1dGUoKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuJGh0bWxFbGVtZW50LnBhcmVudE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGFuaW1hdGUuZW50ZXIodGhpcy4kZWxlbWVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZShzZWxmLmh0bWxDb21tZW50LCBzZWxmLiRodG1sRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kaHRtbEVsZW1lbnQucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kYW5pbWF0ZS5sZWF2ZSh0aGlzLiRlbGVtZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnJlcGxhY2VOb2RlKHNlbGYuJGh0bWxFbGVtZW50LCBzZWxmLmh0bWxDb21tZW50KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5odG1sQ29tbWVudCA9IG51bGw7XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vYmluZCdcbmV4cG9ydCAqIGZyb20gJy4vZW1iZWQnXG5leHBvcnQgKiBmcm9tICcuL2hpZGUnXG5leHBvcnQgKiBmcm9tICcuL2lmJ1xuZXhwb3J0ICogZnJvbSAnLi9tb2RlbCdcbmV4cG9ydCAqIGZyb20gJy4vcmVwZWF0J1xuZXhwb3J0ICogZnJvbSAnLi9zaG93J1xuZXhwb3J0ICogZnJvbSAnLi9zdHlsZSdcbmV4cG9ydCAqIGZyb20gJy4vc3dpdGNoJ1xuZXhwb3J0ICogZnJvbSAnLi9zdGF0ZSdcbmV4cG9ydCAqIGZyb20gJy4vbmFtZSdcbmV4cG9ydCAqIGZyb20gJy4vYmluZC1jbXAnXG5leHBvcnQgKiBmcm9tICcuL2JpbmQtY21wLW9wdGlvbnMnIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1tb2RlbCcsXG4gICAgaW5qZWN0OiB7XG4gICAgICAgIG9wdGlvbnM6ICckbW9kZWxPcHRpb25zJ1xuICAgIH1cbn0pXG5jbGFzcyBNb2RlbERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuJHZpZXdWYWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuJG1vZGVsVmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLiRwYXJzZXJzID0gW107XG4gICAgICAgIHRoaXMuJGZvcm1hdHRlcnMgPSBbXTtcbiAgICAgICAgdGhpcy4kdmlld0NoYW5nZUxpc3RlbmVycyA9IFtdO1xuICAgICAgICB0aGlzLiR2YWxpZGF0b3JzID0gW107XG4gICAgICAgIHRoaXMuJGZlZWRiYWNrID0gJyc7XG4gICAgICAgIHRoaXMuJHByaXN0aW5lID0gdHJ1ZTtcbiAgICAgICAgdGhpcy4kZGlydHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy4kdmFsaWQgPSB0cnVlO1xuICAgICAgICB0aGlzLiRpbnZhbGlkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb25JbnNlcnQoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLnNldFZpZXdWYWx1ZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLiRjb21wb25lbnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHNlbGYuc2V0TW9kZWxWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh1dGlscy5pc01lc3Nlbmdlcih0aGlzLiRjb21wb25lbnQuY2hhbmdlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGNvbXBvbmVudC5jaGFuZ2Uub24oZnVuY3Rpb24gKGUsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRNb2RlbFZhbHVlKGFyZ3MubmV3dmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb2VudCAnICsgdGhpcy4kY29tcG9uZW50LiQkbWV0YS5zZWxlY3RvciArICdtdXN0IGRlZmluZSBbY2hhbmdlXSBldmVudCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25VcGRhdGUoKSB7XG4gICAgICAgIHRoaXMuc2V0Vmlld1ZhbHVlKCk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLiRwYXJzZXJzID0gbnVsbDtcbiAgICAgICAgdGhpcy4kZm9ybWF0dGVycyA9IG51bGw7XG4gICAgICAgIHRoaXMuJHZpZXdDaGFuZ2VMaXN0ZW5lcnMgPSBudWxsO1xuICAgICAgICB0aGlzLiR2YWxpZGF0b3JzID0gbnVsbDtcbiAgICB9XG5cbiAgICBzZXRWaWV3VmFsdWUoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLiRtb2RlbFZhbHVlID0gdGhpcy4kYmluZGluZy5jb21wdXRlKCk7XG5cbiAgICAgICAgdmFyIHZpZXdWYWx1ZSA9IHRoaXMuJG1vZGVsVmFsdWU7XG5cbiAgICAgICAgdGhpcy4kdmFsaWRhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5jYWxsKHNlbGYsIHNlbGYuJG1vZGVsVmFsdWUsIHNlbGYuJHZpZXdWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGZvcm1hdHRlcnMuZm9yRWFjaChmdW5jdGlvbiAoZm9ybWF0dGVyKSB7XG4gICAgICAgICAgICB2aWV3VmFsdWUgPSBmb3JtYXR0ZXIuY2FsbChzZWxmLCB2aWV3VmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy4kdmlld1ZhbHVlICE9PSB2aWV3VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuJHZpZXdWYWx1ZSA9IHZpZXdWYWx1ZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuJGNvbXBvbmVudCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQudmFsdWUgPSB0aGlzLiRtb2RlbFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kY29tcG9uZW50LiRzZXRBdHRyKCd2YWx1ZScsIHRoaXMuJG1vZGVsVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVDc3MoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgIH1cblxuICAgIHNldE1vZGVsVmFsdWUodmlld1ZhbHVlKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLnNldERpcnR5KHRydWUpO1xuXG4gICAgICAgIHRoaXMuJHZpZXdWYWx1ZSA9IHZpZXdWYWx1ZTtcblxuICAgICAgICB0aGlzLiR2aWV3Q2hhbmdlTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5jYWxsKHNlbGYsIHZpZXdWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBtb2RlbFZhbHVlID0gdGhpcy4kdmlld1ZhbHVlO1xuXG4gICAgICAgIHRoaXMuJHBhcnNlcnMuZm9yRWFjaChmdW5jdGlvbiAocGFyc2VyKSB7XG4gICAgICAgICAgICBtb2RlbFZhbHVlID0gcGFyc2VyLmNhbGwoc2VsZiwgbW9kZWxWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLiRtb2RlbFZhbHVlICE9PSBtb2RlbFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLiRtb2RlbFZhbHVlID0gbW9kZWxWYWx1ZTtcblxuICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IuY2FsbChzZWxmLCBzZWxmLiRtb2RlbFZhbHVlLCBzZWxmLiR2aWV3VmFsdWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuJGJpbmRpbmcuYXNzaWduKHRoaXMuJG1vZGVsVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlQ3NzKCkge1xuICAgICAgICB2YXIgZWxlID0gdGhpcy4kaHRtbEVsZW1lbnQsXG4gICAgICAgICAgICBjc3MgPSB0aGlzLm9wdGlvbnMuY3NzQ2xhc3M7XG5cbiAgICAgICAgaWYgKHRoaXMuJGRpcnR5KSB7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZChjc3MuZGlydHkpO1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoY3NzLnByaXN0aW5lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKGNzcy5wcmlzdGluZSk7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShjc3MuZGlydHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuJHZhbGlkKSB7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZChjc3MudmFsaWQpO1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoY3NzLmludmFsaWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoY3NzLmludmFsaWQpO1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoY3NzLnZhbGlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVN0YXRlKCkge1xuICAgICAgICB2YXIgbmFtZSA9IHRoaXMuJGh0bWxFbGVtZW50Lm5hbWU7XG5cbiAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2NvcGUgPSB0aGlzLiRiaW5kaW5nLnNjb3BlLnRvUHJveHkoKTtcblxuICAgICAgICBpZiAoc2NvcGVbbmFtZV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgc2NvcGVbbmFtZV0gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdGF0ZSA9IHNjb3BlW25hbWVdLnRvUHJveHkoKTtcblxuICAgICAgICBzdGF0ZS4kcHJpc3RpbmUgPSB0aGlzLiRwcmlzdGluZTtcbiAgICAgICAgc3RhdGUuJGRpcnR5ID0gdGhpcy4kZGlydHk7XG4gICAgICAgIHN0YXRlLiR2YWxpZCA9IHRoaXMuJHZhbGlkO1xuICAgICAgICBzdGF0ZS4kaW52YWxpZCA9IHRoaXMuJGludmFsaWQ7XG4gICAgICAgIHN0YXRlLiRmZWVkYmFjayA9IHRoaXMuJGZlZWRiYWNrO1xuICAgIH1cblxuICAgIHNldERpcnR5KGRpcnR5KSB7XG4gICAgICAgIHRoaXMuJGRpcnR5ID0gZGlydHk7XG4gICAgICAgIHRoaXMuJHByaXN0aW5lID0gIWRpcnR5O1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ3NzKCk7XG4gICAgfVxuXG4gICAgc2V0VmFsaWRpdHkodmFsaWQsIGZlZWRiYWNrKSB7XG4gICAgICAgIHRoaXMuJHZhbGlkID0gdmFsaWQ7XG4gICAgICAgIHRoaXMuJGludmFsaWQgPSAhdmFsaWQ7XG4gICAgICAgIHRoaXMuJGZlZWRiYWNrID0gZmVlZGJhY2s7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgICAgdGhpcy51cGRhdGVDc3MoKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICduLW5hbWUnXHJcbn0pXHJcbmNsYXNzIE5hbWVEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLiRvdXRwdXQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnNlcnQoKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy4kYmluZGluZy50ZXh0O1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMubmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgcHJveHkgPSB0aGlzLiRzY29wZS50b1Byb3h5KCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLiRjb21wb25lbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBwcm94eVt0aGlzLm5hbWVdID0gdGhpcy4kY29tcG9uZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcHJveHlbdGhpcy5uYW1lXSA9IHRoaXMuJGVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy5uYW1lICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy4kc2NvcGVbdGhpcy5uYW1lXSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldENtcChjbXApIHtcclxuICAgICAgICB2YXIgcHJveHkgPSB0aGlzLiRzY29wZS50b1Byb3h5KCk7XHJcbiAgICAgICAgcHJveHlbdGhpcy5uYW1lXSA9IGNtcDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IERpcmVjdGl2ZSwgQ29tcG9uZW50IH0gZnJvbSAnLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1yZXBlYXQnXG59KVxuY2xhc3MgUmVwZWF0RGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IG51bGw7XG4gICAgICAgIHRoaXMuaXRlbUV4cCA9ICcnO1xuICAgICAgICB0aGlzLml0ZW1zRXhwID0gJyc7XG4gICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlID0gJyc7XG4gICAgICAgIHRoaXMuZGF0YUl0ZW1zID0gW107XG4gICAgICAgIHRoaXMuY21wSXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmZvb3RlciA9IG51bGw7XG4gICAgfVxuXG4gICAgb25Db21waWxlKCkge1xuICAgICAgICB2YXIgYXJnID0gdGhpcy4kYXR0ci5ub2RlVmFsdWU7XG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy4kZWxlbWVudDtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSAvXihbYS16X10rXFx3KylcXHMraW5cXHMrKC4rKSQvaTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHBhdHRlcm4uZXhlYyhhcmcpO1xuXG4gICAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCduLXJlcGVhdDogcGFyYW1ldGVyIGlzIG5vdCB2YWxpZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pdGVtRXhwID0gcmVzdWx0WzFdO1xuICAgICAgICB0aGlzLml0ZW1zRXhwID0gcmVzdWx0WzJdO1xuXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHRoaXMuJGF0dHIpO1xuICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9IGVsZW1lbnQuZ2V0T3V0ZXJUcGwoKTtcblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBjb25uZWN0aW9uID0gZWxlbWVudC5jcmVhdGVDb25uZWN0aW9uKCduLXJlcGVhdCcsIGZ1bmN0aW9uIChzY29wZSkge1xuICAgICAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICAgICAgdmFyIGl0ZW1zID0gc2NvcGUuJGV2YWwoc2VsZi5pdGVtc0V4cCk7XG5cbiAgICAgICAgICAgIHNlbGYuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgICAgIHNlbGYuc2V0RGF0YUl0ZW1zKGl0ZW1zKTtcbiAgICAgICAgICAgIHNlbGYuaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnc3RhcnQ6IG4tcmVwZWF0Jyk7XG4gICAgICAgICAgICBzZWxmLmZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ2VuZDogbi1yZXBlYXQnKTtcblxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoc2VsZi5oZWFkZXIpO1xuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoc2VsZi5mb290ZXIpO1xuICAgICAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgICAgICB9KTtcblxuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGVsZW1lbnQsIGNvbm5lY3Rpb24pO1xuICAgICAgICBlbGVtZW50LmRlc3Ryb3koKTtcblxuICAgICAgICBjb25uZWN0aW9uLm9uSW5zZXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5yZW5kZXIoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25uZWN0aW9uLm9uRGV0ZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGl0ZW1zID0gc2VsZi5zY29wZS4kZXZhbChzZWxmLml0ZW1zRXhwKTtcblxuICAgICAgICAgICAgaWYgKHNlbGYuZGF0YUl0ZW1zICE9PSBpdGVtcykge1xuICAgICAgICAgICAgICAgIHNlbGYuc2V0RGF0YUl0ZW1zKGl0ZW1zKTtcbiAgICAgICAgICAgICAgICBzZWxmLnJlbmRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jbXBJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZFNjb3BlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkU2NvcGUuJGRldGVjdCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbm5lY3Rpb24ub25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi4kZGVzdHJveSgpO1xuICAgICAgICAgICAgZWxlbWVudCA9IG51bGw7XG4gICAgICAgICAgICBjb25uZWN0aW9uID0gbnVsbDtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuY21wSXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoY21wSXRlbSkge1xuICAgICAgICAgICAgY21wSXRlbS4kZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jbXBJdGVtcyA9IG51bGw7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xuICAgICAgICB0aGlzLmRhdGFJdGVtcyA9IG51bGw7XG4gICAgICAgIHRoaXMuaGVhZGVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5mb290ZXIgPSBudWxsO1xuICAgIH1cblxuICAgIHNldERhdGFJdGVtcyh2YWx1ZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFJdGVtcyA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kYXRhSXRlbXMgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2NvcGUuJHdhdGNoKHRoaXMuZGF0YUl0ZW1zLCAnbGVuZ3RoJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0Q21wSXRlbShkYXRhSXRlbSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIGZpbHRlcnMgPSB0aGlzLmNtcEl0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1bc2VsZi5pdGVtRXhwXSA9PT0gZGF0YUl0ZW07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChmaWx0ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGFyZ2V0ID0gZmlsdGVyc1swXTtcblxuICAgICAgICB0aGlzLmNtcEl0ZW1zID0gdGhpcy5jbXBJdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtW3NlbGYuaXRlbUV4cF0gIT09IGRhdGFJdGVtO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIHZhciBuZXdDbXBJdGVtcyA9IFtdO1xuICAgICAgICB2YXIgaW5kZXggPSAwO1xuXG4gICAgICAgIHV0aWxzLmZvckVhY2goc2VsZi5kYXRhSXRlbXMsIGZ1bmN0aW9uIChpdGVtLCBrZXkpIHtcbiAgICAgICAgICAgIHZhciBjbXBJdGVtID0gc2VsZi5nZXRDbXBJdGVtKGl0ZW0pO1xuXG4gICAgICAgICAgICBpZiAoY21wSXRlbSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY21wSXRlbSA9IG5ldyBDb21wb25lbnQoe1xuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogc2VsZi5pdGVtVGVtcGxhdGVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjbXBJdGVtW3NlbGYuaXRlbUV4cF0gPSBpdGVtO1xuICAgICAgICAgICAgICAgIGNtcEl0ZW0uJGluaGVyaXRDbXAoc2VsZi5zY29wZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNtcEl0ZW1bJyRpbmRleCddID0gaW5kZXg7XG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChjbXBJdGVtLiRyZW5kZXIodHJ1ZSkpO1xuICAgICAgICAgICAgbmV3Q21wSXRlbXMucHVzaChjbXBJdGVtKTtcbiAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzZWxmLmNtcEl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHNlbGYuY21wSXRlbXMuZm9yRWFjaChmdW5jdGlvbiAocmVwZWF0SXRlbSkge1xuICAgICAgICAgICAgICAgIHJlcGVhdEl0ZW0uJGRlc3Ryb3koKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5jbXBJdGVtcyA9IG5ld0NtcEl0ZW1zO1xuICAgICAgICB1dGlscy5yZW1vdmVOb2RlQmV0d2VlbihzZWxmLmhlYWRlciwgc2VsZi5mb290ZXIpO1xuICAgICAgICBzZWxmLmZvb3Rlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShmcmFnbWVudCwgc2VsZi5mb290ZXIpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICduLXNob3cnLFxuICAgIGluamVjdDoge1xuICAgICAgICAkYW5pbWF0ZTogJyRhbmltYXRlJ1xuICAgIH1cbn0pXG5jbGFzcyBTaG93RGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkluc2VydCgpIHtcbiAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICB9XG5cbiAgICBvblVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICB9XG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy4kYmluZGluZy5jb21wdXRlKCkpIHtcbiAgICAgICAgICAgIHRoaXMuJGFuaW1hdGUuZW50ZXIodGhpcy4kZWxlbWVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuJGh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnaW5pdGlhbCc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJGFuaW1hdGUubGVhdmUodGhpcy4kZWxlbWVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuJGh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICduLWNoZWNrZWQnXG59KVxuY2xhc3MgQ2hlY2tlZERpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2NoZWNrZWQnKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1kaXNhYmxlZCdcbn0pXG5jbGFzcyBEaXNhYmxlZERpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2Rpc2FibGVkJyk7XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vY2hlY2tlZCdcbmV4cG9ydCAqIGZyb20gJy4vZGlzYWJsZWQnXG5leHBvcnQgKiBmcm9tICcuL3JlYWRvbmx5J1xuZXhwb3J0ICogZnJvbSAnLi9zZWxlY3RlZCciLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICduLXJlYWRvbmx5J1xufSlcbmNsYXNzIFJlYWRvbmx5RGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigncmVhZG9ubHknKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1zZWxlY3RlZCdcbn0pXG5jbGFzcyBTZWxlY3RlZERpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ3NlbGVjdGVkJyk7XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcnO1xuXG5jbGFzcyBTdGF0ZURpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoYXR0ck5hbWUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hdHRyTmFtZSA9IGF0dHJOYW1lO1xuICAgIH1cblxuICAgIG9uSW5zZXJ0KCkge1xuICAgICAgICB0aGlzLnBlcmZvcm0oKTtcbiAgICB9XG5cbiAgICBvblVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtKCk7XG4gICAgfVxuXG4gICAgcGVyZm9ybSgpIHtcbiAgICAgICAgaWYgKHRoaXMuJGJpbmRpbmcuY29tcHV0ZSgpKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuJGh0bWxFbGVtZW50Lmhhc0F0dHJpYnV0ZSh0aGlzLmF0dHJOYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGh0bWxFbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLmF0dHJOYW1lLCAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kaHRtbEVsZW1lbnQuaGFzQXR0cmlidXRlKHRoaXMuYXR0ck5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHRoaXMuYXR0ck5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IiwiaW1wb3J0IHsgQ2xhc3NEaXJlY3RpdmUgfSBmcm9tICcuL2NsYXNzJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJ24tY2xhc3MtZXZlbidcclxufSlcclxuY2xhc3MgQ2xhc3NFdmVuRGlyZWN0aXZlIGV4dGVuZHMgQ2xhc3NEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBza2lwKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRzY29wZS4kaW5kZXggJiAxID09PSAxO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ2xhc3NEaXJlY3RpdmUgfSBmcm9tICcuL2NsYXNzJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJ24tY2xhc3Mtb2RkJ1xyXG59KVxyXG5jbGFzcyBDbGFzc09kZERpcmVjdGl2ZSBleHRlbmRzIENsYXNzRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2tpcCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kc2NvcGUuJGluZGV4ICYgMSA9PT0gMDtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uLy4uL3V0aWxpdHknO1xyXG5pbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3JztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJ24tY2xhc3MnXHJcbn0pXHJcbmNsYXNzIENsYXNzRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy51bndhdGNoID0gbnVsbDtcclxuICAgICAgICB0aGlzLmluaXRpYWxDbGFzc0xpc3QgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBvbkluc2VydCgpIHtcclxuICAgICAgICB0aGlzLnBhcnNlQ2xhc3MoKTtcclxuICAgICAgICB0aGlzLnNldENsYXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25VcGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDbGFzcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHdhdGNoQXJyYXkoYXJyLCBhY3Rpb24pIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMudW53YXRjaEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy4kc2NvcGUuJHdhdGNoKGFyciwgJ2xlbmd0aCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYWN0aW9uLmNhbGwoc2VsZik7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1bndhdGNoQXJyYXkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudW53YXRjaCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudW53YXRjaC5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLnVud2F0Y2ggPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy51bndhdGNoQXJyYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICB0ZXh0VG9BcnJheSh0ZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQuc3BsaXQoJyAnKS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0udHJpbSgpLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2VDbGFzcygpIHtcclxuICAgICAgICB2YXIgY2xhc3NUZXh0ID0gdGhpcy4kZ2V0QXR0clZhbHVlKCdjbGFzcycpO1xyXG5cclxuICAgICAgICBpZiAoIWNsYXNzVGV4dCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmluaXRpYWxDbGFzc0xpc3QgPSB0aGlzLnRleHRUb0FycmF5KGNsYXNzVGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2xhc3NMaXN0KGFycikge1xyXG4gICAgICAgIHRoaXMuJGh0bWxFbGVtZW50LmNsYXNzTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGh0bWxFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsQ2xhc3NMaXN0LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQuY2xhc3NMaXN0LmFkZChpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICB0aGlzLiRodG1sRWxlbWVudC5jbGFzc0xpc3QuYWRkKGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENsYXNzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNraXAoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgICAgIG5ld0FyciA9IFtdLFxyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuJGJpbmRpbmcuY29tcHV0ZSgpO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdBcnIgPSB0aGlzLnRleHRUb0FycmF5KHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh1dGlscy5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgbmV3QXJyID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndhdGNoQXJyYXkodmFsdWUsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnNldENsYXNzTGlzdCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUGFyYW1ldGVyIG9mIG4tY2xhc3Mgc2hvdWxkIGJlIHN0cmluZyBvciBhcnJheScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldENsYXNzTGlzdChuZXdBcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNraXAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBDbGFzc0RpcmVjdGl2ZSB9XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vY2xhc3MnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NsYXNzLWV2ZW4nO1xyXG5leHBvcnQgKiBmcm9tICcuL2NsYXNzLW9kZCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3R5bGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL3N0eWxlLWV2ZW4nO1xyXG5leHBvcnQgKiBmcm9tICcuL3N0eWxlLW9kZCc7IiwiaW1wb3J0IHsgU3R5bGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0eWxlJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJ24tc3R5bGUtZXZlbidcclxufSlcclxuY2xhc3MgU3R5bGVFdmVuRGlyZWN0aXZlIGV4dGVuZHMgU3R5bGVEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBza2lwKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRzY29wZS4kaW5kZXggJiAxID09PSAxO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU3R5bGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0eWxlJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJ24tc3R5bGUtb2RkJ1xyXG59KVxyXG5jbGFzcyBTdHlsZU9kZERpcmVjdGl2ZSBleHRlbmRzIFN0eWxlRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2tpcCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kc2NvcGUuJGluZGV4ICYgMSA9PT0gMDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uLy4uL3V0aWxpdHknO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcbiAgICBzZWxlY3RvcjogJ24tc3R5bGUnXG59KVxuY2xhc3MgU3R5bGVEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnVud2F0Y2ggPSBudWxsO1xuICAgICAgICB0aGlzLmluaXRpYWxTdHlsZSA9IHt9O1xuICAgIH1cblxuICAgIG9uSW5zZXJ0KCkge1xuICAgICAgICB0aGlzLnBhcnNlU3R5bGUoKTtcbiAgICAgICAgdGhpcy5zZXRTdHlsZSgpO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKCkge1xuICAgICAgICB0aGlzLnNldFN0eWxlKCk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnVud2F0Y2hPYmooKTtcbiAgICB9XG5cbiAgICB3YXRjaE9iaihvYmosIGFjdGlvbikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy51bndhdGNoT2JqKCk7XG4gICAgICAgIHRoaXMuJHNjb3BlLiR3YXRjaChvYmosICcqJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYWN0aW9uLmNhbGwoc2VsZik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdW53YXRjaE9iaigpIHtcbiAgICAgICAgaWYgKHRoaXMudW53YXRjaCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnVud2F0Y2guY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMudW53YXRjaCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJzZVN0eWxlKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLiRnZXRBdHRyVmFsdWUoJ3N0eWxlJyk7XG5cbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbml0aWFsU3R5bGUgPSB0aGlzLnRleHRUb09iamVjdCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgdGV4dFRvT2JqZWN0KHRleHQpIHtcbiAgICAgICAgdmFyIG9iaiA9IHt9LFxuICAgICAgICAgICAgbGlzdCA9IHRleHQuc3BsaXQoJzsnKS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS50cmltKCkubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGxpc3QuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgdmFyIHN1Ykl0ZW1zID0gaXRlbS5zcGxpdCgnOicpO1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBzdWJJdGVtc1swXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHN1Ykl0ZW1zWzFdO1xuICAgICAgICAgICAgb2JqW25hbWVdID0gdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgYXBwbHlTdHlsZShvYmopIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLiRodG1sRWxlbWVudDtcblxuICAgICAgICAvLyBjbGVhbiB1cCBzdHlsZVxuICAgICAgICBlbGVtZW50LnN0eWxlID0gJyc7XG5cbiAgICAgICAgLy8gc2V0IG5ldyBzdHlsZVxuICAgICAgICB1dGlscy5mb3JFYWNoKHRoaXMuaW5pdGlhbFN0eWxlLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZVtrZXldID0gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICB1dGlscy5mb3JFYWNoKG9iaiwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRTdHlsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2tpcCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIG5ld1N0eWxlID0ge307XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuJGJpbmRpbmcuY29tcHV0ZSgpO1xuXG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgbmV3U3R5bGUgPSB0aGlzLnRleHRUb09iamVjdCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBuZXdTdHlsZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMud2F0Y2hPYmoodmFsdWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hcHBseVN0eWxlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUGFyYW1ldGVyIG9mIG4tc3R5bGUgc2hvdWxkIGJlIHN0cmluZyBvciBvYmplY3QnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYXBwbHlTdHlsZShuZXdTdHlsZSk7XG4gICAgfVxuXG4gICAgc2tpcCgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgU3R5bGVEaXJlY3RpdmUgfVxuIiwiZXhwb3J0ICogZnJvbSAnLi9zd2l0Y2gnXG5leHBvcnQgKiBmcm9tICcuL3N3aXRjaC1kZWZhdWx0J1xuZXhwb3J0ICogZnJvbSAnLi9zd2l0Y2gtd2hlbiciLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi8uLi91dGlsaXR5JztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICduLXN3aXRjaC1kZWZhdWx0J1xufSlcbmNsYXNzIFN3aXRjaERlZmF1bHREaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlzTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgdGhpcy5odG1sQ29tbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuc3dpdGNoV2hlbkRpcnMgPSBbXTtcbiAgICB9XG5cbiAgICBpbml0U3dpdGNoV2hlbkRpcnMoKSB7XG4gICAgICAgIHZhciB2RWxlID0gdGhpcy4kZWxlbWVudDtcblxuICAgICAgICB3aGlsZSAodkVsZS5wcmV2aW91c1NpYmxpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIHdoZW5EaXIgPSB2RWxlLnByZXZpb3VzU2libGluZy5nZXREaXJlY3RpdmUoJ24tc3dpdGNoLXdoZW4nKTtcblxuICAgICAgICAgICAgaWYgKHdoZW5EaXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoV2hlbkRpcnMucHVzaCh3aGVuRGlyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdkVsZSA9IHZFbGUucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWF0Y2goKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5zd2l0Y2hXaGVuRGlycy5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5pc01hdGNoO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkluc2VydCgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuaW5pdFN3aXRjaFdoZW5EaXJzKCk7XG4gICAgICAgIHRoaXMuaXNNYXRjaCA9IHRoaXMubWF0Y2goKTtcbiAgICAgICAgdGhpcy5odG1sQ29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ24tc3dpdGNoLWRlZmF1bHQnKTtcblxuICAgICAgICBpZiAoIXRoaXMuaXNNYXRjaCkge1xuICAgICAgICAgICAgdXRpbHMucmVwbGFjZU5vZGUodGhpcy4kaHRtbEVsZW1lbnQsIHRoaXMuaHRtbENvbW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hXaGVuRGlycy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBpdGVtLmlzTWF0Y2hDaGFuZ2VkLm9uKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLmlzTWF0Y2gsIG5ld1ZhbHVlID0gdGhpcy5tYXRjaCgpO1xuXG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gb2xkVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNNYXRjaCA9IG5ld1ZhbHVlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pc01hdGNoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuJGh0bWxFbGVtZW50LnBhcmVudE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZSh0aGlzLmh0bWxDb21tZW50LCB0aGlzLiRodG1sRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuJGh0bWxFbGVtZW50LnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZSh0aGlzLiRodG1sRWxlbWVudCwgdGhpcy5odG1sQ29tbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmh0bWxDb21tZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zd2l0Y2hXaGVuRGlycyA9IG51bGw7XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uLy4uL3V0aWxpdHknO1xuaW1wb3J0IHsgTWVzc2VuZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbGl0eSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1zd2l0Y2gtd2hlbidcbn0pXG5jbGFzcyBTd2l0Y2hXaGVuRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pc01hdGNoID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaHRtbENvbW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLnN3aXRjaERpciA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNNYXRjaENoYW5nZWQgPSBuZXcgTWVzc2VuZ2VyKCk7XG4gICAgfVxuXG4gICAgaW5pdFN3aXRjaERpcigpIHtcbiAgICAgICAgdmFyIHN3aXRjaERpciA9IHRoaXMuJGVsZW1lbnQucGFyZW50Tm9kZS5nZXREaXJlY3RpdmUoJ24tc3dpdGNoJyk7XG5cbiAgICAgICAgaWYgKHN3aXRjaERpciA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmUgbi1zd2l0Y2ggZGlyZWN0aXZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXRjaERpciA9IHN3aXRjaERpcjtcbiAgICB9XG5cbiAgICBvbkluc2VydCgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuaW5pdFN3aXRjaERpcigpO1xuICAgICAgICB0aGlzLmh0bWxDb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnbi1zd2l0Y2gtd2hlbicpO1xuICAgICAgICB0aGlzLmlzTWF0Y2ggPSAodGhpcy4kYmluZGluZy5jb21wdXRlKCkgPT09IHRoaXMuc3dpdGNoRGlyLnZhbHVlKTtcblxuICAgICAgICBpZiAoIXRoaXMuaXNNYXRjaCkge1xuICAgICAgICAgICAgdXRpbHMucmVwbGFjZU5vZGUodGhpcy4kaHRtbEVsZW1lbnQsIHRoaXMuaHRtbENvbW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hEaXIudmFsdWVDaGFuZ2VkLm9uKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYudXBkYXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy5pc01hdGNoLFxuICAgICAgICAgICAgbmV3VmFsdWUgPSAodGhpcy4kYmluZGluZy5jb21wdXRlKCkgPT09IHRoaXMuc3dpdGNoRGlyLnZhbHVlKTtcblxuICAgICAgICBpZiAobmV3VmFsdWUgIT09IG9sZFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmlzTWF0Y2ggPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuaXNNYXRjaENoYW5nZWQuZmlyZSgpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pc01hdGNoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuJGh0bWxFbGVtZW50LnBhcmVudE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZSh0aGlzLmh0bWxDb21tZW50LCB0aGlzLiRodG1sRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuJGh0bWxFbGVtZW50LnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZSh0aGlzLiRodG1sRWxlbWVudCwgdGhpcy5odG1sQ29tbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmh0bWxDb21tZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zd2l0Y2hEaXIgPSBudWxsO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5pbXBvcnQgeyBNZXNzZW5nZXIgfSBmcm9tICcuLi8uLi91dGlsaXR5JztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICduLXN3aXRjaCdcbn0pXG5jbGFzcyBTd2l0Y2hEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQgPSBuZXcgTWVzc2VuZ2VyKCk7XG4gICAgfVxuXG4gICAgb25JbnNlcnQoKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLiRiaW5kaW5nLmNvbXB1dGUoKTtcbiAgICB9XG5cbiAgICBvblVwZGF0ZSgpIHtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy52YWx1ZSxcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gdGhpcy4kYmluZGluZy5jb21wdXRlKCk7XG5cbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBvbGRWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQuZmlyZSh7XG4gICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWUsXG4gICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIGRlY29yYXRvciBmcm9tICcuL2RlY29yYXRvcic7XG5cbmV4cG9ydCB7IGRlY29yYXRvciB9XG5leHBvcnQgKiBmcm9tICcuL3V0aWxpdHknO1xuZXhwb3J0ICogZnJvbSAnLi92aWV3JztcbmV4cG9ydCAqIGZyb20gJy4vcGFyc2VyJztcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2RpcmVjdGl2ZSc7XG5leHBvcnQgKiBmcm9tICcuL2FuaW1hdGlvbic7IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eSc7XG5pbXBvcnQgeyBMZXhlciB9IGZyb20gJy4vbGV4ZXInO1xuXG51dGlscy5pbmhlcml0KEh0bWxMZXhlciwgTGV4ZXIpO1xuZnVuY3Rpb24gSHRtbExleGVyKG9wdGlvbnMpIHtcbiAgICBIdG1sTGV4ZXIuc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKTtcbn1cblxuSHRtbExleGVyLnByb3RvdHlwZS5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0ID0gZnVuY3Rpb24gKGNoKSB7XG4gICAgcmV0dXJuICgnYScgPD0gY2ggJiYgY2ggPD0gJ3onIHx8XG4gICAgICAgICdBJyA8PSBjaCAmJiBjaCA8PSAnWicgfHxcbiAgICAgICAgJ18nID09PSBjaCB8fCBjaCA9PT0gJyQnIHx8XG4gICAgICAgIGNoID09PSAnQCcgfHwgY2ggPT09ICc6JyB8fCBjaCA9PT0gJyonKTtcbn07XG5cbkh0bWxMZXhlci5wcm90b3R5cGUuaXNWYWxpZElkZW50aWZpZXJDb250aW51ZSA9IGZ1bmN0aW9uIChjaCwgY3ApIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoLCBjcCkgfHwgdGhpcy5pc051bWJlcihjaCkgfHwgY2ggPT09ICctJyB8fCBjaCA9PT0gJy4nO1xufTtcblxuSHRtbExleGVyLnByb3RvdHlwZS5leHBlY3RTdHJpbmcgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgdmFyIG51bSA9IHN0ci5sZW5ndGg7XG4gICAgcmV0dXJuICh0aGlzLmluZGV4ICsgbnVtIDw9IHRoaXMudGV4dC5sZW5ndGgpID8gKHN0ciA9PT0gdGhpcy50ZXh0LnN1YnN0cih0aGlzLmluZGV4LCBudW0pKSA6IGZhbHNlO1xufTtcblxuLy8gaHRtbCBjb21tZW50IFwiPCEtLWNvbW1lbnQtLT5cIlxuSHRtbExleGVyLnByb3RvdHlwZS5yZWFkQ29tbWVudCA9IGZ1bmN0aW9uIChiZWdpbiwgZW5kKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICB0aGlzLmluZGV4ICs9IGJlZ2luLmxlbmd0aDtcbiAgICB2YXIgc3RyaW5nID0gJyc7XG4gICAgdmFyIHJhd1N0cmluZyA9IGJlZ2luO1xuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICByYXdTdHJpbmcgKz0gY2g7XG4gICAgICAgIGlmICh0aGlzLmV4cGVjdFN0cmluZyhlbmQpKSB7XG4gICAgICAgICAgICByYXdTdHJpbmcgKz0gZW5kO1xuICAgICAgICAgICAgdGhpcy5pbmRleCArPSBlbmQubGVuZ3RoO1xuICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgaW5kZXg6IHN0YXJ0LFxuICAgICAgICAgICAgICAgIHRleHQ6IHJhd1N0cmluZyxcbiAgICAgICAgICAgICAgICBjb21tZW50OiB0cnVlLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBzdHJpbmdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RyaW5nICs9IGNoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICB9XG4gICAgdGhpcy50aHJvd0Vycm9yKCdVbnRlcm1pbmF0ZWQgY29tbWVudCcsIHN0YXJ0KTtcbn07XG5cbi8vIGh0bWwgdGV4dFxuSHRtbExleGVyLnByb3RvdHlwZS5yZWFkVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgIHZhciBzdHJpbmcgPSAnJztcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcbiAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xuICAgICAgICBpZiAoKGNoID09PSAnPCcgJiYgKHRoaXMuaXNJZGVudGlmaWVyU3RhcnQoY2gyKSB8fCBjaDIgPT09ICcvJykpIHx8IHRoaXMuZXhwZWN0U3RyaW5nKCc8IS0tJykpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHN0cmluZyArPSBjaDtcbiAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgIH1cbiAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgaW5kZXg6IHN0YXJ0LFxuICAgICAgICB0ZXh0OiBzdHJpbmcsXG4gICAgICAgIHRleHRUYWc6IHRydWVcbiAgICB9KTtcbn07XG5cbi8vIGh0bWwgdGFnXG5IdG1sTGV4ZXIucHJvdG90eXBlLnJlYWRUYWcgPSBmdW5jdGlvbiAoYmVnaW4sIGVuZCwgY2xvc2luZywgZG9jdHlwZSkge1xuICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogYmVnaW4sIHRhZzogdHJ1ZSwgY2xvc2luZzogY2xvc2luZywgYmVnaW46IHRydWUsIGRvY3R5cGU6IGRvY3R5cGUgfSk7XG4gICAgdGhpcy5pbmRleCArPSBiZWdpbi5sZW5ndGg7XG4gICAgdGhpcy5yZWFkSWRlbnQoKTtcblxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuXG4gICAgICAgIGlmICghY2xvc2luZykge1xuICAgICAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xuICAgICAgICAgICAgdmFyIHN0ciA9IGNoICsgY2gyO1xuICAgICAgICAgICAgaWYgKHN0ciA9PT0gJy8nICsgZW5kKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiBzdHIsIHRhZzogdHJ1ZSwgY2xvc2luZzogdHJ1ZSwgZW5kOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gc3RyLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaCA9PT0gZW5kKSB7XG4gICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5pbmRleCxcbiAgICAgICAgICAgICAgICB0ZXh0OiBlbmQsXG4gICAgICAgICAgICAgICAgdGFnOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsb3Npbmc6ICEhZG9jdHlwZSA/IHRydWUgOiBjbG9zaW5nLFxuICAgICAgICAgICAgICAgIGVuZDogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmluZGV4ICs9IGVuZC5sZW5ndGg7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzSWRlbnRpZmllclN0YXJ0KHRoaXMucGVla011bHRpY2hhcigpKSkge1xuICAgICAgICAgICAgdGhpcy5yZWFkSWRlbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaCA9PT0gJ1wiJyB8fCBjaCA9PT0gJ1xcJycpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZFN0cmluZyhjaCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1doaXRlc3BhY2UoY2gpKSB7XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2ggPT09ICc9Jykge1xuICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiAnPScsIGVxdWFsOiB0cnVlIH0pO1xuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdVbmV4cGVjdGVkIG5leHQgY2hhcmFjdGVyICcsIHRoaXMuaW5kZXgsIHRoaXMuaW5kZXggKyAxKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbkh0bWxMZXhlci5wcm90b3R5cGUubGV4ID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIHRoaXMuaW5kZXggPSAwO1xuICAgIHRoaXMudG9rZW5zID0gW107XG5cbiAgICB2YXIgYWxsb3dEb2NUeXBlID0gISF0aGlzLm9wdGlvbnMuYWxsb3dEb2NUeXBlO1xuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICB2YXIgY2gyID0gdGhpcy5wZWVrKCk7XG4gICAgICAgIHZhciBjaDMgPSB0aGlzLnBlZWsoMik7XG4gICAgICAgIGlmICh0aGlzLmV4cGVjdFN0cmluZygnPCEtLScpKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWRDb21tZW50KCc8IS0tJywgJy0tPicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoID09PSAnPCcgJiYgdGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDIpKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWRUYWcoJzwnLCAnPicsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmV4cGVjdFN0cmluZygnPC8nKSAmJiB0aGlzLmlzSWRlbnRpZmllclN0YXJ0KGNoMykpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZFRhZygnPC8nLCAnPicsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZXhwZWN0U3RyaW5nKCc8IURPQ1RZUEUnKSkge1xuICAgICAgICAgICAgaWYgKGFsbG93RG9jVHlwZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZFRhZygnPCEnLCAnPicsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdET0NUWVBFIGlzIG5vdCBhbGxvd2VkJywgdGhpcy5pbmRleCwgdGhpcy5pbmRleCArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZWFkVGV4dCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnRva2Vucztcbn07XG5cbmV4cG9ydCB7IEh0bWxMZXhlciB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHknO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnLi9wYXJzZXInO1xuaW1wb3J0IHsgRG9jdW1lbnRGcmFnbWVudE5vZGUsIENvbW1lbnROb2RlLCBUZXh0Tm9kZSwgRG9jdW1lbnRUeXBlTm9kZSwgRWxlbWVudE5vZGUsIEF0dHJOb2RlIH0gZnJvbSAnLi4vY29yZSc7XG5cbnV0aWxzLmluaGVyaXQoSHRtbFBhcnNlciwgUGFyc2VyKTtcbmZ1bmN0aW9uIEh0bWxQYXJzZXIobGV4ZXIsIG9wdGlvbnMpIHtcbiAgICBIdG1sUGFyc2VyLnN1cGVyLmNhbGwodGhpcywgbGV4ZXIsIG9wdGlvbnMpO1xufVxuXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgdGhpcy5pbmRleCA9IDA7XG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICB0aGlzLnRva2VucyA9IHRoaXMubGV4ZXIubGV4KHRleHQpO1xuXG4gICAgdmFyIGZhcmdtZW50ID0gbmV3IERvY3VtZW50RnJhZ21lbnROb2RlKCk7XG4gICAgdmFyIGRvY3R5cGUsIGFsbG93RG9jVHlwZSA9ICEhdGhpcy5vcHRpb25zLmFsbG93RG9jVHlwZTtcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICBpZiAodG9rZW4uZG9jdHlwZSkge1xuICAgICAgICAgICAgaWYgKGFsbG93RG9jVHlwZSkge1xuICAgICAgICAgICAgICAgIGlmICghZG9jdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N0eXBlID0gdGhpcy5kb2N0eXBlKCk7XG4gICAgICAgICAgICAgICAgICAgIGZhcmdtZW50LiRwdXNoQ2hpbGQoZG9jdHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCJET0NUWVBFIG9ubHkgYWxsb3cgb25lXCIsIHRva2VuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCJET0NUWVBFIGlzIG5vdCBhbGxvd2VkXCIsIHRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0b2tlbi5jb21tZW50KSB7XG4gICAgICAgICAgICB2YXIgY29tbWVudCA9IG5ldyBDb21tZW50Tm9kZSgpO1xuICAgICAgICAgICAgY29tbWVudC5ub2RlVmFsdWUgPSB0b2tlbi50ZXh0O1xuICAgICAgICAgICAgZmFyZ21lbnQuJHB1c2hDaGlsZChjb21tZW50KTtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRva2VuLnRleHRUYWcpIHtcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gbmV3IFRleHROb2RlKCk7XG4gICAgICAgICAgICB0ZXh0Lm5vZGVWYWx1ZSA9IHRva2VuLnRleHQ7XG4gICAgICAgICAgICBmYXJnbWVudC4kcHVzaENoaWxkKHRleHQpO1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luKSB7XG4gICAgICAgICAgICBmYXJnbWVudC4kcHVzaENoaWxkKHRoaXMuZWxlbWVudCgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcImltcG9zc2libGVcIiwgdG9rZW4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmFyZ21lbnQuJGJ1aWxkU2libGluZygpO1xuXG4gICAgcmV0dXJuIGZhcmdtZW50LmNoaWxkTm9kZXM7XG59O1xuXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5kb2N0eXBlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMubmV4dCgpO1xuICAgIHZhciBkb2NUeXBlID0gbmV3IERvY3VtZW50VHlwZU5vZGUoKTtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XG4gICAgICAgIGRvY1R5cGUubm9kZVZhbHVlID0gdG9rZW4udGV4dDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgfVxuXG4gICAgdGhpcy5hdHRycyhkb2NUeXBlKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgIGRvY1R5cGUuY2hpbGROb2Rlcy5wdXNoKGF0dHIpO1xuICAgIH0pO1xuXG4gICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kICYmIHRva2VuLmNsb3NpbmcpIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgIH1cblxuICAgIHJldHVybiBkb2NUeXBlO1xufTtcblxuSHRtbFBhcnNlci5wcm90b3R5cGUuZWxlbWVudCA9IGZ1bmN0aW9uIChwKSB7XG4gICAgdGhpcy5uZXh0KCk7XG4gICAgdmFyIGVsZSA9IG5ldyBFbGVtZW50Tm9kZSgpO1xuICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcbiAgICAgICAgZWxlLm5vZGVOYW1lID0gdG9rZW4udGV4dDtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgIH1cblxuICAgIHRoaXMuYXR0cnMoZWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgIGVsZS4kcHVzaEF0dHJpYnV0ZShhdHRyKTtcbiAgICB9KTtcblxuICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCkge1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgaWYgKGVsZS5ub2RlTmFtZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgZWxlLnNlbGZDbG9zZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGVsZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRva2VuLmNsb3NpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRFbGVtZW50cyhlbGUpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgZWxlLiRwdXNoQ2hpbGQoY2hpbGQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgfVxuXG4gICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcbiAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luICYmIHRva2VuLmNsb3NpbmcpIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG4gICAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgICBpZiAoZWxlLm5vZGVOYW1lID09PSB0b2tlbi50ZXh0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcbiAgICAgICAgICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCAmJiB0b2tlbi5jbG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlO1xufTtcblxuSHRtbFBhcnNlci5wcm90b3R5cGUuY2hpbGRFbGVtZW50cyA9IGZ1bmN0aW9uIChwKSB7XG4gICAgdmFyIGVsZXMgPSBbXTtcblxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uY2xvc2luZykge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodG9rZW4uY29tbWVudCkge1xuICAgICAgICAgICAgdmFyIGNvbW1lbnQgPSBuZXcgQ29tbWVudE5vZGUoKTtcbiAgICAgICAgICAgIGNvbW1lbnQubm9kZVZhbHVlID0gdG9rZW4udGV4dDtcbiAgICAgICAgICAgIGVsZXMucHVzaChjb21tZW50KTtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRva2VuLnRleHRUYWcpIHtcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gbmV3IFRleHROb2RlKCk7XG4gICAgICAgICAgICB0ZXh0Lm5vZGVWYWx1ZSA9IHRva2VuLnRleHQ7XG4gICAgICAgICAgICBlbGVzLnB1c2godGV4dCk7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uYmVnaW4pIHtcbiAgICAgICAgICAgIGVsZXMucHVzaCh0aGlzLmVsZW1lbnQocCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbGVzO1xufTtcblxuSHRtbFBhcnNlci5wcm90b3R5cGUuYXR0cnMgPSBmdW5jdGlvbiAocCkge1xuICAgIHZhciBhdHRycyA9IFtdO1xuXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGF0dHIgPSBuZXcgQXR0ck5vZGUoKTtcblxuICAgICAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xuICAgICAgICAgICAgYXR0ci5ub2RlTmFtZSA9IHRva2VuLnRleHQ7XG4gICAgICAgICAgICBhdHRyLm9yaWdpbiA9IHRva2VuLnRleHQ7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG4gICAgICAgICAgICBpZiAodG9rZW4uZXF1YWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuICAgICAgICAgICAgICAgIGlmICh0b2tlbi5jb25zdGFudCkge1xuICAgICAgICAgICAgICAgICAgICBhdHRyLm5vZGVWYWx1ZSA9IHRva2VuLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYXR0cnMucHVzaChhdHRyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXR0cnM7XG59O1xuXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5jdXJyZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmluZGV4XTtcbiAgICB9XG4gICAgcmV0dXJuIHt9O1xufTtcblxuSHRtbFBhcnNlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmluZGV4Kys7XG59O1xuXG5leHBvcnQgeyBIdG1sUGFyc2VyIH07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eSc7XG5pbXBvcnQgeyBMZXhlciB9IGZyb20gJy4vbGV4ZXInO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnLi9wYXJzZXInO1xuaW1wb3J0IHsgSHRtbExleGVyIH0gZnJvbSAnLi9odG1sLWxleGVyJztcbmltcG9ydCB7IEh0bWxQYXJzZXIgfSBmcm9tICcuL2h0bWwtcGFyc2VyJztcblxudmFyIHBhcnNlT3B0aW9ucyA9IHtcbiAgICBpc0lkZW50aWZpZXJDb250aW51ZTogZmFsc2UsXG4gICAgaXNJZGVudGlmaWVyU3RhcnQ6IGZhbHNlLFxuICAgIGxpdGVyYWxzOiB7XG4gICAgICAgIGZhbHNlOiBmYWxzZSxcbiAgICAgICAgbnVsbDogbnVsbCxcbiAgICAgICAgdHJ1ZTogdHJ1ZSxcbiAgICAgICAgdW5kZWZpbmVkOiB1bmRlZmluZWRcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBwYXJzZShodG1sKSB7XG4gICAgdmFyIGxleGVyID0gbmV3IEh0bWxMZXhlcihwYXJzZU9wdGlvbnMpO1xuICAgIHZhciBwYXJzZXIgPSBuZXcgSHRtbFBhcnNlcihsZXhlciwgcGFyc2VPcHRpb25zKTtcbiAgICByZXR1cm4gcGFyc2VyLnBhcnNlKGh0bWwpO1xufVxuXG5mdW5jdGlvbiBjb21waWxlKGh0bWwsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBnZXRFbWJlZFRwbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250YWluc0NvbXBvbmVudDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVhdGVDb21wb25lbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250YWluc0RpcmVjdGl2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVhdGVEaXJlY3RpdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2V0dGluZ3MgPSB1dGlscy5tZXJnZShkZWZhdWx0cywgb3B0aW9ucyksXG4gICAgICAgIGFzdE5vZGVzID0gcGFyc2UoaHRtbCk7XG5cbiAgICBhc3ROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChhc3ROb2RlKSB7XG4gICAgICAgIGFzdE5vZGUuY29tcGlsZShzZXR0aW5ncyk7XG4gICAgfSk7XG4gICAgYXN0Tm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoYXN0Tm9kZSkge1xuICAgICAgICBhc3ROb2RlLm5vdGlmeUNvbXBpbGVkKHNldHRpbmdzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoc2NvcGUpIHtcbiAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgICAgIHNjb3BlLiQkY2hpbGRFbGVtZW50cyA9IGFzdE5vZGVzO1xuXG4gICAgICAgIGFzdE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGFzdE5vZGUpIHtcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGFzdE5vZGUubGluayhzY29wZSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgYXN0Tm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoYXN0Tm9kZSkge1xuICAgICAgICAgICAgYXN0Tm9kZS5ub3RpZnlMaW5rZWQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGUoZXhwLCBzY29wZSwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMuY3JlYXRlRmlsdGVyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGluamVjdG9yLmNyZWF0ZUZpbHRlcihuYW1lKTtcbiAgICB9O1xuICAgIGlmIChvcHRpb25zLmNvbGxlY3RNZW1iZXJzKSB7XG4gICAgICAgIG9wdGlvbnMubWVtYmVycyA9IFtdO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VFeHAoZXhwKS5jb21wdXRlKHNjb3BlLCBvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VFeHAoZXhwKSB7XG4gICAgaWYgKGV4cCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBleHAgPSBleHAudHJpbSgpO1xuXG4gICAgaWYgKGV4cC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV4cCA9IGV4cC5yZXBsYWNlKCcmZ3Q7JywgJz4nKS5yZXBsYWNlKCcmbHQ7JywgJzwnKTtcblxuICAgIHZhciBsZXhlciA9IG5ldyBMZXhlcihwYXJzZU9wdGlvbnMpO1xuICAgIHZhciBwYXJzZXIgPSBuZXcgUGFyc2VyKGxleGVyLCBwYXJzZU9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIHBhcnNlci5wYXJzZShleHApO1xufVxuXG5mdW5jdGlvbiBwYXJzZUFzc2lnbm1lbnQoZXhwLCBzY29wZSwgb3B0aW9ucykge1xuICAgIHZhciBhc3QgPSBwYXJzZUV4cChleHApO1xuICAgIHZhciBtZW1iZXJFeHAgPSBhc3QuZ2V0TWVtYmVyRXhwcmVzc2lvbigpO1xuXG4gICAgaWYgKG1lbWJlckV4cCA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihleHAgKyAnaXMgbm90IHZhbGlkIG1lbWJlciBleHByZXNzaW9uJyk7XG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICBvcHRpb25zLmNyZWF0ZUZpbHRlciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiBpbmplY3Rvci5jcmVhdGVGaWx0ZXIobmFtZSk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG9iajogbWVtYmVyRXhwLm9iamVjdC5jb21wdXRlKHNjb3BlLCBvcHRpb25zLCB7fSwgc2NvcGUpLFxuICAgICAgICBwcm9wOiBtZW1iZXJFeHAucHJvcGVydHkuY29tcHV0ZShzY29wZSwgb3B0aW9ucywge30sIHNjb3BlKVxuICAgIH1cbn1cblxuZXhwb3J0IHsgY29tcGlsZSwgY29tcHV0ZSwgcGFyc2UsIHBhcnNlRXhwLCBwYXJzZUFzc2lnbm1lbnQgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5JztcblxudmFyIE9QRVJBVE9SUyA9IHt9O1xudmFyIG9wZXJhdG9yVGV4dCA9ICcrIC0gKiAvICUgPT09ICE9PSA9PSAhPSA8ID4gPD0gPj0gJiYgfHwgISA9IHwnO1xudmFyIEVTQ0FQRSA9IHsgJ24nOiAnXFxuJywgJ2YnOiAnXFxmJywgJ3InOiAnXFxyJywgJ3QnOiAnXFx0JywgJ3YnOiAnXFx2JywgJ1xcJyc6ICdcXCcnLCAnXCInOiAnXCInIH07XG5cbm9wZXJhdG9yVGV4dC5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKG9wZXJhdG9yKSB7XG4gICAgT1BFUkFUT1JTW29wZXJhdG9yXSA9IHRydWU7XG59KTtcblxuZnVuY3Rpb24gTGV4ZXIob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG59XG5cbkxleGVyLnByb3RvdHlwZS5sZXggPSBmdW5jdGlvbiAodGV4dCkge1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgdGhpcy5pbmRleCA9IDA7XG4gICAgdGhpcy50b2tlbnMgPSBbXTtcblxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICBpZiAoY2ggPT09ICdcIicgfHwgY2ggPT09ICdcXCcnKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWRTdHJpbmcoY2gpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNOdW1iZXIoY2gpIHx8IGNoID09PSAnLicgJiYgdGhpcy5pc051bWJlcih0aGlzLnBlZWsoKSkpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZE51bWJlcigpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNJZGVudGlmaWVyU3RhcnQodGhpcy5wZWVrTXVsdGljaGFyKCkpKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWRJZGVudCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXMoY2gsICcoKXt9W10uLDs6PycpKSB7XG4gICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IGNoIH0pO1xuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNXaGl0ZXNwYWNlKGNoKSkge1xuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGNoMiA9IGNoICsgdGhpcy5wZWVrKCk7XG4gICAgICAgICAgICB2YXIgY2gzID0gY2gyICsgdGhpcy5wZWVrKDIpO1xuICAgICAgICAgICAgdmFyIG9wMSA9IE9QRVJBVE9SU1tjaF07XG4gICAgICAgICAgICB2YXIgb3AyID0gT1BFUkFUT1JTW2NoMl07XG4gICAgICAgICAgICB2YXIgb3AzID0gT1BFUkFUT1JTW2NoM107XG4gICAgICAgICAgICBpZiAob3AxIHx8IG9wMiB8fCBvcDMpIHtcbiAgICAgICAgICAgICAgICB2YXIgdG9rZW4gPSBvcDMgPyBjaDMgOiAob3AyID8gY2gyIDogY2gpO1xuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogdG9rZW4sIG9wZXJhdG9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gdG9rZW4ubGVuZ3RoO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ1VuZXhwZWN0ZWQgbmV4dCBjaGFyYWN0ZXIgJywgdGhpcy5pbmRleCwgdGhpcy5pbmRleCArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnRva2Vucztcbn07XG5cbkxleGVyLnByb3RvdHlwZS5pcyA9IGZ1bmN0aW9uIChjaCwgY2hhcnMpIHtcbiAgICByZXR1cm4gY2hhcnMuaW5kZXhPZihjaCkgIT09IC0xO1xufTtcblxuTGV4ZXIucHJvdG90eXBlLnBlZWsgPSBmdW5jdGlvbiAoaSkge1xuICAgIHZhciBudW0gPSBpIHx8IDE7XG4gICAgcmV0dXJuICh0aGlzLmluZGV4ICsgbnVtIDwgdGhpcy50ZXh0Lmxlbmd0aCkgPyB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXggKyBudW0pIDogZmFsc2U7XG59O1xuXG5MZXhlci5wcm90b3R5cGUuaXNOdW1iZXIgPSBmdW5jdGlvbiAoY2gpIHtcbiAgICByZXR1cm4gKCcwJyA8PSBjaCAmJiBjaCA8PSAnOScpICYmIHR5cGVvZiBjaCA9PT0gJ3N0cmluZyc7XG59O1xuXG5MZXhlci5wcm90b3R5cGUuaXNXaGl0ZXNwYWNlID0gZnVuY3Rpb24gKGNoKSB7XG4gICAgLy8gSUUgdHJlYXRzIG5vbi1icmVha2luZyBzcGFjZSBhcyBcXHUwMEEwXG4gICAgcmV0dXJuIChjaCA9PT0gJyAnIHx8IGNoID09PSAnXFxyJyB8fCBjaCA9PT0gJ1xcdCcgfHxcbiAgICAgICAgY2ggPT09ICdcXG4nIHx8IGNoID09PSAnXFx2JyB8fCBjaCA9PT0gJ1xcdTAwQTAnKTtcbn07XG5cbkxleGVyLnByb3RvdHlwZS5pc0lkZW50aWZpZXJTdGFydCA9IGZ1bmN0aW9uIChjaCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyU3RhcnQgP1xuICAgICAgICB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyU3RhcnQoY2gsIHRoaXMuY29kZVBvaW50QXQoY2gpKSA6XG4gICAgICAgIHRoaXMuaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCk7XG59O1xuXG5MZXhlci5wcm90b3R5cGUuaXNWYWxpZElkZW50aWZpZXJTdGFydCA9IGZ1bmN0aW9uIChjaCkge1xuICAgIHJldHVybiAoJ2EnIDw9IGNoICYmIGNoIDw9ICd6JyB8fFxuICAgICAgICAnQScgPD0gY2ggJiYgY2ggPD0gJ1onIHx8XG4gICAgICAgICdfJyA9PT0gY2ggfHwgY2ggPT09ICckJyk7XG59O1xuXG5MZXhlci5wcm90b3R5cGUuaXNJZGVudGlmaWVyQ29udGludWUgPSBmdW5jdGlvbiAoY2gpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllckNvbnRpbnVlID9cbiAgICAgICAgdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllckNvbnRpbnVlKGNoLCB0aGlzLmNvZGVQb2ludEF0KGNoKSkgOlxuICAgICAgICB0aGlzLmlzVmFsaWRJZGVudGlmaWVyQ29udGludWUoY2gpO1xufTtcblxuTGV4ZXIucHJvdG90eXBlLmlzVmFsaWRJZGVudGlmaWVyQ29udGludWUgPSBmdW5jdGlvbiAoY2gsIGNwKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCwgY3ApIHx8IHRoaXMuaXNOdW1iZXIoY2gpO1xufTtcblxuTGV4ZXIucHJvdG90eXBlLmNvZGVQb2ludEF0ID0gZnVuY3Rpb24gKGNoKSB7XG4gICAgaWYgKGNoLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gY2guY2hhckNvZGVBdCgwKTtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcbiAgICByZXR1cm4gKGNoLmNoYXJDb2RlQXQoMCkgPDwgMTApICsgY2guY2hhckNvZGVBdCgxKSAtIDB4MzVGREMwMDtcbn07XG5cbkxleGVyLnByb3RvdHlwZS5wZWVrTXVsdGljaGFyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgdmFyIHBlZWsgPSB0aGlzLnBlZWsoKTtcbiAgICBpZiAoIXBlZWspIHtcbiAgICAgICAgcmV0dXJuIGNoO1xuICAgIH1cbiAgICB2YXIgY3AxID0gY2guY2hhckNvZGVBdCgwKTtcbiAgICB2YXIgY3AyID0gcGVlay5jaGFyQ29kZUF0KDApO1xuICAgIGlmIChjcDEgPj0gMHhEODAwICYmIGNwMSA8PSAweERCRkYgJiYgY3AyID49IDB4REMwMCAmJiBjcDIgPD0gMHhERkZGKSB7XG4gICAgICAgIHJldHVybiBjaCArIHBlZWs7XG4gICAgfVxuICAgIHJldHVybiBjaDtcbn07XG5cbkxleGVyLnByb3RvdHlwZS5pc0V4cE9wZXJhdG9yID0gZnVuY3Rpb24gKGNoKSB7XG4gICAgcmV0dXJuIChjaCA9PT0gJy0nIHx8IGNoID09PSAnKycgfHwgdGhpcy5pc051bWJlcihjaCkpO1xufTtcblxuTGV4ZXIucHJvdG90eXBlLnRocm93RXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IsIHN0YXJ0LCBlbmQpIHtcbiAgICBlbmQgPSBlbmQgfHwgdGhpcy5pbmRleDtcbiAgICB2YXIgY29sU3RyID0gKHV0aWxzLmlzRGVmaW5lZChzdGFydCkgPyAncyAnICsgc3RhcnQgKyAnLScgKyB0aGlzLmluZGV4ICsgJyBbJyArIHRoaXMudGV4dC5zdWJzdHJpbmcoc3RhcnQsIGVuZCkgKyAnXScgOiAnICcgKyBlbmQpO1xuICAgIHRocm93IG5ldyBFcnJvcignTGV4ZXIgRXJyb3I6ICcgKyBlcnJvciArICcgYXQgY29sdW1uJyArIGNvbFN0ciArICcgaW4gZXhwcmVzc2lvbiBbJyArIHRoaXMudGV4dCArICddLicpO1xufTtcblxuTGV4ZXIucHJvdG90eXBlLnJlYWROdW1iZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG51bWJlciA9ICcnO1xuICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaCA9IHV0aWxzLmxvd2VyY2FzZSh0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpKTtcbiAgICAgICAgaWYgKGNoID09PSAnLicgfHwgdGhpcy5pc051bWJlcihjaCkpIHtcbiAgICAgICAgICAgIG51bWJlciArPSBjaDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwZWVrQ2ggPSB0aGlzLnBlZWsoKTtcbiAgICAgICAgICAgIGlmIChjaCA9PT0gJ2UnICYmIHRoaXMuaXNFeHBPcGVyYXRvcihwZWVrQ2gpKSB7XG4gICAgICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzRXhwT3BlcmF0b3IoY2gpICYmXG4gICAgICAgICAgICAgICAgcGVla0NoICYmIHRoaXMuaXNOdW1iZXIocGVla0NoKSAmJlxuICAgICAgICAgICAgICAgIG51bWJlci5jaGFyQXQobnVtYmVyLmxlbmd0aCAtIDEpID09PSAnZScpIHtcbiAgICAgICAgICAgICAgICBudW1iZXIgKz0gY2g7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNFeHBPcGVyYXRvcihjaCkgJiZcbiAgICAgICAgICAgICAgICAoIXBlZWtDaCB8fCAhdGhpcy5pc051bWJlcihwZWVrQ2gpKSAmJlxuICAgICAgICAgICAgICAgIG51bWJlci5jaGFyQXQobnVtYmVyLmxlbmd0aCAtIDEpID09PSAnZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0ludmFsaWQgZXhwb25lbnQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgIH1cbiAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgaW5kZXg6IHN0YXJ0LFxuICAgICAgICB0ZXh0OiBudW1iZXIsXG4gICAgICAgIGNvbnN0YW50OiB0cnVlLFxuICAgICAgICB2YWx1ZTogTnVtYmVyKG51bWJlcilcbiAgICB9KTtcbn07XG5cbkxleGVyLnByb3RvdHlwZS5yZWFkSWRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICB0aGlzLmluZGV4ICs9IHRoaXMucGVla011bHRpY2hhcigpLmxlbmd0aDtcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoID0gdGhpcy5wZWVrTXVsdGljaGFyKCk7XG4gICAgICAgIGlmICghdGhpcy5pc0lkZW50aWZpZXJDb250aW51ZShjaCkpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5kZXggKz0gY2gubGVuZ3RoO1xuICAgIH1cbiAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgaW5kZXg6IHN0YXJ0LFxuICAgICAgICB0ZXh0OiB0aGlzLnRleHQuc2xpY2Uoc3RhcnQsIHRoaXMuaW5kZXgpLFxuICAgICAgICBpZGVudGlmaWVyOiB0cnVlXG4gICAgfSk7XG59O1xuXG5MZXhlci5wcm90b3R5cGUucmVhZFN0cmluZyA9IGZ1bmN0aW9uIChxdW90ZSkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgdGhpcy5pbmRleCsrO1xuICAgIHZhciBzdHJpbmcgPSAnJztcbiAgICB2YXIgcmF3U3RyaW5nID0gcXVvdGU7XG4gICAgdmFyIGVzY2FwZSA9IGZhbHNlO1xuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICByYXdTdHJpbmcgKz0gY2g7XG4gICAgICAgIGlmIChlc2NhcGUpIHtcbiAgICAgICAgICAgIGlmIChjaCA9PT0gJ3UnKSB7XG4gICAgICAgICAgICAgICAgdmFyIGhleCA9IHRoaXMudGV4dC5zdWJzdHJpbmcodGhpcy5pbmRleCArIDEsIHRoaXMuaW5kZXggKyA1KTtcbiAgICAgICAgICAgICAgICBpZiAoIWhleC5tYXRjaCgvW1xcZGEtZl17NH0vaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdJbnZhbGlkIHVuaWNvZGUgZXNjYXBlIFtcXFxcdScgKyBoZXggKyAnXScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IDQ7XG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoaGV4LCAxNikpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVwID0gRVNDQVBFW2NoXTtcbiAgICAgICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmcgKyAocmVwIHx8IGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVzY2FwZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGNoID09PSAnXFxcXCcpIHtcbiAgICAgICAgICAgIGVzY2FwZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoY2ggPT09IHF1b3RlKSB7XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpbmRleDogc3RhcnQsXG4gICAgICAgICAgICAgICAgdGV4dDogcmF3U3RyaW5nLFxuICAgICAgICAgICAgICAgIGNvbnN0YW50OiB0cnVlLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBzdHJpbmdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RyaW5nICs9IGNoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICB9XG4gICAgdGhpcy50aHJvd0Vycm9yKCdVbnRlcm1pbmF0ZWQgcXVvdGUnLCBzdGFydCk7XG59O1xuXG5leHBvcnQgeyBMZXhlciB9OyIsImNsYXNzIE51bGxPYmplY3Qge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBOdWxsT2JqZWN0IH07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eSc7XG5pbXBvcnQge2lzRmlsdGVyfSBmcm9tICcuLi92aWV3JztcbmltcG9ydCB7TnVsbE9iamVjdH0gZnJvbSAnLi9udWxsLW9iamVjdCc7XG5cbnZhciBBU1QgPSB7fTtcbkFTVC5Qcm9ncmFtID0gJ1Byb2dyYW0nO1xuQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQgPSAnRXhwcmVzc2lvblN0YXRlbWVudCc7XG5BU1QuQXNzaWdubWVudEV4cHJlc3Npb24gPSAnQXNzaWdubWVudEV4cHJlc3Npb24nO1xuQVNULkNvbmRpdGlvbmFsRXhwcmVzc2lvbiA9ICdDb25kaXRpb25hbEV4cHJlc3Npb24nO1xuQVNULkxvZ2ljYWxFeHByZXNzaW9uID0gJ0xvZ2ljYWxFeHByZXNzaW9uJztcbkFTVC5CaW5hcnlFeHByZXNzaW9uID0gJ0JpbmFyeUV4cHJlc3Npb24nO1xuQVNULlVuYXJ5RXhwcmVzc2lvbiA9ICdVbmFyeUV4cHJlc3Npb24nO1xuQVNULkNhbGxFeHByZXNzaW9uID0gJ0NhbGxFeHByZXNzaW9uJztcbkFTVC5NZW1iZXJFeHByZXNzaW9uID0gJ01lbWJlckV4cHJlc3Npb24nO1xuQVNULklkZW50aWZpZXIgPSAnSWRlbnRpZmllcic7XG5BU1QuTGl0ZXJhbCA9ICdMaXRlcmFsJztcbkFTVC5BcnJheUV4cHJlc3Npb24gPSAnQXJyYXlFeHByZXNzaW9uJztcbkFTVC5Qcm9wZXJ0eSA9ICdQcm9wZXJ0eSc7XG5BU1QuT2JqZWN0RXhwcmVzc2lvbiA9ICdPYmplY3RFeHByZXNzaW9uJztcblxuZnVuY3Rpb24gQXN0Tm9kZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBbXTtcbn1cblxuQXN0Tm9kZS5wcm90b3R5cGUuYXBwZW5kQ2hpbGQgPSBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICB0aGlzLmNoaWxkTm9kZXMucHVzaChjaGlsZCk7XG59O1xuXG5Bc3ROb2RlLnByb3RvdHlwZS5jb21wdXRlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHJldHVybiBjaGlsZC5jb21wdXRlKHNjb3BlLCBvcHRpb25zIHx8IHt9LCBjb250ZXh0KTtcbiAgICB9KTtcbn07XG5cbi8vIGhhcyBjb25kaXRpb24gb3IgY2FsbCBleHByZXNzaW9uXG5Bc3ROb2RlLnByb3RvdHlwZS5oYXNDQyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLnNvbWUoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHJldHVybiBjaGlsZC5oYXNDQygpO1xuICAgIH0pO1xufTtcblxudXRpbHMuaW5oZXJpdChQcm9ncmFtTm9kZSwgQXN0Tm9kZSk7XG5mdW5jdGlvbiBQcm9ncmFtTm9kZSgpIHtcbiAgICBQcm9ncmFtTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5Qcm9ncmFtKTtcbn1cblxuUHJvZ3JhbU5vZGUucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5jaGlsZE5vZGVzWzBdLmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMgfHwge30pO1xuXG4gICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIE51bGxPYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblByb2dyYW1Ob2RlLnByb3RvdHlwZS5nZXRNZW1iZXJFeHByZXNzaW9uID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXNbMF0uZ2V0TWVtYmVyRXhwcmVzc2lvbigpO1xufTtcblxudXRpbHMuaW5oZXJpdChFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSwgQXN0Tm9kZSk7XG5mdW5jdGlvbiBFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSgpIHtcbiAgICBFeHByZXNzaW9uU3RhdGVtZW50Tm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5FeHByZXNzaW9uU3RhdGVtZW50KTtcbn1cblxuRXhwcmVzc2lvblN0YXRlbWVudE5vZGUucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzWzBdLmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMgfHwge30sIGNvbnRleHQpO1xufTtcblxuRXhwcmVzc2lvblN0YXRlbWVudE5vZGUucHJvdG90eXBlLmdldE1lbWJlckV4cHJlc3Npb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNoaWxkID0gdGhpcy5jaGlsZE5vZGVzWzBdO1xuXG4gICAgaWYoY2hpbGQgaW5zdGFuY2VvZiBNZW1iZXJFeHByZXNzaW9uTm9kZSl7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbnV0aWxzLmluaGVyaXQoQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcbmZ1bmN0aW9uIEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZShsZWZ0LCByaWdodCwgb3BlcmF0b3IpIHtcbiAgICBBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuQXNzaWdubWVudEV4cHJlc3Npb24pO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbn1cblxuQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS5jb21wdXRlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zKSB7XG4gICAgdmFyIHRhcmdldCA9IHRoaXMubGVmdC5jb21wdXRlKHNjb3BlLCBvcHRpb25zLCB7IGFzc2lnbm1lbnRMZWZ0OiB0cnVlIH0pO1xuICAgIHZhciB2YWx1ZSA9IHRoaXMucmlnaHQuY29tcHV0ZShzY29wZSwgb3B0aW9ucyk7XG4gICAgdGFyZ2V0Lm9ialt0YXJnZXQucHJvcF0gPSB2YWx1ZTtcbn07XG5cbnV0aWxzLmluaGVyaXQoQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XG5mdW5jdGlvbiBDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlKHRlc3QsIGFsdGVybmF0ZSwgY29uc2VxdWVudCkge1xuICAgIENvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uKTtcbiAgICB0aGlzLnRlc3QgPSB0ZXN0O1xuICAgIHRoaXMuYWx0ZXJuYXRlID0gYWx0ZXJuYXRlO1xuICAgIHRoaXMuY29uc2VxdWVudCA9IGNvbnNlcXVlbnQ7XG59XG5cbkNvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy50ZXN0LmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsdGVybmF0ZS5jb21wdXRlKHNjb3BlLCBvcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29uc2VxdWVudC5jb21wdXRlKHNjb3BlLCBvcHRpb25zKTtcbn07XG5cbi8vIGhhcyBjb25kaXRpb24gb3IgY2FsbCBleHByZXNzaW9uXG5Db25kaXRpb25hbEV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS5oYXNDQyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cbnV0aWxzLmluaGVyaXQoTG9naWNhbEV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcbmZ1bmN0aW9uIExvZ2ljYWxFeHByZXNzaW9uTm9kZShvcGVyYXRvciwgbGVmdCwgcmlnaHQpIHtcbiAgICBMb2dpY2FsRXhwcmVzc2lvbk5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuTG9naWNhbEV4cHJlc3Npb24pO1xuICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbn1cblxuTG9naWNhbEV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS5jb21wdXRlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zKSB7XG4gICAgdmFyIHJlc3VsdDtcbiAgICB2YXIgbGVmdFZhbHVlID0gdGhpcy5sZWZ0LmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMpO1xuICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5yaWdodC5jb21wdXRlKHNjb3BlLCBvcHRpb25zKTtcblxuICAgIHN3aXRjaCAodGhpcy5vcGVyYXRvcikge1xuICAgICAgICBjYXNlICcmJic6XG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJiYgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd8fCc6XG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJiYgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG51dGlscy5pbmhlcml0KEJpbmFyeUV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcbmZ1bmN0aW9uIEJpbmFyeUV4cHJlc3Npb25Ob2RlKG9wZXJhdG9yLCBsZWZ0LCByaWdodCkge1xuICAgIEJpbmFyeUV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkJpbmFyeUV4cHJlc3Npb24pO1xuICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbn1cblxuQmluYXJ5RXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgcmVzdWx0O1xuICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmxlZnQuY29tcHV0ZShzY29wZSwgb3B0aW9ucyk7XG4gICAgdmFyIHJpZ2h0VmFsdWUgPSB0aGlzLnJpZ2h0LmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMpO1xuXG4gICAgLy8gJysnLCAnLScsICcqJywgJy8nLCAnJScsICc8JywgJz4nLCAnPD0nLCAnPj0nLCAnPT0nLCAnIT0nLCAnPT09JywgJyE9PSdcbiAgICBzd2l0Y2ggKHRoaXMub3BlcmF0b3IpIHtcbiAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgKyByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIC0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAqIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgLyByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJyUnOlxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICUgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA8IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnPic6XG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPiByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJzw9JzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA8PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJz49JzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA+PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJz09JzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA9PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJyE9JzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAhPSByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJz09PSc6XG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPT09IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnIT09JzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAhPT0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG51dGlscy5pbmhlcml0KFVuYXJ5RXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xuZnVuY3Rpb24gVW5hcnlFeHByZXNzaW9uTm9kZShvcGVyYXRvciwgYXJnKSB7XG4gICAgVW5hcnlFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5VbmFyeUV4cHJlc3Npb24pO1xuICAgIHRoaXMucHJlZml4ID0gdHJ1ZTtcbiAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgdGhpcy5hcmcgPSBhcmc7XG59XG5cblVuYXJ5RXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgcmVzdWx0LCB2YWx1ZSA9IHRoaXMuYXJnLmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMpO1xuXG4gICAgc3dpdGNoICh0aGlzLm9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICByZXN1bHQgPSAtdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnISc6XG4gICAgICAgICAgICByZXN1bHQgPSAhdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxudXRpbHMuaW5oZXJpdChMaXRlcmFsTm9kZSwgQXN0Tm9kZSk7XG5mdW5jdGlvbiBMaXRlcmFsTm9kZSh2YWx1ZSkge1xuICAgIExpdGVyYWxOb2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkxpdGVyYWwpO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbn1cblxuTGl0ZXJhbE5vZGUucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG59O1xuXG5MaXRlcmFsTm9kZS5wcm90b3R5cGUudG9UZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xufTtcblxudXRpbHMuaW5oZXJpdChDYWxsRXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xuZnVuY3Rpb24gQ2FsbEV4cHJlc3Npb25Ob2RlKGNhbGxlZSwgYXJncykge1xuICAgIENhbGxFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5DYWxsRXhwcmVzc2lvbik7XG4gICAgdGhpcy5jYWxsZWUgPSBjYWxsZWU7XG4gICAgdGhpcy5hcmdzID0gYXJncztcbiAgICB0aGlzLmZpbHRlciA9IGZhbHNlO1xufVxuXG5DYWxsRXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29udGV4dCA9IHRoaXMuY2FsbGVlLmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMsIHtjYWxsZWU6IHRydWV9KTtcbiAgICB2YXIgYXJnVmFsdWVzID0gdGhpcy5hcmdzLm1hcChmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIHJldHVybiBhcmcuY29tcHV0ZShzY29wZSwgb3B0aW9ucyk7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5maWx0ZXIpIHtcbiAgICAgICAgdmFyIGZpbHRlcklucyA9IG9wdGlvbnMuY3JlYXRlRmlsdGVyKGNvbnRleHQucHJvcCk7XG4gICAgICAgIGlmIChpc0ZpbHRlcihmaWx0ZXJJbnMpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVySW5zLiRleGVjdXRlLmFwcGx5KGZpbHRlcklucywgYXJnVmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZpbHRlciBcIicgKyBjb250ZXh0LnByb3AgKyAnXCIgaXMgbm90IGRlZmluZWQnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBmbiA9IGNvbnRleHQub2JqW2NvbnRleHQucHJvcF07XG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGZuKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KGNvbnRleHQub2JqLCBhcmdWYWx1ZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihjb250ZXh0LnByb3AgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgfVxufTtcblxuLy8gaGFzIGNvbmRpdGlvbiBvciBjYWxsIGV4cHJlc3Npb25cbkNhbGxFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuaGFzQ0MgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICF0aGlzLmZpbHRlcjtcbn07XG5cbnV0aWxzLmluaGVyaXQoTWVtYmVyRXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xuZnVuY3Rpb24gTWVtYmVyRXhwcmVzc2lvbk5vZGUob2JqZWN0LCBwcm9wZXJ0eSwgY29tcHV0ZWQpIHtcbiAgICBNZW1iZXJFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5NZW1iZXJFeHByZXNzaW9uKTtcbiAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XG4gICAgdGhpcy5jb21wdXRlZCA9IGNvbXB1dGVkO1xuICAgIHRoaXMuYWxsb3dOdWxsID0gZmFsc2U7XG59XG5cbk1lbWJlckV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS5jb21wdXRlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zLCBjb250ZXh0KSB7XG4gICAgdmFyIG9iaiA9IHRoaXMub2JqZWN0LmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMpO1xuXG4gICAgaWYgKG9iaiA9PSBudWxsICYmIHRoaXMub2JqZWN0LmFsbG93TnVsbCkge1xuICAgICAgICBvYmogPSBuZXcgTnVsbE9iamVjdCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbXB1dGVkKSB7XG4gICAgICAgIHZhciBwcm9wID0gdGhpcy5wcm9wZXJ0eS5jb21wdXRlKHNjb3BlLCBvcHRpb25zLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHV0aWxzLmlzQXJyYXkob3B0aW9ucy5tZW1iZXJzKSkge1xuICAgICAgICAgICAgb3B0aW9ucy5tZW1iZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIHRhcmdldDogb2JqLFxuICAgICAgICAgICAgICAgIHRhcmdldEtleTogdGhpcy5vYmplY3QudG9UZXh0KCksXG4gICAgICAgICAgICAgICAga2V5OiBwcm9wXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqW3Byb3BdO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnByb3BlcnR5LmNvbXB1dGUob2JqLCBvcHRpb25zLCBjb250ZXh0LCB0aGlzLm9iamVjdCk7XG59O1xuXG5NZW1iZXJFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUudG9UZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm9iamVjdC50b1RleHQoKSArICcuJyArIHRoaXMucHJvcGVydHkudG9UZXh0KCk7XG59O1xuXG51dGlscy5pbmhlcml0KElkZW50aWZpZXJOb2RlLCBBc3ROb2RlKTtcbmZ1bmN0aW9uIElkZW50aWZpZXJOb2RlKG5hbWUpIHtcbiAgICBJZGVudGlmaWVyTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5JZGVudGlmaWVyKTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYWxsb3dOdWxsID0gZmFsc2U7XG59XG5cbklkZW50aWZpZXJOb2RlLnByb3RvdHlwZS5jb21wdXRlID0gZnVuY3Rpb24gKG9iaiwgb3B0aW9ucywgY29udGV4dCwgb2JqTm9kZSkge1xuICAgIGlmIChjb250ZXh0KSB7XG4gICAgICAgIGlmIChjb250ZXh0LmFzc2lnbm1lbnRMZWZ0IHx8IGNvbnRleHQuY2FsbGVlKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG9iajogb2JqLFxuICAgICAgICAgICAgICAgIHByb3A6IHRoaXMubmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb250ZXh0LnByb3BlcnR5S2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IG9ialt0aGlzLm5hbWVdO1xuXG4gICAgaWYgKHV0aWxzLmlzQXJyYXkob3B0aW9ucy5tZW1iZXJzKSkge1xuICAgICAgICBvcHRpb25zLm1lbWJlcnMucHVzaCh7XG4gICAgICAgICAgICB0YXJnZXQ6IG9iaixcbiAgICAgICAgICAgIHRhcmdldEtleTogb2JqTm9kZSAhPSBudWxsID8gb2JqTm9kZS50b1RleHQoKSA6IG51bGwsXG4gICAgICAgICAgICBrZXk6IHRoaXMubmFtZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0ID09IG51bGwgJiYgb3B0aW9ucy5sb2NhbHMpIHtcbiAgICAgICAgcmVzdWx0ID0gb3B0aW9ucy5sb2NhbHNbdGhpcy5uYW1lXTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuSWRlbnRpZmllck5vZGUucHJvdG90eXBlLnRvVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xufTtcblxudXRpbHMuaW5oZXJpdChBcnJheUV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcbmZ1bmN0aW9uIEFycmF5RXhwcmVzc2lvbk5vZGUoKSB7XG4gICAgQXJyYXlFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5BcnJheUV4cHJlc3Npb24pO1xufVxuXG51dGlscy5pbmhlcml0KFByb3BlcnR5Tm9kZSwgQXN0Tm9kZSk7XG5mdW5jdGlvbiBQcm9wZXJ0eU5vZGUoKSB7XG4gICAgUHJvcGVydHlOb2RlLnN1cGVyLmNhbGwodGhpcywgQVNULlByb3BlcnR5KTtcbiAgICB0aGlzLmtpbmQgPSAnaW5pdCc7XG4gICAgdGhpcy5rZXkgPSBudWxsO1xuICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgIHRoaXMuY29tcHV0ZWQgPSBmYWxzZTtcbn1cblxuUHJvcGVydHlOb2RlLnByb3RvdHlwZS5jb21wdXRlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAga2V5OiB0aGlzLmtleS5jb21wdXRlKHNjb3BlLCBvcHRpb25zLCB7IHByb3BlcnR5S2V5OiB0cnVlIH0pLFxuICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZS5jb21wdXRlKHNjb3BlLCBvcHRpb25zKVxuICAgIH07XG59O1xuXG51dGlscy5pbmhlcml0KE9iamVjdEV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcbmZ1bmN0aW9uIE9iamVjdEV4cHJlc3Npb25Ob2RlKHByb3BlcnRpZXMpIHtcbiAgICBPYmplY3RFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5PYmplY3RFeHByZXNzaW9uKTtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xufVxuXG5PYmplY3RFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcHV0ZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xuICAgIHZhciByZXN1bHQgPSB7fTtcblxuICAgIHRoaXMucHJvcGVydGllcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHZhciBkZWYgPSBpdGVtLmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMpO1xuICAgICAgICByZXN1bHRbZGVmLmtleV0gPSBkZWYudmFsdWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuZnVuY3Rpb24gaXNBc3NpZ25hYmxlKGFzdCkge1xuICAgIHJldHVybiBhc3QudHlwZSA9PT0gQVNULklkZW50aWZpZXIgfHwgYXN0LnR5cGUgPT09IEFTVC5NZW1iZXJFeHByZXNzaW9uO1xufVxuXG5mdW5jdGlvbiBQYXJzZXIobGV4ZXIsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmxleGVyID0gbGV4ZXI7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbn1cblxuUGFyc2VyLnByb3RvdHlwZS50aHJvd0Vycm9yID0gZnVuY3Rpb24gKG1zZywgdG9rZW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1N5bnRheCBFcnJvcjogVG9rZW4gXFwnJyArIHRva2VuLnRleHQgKyAnXFwnJyArIG1zZyArICcgYXQgY29sdW1uICcgKyAodG9rZW4uaW5kZXggKyAxKSArXG4gICAgICAgICcgb2YgdGhlIGV4cHJlc3Npb24gWycgKyB0aGlzLnRleHQgKyAnXSBzdGFydGluZyBhdCBbJyArIHRoaXMudGV4dC5zdWJzdHJpbmcodG9rZW4uaW5kZXgpICsgJ10uJyk7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIHRoaXMudG9rZW5zID0gdGhpcy5sZXhlci5sZXgodGV4dCk7XG5cbiAgICB2YXIgdmFsdWUgPSB0aGlzLnByb2dyYW0oKTtcblxuICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpcyBhbiB1bmV4cGVjdGVkIHRva2VuJywgdGhpcy50b2tlbnNbMF0pO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbn07XG5cblBhcnNlci5wcm90b3R5cGUucHJvZ3JhbSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvZ3JhbSA9IG5ldyBQcm9ncmFtTm9kZSgpO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggPiAwICYmICF0aGlzLnBlZWsoJ30nLCAnKScsICc7JywgJ10nKSkge1xuICAgICAgICAgICAgcHJvZ3JhbS5hcHBlbmRDaGlsZCh0aGlzLmV4cHJlc3Npb25TdGF0ZW1lbnQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmV4cGVjdCgnOycpKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvZ3JhbTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblBhcnNlci5wcm90b3R5cGUuZXhwcmVzc2lvblN0YXRlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXhwID0gbmV3IEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlKCk7XG4gICAgZXhwLmFwcGVuZENoaWxkKHRoaXMuZmlsdGVyQ2hhaW4oKSk7XG4gICAgcmV0dXJuIGV4cDtcbn07XG5cblBhcnNlci5wcm90b3R5cGUuZmlsdGVyQ2hhaW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxlZnQgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICB3aGlsZSAodGhpcy5leHBlY3QoJ3wnKSkge1xuICAgICAgICBsZWZ0ID0gdGhpcy5maWx0ZXIobGVmdCk7XG4gICAgfVxuICAgIHJldHVybiBsZWZ0O1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5leHByZXNzaW9uID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmFzc2lnbm1lbnQoKTtcbn07XG5cblBhcnNlci5wcm90b3R5cGUuYXNzaWdubWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy50ZXJuYXJ5KCk7XG4gICAgaWYgKHRoaXMuZXhwZWN0KCc9JykpIHtcbiAgICAgICAgaWYgKCFpc0Fzc2lnbmFibGUocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcnlpbmcgdG8gYXNzaWduIGEgdmFsdWUgdG8gYSBub24gbC12YWx1ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0ID0gbmV3IEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZShyZXN1bHQsIHRoaXMuYXNzaWdubWVudCgpLCAnPScpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS50ZXJuYXJ5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ZXN0ID0gdGhpcy5sb2dpY2FsT1IoKTtcbiAgICB2YXIgYWx0ZXJuYXRlO1xuICAgIHZhciBjb25zZXF1ZW50O1xuICAgIGlmICh0aGlzLmV4cGVjdCgnPycpKSB7XG4gICAgICAgIGFsdGVybmF0ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICBpZiAodGhpcy5jb25zdW1lKCc6JykpIHtcbiAgICAgICAgICAgIGNvbnNlcXVlbnQgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSh0ZXN0LCBhbHRlcm5hdGUsIGNvbnNlcXVlbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0ZXN0O1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5sb2dpY2FsT1IgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxlZnQgPSB0aGlzLmxvZ2ljYWxBTkQoKTtcbiAgICB3aGlsZSAodGhpcy5leHBlY3QoJ3x8JykpIHtcbiAgICAgICAgbGVmdCA9IG5ldyBMb2dpY2FsRXhwcmVzc2lvbk5vZGUoJ3x8JywgbGVmdCwgdGhpcy5sb2dpY2FsQU5EKCkpO1xuICAgIH1cbiAgICByZXR1cm4gbGVmdDtcbn07XG5cblBhcnNlci5wcm90b3R5cGUubG9naWNhbEFORCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGVmdCA9IHRoaXMuZXF1YWxpdHkoKTtcbiAgICB3aGlsZSAodGhpcy5leHBlY3QoJyYmJykpIHtcbiAgICAgICAgbGVmdCA9IG5ldyBMb2dpY2FsRXhwcmVzc2lvbk5vZGUoJyYmJywgbGVmdCwgdGhpcy5lcXVhbGl0eSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIGxlZnQ7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLmVxdWFsaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsZWZ0ID0gdGhpcy5yZWxhdGlvbmFsKCk7XG4gICAgdmFyIHRva2VuO1xuICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnPT0nLCAnIT0nLCAnPT09JywgJyE9PScpKSkge1xuICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMucmVsYXRpb25hbCgpKTtcbiAgICB9XG4gICAgcmV0dXJuIGxlZnQ7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLnJlbGF0aW9uYWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxlZnQgPSB0aGlzLmFkZGl0aXZlKCk7XG4gICAgdmFyIHRva2VuO1xuICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnPCcsICc+JywgJzw9JywgJz49JykpKSB7XG4gICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy5hZGRpdGl2ZSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIGxlZnQ7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLmFkZGl0aXZlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsZWZ0ID0gdGhpcy5tdWx0aXBsaWNhdGl2ZSgpO1xuICAgIHZhciB0b2tlbjtcbiAgICB3aGlsZSAoKHRva2VuID0gdGhpcy5leHBlY3QoJysnLCAnLScpKSkge1xuICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMubXVsdGlwbGljYXRpdmUoKSk7XG4gICAgfVxuICAgIHJldHVybiBsZWZ0O1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5tdWx0aXBsaWNhdGl2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGVmdCA9IHRoaXMudW5hcnkoKTtcbiAgICB2YXIgdG9rZW47XG4gICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCcqJywgJy8nLCAnJScpKSkge1xuICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMudW5hcnkoKSk7XG4gICAgfVxuICAgIHJldHVybiBsZWZ0O1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS51bmFyeSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdG9rZW47XG4gICAgaWYgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCcrJywgJy0nLCAnIScpKSkge1xuICAgICAgICByZXR1cm4gbmV3IFVuYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgdGhpcy51bmFyeSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmltYXJ5KCk7XG4gICAgfVxufTtcblxuUGFyc2VyLnByb3RvdHlwZS5wcmltYXJ5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcmltYXJ5O1xuICAgIGlmICh0aGlzLmV4cGVjdCgnKCcpKSB7XG4gICAgICAgIHByaW1hcnkgPSB0aGlzLmZpbHRlckNoYWluKCk7XG4gICAgICAgIHRoaXMuY29uc3VtZSgnKScpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5leHBlY3QoJ1snKSkge1xuICAgICAgICBwcmltYXJ5ID0gdGhpcy5hcnJheURlY2xhcmF0aW9uKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmV4cGVjdCgneycpKSB7XG4gICAgICAgIHByaW1hcnkgPSB0aGlzLm9iamVjdCgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmxpdGVyYWxzLmhhc093blByb3BlcnR5KHRoaXMucGVlaygpLnRleHQpKSB7XG4gICAgICAgIHByaW1hcnkgPSBuZXcgTGl0ZXJhbE5vZGUodGhpcy5vcHRpb25zLmxpdGVyYWxzW3RoaXMuY29uc3VtZSgpLnRleHRdKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygpLmlkZW50aWZpZXIpIHtcbiAgICAgICAgcHJpbWFyeSA9IHRoaXMuaWRlbnRpZmllcigpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCkuY29uc3RhbnQpIHtcbiAgICAgICAgcHJpbWFyeSA9IHRoaXMuY29uc3RhbnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRocm93RXJyb3IoJ25vdCBhIHByaW1hcnkgZXhwcmVzc2lvbicsIHRoaXMucGVlaygpKTtcbiAgICB9XG5cbiAgICB2YXIgbmV4dDtcbiAgICB3aGlsZSAodGhpcy5wZWVrKCcoJywgJ1snLCAnLicpIHx8ICh0aGlzLnBlZWsoJz8nKSAmJiB0aGlzLnBlZWtBaGVhZCgxLCAnLicpKSkge1xuICAgICAgICBpZiAodGhpcy5leHBlY3QoJz8nKSkge1xuICAgICAgICAgICAgcHJpbWFyeS5hbGxvd051bGwgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV4dCA9IHRoaXMuZXhwZWN0KCcoJywgJ1snLCAnLicpO1xuXG4gICAgICAgIGlmIChuZXh0LnRleHQgPT09ICcoJykge1xuICAgICAgICAgICAgcHJpbWFyeSA9IG5ldyBDYWxsRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5wYXJzZUFyZ3VtZW50cygpKTtcbiAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnKScpO1xuICAgICAgICB9IGVsc2UgaWYgKG5leHQudGV4dCA9PT0gJ1snKSB7XG4gICAgICAgICAgICBwcmltYXJ5ID0gbmV3IE1lbWJlckV4cHJlc3Npb25Ob2RlKHByaW1hcnksIHRoaXMuZXhwcmVzc2lvbigpLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnXScpO1xuICAgICAgICB9IGVsc2UgaWYgKG5leHQudGV4dCA9PT0gJy4nKSB7XG4gICAgICAgICAgICBwcmltYXJ5ID0gbmV3IE1lbWJlckV4cHJlc3Npb25Ob2RlKHByaW1hcnksIHRoaXMuaWRlbnRpZmllcigpLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0lNUE9TU0lCTEUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJpbWFyeTtcbn07XG5cblBhcnNlci5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24gKGJhc2VFeHByZXNzaW9uKSB7XG4gICAgdmFyIGFyZ3MgPSBbYmFzZUV4cHJlc3Npb25dLCBpZGVudGlmaWVycyA9IFt0aGlzLmlkZW50aWZpZXIoKV07XG5cbiAgICB3aGlsZSAodGhpcy5leHBlY3QoJy4nKSkge1xuICAgICAgICBpZGVudGlmaWVycy5wdXNoKHRoaXMuaWRlbnRpZmllcigpKTtcbiAgICB9XG5cbiAgICAvLyBwbHVzIG5hbWVzcGFjZVxuICAgIHZhciBlbnRpcmVOYW1lID0gaWRlbnRpZmllcnMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtLm5hbWU7XG4gICAgfSkuam9pbignLicpO1xuXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBDYWxsRXhwcmVzc2lvbk5vZGUobmV3IElkZW50aWZpZXJOb2RlKGVudGlyZU5hbWUpLCBhcmdzKTtcblxuICAgIHJlc3VsdC5maWx0ZXIgPSB0cnVlO1xuXG4gICAgd2hpbGUgKHRoaXMuZXhwZWN0KCc6JykpIHtcbiAgICAgICAgYXJncy5wdXNoKHRoaXMuZXhwcmVzc2lvbigpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5wYXJzZUFyZ3VtZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGlmICh0aGlzLnBlZWtUb2tlbigpLnRleHQgIT09ICcpJykge1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBhcmdzLnB1c2godGhpcy5maWx0ZXJDaGFpbigpKTtcbiAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XG4gICAgfVxuICAgIHJldHVybiBhcmdzO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5pZGVudGlmaWVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0b2tlbiA9IHRoaXMuY29uc3VtZSgpO1xuICAgIGlmICghdG9rZW4uaWRlbnRpZmllcikge1xuICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2lzIG5vdCBhIHZhbGlkIGlkZW50aWZpZXInLCB0b2tlbik7XG4gICAgfVxuICAgIHJldHVybiBuZXcgSWRlbnRpZmllck5vZGUodG9rZW4udGV4dCk7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLmNvbnN0YW50ID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFRPRE8gY2hlY2sgdGhhdCBpdCBpcyBhIGNvbnN0YW50XG4gICAgcmV0dXJuIG5ldyBMaXRlcmFsTm9kZSh0aGlzLmNvbnN1bWUoKS52YWx1ZSk7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLmFycmF5RGVjbGFyYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFyciA9IG5ldyBBcnJheUV4cHJlc3Npb25Ob2RlKCk7XG4gICAgaWYgKHRoaXMucGVla1Rva2VuKCkudGV4dCAhPT0gJ10nKSB7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoJ10nKSkge1xuICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQgdHJhaWxpbmcgY29tbWFzIHBlciBFUzUuMS5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFyci5hcHBlbmRDaGlsZCh0aGlzLmV4cHJlc3Npb24oKSk7XG4gICAgICAgIH0gd2hpbGUgKHRoaXMuZXhwZWN0KCcsJykpO1xuICAgIH1cbiAgICB0aGlzLmNvbnN1bWUoJ10nKTtcblxuICAgIHJldHVybiBhcnI7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLm9iamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvcGVydGllcyA9IFtdLCBwcm9wZXJ0eTtcbiAgICBpZiAodGhpcy5wZWVrVG9rZW4oKS50ZXh0ICE9PSAnfScpIHtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnfScpKSB7XG4gICAgICAgICAgICAgICAgLy8gU3VwcG9ydCB0cmFpbGluZyBjb21tYXMgcGVyIEVTNS4xLlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvcGVydHkgPSBuZXcgUHJvcGVydHlOb2RlKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5wZWVrKCkuY29uc3RhbnQpIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmNvbnN0YW50KCk7XG4gICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoKS5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHkua2V5ID0gdGhpcy5pZGVudGlmaWVyKCk7XG4gICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZWVrKCc6JykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCc6Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSBwcm9wZXJ0eS5rZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoJ1snKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnWycpO1xuICAgICAgICAgICAgICAgIHByb3BlcnR5LmtleSA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnXScpO1xuICAgICAgICAgICAgICAgIHByb3BlcnR5LmNvbXB1dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2ludmFsaWQga2V5JywgdGhpcy5wZWVrKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvcGVydGllcy5wdXNoKHByb3BlcnR5KTtcbiAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XG4gICAgfVxuICAgIHRoaXMuY29uc3VtZSgnfScpO1xuXG4gICAgcmV0dXJuIG5ldyBPYmplY3RFeHByZXNzaW9uTm9kZShwcm9wZXJ0aWVzKTtcbn07XG5cblBhcnNlci5wcm90b3R5cGUuY29uc3VtZSA9IGZ1bmN0aW9uIChlMSkge1xuICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIGVuZCBvZiBleHByZXNzaW9uOiAnICsgdGhpcy50ZXh0KTtcbiAgICB9XG5cbiAgICB2YXIgdG9rZW4gPSB0aGlzLmV4cGVjdChlMSk7XG4gICAgaWYgKCF0b2tlbikge1xuICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2lzIHVuZXhwZWN0ZWQsIGV4cGVjdGluZyBbJyArIGUxICsgJ10nLCB0aGlzLnBlZWsoKSk7XG4gICAgfVxuICAgIHJldHVybiB0b2tlbjtcbn07XG5cblBhcnNlci5wcm90b3R5cGUucGVla1Rva2VuID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIGVuZCBvZiBleHByZXNzaW9uOiAnICsgdGhpcy50ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zWzBdO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5wZWVrID0gZnVuY3Rpb24gKGUxLCBlMiwgZTMsIGU0KSB7XG4gICAgcmV0dXJuIHRoaXMucGVla0FoZWFkKDAsIGUxLCBlMiwgZTMsIGU0KTtcbn07XG5cblBhcnNlci5wcm90b3R5cGUucGVla0FoZWFkID0gZnVuY3Rpb24gKGksIGUxLCBlMiwgZTMsIGU0KSB7XG4gICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA+IGkpIHtcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy50b2tlbnNbaV07XG4gICAgICAgIHZhciB0ID0gdG9rZW4udGV4dDtcbiAgICAgICAgaWYgKHQgPT09IGUxIHx8IHQgPT09IGUyIHx8IHQgPT09IGUzIHx8IHQgPT09IGU0IHx8XG4gICAgICAgICAgICAoIWUxICYmICFlMiAmJiAhZTMgJiYgIWU0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cblBhcnNlci5wcm90b3R5cGUuZXhwZWN0ID0gZnVuY3Rpb24gKGUxLCBlMiwgZTMsIGU0KSB7XG4gICAgdmFyIHRva2VuID0gdGhpcy5wZWVrKGUxLCBlMiwgZTMsIGU0KTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgdGhpcy50b2tlbnMuc2hpZnQoKTtcbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgeyBQYXJzZXIgfTsiLCJleHBvcnQgKiBmcm9tICcuL3RlbXBsYXRlLWNhY2hlJztcclxuZXhwb3J0ICogZnJvbSAnLi9tb2RlbC1vcHRpb25zJzsiLCJpbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnLi4vdmlldyc7XHJcbmltcG9ydCB7IHNlcnZpY2UgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xyXG5cclxuQHNlcnZpY2Uoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJyRtb2RlbE9wdGlvbnMnXHJcbn0pXHJcbmNsYXNzIE1vZGVsT3B0aW9uc1NlcnZpY2UgZXh0ZW5kcyBTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jc3NDbGFzcyA9IHtcclxuICAgICAgICAgICAgcHJpc3RpbmU6ICduLXByaXN0aW5lJyxcclxuICAgICAgICAgICAgZGlydHk6ICduLWRpcnR5JyxcclxuICAgICAgICAgICAgdmFsaWQ6ICduLXZhbGlkJyxcclxuICAgICAgICAgICAgaW52YWxpZDogJ24taW52YWxpZCdcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgaHR0cEdldCB9IGZyb20gJy4uL3V0aWxpdHknO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJy4uL3ZpZXcnO1xuaW1wb3J0IHsgc2VydmljZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XG5cbkBzZXJ2aWNlKHtcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcbiAgICBzZWxlY3RvcjogJyR0ZW1wbGF0ZUNhY2hlJ1xufSlcbmNsYXNzIFRlbXBsYXRlQ2FjaGVTZXJ2aWNlIGV4dGVuZHMgU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHBsQ2FjaGUgPSB7fTtcbiAgICAgICAgdGhpcy5wcm9taXNlQ2FjaGUgPSB7fTtcbiAgICB9XG5cbiAgICBnZXRUcGxCeVVybCh1cmwpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLnRwbENhY2hlW3VybF0pIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoc2VsZi50cGxDYWNoZVt1cmxdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnByb21pc2VDYWNoZVt1cmxdKSB7XG4gICAgICAgICAgICB0aGlzLnByb21pc2VDYWNoZVt1cmxdID0gaHR0cEdldCh1cmwpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIHNlbGYucHJvbWlzZUNhY2hlW3VybF0gPSBudWxsO1xuICAgICAgICAgICAgICAgIHNlbGYudHBsQ2FjaGVbdXJsXSA9IHJlcy5kYXRhIHx8ICcnO1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLnRwbENhY2hlW3VybF07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnByb21pc2VDYWNoZVt1cmxdO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzJztcclxuXHJcbnZhciByZWFkeVN0YXRlRW51bSA9IHtcclxuICAgIHN0YXJ0OiAwLFxyXG4gICAgb3BlbmVkOiAxLFxyXG4gICAgc2VudDogMixcclxuICAgIHJlY2VpdmVkOiAzLFxyXG4gICAgZmluaXNoOiA0XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVYSFIoKSB7XHJcbiAgICByZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb21pc2UocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSwgcmVqZWN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVXJsUGFyYW0odXJsLCBuYW1lLCB2YWx1ZSkge1xyXG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJyk7XHJcbiAgICB1cmwgKz0gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcclxuICAgIHJldHVybiB1cmw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XHJcbiAgICB2YXIgcGFyc2VkID0ge307XHJcbiAgICB2YXIga2V5O1xyXG4gICAgdmFyIHZhbDtcclxuICAgIHZhciBpO1xyXG5cclxuICAgIGlmICghaGVhZGVycykge1xyXG4gICAgICAgIHJldHVybiBwYXJzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUsIGluZGV4KSB7XHJcbiAgICAgICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xyXG4gICAgICAgIGtleSA9IGxpbmUuc3Vic3RyKDAsIGkpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIHZhbCA9IGxpbmUuc3Vic3RyKGkgKyAxKS50cmltKCk7XHJcblxyXG4gICAgICAgIGlmIChrZXkpIHtcclxuICAgICAgICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHBhcnNlZDtcclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRVcmwodXJsLCBjb25maWcpIHtcclxuICAgIGlmIChjb25maWcuZGF0YSAhPSBudWxsICYmIGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKSA9PT0gJ2dldCcpIHtcclxuICAgICAgICB1dGlscy5mb3JFYWNoKGNvbmZpZy5kYXRhLCBmdW5jdGlvbiAodmFsdWUsIG5hbWUpIHtcclxuICAgICAgICAgICAgYWRkVXJsUGFyYW0odXJsLCBuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXJsO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xyXG4gICAgcmV0dXJuIGNyZWF0ZVByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIHZhciB4aHIgPSBjcmVhdGVYSFIoKTtcclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoY29uZmlnLmRhdGEpKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBjb25maWcuZGF0YVsnQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICgheGhyIHx8IHhoci5yZWFkeVN0YXRlICE9PSByZWFkeVN0YXRlRW51bS5maW5pc2gpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDAgJiYgISh4aHIucmVzcG9uc2VVUkwgJiYgeGhyLnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiB4aHIgPyBwYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XHJcbiAgICAgICAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyB4aHIucmVzcG9uc2VUZXh0IDogeGhyLnJlc3BvbnNlO1xyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcclxuICAgICAgICAgICAgICAgIGNvbmZpZzogY29uZmlnLFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdDogeGhyXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAoKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApIHx8IHhoci5zdGF0dXMgPT0gMzA0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzdWNjZXNzZnVsbHlcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gdW5zdWNjZXNzZnVsbHlcclxuICAgICAgICAgICAgICAgIHJlamVjdChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHhociA9IG51bGw7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIub3Blbihjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCksIGJ1aWxkVXJsKGNvbmZpZy51cmwsIGNvbmZpZyksIHRydWUpO1xyXG4gICAgICAgIHhoci5zZW5kKGNvbmZpZy5kYXRhKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBodHRwR2V0KHVybCwgZGF0YSwgb3B0aW9ucykge1xyXG4gICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgIGRhdGE6IGRhdGFcclxuICAgIH07XHJcblxyXG4gICAgaWYgKG9wdGlvbnMgIT0gbnVsbCkge1xyXG4gICAgICAgIHV0aWxzLmV4dGVuZChjb25maWcsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXF1ZXN0KGNvbmZpZyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGh0dHBQb3N0KHVybCwgZGF0YSwgb3B0aW9ucykge1xyXG4gICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChvcHRpb25zICE9IG51bGwpIHtcclxuICAgICAgICB1dGlscy5leHRlbmQoY29uZmlnLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVxdWVzdChjb25maWcpO1xyXG59XHJcblxyXG5leHBvcnQgeyBodHRwR2V0LCBodHRwUG9zdCB9XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0ICogZnJvbSAnLi9ub2RlJztcbmV4cG9ydCAqIGZyb20gJy4vaHR0cCc7XG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2UnOyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5jbGFzcyBNZXNzZW5nZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhhbmRsZXJzID0gW107XG4gICAgfVxuXG4gICAgb24oZm4pIHtcbiAgICAgICAgdGhpcy5oYW5kbGVycy5wdXNoKGZuKTtcbiAgICB9XG5cbiAgICBvZmYoZm4pIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYW5kbGVyc1tpXSA9PT0gZm4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpcmUoYXJncywgc2NvcGUpIHtcbiAgICAgICAgdmFyIHJldHVyblZhbHVlO1xuICAgICAgICBzY29wZSA9IHNjb3BlIHx8IHRoaXM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5oYW5kbGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5oYW5kbGVyc1tpXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHRoaXMuaGFuZGxlcnNbaV0uY2FsbChzY29wZSwgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH1cbn1cblxuY2xhc3MgTWVzc2VuZ2VyQnVzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tZXNzZW5nZXJzID0ge307XG4gICAgfVxuXG4gICAgZ2V0KGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLm1lc3NlbmdlcnNbZV0pIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2VuZ2Vyc1tlXSA9IG5ldyBNZXNzZW5nZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tZXNzZW5nZXJzW2VdO1xuICAgIH1cblxuICAgIG9uKGUsIGZuKSB7XG4gICAgICAgIHRoaXMuZ2V0KGUpLm9uKGZuKTtcbiAgICB9XG5cbiAgICBvZmYoZSwgZm4pIHtcbiAgICAgICAgdGhpcy5nZXQoZSkub2ZmKGZuKTtcbiAgICB9XG5cbiAgICBmaXJlKGUsIGFyZ3MsIHNjb3BlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChlKS5maXJlKGFyZ3MsIHNjb3BlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzTWVzc2VuZ2VyKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBNZXNzZW5nZXI7XG59XG5cbmV4cG9ydCB7IE1lc3NlbmdlciwgTWVzc2VuZ2VyQnVzLCBpc01lc3NlbmdlciB9OyIsIlxuZnVuY3Rpb24gZ2V0Q2hpbGROb2Rlcyhub2RlKSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG5vZGUuY2hpbGROb2RlcywgMCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ2hpbGROb2Rlcyhub2RlKSB7XG4gICAgZ2V0Q2hpbGROb2Rlcyhub2RlKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBub2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZU5vZGUocmVmTm9kZSwgbmV3Tm9kZSkge1xuICAgIHZhciBwYXJlbnROb2RlID0gcmVmTm9kZS5wYXJlbnROb2RlO1xuICAgIGlmIChwYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmTm9kZSk7XG4gICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocmVmTm9kZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUpIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICBpZiAocGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVOb2RlQmV0d2VlbihiZWdpbk5vZGUsIGVuZE5vZGUpIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IGJlZ2luTm9kZS5wYXJlbnROb2RlO1xuICAgIHZhciBjaGlsZE5vZGVzID0gZ2V0Q2hpbGROb2RlcyhwYXJlbnROb2RlKTtcblxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgaWYgKGNoaWxkLnByZXZpb3VzU2libGluZyA9PT0gYmVnaW5Ob2RlICYmIGNoaWxkICE9PSBlbmROb2RlKSB7XG4gICAgICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGQubmV4dFNpYmxpbmcgPT09IGVuZE5vZGUgJiYgY2hpbGQgIT09IGJlZ2luTm9kZSkge1xuICAgICAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0Tm9kZUFmdGVyKHJlZk5vZGUsIG5ld05vZGUpIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IHJlZk5vZGUucGFyZW50Tm9kZTtcblxuICAgIGlmIChwYXJlbnROb2RlLmxhc3RDaGlsZCA9PT0gcmVmTm9kZSkge1xuICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKG5ld05vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZk5vZGUubmV4dFNpYmxpbmcpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcXVlcnlFbGVtZW50TG9hZGVkKGVsZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgY2FuY2VsVG9rZW4gPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIHF1ZXJ5KCkge1xuICAgICAgICBpZiAoY2FuY2VsVG9rZW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGUuY2xpZW50V2lkdGggPiAwICYmIGVsZS5jbGllbnRIZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHF1ZXJ5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShxdWVyeSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBjYW5jZWxUb2tlbiA9IHRydWU7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gcXVlcnlFbGVtZW50VW5sb2FkZWQoZWxlLCBjYWxsYmFjaykge1xuICAgIHZhciBjYW5jZWxUb2tlbiA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gcXVlcnkoKSB7XG4gICAgICAgIGlmIChjYW5jZWxUb2tlbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsZS5jbGllbnRXaWR0aCA9PT0gMCAmJiBlbGUuY2xpZW50SGVpZ2h0ID09IDApIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocXVlcnkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHF1ZXJ5KTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbmNlbFRva2VuID0gdHJ1ZTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBxdWVyeUVsZW1lbnRTdGF0ZShlbGUsIGNhbGxiYWNrcykge1xuICAgIHZhciBjYW5jZWxUb2tlbiA9IGZhbHNlLCBsb2FkZWQgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIHF1ZXJ5KCkge1xuICAgICAgICBpZiAoY2FuY2VsVG9rZW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGUuY2xpZW50V2lkdGggPiAwICYmIGVsZS5jbGllbnRIZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICBpZiAoIWxvYWRlZCkge1xuICAgICAgICAgICAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrcy5vbkVudGVyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLm9uRW50ZXIuY2FsbChjYWxsYmFja3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChsb2FkZWQpIHtcbiAgICAgICAgICAgICAgICBsb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tzLm9uTGVhdmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3Mub25MZWF2ZS5jYWxsKGNhbGxiYWNrcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHF1ZXJ5KTtcbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocXVlcnkpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FuY2VsVG9rZW4gPSB0cnVlO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzIChlbCwgY2xzKSB7XG4gICAgaWYgKCFjbHMgfHwgIShjbHMgPSBjbHMudHJpbSgpKSkge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgICAgIGlmIChjbHMuaW5kZXhPZignICcpID4gLTEpIHtcbiAgICAgICAgICAgIGNscy5zcGxpdCgvXFxzKy8pLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LmFkZChjKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbHMpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGN1ciA9IFwiIFwiICsgKGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJykgKyBcIiBcIjtcbiAgICAgICAgaWYgKGN1ci5pbmRleE9mKCcgJyArIGNscyArICcgJykgPCAwKSB7XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgKGN1ciArIGNscykudHJpbSgpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MgKGVsLCBjbHMpIHtcbiAgICBpZiAoIWNscyB8fCAhKGNscyA9IGNscy50cmltKCkpKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgICAgaWYgKGNscy5pbmRleE9mKCcgJykgPiAtMSkge1xuICAgICAgICAgICAgY2xzLnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QucmVtb3ZlKGMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNscyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlbC5jbGFzc0xpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY3VyID0gXCIgXCIgKyAoZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnKSArIFwiIFwiO1xuICAgICAgICB2YXIgdGFyID0gJyAnICsgY2xzICsgJyAnO1xuICAgICAgICB3aGlsZSAoY3VyLmluZGV4T2YodGFyKSA+PSAwKSB7XG4gICAgICAgICAgICBjdXIgPSBjdXIucmVwbGFjZSh0YXIsICcgJyk7XG4gICAgICAgIH1cbiAgICAgICAgY3VyID0gY3VyLnRyaW0oKTtcbiAgICAgICAgaWYgKGN1cikge1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIGN1cik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgZ2V0Q2hpbGROb2RlcyxcbiAgICBjbGVhckNoaWxkTm9kZXMsXG4gICAgcmVwbGFjZU5vZGUsXG4gICAgcmVtb3ZlTm9kZSxcbiAgICByZW1vdmVOb2RlQmV0d2VlbixcbiAgICBpbnNlcnROb2RlQWZ0ZXIsXG4gICAgcXVlcnlFbGVtZW50TG9hZGVkLFxuICAgIHF1ZXJ5RWxlbWVudFVubG9hZGVkLFxuICAgIHF1ZXJ5RWxlbWVudFN0YXRlLFxuICAgIGFkZENsYXNzLFxuICAgIHJlbW92ZUNsYXNzXG59OyIsInZhciBkZWJ1Z01vZGUgPSB0cnVlLFxuICAgIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcbiAgICBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxuZnVuY3Rpb24gZm9yRWFjaChvYmosIGFjdGlvbiwgaWdub3JlT3duKSB7XG4gICAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgb2JqLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgaWYgKGFjdGlvbihvYmpbaW5kZXhdLCBpbmRleCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYmplY3Qob2JqKSkge1xuICAgICAgICBmb3IgKHZhciBwIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKGlnbm9yZU93biB8fCBvYmouaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uKG9ialtwXSwgcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYWN0aW9uKG9iaiwgb2JqKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNvbWUob2JqLCBhY3Rpb24pIHtcbiAgICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBvYmoubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpZiAoYWN0aW9uKGluZGV4LCBvYmpbaW5kZXhdKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzT2JqZWN0KG9iaikpIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uKHAsIG9ialtwXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gYWN0aW9uKG9iaiwgb2JqKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNvcHkoKSB7XG4gICAgdmFyIGRlZXAgPSBmYWxzZSwgb2JqSW5kZXggPSAwLCBvYmogPSBhcmd1bWVudHNbb2JqSW5kZXhdLCBmaWx0ZXI7XG5cbiAgICBpZiAoaXNCb29sZWFuKG9iaikpIHtcbiAgICAgICAgZGVlcCA9IG9iajtcbiAgICAgICAgb2JqSW5kZXgrKztcbiAgICAgICAgb2JqID0gYXJndW1lbnRzW29iakluZGV4XTtcbiAgICB9XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IG9iakluZGV4ICsgMSkge1xuICAgICAgICBmaWx0ZXIgPSBhcmd1bWVudHNbb2JqSW5kZXggKyAxXTtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICAgIHZhciBuZXdBcnIgPSBbXTtcbiAgICAgICAgb2JqLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoZmlsdGVyID09IG51bGwgfHwgZmlsdGVyKG9iaiwgaW5kZXgsIGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgbmV3QXJyLnB1c2goZGVlcCA/IGNvcHkoaXRlbSkgOiBpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXdBcnI7XG4gICAgfVxuXG4gICAgaWYgKGlzT2JqZWN0KG9iaikpIHtcbiAgICAgICAgdmFyIG5ld09iaiA9IG9iamVjdChvYmopO1xuICAgICAgICBmb3JFYWNoKG9iaiwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgIGlmIChmaWx0ZXIgPT0gbnVsbCB8fCBmaWx0ZXIob2JqLCBrZXksIHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIG5ld09ialtrZXldID0gZGVlcCA/IGNvcHkodmFsdWUpIDogdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3T2JqO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICB2YXIgZGVlcCA9IGZhbHNlLCBpbmRleCA9IDAsIHRhcmdldCA9IGFyZ3VtZW50c1tpbmRleF07XG5cbiAgICBpZiAoaXNCb29sZWFuKHRhcmdldCkpIHtcbiAgICAgICAgZGVlcCA9IHRhcmdldDtcbiAgICAgICAgdGFyZ2V0ID0gYXJndW1lbnRzWysraW5kZXhdO1xuICAgIH1cblxuICAgIGlmIChkZWVwKSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXggKyAxKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBkZWVwTWVyZ2UodGFyZ2V0LCBpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4ICsgMSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcGxhaW5NZXJnZSh0YXJnZXQsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlKCkge1xuICAgIHZhciBkZWVwID0gZmFsc2UsIGluZGV4ID0gMCwgdGFyZ2V0ID0ge307XG5cbiAgICBpZiAoaXNCb29sZWFuKGFyZ3VtZW50c1tpbmRleF0pKSB7XG4gICAgICAgIGRlZXAgPSBhcmd1bWVudHNbaW5kZXhdO1xuICAgICAgICBpbmRleCsrO1xuICAgIH1cblxuICAgIGlmIChkZWVwKSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXgpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGRlZXBNZXJnZSh0YXJnZXQsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXgpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHBsYWluTWVyZ2UodGFyZ2V0LCBpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gcGxhaW5NZXJnZSh0YXJnZXQsIHNvdXJjZSkge1xuICAgIGZvckVhY2goc291cmNlLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBkZWVwTWVyZ2UodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBmb3JFYWNoKHNvdXJjZSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgaWYgKHRhcmdldFtrZXldID09IG51bGwpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNPYmplY3QodGFyZ2V0W2tleV0pICYmIGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGRlZXBNZXJnZSh0YXJnZXRba2V5XSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBvYmplY3Qobykge1xuICAgIGZ1bmN0aW9uIEYoKSB7XG4gICAgfVxuXG4gICAgRi5wcm90b3R5cGUgPSBvO1xuICAgIHJldHVybiBuZXcgRigpO1xufVxuXG5mdW5jdGlvbiBpbmhlcml0UHJvdG90eXBlKHN1YlR5cGUsIHN1cGVyVHlwZSkge1xuICAgIHZhciBwcm90b3R5cGUgPSBvYmplY3Qoc3VwZXJUeXBlLnByb3RvdHlwZSk7XG4gICAgcHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViVHlwZTtcbiAgICBzdWJUeXBlLnByb3RvdHlwZSA9IHByb3RvdHlwZTtcbn1cblxuZnVuY3Rpb24gaW5oZXJpdChzdWJUeXBlLCBzdXBlclR5cGUpIHtcbiAgICBpbmhlcml0UHJvdG90eXBlKHN1YlR5cGUsIHN1cGVyVHlwZSk7XG4gICAgc3ViVHlwZS5zdXBlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3VwZXJUeXBlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbG93ZXJjYXNlKHN0cmluZykge1xuICAgIHJldHVybiBpc1N0cmluZyhzdHJpbmcpID8gc3RyaW5nLnRvTG93ZXJDYXNlKCkgOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHVwcGVyY2FzZShzdHJpbmcpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcoc3RyaW5nKSA/IHN0cmluZy50b1VwcGVyQ2FzZSgpIDogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xufVxuXG5mdW5jdGlvbiBpc0RlZmluZWQodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJztcbn1cblxuZnVuY3Rpb24gaXNBcnJheShvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGlzTWFwKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBNYXA7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCc7XG59XG5cbmZ1bmN0aW9uIGlzQmxhbmtPYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAhZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInO1xufVxuXG5mdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cblxuZnVuY3Rpb24gaXNCb29sZWFuKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nO1xufVxuXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsdWUgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbmZ1bmN0aW9uIGlzU2FtZShvYmoxLCBvYmoyKSB7XG4gICAgdmFyIHNhbWUgPSAob2JqMSA9PT0gb2JqMik7XG5cbiAgICBpZiAoIXNhbWUpIHtcbiAgICAgICAgaWYgKGlzQXJyYXkob2JqMSkgJiYgaXNBcnJheShvYmoyKSkge1xuICAgICAgICAgICAgaWYgKG9iajEubGVuZ3RoID09PSBvYmoyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNhbWUgPSAhc29tZShvYmoxLCBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhaXNTYW1lKHZhbHVlLCBvYmoyW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNPYmplY3Qob2JqMSkgJiYgaXNPYmplY3Qob2JqMikgJiYgZ2V0UHJvdG90eXBlT2Yob2JqMSkgPT09IGdldFByb3RvdHlwZU9mKG9iajIpKSB7XG4gICAgICAgICAgICBzYW1lID0gIXNvbWUob2JqMSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIWlzU2FtZSh2YWx1ZSwgb2JqMltrZXldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNhbWU7XG59XG5cbmZ1bmN0aW9uIGRlYnVnKGxvZykge1xuICAgIGlmIChkZWJ1Z01vZGUpIHtcbiAgICAgICAgY29uc29sZS5sb2cobG9nKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNvbnRhaW5zKGFyciwgb2JqKSB7XG4gICAgcmV0dXJuIGFyci5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtID09PSBvYmo7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbnRhaW5zU3RyKGFyciwgc3RyLCBpZ25vcmVDYXNlKSB7XG4gICAgcmV0dXJuIGFyci5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtID09PSBzdHIgfHwgKGlnbm9yZUNhc2UgJiYgbG93ZXJjYXNlKGl0ZW0pID09PSBsb3dlcmNhc2Uoc3RyKSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhc1Byb3BlcnR5KG9iaiwga2V5LCBpZ25vcmVDYXNlKSB7XG4gICAgaWYgKCFvYmopIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBrZXkyLCBoYXNQcm9wID0gdHJ1ZSwga2V5cyA9IGtleS5zcGxpdCgnLicpLCB0YXJnZXQgPSBvYmo7XG5cbiAgICB3aGlsZSAoaGFzUHJvcCAmJiBrZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAga2V5MiA9IGtleXMuc2hpZnQoKTtcbiAgICAgICAgaGFzUHJvcCA9IGZhbHNlO1xuICAgICAgICBmb3JFYWNoKHRhcmdldCwgZnVuY3Rpb24gKHZhbHVlMywga2V5Mykge1xuICAgICAgICAgICAgaGFzUHJvcCA9IChrZXkzID09PSBrZXkyIHx8IChpZ25vcmVDYXNlICYmIGxvd2VyY2FzZShrZXkzKSA9PT0gbG93ZXJjYXNlKGtleTIpKSk7XG4gICAgICAgICAgICBpZiAoaGFzUHJvcCkge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHZhbHVlMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBoYXNQcm9wO1xuICAgICAgICB9LCB0cnVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFzUHJvcDtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvcGVydHkob2JqLCBrZXksIGlnbm9yZUNhc2UpIHtcbiAgICBpZiAoIW9iaikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIga2V5MiwgaGFzUHJvcCA9IHRydWUsIGtleXMgPSBrZXkuc3BsaXQoJy4nKSwgdGFyZ2V0ID0gb2JqO1xuXG4gICAgd2hpbGUgKGhhc1Byb3AgJiYga2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGtleTIgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICAgIGhhc1Byb3AgPSBmYWxzZTtcbiAgICAgICAgZm9yRWFjaCh0YXJnZXQsIGZ1bmN0aW9uICh2YWx1ZTMsIGtleTMpIHtcbiAgICAgICAgICAgIGhhc1Byb3AgPSAoa2V5MyA9PT0ga2V5MiB8fCAoaWdub3JlQ2FzZSAmJiBsb3dlcmNhc2Uoa2V5MykgPT09IGxvd2VyY2FzZShrZXkyKSkpO1xuICAgICAgICAgICAgaWYgKGhhc1Byb3ApIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB2YWx1ZTM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaGFzUHJvcDtcbiAgICAgICAgfSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhhc1Byb3AgPyB0YXJnZXQgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBzZXRQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUsIGlnbm9yZUNhc2UpIHtcbiAgICBpZiAoIW9iaikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGtleTIsIGhhc1Byb3AgPSB0cnVlLCBrZXlzID0ga2V5LnNwbGl0KCcuJyksIHRhcmdldCA9IG9iajtcblxuICAgIHdoaWxlIChoYXNQcm9wICYmIGtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICBrZXkyID0ga2V5cy5zaGlmdCgpO1xuICAgICAgICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXkyXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaGFzUHJvcCA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yRWFjaCh0YXJnZXQsIGZ1bmN0aW9uICh2YWx1ZTMsIGtleTMpIHtcbiAgICAgICAgICAgICAgICBoYXNQcm9wID0gKGtleTMgPT09IGtleTIgfHwgKGlnbm9yZUNhc2UgJiYgbG93ZXJjYXNlKGtleTMpID09PSBsb3dlcmNhc2Uoa2V5MikpKTtcbiAgICAgICAgICAgICAgICBpZiAoaGFzUHJvcCkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSB2YWx1ZTM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBoYXNQcm9wO1xuICAgICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWhhc1Byb3ApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGtleSArICc6IENhbiBub3Qgc2V0IHByb3BlcnR5IG9mIHVuZGVmaW5lZCcpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY29uY2F0KCkge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBvcmRlckJ5KGFyciwgZ2V0dGVyKSB7XG4gICAgdmFyIGdldFZhbHVlID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgaWYgKGdldHRlciA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXR0ZXIoaXRlbSk7XG4gICAgfTtcblxuICAgIHJldHVybiBhcnIuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICBpZiAoZ2V0VmFsdWUoYSkgPCBnZXRWYWx1ZShiKSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA+IGdldFZhbHVlKGIpKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gb3JkZXJCeURlc2NlbmRpbmcoYXJyLCBnZXR0ZXIpIHtcbiAgICB2YXIgZ2V0VmFsdWUgPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAoZ2V0dGVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldHRlcihpdGVtKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGFyci5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA8IGdldFZhbHVlKGIpKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2V0VmFsdWUoYSkgPiBnZXRWYWx1ZShiKSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB0b051bWJlciAodmFsdWUpIHtcbiAgICB2YXIgbiA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgIHJldHVybiBpc05hTihuKSA/IHZhbHVlIDogbjtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlIChhcnIsIGl0ZW0pIHtcbiAgICBpZiAoYXJyLmxlbmd0aCkge1xuICAgICAgICB2YXIgaW5kZXggPSBhcnIuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBmb3JFYWNoLFxuICAgIHNvbWUsXG4gICAgY29weSxcbiAgICBleHRlbmQsXG4gICAgbWVyZ2UsXG4gICAgb2JqZWN0LFxuICAgIGluaGVyaXQsXG4gICAgbG93ZXJjYXNlLFxuICAgIHVwcGVyY2FzZSxcbiAgICBpc1VuZGVmaW5lZCxcbiAgICBpc0RlZmluZWQsXG4gICAgaXNPYmplY3QsXG4gICAgaXNCbGFua09iamVjdCxcbiAgICBpc051bWJlcixcbiAgICBpc0RhdGUsXG4gICAgaXNGdW5jdGlvbixcbiAgICBpc1JlZ0V4cCxcbiAgICBpc0Jvb2xlYW4sXG4gICAgaXNBcnJheSxcbiAgICBpc1N0cmluZyxcbiAgICBpc1NhbWUsXG4gICAgaXNGb3JtRGF0YSxcbiAgICBkZWJ1ZyxcbiAgICBjb250YWlucyxcbiAgICBjb250YWluc1N0cixcbiAgICBoYXNQcm9wZXJ0eSxcbiAgICBnZXRQcm9wZXJ0eSxcbiAgICBzZXRQcm9wZXJ0eSxcbiAgICBjb25jYXQsXG4gICAgb3JkZXJCeSxcbiAgICBvcmRlckJ5RGVzY2VuZGluZyxcbiAgICB0b051bWJlcixcbiAgICByZW1vdmVcbn07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eSc7XG5pbXBvcnQgeyBPYnNlcnZlciB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgY29tcGlsZSwgY29tcHV0ZSB9IGZyb20gJy4uL3BhcnNlcic7XG5pbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4vaW5qZWN0b3InO1xuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50IHtcbiAgICBnZXQgJHByb3h5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b1Byb3h5KCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IobWV0YSkge1xuICAgICAgICBDb21wb25lbnQuY29uc3RydWN0LmNhbGwodGhpcywgbWV0YSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnN0cnVjdChtZXRhKSB7XG4gICAgICAgIHRoaXMuJCRlbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy4kJGNoaWxkRWxlbWVudHMgPSBudWxsO1xuICAgICAgICB0aGlzLiQkcGFyZW50Q29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy4kJGNoaWxkQ29tcG9uZW50cyA9IFtdO1xuICAgICAgICB0aGlzLiQkY2hpbGREaXJlY3RpdmVzID0gW107XG4gICAgICAgIHRoaXMuJCRkZXRlY3RUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy4kJG9ic2VydmVyID0gbmV3IE9ic2VydmVyKCk7XG4gICAgICAgIHRoaXMuJCRkaXNwb3NlcnMgPSBbXTtcblxuICAgICAgICBpZiAobWV0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiRzZXRNZXRhKG1ldGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5qZWN0b3IuaW5qZWN0U2VydmljZXModGhpcyk7XG4gICAgfVxuXG4gICAgJGhvb2tzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYmVmb3JlQXR0ckNoYW5nZTogJycsXG4gICAgICAgICAgICBhZnRlckF0dHJDaGFuZ2U6ICcnLFxuICAgICAgICAgICAgb25Jbml0OiAnJyxcbiAgICAgICAgICAgIGJlZm9yZVZpZXdJbml0OiAnJyxcbiAgICAgICAgICAgIGFmdGVyVmlld01vdW50OiAnJyxcbiAgICAgICAgICAgIG9uRGVzdHJveTogJydcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAkZ2V0TWV0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRtZXRhIHx8IHt9O1xuICAgIH1cblxuICAgICRzZXRNZXRhKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJCRtZXRhID0gdmFsdWU7XG4gICAgfVxuXG4gICAgJGJpbmROb2RlKG5vZGUpIHtcbiAgICAgICAgdGhpcy4kJGVsZW1lbnQgPSBub2RlO1xuICAgIH1cblxuICAgICRoYXNBdHRyKHByb3ApIHtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmhhc1Byb3BlcnR5KHRoaXMsIHByb3AsIHRydWUpO1xuICAgIH1cblxuICAgICRpbml0QXR0cihwcm9wLCB2YWx1ZSkge1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLCBwcm9wLCB0cnVlKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLmJlZm9yZUF0dHJDaGFuZ2UpKSB7XG4gICAgICAgICAgICB0aGlzLmJlZm9yZUF0dHJDaGFuZ2UuY2FsbCh0aGlzLCBwcm9wLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXRpbHMuc2V0UHJvcGVydHkodGhpcywgcHJvcCwgdmFsdWUsIHRydWUpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuYWZ0ZXJBdHRyQ2hhbmdlKSkge1xuICAgICAgICAgICAgdGhpcy5hZnRlckF0dHJDaGFuZ2UuY2FsbCh0aGlzLCBwcm9wLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGluaXRBdHRyRG9uZSgpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkluaXQpKSB7XG4gICAgICAgICAgICB0aGlzLm9uSW5pdC5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJHNldEF0dHIocHJvcCwgdmFsdWUpIHtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHkodGhpcywgcHJvcCwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5iZWZvcmVBdHRyQ2hhbmdlKSkge1xuICAgICAgICAgICAgdGhpcy5iZWZvcmVBdHRyQ2hhbmdlLmNhbGwodGhpcywgcHJvcCwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHV0aWxzLnNldFByb3BlcnR5KHRoaXMuJHByb3h5LCBwcm9wLCB2YWx1ZSwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5hZnRlckF0dHJDaGFuZ2UpKSB7XG4gICAgICAgICAgICB0aGlzLmFmdGVyQXR0ckNoYW5nZS5jYWxsKHRoaXMsIHByb3AsIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkbGlzdGVuKGUsIGZuKSB7XG4gICAgICAgIHZhciBtZXNzZW5nZXIgPSB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLCBlLCB0cnVlKTtcbiAgICAgICAgaWYgKHV0aWxzLmlzTWVzc2VuZ2VyKG1lc3NlbmdlcikpIHtcbiAgICAgICAgICAgIG1lc3Nlbmdlci5vbihmbik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUgKyAnIGlzIG5vdCBhIGV2ZW50Jyk7XG4gICAgfVxuXG4gICAgJGdldFRlbXBsYXRlKHN5bmMpIHtcbiAgICAgICAgdmFyIG1ldGEgPSB0aGlzLiRnZXRNZXRhKCk7XG5cbiAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBtZXRhLnRlbXBsYXRlIHx8ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcobWV0YS50ZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKG1ldGEudGVtcGxhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodXRpbHMuaXNTdHJpbmcobWV0YS50ZW1wbGF0ZVVybCkpIHtcbiAgICAgICAgICAgICAgICBpbmplY3Rvci5zZXJ2aWNlKCckdGVtcGxhdGVDYWNoZScpLmdldFRwbEJ5VXJsKG1ldGEudGVtcGxhdGVVcmwpLnRoZW4oZnVuY3Rpb24gKHRwbCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRwbCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgJHVzaW5nKG5hbWUpIHtcbiAgICAgICAgdmFyIG1ldGEgPSB0aGlzLiRnZXRNZXRhKCksXG4gICAgICAgICAgICB1c2luZyA9IG1ldGEudXNpbmcsXG4gICAgICAgICAgICBzZWdtZW50cyA9IG5hbWUuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHNlZ21lbnRzLnBvcCgpLFxuICAgICAgICAgICAgc3BhY2VOYW1lID0gc2VnbWVudHMuam9pbignLicpO1xuXG4gICAgICAgIGlmIChzcGFjZU5hbWUgJiYgdXRpbHMuaXNPYmplY3QodXNpbmcpKSB7XG4gICAgICAgICAgICB1dGlscy5zb21lKHVzaW5nLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IHNwYWNlTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lID0gdmFsdWUgKyAnLicgKyBjbGFzc05hbWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgJG1ha2VDb21waWxlT3B0aW9ucygpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2V0RW1iZWRUcGw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi4kJGVsZW1lbnQuZ2V0SW5uZXJUcGwoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250YWluc0NvbXBvbmVudDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5qZWN0b3IuY29udGFpbnNDb21wb25lbnQoc2VsZi4kdXNpbmcobmFtZSkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZUNvbXBvbmVudDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5qZWN0b3IuY3JlYXRlQ29tcG9uZW50KHNlbGYuJHVzaW5nKG5hbWUpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250YWluc0RpcmVjdGl2ZTogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5qZWN0b3IuY29udGFpbnNEaXJlY3RpdmUoc2VsZi4kdXNpbmcobmFtZSkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZURpcmVjdGl2ZTogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5qZWN0b3IuY3JlYXRlRGlyZWN0aXZlKHNlbGYuJHVzaW5nKG5hbWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAkaGFzVmlldygpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmlzQXJyYXkodGhpcy4kJGNoaWxkRWxlbWVudHMpO1xuICAgIH1cblxuICAgICRzaG93VmlldygpIHtcbiAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgICAgIHRoaXMuJCRjaGlsZEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChjaGlsZC5nZXRIdG1sRWxlbWVudCgpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgIH1cblxuICAgICRjbGVhclZpZXcoKSB7XG4gICAgICAgIGlmICghdGhpcy4kaGFzVmlldygpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kJGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJCRjaGlsZEVsZW1lbnRzID0gbnVsbDtcbiAgICB9XG5cbiAgICAkcmVuZGVyKHN5bmMpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBmcmFnbWVudCA9IG51bGw7XG5cbiAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiRoYXNWaWV3KCkpIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudCA9IHRoaXMuJHNob3dWaWV3KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudCA9IGNvbXBpbGUodGhpcy4kZ2V0VGVtcGxhdGUoc3luYyksIHRoaXMuJG1ha2VDb21waWxlT3B0aW9ucygpKSh0aGlzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi4kaGFzVmlldygpKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShzZWxmLiRzaG93VmlldygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYuJGdldFRlbXBsYXRlKCkudGhlbihmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCA9IGNvbXBpbGUoaHRtbCwgc2VsZi4kbWFrZUNvbXBpbGVPcHRpb25zKCkpKHNlbGYpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZyYWdtZW50KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgJHJlZnJlc2goc3luYykge1xuICAgICAgICB0aGlzLiRjbGVhclZpZXcoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHJlbmRlcihzeW5jKTtcbiAgICB9XG5cbiAgICAkbW91bnQoc2VsZWN0b3JPckVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBlbGVtZW50LCBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoc2VsZWN0b3JPckVsZW1lbnQpKSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvck9yRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gc2VsZWN0b3JPckVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW9wdGlvbnMuYXBwZW5kKSB7XG4gICAgICAgICAgICB1dGlscy5jbGVhckNoaWxkTm9kZXMoZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5zeW5jKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuJHJlbmRlcihvcHRpb25zLnN5bmMpKTtcbiAgICAgICAgICAgIHNlbGYuJGFmdGVyVmlld01vdW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRyZW5kZXIob3B0aW9ucy5zeW5jKS50aGVuKGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGVsZSk7XG4gICAgICAgICAgICAgICAgc2VsZi4kYWZ0ZXJWaWV3TW91bnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJHVubW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLiQkZWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiQkZWxlbWVudC4kcmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLiQkZWxlbWVudC5yZW1vdmVIdG1sRWxlbWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuJGhhc1ZpZXcoKSkge1xuICAgICAgICAgICAgdGhpcy4kJGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5yZW1vdmVIdG1sRWxlbWVudCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy4kJHBhcmVudENvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiQkcGFyZW50Q29tcG9uZW50LiRyZW1vdmVDaGlsZENtcCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuJCRwYXJlbnRDb21wb25lbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGFmdGVyVmlld01vdW50KCkge1xuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLmFmdGVyVmlld01vdW50KSkge1xuICAgICAgICAgICAgdGhpcy5hZnRlclZpZXdNb3VudC5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGRldGVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuJCRkZXRlY3RUaW1lb3V0IHx8ICF0aGlzLiQkY2hpbGRFbGVtZW50cykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLiQkZGV0ZWN0VGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi4kJGRldGVjdFRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgc2VsZi4kJGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXRlY3QoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAkdmFsaWRhdGUoKSB7XG4gICAgICAgIHZhciBvYmosIHByb3AsIGFjdGlvbiwgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIG9iaiA9IHRoaXM7XG4gICAgICAgICAgICBwcm9wID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgYWN0aW9uID0gYXJndW1lbnRzWzFdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIG9iaiA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIHByb3AgPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICBhY3Rpb24gPSBhcmd1bWVudHNbMl07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FyZ3VtZW50cyBlcnJvcicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuJCRvYnNlcnZlci52YWxpZGF0ZShvYmosIHByb3AsIGFjdGlvbik7XG4gICAgfVxuXG4gICAgJHdhdGNoKCkge1xuICAgICAgICB2YXIgb2JqLCBwcm9wLCBhY3Rpb24sIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICBvYmogPSB0aGlzO1xuICAgICAgICAgICAgcHJvcCA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIGFjdGlvbiA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICBvYmogPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICBwcm9wID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgYWN0aW9uID0gYXJndW1lbnRzWzJdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhcmd1bWVudHMgZXJyb3InKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLiQkb2JzZXJ2ZXIud2F0Y2gob2JqLCBwcm9wLCBhY3Rpb24pO1xuICAgIH1cblxuICAgICRldmFsKGV4cCkge1xuICAgICAgICByZXR1cm4gY29tcHV0ZShleHAsIHRoaXMpO1xuICAgIH1cblxuICAgICRnZXRQYXJlbnRDbXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkcGFyZW50Q29tcG9uZW50O1xuICAgIH1cblxuICAgICRyZW1vdmVDaGlsZENtcChjaGlsZENtcCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLiQkY2hpbGRDb21wb25lbnRzLmluZGV4T2YoY2hpbGRDbXApO1xuXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuJCRjaGlsZENvbXBvbmVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIGNoaWxkQ21wLiQkcGFyZW50Q29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICRjcmVhdGVDaGlsZENtcChjaGlsZENtcCkge1xuICAgICAgICB2YXIgY29tcG9uZW50ID0gaW5qZWN0b3IuY3JlYXRlQ29tcG9uZW50KGNoaWxkQ21wKTtcbiAgICAgICAgdGhpcy4kJGNoaWxkQ29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICAgIGNvbXBvbmVudC4kJHBhcmVudENvbXBvbmVudCA9IHRoaXM7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfVxuXG4gICAgJGluaGVyaXRDbXAocGFyZW50Q21wKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc2VsZiwgdXRpbHMub2JqZWN0KHBhcmVudENtcCkpO1xuXG4gICAgICAgIC8vIHRvZG8gLSByZXNvbHZlIGlzc3VlIGNhbGxpbmcgcGFyZW50IGNvbXBvbmVudCdzIGxpZmVjeWNsZSBob29rc1xuICAgICAgICB1dGlscy5mb3JFYWNoKHNlbGYuJGhvb2tzKCksIGZ1bmN0aW9uIChoYW5kbGVyLCBob29rKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5oYXNPd25Qcm9wZXJ0eShob29rKSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc2VsZltob29rXSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJCRkaXNwb3NlcnMucHVzaChwYXJlbnRDbXAuJHZhbGlkYXRlKCcqJywgZnVuY3Rpb24gKHByb3AsIGFyZ3MpIHtcbiAgICAgICAgICAgIHNlbGYuJCRvYnNlcnZlci5maXJlQ2hhbmdpbmcoc2VsZiwgcHJvcCwgYXJncyk7XG4gICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLiQkZGlzcG9zZXJzLnB1c2gocGFyZW50Q21wLiR3YXRjaCgnKicsIGZ1bmN0aW9uIChwcm9wLCBhcmdzKSB7XG4gICAgICAgICAgICBzZWxmLiQkb2JzZXJ2ZXIuZmlyZUNoYW5nZWQoc2VsZiwgcHJvcCwgYXJncyk7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICAkZGlzcG9zZShkZXN0cm95RnJvbUVsZW1lbnQpIHtcbiAgICAgICAgLy8gcmVtb3ZlIHZpcnR1YWwgbm9kZSBmaXJzdCBpbiBjYXNlIGl0IHRyaWdnZXJzIHBhcmVudCBjb21wb25lbnQgZGVzdHJveVxuICAgICAgICB0aGlzLiR1bm1vdW50KCk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkRlc3Ryb3kpKSB7XG4gICAgICAgICAgICB0aGlzLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuJCRkZXRlY3RUaW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy4kJGRldGVjdFRpbWVvdXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kJGRpc3Bvc2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChkaXNwb3Nlcikge1xuICAgICAgICAgICAgZGlzcG9zZXIuY2FsbCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRjbGVhclZpZXcoKTtcbiAgICAgICAgdGhpcy4kJG9ic2VydmVyLmRlc3Ryb3koKTtcblxuICAgICAgICBpZiAoZGVzdHJveUZyb21FbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLiQkZWxlbWVudCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiQkY2hpbGRDb21wb25lbnRzID0gbnVsbDtcbiAgICAgICAgdGhpcy4kJGNoaWxkRGlyZWN0aXZlcyA9IG51bGw7XG4gICAgfVxuXG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuJGRpc3Bvc2UoKTtcblxuICAgICAgICAvLyBkZXN0cm95IHZpcnR1YWwgbm9kZSBpbiB0aGUgZW5kIGJlY2F1c2UgaXQgbWF5IGJpbmRzIGxvZ2ljIGFib3V0IGRlc3Ryb3lcbiAgICAgICAgaWYgKHRoaXMuJCRlbGVtZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJCRlbGVtZW50LmRpc3Bvc2UodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLiQkZWxlbWVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XG5pbXBvcnQge2luamVjdG9yfSBmcm9tICcuL2luamVjdG9yJztcblxuZXhwb3J0IGNsYXNzIERpcmVjdGl2ZSB7XG4gICAgZ2V0ICRodG1sRWxlbWVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuJGVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQuaHRtbEVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBnZXQgJGNvbXBvbmVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuJGVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQub3duZXJDb21wb25lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBnZXQgJHNjb3BlKCkge1xuICAgICAgICBpZiAodGhpcy4kYmluZGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kYmluZGluZy5zY29wZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBEaXJlY3RpdmUuY29uc3RydWN0LmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnN0cnVjdCgpIHtcbiAgICAgICAgLy8gcHJpdmF0ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHRoaXMuJCRkaXNwb3NlcnMgPSBbXTtcbiAgICAgICAgdGhpcy4kJGNhbmNlbEFuaW1hdGlvblRva2VuID0gZmFsc2U7XG4gICAgICAgIC8vIHByaXZhdGUgcHJvcGVydGllc1xuXG4gICAgICAgIC8vIHB1YmxpYyBwcm9wZXJ0aWVzXG4gICAgICAgIHRoaXMuJG91dHB1dCA9IGZhbHNlO1xuICAgICAgICB0aGlzLiRiaW5kaW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy4kYXR0ciA9IG51bGw7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLiRwcmlvcml0eSA9IDA7XG4gICAgICAgIHRoaXMuJGVsZW1lbnRsb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgLy8gcHVibGljIHByb3BlcnRpZXNcblxuICAgICAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzKTtcbiAgICB9XG5cbiAgICAkaG9va3MoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvbkluaXQ6ICcnLFxuICAgICAgICAgICAgb25Db21waWxlOiAnJyxcbiAgICAgICAgICAgIG9uSW5zZXJ0OiAnJyxcbiAgICAgICAgICAgIG9uRGV0ZWN0OiAnJyxcbiAgICAgICAgICAgIG9uVXBkYXRlOiAnJyxcbiAgICAgICAgICAgIG9uRGVzdHJveTogJydcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAkZ2V0TWV0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRtZXRhIHx8IHt9O1xuICAgIH1cblxuICAgICRzZXRNZXRhKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJCRtZXRhID0gdmFsdWU7XG4gICAgfVxuXG4gICAgJGJpbmROb2RlKG5vZGUpIHtcbiAgICAgICAgdGhpcy4kYXR0ciA9IG5vZGU7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSBub2RlLm93bmVyRWxlbWVudDtcbiAgICB9XG5cbiAgICAkc2V0QmluZGluZyhiaW5kaW5nKSB7XG4gICAgICAgIHRoaXMuJGJpbmRpbmcgPSBiaW5kaW5nO1xuICAgIH1cblxuICAgICRjb21waWxlKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkNvbXBpbGUpKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ29tcGlsZS5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGluc2VydCgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25JbnNlcnQpKSB7XG4gICAgICAgICAgICB0aGlzLm9uSW5zZXJ0LmNhbGwodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uRW50ZXIpIHx8IHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkxlYXZlKSkge1xuICAgICAgICAgICAgdGhpcy4kcmVxdWVzdEFuaW1hdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGlzTG9hZGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kaHRtbEVsZW1lbnQuY2xpZW50V2lkdGggPiAwICYmIHRoaXMuJGh0bWxFbGVtZW50LmNsaWVudEhlaWdodCA+IDA7XG4gICAgfVxuXG4gICAgJHJlcXVlc3RBbmltYXRpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBmdW5jdGlvbiBxdWVyeSgpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLiQkY2FuY2VsQW5pbWF0aW9uVG9rZW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZWxmLiRpc0xvYWRlZCgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzZWxmLiRlbGVtZW50bG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJGVsZW1lbnRsb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5vbkVudGVyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub25FbnRlci5jYWxsKHNlbGYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuJGVsZW1lbnRsb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kZWxlbWVudGxvYWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5vbkxlYXZlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub25MZWF2ZS5jYWxsKHNlbGYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocXVlcnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHF1ZXJ5KTtcbiAgICB9XG5cbiAgICAkY2FuY2VsQW5pbWF0aW9uKCkge1xuICAgICAgICB0aGlzLiQkY2FuY2VsQW5pbWF0aW9uVG9rZW4gPSB0cnVlO1xuICAgIH1cblxuICAgICRkZXRlY3QoKSB7XG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25EZXRlY3QpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkRldGVjdC5jYWxsKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuJGJpbmRpbmcuZGV0ZWN0KCkpIHtcbiAgICAgICAgICAgIHRoaXMuJHVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJHVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vblVwZGF0ZSkpIHtcbiAgICAgICAgICAgIHRoaXMub25VcGRhdGUuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICRnZXRBdHRyVmFsdWUoYXR0ck5hbWUpIHtcbiAgICAgICAgdmFyIGF0dHJOb2RlID0gdGhpcy4kZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuXG4gICAgICAgIGlmIChhdHRyTm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXR0ck5vZGUuYmluZGluZy52YWx1ZTtcbiAgICB9XG5cbiAgICAkZGlzcG9zZShkZXN0cm95RnJvbUF0dHIpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuJGNhbmNlbEFuaW1hdGlvbigpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25EZXN0cm95KSkge1xuICAgICAgICAgICAgdGhpcy5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZXN0cm95RnJvbUF0dHIpIHtcbiAgICAgICAgICAgIHRoaXMuJGF0dHIgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy4kZWxlbWVudCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiQkZGlzcG9zZXJzLmZvckVhY2goZnVuY3Rpb24gKGRpc3Bvc2VyKSB7XG4gICAgICAgICAgICBkaXNwb3Nlci5jYWxsKHNlbGYpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRiaW5kaW5nID0gbnVsbDtcbiAgICB9XG5cbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy4kZGlzcG9zZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLiRhdHRyICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJGF0dHIuZGlzcG9zZSh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuJGF0dHIgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy4kZWxlbWVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XG5pbXBvcnQge2luamVjdG9yfSBmcm9tICcuL2luamVjdG9yJztcblxuZXhwb3J0IGNsYXNzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgRmlsdGVyLmNvbnN0cnVjdC5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjb25zdHJ1Y3QoKSB7XG4gICAgICAgIGluamVjdG9yLmluamVjdFNlcnZpY2VzKHRoaXMpO1xuICAgIH1cblxuICAgICRob29rcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9uSW5pdDogJycsXG4gICAgICAgICAgICBvbkRlc3Ryb3k6ICcnXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgJGdldE1ldGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkbWV0YSB8fCB7fTtcbiAgICB9XG5cbiAgICAkc2V0TWV0YSh2YWx1ZSkge1xuICAgICAgICB0aGlzLiQkbWV0YSA9IHZhbHVlO1xuICAgIH1cblxuICAgICRleGVjdXRlKCkge1xuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uRXhlY3V0ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9uRXhlY3V0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25EZXN0cm95KSkge1xuICAgICAgICAgICAgdGhpcy5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5JztcbmltcG9ydCB7IHR5cGVDb25zdCwgaW5qZWN0b3IsIEluamVjdG9yIH0gZnJvbSAnLi9pbmplY3Rvcic7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGaWx0ZXIgfSBmcm9tICcuL2ZpbHRlcic7XG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlJztcblxuZnVuY3Rpb24gbmFtZXNwYWNlKG5zKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tcG9uZW50OiBmdW5jdGlvbiAobmFtZSwgZGVmKSB7XG4gICAgICAgICAgICBkZWYubmFtZXNwYWNlID0gbnM7XG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50KG5hbWUsIGRlZik7XG4gICAgICAgIH0sXG4gICAgICAgIGRpcmVjdGl2ZTogZnVuY3Rpb24gKG5hbWUsIGRlZikge1xuICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZGVmKSkge1xuICAgICAgICAgICAgICAgIGRlZiA9IHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25JbnNlcnQ6IGRlZixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVXBkYXRlOiBkZWZcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWYubmFtZXNwYWNlID0gbnM7XG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aXZlKG5hbWUsIGRlZik7XG4gICAgICAgIH0sXG4gICAgICAgIHNlcnZpY2U6IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcbiAgICAgICAgICAgIGRlZi5uYW1lc3BhY2UgPSBucztcbiAgICAgICAgICAgIHJldHVybiBzZXJ2aWNlKG5hbWUsIGRlZik7XG4gICAgICAgIH0sXG4gICAgICAgIGZpbHRlcjogZnVuY3Rpb24gKG5hbWUsIGRlZikge1xuICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZGVmKSkge1xuICAgICAgICAgICAgICAgIGRlZiA9IHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25FeGVjdXRlOiBkZWZcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWYubmFtZXNwYWNlID0gbnM7XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyKG5hbWUsIGRlZik7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnQobmFtZSwgZGVmKSB7XG4gICAgcmV0dXJuIGluamVjdG9yLmJ1aWxkQ29uc3RydWN0b3IobmFtZSwgZGVmLCB7XG4gICAgICAgIGNvbnRyYWN0VHlwZTogdHlwZUNvbnN0LmNvbXBvbmVudCxcbiAgICAgICAgc3VwZXJDbGFzczogbWFrZUNvbnN0cnVjdG9yKENvbXBvbmVudClcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGlyZWN0aXZlKG5hbWUsIGRlZikge1xuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGRlZikpIHtcbiAgICAgICAgZGVmID0ge1xuICAgICAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgICAgIG9uSW5zZXJ0OiBkZWYsXG4gICAgICAgICAgICAgICAgb25VcGRhdGU6IGRlZlxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBpbmplY3Rvci5idWlsZENvbnN0cnVjdG9yKG5hbWUsIGRlZiwge1xuICAgICAgICBjb250cmFjdFR5cGU6IHR5cGVDb25zdC5kaXJlY3RpdmUsXG4gICAgICAgIHN1cGVyQ2xhc3M6IG1ha2VDb25zdHJ1Y3RvcihEaXJlY3RpdmUpXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGZpbHRlcihuYW1lLCBkZWYpIHtcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihkZWYpKSB7XG4gICAgICAgIGRlZiA9IHtcbiAgICAgICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgICAgICBvbkV4ZWN1dGU6IGRlZlxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBpbmplY3Rvci5idWlsZENvbnN0cnVjdG9yKG5hbWUsIGRlZiwge1xuICAgICAgICBjb250cmFjdFR5cGU6IHR5cGVDb25zdC5maWx0ZXIsXG4gICAgICAgIHN1cGVyQ2xhc3M6IG1ha2VDb25zdHJ1Y3RvcihGaWx0ZXIpXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNlcnZpY2UobmFtZSwgZGVmKSB7XG4gICAgcmV0dXJuIGluamVjdG9yLmJ1aWxkQ29uc3RydWN0b3IobmFtZSwgZGVmLCB7XG4gICAgICAgIGNvbnRyYWN0VHlwZTogdHlwZUNvbnN0LnNlcnZpY2UsXG4gICAgICAgIHN1cGVyQ2xhc3M6IG1ha2VDb25zdHJ1Y3RvcihTZXJ2aWNlKVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBpc0NvbXBvbmVudChvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgQ29tcG9uZW50O1xufVxuXG5mdW5jdGlvbiBpc0RpcmVjdGl2ZShvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgRGlyZWN0aXZlO1xufVxuXG5mdW5jdGlvbiBpc0ZpbHRlcihvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgRmlsdGVyO1xufVxuXG5mdW5jdGlvbiBpc1NlcnZpY2Uob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIFNlcnZpY2U7XG59XG5cbmZ1bmN0aW9uIGJvb3RzdHJhcChzZWxlY3Rvck9yRWxlbWVudCkge1xuICAgIHZhciBlbGVtZW50LCB0cGw7XG5cbiAgICBpZiAodXRpbHMuaXNTdHJpbmcoc2VsZWN0b3JPckVsZW1lbnQpKSB7XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yT3JFbGVtZW50KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGVsZW1lbnQgPSBzZWxlY3Rvck9yRWxlbWVudDtcbiAgICB9XG5cbiAgICB0cGwgPSBlbGVtZW50LmlubmVySFRNTDtcblxuICAgIG5ldyBDb21wb25lbnQoe1xuICAgICAgICB0ZW1wbGF0ZTogdHBsXG4gICAgfSkuJG1vdW50KGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBtYWtlQ29uc3RydWN0b3IoY2xzKSB7XG4gICAgZnVuY3Rpb24gZigpIHtcbiAgICAgICAgY2xzLmNvbnN0cnVjdC5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIGYucHJvdG90eXBlID0gY2xzLnByb3RvdHlwZTtcbiAgICByZXR1cm4gZjtcbn1cblxuZXhwb3J0IHtcbiAgICB0eXBlQ29uc3QsXG4gICAgaW5qZWN0b3IsXG4gICAgSW5qZWN0b3IsXG4gICAgQ29tcG9uZW50LFxuICAgIERpcmVjdGl2ZSxcbiAgICBGaWx0ZXIsXG4gICAgU2VydmljZSxcbiAgICBpc0NvbXBvbmVudCxcbiAgICBpc0RpcmVjdGl2ZSxcbiAgICBpc0ZpbHRlcixcbiAgICBpc1NlcnZpY2UsXG4gICAgbmFtZXNwYWNlLFxuICAgIGNvbXBvbmVudCxcbiAgICBkaXJlY3RpdmUsXG4gICAgZmlsdGVyLFxuICAgIHNlcnZpY2UsXG4gICAgYm9vdHN0cmFwXG59OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xuaW1wb3J0IHsgTWVzc2VuZ2VyIH0gZnJvbSAnLi4vdXRpbGl0eS9tZXNzYWdlJztcblxudmFyIHR5cGVDb25zdCA9IHtcbiAgICBmaWx0ZXI6ICdmaWx0ZXInLFxuICAgIHNlcnZpY2U6ICdzZXJ2aWNlJyxcbiAgICBjb21wb25lbnQ6ICdjb21wb25lbnQnLFxuICAgIGRpcmVjdGl2ZTogJ2RpcmVjdGl2ZSdcbn07XG5cbnZhciBuYW1lUGF0dGVybiA9IC9eW2Etel9cXCRdW1xcd1xcJC1dKi9pO1xuXG5jbGFzcyBJbmplY3RvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0ge307XG4gICAgICAgIHRoaXMud2FpdGluZ1RvRXh0ZW5kcyA9IHt9O1xuICAgICAgICB0aGlzLmluc0NvbnRhaW5lciA9IHt9O1xuICAgIH1cblxuICAgIGdldE1hcHBpbmcoY29udHJhY3RUeXBlKSB7XG4gICAgICAgIGlmICghdGhpcy5jb250YWluZXJbY29udHJhY3RUeXBlXSkge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXJbY29udHJhY3RUeXBlXSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcltjb250cmFjdFR5cGVdO1xuICAgIH1cblxuICAgIGdldEluc3RhbmNlcyhjb250cmFjdFR5cGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmluc0NvbnRhaW5lcltjb250cmFjdFR5cGVdKSB7XG4gICAgICAgICAgICB0aGlzLmluc0NvbnRhaW5lcltjb250cmFjdFR5cGVdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zQ29udGFpbmVyW2NvbnRyYWN0VHlwZV07XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIoY29udHJhY3RUeXBlLCBzZWxlY3RvciwgY29uc3RydWN0b3IpIHtcbiAgICAgICAgaWYgKHNlbGVjdG9yLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSWxsZWdhbCBjaGFyYWN0ZXIgXCIuXCInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtYXBwaW5nID0gdGhpcy5nZXRNYXBwaW5nKGNvbnRyYWN0VHlwZSk7XG5cbiAgICAgICAgaWYgKG1hcHBpbmdbc2VsZWN0b3JdID09IG51bGwpIHtcbiAgICAgICAgICAgIG1hcHBpbmdbc2VsZWN0b3JdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IG1hcHBpbmdbc2VsZWN0b3JdLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnByb3RvdHlwZS4kJG1ldGEubmFtZXNwYWNlID09PSBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuJCRtZXRhLm5hbWVzcGFjZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHNlbGVjdG9yICsgJyBpcyBleGlzdCB1bmRlciBuYW1lc3BhY2UgJyArIG1hdGNoZXNbMF0ucHJvdG90eXBlLiQkbWV0YS5uYW1lc3BhY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWFwcGluZ1tzZWxlY3Rvcl0ucHVzaChjb25zdHJ1Y3Rvcik7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJDb21wb25lbnQoc2VsZWN0b3IsIGNvbnN0cnVjdG9yKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIodHlwZUNvbnN0LmNvbXBvbmVudCwgc2VsZWN0b3IsIGNvbnN0cnVjdG9yKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckRpcmVjdGl2ZShzZWxlY3RvciwgY29uc3RydWN0b3IpIHtcbiAgICAgICAgdGhpcy5yZWdpc3Rlcih0eXBlQ29uc3QuZGlyZWN0aXZlLCBzZWxlY3RvciwgY29uc3RydWN0b3IpO1xuICAgIH1cblxuICAgIGNvbnRhaW5zKGNvbnRyYWN0VHlwZSwgc2VsZWN0b3IsIGlnbm9yZUNhc2UpIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9ycywgbWFwcGluZyA9IHRoaXMuZ2V0TWFwcGluZyhjb250cmFjdFR5cGUpO1xuICAgICAgICB2YXIgc2VnbWVudHMgPSBzZWxlY3Rvci5zcGxpdCgnLicpO1xuICAgICAgICB2YXIgbmFtZXNwYWNlID0gJyc7XG5cbiAgICAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yID0gc2VnbWVudHMucG9wKCk7XG4gICAgICAgICAgICBuYW1lc3BhY2UgPSBzZWdtZW50cy5qb2luKCcuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaWdub3JlQ2FzZSkge1xuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gdXRpbHMuZ2V0UHJvcGVydHkobWFwcGluZywgc2VsZWN0b3IsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gbWFwcGluZ1tzZWxlY3Rvcl07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uc3RydWN0b3JzID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuYW1lc3BhY2UgJiYgY29uc3RydWN0b3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB2YXIgbWV0YSA9IGl0ZW0ucHJvdG90eXBlLiQkbWV0YTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0YS5uYW1lc3BhY2UgJiYgdXRpbHMubG93ZXJjYXNlKG1ldGEubmFtZXNwYWNlKSA9PT0gdXRpbHMubG93ZXJjYXNlKG5hbWVzcGFjZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNvbnN0cnVjdG9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb250YWluc0NvbXBvbmVudChzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWlucyh0eXBlQ29uc3QuY29tcG9uZW50LCBzZWxlY3RvciwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgY29udGFpbnNEaXJlY3RpdmUoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbnModHlwZUNvbnN0LmRpcmVjdGl2ZSwgc2VsZWN0b3IsIHRydWUpO1xuICAgIH1cblxuICAgIGdldChjb250cmFjdFR5cGUsIHNlbGVjdG9yLCBpZ25vcmVDYXNlKSB7XG4gICAgICAgIHZhciBjb25zdHJ1Y3RvcnMsIG1hcHBpbmcgPSB0aGlzLmdldE1hcHBpbmcoY29udHJhY3RUeXBlKTtcbiAgICAgICAgdmFyIHNlZ21lbnRzID0gc2VsZWN0b3Iuc3BsaXQoJy4nKTtcbiAgICAgICAgdmFyIG5hbWVzcGFjZSA9ICcnO1xuXG4gICAgICAgIGlmIChzZWdtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBzZWxlY3RvciA9IHNlZ21lbnRzLnBvcCgpO1xuICAgICAgICAgICAgbmFtZXNwYWNlID0gc2VnbWVudHMuam9pbignLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlnbm9yZUNhc2UpIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IHV0aWxzLmdldFByb3BlcnR5KG1hcHBpbmcsIHNlbGVjdG9yLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IG1hcHBpbmdbc2VsZWN0b3JdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnN0cnVjdG9ycyA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY29udHJhY3RUeXBlICsgJyAnICsgc2VsZWN0b3IgKyAnIGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmFtZXNwYWNlICYmIGNvbnN0cnVjdG9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1ldGEgPSBpdGVtLnByb3RvdHlwZS4kJG1ldGE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGEubmFtZXNwYWNlICYmIHV0aWxzLmxvd2VyY2FzZShtZXRhLm5hbWVzcGFjZSkgPT09IHV0aWxzLmxvd2VyY2FzZShuYW1lc3BhY2UpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChjb25zdHJ1Y3RvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHNlbGVjdG9yICsgJyBpcyBub3QgZXhpc3QgdW5kZXIgbmFtZXNwYWNlICcgKyBuYW1lc3BhY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnN0cnVjdG9ycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB2YXIgbmFtZXNwYWNlcyA9IGNvbnN0cnVjdG9ycy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5wcm90b3R5cGUuJCRtZXRhLm5hbWVzcGFjZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCduYW1lc3BhY2UgJyArIG5hbWVzcGFjZXMuam9pbignfCcpICsgJyBhbGwgaGF2ZSAnICsgc2VsZWN0b3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yc1swXTtcbiAgICB9XG5cbiAgICBnZXRDb21wb25lbnQoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHR5cGVDb25zdC5jb21wb25lbnQsIHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICBnZXREaXJlY3RpdmUoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHR5cGVDb25zdC5kaXJlY3RpdmUsIHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICBnZXRGaWx0ZXIoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHR5cGVDb25zdC5maWx0ZXIsIHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICBnZXRTZXJ2aWNlKHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCh0eXBlQ29uc3Quc2VydmljZSwgc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIGNyZWF0ZShjb250cmFjdFR5cGUsIHNlbGVjdG9yKSB7XG4gICAgICAgIHZhciBjb25zdHJ1Y3RvciA9IHRoaXMuZ2V0KGNvbnRyYWN0VHlwZSwgc2VsZWN0b3IpLCBpbnN0YW5jZTtcblxuICAgICAgICBzd2l0Y2ggKGNvbnRyYWN0VHlwZSkge1xuICAgICAgICAgICAgY2FzZSB0eXBlQ29uc3QuY29tcG9uZW50OlxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5jcmVhdGVDb21wb25lbnQoY29uc3RydWN0b3IpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlQ29uc3QuZGlyZWN0aXZlOlxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5jcmVhdGVEaXJlY3RpdmUoY29uc3RydWN0b3IpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlQ29uc3QuZmlsdGVyOlxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5jcmVhdGVGaWx0ZXIoY29uc3RydWN0b3IpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlQ29uc3Quc2VydmljZTpcbiAgICAgICAgICAgICAgICBpbnN0YW5jZSA9IHRoaXMuY3JlYXRlU2VydmljZShjb25zdHJ1Y3Rvcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IGNvbnN0cnVjdG9yKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY3JlYXRlQ29tcG9uZW50KGNvbnN0cnVjdG9yKSB7XG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhjb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yID0gdGhpcy5nZXRDb21wb25lbnQoY29uc3RydWN0b3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgY29uc3RydWN0b3IoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVEaXJlY3RpdmUoY29uc3RydWN0b3IpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGNvbnN0cnVjdG9yKSkge1xuICAgICAgICAgICAgY29uc3RydWN0b3IgPSB0aGlzLmdldERpcmVjdGl2ZShjb25zdHJ1Y3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBjb25zdHJ1Y3RvcigpO1xuICAgIH1cblxuICAgIGNyZWF0ZUZpbHRlcihjb25zdHJ1Y3Rvcikge1xuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoY29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvciA9IHRoaXMuZ2V0RmlsdGVyKGNvbnN0cnVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IGNvbnN0cnVjdG9yKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlU2VydmljZShjb25zdHJ1Y3Rvcikge1xuICAgICAgICB2YXIgaW5zdGFuY2UsIHNlcnZpY2VzID0gdGhpcy5nZXRJbnN0YW5jZXModHlwZUNvbnN0LnNlcnZpY2UpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhjb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yID0gdGhpcy5nZXRTZXJ2aWNlKGNvbnN0cnVjdG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY29uc3RydWN0b3IucHJvdG90eXBlLiQkbWV0YS5ub25TaGFyZWQpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBzZXJ2aWNlcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbSBpbnN0YW5jZW9mIGNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPSByZXN1bHRbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWluc3RhbmNlKSB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyBjb25zdHJ1Y3RvcigpO1xuICAgICAgICAgICAgc2VydmljZXMucHVzaChpbnN0YW5jZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgc2VydmljZShzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTZXJ2aWNlKHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICBnZXRXYWl0aW5nVG9FeHRlbmRzKGNvbnRyYWN0VHlwZSkge1xuICAgICAgICBpZiAoIXRoaXMud2FpdGluZ1RvRXh0ZW5kc1tjb250cmFjdFR5cGVdKSB7XG4gICAgICAgICAgICB0aGlzLndhaXRpbmdUb0V4dGVuZHNbY29udHJhY3RUeXBlXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLndhaXRpbmdUb0V4dGVuZHNbY29udHJhY3RUeXBlXTtcbiAgICB9XG5cbiAgICBzZXRXYWl0aW5nVG9FeHRlbmRzKGNvbnRyYWN0VHlwZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy53YWl0aW5nVG9FeHRlbmRzW2NvbnRyYWN0VHlwZV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBjaGVja1NlbGVjdG9yKHNlbGVjdG9yLCBjb250cmFjdFR5cGUpIHtcbiAgICAgICAgaWYgKG5hbWVQYXR0ZXJuLnRlc3Qoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICB2YXIgY29uc3RydWN0b3JOYW1lID0gJyc7XG4gICAgICAgICAgICB2YXIgc2VnbWVudHMgPSBzZWxlY3Rvci5zcGxpdCgnLScpO1xuXG4gICAgICAgICAgICBzZWdtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzZWdtZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3JOYW1lICs9IHV0aWxzLnVwcGVyY2FzZShzZWdtZW50WzBdKSArIHNlZ21lbnQuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoY29udHJhY3RUeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSB0eXBlQ29uc3QuY29tcG9uZW50OlxuICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5hbWUgKz0gJ0NvbXBvbmVudCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdHlwZUNvbnN0LmRpcmVjdGl2ZTpcbiAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3JOYW1lICs9ICdEaXJlY3RpdmUnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHR5cGVDb25zdC5maWx0ZXI6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yTmFtZSArPSAnRmlsdGVyJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSB0eXBlQ29uc3Quc2VydmljZTpcbiAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3JOYW1lICs9ICdTZXJ2aWNlJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3Rvck5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc2VsZWN0b3IgKyAnaXMgbm90IGEgdmFsaWQgbmFtZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYnVpbGRDb25zdHJ1Y3RvcihzZWxlY3RvciwgbWV0YSwgb3B0aW9ucykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcixcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yTmFtZSA9IHRoaXMuY2hlY2tTZWxlY3RvcihzZWxlY3Rvciwgb3B0aW9ucy5jb250cmFjdFR5cGUpLFxuICAgICAgICAgICAgd2FpdGluZ1RvRXh0ZW5kcyA9IHNlbGYuZ2V0V2FpdGluZ1RvRXh0ZW5kcyhvcHRpb25zLmNvbnRyYWN0VHlwZSksXG4gICAgICAgICAgICBvbkNvbnN0cnVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihjb25zdHJ1Y3Rvci5zdXBlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3Iuc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24obWV0YS5jb25zdHJ1Y3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGEuY29uc3RydWN0LmNhbGwodGhpcywgTWVzc2VuZ2VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IEZ1bmN0aW9uKCdvbkNvbnN0cnVjdCcsICdcInVzZSBzdHJpY3RcIjtyZXR1cm4gZnVuY3Rpb24gJyArIGNvbnN0cnVjdG9yTmFtZSArICcoKXtvbkNvbnN0cnVjdC5jYWxsKHRoaXMpO307Jykob25Db25zdHJ1Y3QpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKG9wdGlvbnMuc3VwZXJDbGFzcykpIHtcbiAgICAgICAgICAgIHV0aWxzLmluaGVyaXQoY29uc3RydWN0b3IsIG9wdGlvbnMuc3VwZXJDbGFzcyk7XG4gICAgICAgIH1cblxuICAgICAgICBtZXRhLnNlbGVjdG9yID0gc2VsZWN0b3I7XG5cbiAgICAgICAgLy8gYXBwbHkgcHJvcGVydGllcyBhbmQgbWV0aG9kc1xuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcobWV0YS5leHRlbmRzKSkge1xuICAgICAgICAgICAgaWYgKGluamVjdG9yLmNvbnRhaW5zKG9wdGlvbnMuY29udHJhY3RUeXBlLCBtZXRhLmV4dGVuZHMpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN1cGVyT25lID0gaW5qZWN0b3IuZ2V0KG9wdGlvbnMuY29udHJhY3RUeXBlLCBtZXRhLmV4dGVuZHMpO1xuICAgICAgICAgICAgICAgIHJlbWFpbkNvbnN0cnVjdG9yKHNlbGVjdG9yLCBtZXRhLCBjb25zdHJ1Y3Rvciwgc3VwZXJPbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgd2FpdGluZ1RvRXh0ZW5kcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgc3VwZXJOYW1lOiBtZXRhLmV4dGVuZHMsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoc3VwZXJPbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbWFpbkNvbnN0cnVjdG9yKHNlbGVjdG9yLCBtZXRhLCBjb25zdHJ1Y3Rvciwgc3VwZXJPbmUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZW1haW5Db25zdHJ1Y3RvcihzZWxlY3RvciwgbWV0YSwgY29uc3RydWN0b3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZXh0ZW5kTWV0YShtZXRhLCBzdXBlck9uZSkge1xuICAgICAgICAgICAgaWYgKHN1cGVyT25lLnByb3RvdHlwZS4kJG1ldGEgJiYgc3VwZXJPbmUucHJvdG90eXBlLiQkbWV0YS5wcm90ZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Iob3B0aW9ucy5jb250cmFjdFR5cGUgKyAnOiAnICsgbWV0YS5leHRlbmRzICsgJyBpcyBwcm90ZWN0ZWQsIGl0IGlzIG5vdCBhbGxvd2VkIHRvIGV4dGVuZCEnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHN1cGVyTWV0YSA9IHN1cGVyT25lLnByb3RvdHlwZS4kJG1ldGE7XG4gICAgICAgICAgICB2YXIgY29weSA9IHV0aWxzLmNvcHkodHJ1ZSwgc3VwZXJNZXRhLCBmdW5jdGlvbiAob2JqLCBrZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIShvYmogPT09IHN1cGVyTWV0YSAmJiAoa2V5ID09PSAnY29uc3RydWN0JyB8fCBrZXkgPT09ICdtZXRob2RzJykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdXRpbHMubWVyZ2UodHJ1ZSwgY29weSwgbWV0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZW1haW5Db25zdHJ1Y3RvcihzZWxlY3RvciwgbWV0YSwgY29uc3RydWN0b3IsIHN1cGVyT25lKSB7XG4gICAgICAgICAgICBpZiAoc3VwZXJPbmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHV0aWxzLmluaGVyaXQoY29uc3RydWN0b3IsIHN1cGVyT25lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY3JlYXRlIG1ldGhvZHNcbiAgICAgICAgICAgIGlmICh1dGlscy5pc09iamVjdChtZXRhLm1ldGhvZHMpKSB7XG4gICAgICAgICAgICAgICAgdXRpbHMuZXh0ZW5kKGNvbnN0cnVjdG9yLnByb3RvdHlwZSwgbWV0YS5tZXRob2RzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5yZWdpc3RlckNvbnN0cnVjdG9yKG9wdGlvbnMuY29udHJhY3RUeXBlLCBzZWxlY3RvciwgY29uc3RydWN0b3IsIG1ldGEpO1xuXG4gICAgICAgICAgICAvLyBjaGVjayBpZiB0aGVyZSBpcyBhbnkgY29tcG9uZW50IGV4dGVuZHMgY3VycmVudCBjb21wb25lbnRcbiAgICAgICAgICAgIHZhciB3YWl0aW5nVG9FeHRlbmRzMiA9IFtdLCBmdWxsU2VsZWN0b3IgPSBtZXRhLm5hbWVzcGFjZSArICcuJyArIHNlbGVjdG9yO1xuICAgICAgICAgICAgd2FpdGluZ1RvRXh0ZW5kcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uc3VwZXJOYW1lID09PSBmdWxsU2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jYWxsYmFjay5jYWxsKG51bGwsIGNvbnN0cnVjdG9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdhaXRpbmdUb0V4dGVuZHMyLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZWxmLnNldFdhaXRpbmdUb0V4dGVuZHMob3B0aW9ucy5jb250cmFjdFR5cGUsIHdhaXRpbmdUb0V4dGVuZHMyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgICB9XG5cbiAgICByZWdpc3RlckNvbnN0cnVjdG9yKGNvbnRyYWN0VHlwZSwgc2VsZWN0b3IsIGNvbnN0cnVjdG9yLCBtZXRhKSB7XG4gICAgICAgIHZhciBzdXBlck1ldGEgPSBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuJCRtZXRhO1xuXG4gICAgICAgIGlmIChzdXBlck1ldGEgJiYgc3VwZXJNZXRhLnByb3RlY3RlZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGNvbnRyYWN0VHlwZSArICc6ICcgKyBtZXRhLmV4dGVuZHMgKyAnIGlzIHByb3RlY3RlZCwgaXQgaXMgbm90IGFsbG93ZWQgdG8gZXh0ZW5kIScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNvcHkgPSB1dGlscy5jb3B5KHRydWUsIHN1cGVyTWV0YSwgZnVuY3Rpb24gKG9iaiwga2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gIShvYmogPT09IHN1cGVyTWV0YSAmJiAoa2V5ID09PSAnY29uc3RydWN0JyB8fCBrZXkgPT09ICdtZXRob2RzJykpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZXRhID0gdXRpbHMubWVyZ2UodHJ1ZSwgY29weSwgbWV0YSk7XG5cbiAgICAgICAgY29uc3RydWN0b3IucHJvdG90eXBlLiQkbWV0YSA9IG1ldGE7XG5cbiAgICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IGlmIGl0IGlzIGdsb2JhbFxuICAgICAgICBpZiAoIW1ldGEubG9jYWwpIHtcbiAgICAgICAgICAgIGluamVjdG9yLnJlZ2lzdGVyKGNvbnRyYWN0VHlwZSwgc2VsZWN0b3IsIGNvbnN0cnVjdG9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluamVjdFNlcnZpY2VzKGluc3RhbmNlKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgbWV0YSA9IGluc3RhbmNlLiRnZXRNZXRhKCk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzT2JqZWN0KG1ldGEuaW5qZWN0KSkge1xuICAgICAgICAgICAgdXRpbHMuZm9yRWFjaChtZXRhLmluamVjdCwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoaW5zdGFuY2UsIGtleSwge1xuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJpdmF0ZUtleSA9ICckJCcgKyBrZXk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZVtwcml2YXRlS2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VbcHJpdmF0ZUtleV0gPSBzZWxmLmNyZWF0ZVNlcnZpY2UodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2VbcHJpdmF0ZUtleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG52YXIgaW5qZWN0b3IgPSBuZXcgSW5qZWN0b3IoKTtcblxuZXhwb3J0IHsgdHlwZUNvbnN0LCBJbmplY3RvciwgaW5qZWN0b3IgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcbmltcG9ydCB7aW5qZWN0b3J9IGZyb20gJy4vaW5qZWN0b3InO1xuXG5leHBvcnQgY2xhc3MgU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIFNlcnZpY2UuY29uc3RydWN0LmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnN0cnVjdCgpIHtcbiAgICAgICAgaW5qZWN0b3IuaW5qZWN0U2VydmljZXModGhpcyk7XG4gICAgfVxuXG4gICAgJGhvb2tzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb25Jbml0OiAnJyxcbiAgICAgICAgICAgIG9uRGVzdHJveTogJydcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAkZ2V0TWV0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRtZXRhIHx8IHt9O1xuICAgIH1cblxuICAgICRzZXRNZXRhKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJCRtZXRhID0gdmFsdWU7XG4gICAgfVxuXG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25EZXN0cm95KSkge1xuICAgICAgICAgICAgdGhpcy5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9