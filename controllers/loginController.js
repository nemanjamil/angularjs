var loginmodule = angular.module('angularmodulename');

loginmodule.controller('LoginController', function ($scope, $rootScope, $http, $routeParams, $cookies, LoginService, hexafy) {
    $scope.name = 'LoginController';
    $scope.params = $routeParams;

    //var mit = LoginService.isAuthenticated();
    //console.log(hexafy.myFunc(255));


    $scope.login = function () {

        var handleSuccess = function(data, status) {
            dds = data.data.success;
            if (dds){
                setTokenToCookie(dds.token);
            }
        };

        LoginService.login($scope.user.email, $scope.user.pass).then(handleSuccess);

    };



    function setTokenToCookie(token){

        $rootScope.globals = {
            currentUser: {
                username: $scope.user.email,
                authdata: token
            }
        };

        $http.defaults.headers.common['Authorization'] = 'Basic ' + token;

        // store user details in globals cookie that keeps user logged in for 1 week (or until they logout)
        var cookieExp = new Date();
        cookieExp.setDate(cookieExp.getDate() + 7);
        $cookies.putObject('globals', $rootScope.globals, { expires: cookieExp });


    }


    $scope.user = {
        name: 'Nemanja -> pass : 123456',
        email: 'nemanjamili@gmail.com',
        pass: '123456',
    };

});







