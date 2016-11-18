angular.module('g3cApp.vatPham')
	.controller('vatPhamController', ['$scope', function vatPhamController($scope) {
	    $scope.Title = "This is my VatPham";
	  

	}])

//    .controller('vatPhamChiTietController', ['$scope', '$http', '$location', ' $routeParams', function vatPhamChiTietController($scope, $http, $routeParams, $location, vatPhams) {
//        $scope.myUrl = $location.absUrl();

 
//}])
    .controller('vatPhamChiTietController', function ($scope, $routeParams, vatPhams) {
        vatPhams.find($routeParams.idVatPham, function (vatPham) {
            $scope.vatPham = vatPham;
        });
    })
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

        $http.get("/data/vatPham/vatPham.json")
             .then(function (response) {
                 //First function handles success
                 $scope.itemsPerPage = 8;
                 $scope.currentPage = 0;
                 $scope.vatPhams = response.data;
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


.controller('gioHangController', ['$scope', '$http', function gioHangController($scope, $http) {

   
}])
//.controller('vatPhamDanhMucController', ['$scope', '$http', '$location', function vatPhamDanhMucController($scope, $http, $location) {
    
//    myUrl = $location.absUrl();

//    $http.get("/data/vatPham/dmThiep.json")
//              .then(function (response) {
//                  $scope.vatPhams = response.data.vatPham;
//                  $scope.danhMuc = response.data.danhMuc;
//              }, function (error) {
//                  //Second function handles error
//                  console.log("Something went wrong:");
//                  console.log(error);
//              });

//}])
     .controller('vatPhamDanhMucController', function ($scope, $routeParams, vatPhamDMs,$http) {
         
         $scope.tenDM = "";
        
         vatPhamDMs.find($routeParams.idDanhMuc, function (vatPhams) {
             $scope.vatPhams = vatPhams;
         });
         $http.get("/data/vatPham/danhMuc.json")
                       .then(function (response) {
                           
                          $scope.danhMucs = response.data.all;
                       }, function (error) {
                           //Second function handles error
                           console.log("Something went wrong:");
                           console.log(error);
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
