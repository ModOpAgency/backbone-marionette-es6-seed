'use strict';
var webpack = require('webpack'),
    path = require('path'),
    SpritesmithPlugin = require('webpack-spritesmith'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');
    module.exports = {
    context: path.resolve('app/scripts'),
    entry: ['./main.js'],
    output: {
        path: path.resolve('dist/assets/'),
        publicPath: '/assets/',
        filename: 'scripts/main.js'
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
            exclude: /(node_modules|vendor)/,
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
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!postcss-loader!sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true')
        },{
            test: /\.(png|jpg|svg|gif|eot|ttf|woff)$/,
            exclude: /node_modules/,
            loader: 'file-loader?name=[path][name].[ext]'
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
        }),
        new ExtractTextPlugin('styles/main.css'),
        new SpritesmithPlugin({
          src: {
              cwd: path.resolve(__dirname, 'app/assets/images/source'),
              glob: '+(*.jpg|*.jpeg|*.png)'
          },
          target: {
              image: path.resolve(__dirname, '../app/assets/images/sprite/sprite.png'),
              css: path.resolve(__dirname, '../app/styles/helper/_sprite.scss')
          },
          spritesmithOptions: {
              padding: 10
          }
      })
    ]
};
