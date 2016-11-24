var topUserController = angular.module('topUserController', []);

topUserController.controller('getTopUserController', function($scope){
    this.users = [
    	{username: 'Donald J. Trump', rating: 7},
    	{username: 'Hillary Clinton', rating: 8},
    	{username: 'Barrack Obama', rating: 9},
    	{username: 'Vladimir Putin', rating: 6},
    	{username: 'Jackie Chan', rating: 10},
    ];

    this.users.sort().reverse();

    this.top1 = this.users[0].username;
    this.top2 = this.users[1].username;
    this.top3 = this.users[2].username;
});

