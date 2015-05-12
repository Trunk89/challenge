(function () {

    'use strict';

    var details = angular.module('details', ['common', 'config', 'formatter']);

    details.controller('DetailsController', ['$scope', '$log', '$routeParams', 'Word', 'Messages', function($scope, $log, $routeParams, Word, Messages) {

        $scope.messages = Messages.get();
        $scope.word = Word.create($routeParams.id);

        $log.debug('[challenge] Details '+ $routeParams.id +' controller ran');

    }]);

}());