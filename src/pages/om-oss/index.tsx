import Image from "next/image";
import React from "react";
const OmOss = () => {
  return (
    <div className="font-sans bg-white text-center flex flex-col justify-center items-center">
      <div className="bg-nature5 bg-black bg-cover h-600 w-full flex justify-center items-center flex-col">
        <div className="backdrop-brightness-50 h-full w-full flex justify-center items-center flex-col">
          <h1 className="text-white text-4xl lg:text-5xl text-center px-10">
            Scandinavian Nasar Group
          </h1>
        </div>
      </div>
      {/* <div className="mx-10 2xl:mx-40">
        <h2 className="text-center text-2xl mt-28 mb-8">
          Scandinavian Nasar Group
        </h2>
        <div className="flex justify-center">
          <p className="max-w-2xl text-center">
            SNG skal være den naturlige partneren for uavhengige etniske
            matgrossister og dermed bidra til utvikling av entreprenørskap
          </p>
        </div>
        <div className="flex-col 2xl:flex-row justify-center flex my-14 gap-16 2xl:my-28 2xl:gap-28 2xl:items-center">
          <Image
            src="/omoss3.jpg"
            height={600}
            width={600}
            alt=""
            className="m-auto rounded"
          />
          <div>
            <h2 className="text-center text-2xl mb-8">Hva gjør SNG?</h2>
            <div className="flex justify-center ">
              <p className="max-w-xl text-center">
                Vår unikhet ligger i å berøre dem som ikke blir sett i markedet.
                Vi tror på våre grossister og ønsker å støtte dem for å nå sitt
                fulle potensiale.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col gap-14 lg:gap-28 my-40 ml-7 lg:flex-row">
        <div className="flex-1">
          <h4 className="text-xl font-medium text-primary-600 text-left max-w-xs">
            Hvorfor SNG?
          </h4>
          <p className="text-left text-gray-500 leading-8 pt-2 text-base max-w-xs">
            Vi <u>identifiserte</u>&nbsp; at det var en rekke grossister som
            ikke var organiserte, disse hadde en fellesnevner;{" "}
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
            frittstående matgrossister. Ved å tilby koordinerte innkjøp søker vi
            å etablere en <u>gruppering</u>&nbsp; som gir våre partnere&nbsp;
            <u>konkurransefordeler og økt lønnsomhet</u>.
          </p>
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-medium text-primary-600 text-left max-w-xs">
            Grossister{" "}
          </h4>
          <p className="text-left text-gray-500 leading-8 pt-2 text-base max-w-xs">
            <u>Historikken</u>&nbsp; viser at våre grossister er viktige for
            storhusholdnings markedet, selv med svekket innkjøps vilkår leverer
            de vekst og gode resultater. Dette tror vi er grunnet deres mindset
            med &nbsp;<u>høye service nivå og entreprenørskap</u>&nbsp; hvor
            kunden er i focus. Dette er noe vi heier på.
          </p>
        </div>
      </div>
    </div>
  );
};
export default OmOss;
