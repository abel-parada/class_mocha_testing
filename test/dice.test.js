'use strict';

const expect = require('chai').expect;

const Dice = require('../dice');

describe('methods defined', function(){
    const dice = new Dice();

    it('Is getter maximumValue defined?', function(){
        expect(dice).to.have.a.property('maximumValue');
    });

    it('Is method roll defined?',function(){
        expect(dice).to.have.a.property('roll');
    });

});

describe('Create dice without upperbound',function(){
    const dice = new Dice();

    it('maximumValue is 6', function(){
        expect(dice.maximumValue).to.equal(6);
    });
});

describe('Create dice with given upperbound 2-20 version 1', function(){
    const testValues = new Array(19).fill(2).map((value,ind) => value+ind);

    testValues.forEach(function(upperBound){
        it(`upperBound is ${upperBound}`,function(){
            const dice = new Dice(upperBound);
            expect(dice.maximumValue).to.equal(upperBound);
        });
    });

});// end of version 1 for testing multiple cases

describe('Create dice with given upperBound 2-20 version 2', function(){

    function testUpperBound(upperBound){
        const dice = new Dice(upperBound);
        it(`Upper Bound is ${upperBound}`,function(){
            expect(dice.maximumValue).to.equal(upperBound);
        });
    }; //end of testUpperBound function

    for(let uBound=2; uBound<=20; uBound ++){
        testUpperBound(uBound)
    };

});// end of version 2 for testing multiple cases