'user strict';

angular.module('g3cApp.traoDoi',['ngRoute'])
	.config(['$routeProvider', function config($routeProvider){
		$routeProvider.when('/traodoi',{
			controller:'traoDoiCtrl',
			templateUrl:'partial/traodoi/traodoi.html'
		});
	}]);

