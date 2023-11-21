import React from "react";
import { Grossister as GrossisterData } from "@/data/Data";
import LanguageIcon from "@mui/icons-material/Language";
import LaunchIcon from "@mui/icons-material/Launch";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Link from "next/link";
import Image from "next/image";
import FitbitIcon from "@mui/icons-material/Fitbit";
import DiamondIcon from "@mui/icons-material/Diamond";
import PlaceIcon from "@mui/icons-material/Place";
import MapContainer from "@/components/maps/MapContainer";
const Grossister = () => {
  const bounds = {
    west: 4.6308,
    south: 57.7666,
    east: 31.0586,
    north: 71.1883,
  };

  const mapOptions = {
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
    ],
    restriction: { latLngBounds: bounds, strictBounds: false },
  };

  return (
    <div>
      <div className="bg-hero bg-cover h-500 flex justify-center items-center">
        <p className="text-3xl">Våre grossister</p>
      </div>
      <div className="flex justify-center my-16">
        <p className="max-w-lg mx-10 lg:mx-0">
          Vi har et bredt nettverk av pålitelige grossister fra hele landet som
          utgjør ryggraden i vår virksomhet. Disse verdifulle
          samarbeidspartnerne bidrar til mangfoldet og kvaliteten av produktene
          vi tilbyr. Vi setter stor pris på det gjensidige samarbeidet, og
          sammen streber vi mot felles suksess og forbedring. Med dedikerte
          partnere og et sterkt team arbeider vi for å levere kvalitetsprodukter
          og tjenester, og vi er takknemlige for muligheten til å skape positive
          endringer sammen i Norge.
        </p>
      </div>
      <div className="flex flex-wrap justify-evenly m-16 gap-16 lg:gap-10 lg:m-20">
        {GrossisterData.map((item) => {
          return (
            <div
              key={item.id}
              className="w-80 lg:w-96 lg:p-10 lg:my-10 leading-10 rounded"
            >
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
                <div className="flex items-center">
                  <DiamondIcon fontSize="large" />
                </div>
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
          );
        })}
      </div>
      <MapContainer mapOptions={mapOptions} zoom={5} />
    </div>
  );
};

export default Grossister;
