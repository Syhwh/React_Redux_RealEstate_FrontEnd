import React from 'react';
import { connect } from 'react-redux';
import { PropertyResultCard } from './PropertyResultCard';
import { NotFound } from './NotFound';
import Loading from '../NavigationComponent/LoadingComponent';
import { Footer } from '../Footer';
import { Container, Row, Breadcrumb } from 'react-bootstrap';
function SearchResults({ propertyList, loading }) {


  if (loading) return <Loading />

  return (<>
    <Container>
      <Row className='mt-2 offset-3'>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Search</Breadcrumb.Item>
        </Breadcrumb>
      </Row>
      <Row>
        <div className='mt-2'>
          <h2>Search Results</h2>
        </div>
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
    <Footer />
  </>)
}

const mapStateToProps = (store) => {
  return {
    propertyList: store.property.propertySearchResults,
    loading: store.property.loading
  }
}
export default connect(mapStateToProps)(SearchResults)
