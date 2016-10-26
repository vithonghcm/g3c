var topUserController = angular.module('topUserController', []);

topUserController.controller('getTopUserController', function($scope) {
	/* body... */
	var getTopUsers = this;
	getTopUsers.users = {};
	getTopUsers.sortTopUsers = function () {
		/* body... */
		this.users.rating.sort().reverse();		
	}
	getTopUsers.users = [
		{name: 'Donald J. Trump', rating: 7},
		{name: 'Hillary Clinton', rating: 8},
		{name: 'Barrack Obama', rating: 9},
		{name: 'Vladimir Putin', rating: 6},
		{name: 'Nguyễn Phú Trọng', rating: 10}
	];
});

