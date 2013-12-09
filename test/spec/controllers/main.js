'use strict';

describe('Controller: pcoApp.controllers.main', function () {

  // load the controller's module
  beforeEach(module('pcoApp'));

  var pcoApp.controllers.main,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    pcoApp.controllers.main = $controller('pcoApp.controllers.main', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
