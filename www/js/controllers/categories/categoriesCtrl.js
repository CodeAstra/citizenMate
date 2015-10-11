angular.module('starter')
  .controller('CategoriesCtrl', function(Categories) {
    var categories = this;
    categories.categories = Categories.all();
  });
