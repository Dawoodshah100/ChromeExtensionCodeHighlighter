function injectHighlightJsFiles(callback) {
  const highlightJsUrl = chrome.runtime.getURL(
    "lib/highlightjs/highlight.min.js"
  );
  const highlightCssUrl = chrome.runtime.getURL(
    "lib/highlightjs/default.min.css"
  );

  const injectScript = (src, onload) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = onload;
    document.head.appendChild(script);
  };

  const injectStylesheet = (href) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  };

  injectStylesheet(highlightCssUrl);
  injectScript(highlightJsUrl, callback);
}

// Function to inject the custom script for syntax highlighting
function injectCustomScript() {
  const customScriptUrl = chrome.runtime.getURL("customScript.js");
  const script = document.createElement("script");
  script.src = customScriptUrl;
  document.body.appendChild(script);
}

// Message listener
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "highlightCode") {
    injectHighlightJsFiles(() => {
      injectCustomScript();
      sendResponse({ status: "success" });
    });
  }
  return true; // Required for async sendResponse
});
