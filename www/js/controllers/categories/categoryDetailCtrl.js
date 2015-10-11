angular.module('starter')
  .controller('CategoryDetailCtrl', function($stateParams, Categories) {
    var categoryDetail = this;
    categoryDetail.category = Categories.get($stateParams.categoryId);
  });
