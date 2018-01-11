angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.blank', {
        views: {
            app: {
                controller: 'app_blank',
                templateProvider: function (app) {
                    return app.templateProvider('app.blank');
                }
            }
        }
    }).state('app.menu', {
        views: {
            app: {
                controller: 'app_menu',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu');
                }
            }
        }
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.landing', {
        views: {
            app: {
                controller: 'app_landing',
                templateProvider: function (app) {
                    return app.templateProvider('app.landing');
                }
            }
        }
    }).state('app.searchresult', {
        views: {
            app: {
                controller: 'app_searchresult',
                templateProvider: function (app) {
                    return app.templateProvider('app.searchresult');
                }
            }
        }
    }).state('app.shipmentdetail', {
        views: {
            app: {
                controller: 'app_shipmentdetail',
                templateProvider: function (app) {
                    return app.templateProvider('app.shipmentdetail');
                }
            }
        }
    }).state('app.shipmentdetail2', {
        views: {
            app: {
                controller: 'app_shipmentdetail2',
                templateProvider: function (app) {
                    return app.templateProvider('app.shipmentdetail2');
                }
            }
        }
    });
});