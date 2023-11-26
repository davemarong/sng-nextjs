import PrimaryButton from "@/components/buttons/PrimaryButton";
import ContactForm from "@/components/form/ContactForm";
import MapContainer from "@/components/maps/MapContainer";
import React from "react";

const Kontakt = () => {
  return (
    <div>
      <div className="bg-nature3 bg-cover h-600 w-full flex justify-center items-center flex-col">
        <div className="backdrop-brightness-50 h-full w-full flex justify-center items-center flex-col">
          <h1 className="text-white text-6xl  text-center">Kontakt oss</h1>
        </div>
      </div>
      <div className="flex bg-gray-100">
        <div className="flex-1 flex flex-col gap-16 justify-start items-center mt-10">
          <p className="">Ønsker du å....</p>
          <ul className="flex flex-col gap-20 ">
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
        <div className="relative flex-1 flex justify-end mr-40 h-800 bg-gray-100">
          <div className="-top-24 absolute w-full max-w-2xl p-12 ml-12 bg-white border border-gray rounded-lg shadow-2xl ">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d999.5184794055504!2d10.79025962603453!3d59.931528895054086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e482f38f9e3%3A0xce54a44c02387a56!2sKanonhallveien%2012%2C%200585%20Oslo!5e0!3m2!1sen!2sno!4v1700596105593!5m2!1sen!2sno"
            width="800"
            height="600"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex flex-1 flex-col items-center mt-60 gap-10">
          <p className="text-center text-4xl font-semibold">
            SNG - Scandinavian Nazar Group
          </p>
          <p>follkets gate 24</p>
          <p>Oslo, 0585</p>
          <p>978 435 24</p>
          <p>sng@sng.com</p>
        </div>
      </div>
    </div>
  );
};
export default Kontakt;
