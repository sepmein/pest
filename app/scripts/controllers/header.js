'use strict';

angular.module('pcoApp')
	.controller('pcoApp.controllers.header', ['$scope', 'authentication', 'FBURL', '$rootScope',
		function($scope, authentication, FBURL, $rootScope) {

			$scope.$on('$firebaseSimpleLogin:login', function() {
				$scope.userEmail = $rootScope.auth.user.email;
			});

		}
	]);