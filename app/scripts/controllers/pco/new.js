'use strict';

angular.module('pcoApp')
	.controller('pcoApp.controllers.new', ['$scope', 'FireRefs', '$location',
		function($scope, FireRefs, $location) {

			$scope.newBtnState = '确认新建';

			var pcoListRef = FireRefs.pcoList();
			$scope.new = function() {

				if ($scope.newPcoForm.$valid) {
					//set button to loading state
					$('#newBtn').button('loading');

					//construct data
					$scope.newPco = {
						'_id': $scope._id,
						'grade': $scope.grade,
						'validityDate': $scope.validityDate,
						'cn': {
							address: $scope.cnAddress,
							artificialPerson: $scope.cnArtificialPerson,
							company: $scope.cnCompany,
							presentationDate: $scope.cnPresentationDate,
						},
						'en': {
							address: $scope.enAddress,
							artificialPerson: $scope.enArtificialPerson,
							company: $scope.enCompany,
							presentationDate: $scope.enPresentationDate,
						}
					};
					//reference to the push fburl
					var pushRef = pcoListRef.push();
					$scope.uniquePushId = pushRef.name();
					pushRef.set($scope.newPco, function(err) {
						//set btn to end state
						$scope.newBtnState = '已新建';
						//show the next step functions
						$scope.added = true;
						//safe apply
						if (!$scope.$$phase) {
							$scope.$apply();
						}
					});
				}

			};

			$scope.clear = function() {
				$scope._id = null;
				$scope.grade = null;
				$scope.validityDate = null;
				$scope.cnAddress = null;
				$scope.cnArtificialPerson = null;
				$scope.cnCompany = null;
				$scope.cnPresentationDate = null;
				$scope.enAddress = null;
				$scope.enArtificialPerson = null;
				$scope.enCompany = null;
				$scope.enPresentationDate = null;
				$scope.added = !$scope.added;

				//enable the btn
				$scope.newBtnState = "确认新建";
				$('#newBtn').removeClass('disabled');
				$('#newBtn').removeAttr('disabled');
			}
		}
	]);