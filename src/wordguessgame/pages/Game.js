import React, { useState, useEffect } from "react";
import words from "../data/words.json";
import WordDisplay from "../components/WordDisplay";
import "./Game.css";

function Game() {

  const [word, setWord] = useState("");
  const [level, setLevel] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [keyboardColors, setKeyboardColors] = useState({});

  useEffect(() => {

    const selectedLevel = localStorage.getItem("level");
    setLevel(selectedLevel);

    const levelWords = words[selectedLevel];
    const randomWord =
      levelWords[Math.floor(Math.random() * levelWords.length)];

    setWord(randomWord.toLowerCase());

    if (selectedLevel === "easy") setAttempts(5);
    if (selectedLevel === "medium") setAttempts(6);
    if (selectedLevel === "hard") setAttempts(7);

  }, []);

  const handleSubmit = (e) => {

    e.preventDefault();

    if (currentGuess.length !== word.length) {
      alert("Word must be " + word.length + " letters");
      return;
    }

    const result = [];
    const newKeyboard = { ...keyboardColors };

    for (let i = 0; i < word.length; i++) {

      if (currentGuess[i] === word[i]) {
        result.push("green");
        newKeyboard[currentGuess[i]] = "green";
      }

      else if (word.includes(currentGuess[i])) {
        result.push("yellow");

        if (newKeyboard[currentGuess[i]] !== "green") {
          newKeyboard[currentGuess[i]] = "yellow";
        }
      }

      else {
        result.push("red");

        if (!newKeyboard[currentGuess[i]]) {
          newKeyboard[currentGuess[i]] = "red";
        }
      }
    }

    setKeyboardColors(newKeyboard);

    setGuesses([
      ...guesses,
      { word: currentGuess, colors: result }
    ]);

    setCurrentGuess("");

    if (currentGuess === word) {

      localStorage.setItem("result", "You Won 🎉");
      localStorage.setItem("word", word);
      window.location.href = "/result";
    }

    else if (guesses.length + 1 === attempts) {

      localStorage.setItem("result", "Game Over ❌");
      localStorage.setItem("word", word);
      window.location.href = "/result";
    }
  };

  return (

    <div className="game-container">

      <h1 className="level-title">
        Level: {level}
      </h1>

      <p className="attempt-text">
        Attempts Remaining: {attempts - guesses.length}
      </p>

      <WordDisplay
        attempts={attempts}
        word={word}
        guesses={guesses}
      />

      <form onSubmit={handleSubmit} className="input-section">

        <input
          type="text"
          maxLength={word.length}
          value={currentGuess}
          onChange={(e)=>setCurrentGuess(e.target.value.toLowerCase())}
          className="input-box"
          placeholder="Enter word"
        />

        <button className="submit-btn">
          Submit
        </button>

      </form>

      {/* KEYBOARD */}

      <div className="keyboard">

        <div className="keyboard-row">
          {"QWERTYUIOP".split("").map(letter=>(
            <button
              key={letter}
              className="key-btn"
              style={{
                backgroundColor:
                keyboardColors[letter.toLowerCase()] || ""
              }}
            >
              {letter}
            </button>
          ))}
        </div>

        <div className="keyboard-row">
          {"ASDFGHJKL".split("").map(letter=>(
            <button
              key={letter}
              className="key-btn"
              style={{
                backgroundColor:
                keyboardColors[letter.toLowerCase()] || ""
              }}
            >
              {letter}
            </button>
          ))}
        </div>

        <div className="keyboard-row">
          {"ZXCVBNM".split("").map(letter=>(
            <button
              key={letter}
              className="key-btn"
              style={{
                backgroundColor:
                keyboardColors[letter.toLowerCase()] || ""
              }}
            >
              {letter}
            </button>
          ))}
        </div>

      </div>

    </div>
  );
}

export default Game;