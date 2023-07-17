/* eslint-disable no-constant-condition */
/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Scoreboard from "../ScoreBoard/Scoreboard";

// eslint-disable-next-line react/prop-types
export const PlayerChoice = () => {
  const [playersChoice, setPlayersChoice] = useState(null);
  const [computersChoice, setComputersChoice] = useState(null);
  const [result, setResult] = useState(null);

  const PlayerChoice = ["Stone", "Paper", "Scissor"];

  const handleClick = (val) => {
    generateComputerChoice();
    setPlayersChoice(val);
  };

  const generateComputerChoice = () => {
    const randomNum = Math.floor(Math.random() * PlayerChoice.length);
    // const randomChoice = playersChoice[randomNum]
    setComputersChoice(String(PlayerChoice[randomNum]));
    return PlayerChoice[randomNum];
  };

  useEffect(() => {
    finalResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playersChoice, computersChoice]);

  // eslint-disable-next-line no-unused-vars
  const finalResults = () => {
    let concatChoice = String(playersChoice + computersChoice);

    switch (concatChoice) {
      case "ScissorPaper":
      case "StoneScissor":
      case "PaperStone":
        setResult("You Win!!");
        break;

      case "PaperScissor":
      case "StonePaper":
      case "ScissorStone":
        setResult("You Loose!!");
        break;

      case "PaperPaper":
      case "StoneStone":
      case "ScissorScissor":
        setResult("Game Draw!!");
        break;

      default:
        setResult("Let's Start");
        break;
    }
  };
  return (
    <div>
      <div>
        <h3 style={{ marginTop: 50 }}>Choice</h3>
        <h3>The user's choice is : {playersChoice}</h3>
        <h3>The computer's choice is : {computersChoice}</h3>
        {PlayerChoice.map((playerChoice, index) => {
          return (
            <div key={index}>
              <button
                style={{ flexDirection: "row", margin: 5 }}
                onClick={() => handleClick(playerChoice)}
              >
                {playerChoice}
              </button>
            </div>
          );
        })}
      </div>
      <Scoreboard result={result} />
    </div>
  );
};

export default PlayerChoice;
