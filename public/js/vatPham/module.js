'use strict';

/* Blog Module */

angular.module('g3cApp.vatPham', [])
	.config(['$routeProvider', function config( $routeProvider ) {
	    $routeProvider.when('/vatPham', {
	        controller: 'vatPhamController',
	        templateUrl: 'html/vatPham/vatPham.html'
	    }).when('/vatPham/chiTiet/:idVatPham', {
	        controller: 'vatPhamChiTietController',

	        templateUrl: 'html/vatPham/chiTietSanPham.html'

	    }).when('/vatPham/product_list/:idDanhMuc', {
	        controller: 'vatPhamDanhMucController',
	        templateUrl: 'html/vatPham/vatPhamTheoDanhMuc.html'
	    })
	    .when('/taiKhoan/gioHang', {
	        controller: 'gioHangController',

	        templateUrl: 'html/vatPham/xemgiohang.html'
	    });
	}])
    .factory('vatPhams', function ($http) {
        return {
            list: function (callback) {
                $http({
                    method: 'GET',
                    url: '/data/vatPham/vatPham.json',
                    cache: true
                }).success(callback);

            },
            find: function (id, callback) {
                $http({
                    method: 'GET',
                    url: '/data/vatPham/vatPhamChiTiet/' + id + '.json',
                    cache: true
                }).success(callback);
            }
        };
    })
    .factory('vatPhamDMs', function ($http) {
        return {
            list: function (callback) {
                $http({
                    method: 'GET',
                    url: '/data/vatPham/vatPham.json',
                    cache: true
                }).success(callback);
            },
            find: function (id, callback) {
                $http({
                    method: 'GET',
                    url: '/data/vatPham/danhMucChiTiet/' + id + '.json',
                    cache: true
                }).success(callback);
            }
        };
    })
    .factory('danhMucs', function ($http) {
        return {
            list: function (callback) {
                $http({
                    method: 'GET',
                    url: '/data/vatPham/danhMuc.json',
                    cache: true
                }).success(callback);
            },
            find: function (id, callback) {
                $http({
                    method: 'GET',
                    url: '/data/vatPham/danhMucChiTiet/' + id + '.json',
                    cache: true
                }).success(callback);
            }
        };
    })

;
	
	