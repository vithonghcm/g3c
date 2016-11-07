var userManController = angular.module('g3cApp.userManController', []);

userManController.controller('getUserManController', function($scope){
    var getUserMan  = this;
    
    getUserMan.user = {};
    getUserMan.message = "Chưa đăng nhập";
    
    getUserMan.checkLogin = function(){
        var username = getUserMan.user.username;
        var password = getUserMan.user.password;
        var currentUser = {};
        angular.forEach(getUserMan.users, function(user){
            if(username == user.username && password == user.password){
                getUserMan.message = "Xin chào " + username;
                currentUser = user;
                currentUser.loggedIn = true;
            }
        }
        );
    }
    
    getUserMan.users = [
        {username:'vthong',password:'123456'},
        {username:'thuong',password:'123456'},
        {username:'hloc',password:'123456'},
        {username:'banh',password:'123456'},
        {username:'nhung',password:'123456'}
        ];
});
