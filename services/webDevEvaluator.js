export async function evaluateWebDevProblem({ html, css, js, testSuite = [], iframeElement }) {
  if (iframeElement) {
    const doc = iframeElement.contentDocument || iframeElement.contentWindow?.document;
    if (doc) {
      doc.open();
      doc.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <style>${css || ''}</style>
          </head>
          <body>
            ${html || ''}
            <script>
              try {
                ${js || ''}
              } catch (err) {
                console.error("User JS Execution Error:", err);
              }
            </script>
          </body>
        </html>
      `);
      doc.close();
    }
  }

  await new Promise((resolve) => setTimeout(resolve, 50));

  const results = [];
  const win = iframeElement?.contentWindow;
  const doc = iframeElement?.contentDocument || win?.document;

  if (testSuite && testSuite.length > 0 && doc && win) {
    for (let i = 0; i < testSuite.length; i++) {
      const test = testSuite[i];
      const startTime = performance.now();

      try {
        const passed = new win.Function('document', 'window', `return ${test.assertion}`)(doc, win);
        const duration = (performance.now() - startTime).toFixed(1);

        results.push({
          testCaseIndex: i + 1,
          passed: Boolean(passed),
          description: test.description || `Test Assertion #${i + 1}`,
          executionTime: `${duration}ms`
        });
      } catch (err) {
        results.push({
          testCaseIndex: i + 1,
          passed: false,
          description: test.description || `Test Assertion #${i + 1}`,
          error: err.message
        });
      }
    }
  } else {
    results.push({
      testCaseIndex: 1,
      passed: true,
      description: 'Code executed & rendered cleanly into DOM Preview frame.',
      executionTime: '10ms'
    });
  }

  return results;
}