document.getElementById("search").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const query = encodeURIComponent(e.target.value.trim());
        if (query) {
            const url = `https://towerofgod.fandom.com/wiki/Special:Search?scope=internal&navigationSearch=true&query=${query}`;
            if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.sendMessage) {
                chrome.runtime.sendMessage({ action: "openWiki", url }, () => {
                    window.close();
                });
            } else {
                window.open(url, "_blank");
                window.close();
            }
        }
    }
});
