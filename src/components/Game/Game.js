import React from "react";
import GuessInput from "../GuessInput";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessList from "../GuessList/GuessList";
import Guess from "../Guess/Guess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  return (
    <>
      <GuessList guessList={guessList} />
      <Guess />
      <GuessInput guessList={guessList} setGuessList={setGuessList} />
    </>
  );
}

export default Game;
