//Single Absolute responsive Javascript Plugin 
//VERSION 1.0

//This plugin allows the user to have absolute positioned div blocks
//and make them responsive by taking the height of the div you want to take as base
//and adding that height to the block you want to move, this is done everytime the user resize the screen.

var desktopWindowWidth = 991;//This is the min-width for the desktop view, 991 px is the default value for this plugin.
var baseElementID = "DIV1";//Here goes the ID of the base element (without hashtags).
var affectedElementID = "DIV2";//Here goes the ID of the affected element (without hashtags).

window.onload = function() { //This will load when the page fully loads, THIS WILL NOT LOAD ON RESIZE.
    if($(window).width() > desktopWindowWidth){ //Desktop - tablet(Landscape)view
		var e=document.getElementById(baseElementID);
    	var cs=document.defaultView.getComputedStyle(e,null);
    	var bg=parseInt(cs.getPropertyValue('height'));
	 	document.getElementById(affectedElementID).style.marginTop= bg + "px";
	 }else{ //mobile and tablet(Portrait) view
	 	var e=document.getElementById(baseElementID);
    	var cs=document.defaultView.getComputedStyle(e,null);
    	var bg=parseInt(cs.getPropertyValue('height'));
	 	//document.getElementById(baseElementID).style.marginTop= bg + "px"; <-- use this in case the base element breaks in mobile view.
	 	document.getElementById(affectedElementID).style.marginTop= bg + "px";
	 }
});
$(document).ready(function() { 
	$(window).resize(function() { //This will load on rezise
	    if($(window).width() > desktopWindowWidth){ //Desktop - tablet(Landscape)view
			var e=document.getElementById(baseElementID);
	    	var cs=document.defaultView.getComputedStyle(e,null);
	    	var bg=parseInt(cs.getPropertyValue('height'));
		 	document.getElementById(affectedElementID).style.marginTop= bg + "px";
		 }else{ //mobile and tablet(Portrait) view
		 	var e=document.getElementById(baseElementID);
	    	var cs=document.defaultView.getComputedStyle(e,null);
	    	var bg=parseInt(cs.getPropertyValue('height'));
		 	//document.getElementById(baseElementID).style.marginTop= bg + "px"; <-- use this in case the base element breaks in mobile view.
		 	document.getElementById(affectedElementID).style.marginTop= bg + "px";
		 }
	});
});
//This version will only process one div at a time, you need to copy paste the whole code and rename variables in order to affect multiple divs, 
//a new version is being worked on to accept multiple divs with an array.
