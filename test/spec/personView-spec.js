define(function (require) {
    'use strict';
    var PersonModel = require('models/person');
    var PersonView = require('views/person');
    var PeopleView = require('views/people');

    describe('Person View', function(){
      describe('Initialization', function() {
        beforeEach(function() {
            this.personModel = new PersonModel({name: 'joe'});
            this.personView = new PersonView({model: this.personModel});

        });

        it('render() should return the person view',function() {
            this.personView.render().should.equal(this.personView);
        });

        it('should render as a list item',function() {
            this.personView.render().el.nodeName.should.equal("LI");
        });
    });
    });

});
