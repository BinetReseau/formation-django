(function() {
    'use strict';

    angular
        .module('formationDjango')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($location, $state) {
        var vm = this;

        vm.goTo = function(state, loc) {
            if ($state.current.name != $state.get('index.' + state).name) {
                $state.go('index.' + state).then(function() {
                    $location.hash(loc);
                });
            } else {
                $location.hash(loc);
            }
        };
    }
})();
