chrome.runtime.sendMessage({todo: "showPageAction"});

// popup page buttom 
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   if (request.todo === "changeColor") {
//     // 定位目標input元素
//     var inputElement = document.querySelector('.search-box__input');
//     if (inputElement) {
//       // 修改input元素的值
//       inputElement.value = "123";
//     }
//   }
// });

// 在 content.js 中使用 chrome.runtime.onMessage 事件監聽器
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.todo == "copyText") {
    // message from eventPage
    var text = message.text;

    // throw message to DOM
    var inputElement = document.querySelector('.search-box__input');

    if (inputElement) {
      inputElement.value = text;
    }

  }
});
