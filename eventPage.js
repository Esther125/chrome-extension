
// only show entension in certain website
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "showPageAction")
    {
        chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
            chrome.pageAction.show(tabs[0].id);
        });
    }
});


// Create different menu when you right click on different type of things
chrome.contextMenus.create({
    id: "copyText",
    title: "copy text",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.create({
    id: "copyLink",
    title: "copy link",
    contexts: ["link"]
  });
  
  chrome.contextMenus.create({
    id: "copyImage",
    title: "copy image",
    contexts: ["image"]
  });
  

  
// Listener for right click menu and send message to eventPage
chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "copyText") {
    // Text
    chrome.tabs.sendMessage(tab.id, {
      todo: "copyText",
      text: info.selectionText
    });
    console.log(info.selectionText);

    // console.log(tab.id)
  } else if (info.menuItemId == "copyLink") {
    // Link
    console.log(info.linkUrl);
    chrome.tabs.sendMessage(tab.id, {
      todo: "copyLink",
      link: info.linkUrl
    });
  } else if (info.menuItemId == "copyImage") {
    // Image
    console.log(info.srcUrl);
    chrome.tabs.sendMessage(tab.id, {
      todo: "copyImage",
      image: info.srcUrl
    });
  }
}

);
