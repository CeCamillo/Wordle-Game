import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.info({ guess });
    setGuess("");
  }

  return (
    <div>
      <form class="guess-input-wrapper" onSubmit={handleSubmit}>
        <label for="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          minLength={5}
          maxLength={5}
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
