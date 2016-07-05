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
            vm.classified = $state.params.classified;

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


            function saveEdit(classified) {
                    console.log("here inside");
                    closeSidebar();
                //$scope.$emit('editedClassified',classified);
            };


        });

})();