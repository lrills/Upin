// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  // 
  chrome.tabs.executeScript({
    code: 'console.log(document.getElementById("movie_player"))'
  });
});



// jQuery(document).ready( function() {
//     var player = document.getElementById('movie_player');
//     player.seekTo(52, true);
//     console.log(player);
//     // console.log(document);
// });