'use strict';

angular.module('pcoApp.services.fireRefs', [])
	.factory('FireRefs', ['FBURL', 'Firebase', '$location',
		function(FBURL, Firebase, $location) {
			return {
				pcoList: function() {
					return new Firebase(FBURL + '/pco' + '/list');
				},
				pest: function() {
					return new Firebase(FBURL);
				},
				delete: function(refs) {
					if (angular.isArray(refs)) {
						for (var i = refs.length - 1; i >= 0; i--) {
							refs[i].$remove();
						}
					} else if (angular.isObject(refs)) {
						$location.path('/');
						refs.$remove();
					}
				}
			};
		}
	]);