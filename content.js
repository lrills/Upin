
var curUrl;

chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
	if(msg.url!=curUrl){
		console.log("url_from_background: "+msg.url);
		plugInPin();
	}
});
curUrl = location.href;
// console.log("url_from_content:" + curUrl);

chrome.runtime.sendMessage({url: curUrl}, function(response) {
});



function plugInPin(){
	var s = document.createElement('script');
	s.src = chrome.extension.getURL('inject.js');
	s.onload = function() {
	    this.parentNode.removeChild(this);
	};
	(document.head||document.documentElement).appendChild(s);
}
// function myMain (evt) {
//     // DO YOUR STUFF HERE.
// 	console.log("fire~fire~"); 
// }





// var xhr = new XMLHttpRequest();

// xhr.open("GET", "http://www.yahoo.com", false);
// xhr.send();

// var result = xhr.responseText;


// chrome.extension.onMessage.addListener(function(message,sender,sendResponse){
//   //This is where the stuff you want from the background page will be
//   if(message.stuff == "test")
//     alert("Test received");
// });

// var s = document.createElement('script');
// // TODO: add "script.js" to web_accessible_resources in manifest.json
// s.src = chrome.extension.getURL('script.js');
// s.onload = function() {
//     console.log("gogogogogo~~");
// };


// (document.head||document.documentElement).appendChild(s);

// chrome.extension.onMessage.addListener(function(message,sender,sendResponse){
//   if(message.text == "getStuff")
//     sendResponse({stuff:"test"}); //This would be where you send your stuff
// });

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     //here we get the new 
//     console.log("URL CHANGED: " + request.data.url);
// });

// chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
//     //here we get the new 
//     console.log("URL CHANGED: " + msg.data.url);
// });





