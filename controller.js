var cr1 = angular.module('angularmodulename');


cr1.factory('simpleFactory', function () {
    var friends = [
        {name: 'John', age: 25},
        {name: 'Mary', age: 40},
        {name: 'Peter', age: 85},
        {name: 'Siki', age: 85}
    ];
    var factory = {};
    factory.getFriends = function () {
        return friends;
    }

    factory.postFriend = function (friend) {

    }

    return factory;
});

cr1.factory('listOfNotes', function () {
    var notesList = [
        {title: 'Naslov Note', textnote: "tekst note",typenote : 1},
        {title: 'Naslov Image', textnote: "tekst Image",typenote : 2},
        {title: 'Naslov Link', textnote: "tekst Link",typenote : 3},
        {title: 'Naslov Note', textnote: "tekst note",typenote : 1}

    ];
    var factory = {};
    factory.getAllNotes = function () {
        return notesList;
    }

    notesList.postFriend = function (note) {

    }

    return factory;
});

cr1.controller('mainController', function ($scope, $http, $route, $routeParams, $location, simpleFactory,listOfNotes,myService, $mdDialog) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;

    // FOR CARDS
    $scope.imagePath = 'images/washedout.png';
    $scope.disableTagButton = {'visibility': 'hidden'};
    $scope.showelement = function () {
        $scope.disableTagButton = {'visibility': 'visible'};
    };
    $scope.hideelement = function () {
        $scope.disableTagButton = {'visibility': 'hidden'};
    };

    // dialog
    $scope.status = '  ';
    $scope.customFullscreen = false;

    // NOTES
    $scope.listnotes = [];
    initnotes();
    function initnotes(){
        $scope.listnotes = listOfNotes.getAllNotes();
    }


    $scope.showAdvanced = function (ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'template/dialog.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.

        })
            .then(function (answer) {
                $scope.status = 'You said the information was "' + answer.title + '".';
                $http({
                    method: 'GET',
                    url: "http://masinealati.rs/parametri.php?action=ping"
                }).then(function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    //$scope.ubaci = response;
                    console.log("aaa : "+response.data.tag);
                    $scope.listnotes.push({title: answer.title, textnote: answer.notes,typenote: answer.group1, noteid : Math.random });


                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });


            }, function () {
                $scope.status = 'You cancelled the dialog.';
            });
    };



    $scope.editRecord = function (note) {
         var getData = myService.getEmployee(note.Id);
         getData.then(function (emp) {
                $scope.employee = emp.data;
                $scope.employeeId = employee.Id;
                $scope.employeeName = employee.name;
                $scope.employeeEmail = employee.email;
                $scope.employeeAge = employee.Age;
                $scope.Action = "Update";
                $scope.divEmployee = true;
            },
            function () {
                alert('Error in getting records');
            });
    }


    // FRIENDS
    $scope.friends = [];
    init();
    function init() {
        $scope.friends = simpleFactory.getFriends();
    }

    $scope.addCustomer = function () {
        $scope.friends.push({name: $scope.newIme.name, age: $scope.newIme.age})
    }


    function DialogController($scope, $mdDialog) {
        $scope.hide = function () {
            $mdDialog.hide();
        };
        $scope.cancel = function () {
            $mdDialog.cancel();
        };
        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
            console.log("111 title : "+$scope.formdata.title);
            console.log("222 group1 : "+$scope.formdata.group1);
            console.log("333 notes : "+$scope.formdata.notes);
        };
    }

});

cr1.service("myService", function ($http) {

    // get Employee By Id
    this.getEmployee = function (employeeID) {
        var response = $http({
            method: "post",
            url: "Home/getEmployeeByNo",
            params: {
                id: JSON.stringify(employeeID)
            }
        });
        return response;
    }

    // Update Employee
    this.updateEmp = function (employee) {
        var response = $http({
            method: "post",
            url: "Home/UpdateEmployee",
            data: JSON.stringify(employee),
            dataType: "json"
        });
        return response;
    }
});





cr1.controller('BookController', function ($scope, $routeParams) {
    $scope.name = 'BookController';
    $scope.params = $routeParams;
});

cr1.controller('ChapterController', function ($scope, $routeParams) {
    $scope.name = 'ChapterController';
    $scope.params = $routeParams;
});