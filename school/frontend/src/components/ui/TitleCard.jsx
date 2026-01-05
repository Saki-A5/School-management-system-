import React from "react";

export const TitleCard = ({description}) => {
  return (
    <div className="w-full bg-Purple mb-[52px] text-white py-8 px-10 rounded-2xl flex justify-center">
      <h1 className="font-semibold text-2xl">{description}</h1>
    </div>
  );
};
