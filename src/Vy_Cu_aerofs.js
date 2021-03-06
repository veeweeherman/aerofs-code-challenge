var Promise = require('bluebird');
// input: search type, sorted array, key/target
// output: match type, index of found match

// check if input is correct: is the array actually an array? is it full of integers?
// check which input search type: LessThan, LessThanEquals, Equals, GreaterThan, GreaterThanEquals
// is the sorted array ascending or descending?

// linear time and space
// ____________________________________________________________________

// input: searchType, array/items, key/target, n_items/array.length, direction
// output: match type, index number

// make object, 2 keys of asc and desc, with their values: functions with asc or desc for loops that take in a condition-checker
// make object of 5 search types, with their values of the 5 checkers
  // (5 checkers to choose from: if array[i] <, <=, =, >=, > key)

// declare function with all 5 inputs

  // declare function that checks direction of array, ascending or descending
  // make function that checks match value with the key, and that returns matchType strings



// var direction = {
//   ascending: function(array, checker){
//     for (var i = 0; i < array.length; i++) {
//       if (checker); // array[i]
//     }
//   },
//   descending: function(array, checker){
//     for (var i = array.length-1; i >= 0; i--) {
//       if (checker); // array[i]
//     }
//   }
// };



var findClosestMatch = function(searchType, array, key){

  if (array.length === 0) {return null;}

  var arrayAscends; // check if the input array is ascending or descending
  if (array[0] < array[array.length-1]){arrayAscends = true;}
  else {arrayAscends = false;}
  console.log('aray ascends?',arrayAscends);

  var searchTypes = {
    LessThan: 'array[i] < key',
    LessThanEquals: 'array[i] <= key',
    Equals: 'array[i] === key',
    GreaterThanEquals: 'array[i] >= key',
    GreaterThan: 'array[i] >= key'
  };
  var resultKey,index; //resultKey is the number that made the match

  var direction = function(){ // when invoked, it will return the appropriate for-loop depending on which direction the array is sorted
    if (arrayAscends){
    console.log('the serachtype',typeof searchTypes[searchType]);
      return function(array){
        for (var i = 0; i < array.length; i++) {
          if (searchTypes[searchType]) {
            console.log('what si this',!(searchTypes[searchType]))
            resultKey = array[i];
            index = i;
          console.log('????',resultKey,index);
            break;
          }// array[i]
        }
      };
    } else {
      return function(array, checker){
        for (var i = array.length-1; i >= 0; i--) {
          if (checker); // array[i]
          resultKey = array[i];
          index = i;
          break;
        }
      };
    }
  };


  var dir = direction(); //will return the function with the correct-direction for-loop
// console.log('wat is dir',dir)
  // searchTypes[searchType] will be the checker-method needed
  dir(array);

  var matchType = function(resultKey){ // find the correct string to return, based on the found result and key
    if (resultKey < key){return "FoundLess";}
    if (resultKey > key){return "FoundGreater";}
    if (resultKey === key){return "FoundExact";}
    if (resultKey !== key){return "NotFound";}
  };
  console.log('resultKey: ',resultKey, ' index: ',index);
  console.log('index+matchType();',index+matchType());
  return index+' '+matchType();
};
console.log('FINAL ANSWER :',findClosestMatch('LessThan',[0,2,4,6,8],4));


















// var searchType = {};
//
// searchType.lessThan = function(array, key){
//   var lessThanKey, index;
//     for (var i = 0; i < array.length; i++) {
//       if (array[i] < key){
//         lessThanKey = array[i];
//         index = i;
//       }
//     }
//   if (lessThanKey !== null){
//     console.log("FoundLess at index: ",index);
//     return index;
//   }
// };

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







// exports.subtractOne = function(a){return a-1;};
// exports.foo = function(){};
// exports.searchType = searchType;
