angular.module('starter')
  .factory('Categories', function() {
    var categories = [{
      id: 1,
      name: 'Agriculture'
    }, {
      id: 2,
      name: 'Budget'
    }, {
      id: 3,
      name: 'Campaign Finance'
    }, {
      id: 4,
      name: 'Civil Rights'
    }, {
      id: 5,
      name: 'Defence'
    }, {
      id: 6,
      name: 'Education'
    }, {
      id: 7,
      name: 'Energy'
    }, {
      id: 8,
      name: 'Environment'
    }, {
      id: 9,
      name: 'Information Technology'
    }, {
      id: 10,
      name: 'Tax'
    }, {
      id: 11,
      name: 'Tourism'
    }, {
      id: 12,
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
