angular.module('g3cApp.vatPham')
	.controller('vatPhamController', ['$scope', function vatPhamController($scope) {
	    $scope.Title = "This is my VatPham";
	  

	}])
  
    //.controller('vatPhamItemController', ['$scope', '$http', function vatPhamItemController($scope, $http) {
         
    //    $http.get("/data/vatPham/itemVatPham.json")
    //         .then(function (response) {
    //             //First function handles success
    //             $scope.vatPhams = response.data.vatPham;
    //         }, function (error) {
    //             //Second function handles error
    //             console.log("Something went wrong:");
    //             console.log(error);
    //         });
    //}])
    .controller('vatPhamItemControllerDemo', ['$scope', '$http', function vatPhamItemController($scope, $http) {

        $http.get("/data/vatPham/itemVatPham.json")
             .then(function (response) {
                 //First function handles success
                 $scope.itemsPerPage = 8;
                 $scope.currentPage = 0;
                 $scope.vatPhams = response.data.vatPham;
                 $scope.range = function () {

                     var rangeSize = 10;

                     var ps = [];

                     var start;

                     start = $scope.currentPage;

                     if (start > $scope.pageCount() - rangeSize) {

                         start = $scope.pageCount() - rangeSize + 1;

                     }
                     for (var i = start; i < start + rangeSize; i++) {
                         if (i >= 0)
                             ps.push(i);
                     } return ps;

                 }

                 $scope.prevPage = function () {

                     if ($scope.currentPage > 0) {

                         $scope.currentPage--;

                     }
                 };
                 $scope.DisablePrevPage = function () {

                     return $scope.currentPage === 0 ? "disabled" : "";

                 };
                 $scope.pageCount = function () {

                     return Math.ceil($scope.vatPhams.length / $scope.itemsPerPage) - 1;

                 };
                 $scope.nextPage = function () {

                     if ($scope.currentPage < $scope.pageCount()) {

                         $scope.currentPage++;

                     }

                 };

                 $scope.DisableNextPage = function () {

                     return $scope.currentPage === $scope.pageCount() ? "disabled" : "";

                 };
                 $scope.setPage = function (n) {

                     $scope.currentPage = n;

                 };
             }, function (error) {
                 //Second function handles error
                 console.log("Something went wrong:");
                 console.log(error);
             });
    }])
     
     .filter('pagination', function () {
         return function (input, start) {
            
             start = parseInt(start, 10);
             if (typeof(input) != 'undefined') {
                 return input.slice(start);
             } else return [];
         };
     })
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
 
}])

.controller('gioHangController', ['$scope', '$http', function gioHangController($scope, $http) {

   
}])
;
