import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { MapCard } from './MapCard';
function MapComponent(props) {
  const [state, setState] = useState({})
  const { lat, lng, title, zoom } = props
  const mapStyles = {
    width: '100%',
    height: '100%',
  };

  function onMarkerClick(props, marker, e) {
    setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  return (
    <Map
      google={props.google}
      zoom={zoom}
      style={mapStyles}
      initialCenter={{ lat: lat.toString(), lng: lng.toString() }}
    >

      <Marker
        onClick={onMarkerClick}
        title={title || ''}
        name={title}
        position={{ lat: lat.toString(), lng: lng.toString() }} />
      {/* <Marker
        name={'Dolores park'}
        position={{ lat: 37.759703, lng: -122.428093 }} />
      <Marker /> */}
      <InfoWindow
        marker={state.activeMarker}
        visible={true}
      >
        <div>
          <MapCard />
        </div>
      </InfoWindow>
    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_MAPS
})(MapComponent);