'use strict';

angular.module('pcoApp')
	.controller('pcoApp.controllers.authentication', ['$scope', 'authentication', '$location',
		function($scope, authentication, $location) {
			$scope.$on('angularFireAuth:login', function() {
				$location.path('/');
			});

			$scope.err = null;

			$scope.login = function() {
				$scope.err = null;
				authentication.login($scope.email, $scope.password);
				$location.path('/');
			};
			$scope.createUser = function() {
				$scope.err = null;
				if (!$scope.email) {
					$scope.err = '请输入email地址';
				} else if (!$scope.password) {
					$scope.err = '请输入密码';
				} else {
					authentication.createUser($scope.email, $scope.password, function(err, user) {
						if (!err) {
							console.log('create user success!');
							console.log('the user is :');
							console.log(user);
						} else {
							$scope.err = err;
						}
					});
				}
			};
		}
	]);