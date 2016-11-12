angular.module('g3cApp.vatPham')
	.controller('vatPhamController', ['$scope', function vatPhamController($scope) {
	    $scope.Title = "This is my VatPham";
	    $scope.menu = true;
	    $scope.showMenu = function () {
	        $scope.menu = !$scope.menu;
	    }
	}])
    .controller('vatPhamItemController', ['$scope', '$http', function vatPhamItemController($scope, $http) {
         
        $http.get("/data/vatPham/itemVatPham.json")
             .then(function (response) {
                 //First function handles success
                 $scope.vatPhams = response.data.vatPham;
             }, function (error) {
                 //Second function handles error
                 console.log("Something went wrong:");
                 console.log(error);
             });
    }])
      .controller('danhMucItemController', ['$scope', '$http', function danhMucItemController($scope, $http) {

          $http.get("/data/vatPham/danhMuc.json")
               .then(function (response) {
                   $scope.danhMucSPs = response.data.danhMucs;
                   $scope.nguyenLieuSPs = response.data.nguyenLieus;
                   $scope.doiTuongSPs = response.data.doiTuongs;
               }, function (error) {
                   //Second function handles error
                   console.log("Something went wrong:");
                   console.log(error);
               });
      }])
.controller('vatPhamChiTietController', ['$scope', '$http', '$location', function vatPhamChiTietController($scope, $http, $location) {
    $scope.myUrl = $location.absUrl();
    
    $scope.hoanTat = false;
    $scope.themHang = function () {
        $scope.hoanTat = true;
    }
}]);
