angular.module('g3cApp.aboutUs')
	.controller('aboutUsCtrl', function congDongCtrl($scope, $http){
		$http.get('/data/aboutUs/aboutUs.json')
		.then( function (respone) {
			$scope.teamMemberList = respone.data.g3cTeamList;
		});
		
	});