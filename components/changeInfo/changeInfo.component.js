(function() {
  'use strict';
  angular.module('nestoria').component('changeInfo', {
    templateUrl: 'components/changeInfo/changeInfo.tpl.html',
    controller: changeInfoController
  });

  changeInfoController.$inject = ['enterCity', 'favorites'];

  function changeInfoController(enterCity, favorites) {
    var ctrl = this;
    ctrl.enterCity =enterCity;
    ctrl.activeFlat = enterCity.activeFlat;
    ctrl.favorites = favorites;

  }
})();
