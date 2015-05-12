(function () {

    'use strict';

    var details = angular.module('details', ['common', 'config', 'formatter']);

    details.controller('DetailsController', ['$rootScope', '$scope', '$log', '$routeParams', 'Word', 'Messages', function($rootScope, $scope, $log, $routeParams, Word, Messages) {

        var topics,
            index = $routeParams.id;

        $scope.messages = Messages.get();

        if ($rootScope.data && $rootScope.data.topics) {
            topics = $rootScope.data.topics;

            //word label or id could also be used for route parameter to create the word object, but it would require more logic
            //getting it by array index is much smoother in the current implementation
            $scope.word = Word.create(topics[index]);
        }

        $log.debug('[challenge] Details '+ index +' controller ran');

    }]);

}());