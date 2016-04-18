'use strict';

var NODE_ENV = process.env.NODE_ENV || 'development';
var webpack = require('webpack');

module.exports = {
    entry: "./home",
    output: {
        filename: "build.js",
        library: 'home'
    },

    watch: NODE_ENV === 'development',
    
    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: NODE_ENV === 'development' ? 'source-map' : null,
    
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ],
    
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js']
    },
    
    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel?presets[]=es2015'
        }]
    }
};

if(NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false,
                unsafe: true
            }
        })
    );
}
