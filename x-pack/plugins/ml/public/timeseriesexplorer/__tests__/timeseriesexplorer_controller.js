/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */



import ngMock from 'ng_mock';
import expect from 'expect.js';

describe('ML - Time Series Explorer Controller', () => {
  beforeEach(() => {
    ngMock.module('kibana');
  });

  it('Initialize Time Series Explorer Controller', (done) => {
    ngMock.inject(function ($rootScope, $controller) {
      const scope = $rootScope.$new();
      $controller('MlTimeSeriesExplorerController', { $scope: scope });

      expect(scope.timeFieldName).to.eql('timestamp');
      done();
    });
  });
});
