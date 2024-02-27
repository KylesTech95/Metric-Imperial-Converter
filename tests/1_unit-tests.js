const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();
suite('Unit Tests', function(){
    suite('Function convertHandler.getNum(input)', () => {

    suite('Numbered Assertions', function(){
        // #1
        test('whole number',function(done){
            assert.equal(convertHandler.getNum('4'),4);
            done();
        })
        test('whole float',function(done){
            assert.equal(convertHandler.getNum('4.4'),4.4);
            done();
        })
    })
// #1
    })
});
