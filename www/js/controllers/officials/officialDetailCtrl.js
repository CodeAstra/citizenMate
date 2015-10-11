angular.module('starter')
  .controller('OfficialDetailCtrl', function($stateParams, Officials) {
    var officialDetail = this;
    officialDetail.official = Officials.get($stateParams.officialId);
  });
