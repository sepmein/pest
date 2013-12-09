'use strict';

angular.module('pcoApp.services.fireRefs', [])
	.factory('FireRefs', ['FBURL', 'Firebase',
		function(FBURL, Firebase) {
			return {
				pcoList: function() {
					return new Firebase(FBURL + '/pco' + '/list');
				}
			};
		}
	]);