'use strict';

angular.module('pcoApp')
	.filter('search', function() {
		return function(object, searchingText) {
			//search type must be object
			if (object !== null && searchingText) {
				var result = {},
					trimedSearchingText = searchingText.toString().trim();
				//checking for matches
				for (var key in object) {
					var testResult = JSON.stringify(object[key]).match(trimedSearchingText);
					if (testResult) {
						result[key] = object[key];
					}
				}
				return result;
			} else {
				return object;
			}
		};
	});