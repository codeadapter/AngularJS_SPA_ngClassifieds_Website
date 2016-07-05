angular
    .module("ngClassifiedsapp",["ngMaterial","ui.router"])
    .config(function($mdThemingProvider,$stateProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('orange');

        $stateProvider
            .state('classifieds', {
                url: '/classifieds',
                templateUrl: 'components/classifieds/classifieds.tpl.html',
                controller: 'classifiedsCtrl as vm'
            })
            .state('classifieds.new', {
                url: '/new',
                templateUrl: 'components/classifieds/new/classifieds.new.tpl.html',
                controller: 'newclassifiedsCtrl as vm'
            })
            .state('classifieds.edit', {
                url: '/edit/:id',
                templateUrl: 'components/classifieds/edit/classifieds.edit.tpl.html',
                controller: 'editclassifiedsCtrl as vm',
                params : {
                    classified : null
                }
            });
    });







    /*.directive("helloMyWorld", function(){
        return{
            template: "<h1>{{directiveMessage}}</h1>"
        }
    });*/