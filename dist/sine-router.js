(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sineRouter"] = factory();
	else
		root["sineRouter"] = factory();
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./src/router.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _router__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _router__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _router_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router-view */ "./src/router-view.js");
/* harmony import */ var _router_view__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_router_view__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _router_view__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _router_view__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _router_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router-link */ "./src/router-link.js");
/* harmony import */ var _router_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_router_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _router_link__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _router_link__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/router-link.js":
/*!****************************!*\
  !*** ./src/router-link.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

var RouterLinkComponent = (_dec = sine.decorator.component({
  namespace: 'sine.router',
  selector: 'router-link',
  template: '<span class="link" style="cursor: pointer;" @click="navigate()" *n-embed></span>',
  inject: {
    $router: '$router'
  }
}), _dec(_class =
/*#__PURE__*/
function (_sine$Component) {
  _inherits(RouterLinkComponent, _sine$Component);

  function RouterLinkComponent() {
    var _this;

    _classCallCheck(this, RouterLinkComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RouterLinkComponent).call(this));
    _this.to = '';
    return _this;
  }

  _createClass(RouterLinkComponent, [{
    key: "navigate",
    value: function navigate() {
      this.$router.navigate(this.to);
    }
  }]);

  return RouterLinkComponent;
}(sine.Component)) || _class);

/***/ }),

/***/ "./src/router-view.js":
/*!****************************!*\
  !*** ./src/router-view.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RouterViewComponent = (_dec = sine.decorator.component({
  namespace: 'sine.router',
  selector: 'router-view',
  inject: {
    $animate: '$animate',
    $router: '$router'
  }
}), _dec(_class =
/*#__PURE__*/
function (_sine$Component) {
  _inherits(RouterViewComponent, _sine$Component);

  function RouterViewComponent() {
    var _this;

    _classCallCheck(this, RouterViewComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RouterViewComponent).call(this));

    var self = _assertThisInitialized(_this);

    _this.activeCmp = null;
    _this.activeRoute = null;
    _this.activeRouteLevel = null;
    _this.parentRoute = null;
    _this.routes = [];

    _this.onRouteChange = function () {
      self.UpdateRoute();
    };

    return _this;
  }

  _createClass(RouterViewComponent, [{
    key: "init",
    value: function init() {
      this.parentRoute = this.$$parentComponent && this.$$parentComponent.$route;
      this.activeRouteLevel = this.$$parentComponent && this.$$parentComponent.$routeLevel;

      if (!this.$router) {
        return;
      }

      var self = this; // it is root router view

      if (!this.parentRoute) {
        this.activeRouteLevel = 0;
        this.routes = this.$router.routes;
        this.$router.listen();
      } else {
        this.routes = this.parentRoute.route.children;
      }

      this.$router.routeChange.on(this.onRouteChange);
      this.UpdateRoute();
    }
  }, {
    key: "UpdateRoute",
    value: function UpdateRoute() {
      if (this.activeRouteLevel >= this.$router.activeRoutes.length) {
        this.activeRoute = null;
        return;
      }

      var activeRoute = this.$router.activeRoutes[this.activeRouteLevel];

      if (this.activeRoute === activeRoute) {
        return;
      }

      var yes = this.routes.some(function (route) {
        return activeRoute.route === route;
      });

      if (yes) {
        this.activeRoute = activeRoute;
      } else {
        this.activeRoute = null;
      }

      this.renderView();
    }
  }, {
    key: "clearView",
    value: function clearView() {
      var self = this;

      if (this.activeCmp != null) {
        this.$animate.leave(this.$$element, function () {
          self.activeCmp.$destroy();
          self.activeCmp = null;
        });
      }
    }
  }, {
    key: "renderView",
    value: function renderView() {
      var self = this;
      this.clearView();
      this.activeCmp = this.$createChildCmp(this.activeRoute.route.component);
      this.activeCmp.$route = this.activeRoute;
      this.activeCmp.$routeLevel = this.activeRouteLevel + 1;
      this.$$element.htmlElement.style.display = 'none';
      this.activeCmp.$mount(this.$$element.htmlElement);
      this.$animate.enter(this.$$element, function () {
        self.$$element.htmlElement.style.display = 'block';
      });
    }
  }, {
    key: "afterViewMount",
    value: function afterViewMount() {
      this.init();
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      if (this.activeRouteLevel === 0) {
        this.$router.stop();
      } else {
        this.$router.routeChange.off(this.onRouteChange);
      }

      this.clearView();
    }
  }]);

  return RouterViewComponent;
}(sine.Component)) || _class);

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ActiveRoute =
/*#__PURE__*/
function () {
  function ActiveRoute(route, matched, remaining, parameters) {
    _classCallCheck(this, ActiveRoute);

    this.route = route;
    this.matched = matched;
    this.remaining = remaining;
    this.parameters = parameters;
  }

  _createClass(ActiveRoute, [{
    key: "equals",
    value: function equals(activeRoute) {
      return this.matched === activeRoute.matched;
    }
  }]);

  return ActiveRoute;
}();

var RouterService = (_dec = sine.decorator.service({
  namespace: 'sine.router',
  selector: '$router'
}), _dec(_class =
/*#__PURE__*/
function (_sine$Service) {
  _inherits(RouterService, _sine$Service);

  function RouterService(routes) {
    var _this;

    _classCallCheck(this, RouterService);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RouterService).call(this));
    _this.base = '/';
    _this.mode = 'history';
    _this.routes = [];
    _this.activeRoutes = [];
    _this.routeChange = new sine.Messenger();
    return _this;
  }

  _createClass(RouterService, [{
    key: "config",
    value: function config(routes, options) {
      this.routes = routes;
      this.mode = options && options.mode && options.mode === 'history' && !!history.pushState ? 'history' : 'hash';
      this.base = options && options.base ? '/' + this.clearSlashes(options.base) + '/' : '/';
      return this;
    }
  }, {
    key: "getFragment",
    value: function getFragment() {
      var fragment = '';

      if (this.mode === 'history') {
        fragment = this.clearSlashes(decodeURI(location.pathname + location.search));
        fragment = fragment.replace(/\?(.*)$/, '');
        fragment = this.base !== '/' ? fragment.replace(this.base, '') : fragment;
      } else {
        var match = window.location.href.match(/#(.*)$/);
        fragment = match ? match[1] : '';
      }

      return this.clearSlashes(fragment);
    }
  }, {
    key: "clearSlashes",
    value: function clearSlashes(path) {
      return path.toString().replace(/\/$/, '').replace(/^\//, '');
    }
  }, {
    key: "add",
    value: function add(route) {
      this.routes.push(route);
    }
  }, {
    key: "remove",
    value: function remove(route) {
      sine.remove(this.routes, route);
    }
  }, {
    key: "flush",
    value: function flush() {
      this.routes = [];
      this.mode = null;
      this.base = '/';
      return this;
    }
  }, {
    key: "check",
    value: function check(f) {
      var fragment = f || this.getFragment(),
          activeRoutes = [];
      this.matchRoute(this.routes, fragment, activeRoutes);
      this.activeRoutes = activeRoutes;
      this.routeChange.fire();
    }
  }, {
    key: "matchRoute",
    value: function matchRoute(routes, fragment, activeRoutes) {
      if (!routes) {
        return;
      }

      var self = this;
      routes.some(function (route) {
        var activeRoute = self.matchPath(route, fragment);

        if (activeRoute) {
          if (self.activeRoutes.length > 0) {
            var oldActiveRoute = self.activeRoutes.shift();

            if (activeRoute.equals(oldActiveRoute)) {
              activeRoutes.push(oldActiveRoute);
            } else {
              activeRoutes.push(activeRoute);
            }
          } else {
            activeRoutes.push(activeRoute);
          }

          self.matchRoute(route.children, activeRoute.remaining, activeRoutes);
          return true;
        }
      });
    }
  }, {
    key: "matchPath",
    value: function matchPath(route, fragment) {
      var matches = [],
          parameters = {},
          pathItems = route.path.split('/'),
          fragmentItems = fragment.split('/');

      for (var i = 0; i < pathItems.length; i++) {
        var pathItem = pathItems[i];

        if (i >= fragmentItems.length) {
          return null;
        }

        var fragmentItem = fragmentItems[i];

        if (pathItem === fragmentItem) {
          matches.push(fragmentItem);
        } else if (pathItem.startsWith(':')) {
          matches.push(fragmentItem);
          parameters[pathItem.substring(1)] = fragmentItem;
        } else {
          return null;
        }
      }

      return new ActiveRoute(route, matches.join('/'), fragmentItems.splice(pathItems.length).join('/'), parameters);
    }
  }, {
    key: "listen",
    value: function listen() {
      var self = this;
      var current = self.getFragment();

      var fn = function fn() {
        if (current !== self.getFragment()) {
          current = self.getFragment();
          self.check(current);
        }
      };

      self.check(current);
      clearInterval(this.interval);
      this.interval = setInterval(fn, 50);
      return this;
    }
  }, {
    key: "navigate",
    value: function navigate(path) {
      path = path ? path : '';

      if (this.mode === 'history') {
        history.pushState(null, null, this.base + this.clearSlashes(path));
      } else {
        window.location.href = window.location.href.replace(/#(.*)$/, '') + '#' + path;
      }

      return this;
    }
  }, {
    key: "stop",
    value: function stop() {
      clearInterval(this.interval);
    }
  }]);

  return RouterService;
}(sine.Service)) || _class);

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW5lUm91dGVyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9zaW5lUm91dGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NpbmVSb3V0ZXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZVJvdXRlci8uL3NyYy9yb3V0ZXItbGluay5qcyIsIndlYnBhY2s6Ly9zaW5lUm91dGVyLy4vc3JjL3JvdXRlci12aWV3LmpzIiwid2VicGFjazovL3NpbmVSb3V0ZXIvLi9zcmMvcm91dGVyLmpzIl0sIm5hbWVzIjpbIlJvdXRlckxpbmtDb21wb25lbnQiLCJzaW5lIiwiZGVjb3JhdG9yIiwiY29tcG9uZW50IiwibmFtZXNwYWNlIiwic2VsZWN0b3IiLCJ0ZW1wbGF0ZSIsImluamVjdCIsIiRyb3V0ZXIiLCJ0byIsIm5hdmlnYXRlIiwiQ29tcG9uZW50IiwiUm91dGVyVmlld0NvbXBvbmVudCIsIiRhbmltYXRlIiwic2VsZiIsImFjdGl2ZUNtcCIsImFjdGl2ZVJvdXRlIiwiYWN0aXZlUm91dGVMZXZlbCIsInBhcmVudFJvdXRlIiwicm91dGVzIiwib25Sb3V0ZUNoYW5nZSIsIlVwZGF0ZVJvdXRlIiwiJCRwYXJlbnRDb21wb25lbnQiLCIkcm91dGUiLCIkcm91dGVMZXZlbCIsImxpc3RlbiIsInJvdXRlIiwiY2hpbGRyZW4iLCJyb3V0ZUNoYW5nZSIsIm9uIiwiYWN0aXZlUm91dGVzIiwibGVuZ3RoIiwieWVzIiwic29tZSIsInJlbmRlclZpZXciLCJsZWF2ZSIsIiQkZWxlbWVudCIsIiRkZXN0cm95IiwiY2xlYXJWaWV3IiwiJGNyZWF0ZUNoaWxkQ21wIiwiaHRtbEVsZW1lbnQiLCJzdHlsZSIsImRpc3BsYXkiLCIkbW91bnQiLCJlbnRlciIsImluaXQiLCJzdG9wIiwib2ZmIiwiQWN0aXZlUm91dGUiLCJtYXRjaGVkIiwicmVtYWluaW5nIiwicGFyYW1ldGVycyIsIlJvdXRlclNlcnZpY2UiLCJzZXJ2aWNlIiwiYmFzZSIsIm1vZGUiLCJNZXNzZW5nZXIiLCJvcHRpb25zIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImNsZWFyU2xhc2hlcyIsImZyYWdtZW50IiwiZGVjb2RlVVJJIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNlYXJjaCIsInJlcGxhY2UiLCJtYXRjaCIsIndpbmRvdyIsImhyZWYiLCJwYXRoIiwidG9TdHJpbmciLCJwdXNoIiwicmVtb3ZlIiwiZiIsImdldEZyYWdtZW50IiwibWF0Y2hSb3V0ZSIsImZpcmUiLCJtYXRjaFBhdGgiLCJvbGRBY3RpdmVSb3V0ZSIsInNoaWZ0IiwiZXF1YWxzIiwibWF0Y2hlcyIsInBhdGhJdGVtcyIsInNwbGl0IiwiZnJhZ21lbnRJdGVtcyIsImkiLCJwYXRoSXRlbSIsImZyYWdtZW50SXRlbSIsInN0YXJ0c1dpdGgiLCJzdWJzdHJpbmciLCJqb2luIiwic3BsaWNlIiwiY3VycmVudCIsImZuIiwiY2hlY2siLCJjbGVhckludGVydmFsIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIlNlcnZpY2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFB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OztBQUNBLFVBQUksS0FBS2YsSUFBTCxLQUFjLFNBQWxCLEVBQTZCO0FBQ3pCRyxlQUFPLENBQUNDLFNBQVIsQ0FBa0IsSUFBbEIsRUFBd0IsSUFBeEIsRUFBOEIsS0FBS0wsSUFBTCxHQUFZLEtBQUtNLFlBQUwsQ0FBa0JVLElBQWxCLENBQTFDO0FBQ0gsT0FGRCxNQUdLO0FBQ0RGLGNBQU0sQ0FBQ0wsUUFBUCxDQUFnQk0sSUFBaEIsR0FBdUJELE1BQU0sQ0FBQ0wsUUFBUCxDQUFnQk0sSUFBaEIsQ0FBcUJILE9BQXJCLENBQTZCLFFBQTdCLEVBQXVDLEVBQXZDLElBQTZDLEdBQTdDLEdBQW1ESSxJQUExRTtBQUNIOztBQUNELGFBQU8sSUFBUDtBQUNIOzs7MkJBRU07QUFDSDBCLG1CQUFhLENBQUMsS0FBS0MsUUFBTixDQUFiO0FBQ0g7Ozs7RUE5SXVCaEcsSUFBSSxDQUFDa0csTyIsImZpbGUiOiJzaW5lLXJvdXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInNpbmVSb3V0ZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wic2luZVJvdXRlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgKiBmcm9tICcuL3JvdXRlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vcm91dGVyLXZpZXcnO1xyXG5leHBvcnQgKiBmcm9tICcuL3JvdXRlci1saW5rJzsiLCJcclxuQHNpbmUuZGVjb3JhdG9yLmNvbXBvbmVudCh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lLnJvdXRlcicsXHJcbiAgICBzZWxlY3RvcjogJ3JvdXRlci1saW5rJyxcclxuICAgIHRlbXBsYXRlOiAnPHNwYW4gY2xhc3M9XCJsaW5rXCIgc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXI7XCIgQGNsaWNrPVwibmF2aWdhdGUoKVwiICpuLWVtYmVkPjwvc3Bhbj4nLFxyXG4gICAgaW5qZWN0OiB7XHJcbiAgICAgICAgJHJvdXRlcjogJyRyb3V0ZXInXHJcbiAgICB9XHJcbn0pXHJcbmNsYXNzIFJvdXRlckxpbmtDb21wb25lbnQgZXh0ZW5kcyBzaW5lLkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudG8gPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBuYXZpZ2F0ZSgpIHtcclxuICAgICAgICB0aGlzLiRyb3V0ZXIubmF2aWdhdGUodGhpcy50byk7XHJcbiAgICB9XHJcbn0iLCJcclxuQHNpbmUuZGVjb3JhdG9yLmNvbXBvbmVudCh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lLnJvdXRlcicsXHJcbiAgICBzZWxlY3RvcjogJ3JvdXRlci12aWV3JyxcclxuICAgIGluamVjdDoge1xyXG4gICAgICAgICRhbmltYXRlOiAnJGFuaW1hdGUnLFxyXG4gICAgICAgICRyb3V0ZXI6ICckcm91dGVyJ1xyXG4gICAgfVxyXG59KVxyXG5jbGFzcyBSb3V0ZXJWaWV3Q29tcG9uZW50IGV4dGVuZHMgc2luZS5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVDbXAgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlUm91dGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlUm91dGVMZXZlbCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRSb3V0ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXMgPSBbXTtcclxuICAgICAgICB0aGlzLm9uUm91dGVDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYuVXBkYXRlUm91dGUoKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRSb3V0ZSA9IHRoaXMuJCRwYXJlbnRDb21wb25lbnQgJiYgdGhpcy4kJHBhcmVudENvbXBvbmVudC4kcm91dGU7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVSb3V0ZUxldmVsID0gdGhpcy4kJHBhcmVudENvbXBvbmVudCAmJiB0aGlzLiQkcGFyZW50Q29tcG9uZW50LiRyb3V0ZUxldmVsO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuJHJvdXRlcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIC8vIGl0IGlzIHJvb3Qgcm91dGVyIHZpZXdcclxuICAgICAgICBpZiAoIXRoaXMucGFyZW50Um91dGUpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVSb3V0ZUxldmVsID0gMDtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXMgPSB0aGlzLiRyb3V0ZXIucm91dGVzO1xyXG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIubGlzdGVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlcyA9IHRoaXMucGFyZW50Um91dGUucm91dGUuY2hpbGRyZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiRyb3V0ZXIucm91dGVDaGFuZ2Uub24odGhpcy5vblJvdXRlQ2hhbmdlKTtcclxuICAgICAgICB0aGlzLlVwZGF0ZVJvdXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgVXBkYXRlUm91dGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlUm91dGVMZXZlbCA+PSB0aGlzLiRyb3V0ZXIuYWN0aXZlUm91dGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVJvdXRlID0gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGFjdGl2ZVJvdXRlID0gdGhpcy4kcm91dGVyLmFjdGl2ZVJvdXRlc1t0aGlzLmFjdGl2ZVJvdXRlTGV2ZWxdO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hY3RpdmVSb3V0ZSA9PT0gYWN0aXZlUm91dGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHllcyA9IHRoaXMucm91dGVzLnNvbWUoZnVuY3Rpb24gKHJvdXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhY3RpdmVSb3V0ZS5yb3V0ZSA9PT0gcm91dGU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh5ZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVSb3V0ZSA9IGFjdGl2ZVJvdXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVSb3V0ZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJlbmRlclZpZXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhclZpZXcoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hY3RpdmVDbXAgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLiRhbmltYXRlLmxlYXZlKHRoaXMuJCRlbGVtZW50LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmFjdGl2ZUNtcC4kZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5hY3RpdmVDbXAgPSBudWxsO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyVmlldygpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jbGVhclZpZXcoKTtcclxuICAgICAgICB0aGlzLmFjdGl2ZUNtcCA9IHRoaXMuJGNyZWF0ZUNoaWxkQ21wKHRoaXMuYWN0aXZlUm91dGUucm91dGUuY29tcG9uZW50KTtcclxuICAgICAgICB0aGlzLmFjdGl2ZUNtcC4kcm91dGUgPSB0aGlzLmFjdGl2ZVJvdXRlO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlQ21wLiRyb3V0ZUxldmVsID0gdGhpcy5hY3RpdmVSb3V0ZUxldmVsICsgMTtcclxuICAgICAgICB0aGlzLiQkZWxlbWVudC5odG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlQ21wLiRtb3VudCh0aGlzLiQkZWxlbWVudC5odG1sRWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy4kYW5pbWF0ZS5lbnRlcih0aGlzLiQkZWxlbWVudCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLiQkZWxlbWVudC5odG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZnRlclZpZXdNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlUm91dGVMZXZlbCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIuc3RvcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIucm91dGVDaGFuZ2Uub2ZmKHRoaXMub25Sb3V0ZUNoYW5nZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2xlYXJWaWV3KCk7XHJcbiAgICB9XHJcbn0iLCJcclxuY2xhc3MgQWN0aXZlUm91dGUge1xyXG4gICAgY29uc3RydWN0b3Iocm91dGUsIG1hdGNoZWQsIHJlbWFpbmluZywgcGFyYW1ldGVycykge1xyXG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgICAgICB0aGlzLm1hdGNoZWQgPSBtYXRjaGVkO1xyXG4gICAgICAgIHRoaXMucmVtYWluaW5nID0gcmVtYWluaW5nO1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgZXF1YWxzKGFjdGl2ZVJvdXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWF0Y2hlZCA9PT0gYWN0aXZlUm91dGUubWF0Y2hlZDtcclxuICAgIH1cclxufVxyXG5cclxuQHNpbmUuZGVjb3JhdG9yLnNlcnZpY2Uoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZS5yb3V0ZXInLFxyXG4gICAgc2VsZWN0b3I6ICckcm91dGVyJ1xyXG59KVxyXG5jbGFzcyBSb3V0ZXJTZXJ2aWNlIGV4dGVuZHMgc2luZS5TZXJ2aWNle1xyXG4gICAgY29uc3RydWN0b3Iocm91dGVzKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmJhc2UgPSAnLyc7XHJcbiAgICAgICAgdGhpcy5tb2RlID0gJ2hpc3RvcnknO1xyXG4gICAgICAgIHRoaXMucm91dGVzID0gW107XHJcbiAgICAgICAgdGhpcy5hY3RpdmVSb3V0ZXMgPSBbXTtcclxuICAgICAgICB0aGlzLnJvdXRlQ2hhbmdlID0gbmV3IHNpbmUuTWVzc2VuZ2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlnKHJvdXRlcywgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMucm91dGVzID0gcm91dGVzO1xyXG4gICAgICAgIHRoaXMubW9kZSA9IG9wdGlvbnMgJiYgb3B0aW9ucy5tb2RlICYmIG9wdGlvbnMubW9kZSA9PT0gJ2hpc3RvcnknICYmICEhKGhpc3RvcnkucHVzaFN0YXRlKSA/ICdoaXN0b3J5JyA6ICdoYXNoJztcclxuICAgICAgICB0aGlzLmJhc2UgPSBvcHRpb25zICYmIG9wdGlvbnMuYmFzZSA/ICcvJyArIHRoaXMuY2xlYXJTbGFzaGVzKG9wdGlvbnMuYmFzZSkgKyAnLycgOiAnLyc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RnJhZ21lbnQoKSB7XHJcbiAgICAgICAgdmFyIGZyYWdtZW50ID0gJyc7XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ2hpc3RvcnknKSB7XHJcbiAgICAgICAgICAgIGZyYWdtZW50ID0gdGhpcy5jbGVhclNsYXNoZXMoZGVjb2RlVVJJKGxvY2F0aW9uLnBhdGhuYW1lICsgbG9jYXRpb24uc2VhcmNoKSk7XHJcbiAgICAgICAgICAgIGZyYWdtZW50ID0gZnJhZ21lbnQucmVwbGFjZSgvXFw/KC4qKSQvLCAnJyk7XHJcbiAgICAgICAgICAgIGZyYWdtZW50ID0gdGhpcy5iYXNlICE9PSAnLycgPyBmcmFnbWVudC5yZXBsYWNlKHRoaXMuYmFzZSwgJycpIDogZnJhZ21lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgbWF0Y2ggPSB3aW5kb3cubG9jYXRpb24uaHJlZi5tYXRjaCgvIyguKikkLyk7XHJcbiAgICAgICAgICAgIGZyYWdtZW50ID0gbWF0Y2ggPyBtYXRjaFsxXSA6ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jbGVhclNsYXNoZXMoZnJhZ21lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyU2xhc2hlcyhwYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhdGgudG9TdHJpbmcoKS5yZXBsYWNlKC9cXC8kLywgJycpLnJlcGxhY2UoL15cXC8vLCAnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKHJvdXRlKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXMucHVzaChyb3V0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKHJvdXRlKSB7XHJcbiAgICAgICAgc2luZS5yZW1vdmUodGhpcy5yb3V0ZXMsIHJvdXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBmbHVzaCgpIHtcclxuICAgICAgICB0aGlzLnJvdXRlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMubW9kZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5iYXNlID0gJy8nO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrKGYpIHtcclxuICAgICAgICB2YXIgZnJhZ21lbnQgPSBmIHx8IHRoaXMuZ2V0RnJhZ21lbnQoKSwgYWN0aXZlUm91dGVzID0gW107XHJcbiAgICAgICAgdGhpcy5tYXRjaFJvdXRlKHRoaXMucm91dGVzLCBmcmFnbWVudCwgYWN0aXZlUm91dGVzKTtcclxuICAgICAgICB0aGlzLmFjdGl2ZVJvdXRlcyA9IGFjdGl2ZVJvdXRlcztcclxuICAgICAgICB0aGlzLnJvdXRlQ2hhbmdlLmZpcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBtYXRjaFJvdXRlKHJvdXRlcywgZnJhZ21lbnQsIGFjdGl2ZVJvdXRlcykge1xyXG4gICAgICAgIGlmICghcm91dGVzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgcm91dGVzLnNvbWUoZnVuY3Rpb24gKHJvdXRlKSB7XHJcbiAgICAgICAgICAgIHZhciBhY3RpdmVSb3V0ZSA9IHNlbGYubWF0Y2hQYXRoKHJvdXRlLCBmcmFnbWVudCk7XHJcbiAgICAgICAgICAgIGlmIChhY3RpdmVSb3V0ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuYWN0aXZlUm91dGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb2xkQWN0aXZlUm91dGUgPSBzZWxmLmFjdGl2ZVJvdXRlcy5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3RpdmVSb3V0ZS5lcXVhbHMob2xkQWN0aXZlUm91dGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVJvdXRlcy5wdXNoKG9sZEFjdGl2ZVJvdXRlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVJvdXRlcy5wdXNoKGFjdGl2ZVJvdXRlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVSb3V0ZXMucHVzaChhY3RpdmVSb3V0ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZWxmLm1hdGNoUm91dGUocm91dGUuY2hpbGRyZW4sIGFjdGl2ZVJvdXRlLnJlbWFpbmluZywgYWN0aXZlUm91dGVzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbWF0Y2hQYXRoKHJvdXRlLCBmcmFnbWVudCkge1xyXG4gICAgICAgIHZhciBtYXRjaGVzID0gW10sXHJcbiAgICAgICAgICAgIHBhcmFtZXRlcnMgPSB7fSxcclxuICAgICAgICAgICAgcGF0aEl0ZW1zID0gcm91dGUucGF0aC5zcGxpdCgnLycpLFxyXG4gICAgICAgICAgICBmcmFnbWVudEl0ZW1zID0gZnJhZ21lbnQuc3BsaXQoJy8nKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoSXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHBhdGhJdGVtID0gcGF0aEl0ZW1zW2ldO1xyXG5cclxuICAgICAgICAgICAgaWYgKGkgPj0gZnJhZ21lbnRJdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgZnJhZ21lbnRJdGVtID0gZnJhZ21lbnRJdGVtc1tpXTtcclxuICAgICAgICAgICAgaWYgKHBhdGhJdGVtID09PSBmcmFnbWVudEl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIG1hdGNoZXMucHVzaChmcmFnbWVudEl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHBhdGhJdGVtLnN0YXJ0c1dpdGgoJzonKSkge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKGZyYWdtZW50SXRlbSk7XHJcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzW3BhdGhJdGVtLnN1YnN0cmluZygxKV0gPSBmcmFnbWVudEl0ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBBY3RpdmVSb3V0ZShyb3V0ZSwgbWF0Y2hlcy5qb2luKCcvJyksIGZyYWdtZW50SXRlbXMuc3BsaWNlKHBhdGhJdGVtcy5sZW5ndGgpLmpvaW4oJy8nKSwgcGFyYW1ldGVycyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGlzdGVuKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgY3VycmVudCA9IHNlbGYuZ2V0RnJhZ21lbnQoKTtcclxuICAgICAgICB2YXIgZm4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50ICE9PSBzZWxmLmdldEZyYWdtZW50KCkpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBzZWxmLmdldEZyYWdtZW50KCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNoZWNrKGN1cnJlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZWxmLmNoZWNrKGN1cnJlbnQpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKGZuLCA1MCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbmF2aWdhdGUocGF0aCkge1xyXG4gICAgICAgIHBhdGggPSBwYXRoID8gcGF0aCA6ICcnO1xyXG4gICAgICAgIGlmICh0aGlzLm1vZGUgPT09ICdoaXN0b3J5Jykge1xyXG4gICAgICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCB0aGlzLmJhc2UgKyB0aGlzLmNsZWFyU2xhc2hlcyhwYXRoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoLyMoLiopJC8sICcnKSArICcjJyArIHBhdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=