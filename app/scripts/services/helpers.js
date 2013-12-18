'use strict';

angular.module('pcoApp.services.helpers', [])
	.factory('helpers', [

		function() {
			return {
				loopThroughObjects: function loopThroughObjects(obj, cb) {
					//could use JSON.stingify to replace this function
					for (var key in obj) {
						if (typeof obj[key] === 'object' && obj[key] !== null && obj.hasOwnProperty(key)) {
							loopThroughObjects(obj[key]);
						} else {
							//well it's not easy to output the values
							cb(obj[key]);
						}
					}
				},
				insertionSort: function insertionSort(A, cb) {
					//imported from jsAlgorithms
					for (var j = 1; j < A.length; j++) {
						var key = A[j];
						//Insert A[j] into the sorted sequence A[1..j-1].
						var i = j - 1;
						while (i >= 0 && A[i] > key) {
							A[i + 1] = A[i];
							i--;
						}
						A[i + 1] = key;
					}
					cb(A);
				}
			};
		}
	]);