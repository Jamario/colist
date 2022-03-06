const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const env = process.env.NODE_ENV;
const isDevelopment = env === 'development';

const config = require(isDevelopment
    ? '../webpack.dev.js'
    : '../webpack.config.js');
const compiler = webpack(config);

const app = express();

console.log('environment', env);

if (isDevelopment) {
    app.use(
        webpackDevMiddleware(compiler, {
            publicPath: config.output.publicPath,
        })
    );

    app.use(require('webpack-hot-middleware')(compiler));
}

// Serve the files on port 3000.
app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n');
});
