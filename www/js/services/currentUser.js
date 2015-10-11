angular.module('starter')
  .factory('CurrentUser', function() {
    var user = {
      followingOfficials: [],
      followingCategories: [],
      upVotes: [],
      downVotes: []
    };



    function removeElementFromArray(array, ele) {
      var index = array.indexOf(ele);

      if (index != -1) {
        array.splice(index, 1)
      }
    };

    user.upVoted = function(vote){
      return user.upVotes.indexOf(vote.id) != -1
    };

    user.upVote = function(vote) {
      removeElementFromArray(user.downVotes, vote.id)
      if(user.upVoted(vote)) {
        removeElementFromArray(user.upVotes, vote.id)
      } else {
        user.upVotes.push(vote.id);
      }
    };

    user.downVoted = function(vote){
      return user.downVotes.indexOf(vote.id) != -1
    };

    user.downVote = function(vote) {
      removeElementFromArray(user.upVotes, vote.id)
      if(user.downVoted(vote)) {
        removeElementFromArray(user.downVotes, vote.id)
      } else {
        user.downVotes.push(vote.id);
      }
    };

    user.votedFor = function(vote) {
      return (user.upVoted(vote) || user.downVoted(vote));
    };

    return user;
  });
