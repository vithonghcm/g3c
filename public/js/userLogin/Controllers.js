'user strict';

angular.module('g3cApp.Home').controller('getUserManController', function($scope,$http){

    console.log('ddd');
    $scope.user = {};
    $scope.message = "Bạn chưa đăng nhập";
    $scope.loggedIn = false;
    
    $scope.checkLogin = function(){
        var username = getUserMan.user.username;
        var password = getUserMan.user.password;
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
});
