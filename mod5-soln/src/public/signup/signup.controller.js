(
	function () 
	{
		'use strict';
		angular.module('public')
			.controller("control", control);

		control.$inject=['infoService'];
		function control(infoService) 
		{
			var reg=this;
			reg.submit=function() 
				{
					reg.completed=true;

					if (!reg.user) 
		                reg.user = {};
		            

					infoService.getfav(reg.user.favfood)
						.then(function(response) 
						{
							reg.user.favfooddesc=response.description;
							reg.user.favfoodsn=response.short_name;
							reg.user.name=response.name;
							reg.user.error=false;
						}, function(error) 
						{
							reg.user.error=true;
							console.log("2.  No such menu number exists!!");
							throw new Error("No such menu number exists!!");
						});

					infoService.putUserDets(reg.user);
				};

			
		}

	}


)();