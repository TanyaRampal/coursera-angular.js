(
	function () 
	{
		'use strict';
		angular.module('app', [])
			.controller("NarrowItDownController", NarrowItDownController)
			.service('menuService',menuService)
			.directive('foundItems', FoundItems);


		function FoundItems() 
		{
			var ddo=
			{
				restrict:'E',
				templateUrl:'blah.html',
				scope:
				{
					foundItems:'<',
					onRemove:'&'
				},
				controller: NarrowItDownController,
				controllerAs: 'menu',
				bindToController:true

			};
			return ddo;
		}


		NarrowItDownController.$inject=['menuService'];
		function NarrowItDownController(menuService) 
		{
			var menu=this;

			menu.term="";

			menu.find=function(term)
			{
				var promise=menuService.getMatchedMenuItems(term);
				promise.then(function(list) 
					{
						if(list && list.length>0)
						{
							menu.list=list;
							menu.msg='';
						}
						else
						{
							menu.list=[];
							menu.msg="nothing found";
							
						}
					}).catch(function(error) 
						{
							console.log("error");
						});

			}

			menu.removeitem=function(i) 
				{
					menu.list.splice(i, 1);
				};
		}




		//service
		menuService.$inject=['$http'];
		function menuService($http,) 
		{
			var service=this;

			service.getMatchedMenuItems=function(term) 
				{
					return $http({
						method:"GET",
						url: 'https://davids-restaurant.herokuapp.com/menu_items.json',

					}).then(function (response) {
					    
						 var foundItems = [];

		                for (var i = 0; i < response.data['menu_items'].length; i++) 
		                {
		                    if (term.length > 0 && response.data['menu_items'][i]['description'].toLowerCase().indexOf(term) !== -1) 
		                    {
		                        foundItems.push(response.data['menu_items'][i]);
		                    }
		                }

		          
	                	return foundItems;

						    
					});





				};
		}

	}


)();