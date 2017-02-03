function DVDpage(){
	// this function is for adding an "instant" button on individual DVD pages.  
	
	Button = document.getElementsByClassName("btn-play")
	if (Button.length == 1){
		url = Button[0].href
		movieid = url.split("movieid=")[1].split("&")[0]
		var newurl = "https://netflix.com/title/" + movieid;
		console.log(newurl);
	
	
		var movielink = document.createElement("a"); 
		movielink.setAttribute("align", "left"); 
		movielink.setAttribute("href", newurl);
		movielink.setAttribute("style", "float: left\; background: red\; width: 105%\; height: 15%\; padding: 2%\; marginTop: 40px\; border-radius: 5%\; font-size: 110%\; color: white\; text-align: center\;");


		movielink.innerHTML = "Instant";
		Button[0].parentNode.parentNode.appendChild(movielink);
	};
}

DVDpage()
