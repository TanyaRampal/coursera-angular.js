(
	function () 
	{
		'use strict';
		angular.module('app', [])
			.controller("control",msgcontroller);

		msgcontroller.$inject=['$scope', '$filter'];
		function msgcontroller($scope, $filter) 
		{
			$scope.name="mommy";
			$scope.state="50481"	
			$scope.cost= .45;

			$scope.saymsg= function () 
				{
					var msg="i like food";
					var out=$filter('uppercase')(msg);
					return out;

					// var output = $filter('lowercase');
					// var lowered = output("GIVE ME COOKIES NOW!");
					// return lowered;
				};

			$scope.change= function () 
				{
					$scope.state="50535";
				};
		}
	}
)();