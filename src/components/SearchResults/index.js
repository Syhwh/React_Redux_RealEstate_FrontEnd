import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropertyResultCard } from './PropertyResultCard';
import { NotFound } from './NotFound';
import  Loading  from '../NavigationComponent/LoadingComponent';
import { Footer } from '../Footer';
import { Container, Row } from 'react-bootstrap';
function SearchResults({ propertyList, loading }) {
  console.log(propertyList)
  useEffect(() => {


  }, []);

  if (loading) return <Loading/>

  return (<>
    <Container>
      <Row>
        {propertyList.length > 0 ? propertyList.map((
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
        ) => (<>
          <h2>Search Results</h2>
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
        </>)) : <NotFound />}
      </Row>
    </Container>
<Footer/>    
  </>)
}

const mapStateToProps = (store) => {
  return {
    propertyList: store.property.propertySearchResults,
    loading: store.property.loading
  }
}
export default connect(mapStateToProps)(SearchResults)
