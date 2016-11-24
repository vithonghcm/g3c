angular.module('g3cApp.searchResult')
	.controller('searchResultCtrl', function ($scope, $http, $routeParams, $location){
		$scope.search = function(){
			var view = '/searchResult/'+$scope.searchInput;
			$location.path(view);
			//console.log($location.path);
		};
		
	});