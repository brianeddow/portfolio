var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);

myApp.config(function($routeProvider){
    $routeProvider
        .when('/about',{
            templateUrl: './partials/about.html'
        })
        .when('/work',{
            templateUrl: './partials/work.html'
        })
        .when('/skills',{
            templateUrl: './partials/skills.html'
        })
        .when('/contact',{
            templateUrl: './partials/contact.html'
        })
        .when('/home',{
            templateUrl: './partials/main.html'
        })
        .when('/carousel',{
            templateUrl: './partials/carousel.html'
        })
        .otherwise({
            redirectTo: '/home'
        });
})

myApp.controller('HomeController', function($scope){
    $scope.myInterval = 3000;
    $scope.slides = [
        {
            image: 'http://lorempixel.com/400/200/'
        },
        {
            image: 'http://lorempixel.com/400/200/food'
        },
        {
            image: 'http://lorempixel.com/400/200/sports'
        },
        {
            image: 'http://lorempixel.com/400/200/people'
        }
    ];
})
