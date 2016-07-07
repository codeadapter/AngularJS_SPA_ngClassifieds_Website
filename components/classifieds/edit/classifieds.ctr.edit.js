/**
 * Created by ajeasyvaio on 07/05/2016.
 */


(function(){

    "use strict";

    angular
        .module("ngClassifiedsapp")
        .controller("editclassifiedsCtrl",function($scope,ngClassifiedsFactory,$state,$mdSidenav,$timeout,$mdDialog){
            var vm = this;
            vm.closeSidebar= closeSidebar;
            vm.saveEdit=saveEdit;
            vm.classifieds= ngClassifiedsFactory.ref;
            vm.classified =  vm.classifieds.$getRecord($state.params.id);

            $scope.$watch('vm.sidenavOpen',function(sidenav){
                if(sidenav === false){
                    $mdSidenav("left")
                        .close()
                        .then(function(){
                            $state.go('classifieds');
                        });
                }
            });

            $timeout(function(){
                $mdSidenav("left").open();
            });

            function closeSidebar(){
                vm.sidenavOpen= false;
            }

            function notification(message){
                $mdToast.show($mdToast.simple()
                    .content(message)
                    .position('bottom right')
                    .hideDelay(3000));
            };

            function saveEdit() {
                vm.classifieds.$save(vm.classified).then(function(){
                    closeSidebar();
                    notification("Classified Edited!");
                });
                //$scope.$emit('editedClassified',classified);
            };


        });

})();