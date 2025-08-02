import React from "react";
import dices from "../assets/dices.png";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate("/guessnumber");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex">
        {/* Left Half: Image */}
        <div className="w-1/2">
          <img src={dices} alt="Dice" className="w-full h-full -covobjecter" />
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center text-black p-6">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-10">
            🎲 DICE GAME
          </h1>

          <div className="flex flex-col sm:flex-row gap-6">
            <button
              className="bg-black text-white text-md font-semibold px-7 py-2 rounded-lg shadow-md hover:bg-gray-900 hover:scale-105 transition-all duration-300"
              onClick={handleRoute}
            >
              Guess Number
            </button>
            <button
              className="bg-white text-black border border-black text-md font-semibold px-7 py-2 rounded-lg shadow-md hover:bg-gray-100 hover:scale-105 transition-all duration-300"
              onClick={() => navigate("/roledice")}
            >
              Roll the Dice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
