exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function (str, amount) {
    var newArray;
    var joinArray;
    var splitString = str.split("");
    var counts = {};

    newArray = splitString.filter(function (value, index, array) {
      //Count the number of times a character appears
      counts[value] = (counts[value] + 1) || 1;

      if (counts[value] <= amount) {
        return true;
      } else {
        return false;
      }

    });

    joinArray = newArray.join("");

    return joinArray;

  },

  wordWrap: function (str, cols) {

  },

  reverseString: function (str) {
    //Example 1: Split string to array, reverse array, join string back together
    /*
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
    */

    //Example 2: Chain methods together
    /* */
    return str.split("").reverse().join("");

    //Example 3: Reverse a String With a Decrementing For Loop
    /*
    function reverseString(str) {
      var newString = "";
      for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
      }
      return newString;
    }
    return reverseString(str);
    */
    //Example 4: Reverse a String With Recursion - NOT EFFICIENT!
    //This solution is not the best one and will be really slow if the String is very long and the stack size is of major concern.
    /*
    function reverseString(str) {
      if (str === "")
        return "";
      else
        return reverseString(str.substr(1)) + str.charAt(0);
    }
     return reverseString(str);
     */

  }
};
