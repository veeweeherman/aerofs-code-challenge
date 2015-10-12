// exports.me = function(x,y){return x+y;};

// console.log(exports.me(3,4));
// var str = '(4>2)';
// var foo = eval(str);
// console.log(foo);

var array = 55;
var key = 77;
var searchTypes = {
  LessThan: 'array < key',
  LessThanEquals: 'array[i] <= key',
  Equals: 'array[i] === key',
  GreaterThanEquals: 'array[i] >= key',
  GreaterThan: 'array[i] >= key'
};
//
console.log(typeof JSON.parse(searchTypes.LessThan) );


console.log('array',array);
