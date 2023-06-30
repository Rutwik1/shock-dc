import React from 'react';
import './RightDownPart.css';

const RightDownPart = () => {

  const imagePath1 = 'https://i.ibb.co/cXTqFrb/who-s-denilo-8-QA9-JNZ4-Wgc-unsplash.jpg';
  const imagePath2 = 'https://i.ibb.co/VJn5QGh/2.jpg';

  return (
    <>
      <section className='container-right'>

        <div className='line-container-1'>
          <div className='line'></div>
        </div>

        <div className='container-1'>
          <div className='num-1'>
            <h1>01</h1>
          </div>

          <div className='image-containers'>
            <div className='image-circle-1'>
              <img src={imagePath1} alt='My Photo1' />
            </div>
          </div>

          <div className='para-1'>
            <p>The tides of the fashion<br />industry's movement</p>
          </div>

          <div className='date-1'>
            <p>/2022</p>
          </div>
        </div>

        <br />

        <div className='line-container-2'>
          <div className='line'></div>
        </div>

        <div className='container-1'>
          <div className='num-1'>
            <h1>02</h1>
          </div>

          <div className='image-containers'>
            <div className='image-circle-2'>
              <img src={imagePath2} alt='My Photo2' />
            </div>
          </div>

          <div className='para-2'>
            <p>Show off your look, reap<br />the real-world rewards</p>
          </div>

          <div className='date-2'>
            <p>/2021</p>
          </div>
        </div>

      </section>
    </>
  );
};

export default RightDownPart;
