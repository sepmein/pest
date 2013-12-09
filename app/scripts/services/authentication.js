'use strict';

/*provide authentication services for pco app*/

angular.module('pcoApp.services.authentication',[])
	.factory('authentication', ['angularFireAuth',
		function(angularFireAuth) {
			return {
				login: function(email, password, rememberMe) {
					angularFireAuth.login('password', {
						email: email,
						password: password,
						rememberMe: rememberMe
					});
				},
				logout: function() {
					angularFireAuth.logout();
				},
				createUser: function(email, password, cb) {
					angularFireAuth.createUser(email, password, cb);
				}
			};
		}
	]);