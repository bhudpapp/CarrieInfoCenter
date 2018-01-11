angular.module('app').controller('app_shipmentdetail2', app_shipmentdetail2);
function app_shipmentdetail2($scope, app, $ionicScrollDelegate) {
    'use strict';
    app.init($scope, function (data) {
        if (!$scope.productItems) {
            $scope.productItems = $scope.data.results;
        } else {
            $scope.productItems = $scope.productItems.concat($scope.data.results);
            $scope.data.results = $scope.productItems;
        }
    });
    var isFirstTime = false;
    $scope.checkScroll = function () {
        var currentTop = $ionicScrollDelegate.$getByHandle('scroller').getScrollPosition().top;
        var maxTop = $ionicScrollDelegate.$getByHandle('scroller').getScrollView().__maxScrollTop;
        if (currentTop >= maxTop) {
            if (!isFirstTime) {
                app.call('searchdata.nextpage');
                isFirstTime = true;
            }
        } else {
            isFirstTime = false;
        }
    };
}