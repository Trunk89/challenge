(function () {

    'use strict';

    var details = angular.module('details', ['common', 'config', 'formatter']);

    details.controller('DetailsController', ['$rootScope', '$scope', '$log', '$routeParams', function($rootScope, $scope, $log, $routeParams) {


        $log.debug('[challenge] Details '+ $routeParams.id +' controller ran');

    }]);

}());