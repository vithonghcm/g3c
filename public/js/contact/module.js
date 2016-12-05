'use strict'
var app = angular.module('g3cApp.contact', ['ngRoute']);

app.config(['$routeProvider', function config($routeProvider){
	$routeProvider.when('/contact',{
			controller:'contactCtrl',
			templateUrl:'html/contact/contact.html'
		});
}]);