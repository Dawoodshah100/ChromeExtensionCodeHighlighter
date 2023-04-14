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
          for (const node of mutation.addedNodes) {
            if (node.tagName === 'PRE') {
              hljs.highlightElement(node);
            }
          }
        }
      }
    });
  
    const preElements = document.querySelectorAll('pre');
    for (const preElement of preElements) {
      observer.observe(preElement, { childList: true });
    }
  }
  
  
  applySyntaxHighlighting();
  observeDOMChanges();
  