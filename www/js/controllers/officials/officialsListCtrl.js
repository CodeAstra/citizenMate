angular.module('starter')
  .controller('OfficialsListCtrl', function($scope, Officials) {
    var officialsList = this;
    officialsList.officials = Officials.all();
  });
