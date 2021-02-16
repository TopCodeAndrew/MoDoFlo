import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxLogoutUser } from '../../src/3-Ducks/userReducer';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

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
            <div className='to-auth'>
                <Link className='link go' to='/login'>
                    LOGIN
                </Link>
                <Link className='link go' to='/register'>
                    REGISTER
                </Link>
            </div>
        )
    }

    function LoggedIn() {
        return (
            <div className='to-auth'>
                <Link className='link go' onClick={() => logoutUser()} to='/landing'>
                    LOGOUT
                </Link>
            </div>
        )
    }

    return (
        <div className="header">
            <Link to='/' className='title'> MODOFLO</Link>

            <button className='hamburger' onClick={toggleOpen}>Hamburger</button>


            <div className='menu'> {menuToggle ?
                <span className='to-auth'>{!props.isLoggedIn ? notLoggedIn() : LoggedIn()}
                </span>
                :
                null

            }
            </div>


        </div>
    )
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, { reduxLogoutUser })(Header)

