'use strict';

angular.module('pcoApp')
	.controller('pcoApp.controllers.list', ['$scope', '$firebase', 'FireRefs', '$filter', 'print',
		function($scope, $firebase, FireRefs, $filter, print) {
			/*init*/
			$scope.pcoList = $firebase(FireRefs.pcoList());
			$scope.printList = print.list;
			$scope.language = 'cn';


			//refresh FilteredArray when search query changes
			//use $filter service to call filters in the controller
			$scope.$watch('$scope.q', function(newVal) {
				$scope.filteredArray = $filter('filter')($filter('orderByPriority')($scope.pcoList), newVal);
			});

			$scope.printCount = function() {
				var count = 0;
				for (var key in $scope.printList) {
					if ($scope.printList[key] === true) {
						count++;
					}
				}
				return count;
			};

			/**
			 * print list structure
			 * {
			 *	id1 : true,
			 *	id3 : false,
			 *	...
			 * }
			 * ids comes from firebase pco.list.ids -> orderByPriority -> filteredArray
			 */
			$scope.selectAll = function() {
				for (var i = $scope.filteredArray.length - 1; i >= 0; i--) {
					$scope.printList[$scope.filteredArray[i].$id] = true;
				}
			};

			$scope.deSelectAll = function() {
				for (var i = $scope.filteredArray.length - 1; i >= 0; i--) {
					$scope.printList[$scope.filteredArray[i].$id] = false;
				}
			};

			//中英文切换
			$scope.translation = function() {
				var l = $scope.language;
				$scope.language = ((l === 'cn') ? 'en' : 'cn');
			};

		}
	]);