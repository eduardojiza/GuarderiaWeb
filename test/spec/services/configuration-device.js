'use strict';

describe('Service: configurationDevice', function () {

  // load the service's module
  beforeEach(module('guarderiaApp'));

  // instantiate service
  var configurationDevice;
  beforeEach(inject(function (_configurationDevice_) {
    configurationDevice = _configurationDevice_;
  }));

  it('should do something', function () {
    expect(!!configurationDevice).toBe(true);
  });

});
