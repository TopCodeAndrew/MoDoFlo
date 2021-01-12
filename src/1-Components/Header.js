import React from 'react';
import { Link } from 'react-router-dom'

export default function Header() {

    return (
        <div className="header">
            <Link to='/' className='title'> MODOFLO</Link>
            <span className='to-auth'>
                <div className='link'>
                    <Link className='go' to='/login'>
                        LOGIN
                    </Link>
                </div>
                <div className='link'>
                    <Link className='go' to='/register'>
                        REGISTER
                    </Link>
                </div>
            </span>
        </div>
    )
}

