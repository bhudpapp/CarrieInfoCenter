angular.module('app').controller('app_genericinformation', app_genericinformation);
function app_genericinformation($scope, app) {
    'use strict';
    app.init($scope);
    
    var isGenericInformation = false;
    
    $scope.back = function() {
        page.history(-1);
    };
}