'use strict';

/*provide authentication services for pco app*/

angular.module('pcoApp.services.authentication',[])
	.factory('authentication', ['$firebaseAuth', 'FireRefs', '$rootScope',
		function($firebaseAuth, FireRefs, $rootScope) {
			var auth = $rootScope.auth;

			return {
				login: function(email, password, rememberMe) {
					auth.$login('password', {
						email: email,
						password: password,
						rememberMe: rememberMe
					}).then(function(user){
						auth.user = user;
					});
				},
				logout: function() {
					auth.$logout();
				},
				createUser: function(email, password, cb) {
					auth.$createUser(email, password, cb);
				}
			};
		}
	]);