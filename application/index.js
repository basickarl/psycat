const config = require('application/modules/config');
const log = require('application/modules/log');

log.info(`${process.env.NODE_ENV} mode`);

// load marko and lasso
require('require-self-ref');
require('marko/node-require');
require('lasso/node-require-no-op').enable('.scss', '.css'); // Stops node from loading scss and css files (when using require('style.scss'))
require('lasso').configure({
    plugins: [
        'lasso-sass', // Allow SCSS files to be rendered to CSS
        'lasso-marko', // Allow Marko templates to be compiled and transported to the browser
        {
            plugin: 'minprops/lasso',
            enabled: config.isProduction,
        },
    ],
    outputDir: 'static/', // Place all generated JS/CSS/etc. files into the "static" dir
    bundlingEnabled: config.isProduction, // Only enable bundling in production
    minify: config.isProduction, // Only minify JS and CSS code in production
    fingerprintsEnabled: config.isProduction, // Only add fingerprints to URLs in production
    require: {
        transforms: [
            {
                transform: 'lasso-babel-transform',
                config: {
                    babelOptions: {
                        presets: [
                            [
                                'env',
                                {
                                    targets: {
                                        browsers: [
                                            'last 4 versions',
                                            'safari >= 7',
                                        ],
                                    },
                                },
                            ],
                        ],
                    },
                },
            },
        ],
    },
});

const http = require('http');

const routes = require('application/routes');
const websocket = require('application/websocket');

const Koa = require('koa');
const mount = require('koa-mount');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
app.use(mount('/static', serve('static')));
app.use(bodyParser());
app.use(routes.routes());
app.use(routes.allowedMethods());

const port = config.httpPort;
const server = http.createServer(app.callback());
websocket(server);
server.listen(port, () => {
    log.info(`server listening to port ${port}`);
    // the browser-refresh module uses this event to know that the
    // process is ready to serve traffic after the restart
    if (process.send) {
        process.send('online');
    }
});
