(function () {

    'use strict';

    var header = angular.module('header', ['config']);

    header.controller('HeaderController', ['$rootScope', '$scope', '$log', 'Messages', function($rootScope, $scope, $log, Messages) {

        $scope.$watch('messages', function(newValue, oldValue) {
            if(newValue === oldValue && !$scope.messages) {
                return;
            }
            reload($scope);
        }, true);

        function reload(scope) {
            scope.messages = Messages.get();
        }

        $log.debug('[challenge] Header controller ran');

    }]);

}());