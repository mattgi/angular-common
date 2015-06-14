angular.module('app.modules.modal.directives')
  .directive('modalAlert', [
    function() {
      return {
        restrict: 'A',
        scope: false,
        link: function (scope, element, attr) {
          var msg = attr.modalAlert || 'Alert!';
          element.bind('click', function () {
            bootbox.alert(msg);
          });
        }
      };
    }
  ]
);
