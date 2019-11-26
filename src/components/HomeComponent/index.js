import React from 'react';
import { SearchSection } from './SearchSection'
import PropertyList from '../PropertyList';
import MapComponent from '../MapComponent';
import { BannerParallax } from './BannerParallax';
import { Testimonials } from './Testimonials';
import { Footer } from '../Footer';
import './styles.css'

export const Home = () => {
  return (<>
    <SearchSection />

    <PropertyList />
    <BannerParallax />
    {/* <MapComponent /> */}
    <Testimonials />
    <Footer />
  </>
  )
}
