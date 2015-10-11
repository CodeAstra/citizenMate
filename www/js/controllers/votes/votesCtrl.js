angular.module('starter')
  .controller('VotesCtrl', function(Votes, Officials, Categories, CurrentUser) {
    var votes = this;
    votes.votes = Votes.all();

    votes.author = function(vote) {
      return Officials.get(vote.authorId);
    };

    votes.category = function(vote) {
      return Categories.get(vote.categoryId);
    };

    votes.upVoted = function(vote){
      return CurrentUser.upVoted(vote);
    };

    votes.upVote = function(vote) {
      return CurrentUser.upVote(vote);
    };

    votes.downVoted = function(vote){
      return CurrentUser.downVoted(vote);
    };

    votes.downVote = function(vote) {
      return CurrentUser.downVote(vote);
    };

    votes.votedFor = function(vote) {
      return CurrentUser.votedFor(vote);
    };
  });
