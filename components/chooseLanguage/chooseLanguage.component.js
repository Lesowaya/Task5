(function() {
  'use strict';

  angular.module('nestoria').component('chooseLanguage', {
    templateUrl: 'components/chooseLanguage/chooseLanguage.tpl.html',
    controller: chooseLanguageController
  });

  chooseLanguageController.$inject = ['language'];

  function chooseLanguageController(language) {
    var ctrl = this;
    ctrl.list = ['en', 'ru', 'fr'];
    ctrl.language = language;
  }
})();
