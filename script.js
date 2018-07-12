(function (angular) {
    'use strict';
    var angularmodulename = angular.module('angularmodulename',
        ['ngAnimate', 'ngRoute', 'ngMaterial', 'ngMessages','angularGrid']);



    angularmodulename.config(function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');

        $routeProvider

            .when('/', {
                templateUrl: 'pages/section.html',
                //controller: 'mainController', // defined in index.html
                titlecontroller: "All Notes",
                resolve: {
                    delay: function ($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 500);
                        return delay.promise;
                    }
                }
            })

            .when('/notes', {
                templateUrl: 'pages/notes.html',
                controller: 'NotesController',
                titlecontroller: "Notes",
                resolve: {
                    delay: function ($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 500);
                        return delay.promise;
                    }
                }
            })

            .when('/slike', {
                templateUrl: 'pages/images.html',
                controller: 'ImagesController',
                titlecontroller: "Images",
                resolve: {
                    delay: function ($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 500);
                        return delay.promise;
                    }
                }
            })

            .when('/links', {
                templateUrl: 'pages/links.html',
                controller: 'LinksController',
                titlecontroller: "Links",
                resolve: {
                    delay: function ($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 500);
                        return delay.promise;
                    }
                }
            })

            .when('/trash', {
                templateUrl: 'pages/trash.html',
                controller: 'TrashController',
                titlecontroller: "Trash",
                resolve: {
                    delay: function ($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 1000);
                        return delay.promise;
                    }
                }
            })

        // configure html5 to get links working on jsfiddle
        $locationProvider.html5Mode(true);
    });


})(window.angular);