(function(){

    "use strict";

    angular
        .module("ngClassifiedsapp")
        .controller("classifiedsCtrl",function($scope,$http,$state,ngClassifiedsFactory,$mdSidenav,$mdToast,$mdDialog){

            var vm = this;
            vm.openSidebar = openSidebar;
            vm.closeSidebar = closeSidebar;
            vm.saveClassified =saveClassified;
            vm.editClassified = editClassified;
            vm.saveEdit = saveEdit;
            vm.deleteClassified = deleteClassified;
            //vm.notification = notification;
            //vm.getCategories=getCategories;
            //vm.classifieds;
            //vm.classified;
            //vm.categories;
            //vm.editing;
            //$http.get("data/classifieds.json").then(function(classifieds){
            //alert('inside controller');
            ngClassifiedsFactory.getClassifieds().then(function(classifieds){
                vm.classifieds =classifieds.data;
                vm.categories =  getCategories(classifieds);

            });

            function openSidebar(){
                //$mdSidenav("left").open();
                $state.go('classifieds.new');
            };

           function closeSidebar(){
                $mdSidenav("left").close();

            };


            var contact = {
                name: "Jane Doe",
                phone: "(555) 555-5555",
                email: "janedoe@gmail.com"
            };


            function notification(message){
                $mdToast.show($mdToast.simple()
                    .content(message)
                    .position('bottom right')
                    .hideDelay(3000));
            };

           function saveClassified(classified) {
               if (classified) {
               classified.contact = contact;
               vm.classifieds.push(classified);
               vm.classified = {};
               closeSidebar();
               notification("Classified Saved!")
               }
            };

            function editClassified(classified){
                /*console.log(classified);
                vm.editing=true;
                vm.classified = classified;
                openSidebar();*/
                $state.go('classifieds.edit',{
                    id : classified.id,
                    classified : classified
                });

            };

            function saveEdit(){
                vm.editing=false;
                vm.classified={};
                closeSidebar();
                notification("Classified Edited!")
            };

            function deleteClassified(deleteEvent,classified){
                var confirm = $mdDialog.confirm()
                    .title("Do you want to remove "+vm.classified.title +" ?")
                    .ok("YES")
                    .cancel("NO")
                    .targetEvent(deleteEvent);
                $mdDialog.show(confirm).then(function(){
                    var index = vm.classifieds.indexOf(classified);
                    vm.classifieds.splice(index,1);
                    notification(classified.title+ " vm.classified Deleted!")
                },function(){
                    notification("Classified Delete Cancelled!")
                })
                };


             function getCategories(classifieds){
                var categories = [];
                angular.forEach(classifieds,function(classified){
                   angular.forEach(classified.categories,function(category){
                       console.log('inside');
                        console.log(category);
                        categories.push(category);

                    });

                });

                return _.uniq(categories);
            }

            //keep checking for the newClassified value with $on function
            $scope.$on('newClassified',function(event,classified){
                classified.id =vm.classifieds.length+1;
                vm.classifieds.push(classified);
                vm.classified = {};
                vm.sidenavOpen= false;
                notification("Classified Saved!")

            });

            $scope.$on('editedClassified',function(event,classified){
                vm.classified = classified;
                vm.sidenavOpen= false;
                notification("Classified Saved!");
                vm.classified = {};
            })
        });

})();
