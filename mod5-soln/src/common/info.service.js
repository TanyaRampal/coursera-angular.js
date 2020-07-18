(function () {
"use strict";

angular.module('common')
.service('infoService', infoService);


infoService.$inject = ['$http', 'ApiPath'];
function infoService($http, ApiPath) {
  var service = this;
  service.userDetails=[];

  service.getfav=function(menuitem) 
  {
    return $http.get(ApiPath + '/menu_items/'+menuitem+'.json')
      .then(function (response) 
      {
        return response.data;
      }, function (response) 
      {
        console.log("1.  No such menu number exists!!");
        throw new Error("1. No such menu number exists!!");
      });
  };

  service.putUserDets=function(dets) 
    {
      service.userDetails.push(dets);
    };


  service.getUserDets=function() 
    {
      return service.userDetails;
    };

}



})();
