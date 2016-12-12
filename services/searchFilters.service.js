(function () {
  'use strict';

  angular.module('nestoria').factory('searchFilters', searchFilters);

  function searchFilters() {
    var service = {
      data: {
        type: null,
        priceMin: null,
        priceMax: null,
        roomMin: null,
        roomMax: null,
        bedsMin: null,
        bedsMax: null,
        bathMin: null,
        bathMax: null,
        hasImg: null
      },
      clearAll: clearAll
    };

    function clearAll() {
      for (var param in service.data) {
        param = null;
      }
    }
    return service;
  }
})();
