'use strict';

describe('Service: configurationServer', function () {

  // load the service's module
  beforeEach(module('guarderiaApp'));

  // instantiate service
  var configurationServer;
  beforeEach(inject(function (_configurationServer_) {
    configurationServer = _configurationServer_;
  }));

  it('should do something', function () {
    expect(!!configurationServer).toBe(true);
  });

});
