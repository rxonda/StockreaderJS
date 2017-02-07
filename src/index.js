/**
  xonda
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);



/*
((app, mappings) => {
  app.config(['$routeProvider', (routeProvider) => {
    _.each(mappings, (obj, key) => {
      routeProvider.when('/' + obj.endpoint, {
          templateUrl: './views/' + obj.templateUrl,
          controller: key
      });
    });
    routeProvider.otherwise({
        redirectTo: '/'
    });
  }]);

  _.each(mappings, (obj, key) => {
    app.controller(key, ['$scope', '$http', '$location', function(scope, http, location){
      var path = location.hash().replace('/','');
      http.get('api/nonblocking/'+path).then(
        (response) => scope.movimentacao = response.data,
        (error) => console.log('Something went wrong',error)
    );
    }]);
  });
})(angular.module('stockReaderApp',['ngRoute']), urlMappings);
*/
