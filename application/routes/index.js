const config = require('application/modules/config');
const log = require('application/modules/log');

const { combineReducers, createStore } = require('redux');
const marko = require('marko');
const Router = require('koa-router');

const dataReducer = require('application/client/reducers/data');

const router = new Router();
router
    .get('/', async (ctx, next) => {
        const reducers = combineReducers({
            data: dataReducer,
        });
        const store = createStore(reducers);
        const preloadedState = store.getState();
        preloadedState.data = {
            test: 'test',
        };
        const template = marko.load('application/client/pages/home/template.marko');
        ctx.type = 'text/html';
        ctx.body = template.stream({
            title: 'psycat laser party',
            preloadedState,
        });
    });

module.exports = router;
