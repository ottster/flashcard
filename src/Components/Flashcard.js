// Flashcard.js
import React, { useState } from 'react';
import './Flashcard.css'; // Import the CSS file

const Flashcard = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className={`flashcard ${showAnswer ? 'flipped' : ''}`} onClick={toggleAnswer}>
      <div className="flashcard-content">
        <div className="flashcard-front">
          <p>{showAnswer ? answer : question}</p>
        </div>
        <div className="flashcard-back">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;

