chrome.commands.onCommand.addListener((command) => {
    if (command === "open-popup") {
        chrome.windows.create({
            url: chrome.runtime.getURL("popup.html"),
            type: "popup",
            width: 420,
            height: 100
        });
    }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "openWiki") {
        chrome.windows.create({
            url: message.url,
            type: "popup",
            width: 1000,
            height: 800
        });
    }
});
