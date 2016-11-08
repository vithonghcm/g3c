
'user strict';

angular.module('g3cApp', ['g3cApp.userManController','g3cApp.traoDoi'])
	.config(function g3cAppConfig ($routeProvider){
		$routeProvider.otherwise({
			redirectTo:'/home'
		});
	})

