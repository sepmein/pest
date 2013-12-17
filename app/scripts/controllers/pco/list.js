'use strict';

angular.module('pcoApp')
	.controller('pcoApp.controllers.list', ['$scope', 'angularFire', 'FireRefs',
		function($scope, angularFire, FireRefs) {
			//bind to firebase database
			angularFire(FireRefs.pcoList(), $scope, 'list');

			//中英文切换
			$scope.language = 'cn';
			$scope.translation = function() {
				var l = $scope.language;
				$scope.language = ((l === 'cn') ? 'en' : 'cn');
			};

		}
	]);