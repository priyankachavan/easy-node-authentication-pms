module.exports = function(){
var Users = { 	"userEmail" : "satendra1729@gmail.com",
	"password" : "qwerty123",
    "userName": "Satendra Kumar Kuswhaha",
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
}

 return Users;
};