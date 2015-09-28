var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'friendsController',
            templateUrl: 'templates/friends.html'
        })
        .when('/contact', {
            controller: 'formController',
            templateUrl: 'templates/contact.html'
        })
        .otherwise({redirectTo: '/'})
        ;
});

myApp.factory('friendsFactory', function(){
    var friends = [
        {name:'John', phone:'555-1276'},
        {name:'Mary', phone:'800-BIG-MARY'},
        {name:'Mike', phone:'555-4321'},
        {name:'Adam', phone:'555-5678'},
        {name:'Julie', phone:'555-8765'},
        {name:'Juliette', phone:'555-5678'}
    ];

    var factory = {};

    factory.getFriends = function() {
        return friends;
    }

    return factory;
});

myApp.controller('friendsController', function($scope, friendsFactory) {
    $scope.friends = [];


    function init() {
        $scope.friends = friendsFactory.getFriends();
    }
    init();

    $scope.addFriend = function() {
        $scope.friends.push({
            name: $scope.newFriend.name, phone: $scope.newFriend.phone});
    };
});

myApp.controller('formController', function($scope) {
    $scope.formSubmit = function() {
        if($scope.formName) {
            console.log($scope.formName);
        }
    }
});
