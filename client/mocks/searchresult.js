'use strict';
window.mocks = window.mocks || {};
window.mocks.searchresult = window.mocks.searchresult || {};
window.mocks.searchresult.listItems_searchResultClick = function ($scope, params, app) {
    app.go('shipmentdetail');
};