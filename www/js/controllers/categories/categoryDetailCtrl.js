angular.module('starter')
  .controller('CategoryDetailCtrl', function($stateParams, Categories, CurrentUser) {
    var categoryDetail = this;
    categoryDetail.category = Categories.get($stateParams.categoryId);

    categoryDetail.toggleFollowCategory = function(category) {
      return CurrentUser.toggleFollowCategory(category);
    };

    categoryDetail.followedCategory = function(category) {
      return CurrentUser.followedCategory(category);
    };
  });
