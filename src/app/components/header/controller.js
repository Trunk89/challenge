(function () {

    'use strict';

    var header = angular.module('header', ['config']);

    header.controller('HeaderController', ['$rootScope', '$scope', '$log', function($rootScope, $scope, $log) {

        $scope.$watch('messages', function(newValue, oldValue) {
            if(newValue === oldValue && !$scope.messages) {
                return;
            }
            reload($scope);
        }, true);

        function reload(scope) {
            scope.messages = $rootScope.messages.header;
        }

        $log.debug('[challenge] Header controller ran');

    }]);

}());