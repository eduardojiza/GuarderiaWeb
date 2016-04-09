'use strict';

describe('Controller: ConfigurationDeviceCtrl', function () {

  // load the controller's module
  beforeEach(module('guarderiaApp'));

  var ConfigurationDeviceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConfigurationDeviceCtrl = $controller('ConfigurationDeviceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ConfigurationDeviceCtrl.awesomeThings.length).toBe(3);
  });
});
