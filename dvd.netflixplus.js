//dvd.netflix+
//by Karl Dreher

//This should run on dvd.netflix.com to get an accessible link to a "instant watch" 
//movie, rather than simply a link to play it.  Netflix removed this from their UI
//many years ago...I wanted it back.

// need to remove trkid?  movieid.replace(/\&trkid.+/,"");  Ignoring for now.  


InstantMovies=document.getElementsByClassName("btn-play")



for (i in InstantMovies){
console.log(InstantMovies[i]);

movieid = InstantMovies[i].href.split("movieid=")[1];
newurl = "http://netflix.com/title/" + movieid.replace(/\&trkid.+/,"");

var br = document.createElement("br")
var movielink = document.createElement("a"); 
movielink.setAttribute("align", "center"); 
movielink.setAttribute("href", newurl);
movielink.setAttribute("style", "background: #4E9CAF\; padding: 5%\; border-radius: 15%\; width: 80%\; color: white\; display: block\; text-align: center\;");


movielink.innerHTML = "Go to Instant Page";
InstantMovies[i].parentNode.appendChild(br);
InstantMovies[i].parentNode.appendChild(movielink);

};

//for individual dvd pages
javascript:(function(){URL=window.document.URL;movieURL=URL.replace("http://dvd.","http://");instantURL=movieURL.split("?");window.location.href=(instantURL[0]);})();