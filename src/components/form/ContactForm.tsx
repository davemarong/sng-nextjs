import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";

const ContactForm = () => {
  return (
    <form className="max-w-4xl gap-6 flex flex-wrap">
      <div className="w-full">
        <label htmlFor="Fornavn">Fornavn</label>
        <input
          id="Fornavn"
          type="text"
          className="bg-gray-100 border border-gray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Ola"
          required
        />
      </div>
      <div className="w-full">
        <label htmlFor="Etternavn">Etternavn</label>
        <input
          id="Etternavn"
          type="text"
          className="bg-gray-100 border border-gray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Nordmann"
          required
        />
      </div>
      <div className="w-full">
        <label htmlFor="Bedrift">Bedrift</label>
        <input
          id="Bedrift"
          type="text"
          className="bg-gray-100 border border-gray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Bedriftsnavn"
          required
        />
      </div>
      <div className="w-full">
        <label htmlFor="Email">Email</label>
        <input
          id="Email"
          type="email"
          className="bg-gray-100 border border-gray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="ola@bedriftsnavn.no"
          required
        />
      </div>
      <div className="w-full">
        <label htmlFor="Melding">Melding</label>
        <textarea
          rows={10}
          id="Melding"
          className="bg-gray-100 border border-gray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Hei. Jeg vil gjerne..."
          required
        />
      </div>
      <PrimaryButton>Send inn</PrimaryButton>
    </form>
  );
};

export default ContactForm;
