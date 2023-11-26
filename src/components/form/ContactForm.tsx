import React, { useState } from "react";
import Loading from "../loading/Loading";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  return (
    <form
      data-netlify="true"
      id="contactForm"
      method="post"
      // method="post"
      // action="https://formsubmit.co/kmarong@hotmail.com"
      className="max-w-4xl gap-6 flex flex-wrap"
    >
      {/* <p className="text-gray-500">Ønsker du å bli en av oss?</p> */}
      <div className="w-full">
        <input
          type="hidden"
          name="_autoresponse"
          value="Her er en kopi fra din melding til SNG"
        />

        <input
          type="hidden"
          name="_subject"
          value="SNG kontakt skjema - melding"
        />

        <input
          type="hidden"
          name="_next"
          value="http://localhost:3000/kontakt"
        />

        <label htmlFor="Fornavn">Fornavn</label>
        <input
          id="Fornavn"
          type="text"
          name="Fornavn"
          className="bg-gray-100 border border-gray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Ola"
          required
        />
      </div>
      <div className="w-full">
        <label htmlFor="Etternavn">Etternavn</label>
        <input
          id="Etternavn"
          name="etternavn"
          type="text"
          className="bg-gray-100 border border-gray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Nordmann"
          required
        />
      </div>
      <div className="w-full">
        <label htmlFor="Bedrift">Bedrift</label>
        <input
          name="bedrift"
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
          name="email"
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
          name="melding"
          rows={10}
          id="Melding"
          className="bg-gray-100 border border-gray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Hei. Jeg vil gjerne..."
          required
        />
      </div>
      {loading && <Loading />}
      <button
        className="transition-colors duration-200 rounded bg-primary-500 text-black hover:bg-primary-700 active:bg-primary-900 hover:text-white border-0 hover:border-0 w-52 h-12 "
        type="submit"
        // onClick={() => {
        // setLoading(true);
        // const form: any = document.getElementById("contactForm");
        // form.submit();
        // }}
      >
        Send melding
      </button>
    </form>
  );
};

export default ContactForm;
