import { Button } from "@mui/material";
import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";

const Banner2 = () => (
  <div className="font-sans bg-white py-24 mx-8 text-center flex flex-col justify-center items-center">
    <h3 className="text-2xl">Fra oss kan du nyte følgende</h3>
    <div className="flex flex-col gap-14 lg:gap-28 my-12 ml-7 lg:flex-row">
      <div className="flex-1">
        <h4 className="text-xl font-medium text-primary-600 text-left max-w-xs">
          Hvorfor SNG?
        </h4>
        <p className="text-left text-gray-500 leading-8 pt-2 text-base max-w-xs">
          Vi <u>identifiserte</u>&nbsp; at det var en rekke grossister som ikke
          var organiserte, disse hadde en fellesnevner;{" "}
          <u>dyktige entreprenører</u>&nbsp; som jobbet hardt uten et
          innkjøpsorgan, vi ønsker å <u>representere dem</u>.
        </p>
      </div>
      <div className="flex-1">
        <h4 className="text-xl font-medium text-primary-600 text-left max-w-xs">
          Hva gjør vi?
        </h4>
        <p className="text-left text-gray-500 leading-8 pt-2 max-w-xs">
          SNG har som mål å <u>effektivisere innkjøpsprosesser</u>&nbsp; for
          frittstående matgrossister. Ved å tilby koordinerte innkjøp søker vi å
          etablere en <u>gruppering</u>&nbsp; som gir våre partnere&nbsp;
          <u>konkurransefordeler og økt lønnsomhet</u>.
        </p>
      </div>
      <div className="flex-1">
        <h4 className="text-xl font-medium text-primary-600 text-left max-w-xs">
          Grossister{" "}
        </h4>
        <p className="text-left text-gray-500 leading-8 pt-2 text-base max-w-xs">
          <u>Historikken</u>&nbsp; viser at våre grossister er viktige for
          storhusholdnings markedet, selv med svekket innkjøps vilkår leverer de
          vekst og gode resultater. Dette tror vi er grunnet deres mindset med
          &nbsp;<u>høye service nivå og entreprenørskap</u>&nbsp; hvor kunden er
          i focus. Dette er noe vi heier på.
        </p>
      </div>
    </div>
  </div>
);

export default Banner2;
