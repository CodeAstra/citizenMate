angular.module('starter')
  .factory('Votes', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var votes = [{
      id: 1,
      categoryId: 2,
      question: 'Should India spend more on its space program?',
      authorId: 4,
      totalAgree: 9345,
      totalDisagree: 2345
    }, {
      id: 2,
      categoryId: 6,
      question: 'Should computer education be brought to computer education?',
      authorId: 2,
      totalAgree: 5648,
      totalDisagree: 4568
    }, {
      id: 3,
      categoryId: 4,
      question: 'Do you support same-sex marraige?',
      authorId: 1,
      totalAgree: 3654,
      totalDisagree: 9587
    }, {
      id: 4,
      categoryId: 2,
      question: 'Should all taxes be merged into a single tax?',
      authorId: 4,
      totalAgree: 7845,
      totalDisagree: 2345
    }, {
      id: 5,
      categoryId: 7,
      question: 'Do you favour increased development of nuclear power plants in India?',
      authorId: 5,
      totalAgree: 365,
      totalDisagree: 758
    }];

    return {
      all: function() {
        return votes;
      },
      get: function(voteId) {
        for (var i = 0; i < votes.length; i++) {
          if (votes[i].id === parseInt(voteId)) {
            return votes[i];
          }
        }
        return null;
      }
    };
  });
