angular.module("solde", ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('quemsomos', {
        url: '/quemsomos',
      templateUrl: "partials/about.html"
      });
  })
  .controller('test', ["$scope", function ($scope) {
  $scope.list = ['thyago', 'rocks', 'dadocks'];
}]);
