var app = angular.module("payment", []);

app.controller('paymentsController', ['$scope', '$http','$filter', function($scope, $http, $filter) {
  // Creates payment object
  $scope.pay = new Object();
  $scope.pay.date = $filter('date')(new Date(), 'dd/MM/yyyy');

  // Generates numer_of_payments select
  $scope.pay.list_number_of_payments = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  $scope.pay.number_of_payments = 1;

  // Fetches current obligations on server
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
