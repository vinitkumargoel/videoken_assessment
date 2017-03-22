var app = angular.module("videokenApp");

app.controller("loginController", function ($scope, $state, $http) {

    $scope.login = function () {
        $http({
            "method": "POST",
            "url": "/users/login",
            "data": {"username": $scope.username, "password": $scope.password}
        }).then(function (data) {
            if (data.data.success) {
                $state.go("playlistPlay")
            } else {
                $scope.error = data.data.error;
            }
        })
    };

});