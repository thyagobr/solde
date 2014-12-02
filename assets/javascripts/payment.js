var app = angular.module("payment", []);

app.controller('listController', ['$scope', function($scope) {
  $scope.list = [];

  $scope.cadastrar = function() {
    $scope.list.push($scope.pay);
    console.log($scope.list);
  };
}]);
