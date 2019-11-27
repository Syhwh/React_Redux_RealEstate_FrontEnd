import React, { useState, Fragment } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { MapCard } from './MapCard';
function HomeMapComponent(props) {
  const [state, setState] = useState({
    selectedPlace: null,
    activeMarker: null,
    showingInfoWindow: false,
    activeProperty: false
  })
  const { lat, lng, properties, zoom } = props
  const mapStyles = {
    width: '100%',
    height: '80%',
  };

  function onMarkerClick(props, marker, property) {
    setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      activeProperty: property
    });
  }
  console.log(state.selectedPlace)
  return (
    <Map
      google={props.google}
      zoom={zoom}
      style={mapStyles}
      initialCenter={{ lat: lat.toString(), lng: lng.toString() }}>
      {properties.length > 0 && properties.map((property) => {
        return (
          <Marker key={property._id}
            onClick={(props, marker) => onMarkerClick(props, marker, property)}
            title={property.propertyTitle}
            name={property.propertyTitle}
            position={{
              lat: property.propertyLocation.coordenates[0].lat.toString(),
              lng: property.propertyLocation.coordenates[0].lng.toString()
            }}
          />
        )
      })}

      <InfoWindow
        marker={state.activeMarker}
        visible={state.showingInfoWindow}>
        <div>
          {state.activeProperty &&
            <MapCard
              title={state.activeProperty.propertyTitle}
              image={state.activeProperty.propertyGallery}
              info={{ type: state.activeProperty.propertyType, status: state.activeProperty.propertyStatus }}
              address={state.activeProperty.propertyLocation.address}
              location={{
                city: state.activeProperty.propertyLocation.city,
                country: state.activeProperty.propertyLocation.country
              }}
              id={state.activeProperty._id}
            />}
        </div>
      </InfoWindow>

    </Map >
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_MAPS
})(HomeMapComponent);