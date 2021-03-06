(function () {
    'use strict';

    angular
        .module('boltApp')
        .controller('RedirectCtrl', function ($scope, $http, $stateParams, $auth) {
            $http.get('/api/auth/paypal-account/' + $stateParams.code)
                .success(function(response) {
                    console.log(response);

                    $auth.setToken(response.token);
                });
        });
})();

