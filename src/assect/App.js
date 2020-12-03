import React from 'react';
import MainMap from '../assect/Maps';


function App() {
    return (
      
        <MainMap
  isMarkerShown1
  googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC4Z5Qz97EWcoCczNn2IcYvaYG0L9pe6Rk`}
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `100vh` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>
      
    );
  }
  
export default App;
