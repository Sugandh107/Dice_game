import React, { useState } from "react";
import img1 from "../assets/dice_1.png";
import img2 from "../assets/dice_2.png";
import img3 from "../assets/dice_3.png";
import img4 from "../assets/dice_4.png";
import img5 from "../assets/dice_5.png";
import img6 from "../assets/dice_6.png";

const RoldDice = ({ resetScore, updateScore, selected, setError }) => {
  const images = [img1, img2, img3, img4, img5, img6];

  const [randomImage, setRandomImage] = useState(images[0]);
  const [showRule, setShowRule] = useState(false);

  const showRandomImage = () => {
    if (selected == null) {
      setError("You have not selected any Number");
      return; // Stop here, don't roll the dice
    }
    setError("");
    const index = Math.floor(Math.random() * images.length);
    setRandomImage(images[index]);

    // Score logic here
    updateScore(index + 1); // Dice number is index + 1 (0-based array)
  };

  const toggleRules = () => {
    setShowRule((prev) => !prev);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-10 space-y-6">
        {/* Dice Image */}
        <div className="flex flex-col items-center">
          <img
            src={randomImage}
            alt="Random"
            onClick={showRandomImage}
            className="w-40 h-40 object-contain cursor-pointer hover:scale-105 transition"
          />
          <p className="mt-2 text-gray-800">Click on Dice to Roll</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          <button
            onClick={resetScore}
            className="px-8 py-1.5 bg-black text-white rounded hover:bg-gray-800 transition"
          >
            Reset Score
          </button>
          <button
            onClick={toggleRules}
            className="px-8 py-1.5 focus:outline-none bg-white border border-black text-black rounded hover:bg-gray-400 transition"
          >
            {showRule ? "Hide Rules" : "Show Rules"}
          </button>
        </div>
      </div>

      {/* Rules Section */}
      {showRule && (
        <div className="mt-4 p-4 bg-red-50 rounded shadow-md text-gray-800 max-w-xl mx-auto">
          <h2 className="text-xl font-bold mb-2">How to play dice game</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li className="text-sm">Rule 1: Select any Number.</li>
            <li className="text-sm">Rule 2: Click on Dice Image.</li>
            <li className="text-sm">
              Rule 3: If your selected number matches the dice number, you get
              that number in points.
            </li>
            <li className="text-sm">
              Rule 4: If you guess wrong, 2 points will be deducted.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default RoldDice;
