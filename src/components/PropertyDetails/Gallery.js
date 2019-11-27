import React, { useEffect } from 'react'
import ImageGallery from 'react-image-gallery';

export function Gallery({ imagesArray }) {

  const images = imagesArray.map(({ url }) => { return { original: url,thumbnail:url } })
  return (<>
  <div className='col-md-12 col-sm-12 mt-4 mb-4'>

    <ImageGallery 
    items={images} />
  </div>
  </>);
}




