import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { loginUser } from '../../src/3-Ducks/userReducer';

function Login(props) {
    const history = useHistory()

    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    function sendUserInfo(e) {
        axios
            .post('/api/login', {
                email: usernameInput,
                password: passwordInput
            })
            .then(async function wait(res) {
                await props.loginUser(res.data.user_id)
                history.push('/dashboard')
            }).catch(err => console.log(err))

    }

    return (
        <div className='auth'>
            <div className='container'>
                <p className="title">Welcome Back!</p>
                <form className='inputs-container'>
                    <div className='inputs'>
                        <p>Email:</p>
                        <input
                            autoFocus
                            className='box'
                            onChange={(e) => setUsernameInput(e.target.value)}
                            placeholder='...' />
                    </div>
                    <div className='inputs'>
                        <p>Password:</p>
                        <input
                            className='box'
                            onChange={(e) => setPasswordInput(e.target.value)}
                            placeholder='...' />
                    </div>
                </form>
                <button
                    onClick={(e) => sendUserInfo(e)}
                    className="go">
                    Go!
                </button>
            </div>
        </div>
    )
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, { loginUser })(Login)