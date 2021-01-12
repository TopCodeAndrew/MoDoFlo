import React from 'react';
import photo from '../images/Simple-Laptop-banner.jpeg';

export default function Landing() {

    return (
        <div className='landing'>
            <img className='laptop-photo' src={photo} alt='simple laptop' />

            <span className='title'>
                <p id='doing'> make doing</p>
                <p id='simple'> S I M P L E </p>
            </span>
        </div>
    )
}