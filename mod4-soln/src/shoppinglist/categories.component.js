(
	function () 
	{
		'use strict';
		angular.module('app')
		.component('categoriesList',
				{
					templateUrl:'src/shoppinglist/templates/categories.template.html',
					bindings:
					{
						cats:'<'
					}
				});
	}
)();