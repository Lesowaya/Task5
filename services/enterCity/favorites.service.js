(function () {
  'use strict';

  angular.module('nestoria').factory('favorites', favorites);


  function favorites() {
    var service = {
      changeFavoriteStatus: changeFavoriteStatus,
      get: get,
      init: init,
      checkContains: checkContains
    };
    var favoriteItems = [];
    var pages = 0;

    return service;

    function init() {
      return load();
    }

    function load() {
      var str = localStorage.getItem('favoriteItems');
      if (str) {
        favoriteItems = JSON.parse(str) || [];
      }
      return favoriteItems;
    }

    function addFavorite(newObj) {
      favoriteItems.push(newObj);
      saveFavorite();
    }

    function saveFavorite() {
      localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
    }

    function deleteFavorite(position) {
      if (favoriteItems[position]) {
        localStorage.removeItem('favoriteItems');
        favoriteItems.splice(position, 1);
        saveFavorite();
      }
    }

    function get(page) {
      return favoriteItems.slice(page * 4 - 4, page * 4);
    }

    function changeFavoriteStatus(flat) {
      var position = favoriteItems.indexOf(flat);
      if (position != -1) {
        deleteFavorite(position);
      } else {
        addFavorite(flat);
      }
    }

    function checkContains(flat) {
      var position = favoriteItems.indexOf(flat);
      return position != -1;
    }

  }
})();
