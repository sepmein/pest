'use strict';

angular.module('pcoApp')
	.controller('pcoApp.controllers.list', ['$scope', '$firebase', 'FireRefs',
		function($scope, $firebase, FireRefs) {
			//bind to firebase database
			$scope.pcoList = $firebase(FireRefs.pcoList());

			//中英文切换
			$scope.language = 'cn';
			$scope.translation = function() {
				var l = $scope.language;
				$scope.language = ((l === 'cn') ? 'en' : 'cn');
			};

		}
	]);