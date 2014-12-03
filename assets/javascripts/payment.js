var app = angular.module("payment", []);

app.controller('listController', ['$scope', '$http', function($scope, $http) {
  $http.get("http://0.0.0.0:3000/obligations.json").success(function(data) {
    $scope.list = data;
  });

  $scope.cadastrar = function() {
    var obligation = {company: $scope.pay.fornecedor, value: $scope.pay.valor, due_date: $scope.pay.vencimento};
    $scope.list.push(obligation);
    console.log($scope.list);
    $http.post("http://0.0.0.0:3000/obligations", obligation).success(function(data) {
      console.log("Posted:");
      console.log(data);
    });
  };
}]);
