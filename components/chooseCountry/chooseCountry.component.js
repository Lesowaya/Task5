(function() {
  'use strict';

  angular.module('nestoria').component('chooseCountry', {
    templateUrl: 'components/chooseCountry/chooseCountry.tpl.html',
    controller: chooseCountryController
  });

  chooseCountryController.$inject = ['enterCity'];

  function chooseCountryController(enterCity) {
    var ctrl = this;
    ctrl.enterCity = enterCity;
    ctrl.list = enterCity.countries;


    ctrl.changeActive = function ($index) {
      enterCity.activeCountry = $index;
    };


  }

})();
