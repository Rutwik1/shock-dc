import React from 'react';
import './RightPortion.css';
import { TfiArrowTopRight } from 'react-icons/tfi';
import RightDownPart from '../RightDownPart/RightDownPart';


const RightPortion = () => {
    const imagePath = 'https://i.ibb.co/WpTg3zZ/patternnnn.png'


    return (
        <>

            <main className='right-portion'>

                <div className='header-main'>
                    <header className="header">
                        SWITCH UP<br />YOUR DIGITAL<br />CLOTHING
                    </header>
                </div>

                <div className='right-side'>

                    <div className="btn-container">
                        <button className="button">WEAR NOW</button>
                    </div>

                    <div className='arrow-container'>
                        <div className="arrow-icon">
                            <TfiArrowTopRight className='color' fill='black' />
                        </div>
                    </div>

                    <div className='image-container'>
                        <div className="image-rectangle" >
                            <img src={imagePath} alt='My Photo' />
                        </div>
                    </div>

                </div>

                <div>
                    <RightDownPart />
                </div>

            </main >


        </>
    );
};

export default RightPortion;
