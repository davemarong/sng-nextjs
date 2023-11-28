import React, { useState } from "react";
import { Grossister as GrossisterData } from "@/data/Data";
import LaunchIcon from "@mui/icons-material/Launch";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Link from "next/link";
import Image from "next/image";
import PlaceIcon from "@mui/icons-material/Place";
import SearchIcon from "@mui/icons-material/Search";
const Grossister = () => {
  const [filteredData, setFilteredData] = useState(GrossisterData);
  const handleFilter = (e: any) => {
    const filtered = GrossisterData.filter((item) =>
      item.title
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase())
    );
    setFilteredData(filtered);
  };
  return (
    <div>
      <div className="bg-nature4 bg-cover flex justify-center items-center">
        <div className="backdrop-brightness-50 py-40 px-10 h-full w-full flex gap-20 flex-wrap justify-center">
          <p className="text-4xl lg:text-5xl text-white text-center w-full">
            Våre grossister
          </p>
          <div className="flex flex-wrap justify-center gap-20 max-w-4xl content-start">
            {GrossisterData.map((item) => {
              return (
                <div key={item.title} className="">
                  <Image src={item.logo} height={100} width={100} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center my-16">
        <p className="max-w-xl mx-10 lg:mx-0">
          <span className="text-primary-600 font-bold text-xl">
            Vi har et bredt nettverk{" "}
          </span>
          av pålitelige grossister fra hele landet som utgjør ryggraden i vår
          virksomhet. Disse verdifulle samarbeidspartnerne bidrar til mangfoldet
          og kvaliteten av produktene vi tilbyr. Vi setter stor pris på det
          gjensidige samarbeidet, og sammen streber vi mot felles suksess og
          forbedring. Med dedikerte partnere og et sterkt team arbeider vi for å
          levere kvalitetsprodukter og tjenester, og vi er takknemlige for
          muligheten til å skape positive endringer sammen i Norge.
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        {/* <p className="w-full text-center pb-2">Søk etter våre grossister</p> */}
        <input
          onChange={handleFilter}
          id="Fornavn"
          type="text"
          className="bg-gray-100 border border-gray-300 shadow text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-16 w-full max-w-sm lg:max-w-xl p-2.5 "
          placeholder="Frukt og grønt....."
          required
        />
        {/* <SearchIcon className="text-5xl" /> */}
      </div>
      <div className="flex flex-wrap justify-evenly m-16 gap-16 lg:gap-10 lg:m-20">
        {filteredData.map((item) => {
          return (
            <div
              key={item.id}
              className="w-80 lg:w-96 gap-10 lg:my-10 leading-10 rounded flex items-start"
            >
              <div className="">
                <div className="font-medium text-lg text flex justify-between items-center gap-2">
                  <Link
                    href={item.website}
                    target="_blank"
                    className="flex items-center"
                  >
                    <p className="hover:underline">
                      {item.title}&ensp;
                      <LaunchIcon fontSize="small" />
                    </p>
                    &ensp;
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <AlternateEmailIcon
                    fontSize="small"
                    className="text-gray-400"
                  />
                  <p className="text-gray-500">{item.email}</p>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneIcon fontSize="small" className="text-gray-400" />
                  <p className="text-gray-500">{item.phone} </p>
                </div>
                <div className="flex flex-col gap-2 leading-6">
                  <div className="flex items-center gap-2">
                    <PlaceIcon fontSize="small" className="text-gray-400" />
                    <address className="text-gray-500">{item.address},</address>
                  </div>
                  <div className="flex items-center gap-2">
                    <HomeIcon fontSize="small" className="opacity-0" />
                    <address className="text-gray-500">
                      {item.city} - {item.postCode}
                    </address>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <Image src={item.logo} height={100} width={100} alt="" />
              </div>
            </div>
          );
        })}
        {filteredData.length == 0 && (
          <p className="text-lg">Vi finner ingen grossister her...</p>
        )}
      </div>
      <hr className="w-64 h-1 mx-auto my-4 bg-primary-500 border-0 rounded md:my-10" />
      <p className="text-center text-lg pb-4">
        Vi har grossister over hele landet. Sjekk ut på kartet!
      </p>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5044034.583557927!2d8.640902270374413!3d65.39755676701569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x461268458f4de5bf%3A0xa1b03b9db864d02b!2sNorway!5e0!3m2!1sen!2sno!4v1700776252418!5m2!1sen!2sno"
          width="800"
          height="600"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        ></iframe>
      </div>
    </div>
  );
};

export default Grossister;
