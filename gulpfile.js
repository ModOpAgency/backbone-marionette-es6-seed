/*global -$ */
'use strict';
// generated on 2015-05-11 using generator-gulp-webapp 0.3.0
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    $ = require('gulp-load-plugins')(),
    notify = require('gulp-notify'),
    gutil = require('gulp-util'),
    through = require('through'),
    sprity = require('sprity'),
    webpack = require('webpack'),
    source = require('vinyl-source-stream'),
    browserSync = require('browser-sync'),
    buffer = require('vinyl-buffer'),
    _ = require('lodash'),
    reload = browserSync.reload;

gulp.task('scripts', function(callback) {

    var webpackCompiler = webpack(require('./webpack.config.js'));

    webpackCompiler.watch({
        aggregateTimeout: 300,
        poll: 300
    }, function(err, stats) {
        notify().write(stats.toString({
            hash: false,
            assets: false,
            chunks: false,
            chunkModules: false,
            modules: false,
            cached: false,
            reasons: false,
            source: false,
            chunkOrigins: false
        }));
        reload({
            stream: false
        });
    });
    callback();
});

gulp.task('styles', function() {
    return gulp.src(['app/styles/main.scss', 'app/styles/vendor.scss'])

        .pipe($.plumber({
            errorHandler: function(err) {
                console.log(err)
                gutil.log(gutil.colors.red('################################################################################'))
                gutil.log(gutil.colors.red('Error Message: ', err.message))
                gutil.log(gutil.colors.red('Error in file: ', err.fileName))
                gutil.log(gutil.colors.red('Error at line: ', err.lineNumber))
                gutil.log(gutil.colors.red('################################################################################'))


                notify().write('Error Message: ' + err.message);
                // this.emit("error", new Error("Something happend: Error message!"))
                this.emit('end');
            }
        }))
        .pipe($.sourcemaps.init())
        .pipe($.sass({
            outputStyle: 'nested', // libsass doesn't support expanded yet
            precision: 10,
            includePaths: ['.'],
        }))
        .pipe($.postcss([
            require('autoprefixer-core')({
                browsers: ['last 1 version']
            })
        ]))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest('.tmp/styles'))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('sprites', function() {
    return sprity.src({
            src: 'app/assets/images/*.png',
            name: 'sprite',
            style: '_sprite.scss',
            cssPath: '../assets/images/sprite/',
            processor: 'sass', // make sure you have installed sprity-sass
        })
        .pipe($.if('*.png', gulp.dest('app/assets/images/sprite'), gulp.dest('app/styles/helper')))
});

gulp.task('extras', function() {
    return gulp.src([
        'app/*.*',
        '!app/*.html'
    ], {
        dot: true
    }).pipe(gulp.dest('dist'));
});

gulp.task('clean', require('del').bind(null, ['.tmp', 'dist']));

gulp.task('serve', ['styles', 'sprites', 'scripts'], function() {
    browserSync({
        notify: false,
        port: 9000,
        server: {
            baseDir: ['.tmp', 'app'],
            routes: {}
        },
        injectChanges: true
    });

    // watch for changes
    gulp.watch([
        'app/*.html',
        'app/assets/**/*'
    ]).on('change', reload);

    gulp.watch('app/styles/**/*.scss', ['styles']);
});

gulp.task('serve:dist', ['build'], function() {
    browserSync({
        notify: false,
        port: 9000,
        server: {
            baseDir: 'dist',
            routes: {}
        }
    });
});

gulp.task('build', ['html:build', 'images:build', 'extras', 'sprite:build'], function() {
    return gulp.src('dist/**/*').pipe($.size({
        title: 'build',
        gzip: true
    }));
});

gulp.task('html:build', ['styles:build', 'scripts:build'], function() {
    var assets = $.useref.assets({
        searchPath: ['app', '.', 'dist']
    });

    return gulp.src('app/*.html')
        .pipe(assets)
        .pipe($.if('*.css', $.csso()))
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe($.if('*.html', $.minifyHtml({
            conditionals: true,
            loose: true
        })))
        .pipe(gulp.dest('dist'));
});

gulp.task('assets:build', function() {
    return gulp.src(['app/assets/**/*', "!app/assets/images/**/*.{png,jpg,gif}"])
        .pipe(gulp.dest('dist/assets'));
});

gulp.task('images:build', ['assets:build'], function() {
    return gulp.src(['app/assets/images/**/*.{png,jpg,gif}'])
        .pipe($.cache($.imagemin({
            progressive: true,
            interlaced: true,
            // don't remove IDs from SVGs, they are often used
            // as hooks for embedding and styling
            //svgoPlugins: [{
            //    cleanupIDs: false
            //}]
        })))
        .pipe(gulp.dest('dist/assets/images'));
});

gulp.task('styles:build', ['styles'], function() {
    return gulp.src('.tmp/styles/*')
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('scripts:build', function(callback) {
    // modify some webpack config options
    var webpackConfig = Object.create(require('./webpack.config.js'));

    // custom config for production
    webpackConfig.output.path = __dirname + '/dist/scripts/';
    webpackConfig.devTool = 'cheap-source-map';

    // create a single instance of the compiler to allow caching
    var webpackCompiler = webpack(webpackConfig);

    // run webpack
    webpackCompiler.run(function(err, stats) {
        if (err) {
            throw new gutil.PluginError('scripts:build', err);
        }
        callback();
    });
});

gulp.task('sprite:build', ['sprites'], function() {
    return gulp.src('app/assets/images/sprite/*')
        .pipe(gulp.dest('dist/assets/images/sprite'));
});

gulp.task('default', ['clean'], function() {
    gulp.start('build');
});
