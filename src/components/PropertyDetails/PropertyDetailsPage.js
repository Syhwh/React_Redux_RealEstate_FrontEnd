import React from 'react';
import { Gallery } from './Gallery';
import MapComponent from '../MapComponent';
import { Footer } from '../Footer';
export function PropertyDetailsPage({
  title,
  price,
  description,
  status,
  type,
  details,
  location,
  amenities,
  gallery,
  vendor,
}) {
  
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 col-sm-12 mt-4 mb-4'>
            <header className="property-title">
              <h1>{title}</h1>
            </header>
            <div className='mb-4'>
              <Gallery imagesArray={gallery} />
            </div>
          </div>
          <div className='col-md-4 col-sm-12 mt-4'>
            <section id="quick-summary" className="clearfix">
              <header><h2>Quick Summary</h2></header>
              <dl>
                <dt>Location</dt>
                <dd>{location.address}</dd>
                <dt>Price</dt>
                <dd><span className="tag price">${price}</span></dd>
                <dt>Property Type:</dt>
                <dd>{type}</dd>
                <dt>Status:</dt>
                <dd>{status}</dd>
                <dt>Area:</dt>
                <dd>{details.area} m<sup>2</sup></dd>
                <dt>Beds:</dt>
                <dd>{details.bedrooms}</dd>
                <dt>Baths:</dt>
                <dd>{details.bathrooms}</dd>
                <dt>Garages:</dt>
                <dd>{details.garages}</dd>
              </dl>
            </section>
          </div>
        </div>
        <div className="col-md-8 col-sm-12">
          <section id="description">
            <header><h2>Property Description</h2></header>
            <p>
              {description}</p>

          </section>
          <section id="property-features">
            <header><h2>Property Features</h2></header>
            <ul>
              {amenities.length > 0 && amenities.map((element, index) => {
                if (element.value) {
                  return <li key={index} >{element.label}</li>

                }
              })}
            </ul>
          </section>

          <section id="property-map">
            <header><h2>Map</h2></header>
            <div className="property-detail-map-wrapper">
              aqui va el mapa
          <MapComponent
                title={title}
                lat={location.coordenates[0].lat}
                lng={location.coordenates[0].lng}
                zoom={10} />
            </div>
          </section>


        </div>

      </div>
      {/* <Footer /> */}
    </>
  )
}


