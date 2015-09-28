'use strict';
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
(function(){

  angular
    .module('mopconApp', ['ionic', 'mopconApp.controllers', 'mopconApp.services', 'mopconApp.values'])
    .config(['$stateProvider', '$urlRouterProvider', 'appParam', appConfigFn])
    .run(['$ionicPlatform', appRunFn]);

  function appConfigFn($stateProvider, $urlRouterProvider, appParam) {
    $stateProvider
      .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: 'appCtrl'
      })
      .state('app.sessionDetail', {
        url: "/session/:id",
        views: {
          'menuContent': {
            templateUrl: "templates/sessionDetail.html",
            controller: 'sessionDetailCtrl'
          }
        }
      });
    for(var key in appParam.menulists)
    {
      if(key == 'app') { //以防萬一
        continue;
      }
      $stateProvider.state('app.'+key, {
        cache: false,
        url: "/"+key,
        views: {
          'menuContent': {
            templateUrl: "templates/"+key+".html",
            controller: key+'Ctrl'
          }
        }
      });
     

    }
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/location');
  }

  function appRunFn($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  }
})();
  
