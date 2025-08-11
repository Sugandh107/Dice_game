import React, { useState } from "react";
import SelectNumber from "./SelectNumber";
import RoldDice from "./RoldDice";

const GamePage = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [error, setError] = useState("");

  const resetScore = () => {
    setScore(0);
  };

  const updateScore = (diceNumber) => {
    if (selectedNumber === null) return;

    if (selectedNumber === diceNumber) {
      setScore((prev) => prev + diceNumber);
    } else {
      setScore((prev) => Math.max(0, prev - 2)); // Prevent negative score
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-red-100">
      <SelectNumber
        score={score}
        onSelect={setSelectedNumber}
        selected={selectedNumber}
        error={error}
      />
      <RoldDice
        resetScore={resetScore}
        updateScore={updateScore}
        selected={selectedNumber}
        setError={setError}
      />
    </div>
  );
};

export default GamePage;
