require('regenerator-runtime/runtime'); // Needed for async/await transform (es2017)
const { loadState } = require('application/client/store');
require('application/client/websocket');
const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
console.log(window.__PRELOADED_STATE__);
loadState(preloadedState);

console.log('* index loaded');
