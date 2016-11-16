'use strict';

/* Blog Module */

angular.module('g3cApp.vatPham', [])
	.config(['$routeProvider', function config( $routeProvider ) {
	    $routeProvider.when('/vatPham', {
	        controller: 'vatPhamController',
	        templateUrl: 'html/vatPham/vatPham.html'
	    }).when('/vatPham/:idVatPham', {
	        controller: 'vatPhamChiTietController',

	        templateUrl: 'html/vatPham/chiTietSanPham.html'
	    })
	    .when('/taiKhoan/gioHang', {
	        controller: 'gioHangController',

	        templateUrl: 'html/vatPham/xemgiohang.html'
	    });
	}]);
	
	