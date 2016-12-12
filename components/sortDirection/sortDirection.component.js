(function() {
  'use strict';
  angular.module('nestoria').component('sortDirection', {
    templateUrl: 'components/sortDirection/sortDirection.tpl.html',
    controller: sortDirectionController
  });

  sortDirectionController.$inject = ['sortDirection'];

  function sortDirectionController(sortDirection) {
    var ctrl = this;
    ctrl.isOpened = false;
    ctrl.sortDirection =sortDirection;
  }
})();
