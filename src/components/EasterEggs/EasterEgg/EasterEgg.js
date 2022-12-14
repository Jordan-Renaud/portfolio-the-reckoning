import { useState } from "react";
import "./EasterEgg.css";

export default function EasterEgg({ achievementData }) {
  const [currentClue, setCurrentClue] = useState(achievementData.clue1);

  function checkClueNumber(e) {
    e.preventDefault();
    setCurrentClue(
      currentClue === achievementData.clue1
        ? achievementData.clue2
        : achievementData.clue1
    );
  }
  return (
    <button className="EasterEggButton" onClick={checkClueNumber}>
      <span className="clue">{currentClue}</span>
    </button>
  );
}
