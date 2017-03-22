var app = angular.module("videokenApp");

app.controller("addPlaylistController", function ($scope, $rootScope) {

    $scope.video = {};

    $scope.addVideo = function () {
        console.log()
        if ($scope.video.hasOwnProperty("video")) {
            if ($scope.video.video.length == 11) {
                if ($scope.video.end > $scope.video.start) {
                    if ($scope.video.hasOwnProperty("title")) {
                        $rootScope.playlist.push($scope.video);
                        $scope.video = {};
                        $scope.success = {"success": "Successfully Updated!"};
                    } else {
                        $scope.error = {"error": "Please Enter video title!"};
                    }
                } else {
                    $scope.error = {"error": "End time should be greater then start time!"};
                }
            } else {
                $scope.error = {"error": "Please Enter Valid Youtube Id!"};
            }
        } else {
            $scope.error = {"error": "Please Enter Valid Youtube Id!"};
        }

    };
});