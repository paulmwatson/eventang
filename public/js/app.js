'use strict';

/* App Module */

var app = angular.module('eventang', ['eventangServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/events', {templateUrl: 'partials/event-list.html',   controller: EventListCtrl}).
      when('/events/:eventId', {templateUrl: 'partials/event-detail.html', controller: EventDetailCtrl}).
      otherwise({redirectTo: '/events'});
}]);