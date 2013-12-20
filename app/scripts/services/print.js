'use strict';

angular.module('pcoApp.services.print', [])
	.factory('print', [
		function() {
			var list = {};
			return {
				list: list
			};
		}
	]);