import React, { useEffect, useRef, useState } from 'react';
import { Box } from 'rebass';

// https://janosh.dev/blog/google-maps+react-hooks
export default function Map({ options, onMount }) {
  const ref = useRef();
  const [map, setMap] = useState();

  useEffect(() => {
    const onLoad = () =>
      setMap(new window.google.maps.Map(ref.current, options));

    if (!window.google) {
      const script = document.createElement(`script`);
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_GOOGLE_MAPS_API_KEY}&libraries=places`;
      document.head.append(script);
      script.addEventListener(`load`, onLoad);
      return () => script.removeEventListener(`load`, onLoad);
    } else onLoad();
  }, [options]);

  if (map && typeof onMount === `function`) onMount(map);

  return (
    <Box
      sx={{
        height: ['350px', '', '500px'],
        m: ['20px', '', '', '20px 0'],
      }}
      {...{ ref }}
      data-nosnippet="true"
    />
  );
}

const venue = { lat: -37.74678130874577, lng: 145.23648631767588 };

function openInfoWindow(map) {
  const placeId = 'ChIJpROjVcUw1moRLAIKJX6bC1M';
  const service = new google.maps.places.PlacesService(map);
  service.getDetails({ placeId: placeId }, (place, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      console.log(place);
      // service.infowindow.setPosition(place.geometry.location);
      service.infowindow.open();
    }
  });
}

Map.defaultProps = {
  options: {
    center: venue,
    zoom: 16,
  },
  onMount: openInfoWindow,
};
