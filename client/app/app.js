'use strict';

angular.module('boltApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'satellizer'
])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/');

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('bolt', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl as Main'
            })
            .state('bolt.login', {
                url: 'login',
                templateUrl: 'app/auth/login.html',
                controller: 'LoginCtrl as Login'
            })
            .state('bolt.auth', {
                url: 'auth?code',
                templateUrl: 'app/auth/auth.html',
                controller: 'AuthCtrl as Auth'
            })
            .state('bolt.redirect', {
                url: 'redirect?code',
                templateUrl: 'app/auth/redirect.html',
                controller: 'RedirectCtrl as Redirect'
            })
            .state('bolt.createGroup', {
                url: 'create/group',
                templateUrl: 'app/group/create.group.html',
                controller: 'CreateGroupCtrl as CreateGroup'
            })
            .state('bolt.groupView', {
                url: 'group/:groupId',
                templateUrl: 'app/group/view.group.html',
                controller: 'GroupCtrl as Group'
            })
            .state('bolt.createEvent', {
                url: 'create/event',
                templateUrl: 'app/event/create.event.html'
            })
            .state('bolt.eventView', {
                url: 'event/:eventId',
                templateUrl: 'app/event/view.event.html'
            })
    });