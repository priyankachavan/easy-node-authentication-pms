var pmsApp = angular.module('pmsApp',[]);
//var users = require('../app/models/user.js');
pmsApp.controller('mainController', function($scope){
	$scope.appNames = 'Project Management System';

	$scope.Users = [{ 	
	"userEmail" : "satendra1729@gmail.com",
	"password" : "qwerty123",
    "userName": "Sat",
	"empType" : "Developer",
	"userType" : ["Emp","Riv","Mng"],
	"isFirstTimeLogin" : false,
    "Objectives" : [{
					"Id" : 1,
					"Type" : "Core Objective",
					"Description" : "You have to run 5 miles in very fast",
					"weightage" : "100"
					},
					{
					"Id" : 2,
					"Type" : "Core Objective", 
					"Description" : "You are very handsome",
					"weightage" : "100"
					},
					{
					"Id" : 3,
					"Type" : "Other 1",
					"Description" : "Follow the time line",
					"weightage" : "100"
					}],
    "ListOfReviewer" : [{
		"isActive" : true,
		"posting" : 1,
		"reviewerEmail" : "satykushofficial@gamil.com",
		"ratings" : [{"ratingCode" : "Ex","Id" : 1},
					 {"ratingCode" : "NeedToImprove","Id" : 2},
					 {"ratingCode" : "VeryBad","Id" : 3}],
		"isLocked" : true
		
	},
	{
		"isActive" : true,
		"posting" : 2,
		"reviewerEmail" : "satendra1729@gamil.com",
		"ratings" : [{"ratingCode" : "Ex","Id" : 1},
					 {"ratingCode" : "NeedToImprove","Id" : 2},
					 {"ratingCode" : "VeryBad","Id" : 3}],
		"isLocked" : false
		
	},
	{
		"isActive" : true,
		"posting" : 3,
		"reviewerEmail" : "satendra1729@gamil.com",
		"ratings" : null,
		"isLocked" : false
		
	}			   
	]
}];

	$scope.CurrentUser = {
	"password" : "",
    "userName": "",
	};

	$scope.OnLogin = function(){
		for(var i = $scope.Users.length - 1; i >= 0; i--) {
			if($scope.Users[i].userName = $scope.CurrentUser.userName && $scope.Users[i].password == $scope.CurrentUser.password)
				console.log(true);
		}
	}
});