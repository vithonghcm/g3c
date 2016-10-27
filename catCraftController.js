var catCraftController = angular.module('catCraftController',[])
	.controller('getCatCraftController', function($scope){
		var getCatCraftController = this;
		getCatCraftController.categories =
		[
			{name:'name1', description:'des1'},
			{name:'name2', description:'des2'}
		]
	});