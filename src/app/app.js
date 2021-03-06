angular.module('marvel.app', [
    'ngRoute',
    'cfp.hotkeys',
    'restangular',
    'ui.bootstrap',
    'marvel.config',
    'marvel.common'
])
.config(function ($httpProvider, $routeProvider) {
    $routeProvider
        .when('/battle', {
            controller: 'BattleCtrl',
            templateUrl: 'app/battle/battle.html'
        })
        .when('/characters', {
            controller: 'DataCtrl',
            templateUrl: 'app/data/data.html',
            resolve: {
                metadata: function (DataResolver) {
                    return DataResolver.getMetadata('Personagens', 'name');
                },
                data: function (DataResolver) {
                    return DataResolver.getData('characters');
                }
            }
        })
        .when('/comics', {
            controller: 'DataCtrl',
            templateUrl: 'app/data/data.html',
            resolve: {
                metadata: function (DataResolver) {
                    return DataResolver.getMetadata('Quadrinhos', 'title');
                },
                data: function (DataResolver) {
                    return DataResolver.getData('comics');
                }
            }
        })
        .otherwise({
            redirectTo: '/battle'
        });

    $httpProvider.interceptors.push('httpBroadcaster');
})
.run(function ($rootScope, $location) {
})
;
