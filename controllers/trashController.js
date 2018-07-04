var crnotes= angular.module('angularmodulename');


crnotes.controller('TrashController', function ($scope, $routeParams) {
    $scope.name = 'TrashController';
    $scope.params = $routeParams;
});
