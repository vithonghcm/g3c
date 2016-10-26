var trendingController = angular.module("TrendingPostController",[]);

trendingController.controller('getTrendingPostController', function($scope){
	var trending = this;
	trending.trendingPosts = [
		{title: 'Title 1', intro: 'Intro 1', link: 'https://www.youtube.com/'},
		{title: 'Title 2', intro: 'Intro 2', link: 'https://mail.google.com/'},
		{title: 'Title 3', intro: 'Intro 3', link: 'https://www.facebook.com/'},
		{title: 'Title 4', intro: 'Intro 4', link: 'https://app.asana.com/'}
	];
	});