import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBath, faBed, faArrowsAlt, faCar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export function PropertyListCard({
  id,
  title,
  area,
  bedrooms,
  baths,
  garages,
  address,
  city,
  country,
  price,
  image,
  status,
  type }) {
  const history = useHistory();
  function propertyDetails(id) {   
    history.push('/details', { id })
  }
  return (<>
      <div className="col-xl-4 col-md-6 col-sm-12">
      <div className="single-property-box">
        <div className="property-item">
          <a className="property-img" >
            <img src={image} alt="#" />
          </a>
          <ul className="feature_text">
            <li className="feature_cb"><span> {type}</span></li>
            <li className="feature_or"><span>{status}</span></li>
          </ul>

        </div>
        <div className="property-title-box">
          <h4>{title}</h4>
          <div className="property-location">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <p>  {address}, {city},{country}</p>
          </div>
          <ul className="property-feature">
            <li> <FontAwesomeIcon icon={faBed} />
              <span> {bedrooms} Bedrooms</span>
            </li>
            <li>  <FontAwesomeIcon icon={faBath} />
              <span> {baths} Bath</span>
            </li>
            <li> <FontAwesomeIcon icon={faArrowsAlt} />
              <span> {area} sq ft</span>
            </li>
            <li> <FontAwesomeIcon icon={faCar} />
              <span> {garages} Garage</span>
            </li>
          </ul>
          <div className="trending-bottom">
            <Button onClick={() => propertyDetails(id)} >Details</Button>
            <a className="trend-right float-right">
              <div className="trend-open">
                <p><span className="per_sale">starts from</span>${price}</p>
              </div>
            </a>
          </div>
        </div>
      </div>

    </div>

  </>)
}

