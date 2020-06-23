(
	function () 
	{
		'use strict';

		angular.module('app', [])
			.controller("tobuycontroller", fun1)
			.controller("alreadyboughtcontroller", fun2)
			.service("listService", listService);

		fun1.$inject=['listService'];
		function fun1(listService) 
		{
			var buy=this;

			buy.list1=listService.getlist1();
			buy.removeitem=function(i) 
				{
					listService.removeitem(i);
				};
		}

		fun2.$inject=['listService'];
		function fun2(listService) 
		{
			var bought=this;

			bought.list2=listService.getlist2();
		}



		function listService() 
		{
			var service=this;

			//initial list of shopping items
			var list1=
			[
				{
					name:"milk",
					quantity:"2 bags"
				},
				{
					name:"donuts",
					quantity:"4 boxes"
				},
				{
					name:"bread",
					quantity:"1 packet"
				},
				{
					name:"mayo",
					quantity:"1 jar"
				},
				{
					name:"cheese",
					quantity:"2 suitcases"
				},
				{
					name:"mushroom",
					quantity:"1 kg"
				}
			];
			var list2=[];

			//send to fun1
			service.getlist1=function() 
				{
					return list1;
				};

			service.getlist2=function() 
				{
					return list2;
				};

			service.removeitem=function(i) 
				{
					var obj=
					{
						name:list1[i].name,
						quantity:list1[i].quantity
					};

					list1.splice(i,1);
					list2.push(obj);
				};
		}

	}


)();