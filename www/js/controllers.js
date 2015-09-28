'use strict';

(function(){

  angular
    .module('mopconApp.controllers', [])
    .controller('appCtrl', ['$scope', 'getDataServ', 'appParam', appCtrl])
    .controller('sessionCtrl', ['$scope', 'getDataServ', 'appParam', sessionCtrl])
    .controller('sessionDetailCtrl', ['$scope', '$stateParams', 'getDataServ', 'appParam', sessionDetailCtrl])
    .controller('newsCtrl', ['$scope', 'getDataServ', 'appParam', newsCtrl])
    .controller('speakerCtrl', ['$scope', 'getDataServ', 'appParam', speakerCtrl])
    .controller('sponsorCtrl', ['$scope', 'getDataServ', 'appParam', sponsorCtrl])
    .controller('locationCtrl', ['$scope', 'getDataServ', 'appParam', locationCtrl])
    .controller('communityCtrl', ['$scope', 'getDataServ', 'appParam', communityCtrl]);

  function appCtrl($scope, getDataServ, appParam) {
    var vm = $scope;
    vm.menulists = [];
    getDataServ.refreshAllData().then(function(){
      var localMenu = getDataServ.getMenu();
      if(appParam.menulists === undefined){
        //TODO 異常
      }
      for(var key in localMenu){
        var item = localMenu[key];
        if(appParam.menulists[item] !== undefined)
        {
          vm.menulists.push({
            "url": item,
            "title": appParam.menulists[item]
          });
        }
      }
    });
  }
  function sessionCtrl($scope, getDataServ, appParam) {
    var vm = $scope;
    var sessionData = getDataServ.getCtrlData('session');
    
    vm.sessionData = sessionData;
  }
  function sessionDetailCtrl($stateParams, getDataServ, appParam) {
    var vm = $scope;
    var sessionData = getDataServ.getCtrlData('sessionDetail');
    vm.detail = {};
    if(sessionData["no"+$stateParams.id] !== undefined){
      vm.detail = sessionData["no"+$stateParams.id];
    }
  }
  function speakerCtrl($scope, getDataServ, appParam) {
    var vm = $scope;
    var key = "speaker";
    vm.title = appParam.menulists[key];
    vm.data = getDataServ.getCtrlData(key);
    vm.doRefresh = function() {
      getDataServ.refreshAllData().then(function() {
        // Stop the ion-refresher from spinning
        vm.title = appParam.menulists[key];
        vm.data = getDataServ.getCtrlData(key);
        vm.$broadcast('scroll.refreshComplete');
      });
    };
  }
  function newsCtrl($scope, getDataServ, appParam) {
    var vm = $scope;
  }
  function sponsorCtrl($scope, getDataServ, appParam) {
    var vm = $scope;
    var key = "sponsor";
    vm.title = appParam.menulists[key];
    vm.data = getDataServ.getCtrlData(key);
    vm.doRefresh = function() {
      getDataServ.refreshAllData().then(function() {
        // Stop the ion-refresher from spinning
        vm.title = appParam.menulists[key];
        vm.data = getDataServ.getCtrlData(key);
        vm.$broadcast('scroll.refreshComplete');
      });
    };
  }
  function locationCtrl($scope, getDataServ, appParam) {
    var vm = $scope;
    var key = "location";
    vm.title = appParam.menulists[key];
    vm.data = getDataServ.getCtrlData(key);
    vm.doRefresh = function() {
      getDataServ.refreshAllData().then(function() {
        // Stop the ion-refresher from spinning
        vm.title = appParam.menulists[key];
        vm.data = getDataServ.getCtrlData(key);
        vm.$broadcast('scroll.refreshComplete');
      });
    };
  }
  function communityCtrl($scope, getDataServ, appParam) {
    var vm = $scope;
    var key = "community";
    vm.title = appParam.menulists[key];
    vm.data = getDataServ.getCtrlData(key);
    vm.doRefresh = function() {
      getDataServ.refreshAllData().then(function() {
        // Stop the ion-refresher from spinning
        vm.title = appParam.menulists[key];
        vm.data = getDataServ.getCtrlData(key);
        vm.$broadcast('scroll.refreshComplete');
      });
    };
  }
})();
