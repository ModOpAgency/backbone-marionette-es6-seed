/*global -$ */
'use strict';
// generated on 2015-05-11 using generator-gulp-webapp 0.3.0
var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    notify = require('gulp-notify'),
    sprite = require('css-sprite').stream,
    webpack = require('webpack'),
    source = require('vinyl-source-stream'),
    browserSync = require('browser-sync'),
    buffer = require('vinyl-buffer'),
    _ = require('lodash'),
    reload = browserSync.reload;

gulp.task('scripts', function() {
    var compiler = webpack(require('./webpack.config.js'));
    return compiler.watch({
        aggregateTimeout: 300,
        poll: 300
    }, function(err, stats) {
        notify().write(stats.toString({
            colors: true
        }));
        reload({
            stream: false
        })
    });
});

gulp.task('styles', function() {
    return gulp.src(['app/styles/main.scss', 'app/styles/vendor.scss'])
        .pipe($.sourcemaps.init())
        .pipe($.sass({
            outputStyle: 'nested', // libsass doesn't support expanded yet
            precision: 10,
            includePaths: ['.'],
        }).on('error', function(err) {
            return notify().write(err);
            this.emit('end');
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
    return gulp.src('app/images/*.png')
        .pipe(sprite({
            name: 'sprite',
            style: '_sprite.scss',
            cssPath: '../images/sprite/',
            processor: 'scss'
        }))
        .pipe($.if('*.png', gulp.dest('app/images/sprite'), gulp.dest('app/styles/scss/helper')));
});

gulp.task('images', function() {
    return gulp.src('app/images/**/*')
        .pipe($.cache($.imagemin({
            progressive: true,
            interlaced: true,
            // don't remove IDs from SVGs, they are often used
            // as hooks for embedding and styling
            svgoPlugins: [{
                cleanupIDs: false
            }]
        })))
        .pipe(gulp.dest('dist/images'));
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
        }
    });

    // watch for changes
    gulp.watch([
        'app/*.html',
        'app/images/**/*'
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

gulp.task('build', ['html:build', 'images', 'extras', 'sprite:build'], function() {
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

gulp.task('styles:build', ['styles'], function() {
    return gulp.src('.tmp/styles/*')
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('scripts:build', ['scripts'], function() {
    // modify some webpack config options
    var myConfig = Object.create(require('./webpack.config.js'));

    // custom config for production
    myConfig.output.path = __dirname + '/dist/scripts/';
    myConfig.devTool = 'cheap-source-map';

    // run webpack
    webpack(myConfig, function(err, stats) {
        if (err) {
            notify().write(err);
        } else {
            return notify().write(stats.toString({
                colors: true
            }));
        }
    });

    return true;
});

gulp.task('sprite:build', ['sprites'], function() {
    return gulp.src('app/images/sprite/*')
        .pipe(gulp.dest('dist/images/sprite'));
});

gulp.task('default', ['clean'], function() {
    gulp.start('build');
});
