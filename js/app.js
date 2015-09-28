var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'friendsController',
            templateUrl: 'templates/friends.html'
        })
        .when('/contact', {
            controller: 'friendsController',
            templateUrl: 'templates/contact.html'
        })
        .otherwise({redirectTo: '/'})
        ;
});

myApp.controller('friendsController', function($scope) {
    $scope.friends = [
        {name:'John', phone:'555-1276'},
        {name:'Mary', phone:'800-BIG-MARY'},
        {name:'Mike', phone:'555-4321'},
        {name:'Adam', phone:'555-5678'},
        {name:'Julie', phone:'555-8765'},
        {name:'Juliette', phone:'555-5678'}
    ];
});
