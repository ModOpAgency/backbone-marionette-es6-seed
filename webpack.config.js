var webpack = require('webpack');
var path = require('path');
module.exports = {
    devtool: "#source-map",
    watch: true,
    entry : {
        path: __dirname + '/app/scripts/',
        filename: 'main.js'
    },
    output: {
        path: __dirname + '/.tmp/scripts/',
        filename: 'main.js'
    },
    resolve: {
        root: path.resolve('./app/scripts'),
        extensions: ['', '.js']
    },
    externals: {
        'modernizr': 'Modernizr'
    },
    node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel'
        }, {
            test: /\.hbs$/,
            loader: 'handlebars-loader'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }],
        noParse: [
            /[\/\\]node_modules[\/\\]d3[\/\\]d3\.js$/
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            '_': 'lodash',
            'Backbone': 'backbone',
            'Marionette': 'backbone.marionette',
            'Radio': 'backbone.radio'
        })
    ]
};
