exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function (fn, arr) {

    //Example 1: apply() method
    //return fn.apply(null, arr);
    //Example 2: Spread syntax
    return fn(...arr);
  },

  speak: function (fn, obj) {
    this.name = obj.name;
    this.greeting = obj.greeting;
    return fn.call(this);
  },

  functionFunction: function (str) {
    return function insideFunc(str2) {
      return str + ', ' + str2;
    };
  },

  makeClosures: function (arr, fn) {

    var functionsArr = [];

    var closureFn = function (value) {
      return function () {
        return fn(value)
      };
    };

    arr.forEach(function (value, index, array) {
      functionsArr.push(closureFn(value));
    });

    return functionsArr;

  },

  partial: function (fn, str1, str2) {
    //Use bind method to create a partially applied function
    return fn.bind(null, str1, str2);
  },

  useArguments: function () {
    let total = 0;
    //Note: the arguments object is NOT an Array. It is similar to an Array, but does not have any Array properties except length.
    //ES2015: Convert arguments to a real array
    const args = Array.from(arguments);

    for (let index = 0; index < args.length; index++) {
      total += args[index];
    }
    return total;
  },

  callIt: function (fn) {
    const args = Array.from(arguments);
    var argList = args.slice(1);
    return fn.apply(null, argList);
  },

  partialUsingArguments: function (fn) {

  },

  curryIt: function (fn) {

  }
};
