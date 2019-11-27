import React, { useEffect } from 'react';
import { SearchSection } from './SearchSection'
import PropertyList from '../PropertyList';
import { connect } from 'react-redux';
import { propertyList as propertyListFn } from '../../redux/actions/propertyActions';
import HomeMapComponent from '../MapComponent/HomeMap';
import { BannerParallax } from './BannerParallax';
import { Testimonials } from './Testimonials';
import { BannerInfo } from './BannerInfo';
import { Footer } from '../Footer';
import Loading from '../NavigationComponent/LoadingComponent';
import './styles.css'

const Home = ({ properties, loading, propertyListFn }) => {
  console.log(properties)
  useEffect(() => {
    propertyListFn();
  }, []);

  if (loading) return <Loading />
  return (<>
    <SearchSection />
    <div style={{ height: '550px' }}>
      <HomeMapComponent
        properties={properties}
        lat={17.2976735}
        lng={-91.7516232}
        zoom={3} />
    </div>
    <PropertyList />
    <BannerParallax />
    <Testimonials />
    <BannerInfo />
    <Footer />
  </>
  )
}
const mapStateToProps = (store) => {
  return {
    properties: store.property.propertyList,
    loading: store.property.loading
  }
}
const mapDispatchToProps = { propertyListFn }
export default connect(mapStateToProps, mapDispatchToProps)(Home)