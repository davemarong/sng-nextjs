import Image from "next/image";
import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
const Reviews = () => {
  return (
    <div className="my-20">
      <h2 className="text-center text-3xl pb-10">Vi tar vare på deg</h2>
      <div className="flex gap-28 flex-col justify-center items-center lg:flex-row">
        <div className="flex flex-col items-center text-center">
          <div className="rounded-full overflow-hidden w-100 h-100">
            <Image
              src="/face1.jpg"
              width={100}
              height={100}
              alt=""
              style={{ border: "2px solid hsl(212, 12%, 72%)" }}
              className="object-cover "
            />
          </div>
          <FormatQuoteIcon />
          <p className="gray-300 max-w-sm py-4">
            Jeg elsker SNG fordi lederne deres er progressive, og de vil alltid
            tilfredsstille mine behov.
          </p>
          <p className="bold">Jonas Anderosn</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="rounded-full overflow-hidden w-100 h-100">
            <Image
              src="/face2.jpg"
              width={100}
              height={100}
              alt=""
              style={{ border: "2px solid hsl(212, 12%, 72%)" }}
              className="object-cover "
            />
          </div>
          <FormatQuoteIcon />
          <p className="gray-300 max-w-sm py-4">
            Jeg elsker SNG fordi lederne deres er progressive, og de vil alltid
            tilfredsstille mine behov.
          </p>
          <p className="bold">Jonas Anderosn</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="rounded-full overflow-hidden w-100 h-100">
            <Image
              src="/face3.jpg"
              width={100}
              height={100}
              alt=""
              style={{ border: "2px solid hsl(212, 12%, 72%)" }}
              className="object-cover "
            />
          </div>
          <FormatQuoteIcon />
          <p className="gray-300 max-w-sm py-4">
            Jeg elsker SNG fordi lederne deres er progressive, og de vil alltid
            tilfredsstille mine behov.
          </p>
          <p className="bold">Jonas Anderosn</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
