setTimeout(fireGetDuration, 500);
function fireGetDuration(){
	ytplayer = document.getElementById("movie_player");
	console.log("duration: " + ytplayer.getDuration());
}
// chrome.extension.sendMessage({text:"getStuff"},function(reponse){
//   //This is where the stuff you want from the background page will be
//   if(reponse.stuff == "test")
//     alert("Test received");
// });

