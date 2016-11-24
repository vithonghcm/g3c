'use strict'
var app = angular.module('g3cApp.termAndCondition', ['ngRoute']);

app.config(['$routeProvider', function config($routeProvider){
	$routeProvider.when('/termAndCondition',{
			controller:'termAndConditionCtrl',
			templateUrl:'html/termAndCondition/termAndCondition.html'
		});
}]);