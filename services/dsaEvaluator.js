const JUDGE0_API_URL = 'https://judge0-ce.p.rapidapi.com/submissions';

/* Maps Judge0 status codes to user-friendly messages */
function parseStatus(statusId) {
  switch (statusId) {
    case 3:
      return { status: 'PASSED', label: 'Accepted' };
    case 4:
      return { status: 'FAILED', label: 'Wrong Answer' };
    case 5:
      return { status: 'FAILED', label: 'Time Limit Exceeded' };
    case 6:
      return { status: 'FAILED', label: 'Compilation Error' };
    default:
      return { status: 'FAILED', label: 'Runtime Error' };
  }
}

/**
 * Evaluates DSA code against multiple test cases via Judge0
 */
export async function evaluateDsaProblem({ sourceCode, languageId, testCases = [], apiKey }) {
  // 1. Safely resolve RapidAPI Key across Next.js / React environments
  const key = apiKey || process.env.NEXT_PUBLIC_RAPIDAPI_KEY || process.env.REACT_APP_RAPIDAPI_KEY;

  if (!key) {
    throw new Error('RapidAPI Key is missing. Please provide an apiKey parameter or configure process.env.NEXT_PUBLIC_RAPIDAPI_KEY.');
  }

  // 2. Execute test cases concurrently for maximum speed
  const results = await Promise.all(
    testCases.map(async (testCase, i) => {
      // Format input/expected outputs as strings for stdin
      const stdinInput = typeof testCase.input === 'object'
        ? JSON.stringify(testCase.input)
        : String(testCase.input ?? '');

      const expectedOutput = typeof testCase.expected === 'object'
        ? JSON.stringify(testCase.expected)
        : String(testCase.expected ?? '').trim();

      try {
        const response = await fetch(
          `${JUDGE0_API_URL}?wait=true&base64_encoded=false&fields=*`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-RapidAPI-Key': key,
              'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
            },
            body: JSON.stringify({
              source_code: sourceCode,
              language_id: Number(languageId),
              stdin: stdinInput,
              expected_output: expectedOutput
            })
          }
        );

        // Catch HTTP error status codes
        if (!response.ok) {
          const errData = await response.json().catch(() => ({}));
          throw new Error(errData.message || `Judge0 API returned HTTP ${response.status}`);
        }

        const data = await response.json();
        const statusMeta = parseStatus(data.status?.id);

        const actualOutput = data.stdout ? data.stdout.trim() : '';
        const errorOutput = data.stderr || data.compile_output || data.message || '';

        return {
          testCaseIndex: i + 1,
          input: testCase.input,
          expected: testCase.expected,
          actual: actualOutput,
          passed: data.status?.id === 3,
          statusLabel: statusMeta.label,
          memory: data.memory ? `${data.memory} KB` : 'N/A',
          executionTime: data.time ? `${data.time}s` : 'N/A',
          error: errorOutput
        };
      } catch (err) {
        return {
          testCaseIndex: i + 1,
          input: testCase.input,
          expected: testCase.expected,
          actual: '',
          passed: false,
          statusLabel: 'Execution Error',
          error: err.message || 'Network Error'
        };
      }
    })
  );

  return results;
}