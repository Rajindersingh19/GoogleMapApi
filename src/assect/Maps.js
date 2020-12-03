import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>

  <GoogleMap
    defaultZoom={6}
    defaultCenter={{ lat: 28.613309, lng: 77.209616 }}
  >
    <Marker position={{ lat: 28.613309, lng: 77.209616 }} />
    
  </GoogleMap>
))


export default MyMapComponent;