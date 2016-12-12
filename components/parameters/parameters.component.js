(function() {
  'use strict';
  angular.module('nestoria').component('parameters', {
    templateUrl: 'components/parameters/parameters.tpl.html',
    controller: parametersController
  });

  parametersController.$inject = ['searchFilters'];

  function parametersController(searchFilters) {
    var ctrl = this;
    ctrl.isOpened = false;
    ctrl.searchFilters =searchFilters;
  }
})();
