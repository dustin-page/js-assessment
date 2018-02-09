exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    // foreach solution
    /*
    var total=0;
    arr.forEach(function(item, index, arr) {
      total += item;
    });
    return total;
    */

    //Array reduce solution
    var total = arr.reduce(add, 0);

    function add(totalValue, currentValue){
      return totalValue + currentValue;
    };

    return total;
  },

  remove: function(arr, item) {
    return arr.filter(function(value, index, array) {
      return value !== item;
    });
  },

  removeWithoutCopy: function(arr, item) {
    //Use a for loop to loop backwards over array
    /*
    for (let i = arr.length-1; i >=0; i--) {
      if(arr[i] === item) {
        arr.splice(i,1); //if match remove this item
      }
    }
    return arr;
    */

    //Use a while loop
    var i = arr.length;
    while (i--) {
      if(arr[i] === item){
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    var newArr = arr1.concat(arr2);
    return newArr;
  },

  insert: function(arr, item, index) {
    arr.splice(2,0,item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;

    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (element === item) {
        ++count;
      }
    }
    return count;

  },

  duplicates: function(arr) {
    let result = [];
    arr.forEach(function(value, index, array) {
      // Find if there is a duplicate or not
      if(arr.indexOf(value, index+1) > -1) {
        // Find if the element is already in the result array or not
        if(result.indexOf(value) === -1) {
          result.push(value);
        }
      }
    });
    return result;
  },

  square: function(arr) {
    var results = arr.map((value, index, array) => {
      return Math.pow(value, 2);
    });
    return results;
  },

  findAllOccurrences: function(arr, target) {

  }
};
