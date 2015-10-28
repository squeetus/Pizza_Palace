'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
var myApp = angular.module('clientApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/pizza', {
        templateUrl: 'views/pizza.html',
        controller: 'PizzaCtrl',
        controllerAs: 'pizza'
      })
      // .when('/error', {
      //   templateUrl: ''
      // })
      .otherwise({
        redirectTo: '/'
      });
  });

  // Back-end Factory
  myApp.factory('ApiFactory', ['$http',
    function ($http) {
        return {
          test: function(id) {
            return $http.get('/pizza/' + id);
          },
          getUsers: function (rowcount) {
            var promise = $http.get('api/Users/' + rowcount).then(function(response) {
              return response.data;
            }, function (error) {
            //error
            })
            return promise;
          }
        }
      }
    ]);
