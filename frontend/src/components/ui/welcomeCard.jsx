import Image from "next/image";
import React from "react";

export const WelcomeCard = () => {
  return (
    <div className="w-full bg-Purple text-white py-8 px-10 rounded-2xl flex justify-between">
      <div>
        <h1 className="mb-11 text-[10px] font-normal">DATE</h1>
        <div>
          <p className="font-semibold text-xl">Welcome back, NAME!</p>
          <p className="font-normal text-[12px]">Always stay updated in your student portal</p>
        </div>
      </div>
      <div className="flex">
        <Image alt="" src="/Scholarcap scroll.svg" width={212} height={212} />
        <Image alt="" src="/Backpack.svg" width={119} height={119} />
      </div>
    </div>
  );
};
