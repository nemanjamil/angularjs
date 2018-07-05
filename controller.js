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
        {title: 'Naslov Note', textnote: "tekst note", typenote: 1, idjs: 1, active : 1},
        {title: 'Naslov Image', textnote: "tekst Image", typenote: 2, idjs: 2,active : 1},
        {title: 'Naslov Link', textnote: "tekst Link", typenote: 3, idjs: 3,active : 1},
        {title: 'Naslov Note', textnote: "tekst note", typenote: 1, idjs: 4,active : 1}

    ];
    var factory = {};
    factory.getAllNotesFactory = function () {
        return notesList;
    }

    notesList.postFriend = function (note) {

    }

    return factory;
});

cr1.controller('mainController', function ($scope, $http, $route, $routeParams, $location, simpleFactory, listOfNotes, myService, $mdDialog) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;


    // NOTES
    $scope.listnotes = [];

    $scope.allTrash = function(){
        data = $scope.listnotes;
        for(var i = 0; i < data.length; i++) {
            if(data[i].active == 0) {
               data.splice(i, 1);
            }
        }

    };

    $scope.showelement = function (event) {
        var el = getElement(event);
        angular.element(el).find('md-card-actions').removeClass('vidim');
    };

    $scope.hideelement = function (event) {
        var el = getElement(event);
        angular.element(el).find('md-card-actions').addClass('vidim');
    };

    function getElement(event) {
        return angular.element(event.srcElement || event.currentTarget);
    }

    $scope.changeColor = function($event, note, boja){
        idjsdel = note.idjs;
        data = $scope.listnotes;
        for(var i = 0; i < data.length; i++) {
            if(data[i].idjs == idjsdel) {
                data[i].color = boja;
                break;
            }
        }

        getDataDel = myService.changeColorService(idjsdel,boja);
        getDataDel.then(function (msg) {
            console.log(msg.data);
            if (msg.data.success) {
                $scope.status = msg.data.error_msg;
            } else {
                alert('Node is NOT  Activated');
            }

        },function(){
            alert('Error in Deleting Record');
        });


    };

    // dialog
    $scope.status = '  ';
    $scope.customFullscreen = false;

    $scope.backtoNodes = function($event, note){
        idjsdel = note.idjs;
        datadel = $scope.listnotes;
        for(var i = 0; i < datadel.length; i++) {
            if(datadel[i].idjs == idjsdel) {
                datadel[i].active = 1;
                break;
            }
        }

        getDataDel = myService.sentBackToNotes(idjsdel);
        getDataDel.then(function (msg) {
            console.log(msg.data);
            if (msg.data.success) {
                $scope.status = msg.data.error_msg;
            } else {
                alert('Node is NOT  Activated');
            }

        },function(){
            alert('Error in Deleting Record');
        });




    };

    // this one is to go to TRASH
    $scope.deleteRecord = function ($event, note, index) {
        idjsdel = note.idjs;
        var data = $scope.listnotes;
        for(var i = 0; i < data.length; i++) {
             if(data[i].idjs == idjsdel) {
                data[i].active = 0;
                break;
            }
        }


        var getDataDel = myService.removeNote(idjsdel);
        getDataDel.then(function (msg) {
            console.log("msg : ");
            console.log(msg.data);
            if (msg.data.success) {
                $scope.status = msg.data.error_msg;
            } else {
                alert('Node is NOT Trashed');
            }

        },function(){
            alert('Error in Deleting Record');
        });

    };

    // this is to FULL REMOVE FROM SERVER
    $scope.fullRemovefromNodes = function ($event, note) {

        idjsdel = note.idjs;
        data = $scope.listnotes;
        for(var i = 0; i < data.length; i++) {
             if(data[i].idjs == idjsdel) {
                data.splice(i, 1);
                break;
            }
        }

        getDataDel = myService.fullRemoveFromNotesService(idjsdel);
        getDataDel.then(function (msg) {
            console.log("msg : ");
            console.log(msg.data);
            if (msg.data.success) {
                $scope.status = msg.data.error_msg;
            } else {
                alert('Node is NOT Trashed');
            }

        },function(){
            alert('Error in Deleting Record');
        });

    };


    GetAllNotes();
    function GetAllNotes() {
        var getData = myService.getAllNotes();
        getData.then(function (emp) {
            if (emp.data.success) {
                $scope.listnotes = emp.data.notes;
            } else {
                console.log("empty");
            }
        }, function () {
            alert('Error in getting records');
        });
    }




     // ADD DIALOG
    $scope.showAdvanced = function (ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'template/dialog.html?t=' + Math.random(),
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.

        })
            .then(function (answer) {


                $http({
                    method: 'POST',
                    data: {'title': answer.title, textnote: answer.textnote, typenote: answer.typenote},
                    url: "http://masinealati.rs/parametrigarden.php?action=addnotesjs"
                }).then(function successCallback(response) {
                    if (response.data.success) {

                        $scope.listnotes.push({
                            title: answer.title,
                            textnote: answer.textnote,
                            typenote: answer.typenote,
                            idjs: response.data.newid,
                            active: 1,
                            color: 1

                        });

                    } else {
                        $scope.status = response.data.error_msg;
                    }
                }, function errorCallback(response) {

                });
            }, function () {
                $scope.status = 'You cancelled the dialog.';
            });
    };

    function DialogController($scope, $mdDialog) {
        $scope.hide = function () {
            $mdDialog.hide();
        };
        $scope.cancel = function () {
            $mdDialog.cancel();
        };
        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
        };
    }

    // EDIT DIALOG
    function DialogController_update($scope, $mdDialog,dataToPass) {

        var vm = this;
        $scope.formdata = dataToPass;

        $scope.hide = function () {
            $mdDialog.hide();
        };
        $scope.cancel = function () {
            $mdDialog.cancel();
        };
        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
        };
    }

    $scope.editRecord = function(ev, note, index) {

        $mdDialog.show({
            controller: DialogController_update,
            templateUrl: 'template/dialog.html?t=' + Math.random(),
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen,
            locals:{dataToPass: note},

        })
            .then(function (answer) {

                if (answer==0) {
                    $scope.status = "You say to to edit :) "
                } else {
                    $http({
                        method: 'POST',
                        data: {
                            'title': answer.title,
                            textnote: answer.textnote,
                            typenote: answer.typenote,
                            idjs: answer.idjs,
                            active: answer.active
                        },
                        url: "http://masinealati.rs/parametrigarden.php?action=updatenote"
                    }).then(function successCallback(response) {
                        if (response.data.success) {

                        } else {
                            $scope.status = response.data.error_msg;
                        }
                    }, function errorCallback(response) {

                    });
                }

            }, function () {
                $scope.status = 'You cancelled the dialog.';
            });


    };


});

cr1.service("myService", function ($http) {

    //get All Notes
    this.getAllNotes = function () {
        return $http.get("http://masinealati.rs/parametrigarden.php?action=getallnotes");
    };

    //remove Note to TRASH
    this.removeNote = function (noteId) {
        var response = $http({
            method: "POST",
            data : {'idjs' : noteId },
            url: "http://masinealati.rs/parametrigarden.php?action=removenote"
        });
        return response;
        /*params: {
            employeeId: JSON.stringify(employeeId)
        }*/
    };

    // SENT BACK TO NOTES
    this.sentBackToNotes = function (noteId) {
        var response = $http({
            method: "POST",
            data : {'idjs' : noteId },
            url: "http://masinealati.rs/parametrigarden.php?action=sentbacktonotes"
        });
        return response;
    };

    // CHANGE COLORO OF NOTE
    this.changeColorService = function (noteId,boja) {
        var response = $http({
            method: "POST",
            data : {'idjs' : noteId, 'color' : boja },
            url: "http://masinealati.rs/parametrigarden.php?action=changecolor"
        });
        return response;
    };


    // full Remove Note
    this.fullRemoveFromNotesService = function (noteId) {
        var response = $http({
            method: "POST",
            data : {'idjs' : noteId },
            url: "http://masinealati.rs/parametrigarden.php?action=fullremovefromnodes"
        });
        return response;
    };


});

