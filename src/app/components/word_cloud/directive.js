(function () {
    'use strict';

    var wordCloud = angular.module('wordCloud');

    wordCloud.directive('cloud', ['CONFIG', '$templateCache', function (CONFIG, $templateCache) {
        return {
            restrict: 'E',
            replace: true,
            controller: 'WordCloudController',
            template: $templateCache.get(CONFIG.URL.TEMPLATE.WORD_CLOUD)
        };
    }]);

})();


