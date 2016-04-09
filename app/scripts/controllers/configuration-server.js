'use strict';

/**
 * @ngdoc function
 * @name guarderiaApp.controller:ConfigurationServerCtrl
 * @description
 * # ConfigurationServerCtrl
 * Controller of the guarderiaApp
 */
angular.module('guarderiaApp')
  .controller('ConfigurationServerCtrl', function ($scope, configurationServer) {

  	$scope.address = "";
  	$scope.transport = "";

  	function init() {
  		console.log( "There is Configuration ? " + configurationServer.thereIsConfiguration() );
  		if ( configurationServer.thereIsConfiguration() ) {
		  	$scope.address = configurationServer.address;
		  	$scope.transport = configurationServer.transport;  			
  		} 
  	}

  	$scope.apply = function() {
		configurationServer.address = $scope.address;
		configurationServer.transport = $scope.transport;  
		console.log( "Base URI: " + configurationServer.getUri() );		
  	}

  	init();
  });
