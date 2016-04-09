'use strict';

/**
 * @ngdoc function
 * @name guarderiaApp.controller:ConfigurationDeviceCtrl
 * @description
 * # ConfigurationDeviceCtrl
 * Controller of the guarderiaApp
 */
angular.module('guarderiaApp')
  .controller('ConfigurationDeviceCtrl', function ($scope, configurationDevice) {

  	$scope.devices = [
  		{
  			name: 'device1',
  			id: '10001'
  		}, {
  			name: 'device2',
  			id: '10002'
  		}, {
  			name: 'device3',
  			id: '10003'
  		}
  	];

  	$scope.delete = function( id ) {
  		console.log( id );
  	}
  });
