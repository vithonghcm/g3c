'user strict';

angular.module('g3cApp.Home',['ngRoute'])
	.config(['$routeProvider', function config($routeProvider){
		$routeProvider.when('/',{
			controller:'getUserManController',
			templateUrl:'html/home/home.html'
		});
	}]);

