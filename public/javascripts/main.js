/**
 * Created by Vinit Kumar Goel on 22-03-2017.
 */

var app = angular.module("videokenApp", ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'javascripts/login/index.html',
            controller: "loginController"
        })
        .state('addPlaylist', {
            url: '/addPlaylist',
            templateUrl: 'javascripts/addPlaylist/index.html',
            controller: "addPlaylistController"
        })
        .state('playlistPlay', {
            url: '/playlistPlay',
            templateUrl: 'javascripts/playlistPlay/index.html',
            controller: "playlistPlayController"
        })
});

app.run(function ($rootScope) {
    $rootScope.playlist = [
        {"video": "IHS_D3M-Nk0", "start": "100", "end": "120", "title": "Jatt and Juliet 2"},
        {"video": "oKRps5Fwr80", "start": "200", "end": "210", "title": "Jatt and Juliet "}
    ];
})