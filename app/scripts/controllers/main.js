'use strict';

angular.module('pcoApp')
	.controller('pcoApp.controllers.main', ['$scope',
		function($scope) {
			$scope.awesomeThings = [
				'HTML5 Boilerplate',
				'AngularJS',
				'Karma'
			];
		}
	]);