(function () {
  'use strict';

  angular.module('nestoria').factory('enterCity', enterCity);

  enterCity.$inject = ['countries', 'searchFilters', 'sortDirection', '$sce', '$http', '$timeout', 'favorites'];

  function enterCity(countries, searchFilters, sortDirection, $sce, $http, $timeout, favorites) {
    var service = {
      activeCountry: 0,
      findCities: findCities,
      countries: countries,
      paginationActive: false,
      loadFavorite: loadFavorite,
      paginationInit: paginationInit,
      saveAsActive:saveAsActive,
      onError: onError,
      onSuccess: onSuccess,
      findFlats: findFlats,
      paginationDestroy: paginationDestroy,
      activeFlat:{},
      api: 'http://api.nestoria.com.br/api',
      activePage: 0,
      parametrsToSearch: {
        params: {
          place_name: '',
          encoding: 'json',
          pretty: 1,
          number_of_results: 4,
          page: 1,
          action: 'search_listings',
          listing_type: searchFilters.data.type,
          price_min: searchFilters.data.priceMin || 0,
          price_max: searchFilters.data.priceMax || 9999999,
          bedroom_min: searchFilters.data.roomMin || 0,
          bedroom_max: searchFilters.data.roomMax || 99,
          room_min: searchFilters.data.bedsMin || 0,
          room_max: searchFilters.data.bedsMax || 99,
          bathroom_min: searchFilters.data.bathMin || 0,
          bathroom_max: searchFilters.data.bathMax || 99,
          has_photo: searchFilters.data.hasImg ? 1 : 0,
          sort: sortDirection.data.sort
        }
      }
    };
    var favoriteActive = true;
    var element;

    return service;

    function findFlats(api, onSuccess) {
      favoriteActive = false;
      var url = $sce.trustAsResourceUrl(api);
      service.api = api;
      $http.jsonp(url, service.parametrsToSearch).then(onSuccess, service.onError);
    }

    function onSuccess(response) {
      response = response.data.response;
      service.pages = response.total_pages + 1;
      service.resultsNumber = response.total_results;
      service.flats = response.listings;
      service.activePage = response.page;
      service.flats.forEach(function (flat) {
        flat.title_short = flat.title.length > 35 ?
        flat.title.slice(0, 35).toLowerCase() + "..." : flat.title.toLowerCase();
      });
      service.paginationDestroy();
      if (service.pages > 1) {
        service.paginationInit();
      }
    }

    function onError(error) {
      alert('Sorry. Something went wrong');
    }


    function paginationInit() {
      element = $('#pagination-demo');
      element.twbsPagination({
        totalPages: service.pages,
        startPage: 1,
        visiblePages: 5,
        onPageClick: favoriteActive ? loadMoreFavorite : changePage
      });
    }

    function changePage(event, page) {
      service.parametrsToSearch.params.page = page;
      service.findFlats(service.api, successLoadMore);
    }

    function paginationDestroy() {
      if (element) {
        element.twbsPagination('destroy');
      }

    }

    function saveAsActive(flat) {
      service.activeFlat =flat;
    }

    function successLoadMore(response) {
      response = response.data.response;
      service.flats = response.listings;
      service.flats.forEach(function (flat) {
        flat.title_short = flat.title.length > 35 ?
        flat.title.slice(0, 35).toLowerCase() + "..." : flat.title.toLowerCase();
      });
    }

    function findCities(event) {
        var value = service.parametrsToSearch.params.place_name;
        if (value.length == 0) {
          service.citiesList =[];
          return;
        }
        if ((event.keyCode >36) && (event.keyCode < 41)) return;
        var autocompleteService = new google.maps.places.AutocompleteService();
        autocompleteService.getPlacePredictions({
          input: value,
          types: ['(cities)'],
          componentRestrictions: {
            country: countries[service.activeCountry].country
          }
        }, function (results, status){
          if ((status === google.maps.places.PlacesServiceStatus.OK) ||
            (status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS)){
            if (status === google.maps.places.PlacesServiceStatus.OK){

              $timeout(function () { service.citiesList =results;});
            }
          } else {
            alert("Sorry. We couldn't connect to server. Please try later or check your request");
          }
        });

    }

    function loadFavorite() {
      var favoritesItems = favorites.init();
      favoriteActive = true;
      service.flats = favoritesItems.slice(0, 4);
      service.pages = Math.ceil(favoritesItems.length / 4);
      service.paginationDestroy();
      if (service.pages > 1) {
        service.paginationInit();
      }
    }

    function loadMoreFavorite(event, page) {
      service.flats = favorites.get(page);
      service.flats.forEach(function (flat) {
        flat.title_short = flat.title.length > 35 ?
        flat.title.slice(0, 35).toLowerCase() + "..." : flat.title.toLowerCase();
      });
    }


  }
})();
