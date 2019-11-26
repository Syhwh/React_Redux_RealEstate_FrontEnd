import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPropertyDetails } from '../../redux/actions/propertyActions';
import { PropertyDetailsPage } from './PropertyDetailsPage';
import './Style.css'
import { Footer } from '../Footer';
function PropertyDetails({
  location,
  loading,
  property,
  getPropertyDetails }) {

  console.log('loading: ', loading)
  console.log('property: ', property)

  useEffect(() => {
    if (location.state) {
      const { id } = location.state;
      console.log('id: ', id)
      getPropertyDetails(id);
    }
  }, []);
  if (!property) return <p>Loading</p>

  return (<>
    <PropertyDetailsPage
      loading={loading}
      title={property.propertyTitle}
      price={property.propertyPrice}
      description={property.propertyDescription}
      status={property.propertyStatus}
      type={property.propertyType}
      details={property.propertyDetails}
      location={property.propertyLocation}
      ammenties={property.propertyAmennities}
      gallery={property.propertyGallery}
      vendor={property.propertyUser}
      amenities={property.propertyAmmenities}
    />
   
  </>
  )
}

const mapStateToProps = (store) => {
  return {
    property: store.property.propertyDetails,
    loading: store.property.loading
  }
}
const mapDispatchToProps = { getPropertyDetails }
export default connect(mapStateToProps, mapDispatchToProps)(PropertyDetails)