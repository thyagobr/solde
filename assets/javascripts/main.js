angular.module("solde", ['ui.router', 'ngAnimate'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('quemsomos', {
        url: '/quemsomos',
      templateUrl: "partials/about.html"
      })
      .state('quefazemos', {
        url: '/quefazemos',
      templateUrl: "partials/about.html"
      });
  })
  .controller('test', ["$scope", function ($scope) {
  $scope.list = ['thyago', 'rocks', 'dadocks'];
}]);
