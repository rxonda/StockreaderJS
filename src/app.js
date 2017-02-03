/**
  xonda
*/
(function(app, mappings){
  app.config(['$routeProvider', function(routeProvider){
    _.each(mappings, function(obj, key){
      routeProvider.when('/' + obj.endpoint, {
          templateUrl: './views/' + obj.templateUrl,
          controller: key
      });
    });
    routeProvider.otherwise({
        redirectTo: '/'
    });
  }]);

  _.each(mappings, function(obj, key){
    app.controller(key, ['$scope', '$http', '$location', function(scope, http, location){
      var path = location.hash().replace('/','');
      http.get('api/nonblocking/'+path).then(function(response){
          scope.movimentacao = response.data;
      }, function(error){
        console.log('Something went wrong',error);
      });
    }]);
  });
})(angular.module('stockReaderApp',['ngRoute']), urlMappings);
