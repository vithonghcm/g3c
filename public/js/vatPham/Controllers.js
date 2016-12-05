angular.module('g3cApp.vatPham')
    .controller('vatPhamController', ['$scope', function vatPhamController($scope) {
        $scope.Title = "This is my VatPham";
      

    }])
    .controller('vatPhamChiTietController', function ($scope, $routeParams, vatPhams,nguoiBans) {
        vatPhams.find($routeParams.idVatPham, function (vatPham) {
            $scope.vatPham = vatPham.data[0];
            nguoiBans.find($scope.vatPham.idNguoiBan, function (nguoiBans) {
             $scope.nguoiBan = nguoiBans.data[0];

         });
        });
        
    })
.controller('themVatPhamController', ["$scope", function($scope) {
        $scope.load = function(tpl) {
        $scope.tpl = tpl;
    };

  $scope.content = "<p> this is custom directive </p>";
  $scope.content_two = "<p> this is ng-ckeditor directive </p>";
    $scope.load('one.tpl');
    }]).directive('fileBrowser', function() {
    return {
        restrict: 'A',
        replace: true,
        transclude: true,
        scope: false,
        template:
            '<form class="form-inline">'+
            '<div class="input-prepend extended-date-picker input-group">'+
            '<input type="text" readonly class="override form-control">'+
            '<div class="input-group-btn">'+
                '<input type="button" class="btn btn-default" value="Tải ảnh">'+
            '</div>'+
                
                '<div class="proxied-field-wrap" ng-transclude></div>'+
            '</div>'+
            '</form>'
            ,
        link: function($scope, $element, $attrs, $controller) {
            var button, fileField, proxy;
            fileField = $element.find('[type="file"]').on('change', function() {
                proxy.val(angular.element(this).val());
            });
            proxy = $element.find('[type="text"]').on('click', function() {
                fileField.trigger('click');
            });
            button = $element.find('[type="button"]').on('click', function() {
                fileField.trigger('click');
            });
        }
    };
})
.directive('ckEditor', function () {
    return {
        require: '?ngModel',
        link: function (scope, elm, attr, ngModel) {
            var ck = CKEDITOR.replace(elm[0]);
            if (!ngModel) return;
            ck.on('instanceReady', function () {
                ck.setData(ngModel.$viewValue);
            });
            function updateModel() {
                scope.$apply(function () {
                    ngModel.$setViewValue(ck.getData());
                });
            }
            ck.on('change', updateModel);
            ck.on('key', updateModel);
            ck.on('dataReady', updateModel);

            ngModel.$render = function (value) {
                ck.setData(ngModel.$viewValue);
            };
        }
    };
})
    .controller('vatPhamItemControllerDemo', ['$scope', '$http', 'vatPhams','nguoiBans', function vatPhamItemController($scope, $http, vatPhams,nguoiBans) {
        vatPhams.list(function (vatPhams) {
            $scope.vatPhams = vatPhams.data;
            nguoiBans.find( $scope.vatPhams[0].idNguoiBan, function (nguoiBans) {
             $scope.nguoiBans = nguoiBans.data[0];
         });
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
//nguoiBans.list(function (nguoiBans) {
  //          $scope.nguoiBans = nguoiBans.data;})
 
    }])
     
     .filter('pagination', function () {
         return function (input, start) {
            
             start = parseInt(start, 10);
             if (typeof(input) != 'undefined') {
                 return input.slice(start);
             } else return [];
         };
     })
      .controller('danhMucItemController', ['$scope', '$http', 'allDanhMucs', function danhMucItemController($scope, $http, allDanhMucs) {
          allDanhMucs.list(function (allDanhMucs) {
              danhMuc = allDanhMucs.data;
          $scope.danhMuc = danhMuc;
          });


      }])
.controller('doiTuongItemController', ['$scope', '$http', 'doiTuongs', function doiTuongItemController($scope, $http,doiTuongs) {
          doiTuongs.list(function (doiTuongs) {
              doiTuong = doiTuongs.data;
         
          $scope.doiTuongSPs = doiTuong;
          });


      }])
.controller('nguyenLieuItemController', ['$scope', '$http', 'nguyenLieus', function nguyenLieuItemController($scope, $http,nguyenLieus) {
          nguyenLieus.list(function (nguyenLieus) {
              nguyenLieu = nguyenLieus.data;
         
          $scope.nguyenLieuSPs = nguyenLieu;
          });


      }])
.controller('dMucItemController', ['$scope', '$http', 'danhMucs', function dMucItemController($scope, $http,danhMucs) {
          danhMucs.list(function (danhMucs) {
              danhMuc = danhMucs.data;
         
          $scope.danhMucSPs = danhMuc;
          });


      }])
.controller('gioHangController', ['$scope', '$http', function gioHangController($scope, $http) {

   
}])

     .controller('vatPhamDanhMucController', function ($scope, $routeParams, danhMucs, vatPhamDMs, $http,vatPhams) {
        
         danhMucs.list(function (danhMucs) {
             $scope.danhMucs = danhMucs.data;
            
         })
         $scope.tenDM = "";
        
         vatPhamDMs.find($routeParams.idDanhMuc, function (vatPhams) {
             $scope.vatPhams = vatPhams.data;
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
