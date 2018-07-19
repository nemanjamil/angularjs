var cr1 = angular.module('angularmodulename');
cr1.controller('mainController', function ($scope, $http, $route, $routeParams, $location, myService, $mdDialog) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;

    //$scope.listnotes = [];

    $scope.allTrash = function () {
        data = $scope.listnotes;
        for (var i = 0; i < data.length; i++) {
            if (data[i].active == 0) {
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

    $scope.changeColor = function ($event, note, boja) {
        idjsdel = note.idjs;
        data = $scope.listnotes;
        for (var i = 0; i < data.length; i++) {
            if (data[i].idjs == idjsdel) {
                data[i].color = boja;
                break;
            }
        }

        getDataDel = myService.changeColorService(idjsdel, boja);
        getDataDel.then(function (msg) {
            console.log(msg.data);
            if (msg.data.success) {
                $scope.status = msg.data.error_msg;
            } else {
                alert('Node is NOT  Activated');
            }

        }, function () {
            alert('Error in Deleting Record');
        });


    };

    // dialog
    $scope.status = '  ';
    $scope.customFullscreen = false;

    $scope.backtoNodes = function ($event, note) {
        idjsdel = note.idjs;
        datadel = $scope.listnotes;
        for (var i = 0; i < datadel.length; i++) {
            if (datadel[i].idjs == idjsdel) {
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
        }, function () {
            alert('Error in Deleting Record');
        });
    };

    // this one is to go to TRASH
    $scope.deleteRecord = function ($event, note, index) {
        idjsdel = note.idjs;
        var data = $scope.listnotes;
        for (var i = 0; i < data.length; i++) {
            if (data[i].idjs == idjsdel) {
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
        }, function () {
            alert('Error in Deleting Record');
        });
    };

    // this is to FULL REMOVE FROM SERVER
    $scope.fullRemovefromNodes = function ($event, note) {

        idjsdel = note.idjs;
        data = $scope.listnotes;
        for (var i = 0; i < data.length; i++) {
            if (data[i].idjs == idjsdel) {
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
        }, function () {
            alert('Error in Deleting Record');
        });
    };


    GetAllNotes();
    function GetAllNotes() {
        var getData = myService.getAllNotes();
        getData.then(function (emp) {
            if (emp.data.success) {
                $scope.listnotes = emp.data.data;
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
    function DialogController_update($scope, $mdDialog, dataToPass) {

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

    $scope.editRecord = function (ev, note, index) {

        $mdDialog.show({
            controller: DialogController_update,
            templateUrl: 'template/dialog.html?t=' + Math.random(),
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen,
            locals: {dataToPass: note},

        })
            .then(function (answer) {

                if (answer == 0) {
                    $scope.status = "You say no to edit :) "
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

cr1.service("myService", function ($http, $cookies) {


    var favoriteCookie = $cookies.getObject('globals');

    var sitelink = "http://godaddyserver/";
    //get All Notes
    this.getAllNotes = function () {

        if (favoriteCookie) {
            var response = $http({
                method: "GET",
                headers: {
                    'Accept': 'application/json', //text/javascript
                    'Content-Type': 'application/json; charset=utf-8',
                    'authorization': 'Bearer ' + favoriteCookie.currentUser.authdata
                },
                //url: "http://masinealati.rs/parametrigarden.php?action=getallnotes"
                url: sitelink + "api/1.0/all"
            });
            return response;
        } else {
            var response = $http({
                method: "GET",
                url: sitelink + "api/1.0/all"
            });
            return response;
        }
    };

    //remove Note to TRASH
    this.removeNote = function (noteId) {
        var response = $http({
            method: "POST",
            data: {'idjs': noteId},
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
            data: {'idjs': noteId},
            url: "http://masinealati.rs/parametrigarden.php?action=sentbacktonotes"
        });
        return response;
    };

    // CHANGE COLORO OF NOTE
    this.changeColorService = function (noteId, boja) {
        var response = $http({
            method: "POST",
            data: {'idjs': noteId, 'color': boja},
            url: "http://masinealati.rs/parametrigarden.php?action=changecolor"
        });
        return response;
    };


    // full Remove Note
    this.fullRemoveFromNotesService = function (noteId) {
        var response = $http({
            method: "POST",
            data: {'idjs': noteId},
            url: "http://masinealati.rs/parametrigarden.php?action=fullremovefromnodes"
        });
        return response;
    };


});
