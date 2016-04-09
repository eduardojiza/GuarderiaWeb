'use strict';

/**
 * @ngdoc service
 * @name guarderiaApp.configurationServer
 * @description
 * # configurationServer
 * Service in the guarderiaApp.
 */
angular.module('guarderiaApp')
  .service('configurationServer', function () {
  	var data = {};
  	data.address = "";
  	data.transport = "";

  	data.thereIsConfiguration = function() {
  		if ( data.address ) {
  			return true;
  		}
  		return false;
  	}

  	data.getUri = function( value = "" ){
  		return this.address + this.transport + value;
  	}

  	return data;
  });
