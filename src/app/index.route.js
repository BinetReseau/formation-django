(function() {
    'use strict';

    angular
        .module('formationDjango')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'app/main/layout.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
                .state('index.intro', {
                    url: 'intro',
                    templateUrl: 'app/main/pages/intro.html'
                })
                .state('index.premiers-pas', {
                    url: 'premiers-pas',
                    templateUrl: 'app/main/pages/premiers-pas.html'
                })
                .state('index.api', {
                    url: 'api',
                    templateUrl: 'app/main/pages/api.html'
                })
        ;

        $urlRouterProvider.otherwise('/');
    }

})();
