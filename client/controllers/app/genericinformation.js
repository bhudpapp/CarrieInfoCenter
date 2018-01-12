angular.module('app').controller('app_genericinformation', app_genericinformation);
function app_genericinformation($scope, app) {
    'use strict';
    app.init($scope);
    
    app.data.isGenericInformation = true;
    
    app.data.pageIndex = 1;
    app.data.pageCount = 2;
    
    $scope.back = function() {
        page.history(-1);
    };
    
    $scope.increasePageIndex = function() {
        app.data.pageIndex = app.data.pageIndex + 1;
    };
    
    $scope.decreasePageIndex = function() {
        app.data.pageIndex = app.data.pageIndex - 1;
    };
}