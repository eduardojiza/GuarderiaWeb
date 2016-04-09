'use strict';

/**
 * @ngdoc function
 * @name guarderiaApp.controller:ConfigurationDeviceCtrl
 * @description
 * # ConfigurationDeviceCtrl
 * Controller of the guarderiaApp
 */
angular.module('guarderiaApp')
  .controller('ConfigurationDeviceCtrl', function ( $scope, configurationServer, $interval, configurationDevice ) {

  	$scope.devices = configurationDevice.data ? configurationDevice.data : [];

  	$scope.check = function( id ) {
  		console.log ( configurationDevice.getTemperature( id ) );
  	}
  });
