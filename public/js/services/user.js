'use strict';

/* Services */
app.services.
    factory('User', function($resource) {
      return $resource('/users/:userId.json', {userId: '@id'}, {
        save: {method: 'PUT'}
      });
    });