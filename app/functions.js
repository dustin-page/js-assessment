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

  },

  useArguments: function () {

  },

  callIt: function (fn) {

  },

  partialUsingArguments: function (fn) {

  },

  curryIt: function (fn) {

  }
};
