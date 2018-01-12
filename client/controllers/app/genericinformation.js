angular.module('app').controller('app_genericinformation', app_genericinformation);
function app_genericinformation($scope, app) {
    'use strict';
    app.init($scope);
    
    app.data.isGenericInformation = false;
    
    $scope.back = function() {
        page.history(-1);
    };
}