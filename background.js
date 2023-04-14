chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content.js']
  }, () => {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError.message);
    } else {
      // Send the message to highlight the code
      chrome.tabs.sendMessage(tab.id, { action: 'highlightCode' });
    }
  });
});
