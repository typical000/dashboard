/******/ (function(modules) {
  // webpackBootstrap
  /******/ // install a JSONP callback for chunk loading
  /******/ function webpackJsonpCallback(data) {
    /******/ var chunkIds = data[0];
    /******/ var moreModules = data[1];
    /******/ var executeModules = data[2]; // add "moreModules" to the modules object, // then flag all "chunkIds" as loaded and fire callback
    /******/
    /******/ /******/ /******/ var moduleId,
      chunkId,
      i = 0,
      resolves = [];
    /******/ for (; i < chunkIds.length; i++) {
      /******/ chunkId = chunkIds[i];
      /******/ if (installedChunks[chunkId]) {
        /******/ resolves.push(installedChunks[chunkId][0]);
        /******/
      }
      /******/ installedChunks[chunkId] = 0;
      /******/
    }
    /******/ for (moduleId in moreModules) {
      /******/ if (
        Object.prototype.hasOwnProperty.call(moreModules, moduleId)
      ) {
        /******/ modules[moduleId] = moreModules[moduleId];
        /******/
      }
      /******/
    }
    /******/ if (parentJsonpFunction) parentJsonpFunction(data);
    /******/
    /******/ while (resolves.length) {
      /******/ resolves.shift()();
      /******/
    } // add entry modules from loaded chunk to deferred list
    /******/
    /******/ /******/ deferredModules.push.apply(
      deferredModules,
      executeModules || [],
    ); // run deferred modules when all chunks ready
    /******/
    /******/ /******/ return checkDeferredModules();
    /******/
  }
  /******/ function checkDeferredModules() {
    /******/ var result;
    /******/ for (var i = 0; i < deferredModules.length; i++) {
      /******/ var deferredModule = deferredModules[i];
      /******/ var fulfilled = true;
      /******/ for (var j = 1; j < deferredModule.length; j++) {
        /******/ var depId = deferredModule[j];
        /******/ if (installedChunks[depId] !== 0) fulfilled = false;
        /******/
      }
      /******/ if (fulfilled) {
        /******/ deferredModules.splice(i--, 1);
        /******/ result = __webpack_require__(
          (__webpack_require__.s = deferredModule[0]),
        );
        /******/
      }
      /******/
    }
    /******/ return result;
    /******/
  } // The module cache
  /******/
  /******/ /******/ var installedModules = {}; // object to store loaded and loading chunks // undefined = chunk not loaded, null = chunk preloaded/prefetched // Promise = chunk loading, 0 = chunk loaded
  /******/
  /******/ /******/ /******/ /******/ var installedChunks = {
    /******/ app: 0,
    /******/
  };
  /******/
  /******/ var deferredModules = []; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__,
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module',
      });
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', {value: true});
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode,
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === 'object' &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key),
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default'];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, 'a', getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = '';
  /******/
  /******/ var jsonpArray = (window['webpackJsonp'] =
    window['webpackJsonp'] || []);
  /******/ var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
  /******/ jsonpArray.push = webpackJsonpCallback;
  /******/ jsonpArray = jsonpArray.slice();
  /******/ for (var i = 0; i < jsonpArray.length; i++)
    webpackJsonpCallback(jsonpArray[i]);
  /******/ var parentJsonpFunction = oldJsonpFunction; // add entry module to deferred list
  /******/
  /******/
  /******/ /******/ deferredModules.push([0, 'vendor']); // run deferred modules when ready
  /******/ /******/ return checkDeferredModules();
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ './src/components/Button.js':
      /*!**********************************!*\
  !*** ./src/components/Button.js ***!
  \**********************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });

        var _react = __webpack_require__(
          /*! react */ './node_modules/react/index.js',
        );

        var _react2 = _interopRequireDefault(_react);

        var _reactJss = __webpack_require__(
          /*! react-jss */ './node_modules/react-jss/lib/index.js',
        );

        var _reactJss2 = _interopRequireDefault(_reactJss);

        var _classnames = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );

        var _classnames2 = _interopRequireDefault(_classnames);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }

        var styles = function styles(theme) {
          return {
            button: {
              display: 'flex',
              position: 'relative',
              padding: [0, 5],
              fontFamily: theme.typography.fontFamily,
              fontSize: theme.typography.fontSize,
              fontWeight: 'bold',
              lineHeight: '20px',
              cursor: 'pointer',
              userSelect: 'none',
              appearance: 'none',
              textAlign: 'center',
              textDecoration: 'none',
              textTransform: 'uppercase',
              color: theme.button.color,
              border: 'none',
              borderRadius: theme.common.radius,
              outline: 'none',
              background: theme.button.background,
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: theme.shadow.level1,
              '&:hover, &:active, &:focus': {
                background: theme.button.hoverBackground,
              },
            },
          };
        };

        /**
         * Very, very simplified version of button UI component.
         * It only respond on clicks and can render anything inside it.
         */
        var Button = function Button(_ref) {
          var classes = _ref.classes,
            className = _ref.className,
            children = _ref.children,
            onClick = _ref.onClick;
          return _react2.default.createElement(
            'button',
            {
              className: (0, _classnames2.default)(classes.button, className),
              onClick: onClick,
            },
            children,
          );
        };

        exports.default = (0, _reactJss2.default)(styles)(Button);

        /***/
      },

    /***/ './src/components/DashboardLayout.js':
      /*!*******************************************!*\
  !*** ./src/components/DashboardLayout.js ***!
  \*******************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });

        var _react = __webpack_require__(
          /*! react */ './node_modules/react/index.js',
        );

        var _react2 = _interopRequireDefault(_react);

        var _reactJss = __webpack_require__(
          /*! react-jss */ './node_modules/react-jss/lib/index.js',
        );

        var _reactJss2 = _interopRequireDefault(_reactJss);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }

        var styles = function styles(theme) {
          return {
            container: {
              maxWidth: 800,
              width: '100%',
              margin: [20, 'auto'],
              padding: 20,
              borderRadius: theme.common.radius,
              background: theme.common.card,
            },
            content: {
              position: 'relative',
              minHeight: 200,
            },
            heading: {
              display: 'flex',
              alignItems: 'center',
              paddingBottom: 10,
              marginBottom: 20,
              borderBottom: [2, 'solid', theme.common.border],
            },
            title: {
              padding: [0, 10],
              flexGrow: 1,
              width: '33.3%',
              textAlign: 'center',
              /**
               * Some interesting tip: 'jss-expand' was created by me.
               * It allows to write code as you can see below.
               * @see https://github.com/cssinjs/jss-expand
               */
              font: {
                weight: 'bold',
                size: 16,
              },
            },
          };
        };

        /**
         * Wrapper component for dashboard.
         * We can decompose code, for e.g. move heading into separated components
         * but we don't need to do this
         */
        var DashboardLayout = function DashboardLayout(_ref) {
          var classes = _ref.classes,
            children = _ref.children;
          return _react2.default.createElement(
            'div',
            {className: classes.container},
            _react2.default.createElement(
              'div',
              {className: classes.heading},
              _react2.default.createElement(
                'div',
                {className: classes.title},
                'Applied',
              ),
              _react2.default.createElement(
                'div',
                {className: classes.title},
                'Interviewing',
              ),
              _react2.default.createElement(
                'div',
                {className: classes.title},
                'Hired',
              ),
            ),
            _react2.default.createElement(
              'div',
              {className: classes.content},
              children,
            ),
          );
        };

        exports.default = (0, _reactJss2.default)(styles)(DashboardLayout);

        /***/
      },

    /***/ './src/components/DashboardUserGrid.js':
      /*!*********************************************!*\
  !*** ./src/components/DashboardUserGrid.js ***!
  \*********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });

        var _objectWithoutProperties2 = __webpack_require__(
          /*! babel-runtime/helpers/objectWithoutProperties */ './node_modules/babel-runtime/helpers/objectWithoutProperties.js',
        );

        var _objectWithoutProperties3 = _interopRequireDefault(
          _objectWithoutProperties2,
        );

        var _react = __webpack_require__(
          /*! react */ './node_modules/react/index.js',
        );

        var _react2 = _interopRequireDefault(_react);

        var _reactJss = __webpack_require__(
          /*! react-jss */ './node_modules/react-jss/lib/index.js',
        );

        var _reactJss2 = _interopRequireDefault(_reactJss);

        var _UserWidget = __webpack_require__(
          /*! ./UserWidget */ './src/components/UserWidget.js',
        );

        var _UserWidget2 = _interopRequireDefault(_UserWidget);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }

        var styles = {
          container: {
            display: 'flex',
            alignItems: 'flex-start',
          },
          column: {
            flex: {
              grow: 1,
              shrink: 0,
            },
            width: '33.3%',
            padding: 10,
            boxSizing: 'border-box',
            '&:first-child': {
              paddingLeft: 0,
            },
            '&:last-child': {
              paddingRight: 0,
            },
          },
        };

        var CATEGORIES = ['applied', 'interviewing', 'hired'];

        var DashboardUserGrid = function DashboardUserGrid(_ref) {
          var classes = _ref.classes,
            onUserClick = _ref.onUserClick,
            props = (0, _objectWithoutProperties3.default)(_ref, [
              'classes',
              'onUserClick',
            ]);
          return _react2.default.createElement(
            'div',
            {className: classes.container},
            CATEGORIES.map(function(category) {
              return _react2.default.createElement(
                'div',
                {className: classes.column, key: category},
                props[category] &&
                  props[category].map(function(user) {
                    return _react2.default.createElement(_UserWidget2.default, {
                      key: user.login.uuid,
                      id: user.login.uuid,
                      photo: user.picture.thumbnail,
                      firstName: user.name.first,
                      lastName: user.name.last,
                      stage: user.stage,
                      onClick: onUserClick,
                    });
                  }),
              );
            }),
          );
        };

        exports.default = (0, _reactJss2.default)(styles)(DashboardUserGrid);

        /***/
      },

    /***/ './src/components/ErrorNotice.js':
      /*!***************************************!*\
  !*** ./src/components/ErrorNotice.js ***!
  \***************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });

        var _react = __webpack_require__(
          /*! react */ './node_modules/react/index.js',
        );

        var _react2 = _interopRequireDefault(_react);

        var _reactJss = __webpack_require__(
          /*! react-jss */ './node_modules/react-jss/lib/index.js',
        );

        var _reactJss2 = _interopRequireDefault(_reactJss);

        var _polished = __webpack_require__(
          /*! polished */ './node_modules/polished/dist/polished.es.js',
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }

        var styles = function styles(theme) {
          return {
            container: {
              padding: 20,
              borderRadius: theme.common.radius,
              textAlign: 'center',
              border: [1, 'solid', theme.danger],
              background: (0, _polished.lighten)(0.4, theme.danger),
            },
            title: {
              color: theme.danger,
              fontSize: 24,
              margin: [0, 0, 20],
            },
            text: {
              color: theme.danger,
              fontSize: 14,
              margin: [0, 0, 10],
              '&:empty': {
                display: 'none',
              },
            },
          };
        };

        var ErrorNotice = function ErrorNotice(_ref) {
          var classes = _ref.classes,
            error = _ref.error;
          return _react2.default.createElement(
            'div',
            {className: classes.container},
            _react2.default.createElement(
              'h2',
              {className: classes.title},
              'Something went wrong',
            ),
            _react2.default.createElement(
              'p',
              {className: classes.text},
              'Please, try again later. Maybe this will help you:',
            ),
            _react2.default.createElement(
              'p',
              {className: classes.text},
              error,
            ),
          );
        };

        exports.default = (0, _reactJss2.default)(styles)(ErrorNotice);

        /***/
      },

    /***/ './src/components/Loader.js':
      /*!**********************************!*\
  !*** ./src/components/Loader.js ***!
  \**********************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });

        var _react = __webpack_require__(
          /*! react */ './node_modules/react/index.js',
        );

        var _react2 = _interopRequireDefault(_react);

        var _classnames = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );

        var _classnames2 = _interopRequireDefault(_classnames);

        var _cssFunctions = __webpack_require__(
          /*! css-functions */ './node_modules/css-functions/lib/index.js',
        );

        var _reactJss = __webpack_require__(
          /*! react-jss */ './node_modules/react-jss/lib/index.js',
        );

        var _reactJss2 = _interopRequireDefault(_reactJss);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }

        /**
         * Just a loader UI component.
         * In real app it must be placed in some separated
         * package (or yarn workspace) with all other UI components.
         */
        var styles = function styles(theme) {
          return {
            loader: {
              borderRadius: 'inherit',
            },
            active: {
              '&::before, &::after': {
                position: 'absolute',
                content: '""',
              },
              '&::before': {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                zIndex: 100,
                opacity: 0.8,
                background: theme.common.card,
              },
              '&::after': {
                zIndex: 101,
                width: 60,
                height: 60,
                top: '50%',
                left: '50%',
                marginTop: -30,
                marginLeft: -30,
                border: [4, 'solid', theme.loader.background],
                borderTopColor: theme.loader.foreground,
                borderRadius: '50%',
                willChange: 'transform',
                animation: {
                  name: 'spin',
                  duration: 1000,
                  iterationCount: 'infinite',
                  timingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                },
              },
            },

            '@keyframes spin': {
              from: {
                transform: (0, _cssFunctions.rotateZ)(0),
              },
              to: {
                transform: (0, _cssFunctions.rotateZ)(360),
              },
            },
          };
        };

        var Loader = function Loader(_ref) {
          var children = _ref.children,
            classes = _ref.classes,
            className = _ref.className,
            active = _ref.active;
          return _react2.default.createElement(
            'div',
            {
              className: (0, _classnames2.default)(
                classes.loader,
                active && classes.active,
                className,
              ),
            },
            children,
          );
        };

        exports.default = (0, _reactJss2.default)(styles)(Loader);

        /***/
      },

    /***/ './src/components/UserWidget.js':
      /*!**************************************!*\
  !*** ./src/components/UserWidget.js ***!
  \**************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });

        var _getPrototypeOf = __webpack_require__(
          /*! babel-runtime/core-js/object/get-prototype-of */ './node_modules/babel-runtime/core-js/object/get-prototype-of.js',
        );

        var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

        var _classCallCheck2 = __webpack_require__(
          /*! babel-runtime/helpers/classCallCheck */ './node_modules/babel-runtime/helpers/classCallCheck.js',
        );

        var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

        var _createClass2 = __webpack_require__(
          /*! babel-runtime/helpers/createClass */ './node_modules/babel-runtime/helpers/createClass.js',
        );

        var _createClass3 = _interopRequireDefault(_createClass2);

        var _possibleConstructorReturn2 = __webpack_require__(
          /*! babel-runtime/helpers/possibleConstructorReturn */ './node_modules/babel-runtime/helpers/possibleConstructorReturn.js',
        );

        var _possibleConstructorReturn3 = _interopRequireDefault(
          _possibleConstructorReturn2,
        );

        var _inherits2 = __webpack_require__(
          /*! babel-runtime/helpers/inherits */ './node_modules/babel-runtime/helpers/inherits.js',
        );

        var _inherits3 = _interopRequireDefault(_inherits2);

        var _react = __webpack_require__(
          /*! react */ './node_modules/react/index.js',
        );

        var _react2 = _interopRequireDefault(_react);

        var _reactJss = __webpack_require__(
          /*! react-jss */ './node_modules/react-jss/lib/index.js',
        );

        var _reactJss2 = _interopRequireDefault(_reactJss);

        var _Button = __webpack_require__(
          /*! ./Button */ './src/components/Button.js',
        );

        var _Button2 = _interopRequireDefault(_Button);

        var _stage = __webpack_require__(
          /*! ../constants/stage */ './src/constants/stage.js',
        );

        var _stage2 = _interopRequireDefault(_stage);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }

        var styles = function styles(theme) {
          return {
            widget: {
              background: theme.common.widget,
              borderRadius: theme.common.radius,
              padding: 20,
              marginTop: 20,
              '&:first-child': {
                marginTop: 0,
              },
            },
            info: {
              display: 'flex',
              alignItems: 'center',
            },
            photo: {
              width: 40,
              height: 40,
              borderRadius: '50%',
              objectFit: 'cover',
              marginRight: 10,
              flexShrink: 0,
            },
            name: {
              margin: 0,
            },
            actions: {
              composes: '$info',
              marginTop: 10,
              justifyContent: 'space-between',
            },
            back: {
              marginRight: 'auto',
            },
            forward: {
              marginLeft: 'auto',
            },
          };
        };

        var UserWidget = (function(_Component) {
          (0, _inherits3.default)(UserWidget, _Component);

          function UserWidget() {
            var _ref;

            var _temp, _this, _ret;

            (0, _classCallCheck3.default)(this, UserWidget);

            for (
              var _len = arguments.length, args = Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }

            return (
              (_ret = ((_temp = ((_this = (0,
              _possibleConstructorReturn3.default)(
                this,
                (_ref =
                  UserWidget.__proto__ ||
                  (0, _getPrototypeOf2.default)(UserWidget)).call.apply(
                  _ref,
                  [this].concat(args),
                ),
              )),
              _this)),
              (_this.handleLeftClick = function() {
                _this.props.onClick(_this.props.id, _this.props.stage - 1);
              }),
              (_this.handleRightClick = function() {
                _this.props.onClick(_this.props.id, _this.props.stage + 1);
              }),
              _temp)),
              (0, _possibleConstructorReturn3.default)(_this, _ret)
            );
          }

          (0, _createClass3.default)(UserWidget, [
            {
              key: 'render',
              value: function render() {
                var _props = this.props,
                  classes = _props.classes,
                  photo = _props.photo,
                  firstName = _props.firstName,
                  lastName = _props.lastName,
                  stage = _props.stage;

                return _react2.default.createElement(
                  'div',
                  {className: classes.widget},
                  _react2.default.createElement(
                    'div',
                    {className: classes.info},
                    _react2.default.createElement('img', {
                      className: classes.photo,
                      src: photo,
                      role: 'presentation',
                    }),
                    _react2.default.createElement(
                      'h4',
                      {className: classes.name},
                      firstName + ' ' + lastName,
                    ),
                  ),
                  _react2.default.createElement(
                    'div',
                    {className: classes.actions},
                    stage !== _stage2.default.APPLIED &&
                      _react2.default.createElement(
                        _Button2.default,
                        {
                          className: classes.back,
                          onClick: this.handleLeftClick,
                        },
                        '\u2190',
                      ),
                    stage !== _stage2.default.HIRED &&
                      _react2.default.createElement(
                        _Button2.default,
                        {
                          className: classes.forward,
                          onClick: this.handleRightClick,
                        },
                        '\u2192',
                      ),
                  ),
                );
              },
            },
          ]);
          return UserWidget;
        })(_react.Component);

        exports.default = (0, _reactJss2.default)(styles)(UserWidget);

        /***/
      },

    /***/ './src/constants/stage.js':
      /*!********************************!*\
  !*** ./src/constants/stage.js ***!
  \********************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        /**
         * Current user stage (position on dashboard)
         */
        exports.default = {
          APPLIED: 0,
          INTERVIEWING: 1,
          HIRED: 2,
        };

        /***/
      },

    /***/ './src/containers/App.js':
      /*!*******************************!*\
  !*** ./src/containers/App.js ***!
  \*******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });

        var _react = __webpack_require__(
          /*! react */ './node_modules/react/index.js',
        );

        var _react2 = _interopRequireDefault(_react);

        var _reactJss = __webpack_require__(
          /*! react-jss */ './node_modules/react-jss/lib/index.js',
        );

        var _GraphQLProvider = __webpack_require__(
          /*! ./GraphQLProvider */ './src/containers/GraphQLProvider.js',
        );

        var _GraphQLProvider2 = _interopRequireDefault(_GraphQLProvider);

        var _NormalizeCss = __webpack_require__(
          /*! ../utils/NormalizeCss */ './src/utils/NormalizeCss.js',
        );

        var _NormalizeCss2 = _interopRequireDefault(_NormalizeCss);

        var _theme = __webpack_require__(
          /*! ../theme */ './src/theme/index.js',
        );

        var _theme2 = _interopRequireDefault(_theme);

        var _Dashboard = __webpack_require__(
          /*! ./Dashboard */ './src/containers/Dashboard.js',
        );

        var _Dashboard2 = _interopRequireDefault(_Dashboard);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }

        /**
         * Main application setup. All providers and other global
         * stuff goes here.
         */
        var App = function App() {
          return _react2.default.createElement(
            _GraphQLProvider2.default,
            null,
            _react2.default.createElement(
              _reactJss.ThemeProvider,
              {theme: _theme2.default},
              _react2.default.createElement(
                _reactJss.JssProvider,
                null,
                _react2.default.createElement(
                  _NormalizeCss2.default,
                  null,
                  _react2.default.createElement(_Dashboard2.default, null),
                ),
              ),
            ),
          );
        };

        exports.default = App;

        /***/
      },

    /***/ './src/containers/Dashboard.js':
      /*!*************************************!*\
  !*** ./src/containers/Dashboard.js ***!
  \*************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });

        var _react = __webpack_require__(
          /*! react */ './node_modules/react/index.js',
        );

        var _react2 = _interopRequireDefault(_react);

        var _reactApollo = __webpack_require__(
          /*! react-apollo */ './node_modules/react-apollo/react-apollo.browser.umd.js',
        );

        var _groupBy = __webpack_require__(
          /*! lodash/groupBy */ './node_modules/lodash/groupBy.js',
        );

        var _groupBy2 = _interopRequireDefault(_groupBy);

        var _Loader = __webpack_require__(
          /*! ../components/Loader */ './src/components/Loader.js',
        );

        var _Loader2 = _interopRequireDefault(_Loader);

        var _DashboardUserGrid = __webpack_require__(
          /*! ../components/DashboardUserGrid */ './src/components/DashboardUserGrid.js',
        );

        var _DashboardUserGrid2 = _interopRequireDefault(_DashboardUserGrid);

        var _ErrorNotice = __webpack_require__(
          /*! ../components/ErrorNotice */ './src/components/ErrorNotice.js',
        );

        var _ErrorNotice2 = _interopRequireDefault(_ErrorNotice);

        var _DashboardLayout = __webpack_require__(
          /*! ../components/DashboardLayout */ './src/components/DashboardLayout.js',
        );

        var _DashboardLayout2 = _interopRequireDefault(_DashboardLayout);

        var _usersQuery = __webpack_require__(
          /*! ../graphql/usersQuery.gql */ './src/graphql/usersQuery.gql',
        );

        var _usersQuery2 = _interopRequireDefault(_usersQuery);

        var _updateStageMutation = __webpack_require__(
          /*! ../graphql/updateStageMutation.gql */ './src/graphql/updateStageMutation.gql',
        );

        var _updateStageMutation2 = _interopRequireDefault(
          _updateStageMutation,
        );

        var _stage = __webpack_require__(
          /*! ../constants/stage */ './src/constants/stage.js',
        );

        var _stage2 = _interopRequireDefault(_stage);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }

        var Dashboard = function Dashboard() {
          return _react2.default.createElement(
            _DashboardLayout2.default,
            null,
            _react2.default.createElement(
              _reactApollo.Query,
              {query: _usersQuery2.default},
              function(_ref) {
                var data = _ref.data,
                  loading = _ref.loading,
                  error = _ref.error,
                  client = _ref.client;

                if (error)
                  return _react2.default.createElement(_ErrorNotice2.default, {
                    error: error,
                  });

                /**
                 * Sort users by 'stage' (only client data)
                 * @see GraphQLProvider.js
                 */
                var userGroups = (0, _groupBy2.default)(
                  data && data.users && data.users.results,
                  function(user) {
                    return user.stage;
                  },
                );

                /**
                 * @todo Add filters with with writing data into  apollo cache.
                 */

                return _react2.default.createElement(
                  _Loader2.default,
                  {active: loading},
                  _react2.default.createElement(_DashboardUserGrid2.default, {
                    applied: userGroups[_stage2.default.APPLIED],
                    interviewing: userGroups[_stage2.default.INTERVIEWING],
                    hired: userGroups[_stage2.default.HIRED],
                    onUserClick: function onUserClick(id, stage) {
                      client.mutate({
                        mutation: _updateStageMutation2.default,
                        variables: {
                          id: id,
                          stage: stage,
                        },
                      });
                    },
                  }),
                );
              },
            ),
          );
        };

        exports.default = Dashboard;

        /***/
      },

    /***/ './src/containers/GraphQLProvider.js':
      /*!*******************************************!*\
  !*** ./src/containers/GraphQLProvider.js ***!
  \*******************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });

        var _extends2 = __webpack_require__(
          /*! babel-runtime/helpers/extends */ './node_modules/babel-runtime/helpers/extends.js',
        );

        var _extends3 = _interopRequireDefault(_extends2);

        var _react = __webpack_require__(
          /*! react */ './node_modules/react/index.js',
        );

        var _react2 = _interopRequireDefault(_react);

        var _reactApollo = __webpack_require__(
          /*! react-apollo */ './node_modules/react-apollo/react-apollo.browser.umd.js',
        );

        var _apolloClient = __webpack_require__(
          /*! apollo-client */ './node_modules/apollo-client/index.js',
        );

        var _apolloCacheInmemory = __webpack_require__(
          /*! apollo-cache-inmemory */ './node_modules/apollo-cache-inmemory/lib/index.js',
        );

        var _apolloLinkState = __webpack_require__(
          /*! apollo-link-state */ './node_modules/apollo-link-state/lib/index.js',
        );

        var _apolloLink = __webpack_require__(
          /*! apollo-link */ './node_modules/apollo-link/lib/index.js',
        );

        var _apolloLinkRest = __webpack_require__(
          /*! apollo-link-rest */ './node_modules/apollo-link-rest/bundle.umd.js',
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }

        /**
         * Just for example how local stage is managed in react apollo
         * In real app those resolvers must be moved into separated module.
         */
        var resolvers = {
          defaults: {
            stage: 0, // In this example we just set user as 'applied'
          },
          resolvers: {
            Mutation: {
              updateStage: function updateStage(_, _ref, _ref2) {
                var id = _ref.id,
                  stage = _ref.stage;
                var cache = _ref2.cache;

                cache.writeData({id: id, data: {stage: stage}});
                return null;
              },
            },
          },
        };

        /**
         * Personally, I don't like Redux because we need to write too many code
         * (resolvers, actions, action creators, mapping state to props) for solving simple tasks
         *
         * So in this case to experiment how react-apollo works with rest links.
         * It's, anyway, a good experience.
         */
        var restLink = new _apolloLinkRest.RestLink({
          uri: 'https://randomuser.me/api/',
        });

        var cache = new _apolloCacheInmemory.InMemoryCache({
          dataIdFromObject: function dataIdFromObject(object) {
            return (
              // Additional operation to normalize cache
              (object.login && object.login.uuid) || object.id || null
            );
          },
        });

        var client = new _apolloClient.ApolloClient({
          link: _apolloLink.ApolloLink.from([
            (0, _apolloLinkState.withClientState)(
              (0, _extends3.default)({cache: cache}, resolvers),
            ),
            restLink,
          ]),
          cache: cache,

          /**
           * Because it is an experiment we use hardcoded value
           * In working example we'll use 'process.env'
           */
          connectToDevTools: true,
          addTypeName: true,
        });

        var GraphQLProvider = function GraphQLProvider(_ref3) {
          var children = _ref3.children;
          return _react2.default.createElement(
            _reactApollo.ApolloProvider,
            {client: client},
            children,
          );
        };

        exports.default = GraphQLProvider;

        /***/
      },

    /***/ './src/graphql/updateStageMutation.gql':
      /*!*********************************************!*\
  !*** ./src/graphql/updateStageMutation.gql ***!
  \*********************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        var doc = {
          kind: 'Document',
          definitions: [
            {
              kind: 'OperationDefinition',
              operation: 'mutation',
              name: {kind: 'Name', value: 'UpdateStageMutation'},
              variableDefinitions: [
                {
                  kind: 'VariableDefinition',
                  variable: {
                    kind: 'Variable',
                    name: {kind: 'Name', value: 'id'},
                  },
                  type: {
                    kind: 'NonNullType',
                    type: {
                      kind: 'NamedType',
                      name: {kind: 'Name', value: 'Int'},
                    },
                  },
                },
                {
                  kind: 'VariableDefinition',
                  variable: {
                    kind: 'Variable',
                    name: {kind: 'Name', value: 'stage'},
                  },
                  type: {
                    kind: 'NonNullType',
                    type: {
                      kind: 'NamedType',
                      name: {kind: 'Name', value: 'Int'},
                    },
                  },
                },
              ],
              directives: [],
              selectionSet: {
                kind: 'SelectionSet',
                selections: [
                  {
                    kind: 'Field',
                    name: {kind: 'Name', value: 'updateStage'},
                    arguments: [
                      {
                        kind: 'Argument',
                        name: {kind: 'Name', value: 'id'},
                        value: {
                          kind: 'Variable',
                          name: {kind: 'Name', value: 'id'},
                        },
                      },
                      {
                        kind: 'Argument',
                        name: {kind: 'Name', value: 'stage'},
                        value: {
                          kind: 'Variable',
                          name: {kind: 'Name', value: 'stage'},
                        },
                      },
                    ],
                    directives: [
                      {
                        kind: 'Directive',
                        name: {kind: 'Name', value: 'client'},
                        arguments: [],
                      },
                    ],
                  },
                ],
              },
            },
          ],
          loc: {start: 0, end: 214},
        };
        doc.loc.source = {
          body:
            "mutation UpdateStageMutation($id: Int!, $stage: Int!) {\n  # We don't return nothing as response from mutation\n  # because direct cache changes will trigger UI changes\n  updateStage(id: $id, stage: $stage) @client\n}",
          name: 'GraphQL request',
          locationOffset: {line: 1, column: 1},
        };

        var names = {};
        function unique(defs) {
          return defs.filter(function(def) {
            if (def.kind !== 'FragmentDefinition') return true;
            var name = def.name.value;
            if (names[name]) {
              return false;
            } else {
              names[name] = true;
              return true;
            }
          });
        }

        // Collect any fragment/type references from a node, adding them to the refs Set
        function collectFragmentReferences(node, refs) {
          if (node.kind === 'FragmentSpread') {
            refs.add(node.name.value);
          } else if (node.kind === 'VariableDefinition') {
            var type = node.type;
            if (type.kind === 'NamedType') {
              refs.add(type.name.value);
            }
          }

          if (node.selectionSet) {
            node.selectionSet.selections.forEach(function(selection) {
              collectFragmentReferences(selection, refs);
            });
          }

          if (node.variableDefinitions) {
            node.variableDefinitions.forEach(function(def) {
              collectFragmentReferences(def, refs);
            });
          }

          if (node.definitions) {
            node.definitions.forEach(function(def) {
              collectFragmentReferences(def, refs);
            });
          }
        }

        var definitionRefs = {};
        (function extractReferences() {
          doc.definitions.forEach(function(def) {
            if (def.name) {
              var refs = new Set();
              collectFragmentReferences(def, refs);
              definitionRefs[def.name.value] = refs;
            }
          });
        })();

        function findOperation(doc, name) {
          for (var i = 0; i < doc.definitions.length; i++) {
            var element = doc.definitions[i];
            if (element.name && element.name.value == name) {
              return element;
            }
          }
        }

        function oneQuery(doc, operationName) {
          // Copy the DocumentNode, but clear out the definitions
          var newDoc = {
            kind: doc.kind,
            definitions: [findOperation(doc, operationName)],
          };
          if (doc.hasOwnProperty('loc')) {
            newDoc.loc = doc.loc;
          }

          // Now, for the operation we're running, find any fragments referenced by
          // it or the fragments it references
          var opRefs = definitionRefs[operationName] || new Set();
          var allRefs = new Set();
          var newRefs = new Set(opRefs);
          while (newRefs.size > 0) {
            var prevRefs = newRefs;
            newRefs = new Set();

            prevRefs.forEach(function(refName) {
              if (!allRefs.has(refName)) {
                allRefs.add(refName);
                var childRefs = definitionRefs[refName] || new Set();
                childRefs.forEach(function(childRef) {
                  newRefs.add(childRef);
                });
              }
            });
          }

          allRefs.forEach(function(refName) {
            var op = findOperation(doc, refName);
            if (op) {
              newDoc.definitions.push(op);
            }
          });

          return newDoc;
        }

        module.exports = doc;

        module.exports['UpdateStageMutation'] = oneQuery(
          doc,
          'UpdateStageMutation',
        );

        /***/
      },

    /***/ './src/graphql/usersQuery.gql':
      /*!************************************!*\
  !*** ./src/graphql/usersQuery.gql ***!
  \************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        var doc = {
          kind: 'Document',
          definitions: [
            {
              kind: 'OperationDefinition',
              operation: 'query',
              name: {kind: 'Name', value: 'UsersQuery'},
              variableDefinitions: [],
              directives: [],
              selectionSet: {
                kind: 'SelectionSet',
                selections: [
                  {
                    kind: 'Field',
                    name: {kind: 'Name', value: 'users'},
                    arguments: [],
                    directives: [
                      {
                        kind: 'Directive',
                        name: {kind: 'Name', value: 'rest'},
                        arguments: [
                          {
                            kind: 'Argument',
                            name: {kind: 'Name', value: 'type'},
                            value: {
                              kind: 'StringValue',
                              value: 'Users',
                              block: false,
                            },
                          },
                          {
                            kind: 'Argument',
                            name: {kind: 'Name', value: 'path'},
                            value: {
                              kind: 'StringValue',
                              value: '?nat=gb&results=5',
                              block: false,
                            },
                          },
                        ],
                      },
                    ],
                    selectionSet: {
                      kind: 'SelectionSet',
                      selections: [
                        {
                          kind: 'Field',
                          name: {kind: 'Name', value: 'results'},
                          arguments: [],
                          directives: [
                            {
                              kind: 'Directive',
                              name: {kind: 'Name', value: 'type'},
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: {kind: 'Name', value: 'name'},
                                  value: {
                                    kind: 'StringValue',
                                    value: 'User',
                                    block: false,
                                  },
                                },
                              ],
                            },
                          ],
                          selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                              {
                                kind: 'Field',
                                name: {kind: 'Name', value: 'stage'},
                                arguments: [],
                                directives: [
                                  {
                                    kind: 'Directive',
                                    name: {kind: 'Name', value: 'client'},
                                    arguments: [],
                                  },
                                ],
                              },
                              {
                                kind: 'Field',
                                name: {kind: 'Name', value: 'name'},
                                arguments: [],
                                directives: [
                                  {
                                    kind: 'Directive',
                                    name: {kind: 'Name', value: 'type'},
                                    arguments: [
                                      {
                                        kind: 'Argument',
                                        name: {kind: 'Name', value: 'name'},
                                        value: {
                                          kind: 'StringValue',
                                          value: 'Name',
                                          block: false,
                                        },
                                      },
                                    ],
                                  },
                                ],
                                selectionSet: {
                                  kind: 'SelectionSet',
                                  selections: [
                                    {
                                      kind: 'Field',
                                      name: {kind: 'Name', value: 'title'},
                                      arguments: [],
                                      directives: [],
                                    },
                                    {
                                      kind: 'Field',
                                      name: {kind: 'Name', value: 'first'},
                                      arguments: [],
                                      directives: [],
                                    },
                                    {
                                      kind: 'Field',
                                      name: {kind: 'Name', value: 'last'},
                                      arguments: [],
                                      directives: [],
                                    },
                                  ],
                                },
                              },
                              {
                                kind: 'Field',
                                name: {kind: 'Name', value: 'login'},
                                arguments: [],
                                directives: [
                                  {
                                    kind: 'Directive',
                                    name: {kind: 'Name', value: 'type'},
                                    arguments: [
                                      {
                                        kind: 'Argument',
                                        name: {kind: 'Name', value: 'name'},
                                        value: {
                                          kind: 'StringValue',
                                          value: 'Login',
                                          block: false,
                                        },
                                      },
                                    ],
                                  },
                                ],
                                selectionSet: {
                                  kind: 'SelectionSet',
                                  selections: [
                                    {
                                      kind: 'Field',
                                      name: {kind: 'Name', value: 'uuid'},
                                      arguments: [],
                                      directives: [],
                                    },
                                  ],
                                },
                              },
                              {
                                kind: 'Field',
                                name: {kind: 'Name', value: 'picture'},
                                arguments: [],
                                directives: [
                                  {
                                    kind: 'Directive',
                                    name: {kind: 'Name', value: 'type'},
                                    arguments: [
                                      {
                                        kind: 'Argument',
                                        name: {kind: 'Name', value: 'name'},
                                        value: {
                                          kind: 'StringValue',
                                          value: 'Picture',
                                          block: false,
                                        },
                                      },
                                    ],
                                  },
                                ],
                                selectionSet: {
                                  kind: 'SelectionSet',
                                  selections: [
                                    {
                                      kind: 'Field',
                                      name: {kind: 'Name', value: 'thumbnail'},
                                      arguments: [],
                                      directives: [],
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
          loc: {start: 0, end: 345},
        };
        doc.loc.source = {
          body:
            'query UsersQuery {\n  users @rest(type: "Users", path: "?nat=gb&results=5") {\n    results @type(name: "User") {\n      stage @client\n      name @type(name: "Name") {\n        title\n        first\n        last\n      }\n      login @type(name: "Login") {\n        uuid\n      }\n      picture @type(name: "Picture") {\n        thumbnail\n      }\n    }\n  }\n}',
          name: 'GraphQL request',
          locationOffset: {line: 1, column: 1},
        };

        var names = {};
        function unique(defs) {
          return defs.filter(function(def) {
            if (def.kind !== 'FragmentDefinition') return true;
            var name = def.name.value;
            if (names[name]) {
              return false;
            } else {
              names[name] = true;
              return true;
            }
          });
        }

        // Collect any fragment/type references from a node, adding them to the refs Set
        function collectFragmentReferences(node, refs) {
          if (node.kind === 'FragmentSpread') {
            refs.add(node.name.value);
          } else if (node.kind === 'VariableDefinition') {
            var type = node.type;
            if (type.kind === 'NamedType') {
              refs.add(type.name.value);
            }
          }

          if (node.selectionSet) {
            node.selectionSet.selections.forEach(function(selection) {
              collectFragmentReferences(selection, refs);
            });
          }

          if (node.variableDefinitions) {
            node.variableDefinitions.forEach(function(def) {
              collectFragmentReferences(def, refs);
            });
          }

          if (node.definitions) {
            node.definitions.forEach(function(def) {
              collectFragmentReferences(def, refs);
            });
          }
        }

        var definitionRefs = {};
        (function extractReferences() {
          doc.definitions.forEach(function(def) {
            if (def.name) {
              var refs = new Set();
              collectFragmentReferences(def, refs);
              definitionRefs[def.name.value] = refs;
            }
          });
        })();

        function findOperation(doc, name) {
          for (var i = 0; i < doc.definitions.length; i++) {
            var element = doc.definitions[i];
            if (element.name && element.name.value == name) {
              return element;
            }
          }
        }

        function oneQuery(doc, operationName) {
          // Copy the DocumentNode, but clear out the definitions
          var newDoc = {
            kind: doc.kind,
            definitions: [findOperation(doc, operationName)],
          };
          if (doc.hasOwnProperty('loc')) {
            newDoc.loc = doc.loc;
          }

          // Now, for the operation we're running, find any fragments referenced by
          // it or the fragments it references
          var opRefs = definitionRefs[operationName] || new Set();
          var allRefs = new Set();
          var newRefs = new Set(opRefs);
          while (newRefs.size > 0) {
            var prevRefs = newRefs;
            newRefs = new Set();

            prevRefs.forEach(function(refName) {
              if (!allRefs.has(refName)) {
                allRefs.add(refName);
                var childRefs = definitionRefs[refName] || new Set();
                childRefs.forEach(function(childRef) {
                  newRefs.add(childRef);
                });
              }
            });
          }

          allRefs.forEach(function(refName) {
            var op = findOperation(doc, refName);
            if (op) {
              newDoc.definitions.push(op);
            }
          });

          return newDoc;
        }

        module.exports = doc;

        module.exports['UsersQuery'] = oneQuery(doc, 'UsersQuery');

        /***/
      },

    /***/ './src/index.js':
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var _react = __webpack_require__(
          /*! react */ './node_modules/react/index.js',
        );

        var _react2 = _interopRequireDefault(_react);

        var _reactDom = __webpack_require__(
          /*! react-dom */ './node_modules/react-dom/index.js',
        );

        var _App = __webpack_require__(
          /*! ./containers/App */ './src/containers/App.js',
        );

        var _App2 = _interopRequireDefault(_App);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }

        /**
         * Maybe, if someone add SSR to this app we can
         * add 'hydration' of DOM and other 'initialization' stuff
         */
        (0, _reactDom.render)(
          _react2.default.createElement(_App2.default, null),
          document.getElementById('app'),
        ); /* global document */

        /***/
      },

    /***/ './src/theme/index.js':
      /*!****************************!*\
  !*** ./src/theme/index.js ***!
  \****************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });

        var _polished = __webpack_require__(
          /*! polished */ './node_modules/polished/dist/polished.es.js',
        );

        /**
         * This module holds essential theme colors to create
         * unique branding style for my application.
         *
         * If we need, we can create multi-theme application and switch
         * theme dynamically without any server bulding. Just using JSS and React
         */
        var base = {
          brand: '#ff5959',
          light: '#fff',
          dark: '#000',
        };

        exports.default = {
          brand: base.brand,
          success: '#69b32d',
          danger: '#f1462f',
          typography: {
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontSize: 14,
            lineHeight: 1.2,
          },
          common: {
            card: (0, _polished.darken)(0.04, base.light),
            widget: base.light,
            border: (0, _polished.darken)(0.1, base.light),
            radius: 3,
          },
          icon: {
            default: (0, _polished.transparentize)(0.5, base.dark),
            inverse: (0, _polished.transparentize)(0.1, base.light),
          },
          loader: {
            foreground: (0, _polished.transparentize)(0.4, base.dark),
            background: (0, _polished.transparentize)(0.8, base.dark),
          },
          text: {
            default: (0, _polished.transparentize)(0.15, base.dark),
            highlight: base.brand,
            muted: (0, _polished.transparentize)(0.5, base.dark),
          },
          shadow: {
            level1: '0 0 2px 0 rgba(0,0,0,0.10), 0 2px 2px 0 rgba(0,0,0,0.20)',
            level2: '0 0 4px 0 rgba(0,0,0,0.10), 0 4px 4px 0 rgba(0,0,0,0.20)',
            level3: '0 0 8px 0 rgba(0,0,0,0.10), 0 8px 8px 0 rgba(0,0,0,0.20)',
            level4:
              '0 0 16px 0 rgba(0,0,0,0.10), 0 16px 16px 0 rgba(0,0,0,0.20)',
            level5:
              '0 0 24px 0 rgba(0,0,0,0.10), 0 24px 24px 0 rgba(0,0,0,0.20)',
          },
          button: {
            color: (0, _polished.transparentize)(0.3, base.dark),
            background: (0, _polished.darken)(0.08, base.light),
            hoverBackground: (0, _polished.darken)(0.12, base.light),
            icon: (0, _polished.transparentize)(0.5, base.dark),
          },
        };

        /***/
      },

    /***/ './src/utils/NormalizeCss.js':
      /*!***********************************!*\
  !*** ./src/utils/NormalizeCss.js ***!
  \***********************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });

        var _normalizeJss = __webpack_require__(
          /*! normalize-jss */ './node_modules/normalize-jss/index.js',
        );

        var _normalizeJss2 = _interopRequireDefault(_normalizeJss);

        var _reactJss = __webpack_require__(
          /*! react-jss */ './node_modules/react-jss/lib/index.js',
        );

        var _reactJss2 = _interopRequireDefault(_reactJss);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }

        /**
         * React-wrapper around plain JSS normalizing styles.
         * For info - 'normalize-jss' was created by me.
         */
        exports.default = (0, _reactJss2.default)(_normalizeJss2.default)();

        /***/
      },

    /***/ 0:
      /*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! /home/typical/sites/poe_task/src/index.js */ './src/index.js',
        );

        /***/
      },

    /******/
  },
);
//# sourceMappingURL=app.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiIn0=
