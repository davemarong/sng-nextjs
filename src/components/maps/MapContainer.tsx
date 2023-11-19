// MapContainer.js

import React from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

interface MapContainerProps {
  mapOptions: any;
  zoom: number;
}
const MapContainer = ({ mapOptions, zoom }: MapContainerProps) => {
  const mapStyles = {
    height: "800px",
    width: "100%",
  };

  const defaultCenter = {
    lat: 59.9315679, // Replace with your office location latitude
    lng: 10.7912603,
  };
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDwR599ig4tKKZYvU7sdaZukSZNSVlu_PA",
  });
  const center = useMemo(() => defaultCenter, []);

  return (
    <>
      <div>
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap
            mapContainerStyle={mapStyles}
            mapContainerClassName="map-container"
            center={center}
            zoom={zoom}
            options={mapOptions}
          >
            <MarkerF position={defaultCenter} />
          </GoogleMap>
        )}
      </div>
    </>
  );
};

export default MapContainer;
