import React from "react";

const CardTest = ({ title, content }) => {
  return (
    <div className="bg-gray-200 p-4 m-2 rounded-md flex flex-col w-64 h-32">
      <h3 className="text-lg font-bold">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default CardTest;
