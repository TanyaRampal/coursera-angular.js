(
	function() 
	{

		angular.module('app')
			.config(fun);

		fun.$inject= ['$stateProvider', '$urlRouterProvider'];
		function fun($stateProvider, $urlRouterProvider) 
		{
			//redirect to tab1 if no url matches
			$urlRouterProvider.otherwise('/');

			//set up UI states
			$stateProvider
				.state('home',
					{
						url:'/',
						templateUrl:'src/shoppinglist/templates/home.template.html'											
					})

				.state('categories', 
					{
						url:'/categories',
						templateUrl:'src/shoppinglist/templates/main-categories.template.html',
						controller: 'control as menu',
						resolve:
						{
							cats:['catService', function(catService) 
								{
									return catService.getmenucats();
								}]
						}
					})

				.state('itemsDetail', 
					{
						url:'/item-detail/{shortName}',
						templateUrl:'src/shoppinglist/templates/main-item.template.html',
						controller:'control2 as itemsDetail',
						resolve:
						{
							items:['$stateParams','catService', 
							function($stateParams,catService) 
							{
								return catService.getmenu($stateParams.shortName);
							}]
						}
					});
		}
	}

)();