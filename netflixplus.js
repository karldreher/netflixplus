//netflixplus
//by Karl Dreher

//This should run on dvd.netflix.com to get an accessible link to a "instant watch" 
//movie, rather than simply a link to play it.  Netflix removed this from their UI
//many years ago...I wanted it back.




function Queue(){

	Buttons = document.getElementsByTagName("button")
	
	for (i in Buttons){
		if (Buttons[i].innerHTML == "Play"){
			console.log(Buttons[i].parentElement.previousSibling.innerHTML);
			dvdlink = (Buttons[i].parentElement.previousSibling.innerHTML).split("dvd.netflix.com/Movie/")[1];
			movie = dvdlink.split("?trkid")[0].split("/")[1];
			var newurl = "http://netflix.com/title/" + movie;

			var br = document.createElement("br")
			var movielink = document.createElement("a"); 
			movielink.setAttribute("align", "left"); 
			movielink.setAttribute("href", newurl);
			movielink.setAttribute("style", "background: #4E9CAF\; padding: 5%\; border-radius: 15%\; width: 80%\; color: white\; display: block\; text-align: center\;");


			movielink.innerHTML = "Go to Instant Page";
			//Buttons[i].parentNode.appendChild(br);
			Buttons[i].parentNode.appendChild(movielink);

		};
	
	};
}


//for individual dvd pages
javascript:(function(){URL=window.document.URL;movieURL=URL.replace("http://dvd.","http://");instantURL=movieURL.split("?");window.location.href=(instantURL[0]);})();
