'use strict';

angular.module('pcoApp.config', []);

app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
			.when('/login', {
				templateUrl: 'views/auth.html'
			})
			.when('/signup', {
				templateUrl: 'views/auth.html'
			})
			.when('/', {
				templateUrl: 'views/pco/list.html',
				authRequired: true
			})
			.when('/new', {
				templateUrl: 'views/pco/new.html',
				authRequired: true
			})
			.when('/print', {
				templateUrl: 'views/pco/print.html',
				authRequired: true
			})
			.when('/:index', {
				templateUrl: 'views/pco/view.html',
				authRequired: true
			})
			.otherwise({
				redirectTo: '/'
			});
	}
])

//firebase url as FBURL
.constant('FBURL', 'https://pest.firebaseio.com')

.run(['$firebaseAuth', 'FBURL', '$rootScope',
	function($firebaseAuth, FBURL, $rootScope) {
		$rootScope.auth = $firebaseAuth(new Firebase(FBURL), {
			simple: true,
			path: '/login',
			callback: function() {
				//null for now
			}
		});
	}
]);