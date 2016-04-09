'use strict';

/**
 * @ngdoc function
 * @name guarderiaApp.controller:ConfigurationServerCtrl
 * @description
 * # ConfigurationServerCtrl
 * Controller of the guarderiaApp
 */
angular.module('guarderiaApp')
  .controller('ConfigurationServerCtrl', function ($scope, configurationDevice) {

  	$scope.address = "";
  	$scope.transport = "";

  	function init() {
  		console.log( "There is Configuration ? " + configurationDevice.thereIsConfiguration() );
  		if ( configurationDevice.thereIsConfiguration() ) {
		  	$scope.address = configurationDevice.address;
		  	$scope.transport = configurationDevice.transport;  			
  		} 
  	}

  	$scope.apply = function() {
		configurationDevice.address = $scope.address;
		configurationDevice.transport = $scope.transport;  
		console.log( "Base URI: " + configurationDevice.getUri() );		
  	}

  	init();
  });
