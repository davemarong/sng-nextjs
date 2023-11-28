import LightPrimaryButton from "@/components/buttons/LightPrimaryButton";
import OutlinedPrimaryButton from "@/components/buttons/OutlinedPrimaryButton";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import ContactForm from "@/components/form/ContactForm";
import Image from "next/image";
import React, { useState } from "react";

const Kontakt = () => {
  const [copy, setCopy] = useState("Kopier sng@sng.no");
  return (
    <div>
      <div className="bg-nature3 bg-cover h-600 w-full flex justify-center items-center flex-col">
        <div className="backdrop-brightness-50 h-full w-full flex justify-center items-center flex-col">
          <h1 className="text-white text-4xl lg:text-5xl text-center">
            Kontakt oss
          </h1>
        </div>
      </div>
      <div className="flex flex-col bg-gray-100 lg:flex-row">
        <div className="flex-1 flex  flex-wrap justify-center items-center">
          <div className="my-20 lg:mt-0 flex  flex-wrap justify-center">
            {/* <p className="text-lg w-full text-center mb-10">
              Ønsker du å bli en av oss? Send oss en melding med skjema --{">"}
            </p> */}
            <Image
              className="rounded shadow m-auto"
              src="/contact.jpg"
              height={300}
              width={300}
              alt=""
            />
            <p className="text-lg w-full text-center my-10">
              Send oss en mail direkte til{" "}
              <span className="font-bold">sng@sng.no</span>
            </p>

            <button
              className="transition-colors duration-200 rounded border-2 border-primary-500 text-black hover:bg-primary-700 active:bg-primary-900 hover:text-white hover:border-0 w-52 h-12 "
              onClick={() => {
                navigator.clipboard.writeText("sng@sng.no");
                setCopy("Kopiert!");
              }}
            >
              {copy}
            </button>
          </div>
        </div>
        <div className="relative flex-1 flex justify-end lg:mr-40 h-800 bg-gray-100">
          <div className="-top-24 lg:absolute w-full lg:max-w-2xl p-12 m-6 lg:ml-12 bg-white border border-gray rounded-lg shadow-2xl ">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d999.5184794055504!2d10.79025962603453!3d59.931528895054086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e482f38f9e3%3A0xce54a44c02387a56!2sKanonhallveien%2012%2C%200585%20Oslo!5e0!3m2!1sen!2sno!4v1700596105593!5m2!1sen!2sno"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex flex-1 flex-col items-center mt-40 gap-10 mb-12 mx-6">
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
