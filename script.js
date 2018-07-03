(function (angular) {
    'use strict';
    var angularmodulename = angular.module('angularmodulename', ['ngAnimate', 'ngRoute','ngMaterial', 'ngMessages']);


    angularmodulename.config(function ($routeProvider, $locationProvider) {
        $routeProvider

            .when('/Book/:bookId', {
                templateUrl: 'book.php',
                controller: 'BookController',
                resolve: {
                    delay: function ($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 1000);
                        return delay.promise;
                    }
                }
            })
            .when('/Book/:bookId/ch/:chapterId', {
                templateUrl: 'chapter.html',
                controller: 'ChapterController'
            });

        // configure html5 to get links working on jsfiddle
        $locationProvider.html5Mode(true);
    });

})(window.angular);