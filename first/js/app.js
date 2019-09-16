"use strict"

var msg="HELLO";
console.log(msg);
var resultsDiv = document.getElementById("results");
resultsDiv.innerHTML = "<p> All Web Courses Are Available </p>";
console.log(resultsDiv);

/*
var x;
x=150;
console.log(x);
function test()
{
	var y="Hi";
	console.log("Value of y:"+y);
}
test();
var z=100;
console.log(z);
*/

//Function is object
/*
function showmessage(msg)
{
	console.log(msg);
}
//console.log(showmessage);

//showmessage.greeting = "Good afternoon";
showmessage("HELLO World");
//console.log(showmessage.greeting);
*/
/*
function showmessage(msg1 , msg2)
{
	console.log(msg1+","+msg2);
}
console.log(showmessage);
showmessage("hello","world","Good") */

/*
var showmessage1 = function(msg)
{
	console.log("function:" +msg);
}
showmessage1("Am i here");
*/

// defining
//function showMeCallback(msg, callback)
//{
//	console.log(msg);
//	callback();
//}

//calling
/*
showMeCallback("Hello Ninga" , function()
	{
		console.log("Hello i am calling ninja");
	});
*/
/*
function temp()
{
	console.log("Showing again")
}

//calling
showMeCallback("Aniket", temp);
*/


/*
function showMessage(msg)
{
	console.log(msg);
}

function showMeCallback(msg, callback)
{
	console.log(msg);
	callback();
}

// Closure
var globalVar = "Global something";
function dosomething ()
{
	console.log("Accessing Global Var:" +globalVar);
	var someMsg = "Something";
	console.log(someMsg);

	showMeCallback("with Closure", function()
	{
		showMessage("showMe with Closure() :" + someMsg);
	})
}
dosomething();


*/

$(document).ready(function(){
	var resultList = $("#results");
resultList.text("Injected using jquery");

var toggleButton = $("#toggleButton");
toggleButton.on("click" , function()
{
	console.log("Button clicked");
	resultList.toggle(500);
	if(toggleButton.text() === "Hide") {
		toggleButton.text("Show");
	} else {
		toggleButton.text("Hide");
	}
});
   var results = [];
  	function displayResults(results) {
  		 resultList.empty();
  	$.each(results, function(i, item){
  		var newResult = $("<div class='result'>" +
        "<div class='title'>" + item.title + "</div>" +
        "<div>" + "Level :" + item.level + "</div>" +
        "<div class='title'>" + item.title + "</div>" +
        "<div>" + "Total Videos:" + item.total_videos + "</div>" +
        "<div>" + "Instructor: " + item.instructor + "</div>" +
        "</div>");
        resultList.append(newResult);
        newResult.hover(function(){
        	$(this).css("background-color","LightGray");
        	$(this).css("color","Red");
        	$(this).css("border-color","Blue");
        	console.log("Hover IN");
        }, function(){
        	$(this).css("background-color","transparent");
        	$(this).css("color","black");
        	$(this).css("border-color","#999");
        	console.log("Hover Out");	
        })
  	});
  	}
  	$("#loginForm").on("submit", function(){
  		var username = $("#username").val();
  		var password = $("#password").val();
  		if(username && password){
  			$.post("/api/login", {}, function(data) {
  			console.log("Success :: " + data);
  			displayResults(data);


  			$("#loginForm").hide();
  			$("#LogoutSection").show();

  			$("#errorMsg").empty();
  		})
  		.fail(function(data){
  			$("#errorMsg").text("Something is bad!")
  		})
        .done(function(){
  		})

  		}else{
  			$("#errorMsg").text("username & password are mandatory.")
  		}
  		return false;
  	});


  	$("#LogoutButton").on('click', function(){

  		$("#loginForm").show();
  		$("#LogoutSection").hide();
  		resultList.empty();
  		resultList.text("Please logged in");

  		})
});
/*
<div>
<div title>Java
<div>Instructor: Saurab
level: Beginner
Total Videos: 10
</div>
*/

	
















//Object literal (K,V)
/*
var result = {
	title: "Javascript",
	instructor: "Saurab sir",
	level: "Beginners"
};
console.log(result);
console.log(result.instructor);
result.premium = false;
result.total = function(a , b) {
	return a + b ;
}

var results = [
 {
	title: "Java",
	instructor: "Saurab sir",
	level: "Beginners"
},
 {
	title: "c++",
	instructor: "Saurab sir",
	level: "Beginners"
},
{
	title: "Web",
	instructor: "Shail sir",
	level: "Beginners"
}
];
results.push(result);
*/