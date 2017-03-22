var app = angular.module("videokenApp");


app.controller("playlistPlayController", function ($scope, $sce, $timeout, $rootScope, $q) {

    $scope.videos = $rootScope.playlist;

    var counter = 0;

    $scope.trustSrc = function (src) {
        return $sce.trustAsResourceUrl(src);
    };

    $scope.currentVideo = "https://www.youtube.com/embed/" + $scope.videos[counter].video + "?autoplay=1&start=" + $scope.videos[counter].start + "&end=" +
        $scope.videos[counter].end;

    $scope.nextVideo = function () {

        counter = +1;

        $scope.currentVideo = "https://www.youtube.com/embed/" + $scope.videos[counter].video + "?autoplay=1&start=" + $scope.videos[counter].start + "&end=" +
            $scope.videos[counter].end;

    }

});