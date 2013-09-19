app.directive('identicon', function() {
  return {
    restrict: 'E,A',
    transclude: true,
    templateUrl: '/components/identicon/identicon.html',
    scope: {
      string: '@',
      size: '@'
    },
    link: function(scope, element, attrs) {
      if (typeof size == 'undefined') {
        scope.size = '10';
      }
    }
  };
});