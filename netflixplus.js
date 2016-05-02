function Queue(){

	Buttons = document.getElementsByTagName("button")
	
	for (i in Buttons){
		if (Buttons[i].innerHTML == "Play"){
			console.log(Buttons[i].parentElement.previousSibling.innerHTML);
			dvdlink = (Buttons[i].parentElement.previousSibling.innerHTML).split("dvd.netflix.com/Movie/")[1];
			movie = dvdlink.split("?trkid")[0].split("/")[1];
			var newurl = "http://netflix.com/title/" + movie;

			var movielink = document.createElement("a"); 
			movielink.setAttribute("align", "left"); 
			movielink.setAttribute("href", newurl);
			movielink.setAttribute("style", "float: right\; background: red\; width: 30%\; height: 15%\; padding: 2%\; margin-left: 10%\; font-size: 110%\; border-radius: 15%\; color: white\; text-align: center\; box-shadow: 5px 5px 5px #888888\;");


			movielink.innerHTML = "Instant";
			Buttons[i].parentNode.previousSibling.appendChild(movielink);

		};
	
	};
}

Queue()