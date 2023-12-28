import React from "react";
import CardTest from "./CardTest";

const dummyData = [
  { id: 1, title: "Card 1", content: "Lorem ipsum dolor sit amet." },
  { id: 2, title: "Card 2", content: "Consectetur adipiscing elit." },
  { id: 3, title: "Card 3", content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { id: 4, title: "Card 4", content: "Ut enim ad minim veniam." },
];

const CardTestList = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {dummyData.slice(0, 4).map((card) => (
        <CardTest key={card.id} {...card} />
      ))}
    </div>
  );
};

export default CardTestList;
