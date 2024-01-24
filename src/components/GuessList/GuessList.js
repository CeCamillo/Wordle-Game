import React from "react";

function GuessList({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map((guess) => (
        <p className="guess" key={crypto.randomUUID()}>
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessList;
