function DVDpage(){
	// this function is for adding an "instant" button on individual DVD pages.  
	
	Button = document.getElementById("buttonContainer")
		url = window.location.href
		movieid = url.split("\/")[url.split("\/").length -1]
		
		var newurl = "https://netflix.com/title/" + movieid;
		console.log(newurl);
	
	
		var movielink = document.createElement("a"); 
		movielink.setAttribute("href", newurl);
		movielink.setAttribute("style", "position: relative\; top: 15px\; background: red\; padding: 2%\; height: 60px\; border-radius: 5%\; font-size: 130%\; color: white\; text-align: center\;");


		movielink.textContent = "Instant";
		Button.appendChild(movielink);
}

DVDpage()