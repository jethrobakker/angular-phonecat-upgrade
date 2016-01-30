System.register([], function(exports_1) {
    function PhoneDetailCtrl($routeParams, Phone) {
        var vm = this;
        vm.phone = Phone.get({ phoneId: $routeParams.phoneId }, function (phone) {
            vm.mainImageUrl = phone.images[0];
        });
        vm.setImage = function (imageUrl) {
            vm.mainImageUrl = imageUrl;
        };
    }
    return {
        setters:[],
        execute: function() {
            PhoneDetailCtrl.$inject = ['$routeParams', 'Phone'];
            exports_1("default",PhoneDetailCtrl);
        }
    }
});
// 'use strict';
// angular.module('phonecat.detail')
//   .controller('PhoneDetailCtrl', PhonecatDetailCtrl);
// PhonecatDetailCtrl.$inject = ['$routeParams', 'Phone'];
/*
var phonecatControllers = angular.module('phonecatControllers', []);

from js/controllers.js
phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);

*/ 
//# sourceMappingURL=phone_detail.controller.js.map