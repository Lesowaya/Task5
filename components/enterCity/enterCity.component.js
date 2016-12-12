(function() {
  'use strict';
  angular.module('nestoria').component('enterCity', {
    templateUrl: 'components/enterCity/enterCity.tpl.html',
    controller: enterCityController
  });

  enterCityController.$inject = ['enterCity', 'favorites'];

  function enterCityController(enterCity, favorites) {
    var ctrl = this;
    ctrl.enterCity =enterCity;
    ctrl.favorites = favorites;
    enterCity.loadFavorite();

  }
})();
