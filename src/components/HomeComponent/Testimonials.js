import React from 'react';
import ReactPlayer from 'react-player';

export function Testimonials() {
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
          <div className='col-md-6 ' style={{ marginTop: '5%' }}>
            <div className='testimonial-quote offset-2'>
              <h4>Smith &amp; Sarah Williamson</h4>
              <span>North Carolina, USA</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, dignissimos, delectus? Molestias a deleniti quam quas, ex, expedita necessitatibus quis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>)
}
