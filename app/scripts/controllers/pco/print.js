'use strict';

angular.module('pcoApp')
	.controller('pcoApp.controllers.print', ['$scope', 'print', '$firebase', 'FireRefs',
		function($scope, print, $firebase, FireRefs) {
			$scope.printList = print.list;
			$scope.toPrint = {};
			for (var key in $scope.printList) {
				if ($scope.printList[key] === true) {
					//bind toPrint.key to Firebase datas
					$scope.toPrint[key] = $firebase(FireRefs.pcoList().child(key));
				}
			}

			$scope.noneSelectWarning = function(){
				
			}
		}
	]);