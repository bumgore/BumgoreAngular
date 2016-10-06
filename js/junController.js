var junApp = angular.module('junApp', ['ngRoute']);

junApp.config(function ($routeProvider) {

    $routeProvider
    .when('/', {
        controller: 'junController',
        templateUrl: 'Fragments/view1.html'
    })
     .when('/view2', {
        controller: 'junController',
        templateUrl: 'Fragments/view2.html'
    })
    .otherwise({ redirectTo: '/' });

});

var tigControl = {};



tigControl.junController = function ($scope) {

	$scope.testArray=[
	{Name: 'Jun Alfie', Age: '26'}, 
	{Name: 'Simud', Age: '25'}, 
	{Name: 'Marjun', Age: '18'}, 
	{Name: 'Jun', Age: '36'}
	];

	   $scope.addTestArray = function (){
		$scope.testArray.push(
			{ Name: $scope.newTestArray.Name, Age: $scope.newTestArray.Age }
		);
	}
  
}

	

junApp.controller(tigControl);
