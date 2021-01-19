import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { loginUser } from '../../src/3-Ducks/userReducer';



function Register(props) {
    const history = useHistory()
    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    function sendUserInfo(e) {
        e.preventDefault();
        if (!usernameInput.includes('@')) {
            alert('Please input a valid email address')
        } else {
            axios
                .post('/auth/register', {
                    email: usernameInput,
                    password: passwordInput
                })
                .then((res) => {
                    console.log('login js loginUser complete')
                    history.push('/dashboard')
                    props.loginUser(res.data.user_id)
                }).catch(err => console.log(err))
        }

    }

    return (
        <div className='auth'>
            <div className='container'>
                <p className="title">Let's get started!</p>
                <form
                    onSubmit={(e) => sendUserInfo(e)}
                    className='form'>
                    <div className='inputs-box' id='trump'>
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
                    </div>
                    <button
                        type='submit'
                        className="go">
                        Go!
                    </button>
                </form>
            </div>
        </div>
    )
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, { loginUser })(Register)