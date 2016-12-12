(function () {
  'use strict';
  angular.module('nestoria')
    .filter('language', language);


  language.$inject = ['language'];

  function language(languageService) {
    findInDictionary.$stateful = true;
    return findInDictionary;

    function findInDictionary(input) {
      return languageService.getDictionary(input);

    }
  }
})();