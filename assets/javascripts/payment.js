var app = angular.module("payment", []);

app.controller('listController', ['$scope', '$http', function($scope, $http) {
  $scope.list = [];

  $scope.cadastrar = function() {
    $scope.list.push({fornecedor: $scope.pay.fornecedor, value: $scope.pay.value, due_date: $scope.pay.vencimento});
    console.log($scope.list);
    $http.get("http://0.0.0.0:3000/obligations/1.json")
  .success(function(data) {
    console.log(data);
  });
  };
}]);
