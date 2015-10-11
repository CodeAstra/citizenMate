angular.module('starter')
  .controller('VotesCtrl', function(Votes, Officials, Categories) {
    var votes = this;
    votes.votes = Votes.all();

    votes.author = function(vote) {
      return Officials.get(vote.authorId);
    };

    votes.category = function(vote) {
      return Categories.get(vote.categoryId);
    }
  });
