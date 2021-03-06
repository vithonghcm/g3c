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
        .when('/aboutUs/thuhuong', {
            controller: 'thuhuongController',
            templateUrl: 'html/vatPham/thuhuong.html'
        })
        .when('/vatPham/themVatPham', {
            controller: 'themVatPhamController',
            templateUrl: 'html/vatPham/themVatPham.html'
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
                    url: '/ttvatPhams/',
                    cache: true
                }).success(callback);

            },
            find: function (id, callback) {
                $http({
                    method: 'GET',
                    //url: '/data/vatPham/vatPhamChiTiet/' + id + '.json',
                    url: '/ttvatPhams?idVatPham=' + id ,
                    cache: true
                }).success(callback);
            }
        };
    })
     .factory('nguoiBans', function ($http) {
        return {
            list: function (callback) {
                $http({
                    method: 'GET',
                    url: '/nguoiBans/',
                    cache: true
                }).success(callback);

            },
            find: function (id, callback) {
                $http({
                    method: 'GET',
                    //url: '/data/vatPham/vatPhamChiTiet/' + id + '.json',
                    url: '/nguoiBans?idNguoiBan=' + id ,
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
                    url: '/vatPhams/',
                    cache: true
                }).success(callback);
            },
            find: function (id, callback) {
                $http({
                    method: 'GET',
                    //url: '/data/vatPham/danhMucChiTiet/' + id + '.json',
                    url: '/'+id+'s/',
                    cache: true
                }).success(callback);
            }
        };
    })
    .factory('allDanhMucs', function ($http) {
        return {
            list: function (callback) {
                $http({
                    method: 'GET',
                    url: '/danhMucs/',
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
 .factory('doiTuongs', function ($http) {
        return {
            list: function (callback) {
                $http({
                    method: 'GET',
                    url: '/doiTuongs/',
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
                    url: '/dMucs/',
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
 .factory('nguyenLieus', function ($http) {
        return {
            list: function (callback) {
                $http({
                    method: 'GET',
                    url: '/nguyenLieus/',
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
    
    