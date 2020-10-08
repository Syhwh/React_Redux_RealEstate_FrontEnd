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
import { Container, Row, CardDeck } from 'react-bootstrap';
import Loading from '../NavigationComponent/LoadingComponent';
import './styles.css'

const Home = ({ properties, loading, propertyListFn }) => {

  useEffect(() => {
    propertyListFn();
  }, []);

  if (loading) return <Loading />
  return (<>

    <SearchSection />
    <div className='Home_map'>
      <HomeMapComponent
        properties={properties}
        lat={17.2976735}
        lng={-91.7516232}
        zoom={3} />
    </div>
    <Container>
      <PropertyList />
    </Container>
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