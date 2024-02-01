import React from "react";

function GuessInput({ handleSubmitGuess }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    handleSubmitGuess(guess)
    setGuess("");
  }

  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          id="guess-input"
          type="text"
          maxLength={5}
          minLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          value={guess}
          onChange={(event) => {
            setGuess(event.target.value.toUpperCase());
          }}
        />
      </form>
    </div>
  );
}

export default GuessInput;
