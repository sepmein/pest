'use strict';

angular.module('pcoApp')
	.controller('pcoApp.controllers.list', ['$scope', '$firebase', 'FireRefs', 'orderByPriorityFilter', 'filterFilter', 'print',
		function($scope, $firebase, FireRefs, orderByPriorityFilter, filterFilter, print) {
			//bind to firebase database
			$scope.pcoList = $firebase(FireRefs.pcoList());

			var filteredArray = filterFilter(orderByPriorityFilter($scope.pcoList), $scope.q);

			//tri-state : none／part／all
			// select = 1 && unselected = 1   =>    part
			// select = 1 && unselected = 0   =>    all
			// select = 0 && unselected = 1   =>    none
			$scope.printList = print.list;

			$scope.printCount = function() {
				var count = 0;
				for (var key in $scope.printList) {
					if ($scope.printList[key] === true) {
						count++;
					}
				}
				return count;
			};
			/*			$scope.changeTriStateSelectBoxState = function() {
				$scope.printList.state.selected = 0;
				$scope.printList.state.unselected = 0;
				for (var pco in $scope.pcoList) {
					//只要列表中有选中的，那有选中的状态为true
					$scope.printList.state.selected = $scope.printList.state.selected || $scope.printList[pco];
					//只要列表中有未选中的，那未选中的状态为true
					$scope.printList.state.unselected = $scope.printList.state.unselected || !$scope.printList[pco];
				}
				//只要有为选中的，那总选择为false
				$scope.printList.state.unselected ? $scope.triStateSelectBox = false : $scope.triStateSelectBox = true;
			};

			$scope.triStateSelect = function() {
				//若有未选中的，则全选，否则全部取消
				if ($scope.printList.state.selected && $scope.printList.state.unselected) {
					for (var key in $scope.pcoList) {
						$scope.printList[key] = true;
					}
				} else {
					for (var key in $scope.pcoList) {
						$scope.printList[key] = false;
					}
				}
			};*/

			//中英文切换
			$scope.language = 'cn';
			$scope.translation = function() {
				var l = $scope.language;
				$scope.language = ((l === 'cn') ? 'en' : 'cn');
			};

		}
	]);