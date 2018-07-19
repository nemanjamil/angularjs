(function (angular) {
    'use strict';
    var angularmodulename = angular.module('angularmodulename',
        ['ngAnimate', 'ngCookies', 'ngRoute', 'ngMaterial', 'ngMessages', 'angularGrid']);


    angularmodulename.config(function ($routeProvider, $locationProvider, $httpProvider) {
        $locationProvider.hashPrefix('');

        $httpProvider.interceptors.push('authHttpResponseInterceptor');
        //$httpProvider.defaults.withCredentials = true;

        $routeProvider
            .when('/', {
                templateUrl: 'pages/section.html',
                controller: 'mainController', // also can be defined in index.html
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

            .when('/login', {
                templateUrl: 'pages/login.html',
                controller: 'LoginController',
                titlecontroller: "Login",
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

        //.otherwise({redirectTo: '/'});

        // configure html5 to get links working on jsfiddle
        $locationProvider.html5Mode(true);
    });

    angularmodulename.factory('authHttpResponseInterceptor', ['$q', '$location', function ($q, $location) {
        return {
            response: function (response) {
                if (response.status === 401) {
                    console.log("Response 401");
                }
                return response || $q.when(response);
            },
            responseError: function (rejection) {
                if (rejection.status === 401) {
                    //console.log("Response Error 401",rejection);
                    //$location.path('/login').search('returnTo', $location.path());
                    $location.path('/login');
                }
                return $q.reject(rejection);
            }
        }
    }])


})(window.angular);