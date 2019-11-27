import React from 'react';
import ReactPlayer from 'react-player';

export function PropertyVideo() {
  return (<>
    <div className='col-md-12 mt-4 ' >
      <div className='section-title v1'>
        <h2>Hear from our clients</h2>
      </div>
      <div className='single-testimonial-item mt-2 d-flex justify-content-around'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='testimonial-video mt-4 ml-2'   >
              <ReactPlayer
                url='https://www.youtube.com/watch?v=EFB33r7u4tY'
              />
            </div>
          </div>    
        </div>
      </div>
    </div>
  </>)
}