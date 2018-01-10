angular.module('app').controller('app_searchresult', app_searchresult);
function app_searchresult($scope, app) {
    'use strict';
    app.init($scope);
};
$scope.gohome = function()
{
    app.go('app.landing');
    data.trackingNumber = "";
}