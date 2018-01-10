'use strict';
window.mocks = window.mocks || {};
window.mocks.landing = window.mocks.landing || {};
window.mocks.landing.search = function ($scope, params, app) {
    app.go('app.SearchResult');
};