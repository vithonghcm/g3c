'user strict';

angular.module('g3cApp.congDong',['ngRoute'])
	.config(['$routeProvider', function config($routeProvider){
		$routeProvider.when('/congdong',{
			controller:'congDongCtrl',
			templateUrl:'html/congdong/congdong.html'
		});
	}]);

