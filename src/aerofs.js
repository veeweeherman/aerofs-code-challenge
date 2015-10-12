// declare obj w 5 methods (what will invoke inside the for-loop)
var findClosestMatch = function(searchType, array, key){
  var arrayAscends, matchTypeKey, index;
    if (array[0] < array[array.length-1]) {arrayAscends = true;}
    else {arrayAscends = false;}

  var searchTypes = {};
  searchTypes.LessThan = function(){
    if (current < key){
      matchTypeKey = current;
      index = i;
    }
  };
  searchTypes.LessThanEquals = function(){
    if (current <= key){
      matchTypeKey = current;
      index = i;
    }
  };
  searchTypes.Equals = function(){ // does not return not found
    if (current === key){
      matchTypeKey = current;
      index = i;
    }
  };




  if (arrayAscends){
    for (var i = 0; i < array.length; i++) {
      var current = array[i];
      var endResult = searchTypes[searchType]();
    }

    return matchTypeKey+' '+index;
  }

};
console.log(findClosestMatch('LessThanEquals',[0,2,4,6,8],7));













  // } else {
  //   // if descends,
  //   for (var i = array[array.length-1]; i >= 0; i--) {
  //     // var crrent = array[i];
  //     seachTypes[searchType](array);
  //   }
  // }
    // LessThanEquals: function(array){
    //   if (array[i] <= key){
    //     matchTypeKey = array[i];
    //     index = i;
    //     // if (!arrayAscends) break;
    //   }
    // },
    // Equals: function(array){
    //   if (array[i] === key){
    //     matchTypeKey = array[i];
    //     index = i;
    //   }
    // },
    // GreaterThanEquals: function(array){
    //   if (array[i] >= key){
    //     matchTypeKey = array[i];
    //     index = i;
    //     // if (arrayAscends) break;
    //   }
    // },
    // GreaterThan: function(array){
    //   if (array[i] > key){
    //     matchTypeKey = array[i];
    //     index = i;
    //     // if (arrayAscends) break;
    //   }
    // },
