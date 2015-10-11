angular.module('starter')
  .controller('OfficialDetailCtrl', function($stateParams, Officials, CurrentUser) {
    var officialDetail = this;
    officialDetail.official = Officials.get($stateParams.officialId);

    officialDetail.toggleFollowOfficial = function(official) {
      return CurrentUser.toggleFollowOfficial(official);
    };

    officialDetail.followedOfficial = function(official) {
      return CurrentUser.followedOfficial(official);
    }
  });
