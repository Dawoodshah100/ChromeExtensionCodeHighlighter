function applySyntaxHighlighting() {
    const codeElements = document.querySelectorAll('pre > code');
    for (const codeElement of codeElements) {
      hljs.highlightElement(codeElement);
    }
  }
  
  function observeDOMChanges() {
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          applySyntaxHighlighting();
        }
      }
    });
  
    observer.observe(document.body, { childList: true, subtree: true });
  }
  
  applySyntaxHighlighting();
  observeDOMChanges();
  