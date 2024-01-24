import React from "react";

function GuessInput({ guessList, setGuessList }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.info({ guess });
    setGuess("");

    setGuessList([...guessList, guess]);
  }

  return (
    <div>
      <form class="guess-input-wrapper" onSubmit={handleSubmit}>
        <label for="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          maxLength={5}
          minLength={5}
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
