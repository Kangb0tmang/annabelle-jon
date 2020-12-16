import React, { useEffect, useRef, useState } from 'react';
import { Box } from 'rebass';

// https://janosh.dev/blog/google-maps+react-hooks

export default function Map({ options, onMount, className, onMountProps }) {
  const ref = useRef();
  const [map, setMap] = useState();

  console.log('maps', process.env.GATSBY_GOOGLE_MAPS_API_KEY);

  useEffect(() => {
    const onLoad = () =>
      setMap(new window.google.maps.Map(ref.current, options));

    if (!window.google) {
      const script = document.createElement(`script`);
      script.src =
        `https://maps.googleapis.com/maps/api/js?key=` +
        process.env.GATSBY_GOOGLE_MAPS_API_KEY;
      document.head.append(script);
      script.addEventListener(`load`, onLoad);
      return () => script.removeEventListener(`load`, onLoad);
    } else onLoad();
  }, [options]);

  if (map && typeof onMount === `function`) onMount(map, onMountProps);

  return (
    <Box
      sx={{ height: ['350px', '', '500px'], m: ['20px', '', '', '20px 0'] }}
      {...{ ref, className }}
    />
  );
}

const venue = { lat: -37.74678130874577, lng: 145.23648631767588 };

function addMarker(map) {
  const marker = new window.google.maps.Marker({
    map,
    position: venue,
  });
  const infoWindow = new google.maps.InfoWindow({
    content: 'Potters Receptions',
  });
  marker.addListener('click', () => {
    infoWindow.open(map, marker);
  });
}

Map.defaultProps = {
  options: {
    center: venue,
    zoom: 15,
  },
  onMount: addMarker,
};
