var add = require('./jscodetest.js');
var assert = require("assert");

describe('Array', function() {
  describe('indexOf', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
    it ('should return index of target', function() {
      assert.equal(2, [1,2,3].indexOf(3));
    });
  });

});


      console.log('what is the code????????????????????',add.me(2,3));
describe('testing module exports', function() {
  describe('add.me', function() {
    var result = add.me(7,7);
    it('should return the sum of 2 numbers', function() {
      assert.equal(10, add.me(4,6));
      // assert(result === 14);
    });
  });

});

// describe('VY\'s EXAMPLE', function() {
//   var identity = function(val){
//     return val;
//   }
//
//   describe('identity()', function() {
//     it('should return whatever value is passed into it', function() {
//       var result = identity(77);
//       // assert.equal(5, identity(5));
//       assert(result === 77);
//     });
//   });
// });
