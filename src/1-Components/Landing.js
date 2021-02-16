import React from 'react';
import photo from '../images/Simple-Laptop-banner.jpeg';
import arrow from '../images/down-arrow.png';
import { motion } from 'framer-motion';

export default function Landing() {

    return (
        <div className='landing'>
            <span className='top-photo'>
                <img className='laptop-photo' src={photo} alt='simple laptop' />

                <span className='title'>
                    <motion.div
                        id='doing'
                        animate={{ y: 50, opacity: 1, scale: 1.3 }}
                        transition={{ ease: "easeOut", delay: 1, duration: 2.5 }}
                    > make doing</motion.div>
                    <motion.p
                        id='simple'
                        animate={{ y: 50, opacity: 1, color: "white" }}
                        transition={{ ease: "easeOut", delay: 2, duration: 2.5 }}>
                        <motion.div
                            animate={{ color: "white", scale: 1.03 }}
                            transition={{ delay: 3.1, yoyo: 3, duration: .3 }}
                        >
                            S I M P L E
                        </motion.div>
                    </motion.p>
                </span>
                <motion.img
                    className='down-arrow'
                    animate={{ y: 15, opacity: .8 }}
                    transition={{ yoyo: Infinity, ease: "easeOut", delay: 5, duration: .5 }}
                    src={arrow}
                    alt='down-arrow' />
            </span>
            <span className='about'>
                test
            </span>
        </div >
    )
}