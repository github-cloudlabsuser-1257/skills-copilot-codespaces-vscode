import Head from 'next/head';
import MarkdownEditor from '../components/MarkdownEditor';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Markdown Editor</title>
        <meta name="description" content="A simple markdown editor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ padding: '20px' }}>
        <h1>Markdown Editor</h1>
        <MarkdownEditor />
      </main>
    </div>
  );
}

function reverseSentence(sentence) {
  // Split the sentence into words, reverse the array of words, and join them back into a string
  let reversed = sentence.split(' ').reverse().join(' ');

  // Capitalize the first letter of the reversed sentence
  reversed = reversed.charAt(0).toUpperCase() + reversed.slice(1);

  return reversed;
}

// Example usage:
const inputSentence = "hello world this is a test";
const reversedSentence = reverseSentence(inputSentence);
console.log(reversedSentence); // Output: "Test a is this world hello"

const data = [
  [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 }
  ],
  [
    { name: 'Bob', age: 40 }
  ]
];

// Flatten the array and extract names
const names = data.flat().map(person => person.name);

console.log(names); // Output: ['John', 'Jane', 'Bob']


