angular.module('---module---')
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/common/menu.html',
    controller: 'AppCtrl'
  })

 .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'templates/common/login.html',
          controller: 'LoginCtrl'
        }
      }
    })
    .state('app.dashboard', {
      url: '/dashboard',
      views: {
        'menuContent': {
          templateUrl: 'templates/common/dashboard.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
