/**
  xonda
*/
var stockReaderApp=angular.module('stockReaderApp', ['ngRoute']);

stockReaderApp.config(function($routeProvider){
   $routeProvider.
       when('/', {
           templateUrl: '../views/table-movimento.html',
           controller: 'stockReaderController'
       }).
       when('/fechamentoMaximo', {
           templateUrl: '../views/table-movimento.html',
           controller: 'fechamentoMaximoController'
       }).
       when('/fechamentoMinimo', {
           templateUrl: '../views/table-movimento.html',
           controller: 'fechamentoMinimoController'
       }).
       when('/retornoMaximo', {
           templateUrl: '../views/table-movimento.html',
           controller: 'retornoMaximoController'
       }).
       when('/retornoMinimo', {
           templateUrl: '../views/table-movimento.html',
           controller: 'retornoMinimoController'
       }).
       when('/volumeMedio', {
           templateUrl: '../views/table-volume.html',
           controller: 'volumeMedioController'
       }).
       otherwise({
           redirectTo: '/'
       });
});

stockReaderApp.controller('stockReaderController',['$scope', '$http', function(scope, http){
    http.get('http://localhost:8080/nonblocking').success(function(data){
        scope.movimentacao = data;
    });
}]);

stockReaderApp.controller('fechamentoMaximoController',['$scope', '$http', function(scope, http) {
    http.get('/nonblocking/fechamentoMaximo').success(function(data){
        scope.movimentacao = data;
    });
}]);

stockReaderApp.controller('fechamentoMinimoController',['$scope', '$http', function(scope, http) {
    http.get('/nonblocking/fechamentoMinimo').success(function(data){
        scope.movimentacao = data;
    });
}]);

stockReaderApp.controller('retornoMaximoController',['$scope', '$http', function(scope, http) {
    http.get('/nonblocking/retornoMaximo').success(function(data){
        scope.movimentacao = data;
    });
}]);

stockReaderApp.controller('retornoMinimoController',['$scope', '$http', function(scope, http) {
    http.get('/nonblocking/retornoMinimo').success(function(data){
        scope.movimentacao = data;
    });
}]);

stockReaderApp.controller('volumeMedioController',['$scope', '$http', function(scope, http) {
    http.get('/nonblocking/volumeMedio').success(function(data){
        scope.volumes = data;
    });
}]);
