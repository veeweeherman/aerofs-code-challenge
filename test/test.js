var add = require('./jscodetest.js');
var aerofs = require('../src/Vy_Cu_aerofs.js');
var assert = require("assert");



console.log('checking value of what\'s being exported from project :',aerofs.searchType.lessThan);


describe('searchType lessThan method', function() {
  describe('searchType.lessThan', function () {
    var arr = [0,2,4,6,8,10];
    var key = 7;
    var result = aerofs.searchType.lessThan(arr,key);
    it('should return index of the largest value that is smaller than the key', function () {
      assert(result === 3);
      // assert.equal(-1, [1,2,3].indexOf(0));
    });
    // it ('should return index of target', function() {
    //   assert.equal(2, [1,2,3].indexOf(3));
    // });
  });
});










// ///////////////////////////////////////////////////////////////////
// // TESTING OUT THE MOCHA TESTS
// ///////////////////////////////////////////////////////////////////
// describe('Array', function() {
//   describe('indexOf', function () {
//     it('should return -1 when the value is not present', function () {
//       assert.equal(-1, [1,2,3].indexOf(5));
//       assert.equal(-1, [1,2,3].indexOf(0));
//     });
//     it ('should return index of target', function() {
//       assert.equal(2, [1,2,3].indexOf(3));
//     });
//   });
// });
// describe('testing module exports', function() {
//   describe('add.me', function() {
//     var result = add.me(7,7);
//     it('should return the sum of 2 numbers', function() {
//       assert.equal(10, add.me(4,6));
//       // assert(result === 14);
//     });
//   });
// });
// console.log('what is the subtractOne\'s results',aerofs.subtractOne(10));
// describe('VY\'s EXAMPLE', function() {
//   describe('subtractOne()', function() {
//     it('should return 1 less then number you passed as argument', function() {
//       var result = aerofs.subtractOne(20);
//       // assert.equal(19, aerofs.subtractOne(20));
//       assert(result === 19);
//     });
//   });
// });
