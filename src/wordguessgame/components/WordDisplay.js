import React from "react";
import "../pages/Game.css";

function WordDisplay({ attempts, word, guesses }) {

  return (
    <div className="grid">

      {Array.from({ length: attempts }).map((_, rowIndex) => {

        const guessRow = guesses[rowIndex];

        return (

          <div key={rowIndex} className="row">

            {Array.from({ length: word.length }).map((_, colIndex) => {

              const letter = guessRow ? guessRow.word[colIndex] : "";
              const colorClass = guessRow ? guessRow.colors[colIndex] : "";

              return (
                <div
                  key={colIndex}
                  className={`box ${colorClass}`}
                >
                  {letter}
                </div>
              );

            })}

          </div>

        );

      })}

    </div>
  );
}

export default WordDisplay;