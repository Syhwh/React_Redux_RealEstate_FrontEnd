import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropertyResultCard } from './PropertyResultCard';
import { Container, Row } from 'react-bootstrap';
function SearchResults({ propertyList, loading }) {
  console.log(propertyList)
  useEffect(() => {
   
    
  }, []);

  if (loading) return <p>Loading</p>
  return (<>
    <Container>
      <h1>Search Results</h1>
      <Row>
        {propertyList.length > 0 && propertyList.map((
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
            <PropertyResultCard
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
  </>)
}

const mapStateToProps = (store) => {
  return {
    propertyList: store.property.propertySearchResults,
    loading: store.property.loading
  }
}
export default connect(mapStateToProps)(SearchResults)
