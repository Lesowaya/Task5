(function () {
  'use strict';

  angular.module('nestoria').factory('sortDirection', sortDirection);

  function sortDirection() {
    var service = {
      data: {
        sort: null
      },
      clearAll: clearAll
    };


    function clearAll() {
      service.data = null;
    }

    return service;
  }
})();
