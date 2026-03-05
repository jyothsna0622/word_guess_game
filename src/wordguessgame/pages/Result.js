import React from "react";
import "../theme.css";

function Result() {

  const result = localStorage.getItem("result");
  const word = localStorage.getItem("word");

  const playAgain = () => {
    window.location.href = "/";
  };

  return (
    <div className="page-container">

      <div className="card">

        <h1 className="main-title">
          {result}
        </h1>

        <h3>
          Correct Word: {word}
        </h3>

        <button
          className="btn easy"
          onClick={playAgain}
        >
          Play Again
        </button>

      </div>

    </div>
  );
}

export default Result;