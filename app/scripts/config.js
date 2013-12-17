'use strict';

angular.module('pcoApp.config', []);

app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'pcoApp.controllers.main'
			})
			.when('/login', {
				templateUrl: 'views/auth.html'
			})
			.when('/signup', {
				templateUrl: 'views/auth.html'
			})
			.when('/pco', {
				templateUrl: 'views/pco/list.html',
				authRequired: true
			})
			.when('/pco/new', {
				templateUrl: 'views/pco/new.html',
				authRequired: true
			})
			.when('/pco/:index', {
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

//TODO: understand angularFireAuth services
.run(['angularFireAuth', 'FBURL', '$rootScope',
	function(angularFireAuth, FBURL, $rootScope) {
		angularFireAuth.initialize(new Firebase(FBURL), {
			scope: $rootScope,
			name: 'auth',
			path: '/login'
		});
		$rootScope.FBURL = FBURL;
	}
]);