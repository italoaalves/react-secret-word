import { useState, useRef } from "react";
import "./Game.css";

function Game({
  verifyLetter,
  pickedCategory,
  pickedWord,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letter);
    setLetter("");
    letterInputRef.current.focus();
  };

  return (
    <div className="card">
      <h1>Guess the word</h1>
      <p className="score">Score: {score}</p>
      <h3 className="tip">
        tip: <span>{pickedCategory}</span>
      </h3>
      <p>You have {guesses} guess(es) left.</p>
      <div className="wordContainer">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span className="letter" key={i}>
              {letter}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        )}
      </div>
      <div className="letterContainer">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength="1"
            onChange={(e) => setLetter(e.target.value)}
            required
            value={letter}
            ref={letterInputRef}
          />
          <button>Verify</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>
          Last letters:
          {wrongLetters.map((letter, i) => (
            <span key={i}> {letter}, </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default Game;
