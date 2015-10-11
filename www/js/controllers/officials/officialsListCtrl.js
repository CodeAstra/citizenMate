angular.module('starter')
  .controller('OfficialsListCtrl', function(Officials) {
    var officialsList = this;
    officialsList.officials = Officials.all();
  });
