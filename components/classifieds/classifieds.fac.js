/**
 * Created by ajeasyvaio on 07/03/2016.
 */

(function(){
    "use strict";
    angular
        .module('ngClassifiedsapp')
        .service('ngClassifiedsFactory',function($http,$firebaseArray){

            /*function getClassifieds(){
                return $http.get("data/classifieds.json");
            }
            return {
                getClassifieds:getClassifieds
            }*/

            var ref = new Firebase('https://ngclassifieds-3926e.firebaseio.com/');

            return {
                ref : $firebaseArray(ref)
            }

        });
})();