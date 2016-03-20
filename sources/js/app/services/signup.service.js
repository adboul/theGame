(function(){
	'use strict'
	
	angular.module('theGame')
		.factory('SignupService', [
			'$q',
			'SignupResource',
			SignupResource
		]);

	function SignupResource($q, SignupResource) {

  		var user = {
  			isAuthenticated: false,
  			name: undefined
  		}
		
		return {
			signup: function(userInfo) {
				var p = $q.defer();
				SignupResource.signup(userInfo).$promise.then(function(data) {
					p.resolve(data);
				}, function(err) {
					p.reject(err);
				})
				return p.promise;
			}
		}  
	}

})();