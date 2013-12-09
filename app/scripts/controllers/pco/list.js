'use strict';

angular.module('pcoApp')
	.controller('pcoApp.controllers.list', ['$scope', 'angularFire', 'FBURL',
		function($scope, angularFire, FBURL) {
			//bind to firebase database
			angularFire(new Firebase(FBURL + '/pco/list'), $scope, 'list');

			//中英文切换
			$scope.language = 'cn';
			$scope.translation = function() {
				var l = $scope.language;
				$scope.language = ((l === 'cn') ? 'en' : 'cn');
			};

		}
	]);