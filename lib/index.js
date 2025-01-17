'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = exports.jsxDecorator = void 0;

var _react = _interopRequireDefault(require('react'));

var _addons = require('@storybook/addons');

var _reactElementToJsxString = _interopRequireDefault(
  require('react-element-to-jsx-string')
);

var _jsBeautify = require('js-beautify');

var _constants = require('./constants');

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

var applyBeforeRender = function applyBeforeRender(domString, options) {
  if (typeof options.onBeforeRender !== 'function') {
    return domString;
  }

  return options.onBeforeRender(domString);
};

var renderJsx = function renderJsx(code, options) {
  for (var i = 0; i < options.skip; i++) {
    if (typeof code === 'undefined') {
      console.warn('Cannot skip undefined element');
      return;
    }

    if (_react['default'].Children.count(code) > 1) {
      console.warn('Trying to skip an array of elements');
      return;
    }

    if (typeof code.props.children === 'undefined') {
      console.warn('Not enough children to skip elements.');

      if (typeof code.type === 'function' && code.type.name === '') {
        code = code.type(code.props);
      }
    } else {
      if (typeof code.props.children === 'function') {
        code = code.props.children();
      } else {
        code = code.props.children;
      }
    }
  }

  if (typeof code === 'undefined') {
    return console.warn('Too many skip or undefined component');
  }

  while (typeof code.type === 'function' && code.type.name === '') {
    code = code.type(code.props);
  }

  var ooo =
    typeof options.displayName === 'string'
      ? _objectSpread({}, options, {
          showFunctions: true,
          displayName: function displayName() {
            return options.displayName;
          }
        })
      : options;
  return _react['default'].Children.map(code, function(c) {
    var string = applyBeforeRender(
      (0, _reactElementToJsxString['default'])(c, ooo),
      options
    );
    var matches = string.match(/\S+=\"([^"]*)\"/g);

    if (matches) {
      matches.forEach(function(match) {
        string = string.replace(match, match.replace(/&quot;/g, "'"));
      });
    }

    return string;
  }).join('\n');
};

var jsxDecorator = function jsxDecorator(storyFn, parameters) { // storyFn: RenderFunction,
  var defaultOpts = {
    skip: 0,
    showFunctions: true,
    enableBeautify: true
  };

  var options = _objectSpread(
    {},
    defaultOpts,
    {},
    (parameters.parameters && parameters.parameters.jsx) || {}
  );

  var channel = _addons.addons.getChannel(); //  const story: ReturnType<typeof storyFn> & VueComponent = storyFn();

  var story = storyFn();
  var jsx = ''; //  if (story.template) {
  //    if (options.enableBeautify) {
  //      jsx = beautifyHTML(story.template, options);
  //    } else {
  //      jsx = story.template;
  //    }
  //  } else {
  //    const rendered = renderJsx(story, options);
  //
  //    if (rendered) {
  //      jsx = rendered;
  //    }
  //  }

  jsx = (0, _jsBeautify.html)(story, options);
  channel.emit(_constants.EVENTS.ADD_JSX, parameters.id, jsx); //  return <>{story}</>;

  return story;
};

exports.jsxDecorator = jsxDecorator;
var _default = {
  addWithJSX: function addWithJSX(kind, storyFn) {
    // @ts-ignore
    return this.add(kind, function(context) {
      return jsxDecorator(storyFn, context);
    });
  }
};
exports['default'] = _default;
