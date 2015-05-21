require.config({
    baseUrl: 'scripts',
    paths: {
        jquery: '../../bower_components/jquery/dist/jquery',
        underscore: '../../bower_components/underscore/underscore',
        backbone: '../../bower_components/backbone/backbone',
        foundation: '../../bower_components/foundation/js/foundation.min',
        handlebars: '../../bower_components/handlebars/handlebars',
        indexRouter: 'routes/index',
        personModel: 'models/persons',
        peopleCollection: 'collections/people',
        peopleView: 'views/people',
        peopleRouter: 'routes/people'
    },
    shim: {
        jquery: {
            deps: [],
            exports: '$'
        },
        foundation: {
            deps: ['jquery']
        },
        foundationReveal: {
            deps: ['jquery, foundation']
        },
        backbone: {
            deps: ['jquery', 'underscore']
        },
        handlebars: {
            exports: 'Handlebars'
        }
    }
});

/* require test suite */
require([
    'jquery',
    '/spec/testSuite.js'
],
function( $, testSuite ) {
    'use strict';

    /* on dom ready require all specs and run */
    $( function() {
        require(testSuite.specs, function() {

            if (window.mochaPhantomJS) {
                mochaPhantomJS.run();
            }
            else {
                mocha.run();
            }

        });
    });
});
