exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function (fn, obj) {
    // Example with the bind method
    /*
     var newContextFn = fn.bind(obj);
     return newContextFn();
     */

    //Better example with the call method
    return fn.call(obj);

  },

  alterObjects: function (constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function (obj) {
    var ret = [];

    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        ret.push(prop + ': ' + obj[prop]);
      }
    }

    return ret;
  }
};
