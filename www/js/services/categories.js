angular.module('starter')
  .factory('Categories', function() {
    var categories = [{
      id: 0,
      name: 'Budget'
    }, {
      id: 1,
      name: 'Agriculture'
    }, {
      id: 2,
      name: 'Campaign Finance'
    }, {
      id: 3,
      name: 'Civil Rights'
    }, {
      id: 4,
      name: 'Defence'
    }, {
      id: 5,
      name: 'Education'
    }, {
      id: 6,
      name: 'Environment'
    }, {
      id: 7,
      name: 'Education'
    }, {
      id: 8,
      name: 'Information Technology'
    }, {
      id: 9,
      name: 'Tax'
    }, {
      id: 10,
      name: 'Tourism'
    }, {
      id: 11,
      name: 'Transportation'
    }];

    return {
      all: function() {
        return categories;
      },
      get: function(categoryId) {
        for (var i = 0; i < categories.length; i++) {
          if (categories[i].id === parseInt(categoryId)) {
            return categories[i];
          }
        }
        return null;
      }
    };
  });
