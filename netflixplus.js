function DVDpage(){
    // this function is for adding an "instant" button on individual DVD pages.  
    
    Button = document.getElementById("buttonContainer")
        url = window.location.href
        movieid = url.split("\/")[url.split("\/").length -1]
        
        var newurl = "https://netflix.com/title/" + movieid;
        console.log(newurl);
    
    
        var movielink = document.createElement("a"); 
        movielink.setAttribute("href", newurl);
        movielink.setAttribute("class", "netflix-plus");
        movielink.setAttribute("style", "position: relative\; top: 15px\; background: red\; padding: 2%\; height: 60px\; border-radius: 5%\; font-size: 130%\; color: white\; text-align: center\;");


        movielink.textContent = "Instant";
        Button.appendChild(movielink);
}

formatItems = document.getElementsByClassName("formatItem")
streaming = 0
for (i = 0; i < (formatItems.length); i++) {

    if (formatItems[i].innerHTML == "Streaming") {
    streaming += 1
    
    }
	


};
window.addEventListener('load', function () {

	if (streaming > 0) {
		do {
			DVDpage();
			if (document.getElementsByClassName("netflix-plus").length < 1){
				console.log("waiting for netflixplus link to be created")
				
			}
		}
		while (document.getElementsByClassName("netflix-plus").length < 1)
	}
}, false);