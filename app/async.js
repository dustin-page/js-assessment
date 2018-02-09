exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function (value) {
    var promise = new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(value);
      }, 250);
    });

    return promise;
  },

  manipulateRemoteData: function (url) {
    var promise = jQuery.get(url).then(
      function (data) {

        var people = data.people;

        var sortedArray = people.sort(function (a, b) {
          var nameA = a.name.toUpperCase(); // ignore upper and lowercase
          var nameB = b.name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          // names must be equal
          return 0;
        });

        var names = sortedArray.map(function (value, index, array) {
          return value.name;
        });
        return names;
      });



    console.log(promise);
    return promise;

  }
};
