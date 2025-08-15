"use client";

import React, { useEffect, useRef } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 34.06483462698078,
  lng: 73.3662371965808,
};

const libraries = ["places"];

export default function SimpleMap() {
  const mapRef = useRef(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={17}
      options={{
        disableDefaultUI: true,
        zoomControl: true,
        draggable: true,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        keyboardShortcuts: false,
      }}
      onLoad={(map) => (mapRef.current = map)}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}