(function (angular) {
    'use strict';
    var angularmodulename = angular.module('angularmodulename', ['ngAnimate', 'ngRoute', 'ngMaterial', 'ngMessages','angularGrid']);



    angularmodulename.config(function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');

        $routeProvider

            .when('/', {
                templateUrl: 'pages/section.php',
                //controller: 'mainController', // defined in index.php
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
                templateUrl: 'pages/notes.php',
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
                templateUrl: 'pages/images.php',
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
                templateUrl: 'pages/links.php',
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
                templateUrl: 'pages/trash.php',
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