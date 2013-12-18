'use strict';

angular.module('pcoApp')
	.controller('pcoApp.controllers.header', ['$scope', 'authentication', 'FBURL', '$rootScope',
		function($scope, authentication, FBURL, $rootScope) {

			$scope.$on('$firebaseAuth:login', function() {
				$scope.userEmail = $rootScope.auth.user.email;

				//angularFire(new Firebase(FBURL + '/users/' + $scope.auth.id), $scope, 'user');
			});

		}
	]);