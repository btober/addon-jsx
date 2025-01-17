'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _react = _interopRequireDefault(require('react'));

var _components = require('@storybook/components');

var _theming = require('@storybook/theming');

var _copyToClipboard = _interopRequireDefault(require('copy-to-clipboard'));

var _theme = _interopRequireDefault(require('./theme'));

var _prism = _interopRequireDefault(require('./prism'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(source, true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function(key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance');
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var Container = _theming.styled.div({
  height: '100%',
  overflow: 'auto',
  width: '100%'
});

var Code = _theming.styled.pre({
  flex: 1
});

var JSX = function JSX(props) {
  var _React$useState = _react['default'].useState(undefined),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    current = _React$useState2[0],
    setCurrent = _React$useState2[1];

  var _React$useState3 = _react['default'].useState({}),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    jsx = _React$useState4[0],
    setJsx = _React$useState4[1];

  var addJsx = function addJsx(id, newJsx) {
    return setJsx(_objectSpread({}, jsx, _defineProperty({}, id, newJsx)));
  };

  _react['default'].useEffect(function() {
    props.ob({
      next: function next(type) {
        return type === 'jsx' ? addJsx : setCurrent;
      }
    });
  }, []);

  var code = '';
  var highlighted = '';

  if (current && jsx[current]) {
    code = jsx[current]; //    highlighted = code ? Prism.highlight(code, Prism.languages.jsx) : '';

    highlighted = code
      ? _prism['default'].highlight(
          code,
          _prism['default'].languages.html,
          'html'
        )
      : '';
  }

  var copyJsx = _react['default'].useCallback(
    function() {
      return (0, _copyToClipboard['default'])(code);
    },
    [code]
  );

  return props.active
    ? _react['default'].createElement(
        Container,
        null,
        _react['default'].createElement(
          _theme['default'],
          null,
          _react['default'].createElement(Code, {
            dangerouslySetInnerHTML: {
              __html: highlighted
            }
          }),
          _react['default'].createElement(_components.ActionBar, {
            actionItems: [
              {
                title: 'Copy',
                onClick: copyJsx
              }
            ]
          })
        )
      )
    : null;
};

var _default = JSX;
exports['default'] = _default;
