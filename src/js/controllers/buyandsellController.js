'use strict';

angular.module('copayApp.controllers').controller('buyandsellController', function ($scope, $ionicHistory, buyAndSellService, lodash, $window, gettextCatalog, externalLinkService) {

  $scope.$on("$ionicView.beforeEnter", function (event, data) {
    // $scope.services = buyAndSellService.get();

    // if (lodash.isEmpty($scope.services))
    //   $ionicHistory.goBack();

    $scope.services = [

      {
        url: 'https://app.stex.com/en/trade/pair/BTC/SPK/1D',
        caption: 'STEX'
      },
      {
        url: 'https://www.southxchange.com/Market/Book/SPK/BTC',
        caption: 'SouthXchange'
      },
      {
        url: 'https://tradesatoshi.com/Exchange/?market=SPK_BTC',
        caption: 'TradeSatoshi'
      },
      {
        url: 'https://karsha.biz/',
        caption: 'Karsha'

      }
    ]
  });

  $scope.openMarket = function (url) {
    //$window.open(url, '_system');

    //var url = 'https://insight.sparkspay.io/insight/tx/' + transactionId;
    var optIn = true;
    var title = null;
    var message = gettextCatalog.getString('Buy SparksPay');
    var okText = gettextCatalog.getString('Open Platform');
    var cancelText = gettextCatalog.getString('Go Back');
    externalLinkService.open(url, optIn, title, message, okText, cancelText);


  };

});
