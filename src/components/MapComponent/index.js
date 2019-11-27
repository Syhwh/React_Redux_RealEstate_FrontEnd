import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { MapCard } from './MapCard';
function MapComponent(props) {
  const [state, setState] = useState({})
  const { lat, lng, title, zoom, image, info, location, address } = props
  const mapStyles = {
    width: '100%',
    height: '80%',
  };

  function onMarkerClick(props, marker) {
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
      center={{ lat: lat.toString(), lng: lng.toString() }}

    >

      <Marker
        onClick={onMarkerClick}
        title={title || ''}
        name={title}
        position={{ lat: lat.toString(), lng: lng.toString() }} />

      <InfoWindow
        marker={state.activeMarker}
        visible={true}
      >
        <div>
          <MapCard
            title={title}
            image={image}
            info={info}
            address={address}
            location={location}
          />
        </div>
      </InfoWindow>
    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_MAPS
})(MapComponent);