const webpack = require('webpack');
const [webpackClientConfig, webpackServerConfig] = require('../webpack.config');
const nodemon = require('nodemon');
const path = require('path');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const hmrServer = express();
const clientCompiler = webpack(webpackClientConfig);


hmrServer.use(webpackDevMiddleware(clientCompiler, {
    publicPath: webpackClientConfig.output.publicPath,
    serverSideRender: true,
    noInfo: true,
    watchOptions: {
        ignore: /dist/,
    },
    writeToDisk: true,
    states: 'error-only'
}))

hmrServer.use(webpackHotMiddleware(clientCompiler, {
    path: '/static/__webpack_hmr',
}))

hmrServer.listen(3001, () => {
    console.log('HMR started');
})

const compiler = webpack(webpackServerConfig);

compiler.run((err) => {
    if (err) {
        console.log('compilation failed', err);
    }

    compiler.watch({}, (err) => {
        if (err) {
            console.log('compilation watch failed', err)
        }
        console.log('compilation succeed');
    });
    nodemon({
        script: path.resolve(__dirname, '../dist/server/server.js'),
        watch: [
            path.resolve(__dirname, '../dist/server'),
            path.resolve(__dirname, '../dist/client'),
        ]
    })
})

//
// const nodemon = require('nodemon');
// const path = require('path');
//
// //
// // compiler.run((err) => {
// //     if (err) {
// //         console.log("compilationerror",err)
// //     }
// //     compiler.watch({}, (err) => {
// //         if (err) {
// //             console.log("error",err);
// //         }
// //         console.log('success compilation')
// //     })
// //     nodemon({
// //         script: path.resolve(__dirname, '../dist/server/server.js'),
// //         watch: [
// //             path.resolve(__dirname, '../dist/server'),
// //             path.resolve(__dirname, '../dist/client'),
// //         ]
// //     })
// // })
//
