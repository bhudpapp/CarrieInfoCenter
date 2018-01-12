angular.module('app').controller('app_genericinformation', app_genericinformation);
function app_genericinformation($scope, app) {
    'use strict';
    app.init($scope);
    
    app.data.isGenericInformation = true;
    
    $scope.back = function() {
        page.history(-1);
    };
    
    $scope.changeScreen = function() {
        app.data.isGenericInformation = !app.data.isGenericInformation;
    };
}