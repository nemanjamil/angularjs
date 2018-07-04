var crnotes= angular.module('angularmodulename');


crnotes.controller('ImagesController', function ($scope, $routeParams) {
    $scope.name = 'ImagesController';
    $scope.params = $routeParams;
});
