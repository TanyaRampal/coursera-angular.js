(
	function () 
	{
		'use strict';

		angular.module('app')
			.controller('control2',fun2);

		fun2.$inject=['items'];
		function fun2(items) 
		{
			var itemsDetail=this;
			itemsDetail.name=items.data.category.name;
			itemsDetail.items=items.data.menu_items;
		}
	}
)();