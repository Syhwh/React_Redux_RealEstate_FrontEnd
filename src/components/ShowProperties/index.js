import React, { useEffect } from 'react';
import { PropertyCard } from './PropertyCard';
import { connect } from 'react-redux';
import { listProperty } from '../../redux/actions/propertyActions';

function ShowProperties({ listProperty }) {
  useEffect(() => {
    console.log('did mount show')
     listProperty()
  }, []);

  return (<>
    <PropertyCard
      title={title}
      description={description}
    />
  </>)
}
const mapStateToProps = (store) => {
  return {
    property: store.property.data,
    error: store.user.error
  }
}
const mapDispatchToProps = { listProperty }

export default connect(mapStateToProps)(ShowProperties)