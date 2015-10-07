var Promise = require('bluebird');
// input: search type, sorted array, key/target
// output: match type, index of found match

// check if input is correct: is the array actually an array? is it full of integers?
// check which input search type: LessThan, LessThanEquals, Equals, GreaterThan, GreaterThanEquals
// is the sorted array ascending or descending?

// linear time and space

// var findItem = function(searchType, array, key){
//   if (Array.isArray(array)) {
//     console.log('hello');
//   } else {
//     return "you need to input an array!";
//   }
// }
// var arrayAscends = function(array) { // check if the input array is ascending or descending
//   if (array[0] < array[array.length-1]){
//     console.log('array is in ASCENDING order');
//     return true;
//   } else {
//     console.log('array is in DESCENDING order');
//     return false;
//   }
// };
var searchType = {};

searchType.lessThan = function(array, key){
  var lessThanKey, index;
    for (var i = 0; i < array.length; i++) {
      if (array[i] < key){
        lessThanKey = array[i];
        index = i;
      }
    }
  if (lessThanKey !== null){
    console.log("FoundLess at: ",index);
    return index;
  }
};

// searchType.lessThanEquals = function(){
//
// };
// searchType.Equals = function(){
//
// };
// searchType.greaterThanEquals = function(){
//
// };
// searchType.greaterThan = function(){
//
// };
exports.subtractOne = function(a){return a-1;};
exports.foo = function(){};
exports.searchType = searchType;
