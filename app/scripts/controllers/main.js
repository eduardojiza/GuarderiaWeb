'use strict';

/**
 * @ngdoc function
 * @name guarderiaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the guarderiaApp
 */
angular.module('guarderiaApp')
  .controller('MainCtrl', function ($scope, growl, configurationServer, configurationDevice, $timeout, $interval) {

  	var INTERVAL = 10000;
  	var MAX_TEMP = 36.5;

  	function callAtTimeout() {
		if( configurationDevice.data ) {
		  	growl.success("Configuracion cargada con exito");
		  	$interval(function() {
		  		configurationDevice.data.forEach( function ( element ) {
		  			configurationDevice.getTemperature( element.id );
		  		} );
		  		configurationDevice.data.forEach( function ( element ) {
		  			if ( element.temperature < MAX_TEMP ) {
		  				growl.error("Exceso de temperatura en: " + element.name ); 
		  			}
		  		} );
		  	}, INTERVAL);
		} else {
	  		growl.error("Error carga dispositivos"); 
	  	}
  	}

  	$scope.ok = function (){
  		console.log( "There is Configuration ? " + configurationServer.thereIsConfiguration() );
  		if ( configurationServer.thereIsConfiguration() ) {
		  	$scope.address = configurationServer.address;
		  	$scope.transport = configurationServer.transport;
		  	configurationDevice.getAllDevices();
		  	$timeout( callAtTimeout, 3000 );
  		} else {
  			growl.error("Establecer configuracion"); 
  		}
  	}
  });
