var crnotes= angular.module('angularmodulename');


crnotes.controller('LinksController', function ($scope, $routeParams) {
    $scope.name = 'LinksController';
    $scope.params = $routeParams;
});
