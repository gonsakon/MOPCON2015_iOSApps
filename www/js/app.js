// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
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

        parsePlugin.initialize('xFSdZYgeLccz2aMVmezY6sc1ekmNO4fOR1DcQREo', 'PT8knZaSgHB7tBAVpUCGCTwr5PAuEOc8CIfwOp3S', function() {
            parsePlugin.subscribe('SampleChannel', function() {

                parsePlugin.getInstallationId(function(id) {
                    var install_data = {
                        installation_id: id,
                        channels: ['SampleChannel']
                    };

                }, function(e) {
                    alert('error');
                });

            }, function(e) {
                alert('error');
            });

        }, function(e) {
            alert('error');
        });
        parsePlugin.registerCallback('onNotification', function() {
            window.onNotification = function(pnObj) {

                // alert('We received this push notification: ' + JSON.stringify(pnObj));
                if (pnObj.receivedInForeground === false) {
                    // TODO: route the user to the uri in pnObj
                }
            };

        }, function(error) {
            console.error(error);

        });
    });

})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: 'AppCtrl'
    })

    .state('app.news', {
        url: "/news",
        views: {
            'menuContent': {
                templateUrl: "templates/news.html"
            }
        }
    }).state('app.map', {
            url: "/map",
            views: {
                'menuContent': {
                    templateUrl: "templates/map.html"
                }
            }
        })

    .state('app.speaker', {
            url: "/speaker",
            views: {
                'menuContent': {
                    templateUrl: "templates/speaker.html"
                }
            }
        })
        .state('app.agenda', {
            url: "/agenda",
            views: {
                'menuContent': {
                    templateUrl: "templates/agenda.html",
                    controller: 'agendaCtrl'
                }
            }
        })

    .state('app.single', {
        url: "/agenda/:id",
        views: {
            'menuContent': {
                templateUrl: "templates/agendaDdetail.html",
                controller: 'agendaDdetailCtrl'
            }
        }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/map');
});
