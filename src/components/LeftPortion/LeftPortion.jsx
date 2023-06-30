import React from 'react';
import './LeftPortion.css';
import { AiOutlinePlus } from 'react-icons/ai';
import { RxDotFilled } from 'react-icons/rx';


const LeftPortion = () => {

  const imagePath1 = 'https://i.ibb.co/J7zKyKQ/pexels-shvets-production-7533320-1-5rcy-Lr50-G-transformed.png'
  const imagePath2 = 'https://i.ibb.co/RTZmvyB/pawel-czerwinski-v-Bc7xy65us8-unsplash.jpg'
  const imagePath3 = 'https://i.ibb.co/LnpmcJ7/image-5.png'
  const imagePath4 = 'https://i.ibb.co/cYMB8XN/a-design-1.png'


  return (

    <>

      <main className='main_container'>

        <section className='section-1'>

          <div className='block-1'>
            <div className='img-container'>
              <img src={imagePath1} alt='My Photo' className="image1" />
            </div>
            <div className="plus-icon">
              <AiOutlinePlus fill="black" />
            </div>
          </div>

          <div className='block-2'>
            <div className='img-container-2'>
              <div className="dot-icon">
                <RxDotFilled className='dot-icon-1' />
              </div>
            </div>
            <div className='text-b2'>
              <p>BUILD YOUR <br />METAVERSE LOOK</p>
            </div>
          </div>

          <div className='block-3'>
            <div className='img-container-3'>
              <img src={imagePath2} alt='My Photo' className="image3" />
            </div>
          </div>

        </section>

        <section className='section-x'>
          <div className='block-x'>
            <div className='img-container-x'></div>
          </div>
        </section>

        <section className='section-2'>

          <div className='block-4'>
            <div className='img-container-4'>
              <img src={imagePath4} alt='My Photo' className="image4" />
              <p>A'DESIGN AWARD <br />WINNER</p>
            </div>
          </div>

          <div className='block-5'>
            <div className='circle-container'>
              <div className='circle'>
                <div className='image5'>
                  <img src={imagePath3} alt="circle" />
                </div>
              </div>
            </div>
          </div>

          <div className='vertical-line-container'>
            <div className='vertical-line'></div>
            <div className='dot'></div>
            <div className='text-container'>
              <p className='line-text'>Cooperate As <br /><u>Designer</u> / <u>Media</u></p>
            </div>
          </div>

        </section>

      </main>

    </>


  )
}

export default LeftPortion;