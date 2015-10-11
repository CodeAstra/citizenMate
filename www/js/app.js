// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl as dash'
      }
    }
  })

  .state('tab.officials', {
      url: '/officials',
      views: {
        'tab-officials': {
          templateUrl: 'templates/officials/tab-officials.html',
          controller: 'OfficialsCtrl as officials'
        }
      }
    })
    .state('tab.officials-list', {
      url: '/officials-list/:groupId',
      views: {
        'tab-officials': {
          templateUrl: 'templates/officials/tab-officials-list.html',
          controller: 'OfficialsListCtrl as officialsList'
        }
      }
    })
    .state('tab.official-detail', {
      url: '/officials/:officialId',
      views: {
        'tab-officials': {
          templateUrl: 'templates/officials/official-detail.html',
          controller: 'OfficialDetailCtrl as officialDetail'
        }
      }
    })

  .state('tab.categories', {
      url: '/categories',
      views: {
        'tab-categories': {
          templateUrl: 'templates/categories/tab-categories.html',
          controller: 'CategoriesCtrl as categories'
        }
      }
    })
    .state('tab.category-detail', {
      url: '/categories/:categoryId',
      views: {
        'tab-categories': {
          templateUrl: 'templates/categories/category-detail.html',
          controller: 'CategoryDetailCtrl as categoryDetail'
        }
      }
    })

  .state('tab.votes', {
      url: '/votes',
      views: {
        'tab-votes': {
          templateUrl: 'templates/votes/tab-votes.html',
          controller: 'VotesCtrl'
        }
      }
    })
    .state('tab.vote-detail', {
      url: '/votes/:voteId',
      views: {
        'tab-votes': {
          templateUrl: 'templates/votes/vote-detail.html',
          controller: 'VoteDetailCtrl'
        }
      }
    })

  .state('tab.settings', {
    url: '/settings',
    views: {
      'tab-settings': {
        templateUrl: 'templates/tab-settings.html',
        controller: 'SettingsCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
