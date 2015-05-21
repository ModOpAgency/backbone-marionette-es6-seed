define(function (require) {
    'use strict';
    // var Utility = require('utils/utility');

    describe('Utility', function () {

        describe('getDateTime', function () {
            it('should properly format with a space between the time and dates and am/pm', function () {
                // var formatDate = Utility.getDateTime("11/28/201406:30 PM");
                // expect(formatDate).to.equal('11.28.2014 <span>06:30PM</span>');
            });

            it('should properly format with a space between the time and am/pm', function () {
                // var formatDate = Utility.getDateTime("02/16/2015 10:00 AM");
                // expect(formatDate).to.equal('02.16.2015 <span>10:00AM</span>');
            });
        });

    });

});
