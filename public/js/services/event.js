'use strict';

/* Services */
app.services.
    factory('Event', function($resource) {
      return $resource('/events/:eventId/:docCtrl.json', {eventId: '@id'},
        {
          save: {method: 'PUT'},
          create: {method: 'POST'},
          query: {method: 'GET', isArray: true},
          join: {method: 'PUT', params: {docCtrl: 'join'}},
          leave: {method: 'PUT', params: {docCtrl: 'leave'}}
        });
    });