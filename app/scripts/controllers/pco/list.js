'use strict';

angular.module('pcoApp')
	.controller('pcoApp.controllers.list', ['$scope', '$firebase', 'FireRefs', '$filter', 'print',
		function($scope, $firebase, FireRefs, $filter, print) {
			/*init*/
			$scope.pcoList = $firebase(FireRefs.pcoList());
			$scope.selected = print.list;
			$scope.language = 'cn';


			//refresh FilteredArray when search query changes
			//use $filter service to call filters in the controller
			$scope.$watch('$scope.q', function(newVal) {
				$scope.filteredArray = $filter('filter')($filter('orderByPriority')($scope.pcoList), newVal);
			});

			$scope.printCount = function() {
				var count = 0;
				for (var key in $scope.selected) {
					if ($scope.selected[key] === true) {
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
					$scope.selected[$scope.filteredArray[i].$id] = true;
				}
			};

			$scope.deSelectAll = function() {
				for (var i = $scope.filteredArray.length - 1; i >= 0; i--) {
					$scope.selected[$scope.filteredArray[i].$id] = false;
				}
			};

			//中英文切换
			$scope.translation = function() {
				var l = $scope.language;
				$scope.language = ((l === 'cn') ? 'en' : 'cn');
			};

			$scope.delete = function() {
				var deleteList = [];
				for (var key in $scope.selected) {
					if ($scope.selected[key]) {
						var deleteObjRef = FireRefs.pcoList().child(key);
						deleteList.push($firebase(deleteObjRef));
					}
				}
				FireRefs.delete(deleteList);
				$scope.deSelectAll();
			};

		}
	]);