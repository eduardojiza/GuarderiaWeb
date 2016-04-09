'use strict';

describe('Service: remoteDevices', function () {

  // load the service's module
  beforeEach(module('guarderiaApp'));

  // instantiate service
  var remoteDevices;
  beforeEach(inject(function (_remoteDevices_) {
    remoteDevices = _remoteDevices_;
  }));

  it('should do something', function () {
    expect(!!remoteDevices).toBe(true);
  });

});
