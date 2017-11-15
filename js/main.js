angular.module("myApp", []).controller("myCtrl", function($scope){
	$scope.socialIcons=[
	{class:'fa fa-github', url:'https://github.com/BadrShahin'},
	{class:'fa fa-google', url:'https://plus.google.com/u/0/+BadrShahin'},
	{class:'fa fa-linkedin', url:'https://www.linkedin.com/in/badr-shahin-968997b5/'},
	{class:'fa fa-facebook-f', url:'https://www.facebook.com/BadrShahin95'},
	{class:'fa fa-twitter', url:'https://twitter.com/ShahinBadr'}
	];

	$scope.menuItems=[
	{name:'Home', url:'#home'},
	{name:'About Us', url:'#about'},
	{name:'Services', url:'#services'},
	{name:'Why Us', url:'#why_us'},
	{name:'Contact Us', url:'#contact'},
	{name:'Login', url:'#login'},
	{name:'Register', url:'#register'}
	];
});
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}