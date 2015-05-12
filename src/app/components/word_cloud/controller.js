(function () {

    'use strict';

    var header = angular.module('wordCloud', ['config']);

    header.controller('WordCloudController', ['$rootScope', '$scope', '$log', 'Navigation', function($rootScope, $scope, $log, Navigation) {

        $scope.$watch('data', function(newValue, oldValue) {
            if(newValue === oldValue && !$scope.data) {
                return;
            }
            reload($scope);
        }, true);

        function reload(scope) {
            scope.topics = $rootScope.data.topics;
        }

        $scope.selectWord = function(id) {
            Navigation.navigate(id);
        };

        $log.debug('[challenge] Word Cloud controller ran');

    }]);

}());