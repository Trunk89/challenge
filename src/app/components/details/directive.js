(function () {
    'use strict';

    var details = angular.module('details');

    details.directive('wordDetails', ['CONFIG', '$templateCache', function (CONFIG, $templateCache) {
        return {
            restrict: 'E',
            replace: true,
            template: $templateCache.get(CONFIG.URL.TEMPLATE.DETAILS)
        };
    }]);

})();
