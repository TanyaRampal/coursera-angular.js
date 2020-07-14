(
	function () 
	{
		'use strict';
		angular.module('app')
			.service('catService', catService)
			.constant('path', "https://davids-restaurant.herokuapp.com");


		catService.$inject=['$http','path'];
		function catService($http, path) 
		{
			var service=this;

			service.getmenucats=function() 
				{
					var response=$http({
						method:"GET",
						url:(path+"/categories.json")
					});
					return response;
				};

			service.getmenu=function(shortName) 
				{
					var response=$http({
						method:"GET",
						url:(path+"/menu_items.json"),
						params:
						{
							category: shortName
						}
					});
					return response;
				};
		}

	}


)();