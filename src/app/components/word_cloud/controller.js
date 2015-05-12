(function () {

    'use strict';

    var header = angular.module('wordCloud', ['config']);

    header.controller('WordCloudController', ['$rootScope', '$scope', '$log', function($rootScope, $scope, $log) {

        $scope.$watch('data', function(newValue, oldValue) {
            if(newValue === oldValue && !$scope.data) {
                return;
            }
            reload($scope);
        }, true);

        function reload(scope) {
            scope.topics = $rootScope.data.topics;
        }

        $log.debug('[challenge] Word Cloud controller ran');

    }]);

}());