import Image from "next/image";
import React from "react";

const Banner3 = () => {
  return (
    <div className="py-28 bg-primary-100 ">
      <h2 className="text-center text-primary-700 text-4xl pb-16">
        Vi er her for deg
      </h2>
      <div className="flex flex-col items-center lg:flex-row lg:items-stretch justify-center gap-10">
        <Image src="/teamwork.jpg" width={600} height={600} alt="Logo" />
        <Image src="/meetingdesk.jpg" width={600} height={600} alt="Logo" />
      </div>
    </div>
  );
};

export default Banner3;
