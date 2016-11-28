'use strict'
var app = angular.module('g3cApp.searchResult', ['ngRoute']);

app.config(['$routeProvider', function config($routeProvider){
	$routeProvider.when('/searchResult/:searchInput',{
			controller:'searchResultCtrl',
			templateUrl:'html/searchResult/searchResult.html'
		});
}]);