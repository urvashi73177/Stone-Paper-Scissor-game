// eslint-disable-next-line no-unused-vars
import React from "react";
// import Scoreboard from "../ScoreBoard/Scoreboard";
import PlayerChoice from "../PlayerChoice/PlayerChoice";

const Game = () => {
  return (
    <div
      style={{
        alignItem: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
      className="container"
    >
      <div
        style={{
          alignItem: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <h1>SPS GAME</h1>
      </div>
      {/* <Scoreboard /> */}
      <hr />
      <PlayerChoice />
    </div>
  );
};

export default Game;
