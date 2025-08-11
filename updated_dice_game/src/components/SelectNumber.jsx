import React from "react";

const SelectNumber = ({ score, onSelect, selected, error }) => {
  return (
    <div className="flex justify-between items-center p-8 w-full mx-auto">
      {/* Left Side: Score */}
      <div className="flex flex-col items-center justify-center">
        <div className="text-6xl font-bold text-black mb-4">{score}</div>
        <div className="text-xl text-gray-600">Show Score</div>
      </div>

      {/* Right Side: Number Boxes */}
      <div className="flex flex-col items-end w-1/2">
        {/* ✅ Error message above boxes */}
        {error && (
          <p className="text-red-600 text-sm font-medium mb-2">{error}</p>
        )}
        <div className="flex gap-4 mb-4">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div
              key={num}
              onClick={() => onSelect(num)}
              className={`w-12 h-12 flex items-center justify-center text-xl font-semibold border-2 rounded-md cursor-pointer transition duration-200 
                ${
                  selected === num
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-gray-300 hover:border-black"
                }`}
            >
              {num}
            </div>
          ))}
        </div>
        <div className="text-xl font-bold text-black">Select Number</div>
      </div>
    </div>
  );
};

export default SelectNumber;
