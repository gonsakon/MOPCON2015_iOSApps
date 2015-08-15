angular.module('starter.controllers', [])
  .controller('appCtrl', function($scope,getDataServ) {
    getDataServ.refreshAllData().then(function(){
      $scope.menulists = [];
      var localMenu = getDataServ.getMenu();
      if(app.customConfig.menulists === undefined){
        //TODO 異常
      }
      for(key in localMenu){
        var item = localMenu[key];
        if(app.customConfig.menulists[item] !== undefined)
        {
          $scope.menulists.push({
            "url": item,
            "title": app.customConfig.menulists[item]
          });
        }
      }
    });
  })
  .controller('sessionCtrl', function($scope, getDataServ) {
    var sessionData = getDataServ.getCtrlData('session');
    $scope.sessionData = sessionData;
  })
  .controller('sessionDetailCtrl', function($scope, $stateParams, getDataServ) {
    var sessionData = getDataServ.getCtrlData('sessionDetail');
    $scope.detail = {};
    if(sessionData["no"+$stateParams.id] !== undefined){
      $scope.detail = sessionData["no"+$stateParams.id];
    }
  })
  .controller('newsCtrl', function($scope, getDataServ) {

  })
  .controller('speakerCtrl', function($scope, getDataServ) {
    var key = "speaker";
    $scope.title = app.customConfig.menulists[key];
    $scope.data = getDataServ.getCtrlData(key);
    $scope.doRefresh = function() {
      getDataServ.refreshAllData().then(function() {
        // Stop the ion-refresher from spinning
        $scope.title = app.customConfig.menulists[key];
        $scope.data = getDataServ.getCtrlData(key);
        $scope.$broadcast('scroll.refreshComplete');
      });
    };
  })
  .controller('sponsorCtrl', function($scope, getDataServ) {
    var key = "sponsor";
    $scope.title = app.customConfig.menulists[key];
    $scope.data = getDataServ.getCtrlData(key);
    $scope.doRefresh = function() {
      getDataServ.refreshAllData().then(function() {
        // Stop the ion-refresher from spinning
        $scope.title = app.customConfig.menulists[key];
        $scope.data = getDataServ.getCtrlData(key);
        $scope.$broadcast('scroll.refreshComplete');
      });
    };
  })
  .controller('locationCtrl', function($scope, getDataServ) {
    var key = "location";
    $scope.title = app.customConfig.menulists[key];
    $scope.data = getDataServ.getCtrlData(key);
    $scope.doRefresh = function() {
      getDataServ.refreshAllData().then(function() {
        // Stop the ion-refresher from spinning
        $scope.title = app.customConfig.menulists[key];
        $scope.data = getDataServ.getCtrlData(key);
        $scope.$broadcast('scroll.refreshComplete');
      });
    };
  })
  .controller('communityCtrl', function($scope, getDataServ) {
    var key = "community";
    $scope.title = app.customConfig.menulists[key];
    $scope.data = getDataServ.getCtrlData(key);
    $scope.doRefresh = function() {
      getDataServ.refreshAllData().then(function() {
        // Stop the ion-refresher from spinning
        $scope.title = app.customConfig.menulists[key];
        $scope.data = getDataServ.getCtrlData(key);
        $scope.$broadcast('scroll.refreshComplete');
      });
    };
  });
