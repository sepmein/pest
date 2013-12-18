'use strict';

angular.module('pcoApp')
	.controller('pcoApp.controllers.view', ['$scope', '$routeParams', '$firebase', 'FireRefs', '$location',
		function($scope, $routeParams, $firebase, FireRefs, $location) {
			var index = $routeParams.index;
			var ref = FireRefs.pcoList().child(index);

			//binding to firebase
			$firebase(ref.parent()).$bind($scope, 'pcos');
			$firebase(ref.child('_id')).$bind($scope, '_id');
			$firebase(ref.child('grade')).$bind($scope, 'grade');
			$firebase(ref.child('validityDate')).$bind($scope, 'validityDate');
			$firebase(ref.child('cn/address')).$bind($scope, 'cnAddress');
			$firebase(ref.child('cn/artificialPerson')).$bind($scope, 'cnArtificialPerson');
			$firebase(ref.child('cn/company')).$bind($scope, 'cnCompany');
			$firebase(ref.child('cn/presentationDate')).$bind($scope, 'cnPresentationDate');
			$firebase(ref.child('en/address')).$bind($scope, 'enAddress');
			$firebase(ref.child('en/artificialPerson')).$bind($scope, 'enArtificialPerson');
			$firebase(ref.child('en/company')).$bind($scope, 'enCompany');
			$firebase(ref.child('en/presentationDate')).$bind($scope, 'enPresentationDate');

			//delete
			$scope.delete = function() {
				ref.remove(function() {
					//doesn't work
					$location.path('#/pco/list');
					$scope.$apply();
				});
			}
		}
	]);