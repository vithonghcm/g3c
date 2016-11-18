'user strict';

angular.module('g3cApp.congDong')
	.controller('congDongCtrl', function congDongCtrl($scope, $http){
		
	})
	.controller('getTopUserCtrl', function getTopUserCtrl($scope, $http){
        $http.get('../../data/congDong/congDong.json')
        .then (function Success(response) {
            $scope.users = response.data.usersList;
            $scope.users.sort();
            $scope.usersTop = $scope.users.slice(0, 3);
        },
        function Error (response) {
            console.log(response);
        });

/*    this.top1 = this.users[0].username;
    this.top2 = this.users[1].username;
    this.top3 = this.users[2].username;*/
	});
