import React from 'react';

export default function Header() {

    return (
        <div className="header">
            <p className='title'> MODOFLO</p>
            <span className='to-auth'>
                <div className='link'>
                    <p>
                        LOGIN
                    </p>
                </div>
                <div className='link'>
                    <p>
                        REGISTER
                    </p>
                </div>
            </span>
        </div>
    )
}

