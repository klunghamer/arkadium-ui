(function() {
  angular
    .module('MovieApp', ['ui.router'])
    .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function MainRouter($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
    .state('quiz', {
      url: '/',
      templateUrl: '_quiz.html',
    })
    .state('results', {
      url: '/results',
      templateUrl: '_results.html',
    })


    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    }); //locationProvider

  } //MainRouter closure
})()
