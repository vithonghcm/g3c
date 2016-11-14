'use strict'
var app = angular.module('g3cApp.aboutUs', ['ngRoute']);

app.config(['$routeProvider', function config($routeProvider){
	$routeProvider.when('/aboutUs',{
			controller:'aboutUsCtrl',
			templateUrl:'html/aboutUs/aboutUs.html'
		});
}]);