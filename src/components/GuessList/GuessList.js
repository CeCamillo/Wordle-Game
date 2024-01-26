import React from "react";

function GuessList({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map((guess) => (
        <p className="guess" key={crypto.randomUUID()}>
          {guess.split("").map((char) => (
            <span class="cell">{char}</span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default GuessList;
