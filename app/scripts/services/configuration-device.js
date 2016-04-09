'use strict';

/**
 * @ngdoc service
 * @name guarderiaApp.configurationDevice
 * @description
 * # configurationDevice
 * Service in the guarderiaApp.
 */
angular.module('guarderiaApp')
  .service('configurationDevice', function ( configurationServer, $http ) {
  	
  	var STRING_GET_ALL = '/devices';
  	var STRING_GET_TEMPERATURE = '/device/temperature/';

  	var data = {};
  	data.data = null;

  	function getElementById( id ) {
  		if (  data.data ){
  			return _.find(data.data, function( o ) { return o.id == id; });
  		}
  		return null;
  	}

  	data.getAllDevices = function () {
  		var uri = configurationServer.getUri() + STRING_GET_ALL;
  		console.log( 'URI to get devices: ' + uri );
  		$http.get( uri ).then( function( response ) {
  			data.data = response.data;
  		});
  	};

  	data.getTemperature = function ( id ) {
  		var uri = configurationServer.getUri() + STRING_GET_TEMPERATURE + id;
  		console.log( 'URI to get device temperature: ' + uri );
  		$http.get( uri ).then( function( response ) {
  			var element = getElementById( id );
  			element.temperature = response.data;
  		});
  	};

  	return data;
  
  });
