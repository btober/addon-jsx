'use strict';

var _react = _interopRequireDefault(require('react'));

var _addons = require('@storybook/addons');

var _coreEvents = require('@storybook/core-events');

var _jsx = _interopRequireDefault(require('./jsx'));

var _constants = require('./constants');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Observable = function Observable(channel, api) {
  return function(listener) {
    channel.on(_constants.EVENTS.ADD_JSX, listener.next('jsx'));
    api.on(_coreEvents.STORY_RENDERED, listener.next('current'));
  };
};

_addons.addons.register(_constants.ADDON_ID, function(api) {
  var ob = Observable(_addons.addons.getChannel(), api);

  _addons.addons.addPanel(_constants.ADDON_PANEL, {
    title: 'HTML',
    render: function render(_ref) {
      var active = _ref.active;
      return _react['default'].createElement(_jsx['default'], {
        key: 'addon-jsx',
        active: active,
        ob: ob
      });
    }
  });
});
