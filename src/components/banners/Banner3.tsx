import Image from "next/image";
import React from "react";

const Banner3 = () => {
  return (
    <div className="h-800 bg-light-gray">
      <h2 className="text-center text-3xl pt-32 pb-16">Vi er her for deg</h2>
      <div className="flex justify-center gap-10">
        <Image src="/desk.jpg" width={600} height={600} alt="Logo" />
        <Image src="/meetingdesk.jpg" width={600} height={600} alt="Logo" />
      </div>
    </div>
  );
};

export default Banner3;
