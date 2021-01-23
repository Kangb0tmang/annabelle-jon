import React, { useState } from 'react';
import { Box, Text } from 'rebass';
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import { theme } from '../styles/theme';
import marker from '../images/marker.png';

// https://medium.com/@allynak/how-to-use-google-map-api-in-react-app-edb59f64ac9d
// https://tomchentw.github.io/react-google-maps/#introduction

const venue = {
  address:
    '<h2>Potters Receptions</h2><p>321 Jumping Creek Rd</p><p>Warrandyte VIC 3113</p><a href="https://maps.google.com/maps?ll=-37.746879,145.236478&z=15&t=m&hl=en-GB&gl=US&mapclient=apiv3&cid=5984047495981433388" target="_blank">View on Google Maps</a>',
  location: { lat: -37.747048065011704, lng: 145.23653060432648 },
};

const Map = () => {
  const [selected, setSelected] = useState({});

  const onSelect = (item) => {
    setSelected(item);
  };

  const mapStyles = {
    height: '100%',
    width: '100%',
  };

  return (
    <LoadScript googleMapsApiKey={`${process.env.GATSBY_GOOGLE_MAPS_API_KEY}`}>
      <Box
        sx={{
          height: ['350px', '', '500px'],
          m: ['20px', '', '', '20px 0'],
        }}
      >
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={15}
          center={venue.location}
          clickableIcons={false}
        >
          <Marker
            key={'My Marker'}
            position={venue.location}
            icon={marker}
            onClick={() => onSelect(venue)}
          />
          {selected.location && (
            <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <Text
                sx={{
                  h2: {
                    mb: '8px',
                    fontSize: ['15px', '', '17px'],
                  },
                  p: {
                    lineHeight: '16px',
                    '&:last-of-type': {
                      mb: '5px',
                    },
                  },
                  a: {
                    mt: '5px',
                    lineHeight: '16px',
                    textDecoration: 'none',
                    color: theme.colours.lightblue,
                    '&:hover': {
                      textDecoration: 'underline',
                      color: theme.colours.navy,
                    },
                    '&:focus': {
                      textDecoration: 'underline',
                      color: theme.colours.navy,
                    },
                  },
                }}
                dangerouslySetInnerHTML={{ __html: selected.address }}
              />
            </InfoWindow>
          )}
        </GoogleMap>
      </Box>
    </LoadScript>
  );
};

export default Map;
