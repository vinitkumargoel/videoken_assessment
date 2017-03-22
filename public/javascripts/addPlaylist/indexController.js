var app = angular.module("videokenApp");

app.controller("addPlaylistController", function ($scope, $rootScope) {


    $scope.addVideo = function () {
        $rootScope.playlist.push($scope.video);
    };
});