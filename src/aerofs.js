// declare obj w 5 methods (what will invoke inside the for-loop)
  // var searchTypes = {
    var LessThan = function(current,key){
      if (current < key){
        matchTypeKey = current;
        index = catchIndex;
        console.log('inside less than func!',matchTypeKey,index)
      }
        return matchTypeKey+index;
    }
  // };
var findClosestMatch = function(searchType, array, key){
  var arrayAscends;
    if (array[0] < array[array.length-1]) {arrayAscends = true;}
    else {arrayAscends = false;}

  // console.log('array is acending:', arrayAscends);
  var matchTypeKey, index;
  if (arrayAscends){
    for (var i = 0; i < array.length; i++) {
      var current = array[i];
      catchIndex = i;
      return LessThan(current,key);
      // if (array[i] < key){
      //   matchTypeKey = array[i];
      //   index = i;
      // }

    }
  }
  console.log('matchtypekey and index',matchTypeKey,index);
  return matchTypeKey+' '+index;
};
console.log(findClosestMatch('LessThan',[0,2,4,6,8],5));













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
