export const SUPPORTED_LANGUAGES = [
  {
    id: 63,
    name: 'JavaScript',
    key: 'javascript',
    extension: 'js',
    defaultCode: `function solution(nums, target) {
  // Write your code here
  return [];
}`
  },
  {
    id: 71,
    name: 'Python',
    key: 'python',
    extension: 'py',
    defaultCode: `def solution(nums, target):
    # Write your code here
    return []`
  },
  {
    id: 54,
    name: 'C++',
    key: 'cpp',
    extension: 'cpp',
    defaultCode: `#include <iostream>
using namespace std;

int main() {
    // Write your code here
    return 0;
}`
  },
  {
    id: 62,
    name: 'Java',
    key: 'java',
    extension: 'java',
    defaultCode: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}`
  },
  {
    id: 101,
    name: 'HTML',
    key: 'html',
    extension: 'html',
    defaultCode: `<div class="card">
  <h1 id="title">Counter App</h1>
  <p id="count">0</p>
  <button id="increment-btn">Increment</button>
</div>`
  },
  {
    id: 102,
    name: 'CSS',
    key: 'css',
    extension: 'css',
    defaultCode: `body {
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f4f4f9;
}`
  }
];

export const DEFAULT_WEB_DEV_STARTER = {
  html: `<div class="card">
  <h1 id="title">Counter App</h1>
  <p id="count">0</p>
  <button id="increment-btn">Increment</button>
</div>`,
  css: `body {
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f4f4f9;
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  text-align: center;
}

button {
  padding: 0.5rem 1rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}`,
  js: `let count = 0;
const countEl = document.getElementById('count');
const btn = document.getElementById('increment-btn');

btn.addEventListener('click', () => {
  count++;
  countEl.innerText = count;
});`
};

export default DEFAULT_WEB_DEV_STARTER;