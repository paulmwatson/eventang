'use strict';

/* Controllers */

function EventListCtrl($scope, Event, User) {
  $scope.events = Event.query();
  $scope.user = User.get({userId: 'me'}, function success(data) {
    if (data.name == 'Agent Prism') {
      var name_new = prompt('Name yourself:');
      if (name_new) {
        $scope.user.name = name_new;
        $scope.user.id = 'me';
        $scope.user.$save();
      }
    }
  });

  var pusher = new Pusher('62877fc93f132dae8ec4');
  var channel = pusher.subscribe('events');
  channel.bind('create', function(data) {
    $scope.$apply(function () {
      $scope.events.unshift(angular.fromJson(data.message));
    });
  });

  $scope.create = function() {
    var event = new Event({title: this.title});
    event.$create();
    this.title = '';
  };
}

function EventDetailCtrl($scope, $routeParams, Event, User, Message) {
  $scope.joined = false;
  $scope.user = null;
  $scope.event = null;
  $scope.messages = Message.query({eventId: $routeParams.eventId});

  User.get({userId: 'me'}, function success(user) {
    Event.get({eventId: $routeParams.eventId}, function success(event) {
      $scope.event = event;
      $scope.event.users.forEach(function(i, key) {
        if (i.id == user.id) {
          $scope.joined = true;
          return;
        }
      });
    });
  });

  var pusher = new Pusher('62877fc93f132dae8ec4');
  var channel = pusher.subscribe('messages');
  channel.bind('create', function(data) {
    $scope.$apply(function () {
      $scope.messages.unshift(angular.fromJson(data.message));
    });
  });
  
  $scope.join = function() {
    $scope.event.$join();
    $scope.joined = true;
  }

  $scope.leave = function() {
    $scope.event.$leave();
    $scope.joined = false;
  }

  $scope.create_message = function() {
    var message = new Message({body: this.body});
    message.$create({eventId: $scope.event.id});
    this.body = '';
  }
}