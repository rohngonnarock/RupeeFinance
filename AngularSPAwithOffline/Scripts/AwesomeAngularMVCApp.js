var AwesomeAngularMVCApp = angular.module('AwesomeAngularMVCApp', ['ui.router', 'ui.bootstrap']);

AwesomeAngularMVCApp.controller('LandingPageController', LandingPageController);
AwesomeAngularMVCApp.controller('LoginController', LoginController);
AwesomeAngularMVCApp.controller('RegisterController', RegisterController);
AwesomeAngularMVCApp.controller('MoneyDataController', MoneyDataController);

AwesomeAngularMVCApp.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
AwesomeAngularMVCApp.factory('LoginFactory', LoginFactory);
AwesomeAngularMVCApp.factory('RegistrationFactory', RegistrationFactory);

var configFunction = function ($stateProvider, $httpProvider, $locationProvider) {

    $locationProvider.hashPrefix('!').html5Mode({
        enabled: true,
        requireBase: false
    });

    $stateProvider
        .state('stateOne', {
            url: '/stateOne',
            views: {
                "containerOne": {
                    templateUrl: '/routesDemo/one',
                    controller: MoneyDataController
                }
            }
        })
        .state('stateTwo', {
            url: '/stateTwo',
            views: {
                "containerOne": {
                    templateUrl: '/routesDemo/one'
                },
                "containerTwo": {
                    templateUrl: '/routesDemo/three'
                }
            }
        })
        .state('stateThree', {
            url: '/stateThree',
            views: {
               "containerTwo": {
                    templateUrl: '/routesDemo/three'
                }
            }
        })
        .state('loginRegister', {
            url: '/loginRegister?returnUrl',
            views: {
                "containerOne": {
                    templateUrl: '/Account/Login',
                    controller: LoginController
                },
                "containerTwo": {
                    templateUrl: '/Account/Register',
                    controller: RegisterController
                }
            }
        });

    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}
configFunction.$inject = ['$stateProvider', '$httpProvider', '$locationProvider'];

AwesomeAngularMVCApp.config(configFunction);
