import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import React from 'react';
import { MAP_API_KEY } from '../../../constants';
import company from '../../../constants/company';
const MapComponent = () => {
  return (
    <div>
      <APIProvider apiKey={MAP_API_KEY}>
        <Map
          style={{ width: '40vw', height: '40vh' }}
          defaultCenter={{ lat: company.latitude, lng: company.longitude }}
          defaultZoom={3}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        />
        <Marker position={{ lat: company.latitude, lng: company.longitude }} />
      </APIProvider>
    </div>
  );
};

export default MapComponent;
