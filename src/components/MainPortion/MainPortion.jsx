import React from 'react';
import './MainPortion.css';
import LeftPortion from '../LeftPortion/LeftPortion';
import RightPortion from '../RightPortion/RightPortion';

const MainPortion = () => {
    return (

        <>

            <div className='main_portion'>

                <LeftPortion />
                <RightPortion />

            </div>

        </>
    )
}

export default MainPortion;