'user strict';

angular.module('g3cApp.traoDoi')
	.controller('traoDoiCtrl', function traoDoiCtrl($scope, $http){
		
	})
	.controller('getCatCraftController', function($scope){
		var getCatCraftController = this;
		getCatCraftController.categories =
		[
			{name:'name1', description:'des1'},
			{name:'name2', description:'des2'}
		]
	});
