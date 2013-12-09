'use strict';

angular.module('pcoApp')
	.controller('pcoApp.controllers.header', ['$scope', 'authentication', 'FBURL', 'angularFire', '$rootScope',
		function($scope, authentication, FBURL, angularFire, $rootScope) {
			$scope.logout = function() {
				authentication.logout();
			};


			$scope.$on('angularFireAuth:login', function() {
				$scope.userEmail = $rootScope.auth.email;

				//angularFire(new Firebase(FBURL + '/users/' + $scope.auth.id), $scope, 'user');
			});

		}
	]);