/**
 * Created by ajeasyvaio on 07/04/2016.
 */

(function(){

    "use strict";

    angular
        .module("ngClassifiedsapp")
        .controller("newclassifiedsCtrl",function($scope,ngClassifiedsFactory,$state,$mdSidenav,$timeout,$mdDialog){
            var vm = this;
            vm.closeSidebar= closeSidebar;
            vm.saveClassified=saveClassified;


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


            function saveClassified(classified) {
                if (classified) {
                    classified.contact = {
                        name: "Jane Doe",
                        phone: "(555) 555-5555",
                        email: "janedoe@gmail.com"
                    };
                    $scope.$emit('newClassified',classified);
                    closeSidebar();
                }
            };


        });

})();