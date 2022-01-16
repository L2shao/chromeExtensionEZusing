// 记录一些可以用到的事件

chrome.tabs.onActivated.addListener(function (activeInfo) {
  if (activeInfo.tabId) {
    chrome.tabs.get(activeInfo.tabId, function (tab) {
      updateBrowserAction(tab.id, tab.url);
    });
  }
});

chrome.tabs.create({
  'url': 'https://www.hnn8.com'
});

// 执行js
chrome.tabs.executeScript(
    tabID,
    {code:"document.body.style.backgroundColor='red'"},
    function(){}
);

// 发送请求
chrome.tabs.getSelected(null, function(tab) {
  chrome.tabs.sendRequest(tab.id, {greeting: "hello"}, function(response) {
    console.log(response.farewell);
  });
});
