<<<<<<< HEAD
'user strict';

angular.module('g3cApp', ['g3cApp.userManController','g3cApp.traoDoi'])
	.config(function g3cAppConfig ($routeProvider){
		$routeProvider.otherwise({
			redirectTo:'/home'
		});
	})
=======
var g3c = angular.module('g3cApp', ['catCraftController', 'userManController', 'topUserController'])
>>>>>>> cc31cc98e77ac6dcd09cc9f3a7af4d097f589ed7
