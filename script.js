(function (angular) {
    'use strict';
    var angularmodulename = angular.module('angularmodulename', ['ngAnimate', 'ngRoute', 'ngMaterial', 'ngMessages']);



    angularmodulename.config(function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');

        $routeProvider

            .when('/', {
                templateUrl: 'pages/section.php',
                //controller: 'mainController', // defined in index.php
                resolve: {
                    delay: function ($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 1000);
                        return delay.promise;
                    }
                }
            })

            .when('/notes', {
                templateUrl: 'pages/notes.php',
                controller: 'NotesController',
                resolve: {
                    delay: function ($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 1000);
                        return delay.promise;
                    }
                }
            })

            .when('/slike', {
                templateUrl: 'pages/images.php',
                controller: 'ImagesController',
                resolve: {
                    delay: function ($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 1000);
                        return delay.promise;
                    }
                }
            })

            .when('/links', {
                templateUrl: 'pages/links.php',
                controller: 'LinksController',
                resolve: {
                    delay: function ($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 1000);
                        return delay.promise;
                    }
                }
            })

            .when('/trash', {
                templateUrl: 'pages/trash.php',
                controller: 'TrashController',
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