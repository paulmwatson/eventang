'use strict';

/* Controllers */

function EventListCtrl($scope, Event) {
  $scope.events = Event.query();

  var pusher = new Pusher('62877fc93f132dae8ec4');
  var channel = pusher.subscribe('events');
  channel.bind('create', function(data) {
    Event.query({}, function(data) {
      $scope.events = data;
    });
  });

  $scope.create = function() {
    var event = new Event({title: this.title});
    event.$create();
    $scope.events.unshift(event);
    this.title = '';
  };
}

function EventDetailCtrl($scope, $routeParams, Event) {
  $scope.event = Event.get({eventId: $routeParams.eventId});
}