'user strict';

angular.module('g3cApp.traoDoi')
	.controller('traoDoiCtrl', function traoDoiCtrl($scope, $http){
		$http.get('/traoDois')
		.then(function Success(response){
			$scope.vpCanTraoDoi = response.data;
			console.log($scope.vpCanTraoDoi);
			$scope.vpDcTraoDoi = response.data;
		},
		function Error(response){
			console.log(response);
		});
	})
	.controller('getCatCraftController', function($scope){
		var getCatCraftController = this;
		getCatCraftController.categories =
		[
			{name:'name1', description:'des1'},
			{name:'name2', description:'des2'}
		]
	});
