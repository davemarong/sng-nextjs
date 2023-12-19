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
      <div className="flex flex-col gap-14 xl:gap-28 my-40 xl:flex-row">
        <div className="flex-1">
          <h4 className="text-xl font-medium text-primary-600 text-left mx-10 md:mx-20 xl:mx-0  xl:max-w-sm">
            Hvorfor SNG?
          </h4>
          <p className="text-left text-gray-500 leading-8 pt-2 text-base mx-10 md:mx-20 xl:mx-0  xl:max-w-sm">
            Vår reise begynte med en innsikt om at mange dyktige entreprenører i
            bransjen manglet organisering og et dedikert innkjøpsorgan. Dette
            ble vår drivkraft for å etablere SNG og gi dem en representant som
            kunne styrke deres posisjon og bidra til en mer strukturert og
            effektiv forretningsdrift. Vårt mål er å fungere som deres
            representant, styrke deres posisjon og legge til rette for en mer
            strukturert og effektiv forretningsdrift. Gjennom vårt engasjement
            håper vi å skape et miljø der disse dyktige entreprenørene kan
            trives og utvikle seg
          </p>
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-medium text-primary-600 text-left mx-10 md:mx-20 xl:mx-0  xl:max-w-sm">
            Hva gjør SNG?
          </h4>
          <p className="text-left text-gray-500 leading-8 pt-2 mx-10 md:mx-20 xl:mx-0  xl:max-w-sm">
            SNG har som mål å effektivisere innkjøpsprosesser for frittstående
            matgrossister. Ved å tilby koordinerte innkjøp søker vi å etablere
            en gruppering som gir våre partnere betydelige konkurransefordeler
            og økt lønnsomhet. Gjennom vårt dedikerte arbeid med å samordne
            innkjøp legger vi til rette for optimal ressursutnyttelse og
            kostnadseffektivitet.
          </p>
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-medium text-primary-600 text-left mx-10 md:mx-20 xl:mx-0  xl:max-w-sm">
            Våre løfter til grossister{" "}
          </h4>
          <p className="text-left text-gray-500 leading-8 pt-2 text-base mx-10 md:mx-20 xl:mx-0  xl:max-w-sm">
            Historikken viser at våre grossister spiller en avgjørende rolle i
            storhusholdningsmarkedet. Til tross for utfordrende innkjøpsvilkår,
            fortsetter de å levere imponerende vekst og gode resultater. Vi
            mener at deres suksess skyldes et fortreffelig servicenivå og en
            gründermentalitet, hvor kundetilfredshet er i fokus. Vi forplikter
            oss til å gi dem verktøyene og støtten de trenger for å opprettholde
            sin markedsposisjon og bane vei for fremtidig vekst.
          </p>
        </div>
      </div>
    </div>
  );
};
export default OmOss;
