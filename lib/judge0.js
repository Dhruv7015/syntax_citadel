import axios from 'axios'

const LANGUAGE_IDS = {
    javascript:63,
    python:71,
};

export const executeCode = async (code, language, testCases) => {
    const languageId = LANGUAGE_IDS[language.toLowerCase()];
    if(!languageId) throw new Error("language not supported");


    const results = [];

    for (const tc of testCases) {
        const sourceCode = `${code} console.log(sum(...${JSON.stringify(tc.input)}));`

        const options = {
            method:'POST',
            url:'https://judge0-ce.p.rapidapi.com/submissions',
            params:{base64_encoded: 'false', wait: 'true'},
            headers: {
                'content-type': 'applications/json',
                'X-RapidAPI-Key':process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
                'X-RapidAPI':'judge0-ce.p.rapidapi.com'
            },

            data: {
                language_id : languageId,
                source_code: sourceCode,
                expected_output: tc.expected.toString()

            }
        };

        try{
            const response = await axios.request(options);
            const {stdout, status, compile_output } = response.data;

            const actualData =stdout ? stdout.trim() : "";
            const passed = actualOutput === tc.expected.toString();


            results.push({
                input: JSON.stringify(tc.output),
                expected:tc.expected,
                received:compile_output || actualOutput || 'Error',
                passes:passed,
                status: status.description


            });

        } catch (error) {
            console.error(error);
            results.push({error: "Execution failed via Judge0 API " })
        }
    }

    return results;
}