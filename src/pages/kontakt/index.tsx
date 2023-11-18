import React from "react";

const Kontakt = () => {
  return (
    <div>
      <div className="bg-hero1 bg-black bg-cover h-600 w-full flex justify-center items-center flex-col">
        <h1 className="text-white text-6xl  text-center">Kontakt oss</h1>
      </div>
      <form className="max-w-2xl">
        <div>
          <label htmlFor="Fornavn">Fornavn</label>
          <input
            id="Fornavn"
            type="text"
            className="bg-lightest-gray border border-gray text-darkest-gray text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Ola"
            required
          />
        </div>
        <div>
          <label htmlFor="Etternavn">Etternavn</label>
          <input
            id="Etternavn"
            type="text"
            className="bg-lightest-gray border border-gray text-darkest-gray text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Nordmann"
            required
          />
        </div>
        <div>
          <label htmlFor="Bedrift">Bedrift</label>
          <input
            id="Bedrift"
            type="text"
            className="bg-lightest-gray border border-gray text-darkest-gray text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Bedriftsnavn"
            required
          />
        </div>
        <div>
          <label htmlFor="Email">Email</label>
          <input
            id="Email"
            type="text"
            className="bg-lightest-gray border border-gray text-darkest-gray text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="ola@bedriftsnavn.no"
            required
          />
        </div>
        <div>
          <label htmlFor="Melding">Melding</label>
          <input
            id="Melding"
            type="text"
            className="bg-lightest-gray border border-gray text-darkest-gray text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Hei. Jeg vil gjerne..."
            required
          />
        </div>
      </form>
    </div>
  );
};
export default Kontakt;
