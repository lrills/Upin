// chrome.extension.onMessage.addListener(function(message,sender,sendResponse){
//   if(message.text == "getStuff")
//     sendResponse({stuff:"test"}); //This would be where you send your stuff
// });

var preurl = "";
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    if(changeInfo && changeInfo.status == "complete"){
        if(preurl != tab.url) {
          // alert("a;sdojalsjd");
          preurl = tab.url;
          getPinsInfoWithUrl(tabId,tab.url);
        }
    }
});

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    getPinsInfoWithUrl(sender.tab.id, message.url)
});

function getPinsInfoWithUrl(url){
  sendPinsInfoToContent(tabId,"dummy data: "+url);
}

function getPinsInfoWithUrl(tabId, url){
    // send get request here
    sendPinsInfoToContent(tabId,"dummy data: "+url);
}

function sendPinsInfoToContent(tabId, testingData){
    chrome.tabs.sendMessage(tabId, {url: testingData, action: "add_pin"}, function(response) {});
}




// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {          
//    if (changeInfo.status == 'complete') { 
//      console.log("Tab updated: " + tab.url);  
//       // chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//       //    chrome.tabs.sendMessage(tabs[0].id, {action: "SendIt"}, function(response) {});  
//       // });
//       chrome.tabs.sendMessage(tabId, {data: tab}, function(response) {
//             console.log(response);
//         });
//    }
// });



