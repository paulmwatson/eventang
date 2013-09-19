app.directive('eventItem', function() {
  return {
    restrict: 'E,A',
    transclude: true,
    templateUrl: '/components/event-item/event-item.html',
    scope: {
      title: '@',
      id: '@',
      count: '@'
    },
    link: function(scope, element, attrs) {
    }
  };
});