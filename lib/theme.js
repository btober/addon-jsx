'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _theming = require('@storybook/theming');

function _templateObject2() {
  var data = _taggedTemplateLiteral([
    "\n      code[class*='language-'],\n      pre[class*='language-'] {\n        color: #f8f8f2;\n        background: none;\n        text-shadow: 0 1px rgba(0, 0, 0, 0.3);\n        font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n        text-align: left;\n        white-space: pre;\n        word-spacing: normal;\n        word-break: normal;\n        word-wrap: normal;\n        line-height: 1.5;\n\n        -moz-tab-size: 4;\n        -o-tab-size: 4;\n        tab-size: 4;\n\n        -webkit-hyphens: none;\n        -moz-hyphens: none;\n        -ms-hyphens: none;\n        hyphens: none;\n      }\n\n      /* Code blocks */\n      pre[class*='language-'] {\n        padding: 1em;\n        margin: 0.5em 0;\n        overflow: auto;\n        border-radius: 0.3em;\n      }\n\n      :not(pre) > code[class*='language-'],\n      pre[class*='language-'] {\n        background: #272822;\n      }\n\n      /* Inline code */\n      :not(pre) > code[class*='language-'] {\n        padding: 0.1em;\n        border-radius: 0.3em;\n        white-space: normal;\n      }\n\n      .token.comment,\n      .token.prolog,\n      .token.doctype,\n      .token.cdata {\n        color: slategray;\n      }\n\n      .token.punctuation {\n        color: #f8f8f2;\n      }\n\n      .namespace {\n        opacity: 0.7;\n      }\n\n      .token.property,\n      .token.tag,\n      .token.constant,\n      .token.symbol,\n      .token.deleted {\n        color: #f92672;\n      }\n\n      .token.boolean,\n      .token.number {\n        color: #ae81ff;\n      }\n\n      .token.selector,\n      .token.attr-name,\n      .token.string,\n      .token.char,\n      .token.builtin,\n      .token.inserted {\n        color: #a6e22e;\n      }\n\n      .token.operator,\n      .token.entity,\n      .token.url,\n      .language-css .token.string,\n      .style .token.string,\n      .token.variable {\n        color: #f8f8f2;\n      }\n\n      .token.atrule,\n      .token.attr-value,\n      .token.function,\n      .token.class-name {\n        color: #e6db74;\n      }\n\n      .token.keyword {\n        color: #66d9ef;\n      }\n\n      .token.regex,\n      .token.important {\n        color: #fd971f;\n      }\n\n      .token.important,\n      .token.bold {\n        font-weight: bold;\n      }\n      .token.italic {\n        font-style: italic;\n      }\n\n      .token.entity {\n        cursor: help;\n      }\n    "
  ]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([
    "\n      code[class*='language-'],\n      pre[class*='language-'] {\n        color: black;\n        background: none;\n        text-shadow: 0 1px white;\n        font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n        text-align: left;\n        white-space: pre;\n        word-spacing: normal;\n        word-break: normal;\n        word-wrap: normal;\n        line-height: 1.5;\n\n        -moz-tab-size: 4;\n        -o-tab-size: 4;\n        tab-size: 4;\n\n        -webkit-hyphens: none;\n        -moz-hyphens: none;\n        -ms-hyphens: none;\n        hyphens: none;\n      }\n\n      pre[class*='language-']::-moz-selection,\n      pre[class*='language-'] ::-moz-selection,\n      code[class*='language-']::-moz-selection,\n      code[class*='language-'] ::-moz-selection {\n        text-shadow: none;\n        background: #b3d4fc;\n      }\n\n      pre[class*='language-']::selection,\n      pre[class*='language-'] ::selection,\n      code[class*='language-']::selection,\n      code[class*='language-'] ::selection {\n        text-shadow: none;\n        background: #b3d4fc;\n      }\n\n      @media print {\n        code[class*='language-'],\n        pre[class*='language-'] {\n          text-shadow: none;\n        }\n      }\n\n      /* Code blocks */\n      pre[class*='language-'] {\n        padding: 1em;\n        margin: 0.5em 0;\n        overflow: auto;\n      }\n\n      :not(pre) > code[class*='language-'],\n      pre[class*='language-'] {\n        background: #f5f2f0;\n      }\n\n      /* Inline code */\n      :not(pre) > code[class*='language-'] {\n        padding: 0.1em;\n        border-radius: 0.3em;\n        white-space: normal;\n      }\n\n      .token.comment,\n      .token.prolog,\n      .token.doctype,\n      .token.cdata {\n        color: slategray;\n      }\n\n      .token.punctuation {\n        color: #999;\n      }\n\n      .namespace {\n        opacity: 0.7;\n      }\n\n      .token.property,\n      .token.tag,\n      .token.boolean,\n      .token.number,\n      .token.constant,\n      .token.symbol,\n      .token.deleted {\n        color: #905;\n      }\n\n      .token.selector,\n      .token.attr-name,\n      .token.string,\n      .token.char,\n      .token.builtin,\n      .token.inserted {\n        color: #690;\n      }\n\n      .token.operator,\n      .token.entity,\n      .token.url,\n      .language-css .token.string,\n      .style .token.string {\n        color: #9a6e3a;\n        background: hsla(0, 0%, 100%, 0.5);\n      }\n\n      .token.atrule,\n      .token.attr-value,\n      .token.keyword {\n        color: #07a;\n      }\n\n      .token.function,\n      .token.class-name {\n        color: #dd4a68;\n      }\n\n      .token.regex,\n      .token.important,\n      .token.variable {\n        color: #e90;\n      }\n\n      .token.important,\n      .token.bold {\n        font-weight: bold;\n      }\n      .token.italic {\n        font-style: italic;\n      }\n\n      .token.entity {\n        cursor: help;\n      }\n    "
  ]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  );
}

var _default = _theming.styled.div(function(_ref) {
  var base = _ref.theme.base;

  if (base === 'light') {
    // Prism Standard Theme
    return (0, _theming.css)(_templateObject());
  }

  if (base === 'dark') {
    // Prism Okaidia Theme
    return (0, _theming.css)(_templateObject2());
  }
});

exports['default'] = _default;
