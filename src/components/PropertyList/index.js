import React, { useEffect } from 'react';
import { PropertyListCard } from './PropertyListCard';
import { connect } from 'react-redux';
import { propertyList } from '../../redux/actions/propertyActions';
import { Container, Row, CardDeck } from 'react-bootstrap';
import Loading from '../NavigationComponent/LoadingComponent';

export function PropertyListPage({ properties, loading, propertyList }) {
  console.log(properties)
  useEffect(() => {
    propertyList();
  }, []);

  if (loading) return <Loading/>
  return (
    <>
      <Container>
        <h1>Featured Properties</h1>
        <Row>

          {properties.length > 0 && properties.map((
            { _id,
              propertyTitle,
              propertyDescription,
              propertyDetails,
              propertyLocation,
              propertyPrice,
              propertyGallery,
              propertyStatus,
              propertyType,
            
            }
          ) => (
              <PropertyListCard
                key={_id}
                id={_id}
                title={propertyTitle}
                description={propertyDescription}
                area={propertyDetails.area}
                bedrooms={propertyDetails.bedrooms}
                baths={propertyDetails.bathrooms}
                garages={propertyDetails.garages}
                address={propertyLocation.address}
                city={propertyLocation.city}
                country={propertyLocation.country}
                price={propertyPrice}
                image={propertyGallery[0].url}
                status={propertyStatus}
                type={propertyType}
               
              />
            ))}

        </Row>
      </Container>
    </>
  )
}
const mapStateToProps = (store) => {
  return {
    properties: store.property.propertyList,
    loading: store.property.loading
  }
}
const mapDispatchToProps = { propertyList }
export default connect(mapStateToProps, mapDispatchToProps)(PropertyListPage)