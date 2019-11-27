import React from 'react';
import { Parallax } from 'react-parallax';

const image1 =
  'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
const insideStyles = {

  padding: 20,
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '80%',

  transform: 'translate(-50%,-50%)'

};

export function BannerParallax() {
  return (<>
    <Parallax
      bgImage={image1}
      strength={500}
      blur={2}>
      <div style={{ height: 500, width: '80%' }}>
        <div style={insideStyles} >
          <h2 style={{ color: '#fff', }}>
            Real Estate is perfect for searching homes
          for sale in the around the world.
          By analyzing real estate information on millions of
          homes for sale and for rent
           </h2>
        </div>
      </div>
    </Parallax>
  </>)
}