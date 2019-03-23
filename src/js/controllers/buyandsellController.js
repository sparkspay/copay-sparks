'use strict';

angular.module('copayApp.controllers').controller('buyandsellController', function($scope, $ionicHistory, buyAndSellService, lodash, $window) {

  $scope.$on("$ionicView.beforeEnter", function(event, data) {
    // $scope.services = buyAndSellService.get();

    // if (lodash.isEmpty($scope.services))
    //   $ionicHistory.goBack();

    $scope.services = [

      {
        url : 'https://app.stex.com/en/trade/pair/BTC/SPK/1D',
        caption : 'STEX'
      },
    ]
  });

  $scope.openMarket = function (url) {
    $window.open(url, '_self');
  };

});
