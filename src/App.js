// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Flashcard from './Components/Flashcard'; // Import the Flashcard component

const flashcards = [
  { question: 'What is React?', answer: 'React is a JavaScript library for building user interfaces.' },
  { question: 'What is JSX?', answer: 'JSX is a syntax extension for JavaScript used in React to describe the user interface.' },
  { question: 'What is state?', answer: 'State allows managing shifting of data within a component, re-rendering the UI on changes.' },
  { question: 'What are Hooks?', answer: 'Hooks enable using state and React features in functional components without using classes.' },
  { question: 'What is useState?', answer: 'useState is primarily used for managing local state within a component' },
  { question: 'What is useEffect?', answer: 'It`s like a Swiss Army knife for handling actions that occur outside the rendering process.' }
  // Add more flashcards as needed
];

function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    // Hide the header after 5 seconds
    const timer = setTimeout(() => {
      setIsHeaderVisible(false);
    }, 5000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      {isHeaderVisible && <h1>Reactjs Flashcard App</h1>}
      </header>
      <i>Click to flip the card!</i>
        <div className="flashcard-container">
          {flashcards.map((flashcard, index) => (
            <Flashcard key={index} question={flashcard.question} answer={flashcard.answer} />
          ))}
        </div>

    </div>
  );
}

export default App;