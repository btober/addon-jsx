'use strict';

var _addonStoryshots = _interopRequireDefault(
  require('@storybook/addon-storyshots')
);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};

(0, _addonStoryshots['default'])({
  configPath: './example/.storybook'
});
