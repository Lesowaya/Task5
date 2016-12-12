(function () {
  'use strict';

  angular.module('nestoria').constant('countries', [
    {
      capital:'Brasilia',
      text: 'Brazil',
      country: 'BR',
      api: 'http://api.nestoria.com.br/api'
    },
    {
      capital:'Paris',
      text: 'France',
      country: 'FR',
      api: 'http://api.nestoria.fr/api'
    },
    {
      capital:'Berlin',
      text: 'Germany',
      country: 'DE',
      api: 'http://api.nestoria.de/api'
    },
    {
      capital:'New Delhi',
      text: 'India',
      country: 'IN',
      api: 'http://api.nestoria.in/api'
    },
    {
      capital:'Mexico',
      text: 'Mexico',
      country: 'MX',
      api: 'http://api.nestoria.it/api'
    },
    {
      capital:'Lima',
      text: 'Peru',
      country: 'PE',
      api: 'http://api.nestoria.mx/api'
    },
    {
      capital:'Madrid',
      text: 'Spain',
      country: 'ES',
      api: 'http://api.nestoria.es/api'
    },
    {
      capital:'London',
      text: 'UnitedKingdom',
      country: 'GB',
      api: 'http://api.nestoria.co.uk/api'
    }
  ])
})();
