'use strict';

var app = angular.module('phuotDi', ['ngRoute', 'ngSanitize','phuotDi.signUp', 'phuotDi.signIn', 'phuotDi.home', 'phuotDi.place',
    'phuotDi.navigationBar', 'phuotDi.profile', 'phuotDi.addPlace', 'phuotDi.search' ,'ngAnimate']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/profile/:userId', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        resolve: {
            auth: function ($q, $timeout, $location) {
                var deferred = $q.defer();

                $timeout(function() {
                    var user = firebase.auth().currentUser;

                    if (user != null)
                        deferred.resolve('Authenticated');
                    else {
                        deferred.reject('Not authenticated');
                        $location.path('/home');
                    }
                }, 500);

                return deferred.promise;
            }
        }
    }).when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
    }).when('/place/:placeId', {
        templateUrl: 'views/place.html',
        controller: 'PlaceCtrl'
    }).when('/add-place', {
        templateUrl: 'views/add-place.html',
        controller: 'AddPlaceCtrl',
        resolve: {
            auth: function ($q, $timeout, $location) {
                var deferred = $q.defer();

                $timeout(function() {
                    var user = firebase.auth().currentUser;

                    if (user != null)
                        deferred.resolve('Authenticated');
                    else {
                        deferred.reject('Not authenticated');
                        $location.path('/home');
                    }
                }, 500);

                return deferred.promise;
            }
        }
    }).when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
    }).otherwise({
        redirectTo: '/home'
    });
}]);

app.run(function ($rootScope, $route, $window) {
    $rootScope.currUser = firebase.auth().currentUser;

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {

            $('#SignUpModal').modal('hide');
            $('#SignInModal').modal('hide');

            $rootScope.currUser = user;
        } else {
            $rootScope.currUser = null;
        }

        $route.reload();
    });
});

