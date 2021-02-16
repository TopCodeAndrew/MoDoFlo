import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxLogoutUser } from '../../src/3-Ducks/userReducer';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import hamburger from '../images/hamburger.png'

function Header(props) {
    const history = useHistory()
    const [menuToggle, setMenuToggle] = useState(false)

    function logoutUser() {
        axios
            .delete('/auth/logout')
            .then(async function wait() {
                await props.reduxLogoutUser()
                history.push(`/`)
            })
    }

    function toggleOpen() {
        setMenuToggle(!menuToggle);
        console.log(menuToggle)
    }

    function notLoggedIn() {
        return (
            <div className='link-container'>
                <Link onClick={() => setMenuToggle(false)} className='link go' to='/login'>
                    LOGIN
                </Link>
                <Link onClick={() => setMenuToggle(false)} className='link go' to='/register'>
                    REGISTER
                </Link>
            </div>
        )
    }

    function LoggedIn() {
        return (
            <div className='link-container'>
                <Link onClick={() => setMenuToggle(false)} className='link go' onClick={() => logoutUser()} to='/landing'>
                    LOGOUT
                </Link>
            </div>
        )
    }

    return (
        <div className="header">
            <Link to='/' className='title'> MODOFLO</Link>


            <div className='desktop-menu'>
                <span className='to-auth'>{props.isLoggedIn ? LoggedIn() : notLoggedIn()}
                </span>
            </div>



            <div className='mobile'>
                <img src={hamburger} className='hamburger' onClick={toggleOpen} />
                <div className='mobile-menu'> {menuToggle ?
                    <span className='to-auth'>{!props.isLoggedIn ? notLoggedIn() : LoggedIn()}
                    </span>
                    :
                    null
                }
                </div>
            </div>


        </div>
    )
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, { reduxLogoutUser })(Header)

