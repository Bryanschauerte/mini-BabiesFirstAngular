//getting the already created 'friendsList'
var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope){

$scope.friends = ['Billy', 'Ryan', 'Sarah', 'Jason', 'DaHee', 'Jon'];

$scope.addFriend= function(){
  //newFriend comes from the ng-model
  $scope.friends.push($scope.newFriend);
  $scope.newFriend = "";
};

});
