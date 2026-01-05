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
      <TitleCard description="SESSION 25/26 PAYMENTS"/>
      <ColumnDescription
        title="School Fees"
        description="To be paid in full before the second semester"
        buttonText="Pay Now"
      />
      <ColumnDescription
        title="Accomodation"
        description="To be paid in full before the second semester"
        buttonText="Pay Now"
      />
      <ColumnDescription
        title="PTCF Levy"
        description="Payment is required before registration"
        buttonText="Pay Now"
      />
      <ColumnDescription
        title="Medical Screening"
        description="Payment is required before registration"
        buttonText="Pay Now"
      />
      <ColumnDescription
        title="College Dues"
        description="Payment is required before registration"
        buttonText="Pay Now"
      />
    </div>
  );
};
export default page;
