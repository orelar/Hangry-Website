import React, { useState } from "react";
import Test from "./Test";

const dummyData = [
  { id: 1, title: "Card 1", content: "Lorem ipsum dolor sit amet." },
  { id: 2, title: "Card 2", content: "Consectetur adipiscing elit." },
  { id: 3, title: "Card 3", content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { id: 4, title: "Card 4", content: "Ut enim ad minim veniam." },
];

const TestList = () => {
  const [startIdx, setStartIdx] = useState(0);

  const showNextCards = () => {
    setStartIdx((prevIdx) => Math.min(prevIdx + 1, dummyData.length - 3));
  };

  const showPreviousCards = () => {
    setStartIdx((prevIdx) => Math.max(prevIdx - 1, 0));
  };

  const visibleCards = dummyData.slice(startIdx, startIdx + 3);

  return (
    <div className="flex flex-wrap justify-center">
      {dummyData.length > 3 && startIdx > 0 && (
        <button
          className="mt-4 mx-2 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={showPreviousCards}
        >
          Show Previous Cards
        </button>
      )}
      {visibleCards.map((card) => (
        <Test key={card.id} {...card} />
      ))}
      {dummyData.length > 3 && startIdx < dummyData.length - 3 && (
        <button
          className="mt-4 mx-2 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={showNextCards}
        >
          Show Next Cards
        </button>
      )}
    </div>
  );
};

export default TestList;
