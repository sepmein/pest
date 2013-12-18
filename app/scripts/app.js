'use strict';

var app = angular.module('pcoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'pcoApp.config',
  'pcoApp.services.authentication',
  'pcoApp.services.fireRefs',
  'pcoApp.services.helpers',
  'firebase'
]);