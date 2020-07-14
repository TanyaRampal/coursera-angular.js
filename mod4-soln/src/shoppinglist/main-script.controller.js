(
	function () 
	{
		'use strict';
		angular.module('app')
			.controller('control',fun);


		fun.$inject=['cats'];
		function fun(cats) 
		{
			var menu=this;
			menu.cats=cats.data;

		}

	}


)();