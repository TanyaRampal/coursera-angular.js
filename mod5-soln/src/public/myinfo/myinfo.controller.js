(
	function () 
	{
		'use strict';
		angular.module('public')
			.controller("control2", control);

		control.$inject=['infoService','ApiPath'];
		function control(infoService,ApiPath) 
		{
			var info=this;
			info.basePath=ApiPath;
			info.userDetails=infoService.getUserDets();	
			if(info.userDetails.length>0)
				info.show=true;
			
			else
				info.show=false;

		}

	}


)();