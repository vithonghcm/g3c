angular.module('g3cApp.vatPham')
	.controller('vatPhamController', ['$scope', function vatPhamController($scope) {
	    $scope.Title = "This is my VatPham";
	  

	}])
    .controller('vatPhamChiTietController', function ($scope, $routeParams, vatPhams) {
        vatPhams.find($routeParams.idVatPham, function (vatPham) {
            $scope.vatPham = vatPham;
        });
    })

    .controller('vatPhamItemControllerDemo', ['$scope', '$http', 'vatPhams', function vatPhamItemController($scope, $http, vatPhams) {
        vatPhams.list(function (vatPhams) {
            $scope.vatPhams = vatPhams;
      
                 $scope.itemsPerPage = 8;
                 $scope.currentPage = 0;
               
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
        })
    }])
     
     .filter('pagination', function () {
         return function (input, start) {
            
             start = parseInt(start, 10);
             if (typeof(input) != 'undefined') {
                 return input.slice(start);
             } else return [];
         };
     })
      .controller('danhMucItemController', ['$scope', '$http', 'danhMucs', function danhMucItemController($scope, $http, danhMucs) {
          danhMucs.list(function (danhMucs) {
              danhMuc = danhMucs;
          $scope.danhMucSPs = danhMuc.danhMucs;
          $scope.nguyenLieuSPs = danhMuc.nguyenLieus;
          $scope.doiTuongSPs = danhMuc.doiTuongs;
          })

      }])


.controller('gioHangController', ['$scope', '$http', function gioHangController($scope, $http) {

   
}])

     .controller('vatPhamDanhMucController', function ($scope, $routeParams, danhMucs, vatPhamDMs, $http) {
         danhMucs.list(function (danhMucs) {
             $scope.danhMucs = danhMucs.all;
            
         })
         $scope.tenDM = "";
        
         vatPhamDMs.find($routeParams.idDanhMuc, function (vatPhams) {
             $scope.vatPhams = vatPhams;
         });
         danhMucs = $scope.danhMucs;
         $scope.id = $routeParams.idDanhMuc;
         angular.forEach(danhMucs, function (danhMuc) {
             if (danhMuc.idDM == $routeParams.idDanhMuc) { $scope.tenDM = danhMuc.tenDM; }
             
         })})
.directive('menuDm', function () {
    var html = '<link rel="stylesheet" href="/css/VatPham/vatPham.css">';
    html += '<div class="container-fluid"style="position: fixed; z-index:9999;">';
    html += ' <div class="menu1" id="menuDanhMuc" style="left: -190px;">';
    html += '<div class="btn-bangchon1" id="btnDanhMuc">';
    html += '</div><div>';
    html += '<div ng-include="' + "'/html/vatPham/itemDanhMuc.html'" + '"></div>';
    html += '</div></div>';

    html += ' <div class="menu2" id="menuNguyenLieu" style="left: -190px;top:281px">';
    html += '<div class="btn-bangchon2" id="btnNguyenLieu">';
    html += '</div><div>';
    html += '<div ng-include="' + "'/html/vatPham/itemNguyenLieu.html'" + '"></div>';
    html += '</div></div>';

    html += ' <div class="menu3" id="menuDoiTuong" style="left: -190px;top:411px;">';
    html += '<div class="btn-bangchon3" id="btnDoiTuong">';
    html += '</div><div>';
    html += '<div ng-include="' + "'/html/vatPham/itemDoiTuong.html'" + '"></div>';
    html += '</div></div>';
    html += '</div>';
    return {
        template: html
    };
})
;
