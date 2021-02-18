import React, { useState } from 'react';
import photo from '../images/Simple-Laptop-banner.jpeg';
import arrow from '../images/down-arrow.png';
import { motion } from 'framer-motion';
import laptopGuy from '../images/laptop-guy.jpg'

export default function Landing() {
    const [yPosition, setYPosition] = useState(0)

    function handleScrollClick(yCoordinate) {
        for (let i = window.scrollY; i <= yCoordinate; i++) {
            setTimeout(() => (window.scroll(0, i)), i * 2);
        }
    }


    return (
        <div className='landing'>
            <span className='top-photo'>
                <img className='laptop-photo' src={photo} alt='simple laptop' />

                <span className='title'>
                    <motion.div
                        id='doing'
                        animate={{ y: 50, opacity: 1, scale: 1.3 }}
                        transition={{ ease: "easeOut", delay: .3, duration: 3.2 }}
                    > make doing</motion.div>
                    <motion.p
                        id='simple'
                        animate={{ y: -50, opacity: 1, color: "white" }}
                        transition={{ ease: "easeOut", delay: 2, duration: 2.5 }}>
                        S I M P L E
                    </motion.p>
                </span>
                <motion.img
                    className='down-arrow'
                    animate={{ y: 15, opacity: .8 }}
                    transition={{ yoyo: Infinity, ease: "easeOut", delay: 4, duration: .5 }}
                    src={arrow}
                    alt='down-arrow'
                    onClick={() => handleScrollClick(450)} />
            </span>
            <div className='about'>
                <h1>How it Works:</h1>
                <div>
                    <span>
                        <p>1. Register for an account</p>
                        <p>2. Create a project</p>
                        <p>3. Start a work/ break session</p>
                    </span>

                    <img className='laptop' src={laptopGuy} />
                </div>
            </div>
        </div>
    )
}