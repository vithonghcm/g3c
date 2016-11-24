'user strict';

angular.module('g3cApp.traoDoi')
	.controller('traoDoiCtrl', function traoDoiCtrl($scope, $http){
		$http.get('../../data/traoDoi/vatPhamTraoDoi.json')
		.then(function Success(response){
			$scope.vpCanTraoDoi = response.data.vatPhamCuaToi;
			$scope.vpDcTraoDoi = response.data.vatPhamCuaBan;
		},
		function Error(response){
			console.log(response);
		});

		// var listSP =[];
		// $scope.addToCart = function (){
		// 	console.log('add');
		// 	console.log(VP.tenVP);
		// 	angular.forEach(listSP, function(addSP){
		// 		if($scope.VP.tenVP==addSP.ten){
		// 			addSP.soLuong += 1;
		// 		}
		// 		else{
		// 			$scope.listSP.push({ten:$scope.VP.tenVP, soLuong:'1'})
		// 		}
		// 	});
		// }
		// console.log(listSP);
	})
	.controller('getCatCraftController', function($scope){
		var getCatCraftController = this;
		getCatCraftController.categories =
		[
			{name:'name1', description:'des1'},
			{name:'name2', description:'des2'}
		]
	});
