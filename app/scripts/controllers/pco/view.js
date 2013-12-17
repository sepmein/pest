'use strict';

angular.module('pcoApp')
	.controller('pcoApp.controllers.view', ['$scope', '$routeParams', 'angularFire', 'FireRefs', '$location' , 
		function($scope, $routeParams, angularFire, FireRefs, $location) {
			var index = $routeParams.index;
			var ref = FireRefs.pcoList().child(index);
			
			//binding to firebase
			angularFire(ref.parent(), $scope, 'pcos');
			angularFire(ref.child('_id'), $scope, '_id');
			angularFire(ref.child('grade'), $scope, 'grade');
			angularFire(ref.child('validityDate'), $scope, 'validityDate');
			angularFire(ref.child('cn/address'), $scope, 'cnAddress');
			angularFire(ref.child('cn/artificialPerson'), $scope, 'cnArtificialPerson');
			angularFire(ref.child('cn/company'), $scope, 'cnCompany');
			angularFire(ref.child('cn/presentationDate'), $scope, 'cnPresentationDate');
			angularFire(ref.child('en/address'), $scope, 'enAddress');
			angularFire(ref.child('en/artificialPerson'), $scope, 'enArtificialPerson');
			angularFire(ref.child('en/company'), $scope, 'enCompany');
			angularFire(ref.child('en/presentationDate'), $scope, 'enPresentationDate');

			//delete
			$scope.delete = function(){
				ref.remove(function(){
					$location.path('#/pco/list');
				});
			}
		}
	]);