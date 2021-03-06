import {Observable} from 'rxjs';
import {describe, beforeEach, it} from 'angular2/testing';
import '../../app/js/phone_list/phone_list.module';
import {Phones} from '../../app/js/core/Phones';
import {FromObservable} from 'rxjs/observable/from';
describe('PhoneListCtrl', function(){
  var scope, ctrl, $httpBackend;
  beforeEach(angular.mock.module('phonecat.list'));
  // Supply a hand-instantianted instance of the Phones service
  beforeEach(angular.mock.module(function($provide) {
    $provide.factory('phones', function() {
      return new Phones(null);
    });
  }));
  beforeEach(inject(function(phones, $rootScope, $controller) {
    spyOn(phones, 'query').and.returnValue(FromObservable.create([
      [{name: 'Nexus S'}, {name: 'Motorola DROID'}]
    ]));
    scope = $rootScope.$new();
    ctrl = $controller('PhoneListCtrl', {$scope: scope});
  }));
  it('should create "phones" model with 2 phones fetched from xhr', function() {
    expect(ctrl.phones).toEqual(
        [{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
  });
  it('should set the default value of orderProp model', function() {
    expect(ctrl.orderProp).toBe('age');
  });
});

/*
'use strict';
import '../../app/js/phone_list/phone_list.module';

describe('PhoneListCtrl', function(){
  var ctrl, $httpBackend;

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('phonecat.list'));

  beforeEach(inject(function(_$httpBackend_, $controller) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('phones/phones.json').
        respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

    ctrl = $controller('PhoneListCtrl');
  }));

  it('should create "phones" model with 2 phones fetched from xhr', function() {
    expect(ctrl.phones).toEqualData([]);
    $httpBackend.flush();

    expect(ctrl.phones).toEqualData(
        [{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
  });

  it('should set the default value of orderProp model', function() {
    expect(ctrl.orderProp).toBe('age');
  });
});
*/