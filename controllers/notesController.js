var crnotes= angular.module('angularmodulename');


crnotes.controller('NotesController', function ($scope, $routeParams) {
    $scope.name = 'NotesController';
    $scope.params = $routeParams;
});
