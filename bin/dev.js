const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const nodemon = require('nodemon');
const path = require('path');

const compiler = webpack(webpackConfig);

compiler.run((err) => {
    if(err){
        console.log('compilation failed',err);
    }

    compiler.watch({},(err) => {
        if(err){
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
