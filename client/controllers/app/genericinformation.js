angular.module('app').controller('app_genericinformation', app_genericinformation);
function app_genericinformation($scope, app) {
    'use strict';
    app.init($scope);
    
    app.data.isGenericInformation = true;
    
    app.data.pageIndex = 0;
    app.data.pageCount = 2;
    
    $scope.back = function() {
        page.history(-1);
    };
    
    $scope.changeScreen = function() {
        app.data.isGenericInformation = !app.data.isGenericInformation;
    };
    
    $scope.increasePageIndex = function() {
        app.data.increasePageIndex = app.data.increasePageIndex + 1;
    };
    
    $scope.decreasePageIndex = function() {
        app.data.increasePageIndex = app.data.increasePageIndex - 1;
    };
}