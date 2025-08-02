import React, { useState } from "react";
import img1 from "../assets/dice_1.png";
import img2 from "../assets/dice_2.png";
import img3 from "../assets/dice_3.png";
import img4 from "../assets/dice_4.png";
import img5 from "../assets/dice_5.png";
import img6 from "../assets/dice_6.png";

const diceImages = [img1, img2, img3, img4, img5, img6];

const RoletheDice = () => {
  const [dice1, setDice1] = useState(img1);
  const [dice2, setDice2] = useState(img1);
  const [result, setResult] = useState("");

  const rollDice = () => {
    const num1 = Math.floor(Math.random() * 6);
    const num2 = Math.floor(Math.random() * 6);

    // Animate: Quick shuffle (optional)
    setDice1(diceImages[Math.floor(Math.random() * 6)]);
    setDice2(diceImages[Math.floor(Math.random() * 6)]);

    setTimeout(() => {
      setDice1(diceImages[num1]);
      setDice2(diceImages[num2]);

      if (num1 > num2) {
        setResult("🎉 Player 1 Wins!");
      } else if (num2 > num1) {
        setResult("🎉 Player 2 Wins!");
      } else {
        setResult("🤝 It's a Tie!");
      }
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-red-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-10 text-center">
        🎲 Dice Battle Game
      </h1>

      {/* Dice display */}
      <div className="flex gap-10 items-center justify-center mb-8">
        <div className="flex flex-col items-center">
          <img
            src={dice1}
            alt="Player 1 Dice"
            className="w-32 h-32 transition-transform duration-300"
          />
          <p className="mt-2 text-lg font-semibold text-gray-700">Player 1</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={dice2}
            alt="Player 2 Dice"
            className="w-32 h-32 transition-transform duration-300"
          />
          <p className="mt-2 text-lg font-semibold text-gray-700">Player 2</p>
        </div>
      </div>

      {/* Result */}
      {result && (
        <div className="text-2xl font-bold text-green-700 mb-6">{result}</div>
      )}

      {/* Button */}
      <button
        onClick={rollDice}
        className="bg-black text-white text-lg font-semibold px-10 py-3 rounded-lg shadow hover:bg-gray-900 transition duration-300"
      >
        Roll the Dice
      </button>
    </div>
  );
};

export default RoletheDice;
