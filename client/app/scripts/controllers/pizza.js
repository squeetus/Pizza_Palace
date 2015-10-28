'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PizzaCtrl
 * @description
 * # PizzaCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PizzaCtrl', function ($scope, ApiFactory) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS'
    ];

    var handleSuccess = function(data, status) {
        $scope.stuff = data;
    };

    ApiFactory.test(4).success(handleSuccess);
    //ApiFactory.test(6).success(handleSuccess);

  });
