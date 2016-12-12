(function() {
  'use strict';


  angular.module('nestoria').factory('language', language);

  language.$inject = [ 'en', 'ru', 'fr'];

  function language ( en, ru, fr ) {
    var active = 'ru';
    var languges = {
      'en': en,
      'ru': ru,
      'fr': fr
    };
    var service = {
      setActive: setActive,
      getActive: getActive,
      getDictionary: getDictionary
    };


    function getActive() {
      return active;
    }

    function setActive( language) {
        active = language;
    }

    function getDictionary(key) {
      return languges[active][key];
    }
    return service;
  }

})();
