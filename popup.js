document.getElementById('highlightButton').addEventListener('click', () => {
  // Send the message to highlight the code
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'highlightCode' }, (response) => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
        document.getElementById('status').innerText = 'Error: ' + chrome.runtime.lastError.message;
      } else {
        document.getElementById('status').innerText = 'Code highlighting applied!';
      }
    });
  });
});
