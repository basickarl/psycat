const { applyMiddleware, combineReducers, createStore } = require('redux');

const { createLogger } = require('redux-logger');
const thunk = require('redux-thunk').default;
const promise = require('redux-promise-middleware').default;

const data = require('application/client/reducers/data');

const reducers = combineReducers({
    data,
});

const middleware = applyMiddleware(promise(), thunk, createLogger());

let store;

function loadState(preloadedState) {
    store = createStore(reducers, preloadedState, middleware);
    console.log('* preloaded state loaded');
}

function getStore() {
    return store;
}

module.exports = {
    loadState,
    getStore,
};

console.log('* store module loaded');
