'user strict';

angular.module('g3cApp.traoDoi')
	.controller('traoDoiCtrl', function traoDoiCtrl($scope, $http){
		$http.get('../../data/traoDoi/vatPhamTraoDoi.json')
		.then(function Success(response){
			$scope.vpTraoDoi = response.data.vatPhamCuaToi;
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
