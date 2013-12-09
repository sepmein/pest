angular.module('pcoApp')
	.controller('pcoApp.controllers.view', ['$scope', '$routeParams', 'angularFire', 'FireRefs', 
		function($scope, $routeParams, angularFire, FireRefs) {
			var index = $routeParams.index;
			console.log(index);
			angularFire(FireRefs.pcoList().child(index), $scope, 'pco');
		}
	]);