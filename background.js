chrome.browserAction.onClicked.addListener(function () {
    chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
        browser.tabs.duplicate(tabs[0].id);
    })
});

window.onload = function () {
    browser.theme.getCurrent().then(x => {
        if (x.colors.frame == "hsl(240, 5%, 5%)") {
            chrome.browserAction.setIcon({
                path: "icons-dark/dup24dark.png"
            });
        }
    })
}
