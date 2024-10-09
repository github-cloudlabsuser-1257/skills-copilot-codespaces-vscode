import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleChange = (event) => {
        setMarkdown(event.target.value);
    };

    const reverseSentence = (sentence) => {
        return sentence
            .split(' ')
            .reverse()
            .join(' ')
            .replace(/^\w/, (c) => c.toUpperCase());
    };

    // Example usage:
    const inputSentence = "hello world";
    const reversedSentence = reverseSentence(inputSentence);
    console.log(reversedSentence); // Output: "World hello"

    const data = [
        { id: 1, name: 'Alice', age: 28 },
        { id: 2, name: 'Bob', age: 34 },
        { id: 3, name: 'Charlie', age: 22 },
    ];

    const names = data.map(person => person.name);
    console.log(names); // Output: ["Alice", "Bob", "Charlie"]
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <textarea
                value={markdown}
                onChange={handleChange}
                rows="10"
                cols="50"
                style={{ width: '100%', marginBottom: '20px' }}
            />
            <div style={{ width: '100%', border: '1px solid #ddd', padding: '10px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}