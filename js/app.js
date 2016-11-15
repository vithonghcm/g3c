
'user strict';

angular.module('g3cApp', ['g3cApp.Home', 'g3cApp.traoDoi', 'g3cApp.congDong', 'g3cApp.vatPham', 'g3cApp.aboutUs','g3cApp.termAndCondition','g3cApp.searchResult','ngRoute', 'ngAnimate'])
	.config(function g3cAppConfig ($routeProvider){
		$routeProvider.otherwise({
			redirectTo:'/'
		});
	})
	.directive('header', function () {
    return {
        restrict: 'A', //This menas that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
        //replace: true,
        //scope: {user: '='}, // This is one of the cool things :). Will be explained in post.
        templateUrl: '/html/header/header.html',
        controller: ['$scope', '$filter' ,'$http', function ($scope, $filter, $http) {
            // Your behaviour goes here :)
		    $scope.user = {};
		    $scope.message = "Bạn chưa đăng nhập";
		    $scope.loggedIn = false;
		    console.log('here');
		    console.log( $scope);
		    $scope.checkLogin = function(){
		        var username = $scope.user.username;
		        var password = $scope.user.password;
		        var currentUser = {};
		        console.log('input user name:');
		        console.log(username);
		        console.log('input user pass:');
		        console.log(password);
		        $http.get("/data/userLogin/userList.json")
		        .then(function(response) {
		            //First function handles success
		            $scope.users = response.data.userList;
		            console.log($scope.users);
		            angular.forEach($scope.users, function(user){
		                if(username == user.userID && password == user.userPassword){
		                    $scope.message = "Xin chào " + username;
		                    currentUser = user;
		                    $scope.loggedIn = true;                    
		                    console.log(currentUser.loggedIn);
		                }
		            }
		            );    
		        }, function(response) {
		            //Second function handles error
		            $scope.message = "Something went wrong";
		        });
		    }

        }]
    }
	})
	.directive('footer', function (){
		return {
			restrict: 'E',
			templateUrl: '/html/footer/footer.html'
		}
	});

