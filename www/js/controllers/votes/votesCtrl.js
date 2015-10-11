angular.module('starter')
  .controller('VotesCtrl', function(Votes) {
    var votes = this;
    votes.votes = Votes.all();
  });
