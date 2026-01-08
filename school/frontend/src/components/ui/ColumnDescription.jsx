import React from "react";

export const ColumnDescription = ({
  title,
  description,
  buttonText,
}) => {
  return (
    <div>
      <div className="flex justify-between border-b-2 pt-4 ">
        <span className="w-full font-semibold">{title}</span>
        <span className="w-full text-left font-light">{description}</span>
        <div className="w-full flex justify-end font-semibold">
          {buttonText && (
            <button className="bg-Purple px-7 py-0.5 mb-2 text-white rounded-4xl">
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
