'use strict';

describe('Controller: ConfigurationServerCtrl', function () {

  // load the controller's module
  beforeEach(module('guarderiaApp'));

  var ConfigurationServerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConfigurationServerCtrl = $controller('ConfigurationServerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ConfigurationServerCtrl.awesomeThings.length).toBe(3);
  });
});
