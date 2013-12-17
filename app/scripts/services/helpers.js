'use strict';

angular.module('pcoApp.services.helpers', [])
	.factory('helpers', [

		function() {
			return {
				loopThroughObjects: function loopThroughObjects(obj) {
					//could use JSON.stingify to replace this function

					for (var key in obj) {
						if (typeof obj[key] === 'object' && obj[key] !== null && obj.hasOwnProperty(key)) {
							loopThroughObjects(obj[key]);
						} else {
							//well it's not easy to output the values
							console.log(obj[key]);
						}
					}

				}
			};
		}
	]);