
//1st

// (
// 	function () 
// 	{
// 		'use strict';
// 		angular.module('app', [])
// 			.controller("control", ['$scope', '$filter', DIcontrol]); //telling that scope and filter in that order will be args to DIcontrol


// 		//$filter creates filtering functs that is used for formating data
// 		//to be shown to the user
// 		function DIcontrol($scope, $filter)
// 		{
// 			$scope.name="mini";

// 			$scope.upper= function()
// 				{
// 					var upCase=$filter('uppercase');
// 					$scope.name=upCase($scope.name);
// 				};
// 		}

// 	}

// )();

// !function(){"use strict";angular.module("app",[]).controller("control",["$scope","$filter",function(n,e){n.name="mini",n.upper=function(){var o=e("uppercase");n.name=o(n.name)}}])}();


//2nd

// (
// 	function () 
// 	{
// 		'use strict';
// 		angular.module('app', [])
// 			.controller("control", DIcontrol); 

// 		DIcontrol.$inject=['$scope','$filter']; //telling that scope and filter in that order will be args to DIcontrol
// 		//$filter creates filtering functs that is used for formating data
// 		//to be shown to the user
// 		function DIcontrol($scope, $filter)
// 		{
// 			$scope.name="mini";

// 			$scope.upper= function()
// 				{
// 					var upCase=$filter('uppercase');
// 					$scope.name=upCase($scope.name);
// 				};
// 		}

// 	}
// )();

!function(){"use strict";function n(n,e){n.name="mini",n.upper=function(){var c=e("uppercase");n.name=c(n.name)}}angular.module("app",[]).controller("control",n),n.$inject=["$scope","$filter"]}();

