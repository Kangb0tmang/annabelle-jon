import React, { useEffect, useRef, useState } from 'react';
import { Box } from 'rebass';
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';

// https://medium.com/@allynak/how-to-use-google-map-api-in-react-app-edb59f64ac9d
// https://tomchentw.github.io/react-google-maps/#introduction

const venue = {
  title: "The Wedding Venue: Potter's Receptions",
  location: { lat: -37.74678130874577, lng: 145.23648631767588 },
};

const Map = () => {
  const [selected, setSelected] = useState({});

  const onSelect = (item) => {
    setSelected(item);
  };

  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  return (
    <LoadScript googleMapsApiKey={`${process.env.GATSBY_GOOGLE_MAPS_API_KEY}`}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={16}
        center={venue.location}
      >
        <Marker
          key={'My Marker'}
          position={venue.location}
          onClick={() => onSelect(venue)}
        />
        {selected.location && (
          <InfoWindow
            position={selected.location}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <p>{selected.title}</p>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
