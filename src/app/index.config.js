(function() {
    'use strict';

    angular
        .module('formationDjango')
        .config(config);

    /** @ngInject */
    function config($logProvider) {
        // Enable log
        $logProvider.debugEnabled(true);
    }

})();
