angular.module('starter')
  .controller('VoteDetailCtrl', function($stateParams, Votes) {
    var voteDetail = this;
    voteDetail.vote = Votes.get($stateParams.voteId);
  });
