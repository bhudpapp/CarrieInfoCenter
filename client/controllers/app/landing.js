angular.module('app').controller('app_landing', app_landing);
function app_landing($scope, app) {
    'use strict';
    app.init($scope);
    $scope.reset = function () {
        $scope.data = {};
    };
    $scope.scan = function () {
        cordova.plugins.barcodeScanner.scan(function (result) {
            setTimeout(function () {
                $scope.data.format = result.format;
                $scope.data.text = result.text;
                $scope.$digest();
            }, 0);
        }, function (error) {
        }, {
            'preferFrontCamera': false,
            'showFlipCameraButton': true,
            'showTorchButton': true,
            'orientation': 'landscape'
        });
    };
    $scope.search = function()
    {
        $scope.searchResultList = app.action('landing', 'search', this);
        console.log($scope.searchResultList);
        app.go('searchresult');
    };
}