(function () {

    'use strict';

    var details = angular.module('details', ['common', 'config', 'formatter']);

    details.controller('DetailsController', ['$rootScope', '$scope', '$log', '$routeParams', 'Word', function($rootScope, $scope, $log, $routeParams, Word) {

        $scope.word = Word.create($routeParams.id);

        $log.debug('[challenge] Details '+ $routeParams.id +' controller ran');

    }]);

}());