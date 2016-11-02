var userManController = angular.module('userManController', []);

userManController.controller('getUserManController', function($scope,$http){
    var getUserMan  = this;
    
    getUserMan.user = {};
    getUserMan.message = "Chưa đăng nhập";
    
    getUserMan.checkLogin = function(){
        var username = getUserMan.user.username;
        var password = getUserMan.user.password;
        var currentUser = {};

        $http.get("../data/userLogin/userList.json")
        .then(function(response) {
            //First function handles success
            getUserMan.users = response.data.userList;
            console.log(getUserMan.users);
            angular.forEach(getUserMan.users, function(user){
                if(username == user.userID && password == user.userPassword){
                    getUserMan.message = "Xin chào " + username;
                    currentUser = user;
                    currentUser.loggedIn = true;                    
                    console.log(currentUser.loggedIn);
                }
            }
            );    
        }, function(response) {
            //Second function handles error
            getUserMan.message = "Something went wrong";
        });
    }
    
});