module.exports = {
    output: {
        path: __dirname,
        filename: 'main.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel'
        }, {
            test: /\.hbs$/,
            loader: 'handlebars-loader'
        }]
    },
    externals: {
       // require("jquery") is external and available
       //  on the global var jQuery
       "jquery": "jQuery",
       "jquery": "window.jQuery",
       'backbone': 'backbone',
            'marionette': 'backbone.marionette'
   }
};
