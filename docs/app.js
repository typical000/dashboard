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
      /******/ if (
        Object.prototype.hasOwnProperty.call(installedChunks, chunkId) &&
        installedChunks[chunkId]
      ) {
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
    /******/
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

        var _stringify = __webpack_require__(
          /*! babel-runtime/core-js/json/stringify */ './node_modules/babel-runtime/core-js/json/stringify.js',
        );

        var _stringify2 = _interopRequireDefault(_stringify);

        var _react = __webpack_require__(
          /*! react */ './node_modules/react/index.js',
        );

        var _react2 = _interopRequireDefault(_react);

        var _reactJss = __webpack_require__(
          /*! react-jss */ './node_modules/react-jss/dist/react-jss.esm.js',
        );

        var _polished = __webpack_require__(
          /*! polished */ './node_modules/polished/dist/polished.es.js',
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }

        var useStyles = (0, _reactJss.createUseStyles)(function(theme) {
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
        });

        var ErrorNotice = function ErrorNotice(_ref) {
          var error = _ref.error;

          var css = useStyles();
          return _react2.default.createElement(
            'div',
            {className: css.container},
            _react2.default.createElement(
              'h2',
              {className: css.title},
              'Something went wrong',
            ),
            _react2.default.createElement(
              'p',
              {className: css.text},
              'Please, try again later. Maybe this will help you:',
            ),
            _react2.default.createElement(
              'p',
              {className: css.text},
              (0, _stringify2.default)(error),
            ),
          );
        };

        exports.default = ErrorNotice;

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
          /*! react-jss */ './node_modules/react-jss/dist/react-jss.esm.js',
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }

        /**
         * Just a loader UI component.
         * In real app it must be placed in some separated
         * package (or yarn workspace) with all other UI components.
         */
        var useStyles = (0, _reactJss.createUseStyles)(function(theme) {
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
        });

        var Loader = function Loader(_ref) {
          var children = _ref.children,
            className = _ref.className,
            active = _ref.active;

          var css = useStyles();
          return _react2.default.createElement(
            'div',
            {
              className: (0, _classnames2.default)(
                css.loader,
                active && css.active,
                className,
              ),
            },
            children,
          );
        };

        exports.default = Loader;

        /***/
      },

    /***/ './src/components/Section.js':
      /*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
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
          /*! react-jss */ './node_modules/react-jss/dist/react-jss.esm.js',
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }

        var useStyles = (0, _reactJss.createUseStyles)(function(theme) {
          return {
            section: {
              boxShadow: theme.shadow.level1,
              background: theme.common.card,
              borderRadius: theme.common.radius,
              margin: 20,
              padding: 20,
              position: 'relative',
            },
          };
        });

        var Section = function Section(_ref) {
          var children = _ref.children;

          var classes = useStyles();
          return _react2.default.createElement(
            'div',
            {className: classes.section},
            children,
          );
        };

        exports.default = Section;

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
          /*! react-jss */ './node_modules/react-jss/dist/react-jss.esm.js',
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

    /***/ './src/containers/CountriesByContinent.js':
      /*!************************************************!*\
  !*** ./src/containers/CountriesByContinent.js ***!
  \************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });

        var _slicedToArray2 = __webpack_require__(
          /*! babel-runtime/helpers/slicedToArray */ './node_modules/babel-runtime/helpers/slicedToArray.js',
        );

        var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

        var _react = __webpack_require__(
          /*! react */ './node_modules/react/index.js',
        );

        var _react2 = _interopRequireDefault(_react);

        var _hooks = __webpack_require__(
          /*! @apollo/client/react/hooks */ './node_modules/@apollo/client/react/hooks/index.js',
        );

        var _countryByContinent = __webpack_require__(
          /*! ../graphql/countryByContinent.gql */ './src/graphql/countryByContinent.gql',
        );

        var _countryByContinent2 = _interopRequireDefault(_countryByContinent);

        var _ErrorNotice = __webpack_require__(
          /*! ../components/ErrorNotice */ './src/components/ErrorNotice.js',
        );

        var _ErrorNotice2 = _interopRequireDefault(_ErrorNotice);

        var _Loader = __webpack_require__(
          /*! ../components/Loader */ './src/components/Loader.js',
        );

        var _Loader2 = _interopRequireDefault(_Loader);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }

        /**
         * Illustration how queries work.
         * - Each query is saved in Apollo Cache (unless you specify 'no-cache' fetch policy).
         * - You can force to fetch new data from the back-end via fetch policy property.
         */
        var CountriesByContinent = function CountriesByContinent() {
          var _useState = (0, _react.useState)('EU'),
            _useState2 = (0, _slicedToArray3.default)(_useState, 2),
            continent = _useState2[0],
            setContinent = _useState2[1];

          var _useState3 = (0, _react.useState)(false),
            _useState4 = (0, _slicedToArray3.default)(_useState3, 2),
            force = _useState4[0],
            setForce = _useState4[1];

          var _useQuery = (0, _hooks.useQuery)(_countryByContinent2.default, {
              variables: {
                code: continent,
              },
              fetchPolicy: force ? 'network-only' : 'cache-first',
            }),
            data = _useQuery.data,
            loading = _useQuery.loading,
            error = _useQuery.error;

          if (error)
            return _react2.default.createElement(_ErrorNotice2.default, {
              error: error,
            });

          return _react2.default.createElement(
            _Loader2.default,
            {active: loading},
            _react2.default.createElement(
              'h4',
              null,
              'Loading data (w/o forcing network requests) & Caching',
            ),
            _react2.default.createElement(
              'form',
              {
                onSubmit: function onSubmit(e) {
                  e.preventDefault();
                  setContinent(e.target.elements.continent.value);
                  setForce(e.target.elements.force.checked);
                },
              },
              _react2.default.createElement('input', {
                type: 'text',
                placeholder: 'Continent (EU, AS, NA, etc.)',
                name: 'continent',
                defaultValue: 'EU',
              }),
              ' ',
              _react2.default.createElement(
                'button',
                {type: 'submit'},
                'Load countries',
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement('input', {
                type: 'checkbox',
                name: 'force',
                id: 'force',
              }),
              ' ',
              _react2.default.createElement(
                'label',
                {htmlFor: 'force'},
                'Force network request',
              ),
            ),
            data &&
              data.continent &&
              _react2.default.createElement(
                _react.Fragment,
                null,
                _react2.default.createElement(
                  'h2',
                  null,
                  data.continent.name + ' (' + data.continent.code + ')',
                ),
                data.continent.countries.map(function(_ref) {
                  var emoji = _ref.emoji,
                    code = _ref.code,
                    capital = _ref.capital;
                  return _react2.default.createElement(
                    'div',
                    {key: code},
                    emoji + ' (' + code + ') - ' + capital,
                  );
                }),
              ),
          );
        };

        exports.default = CountriesByContinent;

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

        var _CountriesByContinent = __webpack_require__(
          /*! ./CountriesByContinent */ './src/containers/CountriesByContinent.js',
        );

        var _CountriesByContinent2 = _interopRequireDefault(
          _CountriesByContinent,
        );

        var _EditExistingCountry = __webpack_require__(
          /*! ./EditExistingCountry */ './src/containers/EditExistingCountry.js',
        );

        var _EditExistingCountry2 = _interopRequireDefault(
          _EditExistingCountry,
        );

        var _RestAPI = __webpack_require__(
          /*! ./RestAPI */ './src/containers/RestAPI.js',
        );

        var _RestAPI2 = _interopRequireDefault(_RestAPI);

        var _QueryDeduplication = __webpack_require__(
          /*! ./QueryDeduplication */ './src/containers/QueryDeduplication.js',
        );

        var _QueryDeduplication2 = _interopRequireDefault(_QueryDeduplication);

        var _Section = __webpack_require__(
          /*! ../components/Section */ './src/components/Section.js',
        );

        var _Section2 = _interopRequireDefault(_Section);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }

        var Dashboard = function Dashboard() {
          return _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              _Section2.default,
              null,
              _react2.default.createElement(
                _CountriesByContinent2.default,
                null,
              ),
            ),
            _react2.default.createElement(
              _Section2.default,
              null,
              _react2.default.createElement(
                _EditExistingCountry2.default,
                null,
              ),
            ),
            _react2.default.createElement(
              _Section2.default,
              null,
              _react2.default.createElement(_QueryDeduplication2.default, null),
            ),
            _react2.default.createElement(
              _Section2.default,
              null,
              _react2.default.createElement(_RestAPI2.default, null),
            ),
          );
        };

        exports.default = Dashboard;

        /***/
      },

    /***/ './src/containers/EditExistingCountry.js':
      /*!***********************************************!*\
  !*** ./src/containers/EditExistingCountry.js ***!
  \***********************************************/
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

        var _hooks = __webpack_require__(
          /*! @apollo/client/react/hooks */ './node_modules/@apollo/client/react/hooks/index.js',
        );

        var _country = __webpack_require__(
          /*! ../graphql/fragments/country.gql */ './src/graphql/fragments/country.gql',
        );

        var _country2 = _interopRequireDefault(_country);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }

        /**
         * Illustation how to work with fragments and modify parts of existing data
         * using 'readFragment' and 'writeFragment'.
         */
        var EditExistingCountry = function EditExistingCountry() {
          var client = (0, _hooks.useApolloClient)();

          return _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h4',
              null,
              'Modifying cache with Fragments',
            ),
            _react2.default.createElement(
              'form',
              {
                onSubmit: function onSubmit(e) {
                  e.preventDefault();
                  var fragment = {
                    id: 'Country:' + e.target.elements.code.value,
                    fragment: _country2.default,
                  };

                  var data = client.readFragment(fragment);

                  if (!data) {
                    console.error('No country found! :(');
                  }

                  client.writeFragment(
                    (0, _extends3.default)({}, fragment, {
                      data: (0, _extends3.default)({}, data, {
                        capital: e.target.elements.capital.value,
                      }),
                    }),
                  );
                },
              },
              _react2.default.createElement('input', {
                type: 'text',
                placeholder: 'Enter Country Code',
                name: 'code',
              }),
              ' ',
              _react2.default.createElement('input', {
                type: 'text',
                placeholder: 'Set a new capital',
                name: 'capital',
              }),
              ' ',
              _react2.default.createElement(
                'button',
                {type: 'submit'},
                'Overwrite',
              ),
            ),
          );
        };

        exports.default = EditExistingCountry;

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

        var _react = __webpack_require__(
          /*! react */ './node_modules/react/index.js',
        );

        var _react2 = _interopRequireDefault(_react);

        var _core = __webpack_require__(
          /*! @apollo/client/core */ './node_modules/@apollo/client/core/index.js',
        );

        var _cache = __webpack_require__(
          /*! @apollo/client/cache */ './node_modules/@apollo/client/cache/index.js',
        );

        var _react3 = __webpack_require__(
          /*! @apollo/client/react */ './node_modules/@apollo/client/react/index.js',
        );

        var _batchHttp = __webpack_require__(
          /*! @apollo/client/link/batch-http */ './node_modules/@apollo/client/link/batch-http/index.js',
        );

        var _apolloLinkRest = __webpack_require__(
          /*! apollo-link-rest */ './node_modules/apollo-link-rest/bundle.umd.js',
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }

        var client = new _core.ApolloClient({
          link: _core.ApolloLink.from([
            new _apolloLinkRest.RestLink({
              uri: 'https://randomuser.me/api/',
            }),
            new _batchHttp.BatchHttpLink({
              uri: 'https://countries.trevorblades.com/graphql',
            }),
          ]),
          cache: new _cache.InMemoryCache({
            dataIdFromObject: function dataIdFromObject(object) {
              var id = object.code || object.id;
              if (id) {
                return object.__typename + ':' + id;
              }
              return (0, _cache.defaultDataIdFromObject)(object);
            },
          }),

          /**
           * Because it is an experiment we use hardcoded value
           * In working example we'll use 'process.env'
           */
          connectToDevTools: true,
          addTypeName: true,
        });

        var GraphQLProvider = function GraphQLProvider(_ref) {
          var children = _ref.children;
          return _react2.default.createElement(
            _react3.ApolloProvider,
            {client: client},
            children,
          );
        };

        exports.default = GraphQLProvider;

        /***/
      },

    /***/ './src/containers/QueryDeduplication.js':
      /*!**********************************************!*\
  !*** ./src/containers/QueryDeduplication.js ***!
  \**********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });

        var _regenerator = __webpack_require__(
          /*! babel-runtime/regenerator */ './node_modules/babel-runtime/regenerator/index.js',
        );

        var _regenerator2 = _interopRequireDefault(_regenerator);

        var _taggedTemplateLiteral2 = __webpack_require__(
          /*! babel-runtime/helpers/taggedTemplateLiteral */ './node_modules/babel-runtime/helpers/taggedTemplateLiteral.js',
        );

        var _taggedTemplateLiteral3 = _interopRequireDefault(
          _taggedTemplateLiteral2,
        );

        var _asyncToGenerator2 = __webpack_require__(
          /*! babel-runtime/helpers/asyncToGenerator */ './node_modules/babel-runtime/helpers/asyncToGenerator.js',
        );

        var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

        var _templateObject = (0, _taggedTemplateLiteral3.default)(
            [
              '\n        query DeduplicatedQuery {\n          language(code: "en") {\n            name\n            code\n          }\n        }\n      ',
            ],
            [
              '\n        query DeduplicatedQuery {\n          language(code: "en") {\n            name\n            code\n          }\n        }\n      ',
            ],
          ),
          _templateObject2 = (0, _taggedTemplateLiteral3.default)(
            [
              '\n        query SubsetDeduplicatedQuery {\n          language(code: "en") {\n            code\n          }\n        }\n      ',
            ],
            [
              '\n        query SubsetDeduplicatedQuery {\n          language(code: "en") {\n            code\n          }\n        }\n      ',
            ],
          ),
          _templateObject3 = (0, _taggedTemplateLiteral3.default)(
            [
              '\n        query DeduplicatedQuery {\n          language(code: "en") {\n            code\n            native\n          }\n        }\n      ',
            ],
            [
              '\n        query DeduplicatedQuery {\n          language(code: "en") {\n            code\n            native\n          }\n        }\n      ',
            ],
          ),
          _templateObject4 = (0, _taggedTemplateLiteral3.default)(
            [
              '\n        query DeduplicatedQuery {\n          language(code: "en") {\n            code\n            rtl\n          }\n        }\n      ',
            ],
            [
              '\n        query DeduplicatedQuery {\n          language(code: "en") {\n            code\n            rtl\n          }\n        }\n      ',
            ],
          );

        var _react = __webpack_require__(
          /*! react */ './node_modules/react/index.js',
        );

        var _react2 = _interopRequireDefault(_react);

        var _core = __webpack_require__(
          /*! @apollo/client/core */ './node_modules/@apollo/client/core/index.js',
        );

        var _hooks = __webpack_require__(
          /*! @apollo/client/react/hooks */ './node_modules/@apollo/client/react/hooks/index.js',
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }

        var QueryDeduplication = function QueryDeduplication() {
          var client = (0, _hooks.useApolloClient)();

          var handleDeduplicationClick = (function() {
            var _ref = (0, _asyncToGenerator3.default)(
              /*#__PURE__*/ _regenerator2.default.mark(function _callee() {
                var firstData, secondData;
                return _regenerator2.default.wrap(
                  function _callee$(_context) {
                    while (1) {
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          _context.next = 2;
                          return client.query({
                            query: (0, _core.gql)(_templateObject),
                          });

                        case 2:
                          firstData = _context.sent;

                          console.log(firstData.data.language);

                          // This query is a subset of the DeduplicatedQuery
                          _context.next = 6;
                          return client.query({
                            query: (0, _core.gql)(_templateObject2),
                          });

                        case 6:
                          secondData = _context.sent;

                          console.log(secondData.data.language);

                        case 8:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  },
                  _callee,
                  undefined,
                );
              }),
            );

            return function handleDeduplicationClick() {
              return _ref.apply(this, arguments);
            };
          })();

          var handleNoDeduplicationClick = (function() {
            var _ref2 = (0, _asyncToGenerator3.default)(
              /*#__PURE__*/ _regenerator2.default.mark(function _callee2() {
                return _regenerator2.default.wrap(
                  function _callee2$(_context2) {
                    while (1) {
                      switch ((_context2.prev = _context2.next)) {
                        case 0:
                          _context2.next = 2;
                          return client.query({
                            query: (0, _core.gql)(_templateObject3),
                          });

                        case 2:
                          _context2.next = 4;
                          return client.query({
                            query: (0, _core.gql)(_templateObject4),
                          });

                        case 4:
                        case 'end':
                          return _context2.stop();
                      }
                    }
                  },
                  _callee2,
                  undefined,
                );
              }),
            );

            return function handleNoDeduplicationClick() {
              return _ref2.apply(this, arguments);
            };
          })();

          return _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement('h4', null, 'Query Deduplication'),
            _react2.default.createElement(
              'button',
              {onClick: handleDeduplicationClick},
              'Test query deduplication',
            ),
            ' ',
            _react2.default.createElement(
              'button',
              {onClick: handleNoDeduplicationClick},
              'Test non deduping queries',
            ),
          );
        };

        exports.default = QueryDeduplication;

        /***/
      },

    /***/ './src/containers/RestAPI.js':
      /*!***********************************!*\
  !*** ./src/containers/RestAPI.js ***!
  \***********************************/
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

        var _toConsumableArray2 = __webpack_require__(
          /*! babel-runtime/helpers/toConsumableArray */ './node_modules/babel-runtime/helpers/toConsumableArray.js',
        );

        var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

        var _react = __webpack_require__(
          /*! react */ './node_modules/react/index.js',
        );

        var _react2 = _interopRequireDefault(_react);

        var _hooks = __webpack_require__(
          /*! @apollo/client/react/hooks */ './node_modules/@apollo/client/react/hooks/index.js',
        );

        var _usersQuery = __webpack_require__(
          /*! ../graphql/usersQuery.gql */ './src/graphql/usersQuery.gql',
        );

        var _usersQuery2 = _interopRequireDefault(_usersQuery);

        var _Loader = __webpack_require__(
          /*! ../components/Loader */ './src/components/Loader.js',
        );

        var _Loader2 = _interopRequireDefault(_Loader);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }

        /**
         * Example how to use REST API inside Apollo Client (if needed).
         * Also, an example how to modify data in cache but using another approach
         * with "readQuery" and "writeQuery".
         */
        var RestAPI = function RestAPI() {
          var _useQuery = (0, _hooks.useQuery)(_usersQuery2.default),
            data = _useQuery.data,
            loading = _useQuery.loading,
            client = _useQuery.client;

          var handleSubmit = (0, _react.useCallback)(
            function(e) {
              e.preventDefault();

              var newResults = [].concat(
                (0, _toConsumableArray3.default)(data.users.results),
              );

              // Create a new entry
              newResults.push(
                (0, _extends3.default)({}, newResults[0], {
                  name: (0, _extends3.default)({}, newResults[0].name, {
                    title: 'N/A',
                    first: 'N/A',
                    last: 'N/A',
                  }),
                  login: (0, _extends3.default)({}, newResults[0].login, {
                    uuid: e.target.elements.uuid.value,
                  }),
                }),
              );

              client.writeQuery({
                query: _usersQuery2.default,
                data: (0, _extends3.default)({}, data, {
                  users: (0, _extends3.default)({}, data.users, {
                    results: newResults,
                  }),
                }),
              });
            },
            [data],
          );

          return _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              _Loader2.default,
              {active: loading},
              _react2.default.createElement(
                'h4',
                null,
                'Consuming REST API (apollo-link-rest) & Modifying cache with query overwriting',
              ),
              _react2.default.createElement(
                'form',
                {
                  onSubmit: handleSubmit,
                },
                _react2.default.createElement('input', {
                  type: 'text',
                  placeholder: 'Enter UUID',
                  name: 'uuid',
                }),
                ' ',
                _react2.default.createElement(
                  'button',
                  {type: 'submit'},
                  'Add new user',
                ),
              ),
              data &&
                data.users.results.map(function(_ref) {
                  var login = _ref.login,
                    name = _ref.name;
                  return _react2.default.createElement(
                    'div',
                    {key: login.uuid},
                    name.title +
                      ' ' +
                      name.first +
                      ' ' +
                      name.last +
                      ' (' +
                      login.uuid +
                      ')',
                  );
                }),
            ),
          );
        };

        exports.default = RestAPI;

        /***/
      },

    /***/ './src/graphql/countryByContinent.gql':
      /*!********************************************!*\
  !*** ./src/graphql/countryByContinent.gql ***!
  \********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var doc = {
          kind: 'Document',
          definitions: [
            {
              kind: 'OperationDefinition',
              operation: 'query',
              name: {kind: 'Name', value: 'CountryByContinentQuery'},
              variableDefinitions: [
                {
                  kind: 'VariableDefinition',
                  variable: {
                    kind: 'Variable',
                    name: {kind: 'Name', value: 'code'},
                  },
                  type: {
                    kind: 'NonNullType',
                    type: {
                      kind: 'NamedType',
                      name: {kind: 'Name', value: 'ID'},
                    },
                  },
                  directives: [],
                },
              ],
              directives: [],
              selectionSet: {
                kind: 'SelectionSet',
                selections: [
                  {
                    kind: 'Field',
                    name: {kind: 'Name', value: 'continent'},
                    arguments: [
                      {
                        kind: 'Argument',
                        name: {kind: 'Name', value: 'code'},
                        value: {
                          kind: 'Variable',
                          name: {kind: 'Name', value: 'code'},
                        },
                      },
                    ],
                    directives: [],
                    selectionSet: {
                      kind: 'SelectionSet',
                      selections: [
                        {
                          kind: 'Field',
                          name: {kind: 'Name', value: 'code'},
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: 'Field',
                          name: {kind: 'Name', value: 'name'},
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: 'Field',
                          name: {kind: 'Name', value: 'countries'},
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                              {
                                kind: 'FragmentSpread',
                                name: {kind: 'Name', value: 'Country'},
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
          loc: {start: 0, end: 261},
        };
        doc.loc.source = {
          body:
            '#import "./fragments/country.gql"\n\nquery CountryByContinentQuery ($code: ID!) {\n  continent(code: $code) {\n    code\n    name\n    countries {\n      # GraphQL Framgents\n      # https://www.apollographql.com/docs/react/data/fragments/\n      ...Country\n    }\n  }\n}\n',
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
        doc.definitions = doc.definitions.concat(
          unique(
            __webpack_require__(
              /*! ./fragments/country.gql */ './src/graphql/fragments/country.gql',
            ).definitions,
          ),
        );

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
          var newRefs = new Set();

          // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
          opRefs.forEach(function(refName) {
            newRefs.add(refName);
          });

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

        module.exports['CountryByContinentQuery'] = oneQuery(
          doc,
          'CountryByContinentQuery',
        );

        /***/
      },

    /***/ './src/graphql/fragments/country.gql':
      /*!*******************************************!*\
  !*** ./src/graphql/fragments/country.gql ***!
  \*******************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        var doc = {
          kind: 'Document',
          definitions: [
            {
              kind: 'FragmentDefinition',
              name: {kind: 'Name', value: 'Country'},
              typeCondition: {
                kind: 'NamedType',
                name: {kind: 'Name', value: 'Country'},
              },
              directives: [],
              selectionSet: {
                kind: 'SelectionSet',
                selections: [
                  {
                    kind: 'Field',
                    name: {kind: 'Name', value: 'code'},
                    arguments: [],
                    directives: [],
                  },
                  {
                    kind: 'Field',
                    name: {kind: 'Name', value: 'emoji'},
                    arguments: [],
                    directives: [],
                  },
                  {
                    kind: 'Field',
                    name: {kind: 'Name', value: 'capital'},
                    arguments: [],
                    directives: [],
                  },
                ],
              },
            },
          ],
          loc: {start: 0, end: 57},
        };
        doc.loc.source = {
          body:
            'fragment Country on Country {\n  code\n  emoji\n  capital\n}\n',
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
          var newRefs = new Set();

          // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
          opRefs.forEach(function(refName) {
            newRefs.add(refName);
          });

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

        module.exports['Country'] = oneQuery(doc, 'Country');

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
          loc: {start: 0, end: 326},
        };
        doc.loc.source = {
          body:
            'query UsersQuery {\n  users @rest(type: "Users", path: "?nat=gb&results=5") {\n    results @type(name: "User") {\n      name @type(name: "Name") {\n        title\n        first\n        last\n      }\n      login @type(name: "Login") {\n        uuid\n      }\n      picture @type(name: "Picture") {\n        thumbnail\n      }\n    }\n  }\n}\n',
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
          var newRefs = new Set();

          // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
          opRefs.forEach(function(refName) {
            newRefs.add(refName);
          });

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
          /*! react-jss */ './node_modules/react-jss/dist/react-jss.esm.js',
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
          /*! /Users/davydop/sites/graphql-example/src/index.js */ './src/index.js',
        );

        /***/
      },

    /***/ 1:
      /*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        /* (ignored) */
        /***/
      },

    /******/
  },
);
//# sourceMappingURL=app.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiIn0=
