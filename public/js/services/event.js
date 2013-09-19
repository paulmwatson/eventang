'use strict';

/* Services */
app.services.
    factory('Event', function($resource) {
      return $resource('/events/:eventId.json', {eventId: '@id'},
        {
          save: {method: 'PUT'},
          create: {method: 'POST'},
          query: {method: 'GET', isArray: true}
        });
    });