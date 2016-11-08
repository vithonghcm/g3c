var userManController = angular.module('g3cApp.userManController', []);

userManController.controller('getUserManController', function($scope,$http){
    var getUserMan  = this;
    
    getUserMan.user = {};
    getUserMan.message = "Bạn chưa đăng nhập";
    getUserMan.loggedIn = false;
    
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
                    getUserMan.loggedIn = true;                    
                    console.log(currentUser.loggedIn);
                }
            }
            );    
        }, function(response) {
            //Second function handles error
            getUserMan.message = "Something went wrong";
        });
    }
    getUserMan.users = [
        {username:'vthong',password:'123456'},
        {username:'thuong',password:'123456'},
        {username:'hloc',password:'123456'},
        {username:'banh',password:'123456'},
        {username:'nhung',password:'123456'}
        ];

});

