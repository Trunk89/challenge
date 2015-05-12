(function () {
    'use strict';

    var app = angular.module('common', ['angular.filter', 'config', 'ngStorage']);

    app.constant('CONFIG', {
        URL: {
            ROUTE: {
                MAIN: 'app/pages/main.html'
            },
            TEMPLATE: {
                HEADER: 'src/app/components/header/header.html',
                DETAILS: 'src/app/components/details/details.html',
                WORD_CLOUD: 'src/app/components/word_cloud/work_cloud.html'
            }
        }
    });

    app.config(['$logProvider', 'ENV_CONFIG', function($logProvider, ENV_CONFIG) {
        $logProvider.debugEnabled(ENV_CONFIG.DEBUG);
    }]);

})();