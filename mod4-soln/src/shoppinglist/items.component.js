(
	function () 
	{
		'use strict';
		angular.module('app')
		.component('itemsList',
				{
					templateUrl:'src/shoppinglist/templates/items.template.html',
					bindings:
					{
						items:'<'
					}
				});
	}
)();