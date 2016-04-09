'use strict';

/**
 * @ngdoc overview
 * @name guarderiaApp
 * @description
 * # guarderiaApp
 *
 * Main module of the application.
 */
angular
  .module('guarderiaApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/configuration-server', {
        templateUrl: 'views/configuration-server.html',
        controller: 'ConfigurationServerCtrl',
        controllerAs: 'configurationServer'
      })
      .when('/configuration-device', {
        templateUrl: 'views/configuration-device.html',
        controller: 'ConfigurationDeviceCtrl',
        controllerAs: 'configurationDevice'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        //app.receivedEvent('deviceready');
        console.log('-------------onDeviceReady-------------');
    },
};

app.initialize();