import React, { useState } from "react";
import Loading from "../loading/Loading";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fornavn: "",
    etternavn: "",
    bedrift: "",
    email: "",
    melding: "",
  });

  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch("/kontakt/?success=true", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        // Handle success
        console.log("Form submitted successfully");
      } else {
        // Handle error
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };
  return (
    <form
      method="post"
      name="contact"
      action="/"
      className="max-w-4xl gap-6 flex flex-wrap"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      // onSubmit={handleFormSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />

      <div className="w-full">
        <label htmlFor="Fornavn">Fornavn</label>
        <input
          id="Fornavn"
          type="text"
          name="fornavn"
          onChange={handleInputChange}
          value={formData.fornavn}
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
          value={formData.etternavn}
          onChange={handleInputChange}
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
          value={formData.bedrift}
          onChange={handleInputChange}
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
          value={formData.email}
          onChange={handleInputChange}
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
          value={formData.melding}
          onChange={handleInputChange}
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
