import React from 'react';
import { Gallery } from './Gallery';
import MapComponent from '../MapComponent';
import { Container, Row, Breadcrumb } from 'react-bootstrap';
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
        <Row className='mt-2 offset-3'>
          <Breadcrumb>
            <Breadcrumb.Item class="breadcrumb-item" href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item class="breadcrumb-item" active>Details</Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <div className='row' >
          <div className='col-md-12 col-sm-12 mt-4 mb-4'>
            <header className="property-title">
              <h1>{title}</h1>
              <h6 className='muted-text'>{location.city}, {location.country}</h6>
            </header>
          </div>
          <div className='col-md-8 col-sm-8 mt-4 mb-4 ' style={{ height: '550px' }}>
            <Gallery imagesArray={gallery} />
          </div>
        </div>
        <div className='row mb-4'>
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
          <div className="col-md-8 col-sm-12" style={{ height: '550px' }}>
            <header><h2>Map Location</h2></header>
            <div className="property-detail-map-wrapper mb-4">
              <MapComponent
                title={title}
                image={gallery}
                info={{ type, status }}
                location={{ city: location.city, country: location.country }}
                address={location.address}
                lat={location.coordenates[0].lat}
                lng={location.coordenates[0].lng}
                zoom={10} />
            </div>
          </div>
        </div>

        <div className='row mt-4'>
          <div className='col-md-5 col-sm-12 mt-2'>
            <header><h2>Property Features</h2></header>
            <ul>
              {amenities.length > 0 && amenities.map((element, index) => {
                if (element.value) {
                  return <li key={index} >{element.label}</li>
                }
              })}
            </ul>
          </div>
          <div className="col-md-7 col-sm-12 mt-2">
            <section id="description">
              <header><h2>Property Description</h2></header>
              <p>
                {description}</p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}


