'use strict';

/* Services */
app.services.
    factory('Message', function($resource) {
      return $resource('/events/:eventId/messages.json', {eventId: '@id'},
        {
          create: {method: 'POST'},
          query: {method: 'GET', isArray: true}
        });
    });