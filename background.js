chrome.browserAction.onClicked.addListener(function () {
  chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
    browser.tabs.duplicate(tabs[0].id);
    })
});