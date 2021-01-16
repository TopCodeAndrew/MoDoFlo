import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxLogoutUser } from '../../src/3-Ducks/userReducer';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Header(props) {
    const history = useHistory()
    console.log('Header Props:', props)

    function logoutUser() {
        axios
            .delete('/api/logout')
            .then(async function wait() {
                await props.reduxLogoutUser()
                history.push(`/`)
            })
    }

    function notLoggedIn() {
        return (
            <div className='to-auth'>
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
            </div>
        )
    }

    function LoggedIn() {
        return (
            <div className='to-auth'>
                <div className='link'>
                    <div onClick={() => logoutUser()} className='go'>
                        LOGOUT
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="header">
            <Link to='/' className='title'> MODOFLO</Link>
            <span className='to-auth'>{!props.isLoggedIn ? notLoggedIn() : LoggedIn()}
            </span>
        </div>
    )
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, { reduxLogoutUser })(Header)

