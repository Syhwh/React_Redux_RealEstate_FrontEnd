import React, { useEffect } from 'react'
import ImageGallery from 'react-image-gallery';

export function Gallery({ imagesArray }) {

  const images = imagesArray.map(({ url }) => { return { original: url } })
  return (<>
  <div className=''>

    <ImageGallery 
    items={images} />
  </div>
  </>);
}




