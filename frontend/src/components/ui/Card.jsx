"use client";
import Image from "next/image";
import React from "react";

export const Card = ({ image, total, description }) => {
  return (
    <div className="border rounded-2xl w-47.5 py-[18px] shadow-xl">
      <div className="flex mb-3 justify-center">
        <Image alt="" src={image} width={65} height={62} />
      </div>
      <h1 className="text-[13px] text-center font-semibold ">{total}</h1>
      <p className="text-center text-Gray font-normal text-[12px]">{description}</p>
    </div>
  );
};
