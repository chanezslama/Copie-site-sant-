import React from 'react';
import { compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const Mapgoogle = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )((props) =>
    <GoogleMap
      defaultZoom={2}
      defaultCenter={{ lat: props.currentlatitude, lng: props.currentlongitude }}
    >
      {props.isMarkerShown && 
      
      <Marker position={{ lat: props.currentlatitude, lng: props.currentlongitude }} 
      onClick={props.onMarkerClick} />}
    </GoogleMap>
  )
  
export default Mapgoogle;