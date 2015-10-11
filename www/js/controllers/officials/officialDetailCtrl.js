angular.module('starter')
  .controller('OfficialDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.officialId);
  });
