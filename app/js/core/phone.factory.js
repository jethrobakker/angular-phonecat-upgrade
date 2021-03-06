System.register([], function(exports_1) {
    function Phone($resource) {
        return $resource('phones/:phoneId.json', {}, {
            query: { method: 'GET', params: { phoneId: 'phones' }, isArray: true }
        });
    }
    return {
        setters:[],
        execute: function() {
            Phone.$inject = ['$resource'];
            exports_1("default",Phone);
        }
    }
});
/*
Previously, in js/services.js

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);
*/ 
//# sourceMappingURL=phone.factory.js.map