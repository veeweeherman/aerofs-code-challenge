exports.me = function(x,y){return x+y;};

// console.log(exports.me(3,4));
var baz = function(b){return b+'jjj'+3;}
// console.log(baz(88));


var goo = {goober: 3<4}
console.log(goo['goober']); //returns boolean
