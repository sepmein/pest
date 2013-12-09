'use strict';

angular.module('pcoApp')
	.controller('pcoApp.controllers.main', ['$scope','angularFire', 'FBURL',
		function($scope, angularFire, FBURL) {
			$scope.awesomeThings = [
				'HTML5 Boilerplate',
				'AngularJS',
				'Karma'
			];
			angularFire(new Firebase(FBURL), $scope, 'hello');
		}
	]);