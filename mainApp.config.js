(function() {
  'use strict';
  angular.module('nestoria').config(['$routeProvider',
    function ($routeProvider) {
      $routeProvider.
      when('/', {
        templateUrl: '/mainApp.html'
      }).
      when('/change', {
        templateUrl: '/components/changeInfo/changeInfo.html'
      }).
      otherwise({
        redirectTo: ''
      })
    }
  ]);

})();
