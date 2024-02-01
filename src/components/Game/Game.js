import React from "react";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Guess from "../Guess/Guess";
import { range } from '../../utils';

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(guess) {
    setGuesses([...guesses, guess])
  }
  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
