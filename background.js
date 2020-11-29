chrome.browserAction.onClicked.addListener(function () {
  chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
    browser.tabs.duplicate(tabs[0].id);
  });
});

window.onload = function () {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    chrome.browserAction.setIcon({
      path: "icons-dark/dup24dark.png",
    });
  }
};