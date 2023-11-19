import PrimaryButton from "@/components/buttons/PrimaryButton";
import ContactForm from "@/components/form/ContactForm";
import React from "react";

const Kontakt = () => {
  return (
    <div>
      <div className="bg-hero1 bg-cover h-600 w-full flex justify-center items-center flex-col">
        <h1 className="text-white text-6xl  text-center">Kontakt oss</h1>
      </div>
      <div className="flex">
        <div className="flex-1 flex flex-col gap-16 justify-start items-center mt-10">
          <p className="text-gray-500">Ønsker du å....</p>
          <ul className="flex flex-col gap-20">
            <li>
              Bli vår <span className="font-bold text-lg">grossist</span>
            </li>
            <li>
              <span className="font-bold text-lg">Handle</span> av oss
            </li>
            <li>
              Starte et<span className="font-bold text-lg"> sammarbeid</span>{" "}
              med oss
            </li>
            <li>
              Eller bare<span className="font-bold text-lg"> lære</span> mer om
              oss
            </li>
          </ul>
        </div>
        <div className="relative flex-1 flex justify-end mr-40 h-800 bg-white">
          <div className="-top-44 absolute w-full max-w-2xl p-12 ml-12 bg-white border border-gray rounded-lg shadow ">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Kontakt;
