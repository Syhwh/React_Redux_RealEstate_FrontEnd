import React from 'react';
import { Link, Redirect} from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

export function MapCard({ image, title, info, location, address, id }) {
 
  return (
    <>      
        <Card style={{ width: '16rem' }}>
          <Card.Header>{title}</Card.Header>
          <Card.Img variant="top" src={image[0].url} />
          <Card.Body>
            <Card.Title>{info.type} for {info.status} </Card.Title>
            <Card.Text>
              <div>
                {address}
              </div>
              {location.city},{location.country}
            </Card.Text>
          </Card.Body>
          {/* <Link
            to={{
              pathname: '/details',
              state: { id }
            }}
            className="btn btn-primary"
          > Details</Link> */}

        </Card>

     
    </>
  )
}