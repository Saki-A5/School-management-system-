import { ColumnDescription } from "@/components/ui/ColumnDescription";
import { TitleCard } from "@/components/ui/TitleCard";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex justify-end mr-20">
        <Image alt="" src="/Frame 19.svg" width={65} height={62} />
        <p className="mt-2">Name</p>
      </div>
      <TitleCard description="COURSES"/>
      <ColumnDescription
        title="CSC 401"
        description="Organization of Programming Languages"
      />
      <ColumnDescription
        title="CSC 405"
        description="Artificial Intelligence"
      />
      <ColumnDescription
        title="CSC 407"
        description="Net-Centric Computing"
      />
      <ColumnDescription
        title="CSC 409"
        description="Data Management II"
      />
      <ColumnDescription
        title="CSC 417"
        description="Computer Graphics"
      />
    </div>
  );
};
export default page;
