'user strict';

angular.module('g3cApp.traoDoi',['ngRoute'])
	.config(['$routeProvider', function config($routeProvider){
		$routeProvider.when('/traodoi',{
			controller:'traoDoiCtrl',
			templateUrl:'html/traodoi/traodoi.html'
		}).
		when('/traodoi/xacnhan',{
			controller:'traoDoiCtrl',
			templateUrl:'html/traodoi/xacNhanTraoDoi.html'
		});
	}]);

