define(function (require) {
    'use strict';
    var PersonModel = require('models/person');

    describe('Person Model', function(){
      describe('Initialization', function() {
        beforeEach(function() {
            this.personModel = new PersonModel({firstName: 'joe', lastName: 'smith'});
        })
        it('personModel firstName should equal joe',function() {
          this.personModel.get('firstName').should.equal('joe');
      });
        it('personModel lastName should equal smith',function() {
            this.personModel.get('lastName').should.equal('smith');
        });
    });
    });

});
