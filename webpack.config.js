'use strict';
var webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    context: path.resolve('app/scripts'),
    entry: ['webpack/hot/dev-server', './main.js'],
    output: {
        path: path.resolve('dist/assets/'),
        publicPath: '/assets/',
        filename: 'scripts/main.js'
    },
    resolve: {
        root: path.resolve('./app/scripts'),
        extensions: ['', '.js']
    },
    devtool: 'source-map',
    devServer: {
        contentBase: 'app',
        host: '0.0.0.0',
        port: '9000',
        hot: true,
        inline: true
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
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
            loader: 'handlebars-loader',
            query: {
                helperDirs: [__dirname + '/app/scripts/common/helpers']
            }
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        },
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!!autoprefixer-loader!sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true')
        },{
            test: /\.(png|jpg)$/,
            exclude: /node_modules/,
            loader: 'url-loader?limit=1000'
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
            'Radio': 'backbone.radio',
            'foundation': 'foundation-sites/js/foundation',
            'THREE': 'three',
            'gsap': 'gsap'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('styles/main.css')
    ]
};
